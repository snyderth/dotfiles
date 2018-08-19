var fn_addin = (function (m, $) { var addin = addin || {}; addin.styles=addin.styles||{};addin.styles.style = function(){ return; }; addin.views = addin.views || {}; addin.collect = addin.collect || {}; addin.models = addin.models || {}; addin.templates = addin.templates || {}; addin.templates=addin.templates||{},addin.templates.editClock=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,n,t,a){return'<div class="input-group current-timezone-group">\n\t<label for="current-timezone">Location</label>\n\t<div class="input-wrapper">\n\t\t<input type="text" name="current-timezone" id="current-timezone" class="current-timezone" placeholder="" spellcheck="false">\n\t\t<i class="u--flex-center clear">✕</i>\n\t</div>\n\n\t<div class="dropdown typeahead">\n\t\t<div class="searching">Searching<i>.</i><i>.</i><i>.</i></div>\n\t\t<ul class="dropdown-list"></ul>\n\t\t<div class="not-found">No locations found.</div>\n\t</div>\n</div>\n\n\n<div class="input-group clock-name-group">\n\t<label for="clock-name">Name</label>\n\t<input type="text" name="clock-name" id="clock-name" class="clock-name" placeholder="" spellcheck="false">\n</div>\n\n<div class="input-group create-pinned-group">\n\t<label for="create-pinned">Pin to Dash</label>\n\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n</div>\n\n<div class="metric-edit-controls">\n\t<span class="error-message"><span class="save-error"></span></span>\n\t<span class="button save">Save</span>\n</div>\n'},useData:!0});
addin["styles"] = addin["styles"] || {};
addin["styles"]["style"] = function() { var style = document.createElement('style');style.type = 'text/css';style.innerHTML = '.multiclock{order:3}.multiclock .app{padding:0}.multiclock .current-timezone-group,.multiclock .current-timezone-group .input-wrapper{position:relative}.multiclock .current-timezone{padding-right:18px}.multiclock .typeahead .dropdown-list{display:none}.multiclock .search-loading .typeahead .dropdown-list{padding:0}.multiclock .clear{padding:0 5px;position:absolute;top:-4px;right:-5px;bottom:0;opacity:0;cursor:text;font-size:.8125rem}.multiclock .has-input .clear{opacity:.4;cursor:pointer}.multiclock .has-input .clear:hover{opacity:.8}.multiclock .has-input .clear:active{opacity:1}.multiclock .typeahead .location{margin-right:2px}.multiclock .typeahead .timezone{opacity:.5;font-size:.6875rem;word-break:keep-all}.multiclock .metric-detail .save{margin-top:0}.multiclock .searching{padding:4px 7px;display:none;font-size:87.5%;opacity:.6}.multiclock .search-loading .searching{display:block}.multiclock .search-loading .typeahead{padding:4px 0}.multiclock .search-loading .not-found{display:none}.multiclock .searching i{animation:blink 1.4s infinite both}.multiclock .searching i:nth-child(2){animation-delay:.2s}.multiclock .searching i:nth-child(3){animation-delay:.4s}@keyframes blink{0%,100%{opacity:.2}20%{opacity:1}}';document.getElementsByTagName('head')[0].appendChild(style);};
addin.collect.MultiClocks = m.collect.SyncedCollection.extend({
	initialize: function (options) {
		options  = options || {}
		options.name = 'clocks'
		options.sorted = true
		options.transientProps = ['random', 'selected', 'time', 'unit', 'difference']
		options.model = addin.models.MultiClock
		m.collect.SyncedCollection.prototype.initialize.call(this, options)
	},
	findPinned: function(){
		return this.filter(function (metric) {
			return !metric.get('deleted') && !metric.get('archived') && metric.get('pinned')
		})
	},
	activeItems: function(){
		var models = this.models.filter(function (metric) {
			return !metric.get('deleted')
		})
		var sorted = models
		try {
			sorted = models.sort(compare)
		} catch(e){}
		return sorted
		function compare(a, b) {
			return a.get('currentOffset') - b.get('currentOffset')
		}
	}
})

