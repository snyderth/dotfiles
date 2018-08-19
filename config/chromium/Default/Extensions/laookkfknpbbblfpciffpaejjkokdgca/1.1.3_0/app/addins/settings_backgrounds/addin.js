var fn_addin = (function (m, $) { var addin = addin || {}; addin.styles=addin.styles||{};addin.styles.style = function(){ return; }; addin.views = addin.views || {}; addin.collect = addin.collect || {}; addin.models = addin.models || {}; addin.templates = addin.templates || {}; addin.templates=addin.templates||{},addin.templates.custom=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,n,s,a){return'<div class="settings-empty loading">\n\t<p class="settings-empty-loading"><i class="loading-icon"></i>Loading...</p>\n\t<p class="settings-empty-title">Personalize your inspiration by adding your own photos</p>\n\t<p class="settings-empty-description">Drag and drop a photo or click + Add Photo</p>\n</div>\n\n<ul class="tile-list backgrounds-list"></ul>\n'},useData:!0}),addin.templates.detailCustom=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,n,s,a){var e,l=n.helperMissing,i="function",o=this.escapeExpression;return'<div class="pop-body settings-detail settings-detail-background">\n\t<span class="back action action-back"><i class="icon icon-angle-left"></i></span>\n\t<div class="settings-detail-header">\n\t\t<h3>Edit Photo</h3>\n\t</div>\n\n\t<div class="settings-detail-body">\n\t\t<form class="settings-background-edit">\n\t\t\t<div class="image" align="center">\n\t\t\t\t<img class="img-uploaded" align="center" alt="Uploaded Image"/>\n\t\t\t</div>\n\n\t\t\t<h4>Photo Info <span class="optional">Optional</span></h4>\n\n\t\t\t<div class="input-group">\n\t\t\t\t<label>Title</label>\n\t\t\t\t<input type="text" name="title" class="input-title" placeholder="e.g. Location" value="'+o(typeof(e=null!=(e=n.title||(null!=t?t.title:t))?e:l)===i?e.call(t,{name:"title",hash:{},data:a}):e)+'" maxlength="'+o(typeof(e=null!=(e=n.inputLengthMaxHtml||(null!=t?t.inputLengthMaxHtml:t))?e:l)===i?e.call(t,{name:"inputLengthMaxHtml",hash:{},data:a}):e)+'">\n\t\t\t</div>\n\n\t\t\t<div class="input-group">\n\t\t\t\t<label>Source</label>\n\t\t\t\t<input type="text" name="source" class="input-source" placeholder="e.g. Photographer Name" value="'+o(typeof(e=null!=(e=n.source||(null!=t?t.source:t))?e:l)===i?e.call(t,{name:"source",hash:{},data:a}):e)+'" maxlength="'+o(typeof(e=null!=(e=n.inputLengthMaxHtml||(null!=t?t.inputLengthMaxHtml:t))?e:l)===i?e.call(t,{name:"inputLengthMaxHtml",hash:{},data:a}):e)+'">\n\t\t\t</div>\n\n\t\t\t<div class="actions">\x3c!--\n\t\t\t\t--\x3e<span class="button submit"><i class="loading-icon"></i><i class="error-icon" title="Trouble connecting... Click to retry">!</i>Save</span>\x3c!--\n\t\t\t\t--\x3e<span class="button button-secondary cancel">Cancel</span>\x3c!--\n\t\t\t\t--\x3e<div class="u--right">\x3c!--\n\t\t\t\t\t--\x3e<span class="actions-right button button-secondary button-set-active">Set Active</span>\x3c!--\n\t\t\t\t\t--\x3e<span class="actions-right button button-secondary button-delete">Delete</span>\x3c!--\n\t\t\t\t\t--\x3e<span class="delete-group">\x3c!--\n\t\t\t\t\t\t--\x3e<span class="button button-secondary delete-msg u--not-clickable">Delete?</span>\x3c!--\n\t\t\t\t\t\t--\x3e<span class="button control button-secondary delete-yes">\n\t\t\t\t\t\t\t<i class="icon icon-checkmark">\n\t\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 577.95 469.42"><polygon points="195.09 469.42 137.44 424.64 140.4 421.42 0 298 46.22 245.43 187.68 369.79 526.33 0 577.95 47.28 229.72 427.53 195.09 469.42"/></svg>\n\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t</span>\x3c!--\n\t\t\t\t\t\t--\x3e<span class="button control button-secondary delete-no">\n\t\t\t\t\t\t\t<i class="icon icon-x">\n\t\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.97 47.97"><path d="M28.23,24,47.09,5.12A3,3,0,0,0,42.85.88L24,19.74,5.12.88A3,3,0,0,0,.88,5.12L19.74,24,.88,42.85a3,3,0,1,0,4.24,4.24L24,28.23,42.85,47.09a3,3,0,0,0,4.24-4.24Z" transform="translate(0 0)"/></svg>\n\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t</span>\x3c!--\n\t\t\t\t\t--\x3e</span>\x3c!--\n\t\t\t\t--\x3e</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n'},useData:!0}),addin.templates.detailStock=Handlebars.template({1:function(t,n,s,a){var e,l=n.helperMissing,i="function",o=this.escapeExpression;return'\t\t\t\t<span class="background-stock-source clickable-hack"><a href="'+o(typeof(e=null!=(e=n.sourceUrl||(null!=t?t.sourceUrl:t))?e:l)===i?e.call(t,{name:"sourceUrl",hash:{},data:a}):e)+'" target="_blank">'+o(typeof(e=null!=(e=n.attribution||(null!=t?t.attribution:t))?e:l)===i?e.call(t,{name:"attribution",hash:{},data:a}):e)+"</a></span>\n"},3:function(t,n,s,a){var e;return'\t\t\t\t<span class="background-stock-source u--selectable">'+this.escapeExpression("function"==typeof(e=null!=(e=n.attribution||(null!=t?t.attribution:t))?e:n.helperMissing)?e.call(t,{name:"attribution",hash:{},data:a}):e)+"</span>\n\t\t\t"},5:function(t,n,s,a){return'<span class="badge plus-badge">PLUS</span>'},compiler:[6,">= 2.0.0-beta.1"],main:function(t,n,s,a){var e,l,i=n.helperMissing,o="function",c=this.escapeExpression;return'<div class="pop-body settings-detail settings-detail-background">\n\t<span class="back action action-back"><i class="icon icon-angle-left"></i></span>\n\t<div class="settings-detail-header">\n\t\t<h3>Photo Info</h3>\n\t</div>\n\n\t<div class="settings-detail-body">\n\t\t<div class="image" align="center">\n\t\t\t<img class="img-uploaded" align="center" alt="Uploaded Image"/>\n\t\t</div>\n\n\t\t<div class="background-stock-info">\n\t\t\t<span class="background-stock-title u--selectable">'+c(typeof(l=null!=(l=n.title||(null!=t?t.title:t))?l:i)===o?l.call(t,{name:"title",hash:{},data:a}):l)+"</span><br>\n"+(null!=(e=n.if.call(t,null!=t?t.sourceUrl:t,{name:"if",hash:{},fn:this.program(1,a,0),inverse:this.program(3,a,0),data:a}))?e:"")+'<br>\n\t\t\t<span class="background-stock-date">Last seen '+c(typeof(l=null!=(l=n.displayDate||(null!=t?t.displayDate:t))?l:i)===o?l.call(t,{name:"displayDate",hash:{},data:a}):l)+'</span>\n\t\t\t<span class="button button-secondary button-set-active button-set-active-stock clickable-hack">\n\t\t\t\t'+c(typeof(l=null!=(l=n.labelSelect||(null!=t?t.labelSelect:t))?l:i)===o?l.call(t,{name:"labelSelect",hash:{},data:a}):l)+"\n\t\t\t\t"+(null!=(e=n.unless.call(t,null!=t?t.plusUser:t,{name:"unless",hash:{},fn:this.program(5,a,0),inverse:this.noop,data:a}))?e:"")+"\n\t\t\t</span>\n\t\t</div>\n\t</div>\n</div>\n\n"},useData:!0}),addin.templates.favorites=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,n,s,a){return'<div class="settings-empty loading">\n\t<p class="settings-empty-loading"><i class="loading-icon"></i>Loading...</p>\n\t<p class="settings-empty-title">Click the heart icon under a photo caption to start your collection</p>\n\t<p class="settings-empty-description">No favorite photos</p>\n</div>\n\n<ul class="tile-list backgrounds-list"></ul>\n'},useData:!0}),addin.templates.history=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,n,s,a){return'<div class="settings-empty loading">\n\t<p class="settings-empty-loading"><i class="loading-icon"></i>Loading...</p>\n\t<p class="settings-empty-title">You will see your past photos here</p>\n\t<p class="settings-empty-description">Can\'t find any history for this account</p>\n</div>\n\n<ul class="tile-list backgrounds-list"></ul>\n<div class="load-more">\n\t<span class="button load-more-button">Load More</span>\n</div>'},useData:!0}),addin.templates.main=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,n,s,a){var e,l=n.helperMissing,i="function",o=this.escapeExpression;return'\x3c!-- Header --\x3e\n\n<div class="subpanel-header">\n\t<span class="button-advanced">Feeds<i class="icon icon-angle-down"></i></span>\n\t<h3>Photos</h3>\n\t<p class="description">See a new inspiring photo each day</p>\n</div>\n\n\n\x3c!-- Feeds --\x3e\n\n<div class="wrapper-advanced">\n\t<h4>Feeds</h4>\n\t<ul class="settings-list">\n\t\t<li class="slide-toggle '+o(typeof(e=null!=(e=n.feedMomentumClass||(null!=t?t.feedMomentumClass:t))?e:l)===i?e.call(t,{name:"feedMomentumClass",hash:{},data:a}):e)+'" id="feed-momentum-slider">\n\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t<span class="setting-name">Momentum Photos</span>\n\t\t\t<span class="option-message">See a daily photo from our curated feed</span>\n\t\t</li>\n\t\t<li class="slide-toggle '+o(typeof(e=null!=(e=n.feedCustomClass||(null!=t?t.feedCustomClass:t))?e:l)===i?e.call(t,{name:"feedCustomClass",hash:{},data:a}):e)+'" id="feed-custom-slider">\n\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t<span class="setting-name">'+o(typeof(e=null!=(e=n.labelCustom||(null!=t?t.labelCustom:t))?e:l)===i?e.call(t,{name:"labelCustom",hash:{},data:a}):e)+'</span>\n\t\t\t<span class="badge plus-badge">PLUS</span>\n\t\t\t<span class="option-message">Add your own photos and change the photo anytime</span>\n\t\t</li>\n\t</ul>\n</div>\n\n\n\x3c!-- Subnav + add button --\x3e\n\n<nav class="settings-subnav">\n\t<div class="subnav-titles">\n\t\t<h4 class="custom">'+o(typeof(e=null!=(e=n.labelCustom||(null!=t?t.labelCustom:t))?e:l)===i?e.call(t,{name:"labelCustom",hash:{},data:a}):e)+'</h4>\x3c!--\n\t\t--\x3e<h4 class="favorites">Favorites</h4>\x3c!--\n\t\t--\x3e<h4 class="history">History</h4>\n\t</div>\n\t<div class="button-add-container">\n\t\t<input type="file" multiple class="add-background file-input">\n\t\t<span class="button button-choose fake-file-input list-add-button">+ Add Photo</span>\n\t</div>\n</nav>\n<div class="settings-subnav-placeholder"></div>\n\n\n\x3c!-- Lists --\x3e\n\n<div class="list-wrapper has-subnav">\n\t<div class="list-body list-body-custom"></div>\n\t<div class="list-body list-body-favorites"></div>\n\t<div class="list-body list-body-history"></div>\n</div>\n'},useData:!0}),addin.templates.tile=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,n,s,a){var e,l=n.helperMissing,i="function",o=this.escapeExpression;return'<span class="tile-list-image"></span>\n<span class="tile-list-actions">\x3c!--\n\t--\x3e<span class="control control-select" title="'+o(typeof(e=null!=(e=n.labelSelect||(null!=t?t.labelSelect:t))?e:l)===i?e.call(t,{name:"labelSelect",hash:{},data:a}):e)+'"><i class="icon-check"></i></span>\x3c!--\n\t--\x3e<span class="control control-select-error" title="'+o(typeof(e=null!=(e=n.labelSelectError||(null!=t?t.labelSelectError:t))?e:l)===i?e.call(t,{name:"labelSelectError",hash:{},data:a}):e)+'">\n\t\t<span class="icon-error-wrapper">\n\t\t\t<svg class="icon-error" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" viewBox="0 0 24 24" xml:space="preserve"><g><path d="M12,0C5.373,0,0,5.373,0,12s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0z M12,19.66   c-0.938,0-1.58-0.723-1.58-1.66c0-0.964,0.669-1.66,1.58-1.66c0.963,0,1.58,0.696,1.58,1.66C13.58,18.938,12.963,19.66,12,19.66z    M12.622,13.321c-0.239,0.815-0.992,0.829-1.243,0c-0.289-0.956-1.316-4.585-1.316-6.942c0-3.11,3.891-3.125,3.891,0   C13.953,8.75,12.871,12.473,12.622,13.321z" fill="#D80027" /></g></svg>\n\t\t</span>\n\t</span>\x3c!--\n\t--\x3e<span class="control control-edit" title="'+o(typeof(e=null!=(e=n.editIconTitle||(null!=t?t.editIconTitle:t))?e:l)===i?e.call(t,{name:"editIconTitle",hash:{},data:a}):e)+'"><i class="'+o(typeof(e=null!=(e=n.editIconClass||(null!=t?t.editIconClass:t))?e:l)===i?e.call(t,{name:"editIconClass",hash:{},data:a}):e)+'"></i></span>\n</span>\n<span class="tile-list-loading"><i class="loading-icon"></i></span>\n'},useData:!0});
addin["styles"] = addin["styles"] || {};
addin["styles"]["style"] = function() { var style = document.createElement('style');style.type = 'text/css';style.innerHTML = '.tile-list-image,.tile-list-item .tile-list-loading,.tile-list-item:before{bottom:0;left:0;top:0;right:0;position:absolute}.settings-backgrounds ::-webkit-file-upload-button{cursor:pointer}.settings-backgrounds .button-add-container{position:relative}.settings-backgrounds .button-add-container:hover .fake-file-input{background:rgba(255,255,255,.4)}.light .settings-backgrounds .button-add-container:hover .fake-file-input{background:rgba(0,0,0,.5)}.settings-backgrounds .file-input{height:100%;padding:0;position:absolute;border-bottom:none;cursor:pointer;opacity:0;z-index:2}.settings-backgrounds .backgrounds-list{padding:2px;display:none}.tile-list .tile-list-item{height:70px;width:22.75%;margin-bottom:15px;margin-right:3%;position:relative;display:inline-block;box-sizing:content-box;cursor:pointer;overflow:hidden;-webkit-transition:opacity .2s ease;transition:opacity .2s ease;vertical-align:top}.tile-list-item:nth-child(4n){margin-right:0}.tile-list-item:before{z-index:1;background:#fff;opacity:0}.tile-list-item:hover:before{opacity:.2}.tile-list-image{z-index:0;background-position:50% 50%;background-repeat:no-repeat;background-size:cover;border-radius:2px}.tile-list-item:hover .tile-list-image{opacity:.8}.tile-list-item.active{box-shadow:inset 0 0 0 1px #32cd32,0 0 0 2px #32cd32;z-index:10}.tile-list-item.uploading{clip-path:inset(0 100% 0 0);opacity:.4}.tile-list-item.already-active{opacity:.7}.tile-list-item .tile-list-loading{margin:0;display:none;align-items:center;justify-content:center}.tile-list-item .tile-list-loading .loading-icon{height:20px;width:20px;margin-right:0;border-color:#fff!important}.tile-list-item.activating .tile-list-image{opacity:.5}.tile-list-item.activating:hover .tile-list-actions{display:none}.tile-list-item.activating .tile-list-loading{display:flex}.tile-list-actions{position:absolute;top:0;right:0;z-index:2;display:none;color:#fff;text-shadow:0 0 15px #000}.active .tile-list-actions,.tile-list-item:hover .tile-list-actions{display:inline-block}.active .tile-list-actions .control-select{color:#fff}.tile-list-actions .control{padding:3px;display:inline-block;color:rgba(255,255,255,.8)}.tile-list-actions .control:hover{color:#fff}.tile-list-actions .control-select-error{display:none;fill-opacity:.65}.tile-list-actions .control-select-error:hover{fill-opacity:1}.set-active-failed .tile-list-actions{display:inline-block}.set-active-failed .tile-list-actions .control-select{display:none}.set-active-failed .tile-list-actions .control-select-error{display:inline-block}.tile-list-actions .icon-error-wrapper{position:relative;top:2px}.tile-list-actions .icon-error{height:13px}.settings-detail-background .settings-detail-header{height:50px;margin:-25px 0 10px}.settings-detail-background .settings-detail-header h3{font-size:140%;line-height:51px}.settings-detail-body{display:block}.settings-detail-body .image{width:100%;margin-bottom:18px;background-size:cover}.settings-detail-body .img-uploaded{max-width:100%;max-height:100%;border-radius:2px;display:none;vertical-align:middle}.settings-detail-body h4{margin-bottom:10px}.settings-detail-body .optional{margin-left:3px;opacity:.6}.settings-background-edit .actions{margin-right:-10px}.settings-background-edit .submit{position:relative}.settings-background-edit .submit .loading-icon{top:11px;left:8px}.settings-background-edit .submit .error-icon{top:10px;left:8px}.settings-background-edit .cancel{padding-left:20px;padding-right:20px}.settings-background-edit .delete-group{display:none}.settings-background-edit .delete-group .button{padding-right:5px;padding-left:5px}.settings-background-edit .delete-group .delete-no{padding-right:10px}.background-stock-info{margin-top:-13px;position:relative}.background-stock-title{padding:3px 0 1px;display:inline-block;font-size:100%}.background-stock-source{display:inline-block;font-size:85%;opacity:.5}.background-stock-date{display:inline-block;font-size:80%;opacity:.35}.background-stock-info .button-set-active-stock{position:absolute;top:9px;right:-10px}.background-stock-info .plus-badge{margin-left:4px}.settings-detail-background .background-stock-info .clickable-hack:hover{opacity:.8}.settings-detail-background .background-stock-info .u--not-clickable{cursor:default}.settings-detail-background .background-stock-info .u--not-clickable:hover{opacity:.5}';document.getElementsByTagName('head')[0].appendChild(style);};
addin.collect.Backgrounds = Backbone.Collection.extend({
	loadedOnce: false,
	initialize: function () {
		this.model = addin.models.Background
		this.listenTo(this, 'reset', this.onReset)
	},
	onReset: function () {
		this.loadedOnce = true
	},
	comparator: function (modelA, modelB) {
		var sortBy = this.sortAttribute || 'sort_order'
		var a = modelA.get(sortBy)
		var b = modelB.get(sortBy)
		if (a == b) return 0
		if (a < b) return (this.reverse_sort ? 1 : -1)
		if (a > b) return (this.reverse_sort ? -1 : 1)
	}
})
addin.models.Background = Backbone.Model.extend({
	save: function (attrs, options) {
		options = options || {}
		options.patch = true
		// Proxy the call to the original save function
		Backbone.Model.prototype.save.call(this, attrs, options)
	},

	getThumbnailUrl: function (callback) {
		if (!callback) return

		if (this.blobUrl) {
			callback(this.blobUrl)
			return
		}

		var file = this.get('file')
		if (file) {
			var reader = new FileReader(),
					self = this

			reader.onload = function (e) {
				self.blobUrl = e.target.result
				callback(self.blobUrl)
			}

			reader.readAsDataURL(file)
		}
		else {
			var thumbnail_url = this.get('thumbnail_url')
			if (thumbnail_url) {
				callback(thumbnail_url)
			}
		}
	},

	getPreviewUrl: function (callback) {
		if (!callback) return
		var file = this.get('file')
		if (file) {
			var reader = new FileReader()

			reader.onload = function (e) {
				callback(e.target.result)
			}

			reader.readAsDataURL(file)
		}
		else {
			var preview_url = this.get('preview_url')
			if (preview_url) {
				callback(preview_url)
			}
		}
	},

	setActive: function (errorCallback, successCallback) {
		var url = m.globals.urlRootApi + 'settings/background/active',
				data = {},
				id = this.get('_id') || this.get('id'),
				self = this
		this.get('is_custom') ? data.custom_background_id = id : data.background_id = id

		$.ajax({
			type: 'POST',
			contentType: 'application/json',
			beforeSend: setMomentumAuthHeader,
			data: JSON.stringify(data),
			url: url
		})
			.done(function (msg) {
				if (msg && msg.success) {
					m.trigger('sync:download', 'background')
					m.trigger('waitForPhotoActivation', true)
					if (self.get('is_custom')) m.trigger('background:set-active-custom')
					if (successCallback) successCallback()
				} else {
					if (errorCallback) errorCallback()
				}
			})
			.fail(function () { errorCallback() })
	},

	getFriendlyDate: function (date) {
		return getFriendlyDate(date)
	}
})

