var fn_addin = (function (m, $) { var addin = addin || {}; addin.styles=addin.styles||{};addin.styles.style = function(){ return; }; addin.views = addin.views || {}; addin.collect = addin.collect || {}; addin.models = addin.models || {}; addin.templates = addin.templates || {}; addin.templates=addin.templates||{},addin.templates.boards_available=Handlebars.template({1:function(n,a,s,e){var i,t,l=a.helperMissing,o="function",r=this.escapeExpression;return'        <li data-board-id="'+r(typeof(t=null!=(t=a.id||(null!=n?n.id:n))?t:l)===o?t.call(n,{name:"id",hash:{},data:e}):t)+'" class="connect-board"><span class="board-icon">'+(null!=(i=a.if.call(n,null!=n?n.icon_url:n,{name:"if",hash:{},fn:this.program(2,e,0),inverse:this.noop,data:e}))?i:"")+"</span> "+r(typeof(t=null!=(t=a.board_name||(null!=n?n.board_name:n))?t:l)===o?t.call(n,{name:"board_name",hash:{},data:e}):t)+'\n        <span class="u--right"><span class="status"></span></span></li>\n'},2:function(n,a,s,e){var i;return'<img class="todo-list-icon" src="'+this.escapeExpression("function"==typeof(i=null!=(i=a.icon_url||(null!=n?n.icon_url:n))?i:a.helperMissing)?i.call(n,{name:"icon_url",hash:{},data:e}):i)+'">'},compiler:[6,">= 2.0.0-beta.1"],main:function(n,a,s,e){var i,t;return"<h5>"+this.escapeExpression("function"==typeof(t=null!=(t=a.organization_name||(null!=n?n.organization_name:n))?t:a.helperMissing)?t.call(n,{name:"organization_name",hash:{},data:e}):t)+'</h5>\n<ul class="settings-list provider-list add-provider">\n'+(null!=(i=a.each.call(n,null!=n?n.boards:n,{name:"each",hash:{},fn:this.program(1,e,0),inverse:this.noop,data:e}))?i:"")+"</ul>"},useData:!0}),addin.templates.boards_connected=Handlebars.template({1:function(n,a,s,e){var i,t,l=a.helperMissing,o="function",r=this.escapeExpression;return'        <li data-board-id="'+r(typeof(t=null!=(t=a.id||(null!=n?n.id:n))?t:l)===o?t.call(n,{name:"id",hash:{},data:e}):t)+'" class="has-board-id"><span class="board-icon">'+(null!=(i=a.if.call(n,null!=n?n.icon_url:n,{name:"if",hash:{},fn:this.program(2,e,0),inverse:this.noop,data:e}))?i:"")+"</span> "+r(typeof(t=null!=(t=a.board_name||(null!=n?n.board_name:n))?t:l)===o?t.call(n,{name:"board_name",hash:{},data:e}):t)+'\n        <span class="u--right">\n            <span class="provider-actions">\n                <span class="provider-action disconnect-board">Disconnect</span>\n            </span>\n            <span class="status">Connected</span>\n        </span>\n        </li>\n'},2:function(n,a,s,e){var i;return'<img class="todo-list-icon" src="'+this.escapeExpression("function"==typeof(i=null!=(i=a.icon_url||(null!=n?n.icon_url:n))?i:a.helperMissing)?i.call(n,{name:"icon_url",hash:{},data:e}):i)+'">'},compiler:[6,">= 2.0.0-beta.1"],main:function(n,a,s,e){var i,t;return"<h5>"+this.escapeExpression("function"==typeof(t=null!=(t=a.organization_name||(null!=n?n.organization_name:n))?t:a.helperMissing)?t.call(n,{name:"organization_name",hash:{},data:e}):t)+'</h5>\n<ul class="settings-list provider-list connected-providers">\n'+(null!=(i=a.each.call(n,null!=n?n.boards:n,{name:"each",hash:{},fn:this.program(1,e,0),inverse:this.noop,data:e}))?i:"")+"</ul>"},useData:!0}),addin.templates.main=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(n,a,s,e){return'<div class="settings-detail-header">\n\t<span class="icon-wrapper back" title="Back"><i class="icon icon-angle-left"></i></span>\n\t<h3><img src="https://az814671.vo.msecnd.net/logos/trello-blue-128.png"> Trello</h3>\n\t<p class="description">Choose the boards you\'d like to use in Momentum</p>\n</div>\n\n<h4 id="connected-boards-header">Connected Boards</h4>\n\n<div id="connected-providers" class="provider-list-wrapper"><span class="loading"><i class="loading-icon"></i>Loading...</span></div>\n<p class="empty">No Trello boards connected yet. Add a Board to get started!</p>\n\n<button class="button show-form toggle-form">Add Board</button>\n\n<div class="form" style="display: none;">\n\t<h4>Add Board</h4>\n\t<p class="all-connected">Congratulations, you\'re fully connected!</p>\n\t<div id="available-providers" class="provider-list-wrapper"><span class="loading"><i class="loading-icon"></i>Loading...</span></div>\n\t<div class="suggest-integration">\n\t\t<h5>Suggestions for this integration?</h5>\n\t\t<p>\x3c!--We\'d love to hear what other services you use.<br>--\x3e\n\t\t\t<a href="https://momentumdash.com/contact">Make a suggestion</a></p>\n\t</div>\n</div>\n\n<div class="settings-connect"></div>\n'},useData:!0});
addin["styles"] = addin["styles"] || {};
addin["styles"]["style"] = function() { var style = document.createElement('style');style.type = 'text/css';style.innerHTML = '.settings-trello .form{margin-top:25px}';document.getElementsByTagName('head')[0].appendChild(style);};
addin.views.Main = m.views.settings.SettingsPanel.extend({
    attributes: { id: 'settings-trello', class: 'settings-view settings-trello' },
    template: addin.templates.main,
    panelid: 'trello',
    events: {
        "click .connect-board": "connectBoard",
        "click .disconnect-board": "disconnectBoard",
        "click #connect-button": "connectTodoProvider",
        "click .toggle-form": "toggleForm",
        "click .back": "clickedBack"
    },
    initialize: function () {
        var that = this;
        this.collection = new m.collect.Settings();
        this.collection.url = m.globals.urlRootApi + 'settings/todo/providers/5';
        this.collection.parse = function (response) {
            that.collection.lastResponse = response;

            // parse out Organizations
            that.collection.organizations = _.chain(that.collection.lastResponse.available_boards)
                .map(function (board) {
                    if (board.organization_id) {
                        return {id: board.organization_id, name: board.organization_name}
                    }
                })
                .uniq(function (board) {
                    if (board) {
                        return board.id;
                    }
                    return null;
                })
                .omit(_.isUndefined)
                .omit(_.isNull)
                .sortBy('name')
                .value();
            return response.connected_boards;
        };
        this.listenTo(this.collection, 'reset', this.collectionReset);
        this.listenTo(m.models.customization, 'change', this.customizationChanged);
        this.refreshData();
    },
    render: function () {
        this.$el.html(this.template({}));
        this.$connect = (this.$('.settings-connect')[0]);
        this.$todo = (this.$('.settings-todo')[0]);
        this.$('#connected-boards-header').hide();
        return this;
    },
    collectionReset: function () {
        this.populateConnectedBoards();
        this.populateAvailableBoards();
    },
    refreshData: function () {
        this.collection.fetch({reset: true});
    },
    disconnectBoard: function (e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        var $parent_li = $(e.currentTarget).closest('.has-board-id');
        var board_id = $parent_li.data('board-id');
        if (!board_id) return;
        $(e.currentTarget).hide();
        $parent_li.find('.status').html('<span class="loading"><i class="loading-icon"></i>Disconnecting...</span>');
        var that = this;
        this.authAttempts = 0;
        var url = m.globals.urlRootApi + 'settings/todo/providers/5';
        var data = {operation: 'disconnect_board', board_id: board_id};
        $.ajax({
                type: 'POST',
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
                            var windowFeatures = msg.windowFeatures ? msg.windowFeatures : "titlebar,resizable,toolbar,status";
                            var leftPos = (window.screen.width / 2) - (width / 2);
                            var topPos = (window.screen.height / 2) - (height / 2);
                            var authWindow = window.open(msg.authorizationUrl, "MomentumAuthWindow", windowFeatures + ",left=" + leftPos + ",top=" + topPos + ",width=" + width + ",height=" + height);
                            var authWinClosed = setInterval(function () {
                                if (authWindow.closed) {
                                    clearInterval(authWinClosed);
                                    that.$connect.hide();
                                    that.$todo.show();
                                    that.$el.find('.pop-body').scrollTop(0);
                                    that.refreshData();
                                    m.commandManager.execute('settings.todo.provider.change', null, {provider_id: '1'});
                                }
                            }, 250);
                        }
                    }
                }
                else {
                    if (msg.status && msg.status == 'success') {
                        m.commandManager.execute('settings.todo.provider.change', null, {provider_id: '1'});
                    }
                    that.$el.find('.pop-body').scrollTop(0);
                    that.refreshData();
                }
            }).fail(function (jqXHR, textStatus) {
                that.$el.find('.pop-body').scrollTop(0);
                that.refreshData();
        });
    },
    connectBoard: function (e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        var board_id = $(e.currentTarget).data('board-id');

        if(!board_id) return;

        $(e.currentTarget).find('.status').html('<span class="loading"><i class="loading-icon"></i>Connecting...</span>');

        var that = this;
        this.authAttempts = 0;
        var url = m.globals.urlRootApi + 'settings/todo/providers/5';
        var data = {operation: 'connect_board', board_id: board_id};
        $.ajax({
                type: 'POST',
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
                            var windowFeatures = msg.windowFeatures ? msg.windowFeatures : "titlebar,resizable,toolbar,status";
                            var leftPos = (window.screen.width / 2) - (width / 2);
                            var topPos = (window.screen.height / 2) - (height / 2);
                            var authWindow = window.open(msg.authorizationUrl, "MomentumAuthWindow", windowFeatures + ",left=" + leftPos + ",top=" + topPos + ",width=" + width + ",height=" + height);
                            var authWinClosed = setInterval(function () {
                                if (authWindow.closed) {
                                    clearInterval(authWinClosed);
                                    that.$connect.hide();
                                    that.$todo.show();
                                    that.$el.find('.pop-body').scrollTop(0);
                                    that.refreshData();
                                    m.commandManager.execute('settings.todo.provider.change', null, {provider_id: '5-' + data.board_id});
                                }
                            }, 250);
                        }
                    }
                }
                else {
                    if (msg.status && msg.status == 'success') {
                        that.$el.find('.pop-body').scrollTop(0);
                        that.refreshData();
                        m.commandManager.execute('settings.todo.provider.change', null, {provider_id: '5-' + data.board_id});
                    }
                }
            }).fail(function (jqXHR, textStatus) {
        });
    },
    clickedBack: function (e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        m.commandManager.execute('settings.display', null, {section: 'todo'});
    },
    populateConnectedBoards: function () {
        var $container = $(this.$('#connected-providers')[0]);

        var html =  addin.templates.boards_connected({
            organization_name: '',
            boards: this.collection.toJSON()
        });
        $container.html(html);
        if (this.collection.length < 1) {
            this.$('.show-form').hide();
            this.$('#connected-boards-header').hide();
            this.$('.form').show();
            this.$('.empty').show();
            $container.hide();
        }
        else {
            $container.show();
            this.$('.empty').hide();
            this.$('#connected-boards-header').show();
        }
    },
    populateAvailableBoards: function () {
        var self = this;
        var $container = $(this.$('#available-providers')[0]);
        $container.html('');

        var starred = _.chain(self.collection.lastResponse.available_boards)
            .where( { starred: true})
            .sortBy('board_name')
            .value();

        if(starred && starred.length > 0)
        {
            var html = addin.templates.boards_available({
                organization_name: 'Starred Boards',
                boards: starred
            });
            $container.append(html);
        }

        var recent = _.chain(self.collection.lastResponse.available_boards)
            .filter( function (board) {
                return board.dateLastActivity != null;
            })
            .sortBy('dateLastActivity')
            .reverse()
            .first(5)
            .value();

        if(recent && recent.length > 0)
        {
            var html = addin.templates.boards_available({
                organization_name: 'Recent Boards',
                boards: recent
            });
            $container.append(html);
        }

        var myBoards = _.chain(self.collection.lastResponse.available_boards)
            .filter( function (board) {
                return !board.organization_id;
            })
            .sortBy('board_name')
            .value();

        if(myBoards && myBoards.length > 0)
        {
            var html = addin.templates.boards_available({
                organization_name: 'My Boards',
                boards: myBoards
            });
            $container.append(html);
        }

        _.each(self.collection.organizations, function (organization) {
            var boards = _.chain(self.collection.lastResponse.available_boards)
                .where({organization_id: organization.id})
                .sortBy('board_name')
                .value();
            if (boards && boards.length > 0) {
                var html = addin.templates.boards_available({
                    organization_name: organization.name,
                    boards: boards
                });
                $container.append(html);
            }
        });

        if (this.collection.lastResponse.available_boards.length == 0) {
            this.$('.all-connected').show();
            this.$('#available-providers').hide();
        } else {
            this.$('.all-connected').hide();
            this.$('#available-providers').show();
        }
    },
    toggleForm: function () {
        this.$('.show-form').toggle();
        this.$('.form').toggle();
    }
});

if (m.commandManager) {
	m.commandManager.registerCommand('settings.panels.trello.config',
		function () {
			if (!addin.styleLoaded) {
				addin.styleLoaded = true
				addin.styles.style()
			}
			return new addin.views.Main();
		})
}
 }); if(m.addinManager) {m.addinManager.registerAddinFn("c61b7775-7ab8-443a-a6b7-c8c8de6fc755", fn_addin);}