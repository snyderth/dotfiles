var fn_addin=function(s,a,t){var i=i||{};i.styles=i.styles||{},i.commands=i.commands||{},i.dependencies=t||i.dependencies||{},i.styles.style=function(){},i.views=i.views||{},i.collect=i.collect||{},i.models=i.models||{},i.templates=i.templates||{},i.templates=i.templates||{},i.templates.available=Handlebars.template({1:function(t,e,n,i){var s,a,o=e.helperMissing,l="function",r=this.escapeExpression;return'        <li data-provider-id="'+r(typeof(a=null!=(a=e.id||(null!=t?t.id:t))?a:o)===l?a.call(t,{name:"id",hash:{},data:i}):a)+'" class="connect-provider"><img src="'+r(typeof(a=null!=(a=e.small_icon_url||(null!=t?t.small_icon_url:t))?a:o)===l?a.call(t,{name:"small_icon_url",hash:{},data:i}):a)+'"><span class="provider-title">'+r(typeof(a=null!=(a=e.provider_title||(null!=t?t.provider_title:t))?a:o)===l?a.call(t,{name:"provider_title",hash:{},data:i}):a)+"</span>"+(null!=(s=e.if.call(t,null!=t?t.beta:t,{name:"if",hash:{},fn:this.program(2,i,0),inverse:this.noop,data:i}))?s:"")+'<span class="scope">'+r(typeof(a=null!=(a=e.short_description||(null!=t?t.short_description:t))?a:o)===l?a.call(t,{name:"short_description",hash:{},data:i}):a)+"</span>"+(null!=(s=e.unless.call(t,null!=t?t.active:t,{name:"unless",hash:{},fn:this.program(4,i,0),inverse:this.noop,data:i}))?s:"")+"</li>\n"},2:function(t,e,n,i){return' <span class="badge beta-badge">Beta</span>'},4:function(t,e,n,i){return'<span class="u--right status">Coming Soon</span>'},compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,n,i){var s;return'<ul class="settings-list provider-list add-provider">\n'+(null!=(s=e.each.call(t,t,{name:"each",hash:{},fn:this.program(1,i,0),inverse:this.noop,data:i}))?s:"")+"</ul>"},useData:!0}),i.templates.connected=Handlebars.template({1:function(t,e,n,i){var s,a,o=e.helperMissing,l="function",r=this.escapeExpression;return'        <li data-provider-id="'+r(typeof(a=null!=(a=e.id||(null!=t?t.id:t))?a:o)===l?a.call(t,{name:"id",hash:{},data:i}):a)+'" class="has-provider-id"><img src="'+r(typeof(a=null!=(a=e.small_icon_url||(null!=t?t.small_icon_url:t))?a:o)===l?a.call(t,{name:"small_icon_url",hash:{},data:i}):a)+'">'+r(typeof(a=null!=(a=e.provider_title||(null!=t?t.provider_title:t))?a:o)===l?a.call(t,{name:"provider_title",hash:{},data:i}):a)+(null!=(s=e.if.call(t,null!=t?t.beta:t,{name:"if",hash:{},fn:this.program(2,i,0),inverse:this.noop,data:i}))?s:"")+'<span class="scope">'+r(typeof(a=null!=(a=e.short_description||(null!=t?t.short_description:t))?a:o)===l?a.call(t,{name:"short_description",hash:{},data:i}):a)+'</span>\n         <span class="u--right">\n                <span class="provider-actions">\n                    '+(null!=(s=e.if.call(t,null!=t?t.config_command:t,{name:"if",hash:{},fn:this.program(4,i,0),inverse:this.noop,data:i}))?s:"")+'\n                    <span class="provider-action disconnect">Disconnect</span>\n                </span>\n                <span class="status">'+r(typeof(a=null!=(a=e.status||(null!=t?t.status:t))?a:o)===l?a.call(t,{name:"status",hash:{},data:i}):a)+"</span>\n            </span>\n        </li>\n"},2:function(t,e,n,i){return' <span class="badge beta-badge">Beta</span>'},4:function(t,e,n,i){return'<span class="provider-action launch-config">Configure</span>'},compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,n,i){var s;return'<ul class="settings-list provider-list connected-providers">\n'+(null!=(s=e.each.call(t,t,{name:"each",hash:{},fn:this.program(1,i,0),inverse:this.noop,data:i}))?s:"")+"</ul>"},useData:!0}),i.templates.main=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,n,i){return'<div class="pop-body settings-metrics">\n\n\t<h3>Metrics<i class="badge plus-badge">PLUS</i></h3>\n\t<p class="description">Keep track of your important metrics at a glance</p>\n\n\n\t<h4>Integrations</h4>\n\n\t<div id="connected-providers"><span class="loading"><i class="loading-icon"></i>Loading...</span></div>\n\t<p class="empty">No providers connected yet. Add an integration to get started!</p>\n\n\t<button class="button add-integration toggle-form"><i class="icon icon-plus"></i>Add Integration</button>\n\n\t<div class="form add-provider-container">\n\t\t<span class="hide-integration settings-cancel toggle-form">✕</span>\n\t\t<h5>Choose an Integration <i class="badge plus-badge">PLUS</i></h5>\n\n\t\t<p class="all-connected">Congratulations, you\'re fully connected!</p>\n\n\t\t<div id="available-providers"><span class="loading"><i class="loading-icon"></i>Loading...</span></div>\n\n\t\t<div class="suggest-integration">\n\t\t\t<h5>Looking for another integration?</h5>\n\t\t\t<p>\x3c!--We\'d love to hear what other services you use.<br>--\x3e\n\t\t\t\t<a href="https://get.momentumdash.help/hc/en-us/community/topics/115000492928-Integrations">Suggest an Integration</a></p>\n\t\t</div>\n\t</div>\n\n</div>\n<div class="pop-body settings-connect"></div>\n'},useData:!0});var o=i.dependencies.settings;return i.views.Main=o.views.SettingsPanel.extend({attributes:{id:"settings-metric",class:"settings-view settings-metric"},template:i.templates.main,panelid:"metrics",events:{"click .connect-provider":"initiateConnectProvider","click #connect-button":"connectMetricProvider","click .disconnect":"disconnectProvider","click .toggle-form":"toggleForm","click .back":"cancelConnect"},initialize:function(){var e=this;this.collection=new s.collect.Settings,this.collection.url=s.globals.urlRoot+"settings/metrics",this.collection.parse=function(t){return(e.collection.lastResponse=t).connected_providers},this.listenTo(this.collection,"reset",this.collectionReset),this.refreshData()},render:function(){return this.$el.html(this.template({})),this.$metrics=a(this.$el.find(".settings-metrics")[0]),this.$empty=this.$(".empty"),this.$addIntegration=this.$(".add-integration"),this.$addProviderContainer=this.$(".add-provider-container"),this.$connect=a(this.$el.find(".settings-connect")[0]),this},collectionReset:function(){this.populateConnectedProviders(),this.populateAvailableProviders()},refreshData:function(){this.collection.fetch({reset:!0})},initiateConnectProvider:function(t){if(t&&(t.stopPropagation(),t.preventDefault()),s.conditionalFeatures.featureEnabled("plus")){this.connect_provider_id=a(t.currentTarget).data("provider-id");var e=_.findWhere(this.collection.lastResponse.available_providers,{id:this.connect_provider_id});e.active&&(this.$connect.html(o.templates.connect(e)),this.$metrics.hide(),this.$connect.css("display","flex"))}else{var n={targetRegion:"settings",sourceEvent:"todo-"+this.connect_provider_id,buttonText:"Learn more",title:"Metrics",description:"Keep track of your important metrics at a glance"};s.commandManager.execute("upsell.message",n)}},disconnectProvider:function(t){var e=this;t&&(t.stopPropagation(),t.preventDefault());var n=a(t.currentTarget).closest(".has-provider-id").data("provider-id"),i=s.globals.urlRootApi+"settings/metrics/providers/"+n;a.ajax({type:"DELETE",contentType:"application/json",beforeSend:setMomentumAuthHeader,url:i}).done(function(t){t.status&&"success"==t.status&&(e.refreshData(),s.trigger("metrics:provider_disconnected",n))}).fail(function(t,e){})},connectMetricProvider:function(t){t&&(t.stopPropagation(),t.preventDefault()),a(this.$el.find("#connect-button")[0]).html("Connecting...");var r=this;this.authAttempts=0;var e=this.connect_provider_id,n=s.globals.urlRootApi+"settings/metrics/providers",i={provider_id:e};a.ajax({type:"PUT",contentType:"application/json",beforeSend:setMomentumAuthHeader,url:n,data:JSON.stringify(i)}).done(function(t){if(t.status&&"authRequired"==t.status){if(t.authorizationUrl&&r.authAttempts<2){r.authAttempts++;var e=t.winWidth?t.winWidth:600,n=t.winHeight?t.winHeight:510,i=t.windowFeatures?t.windowFeatures:"titlebar,resizable,status",s=window.screen.width/2-e/2,a=window.screen.height/2-n/2,o=window.open(t.authorizationUrl,"MomentumAuthWindow",i+",left="+s+",top="+a+",width="+e+",height="+n),l=setInterval(function(){o.closed&&(clearInterval(l),r.$connect.hide(),r.$metrics.show(),r.refreshData())},250)}}else t.status&&"success"==t.status&&r.refreshData()}).fail(function(t,e){})},cancelConnect:function(t){t&&(t.stopPropagation(),t.preventDefault()),this.$connect.hide(),this.$metrics.show()},populateConnectedProviders:function(){var t=a(this.$el.find("#connected-providers")[0]),e=i.templates.connected(this.collection.toJSON()),n=0===this.collection.length;t.html(e),this.$empty.toggle(n),t.toggle(!n)},populateAvailableProviders:function(){var t=a(this.$el.find("#available-providers")[0]),e=i.templates.available(this.collection.lastResponse.available_providers);t.html(e),this.collection.lastResponse.available_providers?this.collection.lastResponse.available_providers&&0<this.collection.lastResponse.available_providers.length&&(a(this.$el).find(".all-connected").hide(),a(this.$el).find("#available-providers").show()):(a(this.$el).find(".all-connected").show(),a(this.$el).find("#available-providers").hide())},toggleForm:function(){this.$addIntegration.toggle(),this.$addProviderContainer.toggle()}}),s.commandManager&&s.commandManager.registerCommand("settings.panels.metrics",function(){return new i.views.Main}),i};m.addinManager&&m.addinManager.registerAddinFn("db0b33aa-8ed6-4ffc-b0e0-732a9ff3391d",fn_addin);