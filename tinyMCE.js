/*
TinyMCE 4 Widget for Dojo 1.10+

Authors: Billy Eatman (billeatman@hotmail.com) and Caitlin Markert (caitymarkert@gmail.com)

Copyright 2015 Concordia University Texas

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

define([
	"dojo/_base/declare",
	"dijit/_WidgetBase",
	"dojo/_base/lang"
	],
function(declare,_WidgetBase,lang){
	return declare("tinyMCE",[_WidgetBase],{
		config: {
			menubar: false,
			statusbar: false
		},
		constructor: function(params){
			lang.mixin(this.config, params);
		},
		postCreate : function() {
			tinymce.init(this.config);
		}
	});
});