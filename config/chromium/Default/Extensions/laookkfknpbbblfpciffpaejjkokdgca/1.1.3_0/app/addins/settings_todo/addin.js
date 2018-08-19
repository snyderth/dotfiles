var fn_addin = (function (m, $) { var addin = addin || {}; addin.styles=addin.styles||{};addin.styles.style = function(){ return; }; addin.views = addin.views || {}; addin.collect = addin.collect || {}; addin.models = addin.models || {}; addin.templates = addin.templates || {}; addin.templates=addin.templates||{},addin.templates.main=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,n,s,a){return'<div class="settings-view-wrapper">\n\t<h3>Todo</h3>\n\t<p class="description">Break your goals into manageable pieces</p>\n\n\n\n\t<h4>Settings</h4>\n\t<ul class="settings-list options-list">\n\t\t<li class="slide-toggle on" id="remember-open-state">\n\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t<span class="setting-name">Stay open</span>\n\t\t\t<span class="option-message">Stay open on new tab and other usage</span>\n\t\t</li>\n\t\t<li class="slide-toggle on" id="auto-focus">\n\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t<span class="setting-name">Autofocus</span> <span class="badge plus-badge">PLUS</span>\n\t\t\t<span class="option-message">Automatically set top todo as your main focus</span>\n\t\t</li>\n\t</ul>\n\n\n\n\t<h4>Multi-Todo Lists <span class="badge plus-badge">PLUS</span></h4>\n\t<p class="subdescription">Organize your todos into multiple lists</p>\n\n\t<div id="custom-lists" class="settings-todo-lists-container"><span class="loading" style="display: block;"><i class="loading-icon"></i>Loading...</span></div>\n\t\x3c!--<p class="tip">Tip: Use your <strong>&larr;</strong> and <strong>&rarr;</strong> keys to quickly move between lists.</p>--\x3e\n\n\n\n\t<h4 id="todo-settings-integrations">Integrations <span class="badge plus-badge">PLUS</span></h4>\n\t<p class="subdescription">Connect your external todos</p>\n\n\t<div id="connected-providers"><span class="loading"><i class="loading-icon"></i>Loading...</span></div>\n\t<p class="empty">No external task managers connected. Add an integration to get started!</p>\n\n\t<button class="button add-integration"><i class="icon icon-plus"></i>Add Integration</button>\n\n\t<div class="add-provider-container">\n\t\t<span class="hide-integration settings-cancel">✕</span>\n\t\t<h4>Choose an Integration <i class="badge plus-badge">PLUS</i></h4>\n\n\t\t<p class="all-connected">Congratulations, you\'re fully connected!</p>\n\n\t\t<div id="available-providers"><span class="loading"><i class="loading-icon"></i>Loading...</span></div>\n\n\t\t<div class="suggest-integration">\n\t\t\t<h5>Looking for another integration?</h5>\n\t\t\t<p>\n\t\t\t\t\x3c!--We\'d love to hear what other services you use.<br>--\x3e\n\t\t\t\t<a href="https://get.momentumdash.help/hc/en-us/community/topics/115000492928-Integrations">Suggest an Integration</a>\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</div>\n\n\n<div class="settings-connect"></div>\n'},useData:!0}),addin.templates["todo-color-palette"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,n,s,a){return'<li style="background: #d42022"></li>\x3c!--\n--\x3e<li style="background: #f05a0f"></li>\x3c!--\n--\x3e<li style="background: #ffaa00"></li>\x3c!--\n--\x3e<li style="background: #eae60b"></li>\x3c!--\n--\x3e<li style="background: #9fea0a"></li>\x3c!--\n--\x3e<li style="background: #40dc19"></li>\x3c!--\n--\x3e<li style="background: #05eba6"></li>\x3c!--\n--\x3e<li style="background: #17ccde"></li>\x3c!--\n--\x3e<li style="background: #14a7eb"></li>\x3c!--\n--\x3e<li style="background: #336be8"></li>\x3c!--\n--\x3e<li style="background: #5d56da"></li>\x3c!--\n--\x3e<li style="background: #990099"></li>\x3c!--\n--\x3e<li style="background: #c30f62"></li>\x3c!--\n--\x3e<li style="background: #e377c2"></li>\x3c!--\n--\x3e<li style="background: #e6e6e6"></li>\x3c!--\n--\x3e<li class="no-color"></li>\n'},useData:!0}),addin.templates.todo_available=Handlebars.template({1:function(t,n,s,a){var e,l,i=n.helperMissing,o="function",c=this.escapeExpression;return'\t<li data-provider-id="'+c(typeof(l=null!=(l=n.id||(null!=t?t.id:t))?l:i)===o?l.call(t,{name:"id",hash:{},data:a}):l)+'" class="connect-todo">\n\t\t<img '+(null!=(e=n.if.call(t,null!=t?t.GitHub:t,{name:"if",hash:{},fn:this.program(2,a,0),inverse:this.noop,data:a}))?e:"")+' src="'+c(typeof(l=null!=(l=n.small_icon_url||(null!=t?t.small_icon_url:t))?l:i)===o?l.call(t,{name:"small_icon_url",hash:{},data:a}):l)+'">\x3c!--\n\t\t--\x3e<span class="provider-title">'+c(typeof(l=null!=(l=n.provider_title||(null!=t?t.provider_title:t))?l:i)===o?l.call(t,{name:"provider_title",hash:{},data:a}):l)+(null!=(e=n.if.call(t,null!=t?t.beta:t,{name:"if",hash:{},fn:this.program(4,a,0),inverse:this.noop,data:a}))?e:"")+'</span>\x3c!--\n\t\t--\x3e<span class="scope">'+c(typeof(l=null!=(l=n.short_description||(null!=t?t.short_description:t))?l:i)===o?l.call(t,{name:"short_description",hash:{},data:a}):l)+"</span>\n\t\t"+(null!=(e=n.unless.call(t,null!=t?t.active:t,{name:"unless",hash:{},fn:this.program(6,a,0),inverse:this.noop,data:a}))?e:"")+"\n\t</li>\n"},2:function(t,n,s,a){return'class="GitHub"'},4:function(t,n,s,a){return' <span class="badge beta-badge">Beta</span>'},6:function(t,n,s,a){return'<span class="u--right status">Coming Soon</span>'},compiler:[6,">= 2.0.0-beta.1"],main:function(t,n,s,a){var e;return'<ul class="settings-list provider-list add-provider">\n'+(null!=(e=n.each.call(t,t,{name:"each",hash:{},fn:this.program(1,a,0),inverse:this.noop,data:a}))?e:"")+"</ul>\n"},useData:!0}),addin.templates.todo_connected=Handlebars.template({1:function(t,n,s,a){var e,l,i=n.helperMissing,o="function",c=this.escapeExpression;return'\t<li data-provider-id="'+c(typeof(l=null!=(l=n.id||(null!=t?t.id:t))?l:i)===o?l.call(t,{name:"id",hash:{},data:a}):l)+'" class="has-provider-id'+(null!=(e=n.if.call(t,null!=t?t.provider_active:t,{name:"if",hash:{},fn:this.program(2,a,0),inverse:this.noop,data:a}))?e:"")+'">\n\t\t<a href="'+c(typeof(l=null!=(l=n.provider_url||(null!=t?t.provider_url:t))?l:i)===o?l.call(t,{name:"provider_url",hash:{},data:a}):l)+'">\n\t\t<img '+(null!=(e=n.if.call(t,null!=t?t.GitHub:t,{name:"if",hash:{},fn:this.program(4,a,0),inverse:this.noop,data:a}))?e:"")+' src="'+c(typeof(l=null!=(l=n.small_icon_url||(null!=t?t.small_icon_url:t))?l:i)===o?l.call(t,{name:"small_icon_url",hash:{},data:a}):l)+'">'+c(typeof(l=null!=(l=n.provider_title||(null!=t?t.provider_title:t))?l:i)===o?l.call(t,{name:"provider_title",hash:{},data:a}):l)+(null!=(e=n.if.call(t,null!=t?t.beta:t,{name:"if",hash:{},fn:this.program(6,a,0),inverse:this.noop,data:a}))?e:"")+'\x3c!--\n\t\t--\x3e<span class="scope">'+c(typeof(l=null!=(l=n.short_description||(null!=t?t.short_description:t))?l:i)===o?l.call(t,{name:"short_description",hash:{},data:a}):l)+'</span>\n        </a>\n\t\t<span class="u--right">\n\t\t\t<span class="provider-actions">\n\t\t\t\t'+(null!=(e=n.if.call(t,null!=t?t.config_command:t,{name:"if",hash:{},fn:this.program(8,a,0),inverse:this.noop,data:a}))?e:"")+"\n\t\t\t\t"+(null!=(e=n.unless.call(t,null!=t?t.provider_active:t,{name:"unless",hash:{},fn:this.program(10,a,0),inverse:this.noop,data:a}))?e:"")+"\n\t\t\t\t"+(null!=(e=n.unless.call(t,null!=t?t.prevent_disconnect:t,{name:"unless",hash:{},fn:this.program(12,a,0),inverse:this.noop,data:a}))?e:"")+"\n\t\t\t</span>\n\t\t\t"+(null!=(e=n.if.call(t,null!=t?t.provider_active:t,{name:"if",hash:{},fn:this.program(14,a,0),inverse:this.noop,data:a}))?e:"")+"\n\t\t</span>\n\n\t</li>\n"},2:function(t,n,s,a){return" active-provider"},4:function(t,n,s,a){return'class="GitHub"'},6:function(t,n,s,a){return' <span class="badge beta-badge">Beta</span>'},8:function(t,n,s,a){return'<span class="provider-action launch-config">Configure</span>'},10:function(t,n,s,a){return'<span class="provider-action set-active">Set Active</span>'},12:function(t,n,s,a){return'<span class="provider-action disconnect">Disconnect</span>'},14:function(t,n,s,a){return'<span class="status">Active</span>'},compiler:[6,">= 2.0.0-beta.1"],main:function(t,n,s,a){var e;return'<ul class="settings-list provider-list connected-providers">\n'+(null!=(e=n.each.call(t,t,{name:"each",hash:{},fn:this.program(1,a,0),inverse:this.noop,data:a}))?e:"")+"</ul>\n"},useData:!0}),addin.templates.todo_lists=Handlebars.template({1:function(t,n,s,a){var e,l,i=n.helperMissing,o="function",c=this.escapeExpression;return'\t<li data-id="'+c(typeof(l=null!=(l=n.id||(null!=t?t.id:t))?l:i)===o?l.call(t,{name:"id",hash:{},data:a}):l)+'" class="settings-todo-list draggable-todo-list">\n\t\t<span class="settings-todo-list-color"></span>\n\n\t\t<span class="settings-todo-list-name">'+c(typeof(l=null!=(l=n.title||(null!=t?t.title:t))?l:i)===o?l.call(t,{name:"title",hash:{},data:a}):l)+'</span>\n\t\t<span class="settings-list-status">\n\t\t\t<i class="loading-icon"></i>\n\t\t</span>\n'+(null!=(e=n.if.call(t,null!=t?t.stock:t,{name:"if",hash:{},fn:this.program(2,a,0),inverse:this.program(4,a,0),data:a}))?e:"")+"\n\t</li>\n"},2:function(t,n,s,a){return'\t\t\t <span class="settings-list-right">\n\t\t\t\t<span class="action-group" title="">\n\t\t\t\t<span class="default">Default</span>\n\t\t\t\t</span>\n\t\t\t</span>\n'},4:function(t,n,s,a){return'\t\t<span class="settings-list-right">\x3c!--\n\t\t\t--\x3e<span class="action-group" title="">\x3c!--\n\t\t\t\t--\x3e<i class="rename-list-failed error-icon" title="Trouble connecting... Click to retry">!</i>\x3c!--\n\t\t\t\t--\x3e<span class="todo-rename-list action">Rename</span>\x3c!--\n\t\t\t\t--\x3e<span class="todo-delete-list action" title="Delete"><i class="icon-trash"></i></span>\x3c!--\n\t\t\t\t--\x3e<i class="delete-failed-1 error-icon" title="Trouble connecting... Click to retry">!</i>\x3c!--\n\t\t\t--\x3e</span>\x3c!--\n\t\t\t--\x3e<span class="delete-group" title="">\x3c!--\n\t\t\t\t--\x3e<span class="delete-1">\x3c!--\n\t\t\t\t\t--\x3e<span class="delete delete-msg">Delete list?</span>\x3c!--\n\t\t\t\t\t--\x3e<span class="delete delete-yes clickable">Yes</span>\x3c!--\n\t\t\t\t\t--\x3e<span class="delete delete-no clickable">No</span>\x3c!--\n\t\t\t\t--\x3e</span>\x3c!--\n\t\t\t\t--\x3e<span class="delete-2">\x3c!--\n\t\t\t\t\t--\x3e<span class="delete delete-msg-2"></span>\x3c!--\n\t\t\t\t\t--\x3e\x3c!--<span class="delete delete-todos clickable">Delete</span> comment out for release--\x3e\x3c!--\n\t\t\t\t\t--\x3e<span class="delete move-todos clickable">Move to Inbox</span>\x3c!--\n\t\t\t\t\t--\x3e<span class="delete delete-cancel clickable">Cancel</span>\x3c!--\n\t\t\t\t--\x3e</span>\x3c!--\n\t\t\t\t--\x3e<span class="delete delete-loading">Deleting...</span>\x3c!--\n\t\t\t\t--\x3e<i class="delete-failed-2 error-icon" title="Trouble connecting... Click to retry">!</i>\x3c!--\n\t\t\t--\x3e</span>\n\t\t</span>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(t,n,s,a){var e;return'<ul class="settings-list options-list settings-todo-lists">\n'+(null!=(e=n.each.call(t,t,{name:"each",hash:{},fn:this.program(1,a,0),inverse:this.noop,data:a}))?e:"")+'\t<li class="settings-todo-add-list">\n\t\t<input type="text" class="settings-todo-add-list-input" placeholder="+ Add a list">\n\t\t<i class="add-list-failed error-icon" title="Trouble connecting... Click to retry">!</i>\n\t\t<span class="toggle-add-list settings-cancel">✕</span>\n\t\t<span class="settings-list-status">\n\t\t\t<i class="loading-icon"></i>\n\t\t</span>\n\t\t<button class="button toggle-add-list show"><i class="icon icon-plus"></i>Add List</button>\n\t</li>\n</ul>\n'},useData:!0});
addin["styles"] = addin["styles"] || {};
addin["styles"]["style"] = function() { var style = document.createElement('style');style.type = 'text/css';style.innerHTML = '.settings-todo-lists-container{margin-bottom:35px}.settings-todo-lists{margin-bottom:0;-webkit-user-select:none;user-select:none}.settings-todo-lists li{padding:8px 0;position:relative}.settings-todo-lists li.loading{display:block;margin:0}.settings-todo-list-color{position:absolute;top:0;left:-10px;bottom:0;z-index:10;display:flex;align-items:center;cursor:pointer;vertical-align:top}.settings-todo-list-color .swatch-container{margin-top:0;margin-right:0;padding:10px}.settings-todo-list-color .swatch-container .swatch{height:11px;width:11px;box-shadow:none}.settings-todo-list-color .swatch-container:hover .swatch{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.7),inset 0 0 4px 1px rgba(255,255,255,.3)}.light .settings-todo-list-color .active .swatch,.light .settings-todo-list-color .swatch-container:hover .swatch{box-shadow:none!important;opacity:.6!important}.settings-todo-list-color .active .swatch{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.5),inset 0 0 4px 1px rgba(255,255,255,.3)!important}.settings-todo-list-color .swatch-container .swatch.no-color,.settings-todo-list-color .swatch-container .swatch.null-color{background-image:url(/img/grid.png)!important;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.2)}.settings-todo-list-color .swatch-container:hover .swatch.no-color,.settings-todo-list-color .swatch-container:hover .swatch.null-color{background-image:url(/img/grid.png)!important;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.4)}.settings-todo-list-color.none .swatch{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.3)}.settings-todo-list:hover .none .swatch{opacity:.7}.none .settings-todo-list-color .swatch-container:hover .swatch{opacity:1}.color-palette-wrapper{position:relative}.swatch-color-picker{width:195px;padding:10px 10px 5px;position:absolute;bottom:35px;left:-4px;z-index:100;display:none;background:#282828;border-radius:4px;line-height:1px}.swatch-color-picker.nipple-bottom-left:before{left:13px;border-top-color:#282828!important}.active .swatch-color-picker{display:block}.swatch-color-picker li{height:20px;width:20px;margin:0 5px 5px 0;padding:0;display:inline-block;border:none!important;border-radius:4px;cursor:pointer}.swatch-color-picker li:nth-child(8n){margin-right:0;border:none}.swatch-color-picker li:hover{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.75),inset 0 0 8px 1px rgba(255,255,255,.6)}.swatch-color-picker .active{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.9),inset 0 0 8px 1px rgba(255,255,255,.6)!important}.swatch-color-picker .no-color{background-image:url(/img/grid.png);box-shadow:inset 0 0 0 2px rgba(255,255,255,.3)}.swatch-color-picker .check{display:none;position:absolute;top:5px;left:5px;fill:#fff}.settings-todo-list-name{max-width:330px;padding-left:22px;display:inline-block;cursor:default;opacity:.9;outline:0;overflow:hidden;vertical-align:middle}.settings-todo-list-name.editing{cursor:auto;outline:0;opacity:.6}.settings-todo-list.failed .rename-list-failed{display:inline-block}.settings-list-status{margin-top:3px;float:right;opacity:0;font-size:85.714%}.loading .settings-list-status{display:block;opacity:1}.settings-list-right{margin-top:2px;float:right;opacity:0;font-size:85.714%}.loading .settings-list-right{display:none}.settings-list-right .delete{padding:4px}.settings-list-right .delete-2{display:none}.settings-list-right .error-icon{height:14px;width:14px;border-radius:100%;display:none;text-align:center}.settings-list-right .delete-failed-1{margin-right:5px;display:none}.settings-todo-list.failed .settings-list-right,.settings-todo-list.failed-delete .settings-list-right,.settings-todo-lists li:hover .settings-list-right{opacity:1}.settings-list-right .delete-group.failed .delete-failed-2{display:inline-block}.settings-list-right .action{padding:9px 5px;cursor:pointer;opacity:.6}.settings-list-right:last-child{margin-right:-5px}.settings-list-right .action:hover{opacity:1}.settings-list-right .action:active{opacity:.8}.settings-list-right .default{margin-right:5px}.settings-todo-lists .settings-todo-add-list{padding:0;position:relative;border-bottom:none!important}.settings-todo-lists .toggle-add-list{display:none}.settings-todo-lists .toggle-add-list.show{display:inline}.settings-todo-lists .settings-todo-add-list-input{width:85%;margin-bottom:11px!important;padding:9px 20px 9px 0;display:none;border:0;opacity:.75}.settings-todo-add-list.loading .settings-todo-add-list-input{opacity:.5}.settings-todo-add-list .error-icon{height:14px;width:14px;position:absolute;top:9px;right:19px;border-radius:100%;display:none;text-align:center}.settings-todo-add-list.failed .error-icon{display:inline-block}.settings-todo-add-list .settings-cancel{margin:3px -6px 0 0;display:none;font-size:14px}.loading .settings-cancel.show{display:none}.settings-todo-add-list.loading .settings-list-status{margin-top:9px}.settings-todo li a{padding:0;display:inline}';document.getElementsByTagName('head')[0].appendChild(style);};
m.views.settings = m.views.settings || {}

m.views.settings.TodoListColorPalette = Backbone.View.extend({
	tagName: 'ul',

	attributes: { class: 'nipple-bottom-left swatch-color-picker' },

	template: addin.templates['todo-color-palette'],

	active: false,

	events: {
		'click li': 'handleClick'
	},

	initialize: function (options) {
		this.color = options.color.toLowerCase().replace(/ /g,"")
		this.callback = options.renderCallback
	},

	render: function () {
		this.$el.html(this.template())
		this.preRender()
		return this
	},

	selectColor: function ($el) {
		this.$el.find('li').removeClass('active')
		this.$el.find('svg').hide()
		$el.addClass('active')
		$el.find('svg').show()
	},

	handleClick: function (e) {
		if (!m.conditionalFeatures.featureEnabled('plus')) {
			var options = {
				targetRegion: 'settings',
				sourceEvent: 'colorCodeLists',
				buttonText: 'Learn more',
				title: 'Todo list color labels',
				description: 'Add a little color to your todo organization'
			}
			m.commandManager.execute('upsell.message', options)
			return
		}
		this.selectColor($(e.target))
		if ($(e.target).hasClass('no-color'))
			this.color = 'rgba(0,0,0,0)'
		else
			this.color = $(e.target).css('background-color')
		this.callback(new Colors({color:this.color}))
	},

	preRender: function (toggled) {
		var self = this
		this.$el.find('li').each( function(index, item) {
			var $item = $(item);
			$item.html('<svg class="check" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="10px" height="10px"><defs><filter id="f4" x="0" y="0" width="200%" height="200%"><feOffset result="offOut" in="SourceGraphic" dx="20" dy="20" /><feColorMatrix result="matrixOut" in="offOut" type="matrix" values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0" /><feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" /><feBlend in="SourceGraphic" in2="blurOut" mode="normal" /></filter></defs> <path class="path" d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7    C514.5,101.703,514.499,85.494,504.502,75.496z" /></svg>')
			if($item.hasClass('active')) $item.find('svg').show()
			if (self.color.indexOf('rgba')==0 && self.color.charAt(self.color.length-2) == '1')
				self.color='rgb('+self.color.substring(5, self.color.length-3) + ')'
			var otherColor = $(item).css('background-color').replace(/ /g,"")
			if (otherColor == self.color)
				self.selectColor($item)
		})
	}

});

addin.views.Main = m.views.settings.SettingsPanel.extend({
	attributes: {
		id: 'settings-todo',
		class: 'settings-view settings-todo'
	},
	template: addin.templates.main,
	panelid: 'todo',
	events: {
		// Todo settings
		'click #remember-open-state': 'toggleRememberOpenState',
		'click #auto-focus': 'toggleAutoFocus',

		// Todo lists
		'dblclick .draggable-todo-list': 'handleClickRenameList',
		'dblclick .settings-list-right': 'preventRenameOnActions',
		'keyup .settings-todo-list-name': 'handleEscKeyupRename',
		'keypress .settings-todo-list-name': 'handleEnterKeypressRename',
		'blur .settings-todo-list-name': 'onBlur',
		'click .todo-rename-list': 'handleClickRenameList',
		'click .rename-list-failed': 'saveList',
		'click .todo-delete-list': 'toggleDeleteConf',
		'click .delete-failed-1': 'toggleDeleteConf',
		'click .delete-yes': 'handleClickDeleteYes',
		'click .delete-no': 'toggleDeleteConf',
		'click .delete-todos': 'handleClickDeleteTodos',
		'click .move-todos': 'handleClickMoveTodos',
		'click .delete-cancel': 'handleClickDeleteCancel',
		'click .delete-failed-2': 'showDeleteConf',
		'click .toggle-add-list': 'toggleAddList',
		'click .add-list-failed': 'processAddListForm',
		'keyup .settings-todo-add-list-input': 'handleEscKeyupAdd',
		'keypress .settings-todo-add-list-input': 'handleEnterKeypressAdd',

		// Integrations
		'click .connect-todo': 'initiateConnectProvider',
		'click #connect-button': 'connectTodoProvider',
		'click .add-integration': 'toggleAddIntegration',
		'click .hide-integration': 'toggleAddIntegration',
		'click .set-active': 'setProviderActive',
		'click .disconnect': 'disconnectProvider',
		'click .launch-config': 'launchConfiguration',
		'click .back': 'cancelConnect',
		'dragstart .draggable-todo-list': 'dragstart',
		'dragenter .draggable-todo-list': 'dragenter',
		dragover: 'dragover',
		dragend: 'dragend'
	},

	initialize: function() {
		// Pull down todo settings
		_.bindAll(this, 'dragstart', 'dragenter')
		var that = this
		if(!m.models.todoListManager && m.views.todoPane)
			m.views.todoPane.doFirstFetch()

		this.collection = new m.collect.Settings()
		this.collection.url = m.globals.urlRoot + 'settings/todo'
		this.collection.parse = function(response) {
			that.collection.lastResponse = response
			return response.connected_providers
		}
		this.listenTo(this.collection, 'reset', this.collectionReset)
		this.listenTo(m, 'todo:providerChanged', this.providerChanged)
		this.listenTo(m, 'todo:listAdded', this.fetchCustomLists)
		this.listenTo(m.models.customization, 'change', this.customizationChanged)
		this.refreshData()

		if (m.conditionalFeatures.featureEnabled('enhancedtodo')) {
			// Pull down Momo custom lists
			this.momoCustomLists = new m.collect.TodoSettings()
			this.momoCustomLists.url = m.globals.urlRoot + 'settings/todo/providers/1/lists'
			this.listenTo(this.momoCustomLists, 'reset', this.populateCustomLists)
			this.fetchCustomLists(false)
		}
	},

	render: function(options) {
		this.$el.html(this.template({}))
		this.$connect = $(this.$el.find('.settings-connect')[0])
		this.$todo = $(this.$el.find('.settings-view-wrapper')[0])
		this.$addIntegration = this.$('.add-integration')
		this.$addProviderContainer = this.$('.add-provider-container')
		this.setControlStates()

		this.$placeholder = $('<li></li>').addClass('placeholder')
		this.$placeholder.appendTo(this.$el)
		this.$placeholder.hide()
		var self = this

		if (m.conditionalFeatures.featureEnabled('enhancedtodo')) {
			// #Hack Momo provider will be null when set initially, so keep checking it until it is non-null
			this.intervalId = setInterval(
				function(self) {
					try {
						self.momoProvider = m.models.todoListManager.todoProviderDetails(1, true)
						if (self.momoProvider) clearInterval(self.intervalId)
					} catch (er) {
						clearInterval(self.intervalId)
						var $customLists = $(self.$el.find('#custom-lists')[0])
						$customLists.html('')
					}
				},
				100,
				this
			)
		} else this.populateCustomLists() // this causes the custom list section to populate with nothing in it, so that the Add List button appears

		setTimeout(function() {
			if (options && options.action == 'connect') {
				$('.add-integration').toggle(false)
				$('.add-provider-container').toggle(true)
				setTimeout(function() {
					$('.settings-todo').animate({ scrollTop: $('#todo-settings-integrations').position().top })
				}, 100)
			}
		}, 50)

		return this
	},

	// Custom Todo Lists

	fetchCustomLists: function(autofocus) {
		var self = this
		this.autofocus = autofocus

		this.momoCustomLists.fetch({
			reset: true,
			success: function() {
				if (self.autofocus) self.toggleAddList()
			}
		})
	},
	populateCustomLists: function() {
		this.$customLists = $(this.$el.find('#custom-lists')[0])
		var data = []
		if (this.momoCustomLists) data = this.momoCustomLists.toJSON()

		var html = addin.templates['todo_lists'](data)
		this.$customLists.html(html)
		if (this.momoCustomLists) this.$('.draggable-todo-list').attr('draggable', this.momoCustomLists.allowReorder)

		this.$addListInput = this.$('.settings-todo-add-list-input')
		var self = this
		data.map(function(item) {
			var picker = new m.views.settings.TodoListColorPicker(item.id, item.color, self)
			self.$customLists
				.find('[data-id="' + item.id + '"]')
				.find('.settings-todo-list-color')
				.append(picker.render().$el)
		})
	},
	setListColor: function(listId, color, rgba) {
		var listModel = this.momoCustomLists.get({
			id: listId
		})
		var li = this.$customLists.find('[data-id="' + listId + '"]')
		li.addClass('loading')
		li.find('.settings-list-status').addClass('loading')
		listModel.save(
			{
				color: rgba
			},
			{
				patch: true,
				success: function() {
					li.removeClass('loading')
					li.find('.settings-list-status').removeClass('loading')
					m.trigger('globalEvent:resetLists', { listId: listId })
				},
				error: function() {
					li.find('.settings-list-status').removeClass('loading')
					li.removeClass('loading').addClass('failed')
				}
			}
		)
		//listModel.set('color', color);
	},
	// Use the data attribute to look up the clicked custom list in the collection.
	// Doing it this way avoids the need to use a subview for each list item.
	handleClickRenameList: function(e) {
		this.clickedListId = this.getClickedListId(e)
		var clickedListModel = this.momoCustomLists.get({
			id: this.clickedListId
		})
		if (clickedListModel.get('stock'))
			//no rename on special lists inbox, today, done
			return
		this.$clickedListLi = this.$customLists.find('[data-id="' + this.clickedListId + '"]')
		this.$clickedListName = this.$clickedListLi.find('.settings-todo-list-name')
		this.$clickedListName
			.attr('contenteditable', true)
			.addClass('editing')
			.focus()
		setEndOfContenteditable(this.$clickedListName.get(0))
		this.clickedListNameText = this.$clickedListName.text() // Save current value so it can be reverted to if renaming is aborted
	},

	// Return id of the list that was clicked
	getClickedListId: function(e) {
		return $(e.currentTarget)
			.closest('li')
			.data('id')
	},

	handleClickDelete: function(e) {
		var listId = this.getClickedListId(e)
		this.deleteList(listId)
	},

	handleClickDeleteYes: function(e) {
		var listId = this.getClickedListId(e)
		var $listLi = this.$customLists.find('[data-id="' + listId + '"]')
		$listLi.find('.delete-1').hide()
		$listLi.find('.delete-2').show()
	},

	handleClickDeleteTodos: function(e) {
		var listId = this.getClickedListId(e)
		this.deleteList(listId)
		// todo add deleting of todos here
	},

	handleClickMoveTodos: function(e) {
		var listId = this.getClickedListId(e)
		this.deleteList(listId)
	},

	handleClickDeleteCancel: function(e) {
		var listId = this.getClickedListId(e)
		var $listLi = this.$customLists.find('[data-id="' + listId + '"]')
		$listLi.find('.action-group').show()
		$listLi.find('.delete-1').show()
		$listLi.find('.delete-2').hide()
		$listLi.find('.delete-group').hide()
	},

	deleteList: function(listId) {
		var $listLi = this.$customLists.find('[data-id="' + listId + '"]')
		var $deleteGroup = $listLi.find('.delete-group')

		if ($deleteGroup.hasClass('loading')) return
		$deleteGroup.removeClass('failed').addClass('loading')

		var clickedListModel = this.momoCustomLists.get({
			id: listId
		})
		clickedListModel.destroy({
			wait: true,
			success: function() {
				$deleteGroup.removeClass('loading')
				$listLi.remove()
				m.trigger('globalEvent:resetLists', { listId: listId })
				m.trigger('globalEvent:refreshInbox')
			},
			error: function() {
				$deleteGroup.removeClass('loading').addClass('failed')
				// #HACK use an extra class here to get the delete failed message to stay visible (not just on hover). Needed to differentiate between .failed showing the rename list error icon and .failed-delete showing the delete list error message.
				$listLi.addClass('failed-delete')
			}
		})
	},

	toggleDeleteConf: function(e) {
		var self = this
		var clickedListId = this.getClickedListId(e)
		var $listLi = this.$customLists.find('[data-id="' + clickedListId + '"]')
		var $actionGroup = $listLi.find('.action-group')

		if ($actionGroup.is(':visible')) {
			this.checkTodoCount(
				clickedListId,
				function(todoCount) {
					self.deleteOrConfirm(clickedListId, todoCount)
				},
				function(todoCount) {
					self.todoCountCheckFailed(clickedListId)
				}
			)
		} else {
			$listLi.find('.delete-yes').removeClass('loading failed')
			$listLi.find('.delete-group').hide()
			$actionGroup.show()
		}
	},

	preventRenameOnActions: function(e) {
		e.stopPropagation()
		e.preventDefault()
	},

	deleteOrConfirm: function(clickedListId, todoCount) {
		var $listLi = this.$customLists.find('[data-id="' + clickedListId + '"]')
		$listLi.find('.action-group').hide()
		if (todoCount > 0) {
			$listLi.find('.delete-group').show()
			$listLi.find('.delete-yes').removeClass('loading failed')
			$listLi
				.find('.delete-msg-2')
				.show()
				.text(this.setDelete2Msg(todoCount))
		} else {
			this.deleteList(clickedListId)
		}
	},

	showDeleteConf: function(e) {
		var $listLi = this.$customLists.find('[data-id="' + this.getClickedListId(e) + '"]')
		$listLi.find('.delete-group').removeClass('failed')
	},

	todoCountCheckFailed: function(clickedListId) {
		var $listLi = this.$customLists.find('[data-id="' + clickedListId + '"]')
		$listLi.find('.todo-delete-list').hide()
		$listLi.find('.delete-failed-1').css({ display: 'inline-block' })
		$listLi.addClass('failed-delete')
	},

	setDelete2Msg: function(todoCount) {
		var msg = 'List has ' + todoCount
		todoCount > 1 ? (msg += ' todos.') : (msg += ' todo.')
		return msg
	},

	checkTodoCount: function(listId, doneCb, failCb) {
		var url = m.globals.urlRootApi + 'todos?listid=' + listId
		$.ajax({
			type: 'GET',
			contentType: 'application/json',
			beforeSend: setMomentumAuthHeader,
			url: url
		})
			.done(function(result) {
				var todoCount = null
				var list = result.items || result // Data may be returned in two different formats
				todoCount = list.length
				list.forEach(function(item) {
					if (item.today) todoCount--
				})
				doneCb(todoCount)
			})
			.fail(function(jqXHR, textStatus) {
				failCb()
			})
	},

	handleEscKeyupRename: function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation()
			this.abortRenameList()
		}
	},

	handleEnterKeypressRename: function(e) {
		if (e.keyCode === 13) {
			e.preventDefault()
			if (!e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey) {
				this.saveList()
			}
		}
	},

	handleEscKeyupAdd: function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation()
			this.abortAddList()
		}
	},

	handleEnterKeypressAdd: function(e) {
		if (e.keyCode === 13) {
			e.preventDefault()
			if (!e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey) this.processAddListForm()
		}
	},

	toggleAddList: function() {
		if (!m.conditionalFeatures.featureEnabled('plus')) {
			var options = {
				targetRegion: 'settings',
				sourceEvent: 'customLists',
				buttonText: 'Learn more',
				title: 'Multi-todo Lists',
				description: 'Create and customize multiple todo lists'
			}
			m.commandManager.execute('upsell.message', options)
			return
		}
		this.$('.toggle-add-list').toggleClass('show')
		this.$addListLi = this.$('.settings-todo-add-list')
		this.$addListInput = this.$('.settings-todo-add-list-input')
		this.$addListInput.toggle()
		if (this.$addListInput.is(':visible')) this.$addListInput.focus()
	},

	processAddListForm: function(e) {
		var self = this
		if (this.$addListLi.hasClass('loading')) return

		var listName = m.utils.capitalizeFirstLetter(this.$addListInput.val().trim())
		if (listName) {
			this.$addListLi.removeClass('failed').addClass('loading')
			this.$addListInput.blur()
			this.momoProvider.selectedProject().addNewList(
				listName,
				function() {
					self.fetchCustomLists(true)
					m.trigger('globalEvent:resetLists', { providerId: 1 })
				},
				function() {
					self.$addListLi.removeClass('loading').addClass('failed')
				}
			)
		}
	},

	abortRenameList: function(e) {
		this.$clickedListName.attr('contenteditable', false).removeClass('editing')
		this.$clickedListName.html(this.clickedListNameText)
	},

	saveList: function() {
		var self = this
		if (this.$clickedListLi.hasClass('loading')) return

		var newName = this.$clickedListName.text().trim()
		if (newName) {
			this.$clickedListLi.find('.settings-list-status').addClass('loading')
			this.$clickedListLi.removeClass('failed').addClass('loading')
			this.$clickedListName.blur()
			var clickedListModel = this.momoCustomLists.get({
				id: this.clickedListId
			})
			clickedListModel.save(
				{
					title: newName
				},
				{
					patch: true,
					success: function() {
						self.$clickedListLi.removeClass('loading')
						self.$clickedListLi.find('.settings-list-status').removeClass('loading')
						self.$clickedListName
							.text(newName)
							.attr('contenteditable', false)
							.removeClass('editing')
						m.trigger('globalEvent:resetLists', { listId: self.clickedListId })
					},
					error: function() {
						self.$clickedListLi.find('.settings-list-status').removeClass('loading')
						self.$clickedListLi.removeClass('loading').addClass('failed')
					}
				}
			)
		} else {
			this.$clickedListName.text(this.clickedListNameText) // Revert
		}
	},

	abortAddList: function(e) {
		if (e) e.preventDefault()
		this.$addListInput.val('')
	},

	onBlur: function() {
		this.saveList()
	},

	// Integrations

	providerChanged: function() {
		this.populateConnectedProviders()
	},
	customizationChanged: function(model) {
		if (!model) return
		var changes = model.changedAttributes()
		if (changes.hasOwnProperty('autoFocus') || changes.hasOwnProperty('keepTodoState')) {
			this.setControlStates()
		}
	},
	collectionReset: function() {
		this.populateConnectedProviders()
		this.populateAvailableProviders()
	},
	refreshData: function() {
		this.collection.fetch({
			reset: true
		})
	},
	initiateConnectProvider: function(e) {
		if (e) {
			//e.stopPropagation();
			e.preventDefault()
		}
		this.connect_provider_id = $(e.currentTarget).data('provider-id')
		if (m.conditionalFeatures.featureEnabled('plus')) {
			var provider = _.findWhere(this.collection.lastResponse.available_providers, {
				id: this.connect_provider_id
			})
			if (provider.active) {
				this.$connect.html(m.templates.settings.connect(provider))
				this.$todo.hide()
				this.$connect.css('display', 'flex')
			}
		} else {
			var options = {
				targetRegion: 'settings',
				sourceEvent: 'todo-' + this.connect_provider_id,
				buttonText: 'Learn more',
				title: 'Todo Integrations',
				description: 'Sync your todos from other task managers with Momentum'
			}
			m.commandManager.execute('upsell.message', options)
		}
	},
	setProviderActive: function(e) {
		if (e) {
			e.stopPropagation()
			e.preventDefault()
		}
		var provider_id = $(e.currentTarget)
			.closest('.has-provider-id')
			.data('provider-id')
		if (provider_id && m.models.todoListManager) {
			m.models.todoListManager.changeProvider(provider_id)
		}
	},
	disconnectProvider: function(e) {
		var self = this
		if (e) {
			e.stopPropagation()
			e.preventDefault()
		}
		var providerId = $(e.currentTarget)
			.closest('.has-provider-id')
			.data('provider-id')

		var url = m.globals.urlRootApi + 'settings/todo/providers/' + providerId
		$.ajax({
			type: 'DELETE',
			contentType: 'application/json',
			beforeSend: setMomentumAuthHeader,
			url: url
		})
			.done(function(msg) {
				if (msg.status && msg.status == 'success') {
					var activeTodoProvider = localStorage.activeTodoProvider.replace(/['"]+/g, '')
					if ( localStorage.activeTodoProvider &&
						(providerId.toString() == activeTodoProvider ||
						providerId.toString() == activeTodoProvider.substring(0, activeTodoProvider.indexOf('-'))) )
						m.models.todoListManager.changeProvider(1)
					self.refreshData()
				}
			})
			.fail(function(jqXHR, textStatus) {})
	},
	launchConfiguration: function(e) {
		if (e) {
			e.stopPropagation()
			e.preventDefault()
		}
		var providerId = $(e.currentTarget)
			.closest('.has-provider-id')
			.data('provider-id')
		if (providerId) {
			var provider = this.collection.get(providerId)
			if (provider) {
				var config_command = provider.get('config_command')
				if (config_command) {
					m.commandManager.execute(config_command)
				}
			}
		}
	},
	toggleRememberOpenState: function(e) {
		if (e) {
			e.stopPropagation()
			e.preventDefault()
		}
		m.commandManager.execute('todo.toggle.keepstate')
	},
	toggleAutoFocus: function(e) {
		if (e) {
			//e.stopPropagation();
			e.preventDefault()
		}
		if (!m.conditionalFeatures.featureEnabled('plus')) {
			var options = {
				targetRegion: 'settings',
				sourceEvent: 'todo-autofocus',
				buttonText: 'Learn more',
				title: 'Autofocus',
				description: 'Automatically set your top todo as your focus'
			}
			m.commandManager.execute('upsell.message', options)
		} else m.commandManager.execute('todo.toggle.autofocus')
	},
	setControlStates: function() {
		this.$el.find('#auto-focus').toggleClass('on', m.models.customization.get('autoFocus'))
		this.$el.find('#remember-open-state').toggleClass('on', m.models.customization.get('keepTodoState'))
	},
	connectTodoProvider: function(e) {
		if (e) {
			e.stopPropagation()
			e.preventDefault()
		}
		var $connectButton = $(this.$el.find('#connect-button')[0])
		$connectButton.html('Connecting...')
		var that = this
		this.authAttempts = 0
		var providerId = this.connect_provider_id
		var url = m.globals.urlRootApi + 'settings/todo/providers'
		var data = {
			provider_id: providerId
		}
		$.ajax({
			type: 'PUT',
			contentType: 'application/json',
			beforeSend: setMomentumAuthHeader,
			url: url,
			data: JSON.stringify(data)
		})
			.done(function(msg) {
				if (msg.status && msg.status == 'authRequired') {
					if (msg.authorizationUrl) {
						if (that.authAttempts < 2) {
							that.authAttempts++
							var width = msg.winWidth ? msg.winWidth : 600
							var height = msg.winHeight ? msg.winHeight : 510
							var windowFeatures = msg.windowFeatures ? msg.windowFeatures : 'titlebar,resizable,status'
							var leftPos = window.screen.width / 2 - width / 2
							var topPos = window.screen.height / 2 - height / 2
							var authWindow = window.open(
								msg.authorizationUrl,
								'MomentumAuthWindow',
								windowFeatures + ',left=' + leftPos + ',top=' + topPos + ',width=' + width + ',height=' + height
							)
							var x = 0
							var authConnectionSuccess = function() {
								if (authWindow && !authWindow.closed)
									setTimeout(function() {
										if (authWindow && !authWindow.closed) authWindow.close()
									}, 1000)
								that.$connect.hide()
								that.$todo.show()
								that.refreshData()
								m.trigger('todo:newProvider')
								if (msg.change_provider) {
									m.commandManager.execute('settings.todo.provider.change', null, {
										provider_id: msg.initial_load_provider || data.provider_id
									})
								}
								if (msg.config_command) {
									m.commandManager.execute(msg.config_command)
								}
							}

							var urlSplit = msg.authorizationUrl.split('/')
							var requestToken = ''
							if (urlSplit.length > 1) {
								requestToken = urlSplit[urlSplit.length - 1]
							}

							var checkUrl = m.globals.urlRootApi + 'user/auth/status/' + requestToken

							var attemptCount = 0
							var checkInterval = 1000
							var checkAuthConnection = function() {
								if (!authWindow || authWindow.closed) {
									authConnectionSuccess()
									return
								}
								attemptCount++
								if (attemptCount > 100) return
								if (attemptCount % 30) checkInterval += 1000
								$.ajax({
									type: 'GET',
									contentType: 'application/json',
									beforeSend: setMomentumAuthHeader,
									url: checkUrl
								})
									.done(function(msg) {
										if (msg && msg.token_obtained) {
											authConnectionSuccess()
											return
										}
										setTimeout(function() {
											checkAuthConnection()
										}, checkInterval)
									})
									.fail(function(jqXHR, textStatus) {
										setTimeout(function() {
											checkAuthConnection()
										}, checkInterval)
									})
							}
							checkAuthConnection()
						}
					}
				} else {
					if (msg.status && msg.status == 'success') {
						that.refreshData()
						if (msg.config_command) {
							m.commandManager.execute(msg.config_command)
						}
					}
				}
			})
			.fail(function(jqXHR, textStatus) {})
	},
	cancelConnect: function(e) {
		if (e) {
			e.stopPropagation()
			e.preventDefault()
		}
		this.$connect.hide()
		this.$todo.show()
	},

	populateConnectedProviders: function() {
		var $container = $(this.$el.find('#connected-providers')[0])
		var providerId = JSON.parse(localStorage.activeTodoProvider || 1)
		if (!Number.isInteger(providerId)) {
			providerId = parseInt(providerId, 10)
		}
		if (providerId && providerId > 0) {
			this.collection.forEach(function(item) {
				if (item.get('provider_title') == 'GitHub') item.set('GitHub', true)

				if (providerId == item.id) {
					item.set('provider_active', true)
				} else {
					item.set('provider_active', false)
				}
			})
		}
		var html = addin.templates['todo_connected'](this.collection.toJSON())
		$container.html(html)
		if (this.collection.length == 0) {
			$(this.$el)
				.find('.empty')
				.show()
			$container.hide()
		} else {
			$container.show()
			$(this.$el)
				.find('.empty')
				.hide()
		}
	},
	populateAvailableProviders: function() {
		var $container = $(this.$el.find('#available-providers')[0])
		var available_providers = this.collection.lastResponse.available_providers || []
		available_providers.forEach(function(item) {
			if (item.provider_title == 'GitHub') item.GitHub = true
		})
		var html = addin.templates['todo_available'](available_providers)
		$container.html(html)
		if (!this.collection.lastResponse.available_providers) {
			$(this.$el)
				.find('.all-connected')
				.show()
			$(this.$el)
				.find('#available-providers')
				.hide()
		} else if (this.collection.lastResponse.available_providers && this.collection.lastResponse.available_providers.length > 0) {
			$(this.$el)
				.find('.all-connected')
				.hide()
			$(this.$el)
				.find('#available-providers')
				.show()
		}
	},

	toggleAddIntegration: function() {
		if (m.models.todoListManager)	m.models.todoListManager.fetchAndCacheTodoProviders()

		var ogScrollTop = this.$todo.scrollTop()
		this.$addIntegration.toggle()
		this.$addProviderContainer.toggle()
		// HACK: reset scrollTop here to avoid janky animation when showing integrations list, hiding, then showing again
		this.$todo.scrollTop(ogScrollTop)

		if (this.$addProviderContainer.is(':visible')) {
			this.$todo.animate({ scrollTop: this.$addProviderContainer.offset().top	}, 500)
		}
	},

	listIndex: function(el) {
		return this.$('.draggable-todo-list').index(el)
	},
	dragover: function(e) {
		e.preventDefault()
		e.stopPropagation()
		e.originalEvent.dataTransfer.dropEffect = 'move'
		return false
	},
	dragend: function(e) {
		e.originalEvent.dataTransfer.dropEffect = 'move'
		e.preventDefault()
		e.stopPropagation()
		this.dragging.show()
		this.$placeholder.hide()
		this.momoCustomLists.trigger('reorder', {
			move_id: this.dragging.data('id'),
			move_target_id: this.move_target_id,
			move_offset: this.move_offset
		})
		return false
	},
	dragstart: function(e) {
		var el = $(e.currentTarget)
		e.originalEvent.dataTransfer.effectAllowed = 'move'
		e.originalEvent.dataTransfer.setData('text', 'dummy')
		//this.parent.dragmode = 'quicklink';
		this.dragging = el
	},
	dragenter: function(e) {
		var el = $(e.currentTarget)
		//if (this.parent.dragmode == 'quicklink') {
		this.dragging.hide()

		if (this.listIndex(this.$placeholder) < this.listIndex(el) && this.listIndex(el) != 0) {
			el.after(this.$placeholder)
			this.move_target_id = el.data('id')
			this.move_offset = 1
		} else {
			el.before(this.$placeholder)
			this.move_target_id = el.data('id')
			this.move_offset = -1
		}
		var p = this.$placeholder
		this.$placeholder.css('display', 'list-item')
		p.height(el.height())
		p.after(this.dragging)
		//}
	}
})

m.views.settings = m.views.settings || {}
m.views.settings.TodoListColorPicker = Backbone.View.extend({
	tagName: 'ul',

	attributes: { class: 'color-palette-wrapper' },

	template: m.templates.settings['color-picker'],

	events: {
		'click .swatch-container': 'handleClick',
		'dblclick .swatch-container': 'ignoreDblClick',
		'mouseenter .swatch-container': 'handleMouseEnter',
		'mouseleave .swatch-container': 'handleMouseLeave'
	},

	active: false,

	initialize: function (listId, listColor, parent, options) {
		this.transparent = 'rgba(0,0,0,0)';
		if(!listColor){
			this.listColor = this.transparent;
			this.nullColor = true;
		} else
			this.listColor = this.normalizeColor(listColor)
		this.listId = listId
		this.parent = parent
		this.options = options
		this.render()
		this.listenTo(m, 'globalEvent:click', this.globalClick)
	},

	globalClick: function (e) {
		if(!$.contains(this.$el[0], e.target) && this.$picker && this.$picker.is(":visible"))
			this.togglePicker()
	},

	render: function () {
		this.$el.html(this.template())
		this.delegateEvents()
		this.$swatch = this.$el.find('.swatch').first()
		if(this.nullColor || this.listColor == this.transparent)
			this.$swatch.addClass('null-color');

		this.$swatch.css({backgroundColor: this.listColor})

		if (this.picker) {
			this.$picker = this.picker.render().$el
			this.$el.append(this.$picker)
		}
		return this
	},

	dismiss: function () {
		if (this.$picker) {
			this.$picker.hide()
		}
	},

	toRgbA: function (colors) {
		return 'rgba(' + Math.round(colors.rgb.r * 255) + ',' + Math.round(colors.rgb.g * 255) + ',' + Math.round(colors.rgb.b * 255) + ',' + colors.alpha + ')'
	},

	handleMouseEnter: function (e) {
		var swatch = this.$swatch;
		if(this.normalizeColor(swatch.css('background-color'))==this.transparent)
			swatch.addClass('no-color')
	},
	handleMouseLeave: function (e) {
		var swatch = this.$swatch;
		if(this.normalizeColor(swatch.css('background-color')) ==this.transparent && !this.keepTransOn)
			swatch.removeClass('no-color')
	},
	ignoreDblClick: function (e) {
		e.stopPropagation();
	},
	handleClick: function (e) {
		var self = this;
		var delay = 0; // $('.todo-color-picker').length == 0 ? 0 : 200
		setTimeout( function(){
			if (!self.picker) {
				var options = {
					color:self.listColor,
					renderCallback: function (color) {
						if (!color) return;
						var colors = color.colors;
						var rgba = self.normalizeColor(self.toRgbA(colors));
						self.$swatch.css({ backgroundColor: rgba, color: colors.RGBLuminance > 0.22 ? '#222' : '#ddd' })
						if(rgba==self.transparent) {
							self.$swatch.addClass('null-color');
							self.$swatch.addClass('no-color');
							self.keepTransOn = true;
						} else {
							self.$swatch.removeClass('no-color');
							self.$swatch.removeClass('null-color');
							self.keepTransOn = false;
						}
						self.parent.setListColor(self.listId, colors, rgba)
					}
				};
				var themeColourRGBA = self.listColor?self.listColor:self.transparent;
				if (themeColourRGBA) options.color = themeColourRGBA

				self.picker = new m.views.settings.TodoListColorPalette(options)
				self.$picker = self.picker.render().$el
				self.$picker.addClass('todo-color-picker')
				self.$el.append(self.$picker);

				setTimeout(function(){
					self.togglePicker()
				}, 10)
			}
			else
				self.togglePicker()

		}, delay)
	},

	togglePicker: function(){
		if (!this.$picker)
			return
		var swatch = this.$swatch;
		var self = this;
		if (!this.$picker.is(":visible")) {
			var panel = this.$el.closest('.settings-todo');

			this.$el.addClass('active')
			setTimeout(function(){
				if(self.$picker.offset().top - panel.offset().top<0)
					panel.animate({ scrollTop: panel[0].scrollTop + self.$picker.offset().top-panel.offset().top - 12 });
			}, 10)
			this.picker.preRender(true)
			if(this.normalizeColor(swatch.css('background-color')) == this.transparent) {
				swatch.addClass('no-color');
				this.keepTransOn = true;
			}
		}
		else {
			this.$el.removeClass('active')
			if(this.normalizeColor(swatch.css('background-color')) == this.transparent)
				swatch.removeClass('no-color');
			this.keepTransOn = false;
		}
	},
	normalizeColor: function(color){
		return color.replace(/ /g,"").toLocaleLowerCase();
	},

	close: function () {
		this.dismiss()
	}
})

if (m.commandManager) {
	m.commandManager.registerCommand('settings.panels.todo', function () {
		if (!addin.styleLoaded) {
			addin.styleLoaded = true
			addin.styles.style()
		}
		return new addin.views.Main()
	})
}
 }); if(m.addinManager) {m.addinManager.registerAddinFn("270aaed6-337f-433f-9d02-a471b435eada", fn_addin);}