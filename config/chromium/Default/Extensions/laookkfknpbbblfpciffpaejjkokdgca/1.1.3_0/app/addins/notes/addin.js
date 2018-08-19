var fn_addin = (function (m, $) { var addin = addin || {}; addin.styles=addin.styles||{};addin.styles.style = function(){ return; }; addin.views = addin.views || {}; addin.collect = addin.collect || {}; addin.models = addin.models || {}; addin.templates = addin.templates || {}; addin.templates=addin.templates||{},addin.templates.detail=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,n,s,e){var a;return'<div class="list-bar-wrapper">\n\t<div class="list-bar-toggle has-icon">\n\t\t<span class="control icon-wrapper toggle-list-icons" title="Note List">\n\t\t\t<i class="icon icon-list-toggle u--no-transition">\n\t\t\t\t<svg class="list-toggle-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459.31 80.38"><path d="M459.31,229.65a40.2,40.2,0,0,1-40.2,40.2H40.18a40.19,40.19,0,0,1,0-80.38H419.14A40.17,40.17,0,0,1,459.31,229.65Z" transform="translate(0 -189.47)"/></svg>\n\t\t\t\t<svg class="list-toggle-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459.31 80.38"><path d="M459.31,229.65a40.2,40.2,0,0,1-40.2,40.2H40.18a40.19,40.19,0,0,1,0-80.38H419.14A40.17,40.17,0,0,1,459.31,229.65Z" transform="translate(0 -189.47)"/></svg>\n\t\t\t\t<svg class="list-toggle-bottom" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459.31 80.38"><path d="M459.31,229.65a40.2,40.2,0,0,1-40.2,40.2H40.18a40.19,40.19,0,0,1,0-80.38H419.14A40.17,40.17,0,0,1,459.31,229.65Z" transform="translate(0 -189.47)"/></svg>\n\t\t\t</i>\n\t\t</span>\n\t</div>\n\t<div class="list-bar"></div>\n</div>\n\n<div class="detail-bar">\n\t<div class="header notes-detail-header">\n\t\t<span class="control icon-wrapper back" title="Back"><i class="icon icon-left"></i></span>\n\n\n\t\t<span class="notes-detail-title"></span>\n\n\t\t<div class="controls main-nav">\x3c!--\n\t\t--\x3e<span class="control toggle-fullscreen" title="Toggle Fullscreen">\n\t\t\t\t<span class="icon-wrapper ">\n\t\t\t\t\t<i class="icon icon-expand">\n\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M212.686 315.314L120 408l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C10.697 480 0 469.255 0 456V344c0-21.382 25.803-32.09 40.922-16.971L72 360l92.686-92.686c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.249 6.248 6.249 16.378 0 22.627zm22.628-118.628L328 104l-32.922-31.029C279.958 57.851 290.666 32 312.048 32h112C437.303 32 448 42.745 448 56v112c0 21.382-25.803 32.09-40.922 16.971L376 152l-92.686 92.686c-6.248 6.248-16.379 6.248-22.627 0l-25.373-25.373c-6.249-6.248-6.249-16.378 0-22.627z"/></svg>\n\t\t\t\t\t</i>\n\t\t\t\t\t<i class="icon icon-restore">\n\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 451.37"><path d="M443.31,81.31,350.63,174l32.92,31c15.12,15.12,4.41,41-17,41h-112a24,24,0,0,1-24-24V110c0-21.38,25.8-32.09,40.92-17l31.08,33,92.68-92.69a16,16,0,0,1,22.63,0l25.37,25.38A16,16,0,0,1,443.31,81.31Z" transform="translate(0 -28.63)"/><path d="M4.69,427.31l92.68-92.68-32.92-31c-15.12-15.12-4.41-41,17-41h112a24,24,0,0,1,24,24v112c0,21.38-25.8,32.09-40.92,17l-31.08-33L52.69,475.31a16,16,0,0,1-22.63,0L4.69,449.94a16,16,0,0,1,0-22.63Z" transform="translate(0 -28.63)"/></svg>\n\t\t\t\t\t</i>\n\t\t\t\t</span>\n\t\t\t</span>\n\t\t\t<span class="control new" title="New Note">\n\t\t\t\t<span class="icon-wrapper">\n\t\t\t\t\t<i class="icon icon-plus"></i>\n\t\t\t\t</span>\n\t\t\t</span>\x3c!--\n\t\t\t--\x3e<span class="control delete" title="Delete">\n\t\t\t\t<span class="icon-wrapper">\n\t\t\t\t\t<i class="icon icon-trash"></i>\n\t\t\t\t</span>\n\t\t\t</span>\n\t\t</div>\n\n\t\t<span class="controls delete-nav delete-group">\n\t\t\t<span class="delete delete-msg">Delete?</span>\x3c!--\n\t\t\t--\x3e<span class="delete delete-loading">Deleting...</span>\x3c!--\n\t\t\t--\x3e<span class="delete delete-failed" title="Retry">Trouble connecting...</span>\x3c!--\n\t\t\t--\x3e<span class="control delete delete-yes">\n\t\t\t\t\t<span class="icon-wrapper">\n\t\t\t\t\t\t<i class="icon icon-checkmark">\n\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 577.95 469.42"><polygon points="195.09 469.42 137.44 424.64 140.4 421.42 0 298 46.22 245.43 187.68 369.79 526.33 0 577.95 47.28 229.72 427.53 195.09 469.42"/></svg>\n\t\t\t\t\t\t</i>\n\t\t\t\t\t</span>\n\t\t\t\t</span>\x3c!--\n\t\t\t--\x3e<span class="control delete delete-no">\n\t\t\t\t\t<span class="icon-wrapper">\n\t\t\t\t\t\t<i class="icon icon-x">\n\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.97 47.97"><path d="M28.23,24,47.09,5.12A3,3,0,0,0,42.85.88L24,19.74,5.12.88A3,3,0,0,0,.88,5.12L19.74,24,.88,42.85a3,3,0,1,0,4.24,4.24L24,28.23,42.85,47.09a3,3,0,0,0,4.24-4.24Z" transform="translate(0 0)"/></svg>\n\t\t\t\t\t\t</i>\n\t\t\t\t\t</span>\n\t\t\t\t</span>\n\t\t</span>\n\t</div>\n\n\t<div class="note-body"><textarea contenteditable="true" class="notes-input notes-textarea" placeholder="New Note…">'+this.escapeExpression("function"==typeof(a=null!=(a=n.body||(null!=t?t.body:t))?a:n.helperMissing)?a.call(t,{name:"body",hash:{},data:e}):a)+"</textarea></div>\n</div>\n"},useData:!0}),addin.templates.item=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,n,s,e){var a,l=n.helperMissing,i="function",o=this.escapeExpression;return'<div class="notes-list-title-group">\n\t<span class="notes-list-title">'+o(typeof(a=null!=(a=n.title||(null!=t?t.title:t))?a:l)===i?a.call(t,{name:"title",hash:{},data:e}):a)+'</span>\x3c!--\n\t--\x3e<span class="notes-list-date">'+o(typeof(a=null!=(a=n.updatedDate||(null!=t?t.updatedDate:t))?a:l)===i?a.call(t,{name:"updatedDate",hash:{},data:e}):a)+'</span>\n</div>\n<span class="notes-list-body">'+o(typeof(a=null!=(a=n.body||(null!=t?t.body:t))?a:l)===i?a.call(t,{name:"body",hash:{},data:e}):a)+"</span>\n"},useData:!0}),addin.templates.list=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,n,s,e){return'<div class="notes-list">\n\t<div class="note-list-outer-wrapper">\n\t\t<div class="note-list-wrapper">\n\t\t\t<ol class="list note-list"></ol>\n\t\t</div>\n\t</div>\n\t<footer class="footer-input">\n\t\t<input class="notes-input notes-new" type="text" placeholder="New Note">\n\t\t<i class="loading-icon notes-new-loading"></i>\n\t\t<i class="error-icon notes-new-error" title="Trouble connecting... Click to retry">!</i>\n\t</footer>\n\t<div class="u--pafill notes-empty">\n\t\t<div class="empty">\n\t\t\t<div class="title">Take quick notes and store wisdom to view later.</div>\n\t\t\t<div class="description">No notes yet. Add a note to get started!</div>\n\t\t\t<span class="button notes-empty-new">New Note</span>\n\t\t</div>\n\t</div>\n\t<div class="notes-loading"><i class="loading-icon"></i>Loading…</div>\n</div>\n'},useData:!0}),addin.templates.notes=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,n,s,e){return'<div class="subviews-wrapper">\n\t<div class="subviews u--no-transition">\x3c!--\n\t\t--\x3e<div class="subview list-view"></div>\x3c!--\n\t\t--\x3e<div class="subview detail-view"></div>\n\t</div>\n</div>\n'},useData:!0});
addin["styles"] = addin["styles"] || {};
addin["styles"]["style"] = function() { var style = document.createElement('style');style.type = 'text/css';style.innerHTML = '.list-borders:after,.list-borders:first-child:before{height:1px;position:absolute;bottom:0;left:var(--app-padding);right:var(--app-padding);background:rgba(255,255,255,.15);content:""}.list-borders:first-child:before{top:0;bottom:auto}.notes{--width:550px}.notes .app{height:520px;width:var(--width);min-width:450px;padding:0;max-width:none;overflow:hidden;transition:transform var(--a-fast) var(--a-curve)}.notes .subviews-wrapper{transition:opacity .1s ease}.notes.hide-content .subviews-wrapper{opacity:0}.notes-list{height:100%;display:flex;flex-direction:column;box-sizing:border-box}.notes-list.loading{align-items:center;justify-content:center}.note-list-header,.notes-list.loading .footer-input,.notes-list.loading .note-list-outer-wrapper,.notes-list.loading .notes-empty{display:none}.notes-loading{display:none;opacity:.7}.notes-list.loading .notes-loading{display:block}.note-list-outer-wrapper{min-height:0;display:flex;flex:1}.note-list-wrapper{padding-top:var(--app-padding);flex:1;overflow-y:auto}.note-list{display:flex;flex-direction:column}.notes-list-item{padding:8px var(--app-padding);position:relative;cursor:pointer;font-size:100%;-webkit-transition:color .05s ease}.notes-list-body,.notes-list-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.notes-list-title-group{display:flex;align-items:baseline}.notes-list-title{max-width:84%;font-weight:500;opacity:.8}.notes-list-item.selected .notes-list-title,.notes-list-item:hover .notes-list-title{opacity:1}.notes-list-date{padding-left:11px;flex-shrink:0;font-size:87.5%;opacity:.4}.notes-list-item.selected .notes-list-date,.notes-list-item:hover .notes-list-date{opacity:.6}.notes-list-body{margin-top:3px;display:block;font-size:86.667%;opacity:.5}.notes-list-item.selected .notes-list-body,.notes-list-item:hover .notes-list-body{opacity:.8}.notes-list-item.selected{box-shadow:inset 4px 0 0 0 rgba(255,255,255,.6);z-index:10}.light .notes-list-item.selected{box-shadow:inset 4px 0 0 0 rgba(0,0,0,.4);z-index:10}.notes .footer-input{flex:0 0 auto}.notes .notes-input{width:100%;background:0 0;border:0;box-sizing:border-box;font-size:100%;outline-width:0}.notes .notes-new{padding-top:11px}.notes-empty-loading{display:none}.loading .notes-empty-loading{display:block}.notes-empty-new{cursor:pointer}.notes-empty-description{margin:0;font-size:93.75%;opacity:.575}.notes .loading .description,.notes .loading .title{display:none}.notes .empty{height:100%;display:flex}.notes-new-loading{height:11px;width:11px;position:absolute;top:13px;right:10px;display:none;border-width:1px}.loading .notes-new-loading{display:inline}.notes-new-error{height:14px;width:14px;position:absolute;top:12px;right:16px;display:none;border-radius:100%;text-align:center;-webkit-user-select:auto;user-select:auto}.failed .notes-new-error{display:inline}.notes-detail{--notes-detail-header-height:47px;height:100%;display:flex;align-items:stretch}.notes-detail-header{height:var(--notes-detail-header-height);padding:0!important;position:relative;z-index:2;align-items:center;justify-content:center}.notes-detail-title{display:inline-block;opacity:.45;font-size:87.5%}.notes-detail .header .back{position:absolute;left:0}.notes.fullscreen .notes-detail .header .back{display:none}.notes-detail .header .controls{position:absolute;right:calc(var(--app-padding) - 6px)}.notes-detail .control{padding-top:0;padding-bottom:0;cursor:pointer}.notes-detail .controls .icon-wrapper{padding:6px}.notes-detail .icon{height:19px;width:16px;text-align:center;font-family:Arial,Helvetica,sans-serif}.notes-detail .icon-left{height:14px;margin-bottom:1px}.notes-detail .new .icon-wrapper{margin-right:-2px;margin-left:-1px}.notes-detail .icon-plus{height:20px;width:19px;margin-bottom:1px}.notes-detail .icon-expand svg,.notes-detail .icon-restore svg{width:13px;margin-top:2px}.notes-detail .icon-trash{height:15px;margin-bottom:2px;font-size:14px}.notes .delete-group{display:none;align-items:center;opacity:.96;font-size:87.5%}.notes-detail .delete-group.show{display:flex}.notes .delete-group .delete-msg{height:auto;margin-right:10px}.notes .delete-group .control.delete{width:25px;margin:0 1px;opacity:1}.notes .delete-group .icon{height:auto}.notes .delete-group .icon-checkmark{width:13px}.notes .delete-group .icon-x{width:11px}.notes-detail .delete-failed,.notes-detail .delete-group.loading .delete,.notes-detail .delete-loading{display:none}.notes-detail .delete-group.loading .delete-loading{display:inline}.notes-detail .delete-group.failed .delete{display:none}.notes-detail .delete-group.failed .delete-failed{display:inline}.notes .delete-group .delete-loading{margin-right:6px}.notes .delete-group .delete-failed{padding:6px;opacity:.8;cursor:pointer}.notes .delete-group .delete-failed:hover{opacity:1}.note-body{flex-grow:1;display:flex}.notes .notes-textarea{height:auto;padding:var(--app-padding);padding-top:6px;flex-grow:1;opacity:.96;border-bottom:none;cursor:text;line-height:140%}.notes .subviews{width:2200px;position:absolute}.detail-view,.list-view{transition:all .2s ease}.notes .list-bar-wrapper{display:none}.notes .detail-view,.notes .list-view{width:550px;height:520px}.notes .list-bar{display:flex;flex-direction:column}.notes .note-list-header .toggle-list-icons{transition:transform .5s ease}.notes .detail-bar{flex:1 0;display:inline-flex;position:relative;flex-direction:column}.notes .notes-detail-header .toggle-list-icons{padding-left:12px}.notes .icon-restore{display:none}.notes.fullscreen .subviews{height:100%;width:100%;transform:translateY(0)}.notes.fullscreen .list-bar-wrapper{max-width:0;position:relative;z-index:3;flex:1 1 20%;display:flex;flex-direction:column;border-right:1px solid rgba(255,255,255,0);box-sizing:content-box;transition:all .5s ease}.notes.fullscreen .list-bar-open .list-bar-wrapper{max-width:var(--list-bar-width);border-right:1px solid rgba(255,255,255,.15);transform:translateX(0)}.light .notes.fullscreen .list-bar-open .list-bar-wrapper{border-color:rgba(0,0,0,.1)}.notes.fullscreen .list-bar{width:var(--list-bar-width);position:absolute;top:var(--notes-detail-header-height);right:-50px;bottom:0;transition:opacity .5s ease,right .5s ease;opacity:0;visibility:hidden}.notes.fullscreen .list-bar-open .list-bar{right:0;opacity:1}.notes.fullscreen .show-list .list-bar{visibility:visible}.notes.fullscreen .notes-list-date{font-size:83.33333%}.notes.fullscreen .list-bar-toggle{height:var(--notes-detail-header-height);position:absolute;top:0;right:-50px;bottom:calc(100% - var(--notes-detail-header-height));left:0;display:flex;justify-content:flex-end;align-items:stretch;cursor:pointer;transition:right .5s ease,border .5s ease}.notes.fullscreen .list-bar-open .list-bar-toggle{right:0}.notes.fullscreen .list-bar-toggle .icon-wrapper{padding-left:19px;padding-right:19px}.notes.list-bar-toggle .icon-x{width:13px;display:none}.notes.list-bar-open .list-bar-toggle .icon-x{display:inline-block}.notes.fullscreen .notes-new,.notes.list-bar-open .list-bar-toggle .icon-list{display:none}.notes.fullscreen .note-list-wrapper{padding-top:0}.notes.fullscreen .notes-list{font-size:112.5%}.notes.fullscreen .note-list{padding-bottom:var(--app-padding)}.notes.fullscreen .notes-list-title{max-width:71%}.notes.fullscreen .notes-list-item{padding-left:var(--app-padding);padding-right:var(--app-padding)}.notes.fullscreen .notes-list-item.selected{background-color:rgba(255,255,255,.1);box-shadow:none;z-index:0}.fullscreen .list-borders.above-selected:after,.fullscreen .list-borders.selected:first-child:before,.notes.fullscreen .list-borders.selected:after{left:0;right:0}.notes.fullscreen .list-borders.above-selected:after{bottom:-1px}.light .notes.fullscreen .notes-list-item.selected{background-color:rgba(0,0,0,.04)}.notes.fullscreen .detail-view{--list-bar-width:280px;height:100%;width:100%;position:absolute;top:0;right:0;bottom:0;left:0}.notes.fullscreen .notes-detail-header{width:100%;padding:0!important;position:absolute;justify-content:space-between}.notes.fullscreen .notes-detail-header .toggle-list-icons{display:flex}.notes.fullscreen .list-bar-open .notes-detail-header .toggle-list-icons,.notes.fullscreen .notes-detail-title{display:none}.toggle-list-icons .icon-list-toggle{height:7px;width:13px;position:relative}.icon-list-toggle .list-toggle-bottom,.icon-list-toggle .list-toggle-middle,.icon-list-toggle .list-toggle-top{height:13px;width:13px;position:absolute;left:0;transition:transform .5s ease,opacity .5s ease}.icon-list-toggle .list-toggle-top{top:-8px}.icon-list-toggle .list-toggle-middle{top:-3px}.icon-list-toggle .list-toggle-bottom{bottom:-8px}.list-bar-open .icon-list-toggle .list-toggle-top{transform:rotate(-45deg) translate(-3.5px,3.5px)}.list-bar-open .icon-list-toggle .list-toggle-middle{opacity:0}.list-bar-open .icon-list-toggle .list-toggle-bottom{transform:rotate(45deg) translate(-3.5px,-3.5px)}.notes.fullscreen .icon-restore{display:inline-block}.notes.fullscreen .icon-expand{display:none}.notes.fullscreen .note-body{position:absolute;top:var(--notes-detail-header-height);right:0;bottom:0;left:0}.notes .fullscreen-textarea .notes-textarea{padding:50px calc((100% - 750px)/ 2);font-size:19px;line-height:160%}@media handheld and (max-width:1130px),screen and (max-device-width:1130px),screen and (max-width:1130px){.notes .fullscreen-textarea .notes-textarea{transition:padding .5s ease}.notes.hide-content .fullscreen-textarea .notes-textarea{transition:none}.notes .fullscreen-textarea .list-bar-open .notes-textarea{padding:50px calc((var(--list-bar-width) - (100vw - 100%))/ 2 + 50px)}}@media handheld and (max-width:850px),screen and (max-device-width:850px),screen and (max-width:850px){.notes .fullscreen-textarea .notes-textarea{padding:50px}}';document.getElementsByTagName('head')[0].appendChild(style);};
addin.collect.Notes = Backbone.Collection.extend({
	localStorage: new Backbone.LocalStorage("notes"),
	baseUrl: m.globals.urlRootApi + 'notes',
	notes_version: '1.0.3',

	initialize: function () {
		this.model = addin.models.Note
		this.listenTo(this, 'change', this.onChange)
		this.listenTo(this, 'reset', this.onReset)
		this.listenTo(this, 'add', this.onAdd)
		window.addEventListener('storage', this.handleStorageEvent.bind(this), false)
		this.fetchedFromServer = false
	},

	handleStorageEvent: function (e) {
		if (!this.removing_items && e.key.slice(0, 5) == 'notes') {
			this.fetch()
		}
	},

	activeNotes: function () {
		var sorted = _(this.where({ deleted: false }))
			.chain()
			.sortBy(function (item) { return -item.get('updatedDate') })
			.value()

		return sorted
	},

	// Return the Note that comes after `current` in the sorted list of active notes. Wrap to start of list if at end.
	next: function (currentNote) {
		var activeNotes = this.activeNotes()
		var currentIndex = activeNotes.indexOf(currentNote)
		var nextIndex = currentIndex == activeNotes.length - 1 ? 0 : currentIndex + 1
		return activeNotes[nextIndex]
	},

	// Return the Note that comes before `current` in the sorted list of active notes. Wrap to end of list if at start.
	prev: function (currentNote) {
		var activeNotes = this.activeNotes()
		var currentIndex = activeNotes.indexOf(currentNote)
		var prevIndex = currentIndex == 0 ? activeNotes.length - 1 : currentIndex - 1
		return activeNotes[prevIndex]
	},

	onReset: function () {

		this.models.map(function(model){
			if(model.isDummy())
				model.delete()
		})
		var self = this
		var hasModels = this.models.length > 0
		if (hasModels && this.hasAttribute('changed_props')) {
			this.syncToServer(function () {
				self.fetchFromServer(function () {
					if (!hasModels) {
						if (self.models.length > 0) {
							self.trigger('active-model-changed')
						}
					}
				})
			})
		} else {
			self.fetchFromServer(function () {
				if (!hasModels) {
					if (self.models.length > 0) {
						self.trigger('active-model-changed')
					} else {
						self.trigger('update')
					}
				}
			})
		}
	},

	findHavingAttribute: function (key) {
		return this.filter(function (model) {
			return model.has(key)
		})
	},

	findNotHavingAttribute: function (key) {
		return this.filter(function (model) {
			return !model.has(key)
		})
	},
	findNewModels: function () {
		return this.filter(function (model) {
			return !model.isDummy()
		})
	},

	hasAttribute: function (key) {
		return !!this.find(function (model) {
			return model.has(key)
		})
	},

	onAdd: function (model, coll, options) {
		if (options && options.ignoreSave) return;
		this.syncToServer()
	},

	onChange: function (model, options) {
		var self = this
		if (options.ignoreSave) return

		var changed = model.changedAttributes()
		if (!changed) return
		var changed_props = null
		var newChanges = false
		for (prop in changed) {
			if (changed.hasOwnProperty(prop) && prop != 'changed_props' && prop != '_id') {
				if (!changed_props) {
					changed_props = model.get('changed_props') || []
				}
				if (!_.contains(changed_props, prop)) {
					changed_props.push(prop)
					newChanges = true
				}
			}
		}
		if (newChanges && changed_props) {
			model.save({ updatedDate: new Date() }, { silent: true, ignoreSave: true })
			changed_props.push('updatedDate')
			model.save({ changed_props: changed_props, updatedDate: Date.now() }, {
				silent: false,
				ignoreSave: true,
				success: function () {
					setTimeout(function () {
						self.syncToServer()
					}, 50)
				}
			})
		}
	},

	syncToServer: function (callback) {
		var self = this
		var changedModels = this.findHavingAttribute('changed_props')
		if (!changedModels || changedModels.length == 0) {
			changedModels = this.findNewModels()
			if (!changedModels || changedModels.length == 0) {
				if (callback) callback()
				return
			}
		}

		nimble.each(changedModels, function (model, asyncCallback) {
			var syncRequired = !model.has('_id')
			if (!syncRequired) {
				var changedProps = model.get('changed_props')
				if (!changedProps || changedProps.length == 0) {
					asyncCallback()
					return
				}
			}

			var changes = {}

			if (syncRequired) {
				var modelAttributes = model.toJSON()
				modelAttributes['_cid'] = modelAttributes['id']
				delete modelAttributes['changed_props']
				delete modelAttributes['id']
				modelAttributes.notes_version = self.notes_version
				$.ajax({
						url: self.baseUrl,
						contentType: 'application/json',
						type: "POST",
						beforeSend: m.utils.setMomentumAuthHeader,
						data: JSON.stringify(modelAttributes)
					})
					.done(function (postResult) {
						if (postResult && postResult._id) {
							model.save({ changed_props: null, _id: postResult._id }, { silent: true, ignoreSave: true })
						}
					})
					.fail(function (xhr, desc) {
						// TODO: should we do something here?
					})
					.always(function () {
						asyncCallback()
						return
					})
			} else {
				_.each(changedProps, function (prop) {
					if (prop != 'changed_props') {
						changes[prop] = model.get(prop)
					}
				})

				if ((Object.keys(changes).length == 1 && changes.hasOwnProperty('updatedDate')) ||
					(Object.keys(changes).length == 2 && changes.hasOwnProperty('updatedDate') && changes.hasOwnProperty('id'))) {
					model.save({ changed_props: null }, { silent: true, ignoreSave: true })
					asyncCallback()
					return
				}

				var url = self.baseUrl + '/' + encodeURIComponent(model.get('_id'))

				changes.notes_version = self.notes_version
				$.ajax({
						url: url,
						contentType: 'application/json',
						type: "PATCH",
						beforeSend: m.utils.setMomentumAuthHeader,
						data: JSON.stringify(changes)
					})
					.done(function (patchResult) {
						model.save({ changed_props: null }, { silent: true, ignoreSave: true })
					})
					.fail(function (xhr, desc) {
						// TODO: should we do something here?
					})
					.always(function () {
						asyncCallback()
						return
					})
			}
		}, function () {
			if (callback) callback()
		});
	},

	fetchFromServer: function (callback) {
		var self = this
		// TODO: fetch from server
		$.ajax({
				url: this.baseUrl,
				contentType: 'application/json',
				type: "GET",
				beforeSend: m.utils.setMomentumAuthHeader
			})
			.done(function (getResult) {
				if (getResult) {
					var current_ids = []
					_.each(getResult, function (item) {
						var model = self.findWhere({ id: item.id })
						if (!model) {
							model = self.findWhere({ _id: item._id })
						}
						if (model) {
							current_ids.push(model.id)
							model.save(item, { silent: true, ignoreSave: true })
						} else {
							current_ids.push(item.id)
							self.create(item, { ignoreSave: true })
						}
					})
					var removed_ids = []
					self.each(function (note) {
						if (note.has('id') && !_.contains(current_ids, note.get('id'))) {
							removed_ids.push(note.get('id'))
						}
					})
					if (removed_ids.length > 0) {
						self.removing_items = true
						_.each(removed_ids, function (id) {
							var note = self.get(id)
							if (note) note.destroy()
						})
						self.removing_items = false
					}
				}
			})
			.fail(function (xhr, desc) {
				// TODO: should we do something here?
			})
			.always(function () {
				self.fetchedFromServer = true
				self.trigger('fetchedFromServer')
				if (callback) callback()
			})
		// TODO: store timestamp?
	}
})