addin.models.BackgroundSettingsManager = Backbone.Model.extend({
	feedCustomName: 'background-feed-custom',      	// Name of custom feed for settings object and localStorage
	feedMomentumName: 'background-feed-momentum',  	// Name of momentum feed "
	gaTitle: 'Background Settings',									// Title for Google Analytics events for backgrounds panel
	labelCustom: 'My Photos',												// Label for custom photos
	newModels: [],

	initialize: function () {
		if (!m.uploadManager) m.uploadManager = new m.models.UploadManager()

		this.settings = new m.models.GenericSettings('settings/background')
		this.lastActiveBackground = m.models.activeBackground.activeBackgroundUuid()
		this.plusUser = m.conditionalFeatures.featureEnabled('plus')
		this.skippedFiles = new Backbone.Collection()

		this.CustomBackgrounds()

		this.listenTo(this.collection, 'change:file_upload_uri', this.uploadDestinationReady)
		this.listenTo(this.collection, 'add', this.onCollectionAdd)
		this.listenTo(this.collection, 'reset', this.onCollectionReset)
		this.listenTo(m, 'background:loadSuccessful', this.onBackgroundLoad)
		this.listenTo(m, 'background:favorite', this.onBackgroundFavorited)
	},

	onCollectionAdd: function (model) {
		if (!_.findWhere(this.newModels, { id: model.id })) {
			this.newModels.push(model)
		}
	},

	onCollectionReset: function () {
		var self = this
		_.each(this.newModels, function (model) {
			if (!self.collection.contains(model)) {
				self.collection.add(model)
			}
		})
	},

	onBackgroundLoad: function (id) {
		if (this.lastActiveBackground === id) return
		if (this.history) {
			var firstItem = this.history.at(0)
			if (firstItem && firstItem.get('_id') !== id) {
				var newActive = this.history.findWhere({ _id: id })
				if (!newActive && this.collection) {
					newActive = this.collection.findWhere({ id: id })
				}
				if (!newActive && this.favorites) {
					newActive = this.favorites.findWhere({ id: id })
				}
				if (newActive) {
					var clone = newActive.clone()
					if (!clone.has('_id')) clone.set('id', id)
					clone.set('sort_order', clone.get('sort_order') + '-' + Date.now())
					clone.prepend = true
					this.history.add(clone)
					this.history.sort()
					this.lastActiveBackground = id
				}
			}
		}
	},

	onBackgroundFavorited: function (favorite) {
		if (this.favorites) {
			var existingFavorite = this.favorites.get(favorite.id)
			if (existingFavorite) {
				// Set last_updated and do a sort, so that the re-render appears in the new place, not the original as downloaded from API
				existingFavorite.set({ is_favorite: favorite.is_favorite, last_updated: (new Date()).toISOString() })
				this.favorites.sort()
			}
			else {
				// Refresh the favorites to pull in the new one, only firing events for added items
				this.favorites.fetch({ remove: false })
			}
		}
	},

	CustomBackgrounds: function () {
		if (!this.collection) {
			this.collection = new addin.collect.Backgrounds()
			this.collection.url = m.globals.urlRoot + 'settings/background/backgrounds'
			this.collection.reverse_sort = true
		}
		return this.collection
	},

	Favorites: function () {
		if (!this.favorites) {
			this.favorites = new addin.collect.Backgrounds()
			this.favorites.url = m.globals.urlRoot + 'backgrounds/favorites'
			this.favorites.sortAttribute = 'last_updated'
			this.favorites.reverse_sort = true
		}
		return this.favorites
	},

	History: function () {
		var self = this
		if (!this.history) {
			this.history = new addin.collect.Backgrounds()
			this.history.url = m.globals.urlRoot + 'backgrounds/history'
			this.history.reverse_sort = true
			this.history.load_more = m.utils.getActiveDateString()
			this.history.parse = function (data) {
				self.history.load_more = data.load_more
				return data.history
			}
		}
		return this.history
	},

	// TODO check if can remove once new content feed allocation complete
	LoadMoreHistory: function () {
		if (this.history.load_more) {
			this.history.fetch({ remove: false, data: { priorToDate: this.history.load_more } })
		}
	},

	toggleFeedMomentum: function () {
		if (this.plusUser) {
			this.settings.toggle(this.feedMomentumName)
			sendEventToggleFeed(this.gaTitle, 'Toggle Momentum', this.settings.get(this.feedMomentumName))
		}
	},

	toggleFeedCustom: function () {
		if (this.plusUser) {
			this.settings.toggle(this.feedCustomName)
			sendEventToggleFeed(this.gaTitle, 'Toggle Custom', this.settings.get(this.feedCustomName))
		} else {
			this.showPlusUpsellNotif()
		}
	},

	showPlusUpsellNotif: function () {
		var options = {
			targetRegion: 'settings',
			sourceEvent: 'customBackgrounds',
			buttonText: 'Learn more',
			title: this.labelCustom,
			description: 'Change your photo anytime to anything you want'
		}
		m.commandManager.execute('upsell.message', options)
	},

	uploadDestinationReady: function (model) {
		m.uploadManager.uploadFile(model)
	},

	uploadFile: function (file, success) {
		var self = this
		if (file.type.startsWith('image/')) {
			self.collection.create({
				filename: file.name,
				type: file.type,
				size: file.size,
				file: file,
				upload_completed: false,
				is_custom: true,
				display_date: new Date(),
				sort_order: Date.now()
			}, {
				success: function (imageModel) {
					m.sendEvent(self.gaTitle, 'Add')
					if (success) {
						success(imageModel)
					}
				}
			})
		}
		else {
			var skippedFile = { name: file.name, type: file.type }
			self.skippedFiles.add(skippedFile)
			self.trigger('fileSkipped', skippedFile)
		}
	},

	uploadFiles: function (files) {
		var self = this
		_.each(files, function (file) {
			self.uploadFile(file)
		}, this)
	}
})

