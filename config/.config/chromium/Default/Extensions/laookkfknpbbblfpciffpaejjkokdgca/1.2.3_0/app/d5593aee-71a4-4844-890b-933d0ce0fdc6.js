var fn_addin=function(o,s,e){var t=t||{};t.styles=t.styles||{},t.commands=t.commands||{},t.dependencies=e||t.dependencies||{},t.styles.style=function(){},t.views=t.views||{},t.collect=t.collect||{},t.models=t.models||{},t.templates=t.templates||{},t.templates=t.templates||{},t.templates.editClock=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,i,s){return'<div class="input-group current-timezone-group">\n\t<label for="current-timezone">Location</label>\n\t<div class="input-wrapper">\n\t\t<input type="text" name="current-timezone" id="current-timezone" class="current-timezone" placeholder="" spellcheck="false">\n\t\t<i class="u--flex-center clear">✕</i>\n\t</div>\n\n\t<div class="dropdown typeahead">\n\t\t<div class="searching">Searching<i>.</i><i>.</i><i>.</i></div>\n\t\t<ul class="dropdown-list"></ul>\n\t\t<div class="not-found">No locations found.</div>\n\t</div>\n</div>\n\n\n<div class="input-group clock-name-group">\n\t<label for="clock-name">Name</label>\n\t<input type="text" name="clock-name" id="clock-name" class="clock-name" placeholder="" spellcheck="false">\n</div>\n\n<div class="input-group create-pinned-group">\n\t<label for="create-pinned">Pin to Dash</label>\n\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n</div>\n\n<div class="metric-edit-controls">\n\t<span class="error-message"><span class="save-error"></span></span>\n\t<span class="button save">Save</span>\n</div>\n'},useData:!0}),t.styles=t.styles||{},t.styles.style=function(){var e=document.createElement("style");e.type="text/css",e.innerHTML=".multiclock .current-timezone-group,.multiclock .current-timezone-group .input-wrapper{position:relative}.multiclock .current-timezone{padding-right:18px}.multiclock .typeahead .dropdown-list{display:none}.multiclock .search-loading .typeahead .dropdown-list{padding:0}.multiclock .clear{padding:0 5px;position:absolute;top:-4px;right:-5px;bottom:0;opacity:0;cursor:text;font-size:.8125rem}.multiclock .has-input .clear{opacity:.4;cursor:pointer}.multiclock .has-input .clear:hover{opacity:.8}.multiclock .has-input .clear:active{opacity:1}.multiclock .typeahead .location{margin-right:2px}.multiclock .typeahead .timezone{opacity:.5;font-size:.6875rem;word-break:keep-all}.multiclock .metric-detail .save{margin-top:0}.multiclock .searching{padding:4px 7px;display:none;font-size:87.5%;opacity:.6}.multiclock .search-loading .searching{display:block}.multiclock .search-loading .typeahead{padding:4px 0}.multiclock .search-loading .not-found{display:none}.multiclock .searching i{animation:blink 1.4s infinite both}.multiclock .searching i:nth-child(2){animation-delay:.2s}.multiclock .searching i:nth-child(3){animation-delay:.4s}@keyframes blink{0%,100%{opacity:.2}20%{opacity:1}}",document.getElementsByTagName("head")[0].appendChild(e)},t.views.MultiClock=Backbone.View.extend({events:{"keyup .clock-name":"updateSaveButtonState","click .save":"saveClock","change .clock-timezone":"updateClock","blur .clock-name":"updateSaveButtonState","click .current-timezone-group .clear":"clearLocation","click .dropdown-list li":"chooseLocation","click .current-timezone":"showDropdown","keyup .current-timezone":"checkSearch","keydown .current-timezone":"preventDefaultAction","mouseover .dropdown-list li":"updateHover","click .create-pinned-group":"togglePinned"},initialize:function(e){this.collection=e.collection,this.parentView=e.parentView,this.template=t.templates.editClock,this.loadingSearch=0},render:function(e){return this.variables=e,this.$el.html(this.template(e)),this},showDropdown:function(){this.$dropdownList.find("li").length?(this.$dropdownList.show(),o.trigger("clock:resize")):this.searchForLocation()},collectElements:function(){this.$app=this.$(".app"),this.$name=this.$(".clock-name"),this.$timezone=this.$(".clock-timezone"),this.$currentTimezone=this.$(".current-timezone"),this.$save=this.$(".save"),this.$currentTimezoneGroup=this.$(".current-timezone-group"),this.$typeAhead=this.$(".typeahead"),this.$notFound=this.$(".typeahead .not-found"),this.$dropdownList=this.$(".dropdown-list"),this.collectedElements=!0},onChange:function(){this.editDetail()},preventDefaultAction:function(e){38!==e.keyCode&&40!==e.keyCode||e.preventDefault()},checkSearch:function(e){var t=this;if(this.model||this.$save.addClass("disabled"),e.keyCode===mConst("keyEscape"))this.revertLocation();else{if(37===e.keyCode||39===e.keyCode)return;if(9===e.keyCode&&e.shiftKey||16===e.keyCode)return void this.showDropdown();if(e.keyCode===mConst("keyReturn")){if(!this.suggestionList||0===this.suggestionList.length)return;this.chooseLocation()}else if(38===e.keyCode){if(!this.suggestionList||0===this.suggestionList.length)return;this.selected=0===this.selected?this.suggestionList.length-1:this.selected-1,this.hoverSelected()}else if(40===e.keyCode){if(!this.suggestionList||0===this.suggestionList.length)return;this.selected=this.selected===this.suggestionList.length-1?0:this.selected+1,this.hoverSelected()}else{var i=this.$currentTimezone.val().trim().length;this.renderClearIcon();var s=(new Date).getTime();this.triggeredSearchAt=s,2<i&&setTimeout(function(){s===t.triggeredSearchAt&&t.searchForLocation(),t.triggeredOnce=!0},t.triggeredOnce?300:0),i<3&&(this.$dropdownList.empty(),0===this.$dropdownList.val().trim.length&&this.closeDropdown(),o.trigger("clock:resize"))}}},closeDropdown:function(){this.$dropdownList.hide(),this.$notFound.removeClass("active")},revertName:function(){this.$name.val(this.model?this.model.get("name"):""),this.$name.blur()},revertLocation:function(){this.suggestionList=null,this.$currentTimezone.val(this.model?this.model.get("timeZoneName"):""),this.$currentTimezone.blur(),this.closeDropdown(),o.trigger("clock:resize")},searchForLocation:function(){var n=this,e=this.$currentTimezone.val(),t=e.indexOf(",");if(0<=t&&(e=e.substr(0,t)),0!==e.trim().length&&this.lastQuery!==e){this.lastQuery=e;var i=o.globals.urlRootApi+"timezones/search";this.loadingSearch++,this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){n.$typeAhead.show(),n.$el.addClass("search-loading"),o.trigger("clock:resize")},300),s.ajax({type:"GET",contentType:"application/json",beforeSend:setMomentumAuthHeader,url:i,data:{name:e.toLowerCase()}}).done(function(e,t,i){if(n.loadingSearch--,n.$notFound.removeClass("active"),e&&0===n.loadingSearch){n.suggestionList=e,n.$dropdownList.empty(),n.suggestionMap={};var s=0;if(0===n.suggestionList.length)return 0===n.loadingSearch&&n.$notFound.addClass("active"),n.$dropdownList.hide(),n.$save.addClass("disabled"),n.timeout&&clearTimeout(n.timeout),n.$el.removeClass("search-loading"),void o.trigger("clock:resize");n.suggestionList.forEach(function(e){n.suggestionMap[e.name]=e,n.$dropdownList.append('<li data-id="'+e.displayName+'" data-index='+s+" data-offset="+e.currentOffset+'><span class="location">'+e.name+'</span> <span class="timezone">'+e.offsetString+"</span></li>"),s++}),n.$dropdownList.show(),n.selected=0,n.hoverSelected(),n.$typeAhead.show(),n.timeout&&clearTimeout(n.timeout),n.$el.removeClass("search-loading"),o.trigger("clock:resize")}}).fail(function(e,t){n.loadingSearch--,n.timeout&&clearTimeout(n.timeout),n.$el.removeClass("search-loading"),o.trigger("clock:resize")})}},hoverSelected:function(){this.hoverById(this.suggestionList[this.selected].displayName)},hoverById:function(e){this.$dropdownList.find("li").removeClass("hover"),this.$dropdownList.find('li[data-id="'+e+'"]').addClass("hover")},chooseLocation:function(){this.$save.removeClass("disabled"),this.selectedTimezone=this.suggestionList[this.selected],this.$name.val(this.selectedTimezone.shortName),this.$currentTimezone.val(this.selectedTimezone.name),this.$name.focus(),this.updateClock()},updateHover:function(e){var t=e.currentTarget.dataset,i=t.id;this.selected=Number.parseInt(t.index),this.hoverById(i)},clearLocation:function(){this.$typeAhead.hide(),this.$currentTimezone.val("").focus(),this.renderClearIcon(),o.trigger("clock:resize")},onTimezoneReset:function(){this.variables&&this.render(this.variables)},isFormValid:function(){var e=0===this.$name.val().trim().length;return 0<this.$currentTimezone.val().length&&!e&&(this.selectedTimezone||this.model)},updateSaveButtonState:function(e){this.saveDisabled=!this.isFormValid(e),this.$save.toggleClass("disabled",this.saveDisabled),e&&e.keyCode===mConst("keyEscape")?this.revertName():!this.saveDisabled&&e&&e.keyCode===mConst("keyReturn")&&this.update(!0,!0)},updateNameOnBlur:function(e){if(!(0===this.$name.val().trim().length)&&this.model){if(this.model.get("name")===this.$name.val())return;this.update(!0)}},startAdding:function(e){var t=this;this.resetView(),this.$(".save").text("Create"),setTimeout(function(){t.$currentTimezone.focus()},250)},update:function(e,t){this.$el.find(".error-message").hide(),this.closeDropdown(),o.trigger("clock:resize"),(this.model||t)&&this.save(this.model,e)},updateClock:function(){this.update()},saveClock:function(){var e;this.$save.hasClass("disabled")||(this.model?(e=this.model,this.save(e,!0)):e=this.save(),e&&(this.model.set("selected",!0),this.parentView.highlightSelectedMetric()))},save:function(e,t){var i=0===this.$name.val().trim().length;if(0==this.$currentTimezone.val().trim().length)this.$currentTimezone.focus();else{if(!i){var s,n,o=capitalizeWords(this.$name.val().trim()),a=this.$(".toggle-slider").hasClass("on");this.selectedTimezone?(s=this.selectedTimezone.id,timezoneName=this.selectedTimezone.name,n=this.selectedTimezone.currentOffset):e&&(s=e.get("timeZoneId"),timezoneName=e.get("timeZoneName"),n=e.get("currentOffset"));var l={name:o,timeZoneName:timezoneName,currentOffset:n,timeZoneId:s,pinned:a};return e?(e.set(l,{ignoreRender:!0}),t&&(this.parentView.switchToListView(),this.$name.val(""),this.$name.blur())):(this.model=this.parentView.createMetric(l),this.$name.val(""),this.$name.blur()),e||this.model}this.$name.focus()}},editDetail:function(e){this.resetView(),this.model=e,this.collectElements(),this.$name.val(e.get("name")),this.$currentTimezone.val(e.get("timeZoneName")),this.$(".toggle-slider").toggleClass("on",e.get("pinned")),this.renderClearIcon(),this.$el.find(".error-message").hide(),this.updateSaveButtonState();var t=this;setTimeout(function(){t.$name.focus()},250)},renderClearIcon:function(){0<this.$currentTimezone.val().trim().length?this.$currentTimezoneGroup.addClass("has-input"):this.$currentTimezoneGroup.removeClass("has-input")},resetView:function(){this.model=null,this.$el.html(this.template({placeholder:"multiclock",createMode:!0})),this.collectElements(),this.$name.val(""),this.$el.find(".error-message").hide(),this.$save.addClass("disabled"),this.saveDisabled=!0,this.selectedTimezone=null,this.$notFound.removeClass("active")},togglePinned:function(e){this.$(".toggle-slider").toggleClass("on"),this.updateSaveButtonState(e)}});var i=t.dependencies.multiclock;return t.styles.style(),i.views.multiClock.setDetailViewClass(t.views.MultiClock),t};m.addinManager&&m.addinManager.registerAddinFn("d5593aee-71a4-4844-890b-933d0ce0fdc6",fn_addin);