addin.models.Note = Backbone.Model.extend({
	defaults: function () {
		return {
			body: '',
			createdDate: new Date(),
			updatedDate: Date.now(),
			deleted: false
		}
	},

	constants: {
		'titleLengthGuide': 60,
		'bodyPreviewMaxLength': 150,
	},

	delete: function (options) {
		options = options || {}
		if(this.isDummy()) {
			this.destroy(options);
		} else {
			this.save({ deleted: true }, options)
		}
	},

	isDummy: function () {
		return this.get('body').length === 0 && !this.get('_id')
	},
	generateTitle: function () {
		var body = this.get('body')
		var title, newLineIndex, endIndex

		// Empty note: use placeholder
		if (!body) return 'Empty Note'

		// If multiline note, only work with the first line when setting title
		newLineIndex = body.indexOf('\n')
		newLineIndex != -1 ? title = body.slice(0, newLineIndex) : title = body

		// Truncate title if necessary by checking for the first space after the length guideline
		endIndex = title.indexOf(' ', this.constants.titleLengthGuide - 1)
		if (endIndex != -1) title = title.slice(0, endIndex)

		return title
	},

	checkForMultiLineNote(body) {
		var remainder, newLineIndex
		newLineIndex = body.indexOf('\n')
		newLineIndex != -1 ? remainder = body.slice(newLineIndex, body.length - 1) : remainder = null
		if (!remainder) return false

		// Checks if any lines after the first contain non-whitespace characters.
		// Would it be more efficient to check this property when saving a note?
		return remainder.search(/[^\s]+/) !== -1
	},

	getBodyPreview: function () {
		var body = this.get('body')
		var title = this.generateTitle()
		var preview, newLineIndex
		this.delighter = this.delighter || this.getRandomDelighter()
		// Empty note
		if (!body) return this.delighter

		// Short note
		if (!this.checkForMultiLineNote(body)) {
			preview = 'No additional text'
		// Longer note
		} else {
			preview = body.substr(title.length, this.constants.bodyPreviewMaxLength).trim()
		}

		return preview
	},

	getRandomDelighter: function () {
		var messages = [
			'Type something cool!',
			'Think of the possibilities...',
			'Record some wisdom',
			'Use your words',
			'Type a tidbit',
			'This is your canvas',
		]
		return messages[Math.floor(Math.random() * messages.length)]
	},
})

