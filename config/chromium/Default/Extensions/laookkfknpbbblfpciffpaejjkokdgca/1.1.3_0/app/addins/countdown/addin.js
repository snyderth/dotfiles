var fn_addin = (function (m, $) { var addin = addin || {}; addin.styles=addin.styles||{};addin.styles.style = function(){ return; }; addin.views = addin.views || {}; addin.collect = addin.collect || {}; addin.models = addin.models || {}; addin.templates = addin.templates || {}; addin.templates=addin.templates||{},addin.templates.editCountdown=Handlebars.template({1:function(t,n,e,a){var o=this.lambda,s=this.escapeExpression;return'\t\t\t\t<option value="'+s(o(t,t))+'">'+s(o(t,t))+"</option>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(t,n,e,a){var o,s;return'<div class="input-group">\n\t<label for="countdown-name">Name</label>\n\t<input type="text" name="countdown-name" id="countdown-name" class="countdown-name" placeholder="'+this.escapeExpression("function"==typeof(s=null!=(s=n.placeholder||(null!=t?t.placeholder:t))?s:n.helperMissing)?s.call(t,{name:"placeholder",hash:{},data:a}):s)+'">\n</div>\n\n<div class="input-group">\n\t<label>Date</label>\n\n\t<div class="select-wrapper">\n\t\t\t<select name="month" id="month" class="month">\n\t\t\t\t<option value="0">Jan</option>\n\t\t\t\t<option value="1">Feb</option>\n\t\t\t\t<option value="2">Mar</option>\n\t\t\t\t<option value="3">Apr</option>\n\t\t\t\t<option value="4">May</option>\n\t\t\t\t<option value="5">Jun</option>\n\t\t\t\t<option value="6">Jul</option>\n\t\t\t\t<option value="7">Aug</option>\n\t\t\t\t<option value="8">Sep</option>\n\t\t\t\t<option value="9">Oct</option>\n\t\t\t\t<option value="10">Nov</option>\n\t\t\t\t<option value="11">Dec</option>\n\t\t\t</select >\n\t\t</div>\n\n\t<div class="select-wrapper">\n\t\t<select name="day" id="day" class="day"></select>\n\t</div>\n\n\t<div class="select-wrapper countdown-year-group">\n\t\t<select name="year" id="year" class="year">\n'+(null!=(o=n.each.call(t,null!=t?t.years:t,{name:"each",hash:{},fn:this.program(1,a,0),inverse:this.noop,data:a}))?o:"")+'\t\t\t<option value="other">Other</option>\n\t\t</select>\n\t</div>\n\n\t<div class="input-group countdown-year-other-group">\n\t\t<input type="text" id="countdown-year-other" name="countdown-year-other" placeholder="yyyy" maxlength="4" class="countdown-year-other">\n\t</div>\n</div>\n\n<div class="option-wrapper add-time u--no-transition">\n\t\t<div class="time-expand">\n\t\t\t<label>Time</label>\n\t\t\t<span class="x-caret u--no-transition">\n\t\t\t\t<svg class="icon x-caret-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.16 11.75"><path d="M52.16,26.08A5.87,5.87,0,0,1,46.29,32H5.88A5.88,5.88,0,0,1,0,26.08H0a5.87,5.87,0,0,1,5.88-5.87H46.29a5.87,5.87,0,0,1,5.87,5.87Z" transform="translate(0 -20.21)"/></svg>\n\t\t\t\t<svg class="icon x-caret-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.16 11.75"><path d="M52.16,26.08A5.87,5.87,0,0,1,46.29,32H5.88A5.88,5.88,0,0,1,0,26.08H0a5.87,5.87,0,0,1,5.88-5.87H46.29a5.87,5.87,0,0,1,5.87,5.87Z" transform="translate(0 -20.21)"/></svg>\n\t\t\t</span>\n\t\t</div>\n\t\t<div class="option-form add-time-wrapper">\n\t\t\t<div class="add-time-group">\n\t\t\t\t<div class="select-wrapper select-hour">\n\t\t\t\t\t<select name="hour" id="hour"></select>\n\t\t\t\t</div>\n\t\t\t\t<span class="hour-punctuation">:</span>\n\n\t\t\t\t<div class="select-wrapper">\n\t\t\t\t\t<select name="minute" id="minute"></select>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="select-wrapper period">\n\t\t\t\t\t<select name="period" id="period">\n\t\t\t\t\t\t<option value="AM">AM</option>\n\t\t\t\t\t\t<option value="PM">PM</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class="input-group create-pinned-group">\n\t<label for="create-pinned">Pin to Dash</label>\n\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n</div>\n\n<div class="metric-edit-controls">\n\t<span class="error-message"><span class="save-error"></span></span>\n\t<span class="button save">Save</span>\n</div>\n'},useData:!0});
addin["styles"] = addin["styles"] || {};
addin["styles"]["style"] = function() { var style = document.createElement('style');style.type = 'text/css';style.innerHTML = '#countdown .time-expand{margin:-5px 0 0 -10px;padding:5px 10px 0;display:inline-block;cursor:pointer;opacity:.8;transition:opacity .3s ease}#countdown .time-expand:hover{opacity:1}#countdown .time-expand label{display:inline-block;text-transform:uppercase;cursor:pointer;opacity:.8}#countdown .x-caret{height:10px;width:10px;position:relative;display:inline-block;transform:translateY(2.5px);transition:transform .5s ease}#countdown .x-caret-left,.x-caret-right{height:7px;width:7px;position:absolute;transition:all .5s ease}#countdown .x-caret.u--no-transition .icon{transition:none}#countdown .x-caret-left{transform:rotate(45deg);left:0}#countdown .x-caret-right{transform:rotate(-45deg);left:4px}#countdown .add-time.active .x-caret{transform:translateY(2.5px)}#countdown .add-time.active .x-caret-left{transform:scale(1.1) skewY(30deg) rotate(200deg);left:2px}#countdown .add-time.active .x-caret-right{transform:scale(1.1) skewY(-30deg) rotate(-200deg);left:2px}';document.getElementsByTagName('head')[0].appendChild(style);};
addin.collect.Countdowns = m.collect.SyncedCollection.extend({
	initialize: function (options) {
		options  = options || {}
		options.name = 'countdown'
		options.sorted = true
		options.transientProps = ['random', 'selected']
		options.model = addin.models.Countdown
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
			return a.getLocalDate() - b.getLocalDate()
		}
	}
})

addin.models.Countdown = Backbone.Model.extend({
	placeholder: 'Countdown',
	nowString: 'Now',
	todayString: 'Today',

	defaults: function () {
		return {
			name: '',
			pinned: false,
			date: new Date(),
			hasHours: false,
			past: false,
			deleted: false,
			archived: false,
			serverSetId: false,
			selected: false,
			random: false
		}
	},
	initialize: function (options) {
		options = options || {}
		this.idAttribute = this.collection.idAttribute || 'csid'
		Backbone.Model.prototype.initialize.call(this, options)
	},
	getNameOrPlaceholder: function () {
		return this.get('name') || this.placeholder
	},

	getDetailViewVariables: function () {
		return { years: this.years, placeholder: this.placeholder }
	},

	getViewData: function () {
		var time = this.formatTime()
		var currentYear = new Date().getFullYear()
		this.lastSelectedYear = currentYear
		// TODO generalize generation of this.years array (2 places) - first need to improve view/model/manager architecture
		this.years = []
		for (var i = currentYear; i < currentYear + 5; i++) this.years.push(i)

		return {
			id: this.get('id'),
			pinned: this.get('pinned'),
			date: this.getLocalDate(),
			tooltip: this.generateDateTooltip(),
			metricType: 'Countdown',
			time: time.number,
			unit: time.unit,
			nameOrPlaceholder: this.getNameOrPlaceholder(),
			placeholder: this.placeholder,
			years: this.years,
			archived: this.get('archived'),
			random: false
		}
	},

	generateDateTooltip: function () {
		var dt = this.getLocalDate(),
				result = m.utils.getFriendlyDate(dt)
		if (this.get('hasHours')) result += ' ' + m.utils.getHoursMinsStr(dt)
		return result
	},

	getLocalDate: function () {
		return m.utils.toLocalTime(this.get('date'))
	},

	formatTime: function () {
		var start = new Date(),
				end = this.getLocalDate(),
				time = this.calculateTimeLeft(start, end),
				hasHours = this.get('hasHours'),
				number,
				unit = '',
				result

		if (time.past !== this.get('past')) this.save('past', time.past, { silent: true })

		// Display in minutes, hours, or days
		if (hasHours && time.minsTot < mConst('dateMinsPerHour')) {
			number = time.minsTot === 0 ? this.nowString : time.minsTot
			unit = 'm'
		} else if (hasHours && time.hoursTot < mConst('dateHoursPerDay')) {
			number = time.hoursTot
			unit = 'h'
		} else {
			number = !hasHours && time.nights === 0 ? this.todayString : time.nights
			unit = 'd'
		}

		// Past times show as '<number> ago' rather than '-<number>'
		if (time.past) unit += ' ago'

		// Now/today cases show with a string message as the number, and no unit
		if (number === this.nowString || number === this.todayString) unit = ''

		result = {
			'number': number,
			'unit': unit
		}

		return result
	},

	calculateTimeLeft: function (start, end) {
		var minsTot = (end - start) / mConst('dateMsPerMin'),
				hoursTot = minsTot / mConst('dateMinsPerHour'),
				nights = m.utils.nightsBetween(start, end, mConst('dateRolloverHour')),
				past = minsTot < 0

		return {
			'nights': Math.abs(nights),
			'hoursTot': Math.abs(Math.ceil(hoursTot)),
			'minsTot': Math.abs(Math.ceil(minsTot)),
			'past': past
		}
	},

	togglePinned: function () {
		this.save('pinned', !this.get('pinned'))
	},

	toggleArchive: function () {
		this.save('archived', !this.get('archived'))
	},

	delete: function () {
		this.save('deleted', true)
	}
})

// Manager class to abstract out logic around countdowns + handle syncing with server
addin.models.CountdownManager = Backbone.Model.extend({
	initialize: function () {
		addin.collect.countdowns = this.collection = new addin.collect.Countdowns()
		this.collection.fetch({ reset: true })
	}
})

addin.views.Countdown = Backbone.View.extend({
	defaultHour: 9, // Hour of the day the hours select box starts at when user is adding a time to a countdown
	clearTimeTimeoutId: null, // Used to improve UX of clearing the time when editing a countdown
	events: {
		'click .time-expand': 'toggleTimeOptions',
		'keydown .countdown-year-other': 'onKeydownCountdownYearOther',
		'change select': 'changeSelect',
		'keyup #countdown-name': 'onKeyupName',
		'paste #countdown-name': 'onPasteName',
		'blur #countdown-name': 'update',
		'change #day': 'updateSaveButtonState',
		'change #year': 'updateYear',
		'change #month': 'updateSaveButtonState',
		'change #period': 'updateSaveButtonState',
		'change #hour': 'updateSaveButtonState',
		'change #minute': 'updateSaveButtonState',
		'change #countdown-year-other': 'onChangeYearOther',
		'click .save': 'saveCountdown',
		"click .create-pinned-group": "togglePinned"
	},

	initialize: function (options) {
		this.collection = options.collection
		this.parentView = options.parentView
		this.template = addin.templates.editCountdown
		this.timeOptionsTimeouts = []

		var currentYear = new Date().getFullYear()
		this.lastSelectedYear = currentYear
		// TODO generalize generation of this.years array (2 places) - first need to improve view/model/manager architecture
		this.years = []
		for (var i = currentYear; i < currentYear + 5; i++) this.years.push(i)
	},

	render: function (variables	) {
		this.$el.html(this.template(variables))
		return this
	},

	collectElements: function () {
		this.$name = this.$('#countdown-name')
		this.$year = this.$('#year')
		this.$yearOther = this.$('#countdown-year-other')
		this.$month = this.$('#month')
		this.$day = this.$('#day')
		this.$addTime = this.$('.add-time')
		this.$addTimeWrapper = this.$('.add-time-wrapper')
		this.$xCaret = this.$('.x-caret')
		this.$hour = this.$('#hour')
		this.$minute = this.$('#minute')
		this.$period = this.$('.period')
		this.$periodOptions = this.$('#period option')
		this.$saveError = this.$('.error-message')
		this.$saveButton = this.$('.save')
	},

	onKeyupName: function (e) {
		if (!this.$name) return

		if (e.keyCode === mConst('keyEscape')) {
			this.revertName()
		} else {
			if (!this.nameIsEmpty() && e.keyCode === mConst('keyReturn')) {
				this.$name.blur()
			}
		}
		this.updateSaveButtonState()
	},

	nameIsEmpty: function () {
		return this.$name.val().trim().length === 0
	},

	revertName: function () {
		this.$name.val(this.model ? this.model.get('name') : '')
		this.$name.blur()
	},

	updateSaveButtonState: function () {
		this.$saveButton.toggleClass('disabled', this.nameIsEmpty())
	},

	onPasteName: function () {
		var self = this
		setTimeout(function () { self.updateSaveButtonState()	}, 0)
	},

	startAdding: function () {
		this.resetView()
		this.$saveButton.text('Create')
	},

	focus: function () {
		this.$name = this.$name || this.$('#countdown-name')
		this.$name.focus()
		this.$name[0].selectionStart = this.$name[0].selectionEnd = this.$name.val().length;
	},

	updateYear: function (e) {
		if (e.currentTarget.value === 'other') {
			var year = this.lastSelectedYear
			this.$yearOther.val(year)
		} else {
			this.lastSelectedYear = parseInt(e.currentTarget.value)
		}
	},

	saveCountdown: function (e) {
		e && e.stopPropagation()
		this.save(this.model || null, true)
	},

	save: function (model, switchView) {

		var name = capitalizeWords(this.$name.val().trim())

		if (name.length === 0) {
			this.parentView.disableBack = true
			return
		} else {
			this.parentView.disableBack = false
		}

		var hasHours = this.$addTime.is('.active'),
				hour = this.setHour(hasHours),
				pinned = this.$('.toggle-slider').hasClass('on')
				dateLocal = new Date(this.getYear(), this.$month.val(), this.$day.val(), hour, this.$minute.val(), 0, 0),
				dateUTC = m.utils.toUTC(dateLocal).toISOString().split('.')[0]+"Z",
				modelData = { 'name': name,	'date': dateUTC, 'hasHours': hasHours, 'pinned': pinned }

		if (!model)
			this.model = this.parentView.createMetric(modelData)
		else {
			model.set(modelData, {ignoreRender: true})
			if(switchView) this.parentView.switchToListView()
		}
		return model || this.model
	},

	getYear: function () {
		var year = this.$year.val()
		if (year === 'other') year = this.$yearOther.val()
		return year
	},

	setHour: function (hasHours) {
		var hour,
				period

		if (hasHours) {
			hour = parseInt(this.$('#hour').val())
			// TODO generalize this 12/24h math; used various places across the extension
			if (m.models.customization.get('hour12clock')) {
				period = this.$('#period').val()
				if (hour === 12 && period === 'AM') {
					hour = 0
				} else if (hour !== 12 && period === 'PM') {
					hour += 12
				}
			}
		} else {
			hour = mConst('dateRolloverHour')
		}

		return hour
	},

	// Only allow positive integers to be entered as other year
	onKeydownCountdownYearOther: function (e) {
		// Allow delete, backspace, tab, escape
		if ($.inArray(e.keyCode, [46, 8, 9, mConst('keyEscape')]) !== -1 ||
				// Allow Ctrl / Cmd + A, C, and X
				(e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
				(e.keyCode === 67 && (e.ctrlKey === true || e.metaKey === true)) ||
				(e.keyCode === 88 && (e.ctrlKey === true || e.metaKey === true)) ||
				// Allow home, end, left, right
				(e.keyCode >= 35 && e.keyCode <= 39)) {
			return
		} else if (e.keyCode === mConst('keyReturn')) {
			this.$yearOther.blur()
			return
		}
		// If a number was not pressed, stop the keypress
		if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) e.preventDefault()
	},

	onChangeYearOther: function () {
		if (!this.$yearOther.val()) this.$yearOther.val(this.getRevertYear())
		this.updateSaveButtonState()
	},

	// Revert to a previously saved 'year-other' value if one exists; else revert to current year
	getRevertYear: function () {
		var dt = this.model ? m.utils.toLocalTime(this.model.get('date')) : new Date()
		return dt.getFullYear()
	},

	editDetail: function (model) {
		this.resetView()
		this.model = model
		this.collectElements()
		// Update name in case changed by account sync
		this.$name.val(model.get('name'))

		var cdDate = model.getLocalDate(),
				cdYear = cdDate.getFullYear(),
				otherYear = !_.contains(this.years, cdYear)

		// Set select options to existing settings
		this.$('#month option').eq(cdDate.getMonth()).prop('selected', true)
		if (otherYear) {
			this.$year.val('other')
			this.$yearOther.val(cdYear)
			this.$el.addClass('show-other')
		} else {
			this.$('#year option[value="' + cdYear + '"]').prop('selected', true)
			this.$yearOther.val('')
			this.$el.removeClass('show-other')
		}
		this.populateDays()
		this.$dayOptions.eq(cdDate.getDate() - 1).prop('selected', true)

		this.populateTimeOptions()
		this.selectTimeOptions(model, cdDate)
		this.$saveError.hide()
		this.updateSaveButtonState()
		this.$('.toggle-slider').toggleClass('on', model.get('pinned'))
	},

	// Populate the days select box with the appropriate number of days for the month & year selected
	populateDays: function () {
		var year = this.$year.val()
		if (year === 'other') year = this.lastSelectedYear || this.getYear()
		var day = this.$day.val(),
				numDays = m.utils.getDaysInMonth(year, this.$month.val())

		this.$day.empty()
		for (var i = 1; i < numDays + 1; i++) this.$day.append('<option>' + i + '</option>')
		this.$dayOptions = this.$('#day option') // Note: initialize variable here, not in render, because day options don't exist until created in this function

		// Reselect previously selected day, bumping down previously selected day if DNE in current month
		if (day > numDays) day = numDays
		if (day) this.$dayOptions.eq(day - 1).prop('selected', true)
	},

	// Populate the time select boxes with appropriate options for 12/24h
	populateTimeOptions: function () {
		var i
		if (m.models.customization.get('hour12clock')) {
			this.$period.css('display', 'inline-block')
			this.hours = [12] // Start hours with 12, not 1
			for (i = 1; i < 12; i++) this.hours.push(i)
		} else {
			this.$period.css('display', 'none')
			this.hours = []
			for (i = 0; i < mConst('dateHoursPerDay'); i++) this.hours.push(m.utils.twoDigit(i))
		}
		this.$hour.empty()
		for (i = 0; i < this.hours.length; i++) this.$hour.append('<option>' + this.hours[i] + '</option>')
		this.$hourOptions = this.$('#hour option')
		this.selectDefaultHour()

		this.minutes = []
		for (i = 0; i < mConst('dateMinsPerHour'); i++) this.minutes.push(m.utils.twoDigit(i))
		this.$minute.empty()
		for (i = 0; i < this.minutes.length; i++) this.$minute.append('<option>' + this.minutes[i] + '</option>')
		this.$minuteOptions = this.$('#minute option')
	},

	selectTimeOptions: function (model, countdownDate) {
		if (model.get('hasHours')) {
			var hour = countdownDate.getHours()
			// TODO generalize this 12/24h math; used various places across the extension
			if (m.models.customization.get('hour12clock')) {
				var period = 'AM'
				if (hour >= 12) {
					hour -= 12
					period = 'PM'
				}
				this.$("#period option[value='" + period + "']").prop('selected', true)
			}
			this.$hourOptions.eq(hour).prop('selected', true)
			this.$minuteOptions.eq(countdownDate.getMinutes()).prop('selected', true)

			this.$addTimeWrapper.addClass('u--no-transition')
			this.$addTime.addClass('active')
		} else {
			this.resetHours()
		}
	},

	// Save model when any select box changes. If month or year changes, ensure days option list is valid
	changeSelect: function (e) {
		var $select = $(e.currentTarget)
		if ($select.is('#year')) {
			if (this.$year.val() === 'other') {
				this.showYearOther()
				return
			} else {
				this.lastSelectedYear = this.$year[0].options[this.$year[0].selectedIndex].value
			}
		}
		if ($select.is('#month') || $select.is('#year')) this.populateDays()
	},

	showYearOther: function () {
		this.$el.addClass('show-other')
		this.$yearOther.focus()
	},

	resetTimeOptions: function () {
		this.selectDefaultHour()
		this.$minuteOptions.eq(0).prop('selected', true)
		this.$periodOptions.eq(0).prop('selected', true)
		this.updateSaveButtonState()
	},

	selectDefaultHour: function () {
		this.$hourOptions.eq(this.defaultHour).prop('selected', true)
	},

	resetHours: function () {
		if (!this.$addTime || !this.$addTime.hasClass('active'))	return
		this.$addTime.removeClass('active')
		this.resetTimeOptions()
	},

	resetView: function () {
		this.model = null
		this.$el.html(this.template({ years: this.years, placeholder: 'Countdown' }))
		this.collectElements()
		this.populateDays()
		this.populateTimeOptions()
		this.resetHours()
		this.$name.val('')
		var countdownDate = new Date(new Date().getTime() + 7 * mConst('dateMsPerDay'))
		this.lastSelectedYear = countdownDate.getFullYear()
		this.$el.removeClass('show-other')
		this.$('#month option').eq(countdownDate.getMonth()).prop('selected', true)
		this.$('#year option[value="' + countdownDate.getFullYear() + '"]').prop('selected', true)
		this.$el.removeClass('show-other')

		this.$dayOptions.eq(countdownDate.getDate() - 1).prop('selected', true)
		this.$saveError.hide()
		this.$saveButton.addClass('disabled').css('display', '')
	},

	toggleTimeOptions: function (e) {

		if (this.timeOptionsTimeouts) {
			_.each(this.timeOptionsTimeouts, function(timeout) {
				clearTimeout(timeout)
			})
		}
		var $parent = $(e.currentTarget).closest('.option-wrapper'),
				timeHeight = $parent.find('.add-time-group').outerHeight(),
				self = this,
				expanding = true

		if ($parent.hasClass('active')) {
			expanding = false
			timeHeight *= -1
		}

		this.$xCaret.removeClass('u--no-transition')
		this.$addTimeWrapper.removeClass('u--no-transition')
		$parent.toggleClass('active')
		this.preventClearTimeOptionsFlicker(expanding)
		this.timeOptionsTimeouts.push(setTimeout(function() {
			timeHeight && self.parentView.nudgeHeight(timeHeight)
		}, expanding ? 0 : 70))

		this.timeOptionsTimeouts.push(setTimeout(function (){
			self.parentView.setHeight()
		}, 400))
	},

	preventClearTimeOptionsFlicker: function (expanding) {
		var self = this
		if (expanding) {
			if (this.clearTimeTimeoutId) {
				clearTimeout(this.clearTimeTimeoutId)
				this.clearTimeTimeoutId = null
			}
			this.resetTimeOptions()
		} else {
			this.clearTimeTimeoutId = setTimeout(function () {
				self.clearTimeTimeoutId = null
				self.resetTimeOptions()
			}, 500)
		}
	},
	togglePinned: function() {
		this.$('.toggle-slider').toggleClass('on')
		this.updateSaveButtonState()
	}
})

/* Instantiations */
addin.models.countdownManager = new addin.models.CountdownManager()
addin.styles.style()
addin.views.countdown = m.widgetManager.handover('countdown', m.views.BaseMetric, {
	model: addin.models.countdown,
	region: 'top-right',
	order: 'append',
	metricType: 'Countdown',
	metricTitle: 'Countdowns',
	visibleSetting: 'countdownVisible',
	defaultShowRandomState: true,
	metricDescription: 'Count down the days until an important date',
	collection: addin.collect.countdowns,
	detailView: addin.views.Countdown,
	updateInterval: 'onWholeMinute'
})
m.widgets.push(addin.views.countdown)

 }); if(m.addinManager) {m.addinManager.registerAddinFn("fb230b62-96ce-44b5-87c5-4a563553038b", fn_addin);}