m.models.UploadManager = Backbone.Model.extend({
	initialize: function () {
		var options = options || {}
		// console.log('UploadManager initialize...')
		this.filesUrl = m.globals.urlRootApi + 'files'

		this.collection = new Backbone.Collection()
		this.listenTo(this.collection, 'change:upload_completed', this.uploadCompleted)
		this.maxBlockSize = options.maxBlockSize == null ? 256 * 1024 : options.maxBlockSize
		this.blockIdPrefix = "block-"

		this.filesUploading = 0
		this.totalBytes = 0
		this.totalBytesUploaded = 0
		this.bytesPerFile = {}
		this.files = {}
	},

	uploadCompleted: function (model) {
		var self = this
		var file_uuid = model.get('file_uuid')
		$.ajax({
			url: self.filesUrl + '/' + file_uuid,
			contentType: 'application/json',
			type: "PATCH",
			beforeSend: setMomentumAuthHeader,
			data: JSON.stringify({upload_completed: true}),
			success: function (patchResult) {
				model.set(patchResult)
				self.collection.remove(model)
			},
			error: function (xhr, desc) {
				model.set({upload_failed: true})
			}
		})
	},

	uploadFile: function (model, el) {
		this.collection.add(model)
		var self = this
		var file = model.get('file')
		var reader = new FileReader()
		var uploadUri = model.get('file_upload_uri')

		var maxBlockSize = this.maxBlockSize
		var currentFilePointer = 0
		var totalBytesRemaining = 0
		var blockIds = []
		var bytesUploaded = 0

		var fileSize = model.get('size')

		this.totalBytes += fileSize

		if (fileSize < maxBlockSize) {
			maxBlockSize = fileSize
		}
		totalBytesRemaining = fileSize

		function uploadFileInBlocks() {
			if (totalBytesRemaining > 0) {
				var fileContent = file.slice(currentFilePointer, currentFilePointer + maxBlockSize)
				var blockId = self.blockIdPrefix + self.pad(blockIds.length, 6)
				blockIds.push(btoa(blockId))
				reader.readAsArrayBuffer(fileContent)
				currentFilePointer += maxBlockSize

				totalBytesRemaining -= maxBlockSize

				if (totalBytesRemaining < maxBlockSize) {
					maxBlockSize = totalBytesRemaining
				}
			} else {
				commitBlockList()
			}
		}

		function commitBlockList() {
			var uri = uploadUri + "&comp=blocklist"
			var requestBody = "<?xml version='1.0' encoding='utf-8'?><BlockList>"
			var i
			for (i = 0; i < blockIds.length; i++) {
				requestBody += "<Latest>" + blockIds[i] + "</Latest>"
			}
			requestBody += "</BlockList>"

			$.ajax({
				url: uri,
				type: "PUT",
				data: requestBody,
				beforeSend: function (xhr) {
					xhr.setRequestHeader("x-ms-blob-content-type", file.type)
				},
				success: function () {
					model.set('upload_completed', true)
				},
				error: function (xhr, desc, err) {
					model.set({upload_failed: true})
				}
			})
		}

		reader.onloadend = function (e) {
			if (e.target.readyState == FileReader.DONE) {
				var uri = uploadUri + "&comp=block&blockid=" + blockIds[blockIds.length - 1]
				var requestData = new Uint8Array(e.target.result)
				var currentBytes = requestData.length

				$.ajax({
					url: uri,
					type: "PUT",
					data: requestData,
					processData: false,
					beforeSend: function (xhr) {
						xhr.setRequestHeader("x-ms-blob-type", "BlockBlob")
						xhr.setRequestHeader("x-ms-blob-content-type", file.type)
					},
					success: function () {
						bytesUploaded += currentBytes
						model.set({fileprogress: parseInt(bytesUploaded / fileSize * 100)})
						uploadFileInBlocks()
					},
					error: function (xhr, desc, err) {
						model.set({upload_failed: true})
					}
				})
			}
		}
		uploadFileInBlocks()
	},
	
	pad: function (number, length) {
		var str = "" + number
		while (str.length < length) {
			str = "0" + str
		}
		return str
	}
})
addin.views.Custom = Backbone.View.extend({
	template: addin.templates.custom,

	initialize: function (options) {
		this.main = options.main
		this.subViews = []
		if (!m.backgroundSettingsManager) m.backgroundSettingsManager = new addin.models.BackgroundSettingsManager()
		this.collection = m.backgroundSettingsManager.CustomBackgrounds()

		this.listenTo(this.collection, 'reset', this.addAll)
		this.listenTo(this.collection, 'add', this.onCollectionAdd)
		this.listenTo(this.collection, 'update', this.handleCollectionUpdate)
	},

	render: function () {
		this.$el.html(this.template())
		this.main.setSubnavViewVars(this)

		if (this.main.plusUser) {
			this.collection.loadedOnce ? this.addAll() : this.collection.fetch({ reset: true })
		}	else {
			this.$empty.removeClass('loading')
		}

		return this
	},

	addAll: function () {
		subnavAddAll(this, false, this.$backgroundsList, this.main.syncActiveItem.bind(this.main))
	},

	addOne: function (bgModel, prepend) {
		var tileView = new addin.views.Tile({ model: bgModel, main: this.main, parent: this, subnav: 'custom' })
		subnavAddOne(this, tileView, this.$backgroundsList, prepend, false)
		// If upload in progress, add class so user can see that something is happening
		tileView.$el.toggleClass('uploading', (!bgModel.get('upload_verified') || !bgModel.get('upload_completed')))
	},

	onCollectionAdd: function (bgModel) {
		this.addOne(bgModel, true)
		handleStickySubnav(this.main)
	},

	handleCollectionUpdate: function () {
		updateEmptyState(this)
	}
})