addin.views.Detail = Backbone.View.extend({
	className: 'notes-detail',
	template: addin.templates.detail,
	autosaveInterval: 5000,
	usingMouse: false,

	events: {
		'click .back': 'handleClickBack',
		'click .new': 'new',
		'click .delete': 'toggleDeleteConf',
		'click .delete-yes': 'handleClickDelete',
		'click .delete-no': 'closeDeleteConf',
		'click .delete-failed': 'handleClickDelete',
		'click .list-bar-toggle': 'toggleListBar',
		'blur .notes-textarea': 'onBlur',
		'keyup .notes-textarea': 'handleKeyUp'
	},

	initialize: function (options) {
		this.list = options.list
		this.addListeners()
		this.render()
		this.startAutosaveInterval()
		this.showDeleteConf = false
		var self = this
		window.onbeforeunload = function(){ self.saveToModel()}
		this.listenTo(this.model, 'change:archive change:deleted remove', this.handleRemove)
	},

	render: function (scrollToBottom) {
		this.$el.html(this.template({ body: this.model.get('body'), isFullScreen: this.list.isFullScreen }))

		this.$noteTitle = this.$('.notes-detail-title')
		this.$actionRightGroup = this.$('.main-nav')
		this.$deleteGroup = this.$('.delete-nav')
		this.$deleteYes = this.$('.delete-yes')
		this.$textarea = this.$el.find('.notes-textarea')
		this.setModel(this.model, this.scrollToBottom)

		return this
	},

	handleRemove: function () {
		this.model = null
		this.back()
	},
	setModel: function (newModel, scrollToBottom) {
		if(this.model !== newModel){
			this.stopListening(this.model);
			this.model = newModel
			this.addListeners()
			this.$('.notes-textarea').val(this.model.get('body'))
			if (this.showDeleteConf) this.closeDeleteConf()
		}
		this.updateTitle()
		var self = this
		setTimeout( function(){
			self.focusTextarea()
			if (scrollToBottom) self.scrollToBottom()
		}, 100)
	},

	addListeners: function () {
		this.listenTo(m, 'globalEvent:arrowLeft globalEvent:key:backspace globalEvent:esc globalEvent:metaEnter', this.handleGlobalBack)
		this.listenTo(m, 'globalEvent:metaBackspace', this.handleGlobalMetaBackspace)
		this.listenTo(m, 'globalEvent:shiftN', this.handleGlobalCtrlN)
		this.listenTo(m, 'globalEvent:metaBracketLeft', this.handleGlobalMetaBracketLeft)
		this.listenTo(m, 'globalEvent:metaBracketRight', this.handleGlobalMetaBracketRight)
		this.listenTo(m, 'globalEvent:altF', this.handleGlobalAltF)
		this.listenTo(m, 'globalEvent:altL', this.handleGlobalAltL)
		this.listenTo(m.models.customization, 'change:hour12clock', this.updateTitle)
		this.listenTo(this.model, 'change:updatedDate', this.updateTitle)
		this.listenTo(this, 'destroy', this.destroy)
	},

	updateTitle: function () {
		if(this.model)
			this.$noteTitle.text(this.formatDate(new Date(this.model.get('updatedDate')), m.models.customization.get('hour12clock')))
	},

	destroy: function () {
		this.clearAutosaveInterval()
		this.remove()
		this.unbind()
		this.$el.html('')
	},

	onBlur: function () {
		this.saveToModel()
	},

	saveToModel: function () {
		var body = this.$textarea.val()

		if(!this.model || body === this.model.get('body'))
			return

		this.model.set({ body: body })
	},

	startAutosaveInterval: function () {
		var self = this
		if (!this.saveNoteInterval) {
			this.saveNoteInterval = setInterval(function () {
				self.saveToModel()
			}, this.autosaveInterval)
		}
	},

	clearAutosaveInterval: function () {
		if (this.saveNoteInterval) {
			clearInterval(this.saveNoteInterval)
			this.saveNoteInterval = null
		}
	},

	focusTextarea: function () {
		var self = this
		// Focus textarea, using 0 timeout hack to get it to work
		setTimeout(function () {
			self.$textarea.focus()

			// Move cursor to end of selection, without changing scroll position (it remains at top)
			var ta = self.$textarea[0]
			ta.selectionStart = ta.selectionEnd = ta.value.length
		}, 0)
	},

	handleKeyUp(e) {
		// Scroll to bottom on enter if at end of input in fullscren mode
		if (this.list.isFullScreen && e && e.keyCode === 13 && this.$textarea.prop('selectionStart') === this.$textarea.val().length) {
			this.scrollToBottom()
		}
	},

	scrollToBottom() {
		this.$textarea.scrollTop(this.$textarea[0].scrollHeight)
	},

	handleClickBack: function (e) {
		this.usingMouse = true
		e.stopPropagation()
		this.back()
	},

	handleClickDelete: function (e) {
		this.usingMouse = true
		e.stopPropagation()
		this.delete()
	},

	back: function () {
		if (this.list.isFullScreen) {
			this.list.toggleFullscreen()
			return
		}
		this.saveToModel()
		this.list.handleBack(false)
		this.model = null;
	},

	toggleListBar: function () {
		var self = this
		if (this.list.isFullScreen) {
			if (this.list.listBarOpen) {
				this.list.listBarOpen = false
				this.$el.removeClass("list-bar-open")
				this.timeout = setTimeout(function() {
					self.$el.removeClass("show-list")
				}, 500)
			} else {
				if (this.timeout) {
					clearTimeout(this.timeout)
				}
				// load the list bar template
				if (!this.$('.list-bar').html()) {
					this.list.loadList('.list-bar')
					this.list.addAll(true) // populates the list content
				}
				this.list.listBarOpen = true
				this.$el.addClass("show-list list-bar-open")
			}
		}
	},

	new: function () {
		if (this.model.get('body')) { // Dissalow creation of new note from empty note
			this.model = null;
			this.list.createNoteDetail()
		} else {
			this.focusTextarea()
		}
	},

	toggleDeleteConf: function () {
		this.showDeleteConf = !this.showDeleteConf
		this.$deleteGroup.toggleClass('show')
		this.$deleteYes.removeClass('loading failed')
		this.$actionRightGroup.toggle()
	},

	closeDeleteConf: function (e) {
		e && e.stopPropagation()
		this.showDeleteConf = false
		this.$deleteGroup.removeClass('show')
		this.$deleteYes.removeClass('loading failed')
		this.$actionRightGroup.show()
	},
	delete: function () {
		var self = this
		self.$deleteGroup.removeClass('failed').addClass('loading')

		self.model.delete({
			wait: true,
			success: function () {
				self.$deleteGroup.removeClass('loading')
				if (self.list.isFullScreen) {
					if(self.list.collection.activeNotes().length) {
						var topNote = self.list.collection.activeNotes()[0]
						self.setModel(topNote)
						self.list.selectItemById(topNote.id)
					} else {
						self.list.toggleFullscreen()
						self.list.handleBack(true)
					}
				} else {
					self.list.handleBack(true)
				}
			},
			error: function () {
				self.$deleteGroup.removeClass('loading').addClass('failed')
			},
		})
		m.sendEvent('Notes', 'Delete')
	},

	deleteViaHotkey: function () {
		this.toggleDeleteConf()
		this.delete()
	},

	handleGlobalBack: function (e) {
		if (this.list.open) {
			e.preventDefault();
			e.stopPropagation()
			this.back()
		}
	},

	handleGlobalMetaBackspace: function (e) {
		if (this.list.open) {
			e.preventDefault();
			e.stopPropagation()
			this.deleteViaHotkey()
		}
	},

	handleGlobalShiftN: function (e) {
		if (this.list.open) {
			e.preventDefault();
			e.stopPropagation()
			this.list.createNoteDetail()
		}
	},

	handleGlobalAltL: function (e) {
		if (!this.list.open) return
		e.preventDefault()
		if (this.list.isFullScreen) this.toggleListBar()
	},

	handleGlobalAltF: function (e) {
		if (!this.list.open) return
		e.preventDefault()
		this.list.toggleFullscreen()
	},

	handleGlobalMetaBracketLeft: function (e) {
		if (this.list.open) {
			e.preventDefault();
			e.stopPropagation()
			this.saveToModel()
			this.list.detailPrevNote(this.model)
		}
	},

	handleGlobalMetaBracketRight: function (e) {
		if (this.list.open) {
			e.preventDefault();
			e.stopPropagation()
			this.saveToModel()
			this.list.detailNextNote(this.model)
		}
	},

	formatDate: function (dt, hour12clock) {
		var hours24 = dt.getHours(),
				minsStr = m.utils.twoDigit(dt.getMinutes()),
				hoursStr

		// TODO generalize this 12/24h calculation; used various places across extension
		if (hour12clock) {
			var hours12 = hours24 % 12 || 12, // Convert from 24h to 12h, with 12 instead of 0
					period = hours24 >= 12 ? 'PM' : 'AM'
			hoursStr = hours12 + ':' + minsStr + ' ' + period
		} else {
			hoursStr = m.utils.twoDigit(hours24) + ':' + minsStr
		}
		return m.utils.formatMonthDayRelative(dt, false) + m.utils.formatYearRelative(dt) + ' at ' + hoursStr
	}
})

