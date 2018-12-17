(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{565:function(t,e,_){"use strict";_.r(e);var r=_(0),v=Object(r.a)({},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"content"},[t._m(0),t._v(" "),_("AddonLogo"),t._v(" "),_("p",[t._v("Autelis manufactures a network enabled pool interface for many popular pool systems.\nSee "),_("a",{attrs:{href:"http://www.autelis.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("the Autelis website"),_("OutboundLink")],1),t._v(" and the  "),_("a",{attrs:{href:"http://www.autelis.com/wiki/index.php?title=Pool_Control_&lparPI&rpar_HTTP_Command_Reference",target:"_blank",rel:"noopener noreferrer"}},[t._v("Autelis Command Protocol"),_("OutboundLink")],1),t._v(" for more information.")]),t._v(" "),_("p",[t._v("This binding supports:")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),_("p",[t._v("The binding will automatically look for a device with the DNS name 'poolcontrol'.\nIf found it will try and connect with the factory default username and password.")]),t._v(" "),t._m(3),t._v(" "),_("p",[t._v("The binding requires no special configuration")]),t._v(" "),t._m(4),t._v(" "),_("p",[t._v("The Autelis binding requires the host, port, username and password")]),t._v(" "),_("p",[t._v("In the thing file, this looks e.g. like")]),t._v(" "),t._m(5),t._m(6),t._v(" "),_("p",[t._v("All devices support some of the following channels:")]),t._v(" "),t._m(7),t._v(" "),_("DocPreviousVersions"),t._v(" "),_("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"autelis-pool-control-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#autelis-pool-control-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Autelis Pool Control Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Read circuit, auxiliary, temperature, pump, chemistry and system values")]),this._v(" "),e("li",[this._v("Control circuit, auxiliary lighting scenes, and temperature set points")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"language-text extra-class"},[_("pre",{pre:!0,attrs:{class:"language-dsl"}},[_("code",[_("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),_("span",{attrs:{class:"token class-name"}},[t._v("autelis"),_("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("myPool")]),t._v(" "),_("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" host"),_("span",{attrs:{class:"token operator"}},[t._v("=")]),_("span",{attrs:{class:"token string"}},[t._v('"192.168.1.10"')]),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),_("span",{attrs:{class:"token operator"}},[t._v("=")]),_("span",{attrs:{class:"token string"}},[t._v('"80"')]),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" user"),_("span",{attrs:{class:"token operator"}},[t._v("=")]),_("span",{attrs:{class:"token string"}},[t._v('"admin"')]),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),_("span",{attrs:{class:"token operator"}},[t._v("=")]),_("span",{attrs:{class:"token string"}},[t._v('"admin"')]),_("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",[t._v("Channel Type ID")]),t._v(" "),_("th",[t._v("Item Type")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("system-runstate")]),t._v(" "),_("td",[t._v("Switch")])]),t._v(" "),_("tr",[_("td",[t._v("system-model")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("system-haddr")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("system-opmode")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("system-freeze")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("system-sensor1")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("system-sensor2")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("system-sensor3")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("system-sensor4")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("system-sensor5")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("system-version")]),t._v(" "),_("td",[t._v("String")])]),t._v(" "),_("tr",[_("td",[t._v("system-time")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("equipment-circuit1")]),t._v(" "),_("td",[t._v("Switch")])]),t._v(" "),_("tr",[_("td",[t._v("equipment-circuit2")]),t._v(" "),_("td",[t._v("Switch")])]),t._v(" "),_("tr",[_("td",[t._v("equipment-circuit3")]),t._v(" "),_("td",[t._v("Switch")])]),t._v(" "),_("tr",[_("td",[t._v("equipment-circuit4")]),t._v(" "),_("td",[t._v("Switch")])]),t._v(" "),_("tr",[_("td",[t._v("equipment-circuit5")]),t._v(" "),_("td",[t._v("Switch")])]),t._v(" "),_("tr",[_("td",[t._v("equipment-circuit6")]),t._v(" "),_("td",[t._v("Switch")])]),t._v(" "),_("tr",[_("td",[t._v("equipment-circuit7")]),t._v(" "),_("td",[t._v("Switch")])]),t._v(" "),_("tr",[_("td",[t._v("equipment-circuit8")]),t._v(" "),_("td",[t._v("Switch")])]),t._v(" "),_("tr",[_("td",[t._v("equipment-circuit9")]),t._v(" "),_("td",[t._v("Switch")])]),t._v(" "),_("tr",[_("td",[t._v("equipment-circuit10")]),t._v(" "),_("td",[t._v("Switch")])]),t._v(" "),_("tr",[_("td",[t._v("equipment-feature1")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("equipment-feature2")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("equipment-feature3")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("equipment-feature4")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("equipment-feature5")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("equipment-feature6")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("equipment-feature7")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("equipment-feature8")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("equipment-feature9")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("equipment-feature10")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("temp-poolht")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("temp-spaht")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("temp-htstatus")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("temp-poolsp")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("temp-spasp")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("temp-pooltemp")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("temp-spatemp")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("temp-airtemp")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("temp-tempunits")]),t._v(" "),_("td",[t._v("String")])]),t._v(" "),_("tr",[_("td",[t._v("temp-htpump")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("pump-pump1")]),t._v(" "),_("td",[t._v("String")])]),t._v(" "),_("tr",[_("td",[t._v("pump-pump2")]),t._v(" "),_("td",[t._v("String")])]),t._v(" "),_("tr",[_("td",[t._v("pump-pump3")]),t._v(" "),_("td",[t._v("String")])]),t._v(" "),_("tr",[_("td",[t._v("pump-pump4")]),t._v(" "),_("td",[t._v("String")])]),t._v(" "),_("tr",[_("td",[t._v("pump-pump5")]),t._v(" "),_("td",[t._v("String")])]),t._v(" "),_("tr",[_("td",[t._v("pump-pump6")]),t._v(" "),_("td",[t._v("String")])]),t._v(" "),_("tr",[_("td",[t._v("pump-pump7")]),t._v(" "),_("td",[t._v("String")])]),t._v(" "),_("tr",[_("td",[t._v("pump-pump8")]),t._v(" "),_("td",[t._v("String")])]),t._v(" "),_("tr",[_("td",[t._v("chlor-chloren")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("chlor-poolsp")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("chlor-spasp")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("chlor-salt")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("chlor-super")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("chlor-chlorerr")]),t._v(" "),_("td",[t._v("Number")])]),t._v(" "),_("tr",[_("td",[t._v("chlor-chlorname")]),t._v(" "),_("td",[t._v("String")])]),t._v(" "),_("tr",[_("td",[t._v("lightscmd")]),t._v(" "),_("td",[t._v("String")])])])])}],!1,null,null,null);v.options.__file="readme.md";e.default=v.exports}}]);