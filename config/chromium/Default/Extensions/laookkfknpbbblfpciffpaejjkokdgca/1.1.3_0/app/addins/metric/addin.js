var fn_addin = (function (m, $) { var addin = addin || {}; addin.styles=addin.styles||{};addin.styles.style = function(){ return; }; addin.views = addin.views || {}; addin.collect = addin.collect || {}; addin.models = addin.models || {}; addin.templates = addin.templates || {}; addin.templates=addin.templates||{},addin.templates.IntegrationMetricOption=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,a,e,n){var i,l=a.helperMissing,s="function",c=this.escapeExpression;return'<div data-id="'+c(typeof(i=null!=(i=a.id||(null!=t?t.id:t))?i:l)===s?i.call(t,{name:"id",hash:{},data:n}):i)+'" data-provider-id="'+c(typeof(i=null!=(i=a.providerId||(null!=t?t.providerId:t))?i:l)===s?i.call(t,{name:"providerId",hash:{},data:n}):i)+'" class="integration-metric next">'+c(typeof(i=null!=(i=a.name||(null!=t?t.name:t))?i:l)===s?i.call(t,{name:"name",hash:{},data:n}):i)+"</div>\n"},useData:!0}),addin.templates.custom=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,a,e,n){return'<input id="metric-edit-label" class="metric-edit-input" data-property=\'label\' type="text" placeholder="Name"/>\n<input id="metric-edit-value" class="metric-edit-input" data-property=\'value\' type="text" placeholder="Value"/>\n\n<div class="option-wrapper advanced-options">\n\t<div class="option-action advanced-edit">Advanced <i class="icon icon-angle-down"></i></div>\n\t<div class="option-form">\n\t\t<div class="input-group">\n\t\t\t<label for="metric-edit-url">Url</label>\n\t\t\t<input id="metric-edit-url" class="metric-edit-input"  data-property=\'url\' name="edit-metric-url" type="text" placeholder="http://..."/>\n\t\t</div>\n\n\t\t<div class="input-group">\n\t\t\t<label for="metric-edit-path">Path</label>\n\t\t\t<input id="metric-edit-path" class="metric-edit-input"  data-property=\'path\' name="edit-metric-path" type="text"\n\t\t\t\t   placeholder="parent.node.child..."/>\n\n\t\t</div>\n\t</div>\n\n\t<div class="metric-edit-controls">\n\t\t<span class="error-message"><span class="save-error"></span></span>\n\t\t<span class="button save">Save</span>\n\t</div>\n'},useData:!0}),addin.templates.editMetric=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,a,e,n){return'<div class="subpanes-wrapper">\n\t<div class="subpanes adding-subpanes">\x3c!--\n\t\t--\x3e<div class="subpane pane">\n\t\t\t<div class="integrations"><div class="loading">Loading...</div></div>\n\t\t\t<div data-type="custom" class="custom metric-integration">Custom</div>\n\t\t</div>\x3c!--\n\t\t--\x3e<div class="subpane pane-list pane-body metric-detail metric-edit-detail">\n\t\t</div>\n\t</div>\n</div>\n'},useData:!0}),addin.templates.integrationDetail=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,a,e,n){return'<div class="metric-selection init-step">\n\n</div>\n'},useData:!0}),addin.templates.integrationStep=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,a,e,n){return'<div class="init-step">\n\n</div>\n'},useData:!0}),addin.templates.metricInstance=Handlebars.template({1:function(t,a,e,n){return" active "},3:function(t,a,e,n){var i;return'<span class="pane-control metric-list-item-control metric-list-item-pin'+(null!=(i=a.if.call(t,null!=t?t.pinned:t,{name:"if",hash:{},fn:this.program(1,n,0),inverse:this.noop,data:n}))?i:"")+'"><svg class="icon icon-pin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 481.715 481.715"><path d="M470.951 106.124L375.59 10.765c-14.352-14.352-37.611-14.352-51.976 0a36.695 36.695 0 0 0-10.762 25.965c0 7.133 2.114 14.055 5.938 19.961L191.378 166.288c-13.12-6.07-27.472-9.416-42.217-9.416a100.534 100.534 0 0 0-71.104 29.459c-13.763 13.777-13.763 36.086 0 49.863l57.309 57.324L0 481.714l188.197-135.365 57.309 57.31c13.76 13.762 36.1 13.762 49.879 0a100.597 100.597 0 0 0 29.439-71.103c0-14.729-3.327-29.08-9.397-42.186l109.615-127.443c5.889 3.82 12.794 5.938 19.929 5.938a36.684 36.684 0 0 0 25.98-10.777c14.352-14.353 14.352-37.612 0-51.964z"/></svg></span>'},compiler:[6,">= 2.0.0-beta.1"],main:function(t,a,e,n){var i,l,s=a.helperMissing,c="function",r=this.escapeExpression;return'<div data-id="'+r(typeof(l=null!=(l=a.id||(null!=t?t.id:t))?l:s)===c?l.call(t,{name:"id",hash:{},data:n}):l)+'" class="metric-instance">\n\t<div class="metric-stat"><span class="metric-value">'+r(typeof(l=null!=(l=a.value||(null!=t?t.value:t))?l:s)===c?l.call(t,{name:"value",hash:{},data:n}):l)+'</span>\n\t\t<div class="metric-crements">\n\t\t\t<span class="metric-crement metric-increment '+(null!=(i=a.if.call(t,null!=t?t.numeric:t,{name:"if",hash:{},fn:this.program(1,n,0),inverse:this.noop,data:n}))?i:"")+'">+</span>\n\t\t\t<span class="metric-crement metric-decrement '+(null!=(i=a.if.call(t,null!=t?t.numeric:t,{name:"if",hash:{},fn:this.program(1,n,0),inverse:this.noop,data:n}))?i:"")+'">-</span>\n\t\t</div>\n\t</div>\n\t<div class="metric-label">'+r(typeof(l=null!=(l=a.label||(null!=t?t.label:t))?l:s)===c?l.call(t,{name:"label",hash:{},data:n}):l)+'</div>\n</div>\n<div class="pane-controls metric-list-item-controls">\n\t'+(null!=(i=a.unless.call(t,null!=t?t.archived:t,{name:"unless",hash:{},fn:this.program(3,n,0),inverse:this.noop,data:n}))?i:"")+'\x3c!--\n\t\t\t\t\t\t\t\t--\x3e<span class="pane-control metric-list-item-control metric-list-item-edit"><svg class="icon icon-gear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340.274 340.274"><path d="M293.629 127.806l-5.795-13.739c19.846-44.856 18.53-46.189 14.676-50.08l-25.353-24.77-2.516-2.12h-2.937c-1.549 0-6.173 0-44.712 17.48l-14.184-5.719c-18.332-45.444-20.212-45.444-25.58-45.444h-35.765c-5.362 0-7.446-.006-24.448 45.606l-14.123 5.734C86.848 43.757 71.574 38.19 67.452 38.19l-3.381.105-27.27 26.737c-4.138 3.891-5.582 5.263 15.402 49.425l-5.774 13.691C0 146.097 0 147.838 0 153.33v35.068c0 5.501 0 7.44 46.585 24.127l5.773 13.667c-19.843 44.832-18.51 46.178-14.655 50.032l25.353 24.8 2.522 2.168h2.951c1.525 0 6.092 0 44.685-17.516l14.159 5.758c18.335 45.438 20.218 45.427 25.598 45.427h35.771c5.47 0 7.41 0 24.463-45.589l14.195-5.74c26.014 11 41.253 16.585 45.349 16.585l3.404-.096 27.479-26.901c3.909-3.945 5.278-5.309-15.589-49.288l5.734-13.702c46.496-17.967 46.496-19.853 46.496-25.221V151.88c-.005-5.519-.005-7.446-46.644-24.074zM170.128 228.474c-32.798 0-59.504-26.187-59.504-58.364 0-32.153 26.707-58.315 59.504-58.315 32.78 0 59.43 26.168 59.43 58.315-.006 32.177-26.656 58.364-59.43 58.364z"></path></svg></span>\n</div>\n'},useData:!0}),addin.templates.metricIntegration=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,a,e,n){var i,l=a.helperMissing,s="function",c=this.escapeExpression;return'<div data-id="'+c(typeof(i=null!=(i=a.id||(null!=t?t.id:t))?i:l)===s?i.call(t,{name:"id",hash:{},data:n}):i)+'" data-type="integration" class="metric-integration">\n\t'+c(typeof(i=null!=(i=a.name||(null!=t?t.name:t))?i:l)===s?i.call(t,{name:"name",hash:{},data:n}):i)+"\n</div>\n"},useData:!0});
addin["styles"] = addin["styles"] || {};
addin["styles"]["style"] = function() { var style = document.createElement('style');style.type = 'text/css';style.innerHTML = '.metric-integration{display:inline-block;line-height:57px;text-align:center;width:57px;height:57px;margin-right:2px;margin-bottom:12px;background:#14a7eb;font-size:80%;border-radius:50%;cursor:pointer}.metric-integration.custom{background:#064477}.integrations .loading{display:none;text-align:center}.integrations.loading .loading{display:block}.integration-metric{opacity:.8;cursor:pointer}.integration-metric:hover{opacity:1;cursor:pointer}.init-step{transition:opacity .2s ease-in}';document.getElementsByTagName('head')[0].appendChild(style);};
addin.collect.MetricIntegrations = Backbone.Collection.extend({
	url:'/metric/integration',
	initialize: function (models, options) {
		this.metricCollection = options.metricCollection
	},
	fetch: function(onSuccess){
		var self = this
		setTimeout( function(){
			var metrics = []
			metrics.push ({id:'1', name: 'Steps', providerId: '2', included: self.isIncluded({providerId: '2', id: '1'})})
			metrics.push ({id:'2', name: 'Jumps', providerId: '2', included: self.isIncluded({providerId: '2', id: '2'})})
			var initProcess = []
			var step = { options: metrics, id:'metric-selection' }
			initProcess.push(step)
			step = { id: 'done' }
			initProcess.push(step)
			self.add({id:'2', name:'Fitbit', initProcess:initProcess})
			self.add({id:'3', name:'Github', initProcess: [step]})
			self.add({id:'4', name:'Strava', initProcess: [step]})
			onSuccess()
		}, 500)
	},
	isIncluded: function(query){
		return this.metricCollection.find(query)
	}
})