addin.views.Item = Backbone.View.extend({
	attributes: { class: 'list-borders notes-list-item' },
	tagName: 'li',
	template:  addin.templates.item,
	events: {
		'click': 'handleClick',
	},

	initialize: function (options) {
		this.list = options.list
		this.listenTo(this.model, 'change', this.render)
		this.listenTo(this.model, 'change:archive change:deleted remove', this.remove)
		this.listenTo(m.models.customization, 'change:hour12clock', this.render)
	},

	render: function () {
		this.$placeholder = $('<li></li>').addClass('placeholder')
		this.$placeholder.appendTo(this.el)
		this.$placeholder.hide()

		var variables = {
			title: this.model.generateTitle(),
			body: this.model.getBodyPreview(),
			updatedDate: this.formatDate(new Date(this.model.get('updatedDate'))),
		}
		this.$el.html(this.template(variables))
		this.$el.attr('data-note-id', this.model.id)

		return this
	},

	destroy: function () {
		this.remove()
		this.unbind()
	},

	handleClick: function () {
		this.list.handleItemClick(this.model)
	},

	formatDate: function (dt) {
		var result

		if (m.utils.dateIsToday(dt)) {
			result = this.formatTime(dt, m.models.customization.get('hour12clock'))
		} else if (m.utils.dateIsInLast7d(dt)) {
			result = m.utils.getDayName(dt, true)
		} else {
			result = m.utils.getMonthName(dt, true) + ' ' + dt.getDate() + m.utils.formatYearRelative(dt)
		}

		return result
	},

	formatTime: function (dt, hour12clock) {
		var hours24 = dt.getHours(),
				minsStr = m.utils.twoDigit(dt.getMinutes()),
				result

		// TODO generalize this 12/24h calculation; used various places across extension
		if (hour12clock) {
			var hours12 = hours24 % 12 || 12, // Convert from 24h to 12h, with 12 instead of 0
					period = hours24 >= 12 ? 'PM' : 'AM'
			result = hours12 + ':' + minsStr + ' ' + period
		} else {
			result = m.utils.twoDigit(hours24) + ':' + minsStr
		}

		return result
	}
})