addin.views.DetailCustom = m.views.settings.SettingsPanel.extend({
	attributes: { id: 'background-detail-custom-panel', class: 'settings-view settings-online settings-background-detail' },
	panelid: 'backgrounds-detail-custom',
	template: addin.templates.detailCustom,

	events: {
		'click .action-back': 'handleClickBack',
		'keyup .settings-background-edit': 'handleKeyupEsc',
		'keypress .input-title': 'handleKeypressEnterTitle',
		'keypress .input-source': 'handleKeypressEnterSource',
		'click .submit': 'processEditForm',
		'click .cancel': 'handleClickCancel',
		'click .button-set-active': 'handleClickSetActive',
		'click .button-delete': 'toggleDeleteConf',
		'click .delete-yes': 'deleteItem',
		'click .delete-no': 'toggleDeleteConf'
	},

	initialize: function (options) {
		if (!m.backgroundSettingsManager) m.backgroundSettingsManager = new addin.models.BackgroundSettingsManager()
		this.main = options.main
		this.model = options.backgroundModel
		this.listenTo(m, 'background:loadSuccessful', this.onBackgroundLoadSuccessful)
	},

	render: function () {
		var variables = {
			inputLengthMaxHtml: this.main.inputLengthMaxHtml,
			source: this.model.get('source'),
			title: this.model.get('title')
		}
		this.$el.html(this.template(variables))
		this.setViewVars()
		this.focusFirstInput()
		this.main.detailUpdateSetActiveButton(this)
		this.model.getPreviewUrl(this.main.detailShowUploadedImage.bind(this))

		return this
	},

	setViewVars: function () {
		this.$backgroundEditForm = this.$('.settings-background-edit')
		this.$inputTitle = this.$('.input-title')
		this.$inputSource = this.$('.input-source')
		this.$actionsRight = this.$('.actions-right')
		this.$deleteGroup = this.$('.delete-group')
	},

	focusFirstInput: function () {
		var self = this
		setTimeout(function () { self.$inputTitle.focus() }, 0)
		moveCursorToEndOfInput(this.$inputTitle)
	},

	handleClickBack: function (e) {
		this.main.detailHandleClickBack(e)
	},

	handleKeyupEsc: function (e) {
		handleKeyupEsc(e, this.main.detailGotoMain.bind(this))
	},

	handleKeypressEnterTitle: function (e) {
		handleKeypressEnter(e, this.processEditForm.bind(this), this.$inputTitle)
	},

	handleKeypressEnterSource: function (e) {
		handleKeypressEnter(e, this.processEditForm.bind(this), this.$inputSource)
	},

	processEditForm: function (e) {
		if (e) e.preventDefault()
		if (this.$backgroundEditForm.hasClass('loading')) return

		var self = this,
				title = this.$inputTitle.val().trim(),
				source = this.$inputSource.val().trim()

		// Note: no validation needed as both form fields are optional
		this.$backgroundEditForm.removeClass('failed').addClass('loading')
		this.model.save({ title: title, source: source }, {
			wait: true,
			success: function () {
				self.$backgroundEditForm.removeClass('loading')
				m.trigger('sync:download', 'background')
				self.main.detailGotoMain()
			},
			error: function () {
				self.$backgroundEditForm.removeClass('loading').addClass('failed')
			}
		})
		m.sendEvent(this.main.manager.gaTitle, 'Edit')
	},

	handleClickCancel: function (e) {
		e.stopPropagation()
		this.main.detailGotoMain()
	},

	handleClickSetActive: function () {
		this.main.detailSetActive(this)
	},

	toggleDeleteConf: function () {
		this.$actionsRight.toggle()
		this.$deleteGroup.css('display', this.$actionsRight.is(':visible') ? 'none' : 'inline-block')
	},

	deleteItem: function (e) {
		var self = this
		e.stopPropagation()
		this.model.destroy({
			success: function () {
				m.trigger('sync:download', 'background')
				self.main.detailGotoMain()
			} // TODO add error function
		})
		m.sendEvent(this.main.manager.gaTitle, 'Delete')
	},

	onBackgroundLoadSuccessful: function () {
		this.main.detailUpdateSetActiveButton(this)
	}
})