addin.collect.Metrics = m.collect.SyncedCollection.extend({
	initialize: function (options) {
		options  = options || {}
		options.name = 'metric'
		options.model = addin.models.Metric
		m.collect.SyncedCollection.prototype.initialize.call(this, options)
	},
	findPinned: function(){
		return this.filter(function (metric) {
			return !metric.get('deleted') && !metric.get('archived') && metric.get('pinned')
		})
	}
})

addin.models.Metric = Backbone.Model.extend({
	defaults: {
		id: null,
		label: '',
		value: '',
		link: null,
		userLink: null,
		path:null,
		url:null,
		active: false,
		date: new Date().getTime(),
		deleted: false,
		archived: false,
		serverSetId: false

	},
	initialize: function () {
		this.loadData();
	},
	loadData: function () {
		var that = this, self = this;
		var url = this.get('userLink');
		if (url){
			$.ajax({
				type: 'GET',
				contentType: 'application/json',
				url: url
			}).done(function (node) {
				var path = self.get('path');
				if (path) {
					var i,steps = path.split(".");
					for(i=0; i<steps.length; i++)
						node = node[steps[i]];
				}
				if(!isNaN(node) && node != self.get('value'))
					self.save('value', node);

			}).fail(function (jqXHR, textStatus) {

			});
		}
		url = m.globals.urlRootIntegration + 'services/random';
		if(this.get('link'))
		try {
			$.ajax({
				type: 'GET',
				contentType: 'application/json',
				beforeSend: m.utils.setMomentumAuthHeader,
				url: url
			}).done(function (msg, status, xhr) {
				if (msg.metricInfo) {
					//that.save('id', msg.metricInfo.metricId);
					that.save('value', msg.metricInfo.metricValue);
					that.save('label', msg.metricInfo.metricLabel);
					//if (msg.metricInfo.metricLink) {
					//	that.set('link', msg.metricInfo.metricLink);
					//}
					//else {
					//	that.set('link', null);
					//}
				}
				else if (msg.status && msg.status == 'authRequired') {
					if (msg.authorizationUrl) {
						if (that.authAttempts < 2) {
							that.authAttempts++;
							var width = msg.winWidth ? msg.winWidth : 600;
							var height = msg.winHeight ? msg.winHeight : 510;
							var windowFeatures = msg.windowFeatures ? msg.windowFeatures : "titlebar,resizable,toolbar,status";
							var leftPos = (window.screen.width / 2) - (width / 2);
							var topPos = (window.screen.height / 2) - (height / 2);
							var authWindow = window.open(msg.authorizationUrl, "MomentumAuthWindow", windowFeatures + ",left=" + leftPos + ",top=" + topPos + ",width=" + width + ",height=" + height);
							var authWinClosed = setInterval(function () {
								if (authWindow.closed) {
									clearInterval(authWinClosed);
								}
							}, 250);
						}
					}
				}
			}).fail(function (jqXHR, textStatus) {
				console.log("failed");
			});
		}
		catch (e) {}
	},

	add: function(num){
		this.save('value', Number(this.get('value'))+num)
	},
	togglePinned: function(){
		this.save('pinned', !this.get('pinned'));
	},
	save: function(){
		var hasValue = false;
		var value = null;
		if(arguments[0]) {
			if (arguments[0] == 'value') {
				hasValue = true;
				value = arguments[1];
			} else if (arguments[0].value != undefined) {
				hasValue = true;
				value = arguments[0].value
			}
		}
		if(hasValue) {
			this.get('history').push({ date: new Date().getTime(), value: value })
			Backbone.Model.prototype.save.apply(this, [{'history': this.get('history')}, arguments[1]])
		}
		Backbone.Model.prototype.save.apply(this, arguments)
	},

	getDetailViewVariables: function () {
		return { }
	},

	getViewData: function() {
		return {
			id: this.get('id'),
			label: this.get('label'),
			value: this.get('value'),
			pinned: this.get('pinned'),
			numeric: !isNaN(this.get('value')),
			archived: this.get('archived')
		}
	},
	toggleArchive: function(){
		Backbone.Model.prototype.save.apply(this, [{archived: !this.get('archived')}])
	},
	delete: function(){
		this.save('deleted', true)
	}

});



