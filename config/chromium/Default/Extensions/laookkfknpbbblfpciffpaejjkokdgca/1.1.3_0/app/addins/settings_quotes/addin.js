var fn_addin = (function (m, $) { var addin = addin || {}; addin.styles=addin.styles||{};addin.styles.style = function(){ return; }; addin.views = addin.views || {}; addin.collect = addin.collect || {}; addin.models = addin.models || {}; addin.templates = addin.templates || {}; addin.templates=addin.templates||{},addin.templates.custom=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,n,s,a){return'<div class="settings-empty loading">\n\t<p class="settings-empty-loading"><i class="loading-icon"></i>Loading...</p>\n\t<p class="settings-empty-title empty-add-shortcut">Power up your day with your favorite quotes</p>\n\t<p class="settings-empty-description empty-add-shortcut">Click + Add Quote to get started</p>\n</div>\n\n<ul class="settings-list quote-list"></ul>\n'},useData:!0}),addin.templates.favorites=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,n,s,a){return'<div class="settings-empty loading">\n\t<p class="settings-empty-loading"><i class="loading-icon"></i>Loading...</p>\n\t<p class="settings-empty-title">Click the heart icon under a quote to start your collection</p>\n\t<p class="settings-empty-description">No favorite quotes</p>\n</div>\n\n<ul class="settings-list quote-list"></ul>'},useData:!0}),addin.templates.history=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,n,s,a){return'<div class="settings-empty loading">\n\t<p class="settings-empty-loading"><i class="loading-icon"></i>Loading...</p>\n\t<p class="settings-empty-title">You will see your past quotes here</p>\n\t<p class="settings-empty-description">Can\'t find any history for this account</p>\n</div>\n\n<ul class="settings-list quote-list"></ul>\n<div class="load-more">\n\t<span class="button load-more-button">Load More</span>\n</div>'},useData:!0}),addin.templates.item=Handlebars.template({1:function(t,n,s,a){var l,e=n.helperMissing,o="function",i=this.escapeExpression;return'\t\t\t--\x3e<span class="control control-svg control-heart u--clickable '+i(typeof(l=null!=(l=n.isFavClass||(null!=t?t.isFavClass:t))?l:e)===o?l.call(t,{name:"isFavClass",hash:{},data:a}):l)+'" title="'+i(typeof(l=null!=(l=n.isFavTitle||(null!=t?t.isFavTitle:t))?l:e)===o?l.call(t,{name:"isFavTitle",hash:{},data:a}):l)+'">\n\t\t\t\t<svg class="icon icon-heart-empty" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 953 1000" ><path d="M1 329q7-115 79-191h2l2-2q88-76 199-76t191 70q32-28 67-45l2-2h2q56-23 117-23 88-2 161 43t110 124v2l2 4q30 106 10 202t-80 175q-62 88-162 172 0 2-2 2-49 45-107 90-34 25-59 41-33 23-55 23l-6 2-5-2q-28-3-59-29-10-6-21-16t-16-13h-2q-246-188-328-340v-2q-49-94-42-209zm85 10q-6 86 33 162 74 135 303 310h2q6 6 18 16t19 14q8 6 15 10 8-2 14-6 22-14 51-37 58-43 105-88 94-80 151-161 107-142 58-298-27-57-78-88t-113-29q-43 0-86 17-39 22-68 57l-32 43-35-43q-52-65-141-73t-161 53q-49 55-55 141z"></path></svg>\n\t\t\t\t<svg class="icon icon-heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 953 1000"><path d="M1 329q7-115 79-191h2l2-2q88-76 199-76t191 70q32-28 67-45l2-2h2q56-23 117-23 88-2 161 43t110 124v2l2 4q30 106 10 202t-80 175q-62 88-162 172 0 2-2 2-49 45-107 90-34 25-59 41-33 23-55 23l-6 2-5-2q-28-3-59-29-10-6-21-16t-16-13h-2Q125 692 43 540v-2Q-6 444 1 329zm85 1"></path></svg>\n\t\t\t</span>\x3c!--\n'},3:function(t,n,s,a){return'\t\t\t--\x3e<span class="control control-edit u--clickable" title="Edit"><i class="icon-edit"></i></span>\x3c!--\n\t\t\t--\x3e<span class="control control-delete u--clickable" title="Delete"><i class="icon-trash"></i></span>\x3c!--\n\t\t\t--\x3e<span class="delete-group">\x3c!--\n\t\t\t\t--\x3e<span class="control delete-msg">Delete?</span>\x3c!--\n\t\t\t\t--\x3e<span class="control delete-loading">Deleting...</span>\x3c!--\n\t\t\t\t--\x3e<span class="control delete-failed u--clickable" title="Click to retry">Trouble connecting...</span>\x3c!--\n\t\t\t\t--\x3e<span class="control delete-yes u--clickable" title="Confirm">\n\t\t\t\t\t<i class="icon icon-checkmark">\n\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 577.95 469.42"><polygon points="195.09 469.42 137.44 424.64 140.4 421.42 0 298 46.22 245.43 187.68 369.79 526.33 0 577.95 47.28 229.72 427.53 195.09 469.42"/></svg>\n\t\t\t\t\t</i>\n\t\t\t\t</span>\x3c!--\n\t\t\t\t--\x3e<span class="control delete-no u--clickable" title="Cancel">\n\t\t\t\t\t<i class="icon icon-x">\n\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.97 47.97"><path d="M28.23,24,47.09,5.12A3,3,0,0,0,42.85.88L24,19.74,5.12.88A3,3,0,0,0,.88,5.12L19.74,24,.88,42.85a3,3,0,1,0,4.24,4.24L24,28.23,42.85,47.09a3,3,0,0,0,4.24-4.24Z" transform="translate(0 0)"/></svg>\n\t\t\t\t\t</i>\n\t\t\t\t</span>\n\t\t\t</span>\x3c!--\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(t,n,s,a){var l,e,o=n.helperMissing,i="function",c=this.escapeExpression;return'<div class="view">\n\t<div class="cquote">\x3c!--\n\t\t--\x3e<span class="cquote-body"><span class="quote-mark">&ldquo;</span>'+c(typeof(e=null!=(e=n.body||(null!=t?t.body:t))?e:o)===i?e.call(t,{name:"body",hash:{},data:a}):e)+'<span class="quote-mark">&rdquo;</span></span>\x3c!--\n\t\t--\x3e<span class="cquote-source">'+c(typeof(e=null!=(e=n.source||(null!=t?t.source:t))?e:o)===i?e.call(t,{name:"source",hash:{},data:a}):e)+'</span>\n\t</div>\n\n\t<span class="controls">\x3c!--\n\t\t--\x3e<span class="control control-select u--clickable" title="'+c(typeof(e=null!=(e=n.labelSelect||(null!=t?t.labelSelect:t))?e:o)===i?e.call(t,{name:"labelSelect",hash:{},data:a}):e)+'"><i class="icon-check"></i><i class="loading-icon"></i><i class="error-icon error-select" title="'+c(typeof(e=null!=(e=n.labelSyncError||(null!=t?t.labelSyncError:t))?e:o)===i?e.call(t,{name:"labelSyncError",hash:{},data:a}):e)+'">!</i></span>\x3c!--\n'+(null!=(l=n.if.call(t,null!=t?t.showFavControl:t,{name:"if",hash:{},fn:this.program(1,a,0),inverse:this.noop,data:a}))?l:"")+(null!=(l=n.if.call(t,null!=t?t.onCustomSubnav:t,{name:"if",hash:{},fn:this.program(3,a,0),inverse:this.noop,data:a}))?l:"")+' \t--\x3e</span>\n</div>\n\n<form class="edit quote-form list-edit-form">\x3c!--\n\t--\x3e<textarea class="list-edit-body textarea-body autoexpand" rows="1" placeholder="Quote" maxlength="'+c(typeof(e=null!=(e=n.inputLengthMaxHtml||(null!=t?t.inputLengthMaxHtml:t))?e:o)===i?e.call(t,{name:"inputLengthMaxHtml",hash:{},data:a}):e)+'">'+c(typeof(e=null!=(e=n.body||(null!=t?t.body:t))?e:o)===i?e.call(t,{name:"body",hash:{},data:a}):e)+'</textarea>\x3c!--\n\t--\x3e<input type="text" class="list-edit-source input input-source" value="'+c(typeof(e=null!=(e=n.source||(null!=t?t.source:t))?e:o)===i?e.call(t,{name:"source",hash:{},data:a}):e)+'" maxlength="'+c(typeof(e=null!=(e=n.inputLengthMaxHtmlSource||(null!=t?t.inputLengthMaxHtmlSource:t))?e:o)===i?e.call(t,{name:"inputLengthMaxHtmlSource",hash:{},data:a}):e)+'" placeholder="Source">\x3c!--\n\t--\x3e<span class="buttons">\x3c!--\n  \t--\x3e<span class="char-count"></span>\x3c!--\n\t\t--\x3e<button class="button submit"><i class="loading-icon"></i><i class="error-icon" title="'+c(typeof(e=null!=(e=n.labelSyncError||(null!=t?t.labelSyncError:t))?e:o)===i?e.call(t,{name:"labelSyncError",hash:{},data:a}):e)+'">!</i>Save</button>\x3c!--\n    --\x3e<button class="cancel u--clickable">Cancel</button>\x3c!--\n\t--\x3e</span>\n</form>\n'},useData:!0}),addin.templates.main=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,n,s,a){var l,e=n.helperMissing,o="function",i=this.escapeExpression;return'\x3c!-- Header --\x3e\n\n<div class="subpanel-header">\n\t<span class="button-advanced">Feeds<i class="icon icon-angle-down"></i></span>\n\t<h3>'+i(typeof(l=null!=(l=n.title||(null!=t?t.title:t))?l:e)===o?l.call(t,{name:"title",hash:{},data:a}):l)+'</h3>\n\t<p class="description">'+i(typeof(l=null!=(l=n.description||(null!=t?t.description:t))?l:e)===o?l.call(t,{name:"description",hash:{},data:a}):l)+'</p>\n</div>\n\n\n\x3c!-- Feeds --\x3e\n\n<div class="wrapper-advanced">\n\t<h4>Feeds</h4>\n\t<ul class="settings-list">\n\t\t<li class="slide-toggle '+i(typeof(l=null!=(l=n.feedMomentumClass||(null!=t?t.feedMomentumClass:t))?l:e)===o?l.call(t,{name:"feedMomentumClass",hash:{},data:a}):l)+'" id="feed-momentum-slider">\n\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t<span class="setting-name">Momentum Quotes</span>\n\t\t\t<span class="option-message">See a daily quote from our curated feed</span>\n\t\t</li>\n\t\t<li class="slide-toggle '+i(typeof(l=null!=(l=n.feedCustomClass||(null!=t?t.feedCustomClass:t))?l:e)===o?l.call(t,{name:"feedCustomClass",hash:{},data:a}):l)+'" id="feed-custom-slider">\n\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t<span class="setting-name">'+i(typeof(l=null!=(l=n.labelCustom||(null!=t?t.labelCustom:t))?l:e)===o?l.call(t,{name:"labelCustom",hash:{},data:a}):l)+'</span>\n\t\t\t<span class="badge plus-badge">PLUS</span>\n\t\t\t<span class="option-message">Add your own quotes and change the quote anytime</span>\n\t\t</li>\n\t</ul>\n</div>\n\n\n\x3c!-- Subnav + add button --\x3e\n\n<nav class="settings-subnav">\n\t<div class="subnav-titles">\n\t\t<h4 class="custom">'+i(typeof(l=null!=(l=n.labelCustom||(null!=t?t.labelCustom:t))?l:e)===o?l.call(t,{name:"labelCustom",hash:{},data:a}):l)+'</h4>\x3c!--\n\t\t--\x3e<h4 class="favorites">Favorites</h4>\x3c!--\n\t\t--\x3e<h4 class="history">History</h4>\n\t</div>\n\t<button class="button list-add-button">'+i(typeof(l=null!=(l=n.labelAdd||(null!=t?t.labelAdd:t))?l:e)===o?l.call(t,{name:"labelAdd",hash:{},data:a}):l)+'</button>\n</nav>\n<div class="settings-subnav-placeholder"></div>\n\n\n\x3c!-- Add form + lists --\x3e\n\n<div class="list-wrapper has-subnav">\n\t<form class="quote-form list-add-form">\x3c!--\n\t\t--\x3e<textarea class="list-add-body textarea-body autoexpand" rows="1" placeholder="Quote" maxlength="'+i(typeof(l=null!=(l=n.inputLengthMaxHtml||(null!=t?t.inputLengthMaxHtml:t))?l:e)===o?l.call(t,{name:"inputLengthMaxHtml",hash:{},data:a}):l)+'"></textarea>\x3c!--\n\t\t--\x3e<input type="text" class="list-add-source input input-source" maxlength="'+i(typeof(l=null!=(l=n.inputLengthMaxHtmlSource||(null!=t?t.inputLengthMaxHtmlSource:t))?l:e)===o?l.call(t,{name:"inputLengthMaxHtmlSource",hash:{},data:a}):l)+'" placeholder="Source">\x3c!--\n\t\t--\x3e<span class="buttons">\x3c!--\n    \t--\x3e<span class="char-count"></span>\x3c!--\n      \t--\x3e<button class="button submit"><i class="loading-icon"></i><i class="error-icon" title="'+i(typeof(l=null!=(l=n.labelSyncError||(null!=t?t.labelSyncError:t))?l:e)===o?l.call(t,{name:"labelSyncError",hash:{},data:a}):l)+'">!</i>Add</button>\x3c!--\n        --\x3e<button class="cancel u--clickable">Cancel</button>\n\t\t\t</span>\n\t</form>\n\n\t<div class="list-body list-body-custom"></div>\n\t<div class="list-body list-body-favorites"></div>\n\t<div class="list-body list-body-history"></div>\n</div>\n'},useData:!0});
addin["styles"] = addin["styles"] || {};
addin["styles"]["style"] = function() { var style = document.createElement('style');style.type = 'text/css';style.innerHTML = '.settings-quotes .list-wrapper{margin-right:-30px;margin-left:-30px;padding-right:30px;padding-left:30px;user-select:text}.settings-quotes .list-add-form{padding-top:5px}.settings-quotes .list-edit-form{padding:3px 0 6px}.settings-quotes .list-edit-body{padding-top:0}.quote-form .textarea-body{margin-bottom:5px;background:0 0;box-sizing:border-box;overflow:hidden;resize:none}.quote-form .input-source{width:60%}.quote-form .buttons{margin-top:1px;float:right}.quote-form .char-count{margin-right:8px}.quote-form .submit{margin:0;padding:6px 23px;position:relative}.quote-form .submit.disabled{cursor:auto;opacity:.5}.quote-form .submit.disabled:hover{background:rgba(255,255,255,.3)}.light .quote-form .submit.disabled:hover{background:rgba(0,0,0,.4)}.quote-form .submit .loading-icon{top:8px;left:7px}.quote-form .submit .error-icon{top:7px;left:7px}.quote-form .cancel{padding:5px 10px}.quote-item .cquote{margin-right:100px}.quote-item .quote-mark{opacity:.5}.quote-item .cquote-source{margin:3px 0 0 3px;font-size:85%;opacity:.5}.quote-item .delete-group .delete-loading{display:none;opacity:.5}.delete-group.loading .delete-no,.delete-group.loading .delete-yes,.quote-item .delete-group.loading .delete-msg{display:none}.quote-item .delete-group.loading .delete-loading{display:inline-block}.delete-group.failed .delete-no,.delete-group.failed .delete-yes,.quote-item .delete-group .delete-failed,.quote-item .delete-group.failed .delete-msg{display:none}.quote-item .delete-group.failed .delete-failed,.quote-item.loading .control-select .loading-icon{display:inline-block}.quote-item.failed .controls,.quote-item.loading .controls,.quote-item.selected .control-select,.quote-item.selected .controls{opacity:1}.quote-item.selected .control-select:hover{cursor:auto;opacity:1}.quote-item .control-select .loading-icon{top:-4px;left:-10px}.quote-item.loading .control-select .icon-check{display:none}.quote-item .control-select .error-icon{position:relative}.quote-item.failed .control-select .error-select{display:inline-block}.quote-item.failed .control-select .icon-check{display:none}';document.getElementsByTagName('head')[0].appendChild(style);};
addin.collect.Quotes = Backbone.Collection.extend({
	initialize: function () {
		this.model = addin.models.Quote
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
addin.models.Quote = Backbone.Model.extend({
	defaults: function () {
		return {
			body: 'New Quote',
			source: 'Unknown',
			display_date: new Date()
		}
	},

	save: function(attrs, options) {
		options = options || {}
		options.patch = true
		// Proxy the call to the original save function
		Backbone.Model.prototype.save.call(this, attrs, options)
	},

	setActive: function (successCallback, errorCallback) {
		var url = m.globals.urlRootApi + 'settings/quote/active',
				data = {},
				id = this.get('_id') || this.get('id')
		this.get('is_custom') ? data.custom_quote_id = id : data.quote_id = id

		$.ajax({
			type: 'POST',
			contentType: 'application/json',
			beforeSend: setMomentumAuthHeader,
			data: JSON.stringify(data),
			url: url
		})
				.done(function (msg) {
					if (msg && msg.success) {
						m.trigger('sync:download', 'quote')
						successCallback(this)
					} else {
						errorCallback(this)
					}
				})
				.fail(function () { errorCallback(this) })
	},

	getFriendlyDate: function (date) {
		return getFriendlyDate(date)
	}
})

addin.models.QuoteSettingsManager = Backbone.Model.extend({
	feedCustomName: 'quote-feed-custom',      	// Name of custom feed for settings object and localStorage
	feedMomentumName: 'quote-feed-momentum',  	// Name of momentum feed "
	gaTitle: 'Quote Settings',									// Title for Google Analytics events for quotes panel
	labelCustom: 'My Quotes',										// Label for custom quotes
	newModels: [],

	initialize: function () {
		this.plusUser = m.conditionalFeatures.featureEnabled('plus')
		this.settings = new m.models.GenericSettings('settings/quote')

		this.CustomQuotes()

		this.listenTo(m, 'quote:favorite', this.onQuoteFavorited)
		this.listenTo(m, 'quote:active_changed', this.onActiveQuoteChanged)
	},

	onQuoteFavorited: function (favorite) {
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
		// If quote favorited and history showing, sync to automatically show as favorited
		if (this.history) {
			var existingFavoriteHistory = this.history.findWhere({ _id: favorite.id })
			if (existingFavoriteHistory) {
				// Set last_updated and do a sort, so that the re-render appears in the new place, not the original as downloaded from API
				existingFavoriteHistory.set({ is_favorite: favorite.is_favorite, last_updated: (new Date()).toISOString() })
				this.history.sort()
			} else {
				this.history.fetch({ remove: false })
			}
		}
	},

	onActiveQuoteChanged: function (id) {
		if (this.lastActiveQuote === id) return
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
					this.lastActiveQuote = id
				}
			}
		}
	},

	CustomQuotes: function () {
		if (!this.collection) {
			this.collection = new addin.collect.Quotes()
			this.collection.url = m.globals.urlRoot + 'settings/quote/quotes'
			this.listenTo(this.collection, 'remove', this.onCollectionRemove)
			this.listenTo(this.collection, 'user-change', this.handleUserChange)
		}
		return this.collection
	},

	customEmpty: function () {
		return (this.collection.length === 0)
	},

	Favorites: function () {
		if (!this.favorites) {
			this.favorites = new addin.collect.Quotes()
			this.favorites.url = m.globals.urlRoot + 'quotes/favorites'
			this.favorites.sortAttribute = 'last_updated'
			this.favorites.reverse_sort = false
		}
		return this.favorites
	},

	History: function () {
		var self = this
		if (!this.history) {
			this.history = new addin.collect.Quotes()
			this.history.url = m.globals.urlRoot + 'quotes/history'
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

	onCollectionRemove: function () {
		m.trigger('sync:download', 'quote')
		if (this.customEmpty()) this.collection.trigger('user-change')
		if (this.history) this.history.loadedOnce = false
		if (this.favorites) this.favorites.loadedOnce = false
	},

	toggleFavorite: function (model, errorCallback) {
		var url = m.globals.urlRootApi + 'quotes/favorites',
				uuid = model.get('_id') || model.get('id'),
				is_favorite = !model.get('is_favorite'),
				is_custom = model.get('is_custom'),
				data = { operation: 'favorite', active_uuid: uuid, is_favorite: is_favorite, is_custom: is_custom };
		try {
			$.ajax({
					type: 'POST',
					contentType: 'application/json',
					beforeSend: setMomentumAuthHeader,
					data: JSON.stringify(data),
					url: url
				})
				.done(function (msg) {
					if (msg && msg.success) {
						model.set({ is_favorite: is_favorite })
						m.trigger('sync:download', 'quote')
						m.trigger('quote:favorite', { id: data.active_uuid, is_favorite: data.is_favorite });
					}
				})
				.fail(function (jqXHR, textStatus) {
					if (errorCallback) errorCallback();
				});
		} catch (e) {
			// TODO review this error message copy & flow when new content feed allocation complete
			m.commandManager.execute('notification.show.enhanced', 'Connection error.')
			if (errorCallback) errorCallback();
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
			sourceEvent: 'customQuotes-toggleFeed',
			buttonText: 'Learn more',
			title: this.labelCustom,
			description: 'Activate your favorite quotes or add your own'
		}
		m.commandManager.execute('upsell.message', options)
	},

	handleUserChange: function () {
		var customQuoteFeedOn = this.settings.get(this.feedCustomName)

		// Ensure custom quote feed is on after user makes certain changes to custom quotes (add, edit, set active)
		if (!this.customEmpty() && !customQuoteFeedOn) this.toggleFeedCustom()

		// Ensure custom quote feed is off after last custom quote is deleted
		if (this.customEmpty() && customQuoteFeedOn) this.toggleFeedCustom()
	}
})

addin.views.Custom = Backbone.View.extend({
	template: addin.templates.custom,

	events: {
		'click .empty-add-shortcut': 'handleEmptyAddShortcutClick'
	},

	initialize: function (options) {
		this.main = options.main
		this.subViews = []
		if (!m.quoteSettingsManager) m.quoteSettingsManager = new addin.models.QuoteSettingsManager()
		this.manager = m.quoteSettingsManager
		this.collection = this.manager.CustomQuotes()

		this.listenTo(this.collection, 'reset', this.addAll)
		this.listenTo(this.collection, 'add', this.onCollectionAdd)
		this.listenTo(this.collection, 'update', this.handleCollectionUpdate)
		this.listenTo(this.manager, 'toggle-list-add-form', this.handleToggleListAddForm)
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
		subnavAddAll(this, false, this.$quoteList, this.main.syncActiveItem.bind(this.main))
	},

	addOne: function (itemModel, animate) {
		var itemView = new addin.views.CustomQuote({ model: itemModel, main: this.main, subnav: 'custom' })
		subnavAddOne(this, itemView, this.$quoteList, true, animate)
	},

	onCollectionAdd: function (model) {
		this.addOne(model, true)
		this.collection.trigger('user-change')
	},

	handleCollectionUpdate: function () {
		handleCollectionUpdateCustom(this.main, this.$empty, this.manager.customEmpty())
	},

	// This handles case where add form is toggled when custom list is empty
	handleToggleListAddForm: function () {
		if (this.manager.customEmpty() && !this.main.deletingFinalItem) {
			this.$empty.toggle(this.main.$listAddForm.is(':visible'))
		}
	},

	handleEmptyAddShortcutClick: function () {
		this.main.handleClickListAddButton()
	}
})

addin.views.Favorites = Backbone.View.extend({
	template: addin.templates.favorites,

	initialize: function (options) {
		this.main = options.main
		this.subViews = []
		if (!m.quoteSettingsManager) m.quoteSettingsManager = new addin.models.QuoteSettingsManager()
		this.collection = m.quoteSettingsManager.Favorites()

		this.listenTo(this.collection, 'reset', this.addAll)
		this.listenTo(this.collection, 'add', this.onCollectionAdd)
		this.listenTo(this.collection, 'update', this.handleCollectionUpdate)
	},

	render: function () {
		this.$el.html(this.template())
		this.main.setSubnavViewVars(this)

		this.collection.loadedOnce ? this.addAll() : this.collection.fetch({ reset: true })

		return this
	},

	addAll: function () {
		subnavAddAll(this, false, this.$quoteList, this.main.syncActiveItem.bind(this.main))
	},

	addOne: function (itemModel) {
		if (!itemModel.get('is_favorite')) return
		var itemView = new addin.views.CustomQuote({ model: itemModel, main: this.main, subnav: 'favorites' })
		subnavAddOne(this, itemView, this.$quoteList, true, false)
	},

	onCollectionAdd: function (model) {
		this.addOne(model)
	},

	handleCollectionUpdate: function () {
		updateEmptyState(this)
	}
})

addin.views.History = Backbone.View.extend({
	template: addin.templates.history,

	events: {
		'click .load-more-button': 'loadMore'
	},

	initialize: function (options) {
		this.main = options.main
		this.subViews = []
		if (!m.quoteSettingsManager) m.quoteSettingsManager = new addin.models.QuoteSettingsManager()
		this.collection = m.quoteSettingsManager.History()

		this.listenTo(this.collection, 'reset', this.addAll)
		this.listenTo(this.collection, 'add', this.onCollectionAdd)
		this.listenTo(this.collection, 'update', this.handleCollectionUpdate)
	},

	render: function () {
		this.$el.html(this.template())
		this.main.setSubnavViewVars(this)

		this.collection.loadedOnce ? this.addAll() : this.collection.fetch({ reset: true })

		return this
	},

	addAll: function () {
		subnavAddAll(this, false, this.$quoteList, this.main.syncActiveItem.bind(this.main), subnavHistoryUpdateLoadMore.bind(this))
	},

	addOne: function (itemModel) {
		var itemView = new addin.views.CustomQuote({ model: itemModel, main: this.main, subnav: 'history' })
		subnavAddOne(this, itemView, this.$quoteList, itemModel.prepend, false)
	},

	onCollectionAdd: function (model) {
		this.addOne(model)
	},

	handleCollectionUpdate: function () {
		updateEmptyState(this)
		this.main.syncActiveItem()
	},

	loadMore: function (e) {
		subnavHistoryLoadMore(e, this, m.quoteSettingsManager)
	}
})

addin.views.CustomQuote = Backbone.View.extend({
	attributes: { class: 'content-item quote-item' },
	tagName: 'li',
	template: addin.templates.item,

	events: {
		// View mode
		'click .control-select': 'handleClickSetActive',
		'click .control-heart': 'handleClickFavorite',
		'click .control-edit': 'handleClickEdit',
		'click .control-delete': 'toggleDeleteConf',
		'click .delete-yes': 'deleteItem',
		'click .delete-no': 'toggleDeleteConf',
		'click .delete-failed': 'deleteItem',
		// Edit mode
		'keyup .list-edit-form': 'handleKeyupEsc',
		'keypress .list-edit-form' : 'handleKeypressEnter',
		'click .submit': 'processEditForm',
		'click .cancel': 'handleClickCancel'
		// Note: the general quote add/edit form events defined in the main view also apply to this view
	},

	initialize: function (options) {
		this.main = options.main
		this.subnav = options.subnav
		this.manager = this.main.manager
		this.listenTo(this.model, 'change', this.render)
		this.listenTo(this.model, 'destroy', onDestroyModel)
		this.listenTo(this.manager, 'item-editing', preventMultipleEdits)
		this.listenTo(this.manager, 'toggle-list-add-form', returnToViewMode)
	},

	render: function () {
		this.isFavorite = this.model.get('is_favorite')
		this.quoteId = this.model.get('_id') || this.model.id

		var variables = {
			body: this.model.get('body'),
			source: this.model.get('source') || this.model.defaults.source,
			labelSelect: this.main.labelSelect,
			showFavControl: (this.subnav === 'favorites' || this.subnav === 'history'),
			isFavClass: this.isFavorite ? 'active' : '',
			isFavTitle: this.isFavorite ? 'Unfavorite' : 'Favorite',
			onCustomSubnav: this.subnav === 'custom',
			labelSyncError: this.main.labelSyncError,
			inputLengthMaxHtml: this.main.inputLengthMaxHtml,
			inputLengthMaxHtmlSource: this.main.inputLengthMaxHtmlSource
		}
		this.$el.html(this.template(variables))
		this.setViewVars()
		this.$el.attr('data-quote-id', this.quoteId)
		this.updateTooltip()

		return this
	},

	setViewVars: function () {
		this.$deleteGroup = this.$('.delete-group')
		this.$listEditForm = this.$('.list-edit-form')
		this.$listEditBody = this.$('.list-edit-body')
		this.$listEditSource = this.$('.list-edit-source')
	},

	updateTooltip: function () {
		this.$el.attr('title', this.$el.hasClass('editing') ? '': this.model.getFriendlyDate(this.model.get('display_date')))
	},

	handleClickSetActive: function () {
		if (this.main.plusUser) {
			this.setQuoteActive()
			m.sendEvent(this.manager.gaTitle, 'Set Active')
		} else {
			this.manager.showPlusUpsellNotif()
		}
	},

	setQuoteActive: function () {
		var self = this
		if (m.models.quoteManager.setActiveInProgress) return
		if (this.$el.hasClass('selected')) return

		this.setActiveInProgress = true
		m.models.quoteManager.setActiveInProgress = true

		this.$el.removeClass('failed').addClass('loading')

		this.model.setActive(function () {
			self.$el.removeClass('loading')
			self.setActiveInProgress = false
			m.models.quoteManager.setActiveInProgress = false
			// If user activates a custom quote while custom feed is off, turn custom feed on
			if (self.model.get('is_custom')) self.main.collection.trigger('user-change')
		}, function () {
			self.$el.removeClass('loading').addClass('failed')
			self.setActiveInProgress = false
			m.models.quoteManager.setActiveInProgress = false
		})
	},

	handleClickFavorite: function () {
		m.sendEvent(this.manager.gaTitle, 'Favorite', this.model.get('is_favorite') ? 'unfavorite' : 'favorite')
		m.quoteSettingsManager.toggleFavorite(this.model) // TODO add error callback
	},

	handleClickEdit: function () {
		this.$listEditForm.removeClass('loading failed')
		changeToEditMode(this, this.$listEditBody)
		this.updateTooltip()
	},

	toggleDeleteConf: function () {
		toggleDeleteConf(this)
	},

	deleteItem: function () {
		var self = this
		if (this.$deleteGroup.hasClass('loading')) return
		this.$deleteGroup.removeClass('failed').addClass('loading')

		this.model.destroy({
			wait: true,
			success: function () {
				self.$deleteGroup.removeClass('loading')
			},
			error: function () {
				self.$deleteGroup.removeClass('loading').addClass('failed')
			}
		})
		m.sendEvent(this.manager.gaTitle, 'Delete')
	},

	handleKeypressEnter: function (e) {
		handleKeypressEnter(e, this.processEditForm.bind(this))
	},

	handleKeyupEsc: function (e) {
		handleKeyupEsc(e, this.abortEdit.bind(this))
	},

	processEditForm: function (e) {
		this.main.processForm(e, this.$listEditForm, this.updateItem.bind(this))
	},

	updateItem: function (data, $form) {
		var self = this
		this.model.save(data, {
			wait: true,
			success: function () {
				$form.removeClass('loading')
				m.trigger('sync:download', 'quote')
				getOutOfEditMode(self)
				self.main.collection.trigger('user-change')
			},
			error: function () {
				$form.removeClass('loading').addClass('failed')
			}
		})
		m.sendEvent(this.manager.gaTitle, 'Edit')
	},

	handleClickCancel: function (e) {
		e.preventDefault()
		this.abortEdit()
	},

	abortEdit: function () {
		this.$listEditBody.val(this.model.get('body'))
		this.$listEditSource.val(this.model.get('source'))
		getOutOfEditMode(this)
	},

	destroy: function () {
		this.remove()
		this.unbind()
	}
})

addin.views.Main = m.views.settings.SettingsPanel.extend({
	attributes: { id: 'settings-quotes', class: 'settings-view settings-content settings-quotes settings-online' },
	deletingFinalItem: false,									// Used to handle animations when deleting final remaining item in the list
	inputLengthMaxDatabase: 250,							// Max length of input that can be submitted
	inputLengthMaxHtml: 260,									// Max length of input that can be typed in the body textarea
	inputLengthMaxHtmlSource: 100,						// Max length of input that can be typed in the source input box
	inputLengthShow: 50,											// Show char counter when textarea input is this long
	inputLengthWarn: 100,											// Give char counter warning class at this length
	itemEditingId: null,											// Used to ensure only one item edit form or delete confirmation is shown at a time
	labelAdd: '+ Add Quote', 									// Label for add item button
	labelDeselect: '(Already Active)',				// Label for select control when item selected
	labelSelect: 'Set Active',								// Label for select control when item not selected
	labelSyncError: 'Trouble connecting… Click to retry',		// Message shown for sync errors
	panelid: 'quotes',
	subnav: undefined,												// String to store which subnav is active
	template: addin.templates.main,

	events: {
		// Feeds
		'click .button-advanced': 'toggleAdvanced',
		'click #feed-custom-slider': 'toggleFeedCustom',
		'click #feed-momentum-slider': 'toggleFeedMomentum',
		// Quote add form specific
		'click .list-add-button': 'handleClickListAddButton',
		'keyup .list-add-form': 'handleKeyupEsc',
		'keypress .list-add-form': 'handleKeypressEnter',
		'click .list-add-form .submit': 'processAddForm',
		'click .list-add-form .cancel': 'cancelListAdd',
		// Quote add/edit form general
		'focus .textarea-body': 'updateCharCount',
		'input .textarea-body': 'updateCharCount',
		'focus textarea.autoexpand': 'textareaAutoexpandInitial',
		'input textarea.autoexpand': 'textareaAutoexpandLive',
		// Subnav
		'click .subnav-titles .custom': 'selectCustom',
		'click .subnav-titles .favorites': 'selectFavorites',
		'click .subnav-titles .history': 'selectHistory'
	},

	initialize: function (options) {
		if (options) this.subnav = options.subnav
		if (!m.quoteSettingsManager) m.quoteSettingsManager = new addin.models.QuoteSettingsManager()
		this.manager = m.quoteSettingsManager
		this.plusUser = m.conditionalFeatures.featureEnabled('plus')
		this.settings = this.manager.settings

		this.listenTo(this.settings, 'change', this.updateSettings)
		this.listenTo(this.settings, 'change:allocation_changed', this.allocationChanged)
		this.listenTo(m, 'quote:downloaded', this.syncActiveItem)
		this.listenTo(m.models.customization, 'change:themeColour', this.onChangeThemeColour)

		if (this.plusUser) {
			this.settings.fetch()
			this.collection = this.manager.CustomQuotes()
		}
		m.sendEvent(this.manager.gaTitle, 'Panel Opened')
	},

	render: function () {
		var variables = {
			description: 'A daily reminder for inspiration and growth',
			inputLengthMaxHtml: this.inputLengthMaxHtml,
			inputLengthMaxHtmlSource: this.inputLengthMaxHtmlSource,
			labelAdd: this.labelAdd,
			labelCustom: this.manager.labelCustom,
			labelSyncError: this.labelSyncError,
			title: 'Quotes'
		}
		this.$el.html(this.template($.extend(variables, getInitialFeedSettings(this.manager))))
		this.setViewVars()

		if (this.plusUser) {
			this.renderCustom()
		} else {
			this.$feedMomentumSlider.addClass('fixed')
			this.renderHistory()
		}

		return this
	},

	setViewVars: function () {
		setFeedVars(this)
		this.$listAddButton = this.$('.list-add-button')
		this.$listAddForm = this.$('.list-add-form')
		this.$listAddBody = this.$('.list-add-body')
		this.$listAddSource = this.$('.list-add-source')
		this.$customList = this.$('.list-body-custom')
		this.$favoritesList = this.$('.list-body-favorites')
		this.$historyList = this.$('.list-body-history')
	},

	setSubnavViewVars: function (subnavView) {
		subnavView.$empty = subnavView.$('.settings-empty')
		subnavView.$quoteList = subnavView.$('.quote-list')
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
		this.hideListAddForm()
		this.resetListAdd()
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
		if (this.settings.has('allocation_changed')) m.trigger('sync:download', 'quote')
	},

	// If the active quote in the extension is found in the active settings subnav, mark it as active
	syncActiveItem: function () {
		if (!m.models.customization.get('quoteVisible')) return

		var activeId = m.models.quoteManager.getActiveQuote().get('_id')
		this.syncActiveItemHelper(this.$customList, activeId)
		this.syncActiveItemHelper(this.$favoritesList, activeId)
		this.syncActiveItemHelper(this.$historyList, activeId)
	},

	syncActiveItemHelper: function ($list, activeId) {
		$list.find('.quote-item.selected').removeClass('selected').find('.control-select').attr('title', this.labelSelect)

		// Note: quotes can appear multiple times in the history subnav; only mark the first one as active
		var $activeItem = $list.find('[data-quote-id="' + activeId + '"]').first()
		$activeItem.addClass('selected').find('.control-select').attr('title', this.labelDeselect)
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



	// Quote add form

	handleClickListAddButton: function () {
		this.plusUser ? this.toggleListAddForm() : this.manager.showPlusUpsellNotif()
	},

	toggleListAddForm: function () {
		if (this.subnav !== 'custom') this.renderCustom()
		this.manager.trigger('toggle-list-add-form')

		// Hide add form
		if (this.$listAddForm.is(':visible')) {
			this.hideListAddForm()
		// Show add form
		} else {
			scrollToTopStickySubnav(this)
			this.$listAddButton.hide()
			this.$listAddForm.show()
			this.$listAddBody.focus()
		}
	},

	hideListAddForm: function () {
		this.$listAddButton.show()
		this.$listAddForm.hide()
	},

	resetListAdd: function (cancel) {
		this.$listAddBody.val('')
		this.$listAddSource.val('')
		if (!cancel) this.$listAddBody.focus()
		this.$listAddForm.removeClass('loading failed')
	},

	handleKeypressEnter: function (e) {
		handleKeypressEnter(e, this.processAddForm.bind(this))
	},

	handleKeyupEsc: function (e) {
		handleKeyupEsc(e, this.cancelListAdd.bind(this))
	},

	processAddForm: function (e) {
		this.processForm(e, this.$listAddForm, this.createItem.bind(this))
	},

	createItem: function (data, $form) {
		var self = this
		this.collection.create(data, {
			wait: true,
			success: function () {
				self.resetListAdd(false)
			},
			error: function () {
				$form.removeClass('loading').addClass('failed')
			}
		})
		m.sendEvent(this.manager.gaTitle, 'Add')
	},

	cancelListAdd: function (e) {
		if (e) e.preventDefault()
		cancelListAdd(this)
	},



	/* General form functions. These functions avoid repetition and are used for the quote add & quote edit forms.
	 Note that the add/edit form HTML is still not DRY, but refactoring the form into its own Backbone view
	 was decided to be too complicated to do right now (would need to handle add, view, and edit cases and
	 integrate with quote item and quote collection views).
	 */

	updateCharCount: function (e) {
		updateCharCount(e, this, this.updateSubmitButton.bind(this), $(e.currentTarget.form).find('.textarea-body'))
	},

	updateSubmitButton: function ($form, length, charsLeft) {
		var disableSubmit = (length === 0 || charsLeft < 0)
		$form.find('.submit').prop('disabled', disableSubmit).toggleClass('disabled', disableSubmit)
	},

	processForm: function (e, $form, validCb) {
		if (e) e.preventDefault()
		if ($form.find('.submit').prop('disabled') || $form.hasClass('loading')) return

		var validation = this.validateForm($form),
				data = { body: validation.body, source: validation.source }
		if (validation.valid) {
			$form.removeClass('failed').addClass('loading')
			validCb(data, $form)
		}
	},

	// Process user input and return validation object. The quote body field is required, quote source field is optional
	validateForm: function ($form) {
		var $body = $form.find('.textarea-body'),
				$source = $form.find('.input-source'),
				body = this.processQuoteInput($body.val().trim()),
				source = $source.val().trim()

		return { valid: !!body, body: body, source: source }
	},

	// Helper function to remove quotes from user input
	processQuoteInput: function (str) {
		// These characters will be removed from start and end of user input. See http://unicodelookup.com/#quo/1 for more
		var invalidCharCodes = [
			34,    // quotation mark ( " )
			39,    // apostrophe ( ' )
			8216,  // &lsquo
			8217,  // &rsquo
			8220,  // &ldquo
			8221   // &rdquo
		]

		// Remove first char if invalid
		if (_.contains(invalidCharCodes, str.charCodeAt(0))) { str = str.slice(1) }

		// Remove last char if invalid
		if (_.contains(invalidCharCodes, str.charCodeAt(str.length -1))) { str = str.slice(0, -1)}

		return str
	},



	// TODO generalize when this is used in another area of Momentum
	// Autoexpand textareas: height of textarea will increase as you type / paste text in and decrease as you
	// backspace / delete / cut text out.	Textarea starts at 1 row high and will return to 1 row high if empty.
	textareaAutoexpandInitial: function (e) {
		var ta = e.currentTarget
		// Temporarily clear value and set to single row height to determine base heights
		var savedValue = ta.value
		ta.value = ''
		ta.rows = 1

		// Add attribute to textarea: height of content + padding when textarea is 1 row high
		ta.baseScrollHeight = ta.scrollHeight
		// Add another attribute: height of content when textarea is 1 row high
		var cStyle = getComputedStyle(ta)
		ta.baseContentHeight = ta.baseScrollHeight - parseInt(cStyle.paddingTop, 10) - parseInt(cStyle.paddingBottom, 10)

		ta.value = savedValue

		this.textareaAutoexpandLive(e)
	},

	textareaAutoexpandLive: function (e) {
		var ta = e.currentTarget,
				minRows = 1,
				extraRows
		ta.rows = minRows
		extraRows = Math.ceil((ta.scrollHeight - ta.baseScrollHeight) / ta.baseContentHeight)
		ta.rows = minRows + extraRows
	}
})

if (m.commandManager) {
	m.commandManager.registerCommand('settings.panels.quotes', function (options) {
		return new addin.views.Main(options)
	})
}

addin.styles.style()

m.trigger('settings:register:nav', {
	id: 'quote-settings',
	title: 'Quotes',
	cmd: 'settings.panels.quotes',
	position: 35
})
 }); if(m.addinManager) {m.addinManager.registerAddinFn("dd106f35-669c-4079-a9e3-82ddc5244d0b", fn_addin);}