addin.views.DetailStock = m.views.settings.SettingsPanel.extend({
	attributes: { id: 'background-detail-stock-panel', class: 'settings-view settings-background-detail' },
	panelid: 'backgrounds-detail-stock',
	template: addin.templates.detailStock,

	events: {
		'click .action-back': 'handleClickBack',
		'click .button-set-active': 'handleClickSetActive'
	},

	initialize: function (options) {
		if (!m.backgroundSettingsManager) m.backgroundSettingsManager = new addin.models.BackgroundSettingsManager()
		this.main = options.main
		this.model = options.backgroundModel
		this.listenTo(m, 'background:loadSuccessful', this.onBackgroundLoadSuccessful)
	},

	render: function () {
		var variables = {
			attribution: this.model.get('attribution'),
			displayDate: this.model.getFriendlyDate(this.model.get('display_date')),
			labelSelect: this.main.labelSelect,
			plusUser: this.main.plusUser,
			sourceUrl: this.model.get('sourceUrl'),
			title: this.model.get('title')
		}
		this.$el.html(this.template(variables))
		this.main.detailUpdateSetActiveButton(this)
		this.model.getPreviewUrl(this.main.detailShowUploadedImage.bind(this))

		return this
	},

	handleClickBack: function (e) {
		this.main.detailHandleClickBack(e)
	},

	handleClickSetActive: function () {
		this.main.detailSetActive(this)
	},

	onBackgroundLoadSuccessful: function () {
		this.main.detailUpdateSetActiveButton(this)
	}
})