addin.models.MultiClock = Backbone.Model.extend({
    defaults: function () {
        return {
            name: '',
			deleted: false,
			archived: false,
            serverSetId: false,
            pinned: false,
            random: false
        }
	},

    placeholder: 'Clock',

    getNameOrPlaceholder: function () {
        return this.get('name') || this.placeholder
    },
	initialize: function (options) {
		options = options || {}
		this.idAttribute = this.collection.idAttribute || 'csid'
		Backbone.Model.prototype.initialize.call(this, options)
	},
    getViewData: function() {
    	var time = this.calculateTime()
		return {
			id: this.get('id'),
			pinned: this.get('pinned'),
			nameOrPlaceholder: this.getNameOrPlaceholder(),
			placeholder: this.placeholder,
			timezone: this.get('timeZoneId'),
			time: time.number,
			unit: time.unit,
			tooltip: time.difference,
			metricType: 'Clock',
			archived: this.get('archived'),
			selected: false,
			random: false
		}
    },

	calculateTime: function () {
		var result,
				hour12clock = m.models.customization.get('hour12clock'),
				offset = parseInt(this.get('currentOffset')),
				newTime = this.offsetDate(offset),
				minutes = newTime.getUTCMinutes(),
				hours = newTime.getUTCHours(),
				unit = '',
				number = "" + ((hours > 12 && hour12clock) ? hours - 12 : (hours == 0 ? (hour12clock ? 12 : "00") : (hour12clock ? hours : twoDigit(hours)))),
				difference = this.calculateTimeDifference(newTime)
		number += ':' + twoDigit(minutes)
		if(hour12clock) unit = (hours >= 12) ? "p" : "a";
		result = {
			number: number,
			unit: unit,
			difference: difference
		}
		return result
    },

	calculateTimeDifference: function(newTime) {
		// Note: may want to further refactor to utilize more of functionality within util.js
		var today = new Date(),
				date = today.getDate() == newTime.getUTCDate() ? 'Today' : today.getDate() + 1 == newTime.getUTCDate() ? 'Tomorrow' : 'Yesterday',
				todayTime = today.getTime(),
				newTimeItem = newTime.getTime(),
				newTimeOffset = newTime.getTimezoneOffset() * mConst('dateMsPerMin'),
				newTimeTotal = newTimeItem + newTimeOffset,
				timeDiff = ( newTimeTotal > todayTime ) ? ((newTimeTotal - todayTime)) / mConst('dateMsPerHour') : ((todayTime - newTimeTotal)) / mConst('dateMsPerHour'),
				timeSign = (todayTime > newTimeTotal) ? '-' : '+',
				difference = date + ', ' + timeSign + (timeDiff %1 != 0 ? Math.round(timeDiff * 10) / 10 : Math.round(timeDiff)) + ' hrs'

		return difference
	},

	offsetDate: function(offsetSeconds) {
		d = new Date()
		if (offsetSeconds) d.setUTCSeconds(d.getUTCSeconds() + offsetSeconds)
		return d
	},

    getDetailViewVariables: function () {
		return { timezone: this.timezone, placeholder: this.placeholder }
    },
    togglePinned: function(){
		this.save('pinned', !this.get('pinned'));
	},
	toggleArchive: function(){
		this.save('archived', !this.get('archived'));
	},
	delete: function(){
		this.save('deleted', true)
	}
})

/* Manager class to abstract out logic around countdowns + handle syncing with server */
addin.models.MultiClockManager = Backbone.Model.extend({
	initialize: function () {
		addin.collect.multiClocks = this.collection = new addin.collect.MultiClocks()
		this.collection.fetch({reset: true})
		this.listenTo(m.models.customization, 'change:hour12clock', this.onTimeChange)
		this.listenTo(m.models.date, 'change:date', this.onTimeChange)
	},

	onTimeChange: function () {
		var self = this
		this.collection.models.forEach(function(model){
			var time = model.calculateTime()
			var modelData = {
				time: time.number,
				unit: time.unit
			}
			model.set(modelData, {ignoreRender: true})
		})
	}
})