addin.models.MetricIntegration = Backbone.Model.extend({
	defaults: {
		id: null,
		name: ''
	}
});



addin.models.MetricManager = Backbone.Model.extend({
	initialize: function (attributes, options) {
		addin.collect.metrics = new addin.collect.Metrics();
		addin.collect.metrics.fetch({ reset: true });
		this.connectedMetrics = new m.collect.Settings();
		this.connectedMetrics.url = m.globals.urlRoot + 'settings/metrics';
		var self = this;
		this.connectedMetrics.parse = function (response) {
			self.connectedMetrics.lastResponse = response;
			return response.connected_providers;
		};
		this.connectedMetrics.fetch();
		this.listenTo(this.connectedMetrics, 'sync', this.loadConnectedMetrics);
	},
	loadConnectedMetrics: function(){
		//this.connectedMetrics.models.forEach( function(metric){
		//	if(!addin.collect.metrics.findWhere({link:metric.get('small_icon_url')})){
		//		addin.collect.metrics.create({link:metric.get('small_icon_url')})
		//	}
		//});
	}
});

addin.views.Metric = Backbone.View.extend({
	events: {
		"change #metric-edit-url": "update",
		"change #metric-edit-label": "update",
		"change #metric-edit-value": "update",
		"change #metric-edit-path": "update",
		"click .metric-increment": "increment",
		"click .metric-decrement": "decrement",
		"click .advanced-edit": "toggleAdvanced",
		"click .advanced-cancel": "toggleAdvanced",
		"click .custom": "showCustom",
		"click .metric-integration": "showMetricSetup",
		"click .save": "saveMetric"
	},

	initialize: function (options) {
		this.collection = options.collection
		this.parentView = options.parentView
		this.integrationCollection = new addin.collect.MetricIntegrations([], {metricCollection: this.collection})
	},
	render: function () {
		return this;
	},

	update: function () {
		if(this.model)
			this.save(this.model, false)
	},
	startAdding: function (e) {
		this.$el.find('.save').show()
		this.resetView()
		this.showOptions()
		this.setHeight()
	},
	saveMetric: function (e) {
		this.save(null, true)
		this.parentView.render()
	},
	save: function (model, create) {
		this.$el.find('.error-message').hide()
		var value = this.$el.find('#metric-edit-value').val() || 0
		var label = capitalizeWords((this.$el.find('#metric-edit-label').val() || '').trim())
		if(label.length == 0 ){
			var errorMsg = this.$el.find('.error-message .save-error')
			errorMsg.html('Please enter a name.')
			this.$el.find('.error-message').show()
		}

		var number = parseFloat(value);
		if (!isNaN(number) && (number + '') == value)
			value = number
		var modelData = {
			userLink: this.$el.find('#metric-edit-url').val(),
			path: this.$el.find('#metric-edit-path').val(),
			value: value,
			label: label
		};
		if(create) {
			modelData.custom = true
			modelData.history = [{date: new Date().getTime(), value: value}]
			this.model = this.parentView.createMetric(modelData)
		}
		else {
			model.save(modelData, {ignoreRender: true})
			this.parentView.updateMetric(model)
		}
	},
	resetView: function () {
		this.model  = null;
		this.$el.find('.error-message').hide()
		$('#metric-edit-label').val('')
		$('#metric-edit-value').val('')
		$('#metric-edit-url').val('')
		$('#metric-edit-path').val('')
	},
	editDetail: function (activeMetric) {
		this.$el.find('.error-message').hide()
		this.showCustom()
		$('#metric-edit-label').val(activeMetric.get('label'))
		$('#metric-edit-value').val(activeMetric.get('value'))
		$('#metric-edit-url').val(activeMetric.get('userLink'))
		$('#metric-edit-path').val(activeMetric.get('path'))
		this.$el.find('.save').hide()
	},
	toggleAdvanced: function (e) {
		this.$el.find('.advanced-options').toggleClass('active')
		var detailView = this.$el.find('.metric-detail-specific')
		var self = this
		setTimeout( function(){
			// self.getSubpanes().css('max-height', detailView.closest('.subpane').outerHeight() + 'px')
			self.setHeight()
		}, 1)
	},

	getSubpanes: function (e) {
		if(!this.subpanes)
			this.subpanes = this.$el.find('.subpanes.adding-subpanes')
		return this.subpanes
	},

	increment: function (e) {
		e.preventDefault();
		e.stopPropagation();
		var activeMetric = this.collection.findWhere({id: ($(e.currentTarget).closest('.metric-instance')[0] || $(e.currentTarget).closest('.metric-option')[0]).dataset.id});
		activeMetric.add(1);
		this.parentView.updateMetric(activeMetric)
	},

	decrement: function (e) {
		e.preventDefault();
		e.stopPropagation();
		var activeMetric = this.collection.findWhere({id: ($(e.currentTarget).closest('.metric-instance')[0] || $(e.currentTarget).closest('.metric-option')[0]).dataset.id});
		activeMetric.add(-1);
		this.parentView.updateMetric(activeMetric)
	},

	showOptions: function () {
		var self = this
		this.showPane()
		if(this.sourcesLoaded) {
			this.showSources()
			return
		}
		this.loading = true
		var $integrations = self.$el.find('.integrations')
		$integrations.addClass('loading')
		this.getSources(function(){
			self.loading = false
			$integrations.removeClass('loading')
			self.sourcesLoaded = true;
			self.showSources()
		})
	},

	showSources: function () {
		var self = this
		var $integrations = self.$el.find('.integrations')
		$integrations.html('')
		self.integrationCollection.models.map( function(model)
		{
			$integrations.append( addin.templates.metricIntegration(model.attributes) )
		})
		$integrations.addClass('active')
		self.setHeight()
	},

	getSources: function (callback) {
		if(!this.integrations || this.integrations.length==0){
			this.integrationCollection.fetch(callback)
		}
	},
	showCustom: function (e) {
		this.showMetricSetup()
	},
	showMetricSetup: function (e) {
		var type = 'custom'
		var dataset;
		if(e) {
			e.stopPropagation()
			dataset = e.currentTarget.dataset
			type = dataset.type
		}
		var self = this;
		var content
		if(type==='custom')
			content = addin.templates.custom()
		else
			content = new addin.views.MetricIntegration(this.integrationCollection.find({id:dataset.id}), this.parentView).render().$el
		this.$el.find('.metric-edit-detail').html(content)
		this.showPane('second')
		setTimeout(function () { if(type==='custom') self.$el.find('.metric-edit-input').first().focus()}, 50);
	},

	showIntegrations: function (e) {
		this.showPane('third')
	},

	showPane: function (pane) {
		var $subpanes = this.getSubpanes()
		$subpanes.removeClass('second')
		$subpanes.removeClass('third')
		if(pane) {
			$subpanes.addClass(pane)
			this.setHeight()
		}
	},

	hideDetail: function (e) {
		var $subpanes = this.getSubpanes()
		$subpanes.removeClass('second')
		this.setHeight()
	},

	setHeight: function () {
		var $subpanes = this.getSubpanes()
		var index = $subpanes.hasClass('second')?1:0
		$subpanes.css('max-height', $($subpanes.children()[index]).outerHeight(true) + 'px')
		this.parentView.setHeightInAnimation()
	}
});