addin.views.Favorites = Backbone.View.extend({
	template: addin.templates.favorites,

	initialize: function (options) {
		this.main = options.main
		this.subViews = []
		if (!m.backgroundSettingsManager) m.backgroundSettingsManager = new addin.models.BackgroundSettingsManager()
		this.collection = m.backgroundSettingsManager.Favorites()

		this.listenTo(this.collection, 'reset', this.addAll)
		this.listenTo(this.collection, 'add', this.onCollectionAdd)
		this.listenTo(this.collection, 'change:is_favorite', this.favoriteStateChanged)
	},

	render: function () {
		this.$el.html(this.template())
		this.main.setSubnavViewVars(this)

		this.collection.loadedOnce ? this.addAll() : this.collection.fetch({ reset: true })

		return this
	},

	addAll: function () {
		subnavAddAll(this, false, this.$backgroundsList, this.main.syncActiveItem.bind(this.main))
	},

	addOne: function (bgModel, prepend) {
		var tileView = new addin.views.Tile({ model: bgModel, main: this.main, parent: this, subnav: 'favorites' })
		subnavAddOne(this, tileView, this.$backgroundsList, prepend, false)
	},

	onCollectionAdd: function (bgModel) {
		this.addOne(bgModel, true)
		this.main.syncActiveItem()
	},

	handleCollectionUpdate: function () {
		updateEmptyState(this)
	},

	favoriteStateChanged: function (model) {
		// Favoriting a photo from the dashboard that was a fav when the favs subnav loaded, then was unfaved then faved again
		if (model.get('is_favorite')) {
			this.addOne(model, true)
			this.main.syncActiveItem()
		}
		// Unfavoriting a photo from the dashboard that was a fav when the favs subnav loaded
		else {
			var tile = null
			_.find(this.subViews, function (vw) {
				if (vw && vw.model === model) {
					tile = vw
					vw.destroy()
					return true
				}
				return false
			})
			if (tile) {
				var index = this.subViews.indexOf(tile)
				if (index) {
					this.subViews.splice(index, 1)
				}
			}
		}
	}
})

addin.views.History = Backbone.View.extend({
	template: addin.templates.history,

	events: {
		'click .load-more-button': 'loadMore'
	},

	initialize: function(options) {
		this.main = options.main
		this.subViews = []
		if (!m.backgroundSettingsManager) m.backgroundSettingsManager = new addin.models.BackgroundSettingsManager()
		this.collection = m.backgroundSettingsManager.History()

		this.listenTo(this.collection, 'reset', this.addAll)
		this.listenTo(this.collection, 'add', this.addOne)
		this.listenTo(this.collection, 'update', this.handleCollectionUpdate)
	},

	render: function () {
		var variables = { plusUser: this.main.plusUser }
		this.$el.html(this.template(variables))
		this.main.setSubnavViewVars(this)

		this.collection.loadedOnce ? this.addAll() : this.collection.fetch({ reset: true })

		return this
	},

	addAll: function () {
		subnavAddAll(this, true, this.$backgroundsList, this.main.syncActiveItem.bind(this.main), subnavHistoryUpdateLoadMore.bind(this))
	},

	addOne: function (bgModel) {
		var tileView = new addin.views.Tile({ model: bgModel, main: this.main, parent: this, subnav: 'history' })
		subnavAddOne(this, tileView, this.$backgroundsList, bgModel.prepend, false)
	},

	onCollectionAdd: function (bgModel) {
		this.addOne(bgModel)
	},

	handleCollectionUpdate: function () {
		updateEmptyState(this)
		this.main.syncActiveItem()
	},

	loadMore: function (e) {
		subnavHistoryLoadMore(e, this, m.backgroundSettingsManager)
	}
})

