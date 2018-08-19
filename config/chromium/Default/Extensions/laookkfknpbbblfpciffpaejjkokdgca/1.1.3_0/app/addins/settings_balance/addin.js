var fn_addin = (function (m, $) { var addin = addin || {}; addin.styles=addin.styles||{};addin.styles.style = function(){ return; }; addin.views = addin.views || {}; addin.collect = addin.collect || {}; addin.models = addin.models || {}; addin.templates = addin.templates || {}; addin.templates=addin.templates||{},addin.templates.main=Handlebars.template({1:function(t,n,s,o){var a,i,e=n.helperMissing,l="function",p=this.escapeExpression;return(null!=(a=n.if.call(t,o&&o.first,{name:"if",hash:{},fn:this.program(2,o,0),inverse:this.program(4,o,0),data:o}))?a:"")+'\t\t\t\t\t<span class="toggle-option balance-shortcut" data-shortcut="'+p(typeof(i=null!=(i=n.label||(null!=t?t.label:t))?i:e)===l?i.call(t,{name:"label",hash:{},data:o}):i)+'">'+p(typeof(i=null!=(i=n.displayLabel||(null!=t?t.displayLabel:t))?i:e)===l?i.call(t,{name:"displayLabel",hash:{},data:o}):i)+"</span>\n"},2:function(t,n,s,o){return'\t\t\t\t\t<span class="toggle-divider"></span>\n'},4:function(t,n,s,o){return'\t\t\t\t\t<span class="toggle-divider">|</span>\n'},6:function(t,n,s,o){return"\t\t\t\t\t\t\t\t<option>00</option>\n\t\t\t\t\t\t\t\t<option>01</option>\n\t\t\t\t\t\t\t\t<option>02</option>\n\t\t\t\t\t\t\t\t<option>03</option>\n\t\t\t\t\t\t\t\t<option>04</option>\n\t\t\t\t\t\t\t\t<option>05</option>\n\t\t\t\t\t\t\t\t<option>06</option>\n\t\t\t\t\t\t\t\t<option>07</option>\n\t\t\t\t\t\t\t\t<option>08</option>\n\t\t\t\t\t\t\t\t<option>09</option>\n\t\t\t\t\t\t\t\t<option>10</option>\n\t\t\t\t\t\t\t\t<option>11</option>\n\t\t\t\t\t\t\t\t<option>12</option>\n\t\t\t\t\t\t\t\t<option>13</option>\n\t\t\t\t\t\t\t\t<option>14</option>\n\t\t\t\t\t\t\t\t<option>15</option>\n\t\t\t\t\t\t\t\t<option>16</option>\n\t\t\t\t\t\t\t\t<option>17</option>\n\t\t\t\t\t\t\t\t<option>18</option>\n\t\t\t\t\t\t\t\t<option>19</option>\n\t\t\t\t\t\t\t\t<option>20</option>\n\t\t\t\t\t\t\t\t<option>21</option>\n\t\t\t\t\t\t\t\t<option>22</option>\n\t\t\t\t\t\t\t\t<option>23</option>\n"},8:function(t,n,s,o){return"\t\t\t\t\t\t\t\t<option>12</option>\n\t\t\t\t\t\t\t\t<option>1</option>\n\t\t\t\t\t\t\t\t<option>2</option>\n\t\t\t\t\t\t\t\t<option>3</option>\n\t\t\t\t\t\t\t\t<option>4</option>\n\t\t\t\t\t\t\t\t<option>5</option>\n\t\t\t\t\t\t\t\t<option>6</option>\n\t\t\t\t\t\t\t\t<option>7</option>\n\t\t\t\t\t\t\t\t<option>8</option>\n\t\t\t\t\t\t\t\t<option>9</option>\n\t\t\t\t\t\t\t\t<option>10</option>\n\t\t\t\t\t\t\t\t<option>11</option>\n"},10:function(t,n,s,o){return" &nbsp; "},12:function(t,n,s,o){return'\n\t\t\t\t\t\t\t<div class="select-wrapper">\n\t\t\t\t\t\t\t\t<select class="select-time-period balance-time" data-time="noon" data-side="start">\n\t\t\t\t\t\t\t\t\t<option selected>AM</option>\n\t\t\t\t\t\t\t\t\t<option>PM</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n'},14:function(t,n,s,o){return'\n\t\t\t\t\t\t\t<div class="select-wrapper">\n\t\t\t\t\t\t\t\t<select class="select-time-period balance-time" data-time="noon" data-side="end">\n\t\t\t\t\t\t\t\t\t<option selected>AM</option>\n\t\t\t\t\t\t\t\t\t<option>PM</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n'},16:function(t,n,s,o){return'\t\t\t\t\t<li class="slide-toggle balance-option on" data-option="balanceNotes">\n\t\t\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t\t\t<span class="setting-name">Hide Notes</span>\n\t\t\t\t\t</li>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(t,n,s,o){var a,i=this.lambda,e=this.escapeExpression;return'<h3>Balance</h3>\n<p class="description">Balance your day with periods of uptime and downtime</p>\n<ul class="settings-list options-list">\n\t<li class="slide-toggle balance-mode on">\n\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t<span class="setting-name">Enable Balance mode</span>\n\t\t<span class="option-message">Hide productivity features during downtime</span>\n\t</li>\n</ul>\n\n\n\n<h4>Uptime Schedule</h4>\n<p class="subdescription">Times when productivity features are active</p>\n<ul class="settings-list options-list shortcut-list">\n\t<li class="slide-toggle custom-time-toggle">\n\t\t<span class="setting-name">Hours of the day</span>\n\n\t\t\t<span class="toggle-options">\n'+(null!=(a=n.each.call(t,null!=t?t.shortcuts:t,{name:"each",hash:{},fn:this.program(1,o,0),inverse:this.noop,data:o}))?a:"")+'\t\t\t\t<span class="toggle-divider">|</span>\n\t\t\t\t<span class="toggle-option toggle-custom time-custom">Custom</span>\n\t\t\t</span>\n\t\t<ul class="toggle-options toggle-options-custom toggle-options-multi" data-custom="Time">\n\t\t\t<li>\n\t\t\t\t<span class="subsetting-name">Start time</span>\n\n\t\t\t\t\t<span class="setting-dropdown">\n\t\t\t\t\t<div class="select-wrapper">\n\t\t\t\t\t\t<select class="balance-time" data-time="hour" data-side="start">\n'+(null!=(a=n.if.call(t,null!=t?t.hour24:t,{name:"if",hash:{},fn:this.program(6,o,0),inverse:this.program(8,o,0),data:o}))?a:"")+'\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\x3c!--\n\n\t\t\t\t\t--\x3e<span class="time-divider">:</span>\x3c!--\n\n\t\t\t\t\t--\x3e<div class="select-wrapper">\n\t\t\t\t\t\t<select class="balance-time" data-time="minute" data-side="start">\n\t\t\t\t\t\t\t<option selected>00</option>\n\t\t\t\t\t\t\t<option>15</option>\n\t\t\t\t\t\t\t<option>30</option>\n\t\t\t\t\t\t\t<option>45</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t'+(null!=(a=n.if.call(t,null!=t?t.hour24:t,{name:"if",hash:{},fn:this.program(10,o,0),inverse:this.program(12,o,0),data:o}))?a:"")+'\t\t\t\t\t</span>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<span class="subsetting-name">End time</span>\n\n\t\t\t\t\t<span class="setting-dropdown">\n\t\t\t\t\t<div class="select-wrapper">\n\t\t\t\t\t\t<select class="balance-time" data-time="hour" data-side="end">\n'+(null!=(a=n.if.call(t,null!=t?t.hour24:t,{name:"if",hash:{},fn:this.program(6,o,0),inverse:this.program(8,o,0),data:o}))?a:"")+'\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<span class="time-divider" style="margin: 0 0 0 -4px;">:</span>\x3c!--\n\n\t\t\t\t\t--\x3e<div class="select-wrapper">\n\t\t\t\t\t\t<select class="balance-time" data-time="minute" data-side="end">\n\t\t\t\t\t\t\t<option selected>00</option>\n\t\t\t\t\t\t\t<option>15</option>\n\t\t\t\t\t\t\t<option>30</option>\n\t\t\t\t\t\t\t<option>45</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t'+(null!=(a=n.if.call(t,null!=t?t.hour24:t,{name:"if",hash:{},fn:this.program(10,o,0),inverse:this.program(14,o,0),data:o}))?a:"")+'\t\t\t\t\t</span>\n\t\t\t</li>\n\t\t</ul>\n\t</li>\n\t<li class="slide-toggle custom-days-toggle">\n\t\t<span class="setting-name">Days of the week</span>\n\n\t\t<span class="toggle-options">\n\t\t\t<span class="toggle-option days-shortcut" data-days="1,2,3,4,5">Weekdays</span>\n\t\t\t<span class="toggle-divider">|</span>\n\t\t\t<span class="toggle-option days-shortcut" data-days="0,1,2,3,4,5,6">Every day</span>\n\t\t\t<span class="toggle-divider">|</span>\n\t\t\t<span class="toggle-option toggle-custom days-custom">Custom</span>\n\t\t</span>\n\n\n\t\t<ul class="toggle-options toggle-options-custom toggle-options-multi" data-custom="Days">\n\t\t\t<li>\n\t\t\t\t<span class="subsetting-name">Days Active</span>\n\n\t\t\t\t<span class="toggle-options">\n\t\t\t\t\t<span class="toggle-option day-toggle" data-day="0">S</span>\n\t\t\t\t\t\t<span class="toggle-option day-toggle active" data-day="1">M</span>\n\t\t\t\t\t\t<span class="toggle-option day-toggle active" data-day="2">T</span>\n\t\t\t\t\t\t<span class="toggle-option day-toggle active" data-day="3">W</span>\n\t\t\t\t\t\t<span class="toggle-option day-toggle active" data-day="4">T</span>\n\t\t\t\t\t\t<span class="toggle-option day-toggle active" data-day="5">F</span>\n\t\t\t\t\t\t<span class="toggle-option day-toggle" data-day="6">S</span>\n\t\t\t\t</span>\n\t\t\t</li>\n\t\t</ul>\n\t</li>\n</ul>\n\n\n\n<div class="show-on-balance">\n\t<h4 class="button-advanced">Downtime Options<i class="icon icon-angle-down"></i></h4>\n\t<p class="subdescription">Productivity features to hide during rest periods</p>\n\t<div class="wrapper-advanced">\n\t\t\t<ul class="settings-list options-list balance-rest-list">\n\t\t\t\t<li class="slide-toggle balance-option on" data-option="balanceClock">\n\t\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t\t<span class="setting-name">Hide Clock</span>\n\t\t\t\t</li>\n\t\t\t\t<li class="slide-toggle balance-option on" data-option="balanceFocus">\n\t\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t\t<span class="setting-name">Hide Focus</span>\n\t\t\t\t</li>\n\t\t\t\t<li class="slide-toggle balance-option on" data-option="balanceTodo">\n\t\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t\t<span class="setting-name">Hide Todo</span>\n\t\t\t\t</li>\n'+(null!=(a=n.if.call(t,null!=t?t.plusEnabled:t,{name:"if",hash:{},fn:this.program(16,o,0),inverse:this.noop,data:o}))?a:"")+'\t\t\t</ul>\n\t</div>\n</div>\n\n\n<div class="balance-quote">&ldquo;'+e(i(null!=(a=null!=t?t.currentQuote:t)?a.body:a,t))+'&rdquo;<span class="balance-quote-source">– '+e(i(null!=(a=null!=t?t.currentQuote:t)?a.source:a,t))+"</span></div>\n"},useData:!0});
addin["styles"] = addin["styles"] || {};
addin["styles"]["style"] = function() { var style = document.createElement('style');style.type = 'text/css';style.innerHTML = 'select.balance-time{opacity:.8}select.balance-time:hover{opacity:1}.settings-balance,.settings-balance .toggle-options{transition:all .2s ease}.toggle-options-custom.animating{transition:height .2s ease}.settings-balance .day-toggle{cursor:pointer}.settings-balance .button-advanced{margin:-12px 0 0 -23px;float:none;opacity:1}.settings-balance .button-advanced .icon-angle-down{margin-left:2px}.settings-balance .balance-quote{margin-top:45px;opacity:.5;text-align:center}.firefox .settings-balance .balance-quote{padding-bottom:30px}.settings-balance .balance-quote-source{margin-top:4px;display:block;font-size:14px}';document.getElementsByTagName('head')[0].appendChild(style);};
addin.views.Main = m.views.settings.SettingsPanel.extend({
	attributes: { id: 'settings-balance', class: 'settings-view settings-balance' },
	panelid: 'balance',
	quotes: [
		{ "body": "Time you enjoy wasting is not wasted.", "source": "John Lennon" },
		{ "body": "Sometimes the best training is to rest.", "source": "Cristiano Ronaldo" },
		{ "body": "Rest until you feel like playing, then play until you feel like resting.", "source": "Martha Beck" },
		{ "body": "If you get tired, learn to rest, not to quit.", "source": "Banksy" },
		{ "body": "Everything in moderation, including moderation.", "source": "Oscar Wilde" },
		{ "body": "Sometimes the most productive thing you can do is rest.", "source": "Anonymous" },
		{ "body": "Balance achievement with appreciation.", "source": "Tim Ferriss" },
		{ "body": "There is virtue in work and there is virtue in rest. Use both and overlook neither.", "source": "Alan Cohen" }
	],
	showAdvanced: false,		// True if panel will be rendered with advanced section open
	template: addin.templates.main,

	events: {
		"click .balance-mode": "toggleBalanceMode",
		"click .balance-option": "toggleBalanceOption",
		"click .day-toggle": "toggleDay",
		"change .balance-time": "updateBalanceTime",
		"click .balance-shortcut": "chooseShortcut",
		"click .days-shortcut": "setDays",
		"click .toggle-custom": "toggleCustomOptions",
		"click .cancel-custom": "cancelCustomOptions",
		"click .button-advanced": "toggleAdvanced"
	},

	initialize: function (options) {
		if (m.models.balanceMode && !m.models.balanceMode.initCompleted) m.models.balanceMode.initCompleted = true
		this.collection = new m.collect.Settings()
		if (options && options.showAdvanced) this.showAdvanced = true

		this.plusEnabled = m.conditionalFeatures.featureEnabled('plus')
		this.shortcuts = {};
		var start = 8.5;
		var end = 4.5;
		var startHour, startMinute, endHour, endMinute;
		while (start < 10) {
			startHour = Math.floor(start);
			startMinute = (startHour == start ? '00' : '30')
			endHour = Math.floor(end);
			endMinute = (endHour == end ? '00' : '30')
			var label = this.generateLabel(startHour, startMinute, endHour, endMinute);
			this.shortcuts[label] = {};
			this.shortcuts[label].start = { hour: startHour, minute: startMinute, noon: 'AM' };
			this.shortcuts[label].end = { hour: endHour, minute: endMinute, noon: 'PM' };
			this.shortcuts[label].label = label
			this.hour24 = !m.models.customization.get('hour12clock');
			this.shortcuts[label].displayLabel = this.generateLabel((this.hour24 ? '0' : '') + startHour, startMinute, endHour + (this.hour24 ? 12 : 0), endMinute);
			end += 0.5;
			start += 0.5;
		}
		this.heightFound = false;
		this.animating = { customTime: false, customDays: false };

		this.currentQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
	},

	render: function () {
		var self = this
		this.$el.css('opacity', 0)
		this.$el.html(this.template(this))
		this.$buttonAdvanced = this.$('.button-advanced')
		this.$wrapperAdvanced = this.$('.wrapper-advanced')
		if (this.showAdvanced) {
			setTimeout(function () { scrollToBottom(self.$el)	}, 0)
		}
		this.toggleAdvanced(null, this.showAdvanced)

		if (!this.heightFound) {
			var customs = this.$(".toggle-options-custom")
			if (customs.length > 0)
				customs.css({ position: 'absolute', opacity: 0 })
		}
		this.$balanceToggler = this.$el.find('.balance-mode');
		this.updateBalanceMode(true);

		setTimeout(function () { self.$el.css('opacity', 1); }, 10);
		setTimeout(function () {
			self.calcCustomHeights();
		}, 1);
		setTimeout(function () { self.$el.find('.toggle-options-custom').addClass('animating') }, 400);
		return this
	},

	generateLabel: function (startHour, startMinute, endHour, endMinute) {
		return startHour + ':' + startMinute + '-' + endHour + ':' + endMinute;
	},

	calcCustomHeights: function () {
		var self = this;
		self.$(".toggle-options-custom").each(function () {
			var h = $(this).height();
			if (h > 0) {
				$.data(this, "main-height", h);
				var newHeight = 0;
				if (m.models.balanceMode.get('custom' + $(this).data('custom')))
					newHeight = h;
				$(this).css({ overflow: "hidden", height: newHeight, position: 'relative' });
				$(this).css({ opacity: 1 });
				self.heightFound = true;
			}
		})
	},

	updateBalanceDays: function (initial) {
		var balanceMode = m.models.balanceMode;
		var i, days = '';
		for (i = 0; i < 7; i++)
			if (balanceMode.get('days')[i]) {
				if (days.length > 0)
					days += ',';
				days += i
			}
		this.customDays = false;
		this.$el.find('.days-shortcut').removeClass('active');
		this.$el.find('.days-custom').removeClass('active');
		if (!balanceMode.get('customDays')) {
			this.$el.find('[data-days="' + days + '"]').addClass('active');
			if (!initial)
				this.hideCustomOptions(this.$('.custom-days-toggle'));
		} else {
			this.$('.days-custom').addClass('active')
			this.showCustomOptions(this.$('.custom-days-toggle'), true)
		}

		this.$el.find('.day-toggle').each(function (index, el) {
			var $el = $(el);
			$el.toggleClass('active', balanceMode.get('daysCustom')[parseInt($el.attr('data-day'))]);
		})
	},

	updateBalanceMode: function (initial) {
		var balanceMode = m.models.balanceMode;
		this.$balanceToggler.toggleClass('on', balanceMode.get('enabled'));
		this.$('.show-on-balance').toggle(balanceMode.get('enabled'))
		this.$('.balance-option').each(function (index, el) {
			var $el = $(el);
			$el.toggleClass('on', balanceMode.get([$el.attr('data-option')]));
		});
		//this.$('.percent-clock').toggleClass('on', m.models.customization.get('percentClock'));
		var self = this;
		var hour24 = !m.models.customization.get('hour12clock')
		this.$el.find('.balance-time').each(function (index, el) {
			var $el = $(el);
			var time = $el.attr('data-time');
			var side = $el.attr('data-side');
			var target = balanceMode.get(side + 'Custom');
			var correction = 0;
			if (hour24 && time=='hour') {
				if (target.noon == 'PM')
					correction = 12
			} else	if (!hour24 && time == 'hour' && target.hour == 0)
				correction = 12;
			var targetTime = target[time];

			if (correction) {
				targetTime = parseInt(targetTime) + correction;
			}
			if (hour24 && time == 'hour' && (targetTime + '').length == 1)
				targetTime = '0' + targetTime;
			$el.val(targetTime);
		})
		var label = this.generateLabel(balanceMode.get('start').hour, balanceMode.get('start').minute, balanceMode.get('end').hour, balanceMode.get('end').minute);
		this.$('.balance-shortcut').removeClass('active');
		if (balanceMode.get('customTime')) {
			this.$('.time-custom').addClass('active');
			this.showCustomOptions(this.$('.custom-time-toggle'), true)
		} else {
			this.$el.find('[data-shortcut="' + label + '"]').addClass('active')
			this.$('.time-custom').removeClass('active');
			if (!initial)
				this.hideCustomOptions(this.$('.custom-time-toggle'));
		}
		this.updateBalanceDays(initial);
	},

	updateBalanceTime: function (e) {
		var time = $(e.currentTarget).attr('data-time');
		var side = $(e.currentTarget).attr('data-side');
		var balanceMode = m.models.balanceMode;
		var originalTime = balanceMode.get(side + 'Custom')
		var timeCopy = { hour: originalTime.hour, minute: originalTime.minute, noon: originalTime.noon }
		var val = $(e.currentTarget).val();
		if (time == 'hour') {
			val = parseInt(val);
			if(m.models.customization.get('hour12clock')){
				timeCopy.hour = (val==12? 0 : val);
			} else {
				var pm = val > 11;
				timeCopy.hour = val - (pm ? 12 : 0);
				timeCopy.noon = pm ? 'PM' : 'AM';
			}
		} else
			timeCopy[time] = val;

		balanceMode.set(side + 'Custom', timeCopy)
		this.updateBalanceMode();
		m.models.balanceMode.balanceChanged();
	},

	toggleBalanceMode: function (e) {
		if (e) {
			e.stopPropagation();
			e.preventDefault();
		}
		var balanceMode = m.models.balanceMode
		var enabled = !m.models.balanceMode.get('enabled')
		m.models.customization.set('balanceManualToggle', true)
		balanceMode.set('enabled', enabled)
		this.$balanceToggler.toggleClass('on', enabled)
		this.$('.show-on-balance').toggle(enabled)
		balanceMode.balanceChanged()
		if (enabled) {
			localStorage.setItem('balanceManualToggle', true)
			this.calcCustomHeights()
			this.updateBalanceMode()
		}
	},

	toggleBalanceOption: function (e) {
		if (e) {
			e.stopPropagation();
			e.preventDefault();
		}
		var option = $(e.currentTarget).attr('data-option');
		var balanceMode = m.models.balanceMode;
		balanceMode.set(option, !balanceMode.get(option));
		$(e.currentTarget).toggleClass('on', balanceMode.get(option));
		m.models.balanceMode.balanceChanged();
	},

	chooseShortcut: function (e) {
		var self = this;
		var balanceMode = m.models.balanceMode;
		balanceMode.set('customTime', false);
		this.$('.balance-shortcut').each(function (index, el) {
			var $el = $(el);
			if (el == e.currentTarget) {
				var shortcut = self.shortcuts[$el.attr('data-shortcut')];
				var start = { hour: shortcut.start.hour, minute: shortcut.start.minute, noon: shortcut.start.noon };
				var end = { hour: shortcut.end.hour, minute: shortcut.end.minute, noon: shortcut.end.noon };
				balanceMode.set('start', start);
				balanceMode.set('end', end);
			}
		});
		m.models.balanceMode.balanceChanged();
		this.updateBalanceMode()
	},

	setDays: function (e) {
		if (e) {
			e.stopPropagation();
			e.preventDefault();
		}
		var $el = $(e.currentTarget);
		var balanceMode = m.models.balanceMode;
		balanceMode.set('customDays', false);
		var day, days = $el.attr('data-days').split(',');
		var balanceDays = balanceMode.get('days');
		for (day = 0; day < 7; day++)
			balanceDays[day] = false;
		days.map(function (day) { balanceDays[parseInt(day)] = true; });
		this.updateBalanceDays();
		m.models.balanceMode.balanceChanged();
	},

	toggleDay: function (e) {
		if (e) {
			e.stopPropagation();
			e.preventDefault();
		}
		var $el = $(e.currentTarget);
		var balanceMode = m.models.balanceMode;
		var day = parseInt($el.attr('data-day'));
		balanceMode.get('daysCustom')[day] = !balanceMode.get('daysCustom')[day];
		$el.toggleClass('active', balanceMode.get('daysCustom')[day]);
		this.updateBalanceDays();
		m.models.balanceMode.balanceChanged();
	},

	toggleCustomOptions: function (e) {
		if (!m.conditionalFeatures.featureEnabled('plus')) {
			var options = {
				targetRegion: 'settings',
				sourceEvent: 'customBalanceMode',
				buttonText: 'Learn more',
				title: 'Balance Mode',
				description: 'Customize your focus schedule to fit the way you work'
			};
			m.commandManager.execute('upsell.message', options);
			return;
		}
		var $list = $(e.currentTarget).closest('.slide-toggle')
		if (!$list.hasClass('show-custom')) {
			this.showCustomOptions($list)
			m.models.balanceMode.balanceChanged();
		}
	},

	showCustomOptions: function ($el, noUpdate) {

		var balanceMode = m.models.balanceMode;
		var $custom = $el.find('.toggle-options-custom');
		$el.addClass('show-custom')
		var property = 'custom' + $custom.data('custom');
		if (this.animating[property] || $custom.height() > 10)
			return;
		this.animating[property] = true;

		var self = this;
		setTimeout(function () { self.animating[property] = false; }, 200)
		$custom.css({ height: $custom.data("main-height") });

		if (!noUpdate) {
			balanceMode.set(property, true);
			this.updateBalanceMode();
		}
	},

	hideCustomOptions: function ($el) {
		var self = this;
		var $custom = $el.find('.toggle-options-custom');
		var property = 'custom' + $custom.data('custom');
		if (this.animating[property] || $custom.height() < 10)
			return;
		this.animating[property] = true;
		$custom.css({ height: 0 });
		setTimeout(function () { self.animating[property] = false; }, 200)
		$el.removeClass('show-custom')
	},

	toggleAdvanced: function (e, state) {
		// Toggle with animation (when user clicks the button)
		if (state === undefined) {
			toggleAdvanced(this)
			this.showAdvanced = !this.showAdvanced

		// Show/hide without animation (on render)
		} else {
			this.$buttonAdvanced.toggleClass('active', state)
			this.$wrapperAdvanced.toggle(state)
		}
	},

	cancelCustomOptions: function (e) {
		// find the click source
		// cancel the setting
		this.toggleCustomOptions(e)
	}
})

if (m.commandManager) {
	m.commandManager.registerCommand('settings.panels.balance', function (options) {
		if (!addin.styleLoaded) {
			addin.styleLoaded = true
			addin.styles.style()
		}
		return new addin.views.Main(options)
	})
}

 }); if(m.addinManager) {m.addinManager.registerAddinFn("1e373fa7-a454-4652-8d77-1a4fcc88c069", fn_addin);}