addin.views.MultiClock = Backbone.View.extend({
	events: {
		"keyup .clock-name": "updateSaveButtonState",
		"click .save": "saveClock",
		"change .clock-timezone": "updateClock",
		"blur .clock-name": "updateSaveButtonState",
		"click .current-timezone-group .clear": "editLocation",
		"click .dropdown-list li": "chooseLocation",
		"click .current-timezone": "showDropdown",
		"keyup .current-timezone": "checkSearch",
		"keydown .current-timezone": "preventDefaultAction",
		"mouseover .dropdown-list li": "updateHover",
		"click .create-pinned-group": "togglePinned"
	},

	initialize: function (options) {
		this.collection = options.collection
		this.parentView = options.parentView
		this.template = addin.templates.editClock
		this.loadingSearch = 0
	},

	render: function (variables) {
		this.variables = variables
		this.$el.html(this.template(variables))
		return this
	},

	showDropdown: function () {
		if (this.$dropdownList.find('li').length) {
			this.$dropdownList.show()
			m.trigger('clock:resize')
		} else this.searchForLocation()
	},

	collectElements: function () {
		this.$app = this.$('.app')
		this.$name = this.$('.clock-name')
		this.$timezone = this.$('.clock-timezone')
		this.$currentTimezone = this.$('.current-timezone')
		this.$save = this.$('.save')
		this.$currentTimezoneGroup = this.$('.current-timezone-group')
		this.$typeAhead = this.$('.typeahead')
		this.$notFound = this.$('.typeahead .not-found')
		this.$dropdownList = this.$('.dropdown-list')
		this.collectedElements = true
	},

	// Update metric and popup to reflect changes in model (covers case where model
	// was changed by this view, and case where model was changed by account sync)
	onChange: function () {
		this.editDetail()
	},

	// For preventing up/down arrow to modify cursor position on input
	preventDefaultAction: function(e) {
		if (e.keyCode === 38 || e.keyCode === 40) e.preventDefault()
	},

	checkSearch: function (e) {
		var self = this
		if(!this.model)
			this.$save.addClass('disabled')
		if (e.keyCode === mConst('keyEscape')) {
			this.revertLocation()
		} else if (e.keyCode === 37 || e.keyCode === 39) {
			return
		} else if (e.keyCode === 9 && e.shiftKey || e.keyCode === 16) {
			this.showDropdown()
			return
		} else if (e.keyCode === mConst('keyReturn')) {
			if (!this.suggestionList || this.suggestionList.length === 0) return
			this.chooseLocation()
		} else if (e.keyCode === 38) {
			if (!this.suggestionList || this.suggestionList.length === 0) return
			this.selected = this.selected === 0 ? (this.suggestionList.length - 1) : (this.selected - 1)
			this.hoverSelected()
		} else if (e.keyCode === 40) {
			if (!this.suggestionList || this.suggestionList.length === 0) return
			this.selected = this.selected === (this.suggestionList.length - 1) ? 0 : (this.selected + 1)
			this.hoverSelected()
		} else {
			var inputLength = this.$currentTimezone.val().trim().length
			this.renderClearIcon()

			var now = new Date().getTime()
			this.triggeredSearchAt = now

			if (inputLength > 2) {
				setTimeout(function () {
					if (now === self.triggeredSearchAt)
						self.searchForLocation()
						self.triggeredOnce = true
				}, self.triggeredOnce ? 300 : 0) // run the first search immediately then throttle the rest
			}

			if (inputLength < 3) {
				this.$dropdownList.empty()
				if (this.$dropdownList.val().trim.length === 0) {
					this.closeDropdown()
				}
				m.trigger('clock:resize')
			}
		}
	},

	closeDropdown: function () {
		this.$dropdownList.hide()
		this.$notFound.removeClass('active')
	},

	revertName: function () {
		this.$name.val(this.model ? this.model.get('name') : '')
		this.$name.blur()
	},

	revertLocation: function () {
		this.suggestionList = null
		this.$currentTimezone.val(this.model ? this.model.get('timeZoneName') : '')
		this.$currentTimezone.blur()
		this.closeDropdown()
		m.trigger('clock:resize')
	},

	searchForLocation: function () {
		var self = this
		var query = this.$currentTimezone.val()
		var comma = query.indexOf(',')
		if (comma >= 0) query = query.substr(0, comma)
		if (query.trim().length === 0) return
		if (this.lastQuery === query) return // prevents back to back identical queries
		this.lastQuery = query

		var url = m.globals.urlRootApi + 'timezones/search'
		this.loadingSearch++
		this.timeout && clearTimeout(this.timeout)
		this.timeout = setTimeout(function() {
			// Only show "Searching..." if the search is taking longer than 300ms
			self.$el.addClass('search-loading')
			m.trigger('clock:resize')
		}, 300)
		$.ajax({
			type: 'GET',
			contentType: 'application/json',
			beforeSend: setMomentumAuthHeader,
			url: url,
			data: {
				name: query.toLowerCase()
			}
		}).done(function (msg, status, xhr) {
			self.loadingSearch--
			self.$notFound.removeClass('active')

			if (msg && self.loadingSearch === 0) {
				self.suggestionList = msg
				self.$dropdownList.empty()
				self.suggestionMap = {}
				var index = 0

				if (self.suggestionList.length === 0) {
					if (self.loadingSearch === 0)
						self.$notFound.addClass('active')

					self.$dropdownList.hide()
					self.$save.addClass('disabled')
					self.timeout && clearTimeout(self.timeout)
					self.$el.removeClass('search-loading')
					m.trigger('clock:resize')
					return
				}

				self.suggestionList.forEach(function(location) {
					self.suggestionMap[location.name] = location
					self.$dropdownList.append('<li data-id=\"' + location.displayName + '\" data-index=' + index + ' data-offset=' + location.currentOffset + '><span class="location">' + location.name + '</span> <span class="timezone">' + location.offsetString + '</span></li>')
					index++
				})
				self.$dropdownList.show()
				self.selected = 0
				self.hoverSelected()
				self.$typeAhead.show()
				self.timeout && clearTimeout(self.timeout)
				self.$el.removeClass('search-loading')
				m.trigger('clock:resize')
			}
		}).fail(function(jqXHR, textStatus) {
			self.loadingSearch--
			self.timeout && clearTimeout(self.timeout)
			self.$el.removeClass('search-loading')
			m.trigger('clock:resize')
		})
	},

	hoverSelected: function() {
		this.hoverById(this.suggestionList[this.selected].displayName)
	},

	hoverById: function(id) {
		this.$dropdownList.find('li').removeClass('hover')
		this.$dropdownList.find('li[data-id="' + id + '"]').addClass('hover')
	},

	chooseLocation: function() {
		this.$save.removeClass('disabled')
		this.selectedTimezone = this.suggestionList[this.selected]
		this.$name.val(this.selectedTimezone.shortName)
		this.$currentTimezone.val(this.selectedTimezone.name)
		this.$name.focus()
		this.updateClock()
	},

	updateHover: function(e) {
		var data = e.currentTarget.dataset
		var timeZoneId = data.id
		this.selected = Number.parseInt(data.index)
		this.hoverById(timeZoneId)
	},

	editLocation: function() {
		this.$typeAhead.hide()
		this.$currentTimezone.val('').focus()
		this.renderClearIcon()
		m.trigger('clock:resize')
	},

	onTimezoneReset: function() {
		if (this.variables)
			this.render(this.variables)
	},

	isFormValid: function () {
		var empty = this.$name.val().trim().length === 0
		return this.$currentTimezone.val().length > 0 && !empty && (this.selectedTimezone || this.model)
	},

	updateSaveButtonState: function (e) {
		this.saveDisabled = !this.isFormValid(e)
		this.$save.toggleClass('disabled', this.saveDisabled)
		if (e && e.keyCode === mConst('keyEscape')) {
			this.revertName()
		} else if (!this.saveDisabled && e && e.keyCode === mConst('keyReturn')) {
			this.update(true, true)
		}
	},

	updateNameOnBlur: function (e) {
		var empty = this.$name.val().trim().length === 0
		if (!empty && this.model) {
			if (this.model.get('name') === this.$name.val()) return
			this.update(true)
		}
	},

	startAdding: function (e) {
		var self = this
		this.resetView()
		this.$('.save').text('Create')
		setTimeout(function () {self.$currentTimezone.focus()}, 250)
	},

	update: function (switchView, force) {
		this.$el.find('.error-message').hide()
		this.closeDropdown()
		m.trigger('clock:resize')
		if (this.model || force)
			this.save(this.model, switchView)
	},

	updateClock: function() {
		this.update()
	},

	saveClock: function () {
		var model
		if(this.$save.hasClass('disabled'))
			return
		if (this.model) {
			model = this.model
			this.save(model, true)
		} else  {
			model = this.save()
		}

		if (model) {
			this.model.set('selected', true)
			this.parentView.highlightSelectedMetric()
		}

	},

	save: function (model, switchView) {
		var emptyName = this.$name.val().trim().length === 0
		var emptyLocation = this.$currentTimezone.val().trim().length == 0
		if (emptyLocation) {
			this.$currentTimezone.focus()
			return
		}
		if (emptyName) {
			this.$name.focus()
			return
		}
		var timezone, timeZoneName, offset
		var name = capitalizeWords(this.$name.val().trim())
		var pinned  = this.$('.toggle-slider').hasClass('on')
		if (this.selectedTimezone) {
			timezone = this.selectedTimezone.id
			timezoneName = this.selectedTimezone.name
			offset = this.selectedTimezone.currentOffset
		} else if (model) {
			timezone = model.get('timeZoneId')
			timezoneName = model.get('timeZoneName')
			offset = model.get('currentOffset')
		}

		var modelData = {
			name: name,
			timeZoneName: timezoneName,
			currentOffset: offset,
			timeZoneId: timezone,
			pinned: pinned
		}
		if (!model) {
			this.model = this.parentView.createMetric(modelData)
			this.$name.val('')
			this.$name.blur()
		} else {
			model.set(modelData, {ignoreRender: true})
			if (switchView) {
				this.parentView.switchToListView()
				this.$name.val('')
				this.$name.blur()
			}
		}
		return model || this.model
	},

	editDetail: function (model) {
		this.resetView()
		this.model = model;
		this.collectElements()
		// Update name in case changed by account sync
		this.$name.val(model.get('name'))
		this.$currentTimezone.val(model.get('timeZoneName'))
		this.$('.toggle-slider').toggleClass('on', model.get('pinned'))
		// Set select options to existing settings
		this.renderClearIcon()
		this.$el.find('.error-message').hide()
		this.updateSaveButtonState()
		var self = this
		setTimeout(function () {self.$name.focus()}, 250)
	},

	renderClearIcon: function () {
		if (this.$currentTimezone.val().trim().length > 0) {
			this.$currentTimezoneGroup.addClass('has-input')
		} else {
			this.$currentTimezoneGroup.removeClass('has-input')
		}
	},

	resetView: function () {
		this.model = null
		this.$el.html(this.template({ placeholder: "multiclock", createMode: true}))
		this.collectElements()
		this.$name.val('')
		this.$el.find('.error-message').hide()
		this.$save.addClass('disabled')
		this.saveDisabled = true
		this.selectedTimezone = null
		this.$notFound.removeClass('active')
	},
	togglePinned: function(e) {
		this.$('.toggle-slider').toggleClass('on')
		this.updateSaveButtonState(e)
	}
})

/* Instantiations */
addin.models.multiClockManager = new addin.models.MultiClockManager()
addin.styles.style()
addin.views.multiClock = m.widgetManager.handover('multiclock', m.views.BaseMetric, {
	model: addin.models.multiClock,
	region: 'top-right',
	order: 'append',
	metricType: 'Clock',
	metricTitle: 'Clocks',
	visibleSetting: 'multiClockVisible',
	defaultShowRandomState: false,
	metricDescription: 'Keep track of time anywhere on Earth',
	collection: addin.collect.multiClocks,
	detailView: addin.views.MultiClock,
	updateInterval:'onWholeMinute'
});
m.widgets.push(addin.views.multiClock)
 }); if(m.addinManager) {m.addinManager.registerAddinFn("dd91d97e-fc83-4fca-b5cb-d89eb2e1dd0d", fn_addin);}