addin.views.Main = m.views.settings.SettingsPanel.extend({
	attributes: { id: 'settings-backgrounds', class: 'settings-view settings-content settings-backgrounds' },
	inputLengthMaxHtml: 75,												// Max length of input that can be typed in detailCustom form fields
	labelDeselect: '(Already Active)',						// Label for select control when item selected
	labelSelect: 'Set Active',										// Label for select control when item not selected
	labelSelectError: 'Error activating… Click to retry',		// Label for error icon when select fails
	panelid: 'backgrounds',
	subnav: undefined,														// String to store which subnav is active
	template: addin.templates.main,

	events: {

		'click .button-advanced': 'toggleAdvanced',
		'click #feed-momentum-slider': 'toggleFeedMomentum',
		'click #feed-custom-slider': 'toggleFeedCustom',
		'click .add-background': 'handleClickAdd',
		'change .file-input': 'fileInputChanged',
		'click .subnav-titles .custom': 'selectCustom',
		'click .subnav-titles .favorites': 'selectFavorites',
		'click .subnav-titles .history': 'selectHistory'
	},

	initialize: function (options) {
		if (options) this.subnav = options.subnav
		if (!m.backgroundSettingsManager) m.backgroundSettingsManager = new addin.models.BackgroundSettingsManager()
		this.manager = m.backgroundSettingsManager
		this.settings = this.manager.settings
		this.plusUser = m.conditionalFeatures.featureEnabled('plus')

		this.listenTo(this.settings, 'change', this.updateSettings)
		this.listenTo(this.settings, 'change:allocation_changed', this.allocationChanged)
		this.listenTo(m, 'background:loadSuccessful', this.onBackgroundLoadSuccessful)
		this.listenTo(m, 'background:set-active-custom', this.onBackgroundSetActiveCustom)
		this.listenTo(m.models.customization, 'change:themeColour', this.onChangeThemeColour)
		if (this.plusUser) this.settings.fetch()
		if (this.subnav === undefined) m.sendEvent(this.manager.gaTitle, 'Panel Opened', 'main')
	},

	render: function () {
		var variables = {
			labelCustom: this.manager.labelCustom
		}
		this.$el.html(this.template($.extend(variables, getInitialFeedSettings(this.manager))))
		this.setViewVars()

		// Render appropriate subnav. `this.subnav` will be set if returning from a detail view
		if (this.subnav === 'favorites') {
			this.renderFavorites()
		} else if (this.subnav === 'history') {
			this.renderHistory()
		} else if (this.subnav === 'custom') {
			this.renderCustom()
		// Default case, occurs on initial settings panel load
		} else {
			this.plusUser ? this.renderCustom() : this.renderHistory()
		}

		if (!this.plusUser) this.updateForFreeUser()

		return this
	},

	setViewVars: function () {
		setFeedVars(this)
		this.$customList = this.$('.list-body-custom')
		this.$favoritesList = this.$('.list-body-favorites')
		this.$historyList = this.$('.list-body-history')
	},

	setSubnavViewVars: function (subnavView) {
		subnavView.$empty = this.$('.settings-empty')
		subnavView.$backgroundsList = this.$('.backgrounds-list')
	},

	onChangeThemeColour: function () {
		handleStickySubnav(this)
	},

	selectCustom: function (e) {
		this.selectSubnav('custom', e, this.renderCustom.bind(this))
	},

	selectFavorites: function (e) {
		this.selectSubnav('favorites', e, this.renderFavorites.bind(this))
	},

	selectHistory: function (e) {
		this.selectSubnav('history', e, this.renderHistory.bind(this))
	},

	selectSubnav: function (subnavName, e, renderCb) {
		e.stopPropagation()
		if (this.subnav === subnavName) { toggleClassTwice($(e.currentTarget), 'active'); return }
		renderCb()
		handleSelectStickySubnav(this)
		m.sendEvent(this.manager.gaTitle, 'Select Subnav', subnavName)
	},

	renderCustom: function () {
		if (!this.customView) this.customView = new addin.views.Custom({ el: this.$customList, main: this })
		renderSubnav(this, this.customView, 'custom')
	},

	renderFavorites: function () {
		if (!this.favoritesView) this.favoritesView = new addin.views.Favorites({ el: this.$favoritesList, main: this })
		renderSubnav(this, this.favoritesView, 'favorites')
	},

	renderHistory: function () {
		if (!this.historyView) this.historyView = new addin.views.History({ el: this.$historyList, main: this })
		renderSubnav(this, this.historyView, 'history')
	},

	updateSettings: function () {
		updateFeedSettings(this)
	},

	allocationChanged: function () {
		if (this.settings.has('allocation_changed')) m.trigger('sync:download', 'background')
	},

	onBackgroundLoadSuccessful: function () {
		this.syncActiveItem()
	},

	// If the active background in the extension is found in the active settings subnav, mark it as active in the subnav
	syncActiveItem: function () {
		var activeId = m.models.activeBackground.activeBackgroundUuid()
		this.syncActiveItemHelper(this.customView, activeId)
		this.syncActiveItemHelper(this.favoritesView, activeId)
		this.syncActiveItemHelper(this.historyView, activeId)
	},

	syncActiveItemHelper: function (subnavView, activeId) {
		if (subnavView === undefined) return

		subnavView.$el.find('.tile-list-item.active').removeClass('active').find('.control-select').attr('title', this.labelSelect)

		// Note: backgrounds can appear multiple times in the history subnav; only mark the first one as active
		var $activeItem = subnavView.$el.find('[data-background-id="' + activeId + '"]').first()
		$activeItem.addClass('active').find('.control-select').attr('title', this.labelDeselect)

		if (subnavView.setActiveInProgress) subnavView.setActiveInProgress = false
	},

	onBackgroundSetActiveCustom: function () {
		this.settings.set(this.manager.feedCustomName, true)
	},

	toggleAdvanced: function () {
		toggleAdvanced(this)
	},

	toggleFeedMomentum: function (e) {
		e.stopPropagation()
		this.manager.toggleFeedMomentum()
	},

	toggleFeedCustom: function (e) {
		e.stopPropagation()
		this.manager.toggleFeedCustom()
	},

	updateForFreeUser: function () {
		this.$feedMomentumSlider.addClass('fixed')
	},

	handleClickAdd: function (e) {
		if (!this.plusUser) {
			e.preventDefault()
			this.manager.showPlusUpsellNotif()
		}
	},

	fileInputChanged: function (e) {
		var files = e.target.files
		if (files.length) {
			handleSelectStickySubnav(this)
			if (this.subnav !== 'custom')	this.renderCustom()
			this.manager.uploadFiles(files)
		}
	},



	// General functions for detailStock.js and detailCustom.js

	detailGotoDetail: function (isCustom, backgroundId) {
		var detailTitle = isCustom ? 'custom' : 'stock'
		m.commandManager.execute('settings.display', null, {
			backgroundModel: this.detailGetModel(isCustom, backgroundId),
			main: this,
			nav: 'background-settings',
			section: 'background-settings-detail-' + detailTitle
		})
		m.sendEvent(this.manager.gaTitle, 'Panel Opened', 'detail ' + detailTitle)
	},

	detailGetModel: function (isCustom, backgroundId) {
		var model
		if (isCustom) {
			model = this.manager.CustomBackgrounds().get(backgroundId)
		} else {
			// Favorites: look up stock photo model by `id`
			if (this.subnav === 'favorites') {
				model = this.manager.Favorites().get(backgroundId)
			// History: look up stock photo model by `_id`
			} else if (this.subnav === 'history') {
				this.manager.History().each(function (historyModel) {
					if (historyModel.get('_id') === backgroundId) model = historyModel
				})
			}
		}
		return model
	},

	detailShowUploadedImage: function (url) {
		this.$('.img-uploaded').attr('src', url).show()
	},

	detailHandleClickBack: function (e) {
		e.stopPropagation()
		this.detailGotoMain()
	},

	detailGotoMain: function () {
		m.commandManager.execute('settings.display', null, {
			section: 'background-settings',
			subnav: this.subnav
		})
	},

	detailSetActive: function (detailView) {
		if (this.plusUser) {
			detailView.model.setActive()
			m.sendEvent(this.manager.gaTitle, 'Set Active', detailView.panelid)
		} else {
			this.manager.showPlusUpsellNotif()
		}
	},

	detailUpdateSetActiveButton: function (detailView) {
		var detailPhotoId = detailView.model.id || detailView.model.get('_id'),
				detailPhotoActive = m.models.activeBackground.activeBackgroundUuid() === detailPhotoId
		detailView.$('.button-set-active').attr('title', detailPhotoActive ? this.labelDeselect : '')
				.toggleClass('u--not-clickable', detailPhotoActive)
	}
})