addin.views.MetricIntegration = Backbone.View.extend({
	events: {
		"click .next": "nextStep"
	},
	template: addin.templates.integrationDetail,
	initialize: function (model, parentView) {
		this.model = model
		this.parentView = parentView
		this.currentStep = 0;
	},
	render: function () {
		this.$el.html(this.template(this.model.attributes));
		this.nextStep()
		return this;
	},
	nextStep: function(e){
		var step = this.model.get('initProcess')[this.currentStep]
		this.currentStep++
		switch(step.id){
			case 'metric-selection': {
				this.showOptions(step.options, addin.templates.IntegrationMetricOption)
				break
			}
			case 'done': {
				this.addIntegrationMetric(e)
				break
			}
		}
		if(step.id === 'done')
			this.addIntegrationMetric(e)

	},
	showStep: function(stepDiv){
		var self = this
		this.$el.fadeOut(200, function(){
			self.$el.html('')
			self.$el.append(stepDiv)
			self.$el.fadeIn(200)
		})
	},
	showOptions: function(options, template){
		var stepDiv = $(addin.templates.integrationStep());

		options.map(function(option){
			if(!option.hide)
				stepDiv.append(template(option))
		})
		this.showStep(stepDiv)
	},
	addIntegrationMetric: function(e){
		var modelData = {}
		var dataset = e.currentTarget.dataset
		modelData.id = dataset.id
		modelData.providerId = dataset.providerId
		modelData.custom = false
		this.parentView.createMetric(modelData)
		this.parentView.hide()
	}
})

/* Instantiations */
/*addin.models.metricManager = new addin.models.MetricManager()
addin.styles.style()
addin.views.metric = m.widgetManager.handover('metric', m.views.BaseMetric, {
	model: addin.models.metric,
	region: 'top-right',
	order: 'prepend',
	metricType: 'Metric',
	metricDescription: 'Metrics to meter things.',
	collection: addin.collect.metrics,
	instanceView: addin.views.Metric,
	instanceTemplate: addin.templates.metricInstance,
	detailTemplate: addin.templates.editMetric,
	updateInterval: 60000//1min
});
m.widgets.push(addin.views.metric)
*/
 }); if(m.addinManager) {m.addinManager.registerAddinFn("881eec6e-add5-4016-a8f6-b03be983f8d0", fn_addin);}