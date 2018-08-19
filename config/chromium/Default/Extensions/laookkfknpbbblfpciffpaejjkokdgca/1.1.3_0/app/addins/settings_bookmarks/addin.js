var fn_addin = (function (m, $) { var addin = addin || {}; addin.styles=addin.styles||{};addin.styles.style = function(){ return; }; addin.views = addin.views || {}; addin.collect = addin.collect || {}; addin.models = addin.models || {}; addin.templates = addin.templates || {}; addin.templates=addin.templates||{},addin.templates.main=Handlebars.template({1:function(t,s,n,a){return'\t\t<li class="slide-toggle bookmark-option on" data-option="">\n\t\t\t<span class="toggle-options">\n\t\t\t\t<span class="toggle-option special-link-option" data-link="chromeTabLocation" data-place="links">Links</span>\n\t\t\t\t<span class="toggle-divider">|</span>\n\t\t\t\t<span class="toggle-option special-link-option" data-link="chromeTabLocation" data-place="bookmarks">Bookmarks</span>\n\t\t\t\t<span class="toggle-divider">|</span>\n\t\t\t\t<span class="toggle-option special-link-option" data-link="chromeTabLocation" data-place="dash">Dash</span>\n\t\t\t\t<span class="toggle-divider">|</span>\n\t\t\t\t<span class="toggle-option special-link-option" data-link="chromeTabLocation" data-place="none">None</span>\n\t\t\t</span>\n\t\t\t<span class="setting-name">Show Chrome Tab in</span>\n\t\t</li>\n\t\t<li class="slide-toggle bookmark-option on" data-option="">\n\t\t\t<span class="toggle-options">\n\t\t\t\t<span class="toggle-option special-link-option" data-link="appsLocation" data-place="links">Links</span>\n\t\t\t\t<span class="toggle-divider ">|</span>\n\t\t\t\t<span class="toggle-option special-link-option" data-link="appsLocation" data-place="bookmarks">Bookmarks</span>\n\t\t\t\t<span class="toggle-divider">|</span>\n\t\t\t\t<span class="toggle-option special-link-option"  data-link="appsLocation" data-place="dash">Dash</span>\n\t\t\t\t<span class="toggle-divider">|</span>\n\t\t\t\t<span class="toggle-option special-link-option"  data-link="appsLocation" data-place="none">None</span>\n\t\t\t</span>\n\t\t\t<span class="setting-name">Show Apps in</span>\n\t\t</li>\n'},3:function(t,s,n,a){return'\t\t<li class="slide-toggle bookmark-option on" data-option="includeBookmarks">\n\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t<span class="setting-name">Show Bookmarks Manager</span>\n\t\t</li>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(t,s,n,a){var o;return'<h3>Links & Bookmarks Bar</h3>\n<p class="description">Quick access to your favorite links</p>\n\n<div>\n\t<ul class="settings-list options-list" style="padding-top: 10px;">\n\t\t<li class="slide-toggle links-enable on" data-option="">\n\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t<span class="setting-name">Show Links</span>\n\t\t</li>\n\t\t<li class="slide-toggle bookmarks-enable on" data-option="">\n\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t<span class="setting-name">Show Bookmarks Bar</span>\n\t\t</li>\n'+(null!=(o=s.if.call(t,null!=t?t.chrome:t,{name:"if",hash:{},fn:this.program(1,a,0),inverse:this.noop,data:a}))?o:"")+'\t\t<li class="slide-toggle bookmark-option on" data-option="openInNewTab">\n\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t<span class="setting-name">Open links in new tab</span>\n\t\t</li>\n\t</ul>\n\n\n\t<h4>Links</h4>\n\t<ul class="settings-list options-list">\n\t\t<li class="slide-toggle bookmark-option on" data-option="linksKeepOpen">\n\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t<span class="setting-name">Stay open</span>\n\t\t\t<span class="option-message">Stay open on new tab and other usage</span>\n\t\t</li>\n\t</ul>\n\n\n\t<h4>Bookmarks Bar</h4>\n\t<ul class="settings-list options-list">\n\t\t<li class="slide-toggle bookmark-option on" data-option="iconsOnly">\n\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t<span class="setting-name">Icons only</span>\n\t\t\t<span class="option-message">Hide titles for a clean and compact look</span>\n\t\t</li>\n\t\t<li class="slide-toggle bookmark-option on" data-option="includeMostVisited">\n\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t<span class="setting-name">Show Most Visited</span>\n\t\t</li>\n\t\t<li class="slide-toggle bookmark-option on" data-option="defaultMostVisited">\n\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t<span class="setting-name">Start in Most Visited</span>\n\t\t\t<span class="option-message">Open Most Visited folder by default</span>\n\t\t</li>\n'+(null!=(o=s.if.call(t,null!=t?t.chrome:t,{name:"if",hash:{},fn:this.program(3,a,0),inverse:this.noop,data:a}))?o:"")+'\t\t<li class="slide-toggle bookmark-option on" data-option="includeOtherBookmarks">\n\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t<span class="setting-name">Show Other Bookmarks</span>\n\t\t</li>\n\t</ul>\n</div>\n\n'},useData:!0});
addin["styles"] = addin["styles"] || {};
addin["styles"]["style"] = function() { var style = document.createElement('style');style.type = 'text/css';style.innerHTML = '';document.getElementsByTagName('head')[0].appendChild(style);};
addin.views.Main = m.views.settings.SettingsPanel.extend({
	attributes: { id: 'settings-bookmarks', class: 'settings-view settings-bookmarks' },

	template: addin.templates.main,

	panelid: 'bookmarks-panel',

	events: {
		"click .special-link-option": "toggleSpecialLinks",
		"click .bookmark-option": "toggleOption",
		"click .bookmarks-enable": "enableBookmarks",
		"click .links-enable": "enableLinks"
	},

	initialize: function () {
		this.permissions = m.models.bookmarksSettings.permissions
	},

	render: function () {
		this.chrome = isChrome()
		this.$el.html(this.template(this))
		var self = this
		this.$el.css('opacity', 0)
		setTimeout(function () { self.updateView(); }, 5)
		setTimeout(function () { self.$el.css('opacity', 1); }, 100)
		return this
	},

	updateView: function () {
		var settings = m.models.bookmarksSettings
		this.$('.bookmark-option').each(function (index, el) {
			var $el = $(el)
			$el.toggleClass('on', settings.get([$el.attr('data-option')]))
		})
		this.$el.find('[data-link="chromeTabLocation"]').each( function(index, el) {
			var $el = $(el);
			$el.toggleClass('active', settings.get('chromeTabLocation') == $el.attr('data-place'))
		});
		this.$el.find('[data-link="appsLocation"]').each( function(index, el) {
			var $el = $(el);
			$el.toggleClass('active', settings.get('appsLocation') == $el.attr('data-place'))
		});

		this.$el.find('.bookmarks-enable').toggleClass('on', m.models.customization.get('bookmarksVisible'))
		this.$el.find('.links-enable').toggleClass('on', m.models.customization.get('linksVisible'))
		this.$el.find('.bookmarks-settings').toggleClass('active', settings.get('enabled'))
	},

	toggleOption: function (e) {
		if (e) {
			e.stopPropagation()
			e.preventDefault()
		}
		var option = $(e.currentTarget).attr('data-option')
		var settings = m.models.bookmarksSettings
		settings.set(option, !settings.get(option))
		$(e.currentTarget).toggleClass('on', settings.get(option))
		settings.optionsChanged()
	},

	toggleSpecialLinks: function (e) {
		if (e) {
			e.stopPropagation()
			e.preventDefault()
		}
		var option = $(e.currentTarget).attr('data-link')
		var location = $(e.currentTarget).attr('data-place')
		var settings = m.models.bookmarksSettings
		settings.set(option, location)
		this.$el.find('[data-link="' + option + '"]').removeClass('active')
		$(e.currentTarget).addClass('active')

		settings.optionsChanged()
	},

	enableBookmarks: function (e) {
		if (e) {
			e.stopPropagation()
			e.preventDefault()
		}
		m.commandManager.execute('settings.enableBookmarks', { callback:function(){$(e.currentTarget).toggleClass('on', m.models.customization.get('bookmarksVisible'))}});
	},
	enableLinks: function (e) {
		if (e) {
			e.stopPropagation()
			e.preventDefault()
		}
		m.models.customization.save('linksVisible', !m.models.customization.get('linksVisible'));
		$(e.currentTarget).toggleClass('on', m.models.customization.get('linksVisible'));
	}

})

if (m.commandManager) {
	m.commandManager.registerCommand('settings.panels.bookmarks', function () {
		if (!addin.styleLoaded) {
			addin.styleLoaded = true
			addin.styles.style()
		}
		return new addin.views.Main()
	})
}

 }); if(m.addinManager) {m.addinManager.registerAddinFn("e464eb61-05ca-4a56-9c17-6a02673aa136", fn_addin);}