addin.views.Tile = Backbone.View.extend({
	attributes: { class: 'tile-list-item' },
	tagName: 'li',
	template: addin.templates.tile,

	events: {
		'click': 'handleClickTile',
		'click .control-select': 'handleClickSetActive',
		'click .control-select-error': 'handleClickSetActive',
		'click .control-edit': 'handleClickEdit'
	},

	initialize: function (options) {
		this.main = options.main
		this.parent = options.parent
		this.manager = this.main.manager
		this.backgroundId = this.model.get('_id') || this.model.id
		this.listenTo(this.model, 'change:upload_completed', this.uploadComplete)
		this.listenTo(this.model, 'change:fileprogress', this.updateFileProgress)
		this.listenTo(m, 'background:loadSuccessful', this.onBackgroundLoadSuccessful)
		this.listenTo(m, 'background:error', this.onBackgroundError)
	},

	render: function () {
		this.is_custom = this.model.get('is_custom')
		var self = this,
				variables = {
					editIconClass: this.is_custom ? 'icon-edit' : 'icon-help',
					editIconTitle: this.is_custom ? 'Edit' : 'Info',
					labelSelectError: this.main.labelSelectError,
					labelSelect: this.main.labelSelect
				}
		this.$el.html(this.template(variables))
		this.setViewVars()

		if (this.model.has('upload_completed') && !this.model.get('upload_completed')) this.$editControl.hide()
		this.setBackgroundIdAttribute()
		this.setTitleAttribute()
		this.model.getThumbnailUrl(function (url) {
			self.$el.find('.tile-list-image').css('background-image', 'url("' + url + '")')
		})

		return this
	},

	setViewVars: function () {
		this.$editControl = this.$('.control-edit')
	},

	uploadComplete: function () {
		this.backgroundId = this.model.get('_id') || this.model.id
		this.setBackgroundIdAttribute()
		this.$el.removeClass('uploading').css('clip-path', 'none')
		this.main.syncActiveItem()
		if (this.model.get('upload_completed')) this.$editControl.show()
	},

	updateFileProgress: function () {
		var fileProgress = this.model.get('fileprogress'),
				remaining = 100 - fileProgress
		this.$el.css('clip-path', 'inset(0 ' + remaining + '% 0 0)')
		if (fileProgress === 100) this.uploadComplete()
	},

	onBackgroundLoadSuccessful: function () {
		this.removeActivatingState()
	},

	onBackgroundError: function () {
		this.removeActivatingState()
	},

	removeActivatingState: function () {
		if (this.setActiveInProgress) {
			this.setActiveInProgress = false
			this.parent.setActiveInProgress = false
			this.$el.removeClass('activating')
		}
	},

	setBackgroundIdAttribute: function () {
		this.$el.attr('data-background-id', this.model.id || this.model.get('_id'))
	},

	setTitleAttribute: function () {
		var title = this.model.get('title'),
				displayDate = this.model.getFriendlyDate(this.model.get('display_date'))
		this.$el.attr('title', title ? title + ' ('  + displayDate + ')' : displayDate)
	},

	handleClickTile: function (e) {
		e.stopPropagation()
		this.main.plusUser ? this.setBackgroundActive('tile - general') : this.gotoDetail()
	},

	setBackgroundActive: function (gaDetail) {
		if (this.backgroundAlreadyActive()) return
		if (this.parent.setActiveInProgress) return

		this.$el.removeClass('set-active-failed').addClass('activating')
		this.setActiveInProgress = true
		this.parent.setActiveInProgress = true
		var self = this,
				errorCallback = function () {
					self.removeActivatingState()
					self.$el.addClass('set-active-failed')
				},
				successCallback = function () {
					m.sendEvent(self.manager.gaTitle, 'Set Active', gaDetail)
				}
		this.model.setActive(errorCallback, successCallback)
	},

	backgroundAlreadyActive: function () {
		var activeBackground = m.collect.backgrounds.getActiveBackground()
		if (activeBackground && this.backgroundId === activeBackground.get('_id')) {
			toggleClassTwice(this.$el, 'already-active')
			return true
		} else {
			return false
		}
	},

	handleClickSetActive: function (e) {
		e.stopPropagation()
		this.main.plusUser ? this.setBackgroundActive('tile - control') : this.manager.showPlusUpsellNotif()
	},

	handleClickEdit: function (e) {
		e.stopPropagation()
		this.gotoDetail()
	},

	gotoDetail: function () {
		this.main.detailGotoDetail(this.is_custom, this.backgroundId)
	},

	destroy: function () {
		this.remove()
		this.unbind()
	}
})

if (m.commandManager) {
	m.commandManager.registerCommand('settings.panels.backgrounds', function (options) {
		return new addin.views.Main(options)
	})
	m.commandManager.registerCommand('settings.panels.backgrounds.detailCustom', function (options) {
		return new addin.views.DetailCustom(options)
	})
	m.commandManager.registerCommand('settings.panels.backgrounds.detailStock', function (options) {
		return new addin.views.DetailStock(options)
	})
	m.commandManager.registerCommand('background.custom.uploadfiles', function (files) {
		if (files.length) {
			if (!m.backgroundSettingsManager) m.backgroundSettingsManager = new addin.models.BackgroundSettingsManager()
			m.commandManager.execute('settings.display', null, {section: 'background-settings'})
			if (files.length == 1) {
				m.backgroundSettingsManager.uploadFile(files[0], function (file) {
					// console.log('file: ' + file.get('filename'))
					file.getThumbnailUrl(function (url) {
						var background = new m.models.BackgroundBase({
							_id: file.id,
							title: '',
							attribution: ' ',
							source: '',
							filename: url
						})
						m.models.activeBackground.setActiveBackground(background)
						if (file.get('upload_verified')) {
							file.setActive(function () {
							})
						}
						else {
							file.listenToOnce(file, 'change:upload_verified', function () {
								file.setActive(function () {
								})
							})
						}
					})
				})
			}
			else {
				m.backgroundSettingsManager.uploadFiles(files)
			}
		}
	})
}

addin.styles.style()

m.trigger('settings:register:nav', {
	id: 'background-settings',
	title: 'Backgrounds',
	cmd: 'settings.panels.backgrounds',
	position: 36
})

m.trigger('settings:register:panel', {
	id: 'background-settings-detail-custom',
	section: 'background-settings-detail-custom',
	cmd: 'settings.panels.backgrounds.detailCustom'
})

m.trigger('settings:register:panel', {
	id: 'background-settings-detail-stock',
	section: 'background-settings-detail-stock',
	cmd: 'settings.panels.backgrounds.detailStock'
}) }); if(m.addinManager) {m.addinManager.registerAddinFn("d52f5584-5033-4a16-866f-e97c7d7ac826", fn_addin);}