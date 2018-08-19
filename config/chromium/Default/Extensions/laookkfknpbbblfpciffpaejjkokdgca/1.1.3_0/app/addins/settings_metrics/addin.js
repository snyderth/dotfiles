var fn_addin = (function (m, $) { var addin = addin || {}; addin.styles=addin.styles||{};addin.styles.style = function(){ return; }; addin.views = addin.views || {}; addin.collect = addin.collect || {}; addin.models = addin.models || {}; addin.templates = addin.templates || {}; addin.templates=addin.templates||{},addin.templates.available=Handlebars.template({1:function(n,a,t,s){var e,i,l=a.helperMissing,o="function",r=this.escapeExpression;return'        <li data-provider-id="'+r(typeof(i=null!=(i=a.id||(null!=n?n.id:n))?i:l)===o?i.call(n,{name:"id",hash:{},data:s}):i)+'" class="connect-provider"><img src="'+r(typeof(i=null!=(i=a.small_icon_url||(null!=n?n.small_icon_url:n))?i:l)===o?i.call(n,{name:"small_icon_url",hash:{},data:s}):i)+'"><span class="provider-title">'+r(typeof(i=null!=(i=a.provider_title||(null!=n?n.provider_title:n))?i:l)===o?i.call(n,{name:"provider_title",hash:{},data:s}):i)+"</span>"+(null!=(e=a.if.call(n,null!=n?n.beta:n,{name:"if",hash:{},fn:this.program(2,s,0),inverse:this.noop,data:s}))?e:"")+'<span class="scope">'+r(typeof(i=null!=(i=a.short_description||(null!=n?n.short_description:n))?i:l)===o?i.call(n,{name:"short_description",hash:{},data:s}):i)+"</span>"+(null!=(e=a.unless.call(n,null!=n?n.active:n,{name:"unless",hash:{},fn:this.program(4,s,0),inverse:this.noop,data:s}))?e:"")+"</li>\n"},2:function(n,a,t,s){return' <span class="badge beta-badge">Beta</span>'},4:function(n,a,t,s){return'<span class="u--right status">Coming Soon</span>'},compiler:[6,">= 2.0.0-beta.1"],main:function(n,a,t,s){var e;return'<ul class="settings-list provider-list add-provider">\n'+(null!=(e=a.each.call(n,n,{name:"each",hash:{},fn:this.program(1,s,0),inverse:this.noop,data:s}))?e:"")+"</ul>"},useData:!0}),addin.templates.connected=Handlebars.template({1:function(n,a,t,s){var e,i,l=a.helperMissing,o="function",r=this.escapeExpression;return'        <li data-provider-id="'+r(typeof(i=null!=(i=a.id||(null!=n?n.id:n))?i:l)===o?i.call(n,{name:"id",hash:{},data:s}):i)+'" class="has-provider-id"><img src="'+r(typeof(i=null!=(i=a.small_icon_url||(null!=n?n.small_icon_url:n))?i:l)===o?i.call(n,{name:"small_icon_url",hash:{},data:s}):i)+'">'+r(typeof(i=null!=(i=a.provider_title||(null!=n?n.provider_title:n))?i:l)===o?i.call(n,{name:"provider_title",hash:{},data:s}):i)+(null!=(e=a.if.call(n,null!=n?n.beta:n,{name:"if",hash:{},fn:this.program(2,s,0),inverse:this.noop,data:s}))?e:"")+'<span class="scope">'+r(typeof(i=null!=(i=a.short_description||(null!=n?n.short_description:n))?i:l)===o?i.call(n,{name:"short_description",hash:{},data:s}):i)+'</span>\n         <span class="u--right">\n                <span class="provider-actions">\n                    '+(null!=(e=a.if.call(n,null!=n?n.config_command:n,{name:"if",hash:{},fn:this.program(4,s,0),inverse:this.noop,data:s}))?e:"")+'\n                    <span class="provider-action disconnect">Disconnect</span>\n                </span>\n                <span class="status">'+r(typeof(i=null!=(i=a.status||(null!=n?n.status:n))?i:l)===o?i.call(n,{name:"status",hash:{},data:s}):i)+"</span>\n            </span>\n        </li>\n"},2:function(n,a,t,s){return' <span class="badge beta-badge">Beta</span>'},4:function(n,a,t,s){return'<span class="provider-action launch-config">Configure</span>'},compiler:[6,">= 2.0.0-beta.1"],main:function(n,a,t,s){var e;return'<ul class="settings-list provider-list connected-providers">\n'+(null!=(e=a.each.call(n,n,{name:"each",hash:{},fn:this.program(1,s,0),inverse:this.noop,data:s}))?e:"")+"</ul>"},useData:!0}),addin.templates.main=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(n,a,t,s){return'<div class="pop-body settings-metrics">\n\n\t<h3>Metrics<i class="badge plus-badge">PLUS</i></h3>\n\t<p class="description">Keep track of your important metrics at a glance</p>\n\n\n\t<h4>Integrations</h4>\n\n\t<div id="connected-providers"><span class="loading"><i class="loading-icon"></i>Loading...</span></div>\n\t<p class="empty">No providers connected yet. Add an integration to get started!</p>\n\n\t<button class="button add-integration toggle-form"><i class="icon icon-plus"></i>Add Integration</button>\n\n\t<div class="form add-provider-container">\n\t\t<span class="hide-integration settings-cancel toggle-form">✕</span>\n\t\t<h5>Choose an Integration <i class="badge plus-badge">PLUS</i></h5>\n\n\t\t<p class="all-connected">Congratulations, you\'re fully connected!</p>\n\n\t\t<div id="available-providers"><span class="loading"><i class="loading-icon"></i>Loading...</span></div>\n\n\t\t<div class="suggest-integration">\n\t\t\t<h5>Looking for another integration?</h5>\n\t\t\t<p>\x3c!--We\'d love to hear what other services you use.<br>--\x3e\n\t\t\t\t<a href="https://get.momentumdash.help/hc/en-us/community/topics/115000492928-Integrations">Suggest an Integration</a></p>\n\t\t</div>\n\t</div>\n\n</div>\n<div class="pop-body settings-connect"></div>\n'},useData:!0});
addin.views.Main = m.views.settings.SettingsPanel.extend({
	attributes: { id: 'settings-metric', class: 'settings-view settings-metric' },
	template: addin.templates.main,
	panelid: 'metrics',
	events: {
		"click .connect-provider": "initiateConnectProvider",
		"click #connect-button": "connectMetricProvider",
		"click .disconnect": "disconnectProvider",
		"click .toggle-form": "toggleForm",
		"click .back": "cancelConnect"
	},
	initialize: function () {
		var that = this;
		this.collection = new m.collect.Settings();
		this.collection.url = m.globals.urlRoot + 'settings/metrics';
		this.collection.parse = function (response) {
			that.collection.lastResponse = response;
			return response.connected_providers;
		};
		this.listenTo(this.collection, 'reset', this.collectionReset);
		this.refreshData();
	},
	render: function () {
		this.$el.html(this.template({}));
		this.$metrics = $(this.$el.find('.settings-metrics')[0]);
		this.$empty = this.$('.empty');
		this.$addIntegration = this.$('.add-integration')
		this.$addProviderContainer = this.$('.add-provider-container');
		this.$connect = $(this.$el.find('.settings-connect')[0]);
		return this;
	},
	collectionReset: function () {
		this.populateConnectedProviders();
		this.populateAvailableProviders();
	},
	refreshData: function () {
		this.collection.fetch({ reset: true });
	},
	initiateConnectProvider: function (e) {
		if (e) {
			e.stopPropagation();
			e.preventDefault();
		}
		if (m.conditionalFeatures.featureEnabled('plus')) {
			this.connect_provider_id = $(e.currentTarget).data('provider-id');
			var provider = _.findWhere(this.collection.lastResponse.available_providers, { id: this.connect_provider_id });
			if (provider.active) {
				this.$connect.html(m.templates.settings.connect(provider));
				this.$metrics.hide();
				this.$connect.css('display', 'flex');
			}
		} else {
			var options = {
				targetRegion: 'settings',
				sourceEvent: 'todo-' + this.connect_provider_id,
				buttonText: 'Learn more',
				title: 'Metrics',
				description: 'Keep track of your important metrics at a glance'
			};
			m.commandManager.execute('upsell.message', options);
		}
	},
	disconnectProvider: function (e) {
		var self = this;
		if (e) {
			e.stopPropagation();
			e.preventDefault();
		}
		var provider_id = $(e.currentTarget).closest('.has-provider-id').data('provider-id');

		var url = m.globals.urlRootApi + 'settings/metrics/providers/' + provider_id;
		$.ajax({
				type: 'DELETE',
				contentType: 'application/json',
				beforeSend: setMomentumAuthHeader,
				url: url
			})
			.done(function (msg) {
				if (msg.status && msg.status == 'success') {
					// Tell metrics widget to reload
					self.refreshData();
					m.trigger('metrics:provider_disconnected', provider_id);
				}
			}).fail(function (jqXHR, textStatus) {});
	},
	connectMetricProvider: function (e) {
		if (e) {
			e.stopPropagation();
			e.preventDefault();
		}
		var $connectButton = $(this.$el.find('#connect-button')[0]);
		$connectButton.html('Connecting...');

		var that = this;
		this.authAttempts = 0;
		var provider_id = this.connect_provider_id;
		var url = m.globals.urlRootApi + 'settings/metrics/providers';
		var data = { provider_id: provider_id };
		$.ajax({
				type: 'PUT',
				contentType: 'application/json',
				beforeSend: setMomentumAuthHeader,
				url: url,
				data: JSON.stringify(data)
			})
			.done(function (msg) {
				if (msg.status && msg.status == 'authRequired') {
					if (msg.authorizationUrl) {
						if (that.authAttempts < 2) {
							that.authAttempts++;
							var width = msg.winWidth ? msg.winWidth : 600;
							var height = msg.winHeight ? msg.winHeight : 510;
							var windowFeatures = msg.windowFeatures ? msg.windowFeatures : "titlebar,resizable,status";
							var leftPos = (window.screen.width / 2) - (width / 2);
							var topPos = (window.screen.height / 2) - (height / 2);
							var authWindow = window.open(msg.authorizationUrl, "MomentumAuthWindow", windowFeatures + ",left=" + leftPos + ",top=" + topPos + ",width=" + width + ",height=" + height);
							var authWinClosed = setInterval(function () {
								if (authWindow.closed) {
									clearInterval(authWinClosed);
									that.$connect.hide();
									that.$metrics.show();
									that.refreshData();
								}
							}, 250);
						}
					}
				} else {
					if (msg.status && msg.status == 'success') {
						that.refreshData();
					}
				}
			}).fail(function (jqXHR, textStatus) {});
	},
	cancelConnect: function (e) {
		if (e) {
			e.stopPropagation();
			e.preventDefault();
		}
		this.$connect.hide();
		this.$metrics.show();
	},
	populateConnectedProviders: function () {
		var $container = $(this.$el.find('#connected-providers')[0]);
		var html = addin.templates.connected(this.collection.toJSON());
		var isEmpty = this.collection.length === 0;
		$container.html(html);
		this.$empty.toggle(isEmpty);
		$container.toggle(!isEmpty);
	},
	populateAvailableProviders: function () {
		var $container = $(this.$el.find('#available-providers')[0]);
		var html = addin.templates.available(this.collection.lastResponse.available_providers);
		$container.html(html);

		if (!this.collection.lastResponse.available_providers) {
			$(this.$el).find('.all-connected').show();
			$(this.$el).find('#available-providers').hide();
		} else if (this.collection.lastResponse.available_providers && this.collection.lastResponse.available_providers.length > 0) {
			$(this.$el).find('.all-connected').hide();
			$(this.$el).find('#available-providers').show();
		}
	},
	toggleForm: function () {
		this.$addIntegration.toggle()
		this.$addProviderContainer.toggle()
	},
});

if (m.commandManager) {
	m.commandManager.registerCommand('settings.panels.metrics', function () {
		return new addin.views.Main()
	})
}
 }); if(m.addinManager) {m.addinManager.registerAddinFn("db0b33aa-8ed6-4ffc-b0e0-732a9ff3391d", fn_addin);}