addin.views.List = Backbone.View.extend({
	attributes: { id: 'notes', class: 'app notes-app' },
	template: addin.templates.notes,
	open: false,
	selectedNote: null,

	events: {
		'click .notes-empty-new': 'createNoteFromEmptyState',
		'keyup .notes-new': 'handleInputKeyup',
		'click .notes-new-error': 'handleClickError',
		'click .toggle-fullscreen': 'toggleFullscreen'
	},

	initialize: function () {
		this.$el.attr(_.result(this, 'attributes'))
		this.subViews = []
		this.render()
		var self = this
		this.listenTo(m, 'globalEvent:arrowUp', this.handleGlobalArrowUp)
		this.listenTo(m, 'globalEvent:arrowDown', this.handleGlobalArrowDown)
		this.listenTo(m, 'globalEvent:arrowRight globalEvent:key:enter', this.handleGlobalArrowRight)
		this.listenTo(m, 'globalEvent:key:shiftN globalEvent:key:A', this.focusOnNewNote)
		this.listenTo(m, 'globalEvent:metaBackspace', this.handleGlobalMetaBackspace)
		this.listenTo(this.collection, 'reset', function(){ self.addAll()})
		this.listenTo(this.collection, 'add', this.onCollectionAdd)
		this.listenTo(this.collection, 'update', this.handleUpdate)
		this.listenTo(this.collection, 'change:updatedDate', this.handleChangeUpdatedDate)
		this.listenTo(this.collection, 'fetchedFromServer', this.handleUpdate)
		this.timeouts = []
		this.collection.fetch({ reset: true })
		this.isFullScreen = false
		this.listBarOpen = false
	},

	handleChangeUpdatedDate: function () {
		this.addAll()
	},

	render: function () {
		this.$el.addClass('u--no-transition')
		this.$el.html(this.template())
		this.loadList('.list-view')
		this.handleUpdate()
		var self = this
		if (!this.renderedOnce) {
			setTimeout(function() {
				self.$el.removeClass('u--no-transition')
				self.$el.find('.subviews').removeClass('u--no-transition')
			}, 20)
			this.renderedOnce = true
		}
		return this
	},

	loadList: function (selector) {
		this.$el.find(selector).html(addin.templates.list())
		this.$empty = this.$('.notes-empty')
		this.$noteList = this.$('.note-list')
		this.$notesNewContainer = this.$('.notes-new-container')
		this.$notesNew = this.$('.notes-new')
	},
	addAll: function (sideView) {
		var self = this
		var selectedNoteId = (typeof this.selectedNote != 'undefined') && $(this.$('.notes-list-item')[this.selectedNote]).attr('data-note-id') // find the id of the current activ note

		_.each(this.subViews, function (e) {
			if (e) e.destroy()
		})
		this.subViews = []
		_.each(this.collection.activeNotes(), function (note, index) {
			self.addOne(note, true)
			if (selectedNoteId === note.id) self.selectedNote = index // saving a note will bump it to the top, so find it again and redefine selectedNote
		})

		// Loading of collection is now complete
		this.$('.notes-list').removeClass('loading')
		this.handleUpdate()
		var currentItemId = localStorage.getItem('current-note-id')
		if(currentItemId && !sideView){
			var model = this.collection.get(currentItemId)
			if(model && !model.get('deleted') && !model.isDummy())
				this.switchToDetailView(model)
		}
	},

	addOne: function (noteModel, append) {
		var noteView = new addin.views.Item({ model: noteModel, list: this })
		var $noteEl = noteView.render().el
		this.subViews.push(noteView)
		append ? this.$noteList.append($noteEl) : this.$noteList.prepend($noteEl)
	},

	onCollectionAdd: function (noteModel) {
		this.addOne(noteModel, false)
	},

	handleUpdate: function () {
		var activeNoteCount = this.collection.activeNotes().length
		if (activeNoteCount == 0 && this.collection.fetchedFromServer) {
			this.$('.notes-list').removeClass('loading')
			this.$empty.mShow()
			this.$notesNew.mHide()
			this.$noteList.mHide()
		} else if (activeNoteCount == 0 && !this.collection.fetchedFromServer) {
			this.$('.notes-list').addClass('loading')
		} else {
			this.$('.notes-list').removeClass('loading')
			this.$empty.mHide()
			if (!this.isFullScreen) {
				this.$notesNew.mShow()
			}
			this.$noteList.mShow()

			// If note was deleted via detail view and last note on list was selected, `this.selectedNote` needs to be decremented
			if (this.selectedNote == activeNoteCount) this.selectedNote--
				$(this.$('.notes-list-item')[this.selectedNote]).addClass('selected').prev().addClass('above-selected')
		}
	},

	handleItemClick: function (model) {
		this.switchToDetailView(model, false, true)
	},

	handleClickError: function (e) {
		e.stopPropagation()
		this.createNote()
	},

	switchToDetailView: function (model, fromDetailView, listItemClicked) {
		if(this.detailView && this.detailView.model && this.detailView.model.isDummy())
			this.detailView.model.delete()
		var self = this
		if (!model) return
		if (this.isDetailActive() && this.detailView.slidingOut) return // detail view is sliding out so eat the click
		if (this.modelInFocus === model.id) return
		this.modelInFocus = model.id
		if (this.isDetailActive()) {
			this.detailView.setModel (model)
		} else {
			this.detailView = new addin.views.Detail({ model: model, list: this })
		}
		if(!this.isFullScreen && !fromDetailView) {
			var $noteListWrapper = this.$el.find('.note-list-wrapper')
			this.hideListScrollBar($noteListWrapper)
			this.$el.find('.detail-view').html(self.detailView.render(!listItemClicked).el)
			this.$el.find('.subviews').addClass('second')
			setTimeout(function() {
				self.showListScrollBar($noteListWrapper)
			}, 200)
		}
		this.selectItemById(model.id)

		localStorage.setItem('current-note-id', model.id)
	},

	destroyDetailView: function () {
		if(!this.detailView)
			return
		this.detailView.destroy()
		this.detailView = null
	},

	hideListScrollBar($noteListWrapper) {
		var scrollbarWidth = $noteListWrapper.length && $noteListWrapper[0].offsetWidth - $noteListWrapper[0].clientWidth
		$noteListWrapper.css({'overflow-y': 'hidden', 'margin-right': scrollbarWidth ? scrollbarWidth : '' })
	},

	showListScrollBar($noteListWrapper) {
		$noteListWrapper.css({ 'overflow-y': '', 'margin-right': '' })
	},

	handleBack: function (wasDeleted) {
		var self = this
		if(!wasDeleted && this.detailView.model && this.detailView.model.isDummy()) {
			this.detailView.model.delete()
		}
		var $noteListWrapper = this.$el.find('.note-list-wrapper')
		this.hideListScrollBar($noteListWrapper)
		this.$el.find('.subviews').removeClass('second')
		this.handleUpdate()
		if (!wasDeleted && this.detailView.model) this.selectItemById(this.detailView.model.id)
		this.scrollItemIntoView(this.$noteList.find('.notes-list-item.selected'))
		if (this.detailView.usingMouse) this.clearSelectedNote()
		this.focusNewNote()
		this.modelInFocus = null
		this.listBarOpen = false
		localStorage.removeItem('current-note-id')
		this.detailView.slidingOut = true
		setTimeout(function() {
			self.destroyDetailView()
			self.showListScrollBar($noteListWrapper)
		}, 200)
	},

	handleInputKeyup: function (e) {
		// Enter key
		if (e.keyCode == 13) {
			e.stopPropagation()
			this.createNote()
		// Up arrow
		} else if (e.keyCode == 38) {
			this.$notesNew.blur()
			this.selectPrevItem()
		// Down arrow
		} else if (e.keyCode == 40) {
			this.$notesNew.blur()
			this.selectNextItem()
		}
	},

	handleGlobalArrowUp: function (e) {
		if (this.open && !this.isDetailActive()) {
			e.preventDefault();
			e.stopPropagation()
			this.selectPrevItem()
		}
	},

	handleGlobalArrowDown: function (e) {
		if (this.open && !this.isDetailActive()) {
			e.preventDefault();
			e.stopPropagation()
			this.selectNextItem()
		}
	},

	handleGlobalArrowRight: function (e) {
		if (this.open && !this.isDetailActive()) {
			e.preventDefault();
			e.stopPropagation()
			this.switchToDetailFromKeyboard()
		}
	},

	focusOnNewNote: function (e) {
		if (this.open && !this.isDetailActive()) {
			e.preventDefault();
			e.stopPropagation()
			this.focusNewNoteViaHotkey()
		}
	},

	handleGlobalMetaBackspace: function (e) {
		if (this.open && !this.isDetailActive()) {
			e.preventDefault();
			e.stopPropagation()
			this.deleteItemFromKeyboard()
		}
	},

	selectPrevItem: function () {
		if (this.collection.activeNotes().length == 0) return

		var $listItems = this.$('.notes-list-item')
		// First press of up arrow selects last note in list
		if (this.selectedNote == undefined) {
			this.selectedNote = $listItems.length - 1
			// Subsequent presses select the note above the selected note, wrapping to end of list if at start
		} else {
			$($listItems[this.selectedNote]).removeClass('selected').prev().removeClass('above-selected')
			this.selectedNote = this.selectedNote == 0 ? $listItems.length - 1 : this.selectedNote - 1
		}
		$($listItems[this.selectedNote]).addClass('selected')
		this.scrollItemIntoView($($listItems[this.selectedNote]))
	},

	selectNextItem: function () {
		if (this.collection.activeNotes().length == 0) return

		var $listItems = this.$('.notes-list-item')
		// First press of down arrow selects first note in list
		if (this.selectedNote == undefined) {
			this.selectedNote = 0
			// Subsequent presses select the next note below the selected note, wrapping to start of list if at end
		} else {
			$($listItems[this.selectedNote]).removeClass('selected').prev().removeClass('above-selected')
			this.selectedNote = this.selectedNote == $listItems.length - 1 ? 0 : this.selectedNote + 1
		}
		$($listItems[this.selectedNote]).addClass('selected').prev().addClass('above-selected')
		this.scrollItemIntoView($($listItems[this.selectedNote]))
	},

	tearDown: function () {
		if (this.isFullScreen)
			this.toggleFullscreen()
	},

	selectItemById: function (noteId) {
		this.$noteList.find('.notes-list-item.selected').removeClass('selected').prev().removeClass('above-selected')
		var $selectedNote =	this.$noteList.find('[data-note-id="' + noteId + '"]')
		$selectedNote.prev().addClass('above-selected')
		this.selectedNote = $selectedNote.addClass('selected').index()
	},

	clearSelectedNote: function () {
		this.$noteList.find('.notes-list-item.selected').removeClass('selected').prev().removeClass('above-selected')
		this.selectedNote = null
	},

	switchToDetailFromKeyboard: function () {
		this.switchToDetailView(this.getSelectedNoteModel())
	},

	deleteItemFromKeyboard: function () {
		this.getSelectedNoteModel().delete()
		// When last note deleted via keyboard, ensure new note is focused
		if (this.collection.activeNotes().length == 0) {
			this.selectedNote = null
			this.focusNewNote()
		}
	},

	getSelectedNoteModel: function () {
		var noteId = $(this.$('.notes-list-item')[this.selectedNote]).data('note-id')
		return this.collection.get(noteId)
	},

	createNote: function (e) {
		var self = this
		if (this.$notesNewContainer.hasClass('loading')) return

		var bodyInput = this.$notesNew[0].value.trim()
		if (!bodyInput) return
		// Append a newline to the note so when the detail view loads, the cursor is on the next line
		bodyInput = bodyInput + '\n'

		this.$notesNewContainer.removeClass('failed').addClass('loading')
		self.collection.create({ body: bodyInput }, {
			wait: true,
			success: function (model) {
				self.$notesNewContainer.removeClass('loading')
				self.switchToDetailView(model)
				self.$notesNew[0].value = ''
			},
			error: function () {
				self.$notesNewContainer.removeClass('loading').addClass('failed')
			},
		})
		m.sendEvent('Notes', 'Create from List')
	},
	createNoteFromEmptyState() {
		var self = this
		this.model = null;
		self.collection.create({ body: '' }, {
			wait: true,
			success: function (model) {
				self.switchToDetailView(model)
			},
			error: function () {
				console.log('error creating note')
			}
		})
	},
	createNoteDetail: function () {
		var self = this
		// this.list.handleBack(false)
		this.model = null;
		self.collection.create({ body: '' }, {
			wait: true,
			success: function (model) {
				self.switchToDetailView(model, true)
			},
			error: function () {
				console.log('error creating note')
			}
		})
		m.sendEvent('Notes', 'Create from Detail')
	},

	detailNextNote: function (currentNote) {
		this.switchToDetailView(this.collection.next(currentNote))
	},

	detailPrevNote: function (currentNote) {
		this.switchToDetailView(this.collection.prev(currentNote))
	},

	focusNewNote: function () {
		// Only autofocus if user hasn't yet used up/down arrow hotkeys
		if (this.selectedNote == undefined) this.$notesNew.focus()
	},

	focusNewNoteViaHotkey: function () {
		if (this.selectedNote != undefined) this.clearSelectedNote()
		this.$notesNew.focus()
	},

	scrollItemIntoView: function ($el) {
		var el = $el[0]
		var parent = $el.parent()[0]

		if(el) {
			// Scroll bottom into view if necessary
			var bottomOffset = el.getBoundingClientRect().bottom - parent.getBoundingClientRect().bottom
			if (bottomOffset > 0) parent.scrollTop += bottomOffset

			// Scroll top into view if necessary
			// Note: in our case items are always smaller than the containing list, so only one scroll adjustment (top or bottom) will happen
			var topOffset = el.getBoundingClientRect().top - parent.getBoundingClientRect().top
			if (topOffset < 0) parent.scrollTop += topOffset
		}
	},

	onShowPane: function () {
		this.open = true
		if (this.isDetailActive()) {
			this.detailView.startAutosaveInterval()
			this.detailView.focusTextarea()
		} else {
			this.focusNewNote()
		}
	},

	onHidePane: function () {
		this.isFullScreen = false
		this.open = false
		if (this.isDetailActive()) this.detailView.clearAutosaveInterval()
	},

	isDetailActive: function () {
		return !!this.detailView
	},

	preventCloseOnEsc: function () {
		// Prevent closing this pane if the detail view is showing - it will handle the Escape
		return this.isDetailActive()
	},

	toggleFullscreen: function () {
		var self = this
		// var sloMo = false // Only use for debugging
		// if (sloMo) this.$el.addClass('slomo')

		if (this.timeouts.length) { // Allows rapid toggling
			this.timeouts.forEach(function(timeout) {
				clearTimeout(timeout)
			})
		}

		this.detailView && this.detailView.focusTextarea() // re-focus the textarea

		if(!this.isFullScreen) { // ENTER FULLSCREEN
			var domRect = this.$el[0].getBoundingClientRect()
			/*
			getBoundingClientRect returns positions relative to top & left sides.
			We want to save positions relative to the bottom & right sides in case the window resizes.
			For now just convert right and bottom because we are setting top and left just below
			*/
			this.rect = {
				top: domRect.top,
				right: window.innerWidth - domRect.right,
				bottom: window.innerHeight - domRect.bottom,
				left: domRect.left
			}

			this.$el.closest('.app-container').addClass('hide-content') // Fade out content inside the notes widget - 100ms

			// Switch the note pane to position fixed, but in the same location so it can be transitioned
			this.$el.css({
				position: 'fixed',
				top: this.rect.top,
				right: this.rect.right,
				bottom: this.rect.bottom,
				left: this.rect.left,
			})

			// Now convert these positions to be relative to right/bottom
			this.rect.top = window.innerHeight - this.rect.top
			this.rect.left = window.innerWidth - this.rect.left,

		this.timeouts.push(setTimeout(function() {
				// Designates full screen layout changes inside the pane
				self.$el.closest('.app-container').addClass('fullscreen')

				m.widgetManager.hideAppsExcept('.apps .notes') // Hide all apps except notes

				self.$('.list-view').html('') // Empty out regular list subview but delay loading new list view until expanded
				if (self.listBarOpen) { // If list bar is already expanded, load it
					self.loadList('.list-bar')
					self.addAll() // Populates the list
				}

				// Transition pane to fullscreen dimensions - 200ms
				self.isFullScreen = true
				self.$el.css({
					// transition: sloMo ? 'all 2000ms ease' : 'all 200ms ease',
					transition: 'all 200ms ease',
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				})
				self.$el.closest('.app-wrapper').removeClass('nipple-bottom-right') // Free the nipple
				self.$el.addClass('fullscreen-textarea') // Designates wider margins for textarea
			// }, sloMo ? 1000 : 100))
			},100)) // after .hide-content transition complete


			this.timeouts.push(setTimeout(function() {
				self.$el.closest('.app-container').removeClass('hide-content') // Fade in notes content - 50ms
			// }, sloMo ? 3000 : 300))
			}, 300)) // after pane animates to fullscreen dimensions

		} else { // EXIT FULLSCREEN

			this.isFullScreen = false
			this.$el.closest('.app-container').addClass('hide-content') // Fade out content inside the notes widget - 100ms

			this.timeouts.push(setTimeout(function() {
				// Disable transitions on subviews
				self.$('.subviews').addClass('u--no-transition')
				self.$('.detail-view').addClass('u--no-transition')

				self.$el.css({
					// Transition back to regular notes view positions
					// Here top and left are converted back to relative to top and left sides
					position: 'fixed',
					top: window.innerHeight - self.rect.top,
					right: self.rect.right,
					bottom: self.rect.bottom,
					left: window.innerWidth - self.rect.left,
				})
				m.widgetManager.showApps() // Fade other apps back into view
				self.$('.list-bar').html('') // Clear out the fullscreen list sidebar
				self.loadList('.list-view') // Reload the regular list subview
			// }, sloMo ? 1000 : 100))
			}, 100)) // after .hide-content transition complete
			this.timeouts.push(setTimeout(function() {
				self.$el.removeClass('fullscreen-textarea') // Bring back regular textarea margins

				// Fade notes content back in while switching back to regular layout
				self.$el.closest('.app-container').removeClass('fullscreen hide-content')

				self.$el.css({
					// Remove all inline CSS
					transition: '',
					position: '',
					top: '',
					right: '',
					bottom: '',
					left: '',
				})
				self.$el.closest('.app-wrapper').addClass('nipple-bottom-right')
				self.addAll() // Populates the list
			// }, sloMo ? 3000 : 300))
			}, 300)) // after pane has transitioned back to regular dimensions

			this.timeouts.push(setTimeout(function() {
				// Reenable transitions on subviews once layout swap completes
				self.$('.detail-view').removeClass('u--no-transition')
				self.$('.subviews').removeClass('u--no-transition')
			// }, sloMo ? 3500 : 350))
			}, 350))
		}
	}
})

m.collect.notes = new addin.collect.Notes()

addin.styles.style()
m.views.notes = m.widgetManager.handover('notes', addin.views.List, { collection: m.collect.notes, region: 'bottom-right', order: 'prepend' })

m.widgets.push(m.views.notes) }); if(m.addinManager) {m.addinManager.registerAddinFn("23c67761-9831-415e-b358-c6844eb6c244", fn_addin);}