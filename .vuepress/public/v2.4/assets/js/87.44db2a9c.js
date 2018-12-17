(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{601:function(t,e,i){"use strict";i.r(e);var r=i(0),n=Object(r.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),i("AddonLogo"),t._v(" "),i("p",[t._v("The openHAB DD-WRT Binding allows interaction with a DD-WRT device.")]),t._v(" "),t._m(1),t._v(" "),i("p",[t._v("In order to use the binding with a DD-WRT device, the telnet connection must be activated in the DD-WRT web interface.\nThis process does not always work. Test it with a telnet command shell.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),i("p",[t._v("Item bindings should conform to the following format:")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),i("p",[t._v("There is a bug in the DD-WRT firmware. The activation of this interface needs a workaround so it takes some seconds longer than the native devices.")]),t._v(" "),i("p",[t._v("Tested with Archer V2 and DD-WRT v3.0-r30880 std (11/14/16).")]),t._v(" "),i("DocPreviousVersions"),t._v(" "),i("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"dd-wrt-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dd-wrt-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" DD-WRT Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The binding can be configured in the file "),e("code",[this._v("services/ddwrt.cfg")]),this._v(".")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("Property")]),t._v(" "),i("th",[t._v("Default")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("ip")]),t._v(" "),i("td"),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),i("td",[t._v("The IP address of the device")])]),t._v(" "),i("tr",[i("td",[t._v("port")]),t._v(" "),i("td",[t._v("23")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),i("td",[t._v("The port to be used")])]),t._v(" "),i("tr",[i("td",[t._v("username")]),t._v(" "),i("td"),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),i("td",[t._v("The username for the device")])]),t._v(" "),i("tr",[i("td",[t._v("password")]),t._v(" "),i("td"),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),i("td",[t._v("The password for the device")])]),t._v(" "),i("tr",[i("td",[t._v("interface_24")]),t._v(" "),i("td"),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),i("td",[t._v("The 2.4 GHz wifi interface")])]),t._v(" "),i("tr",[i("td",[t._v("interface_50")]),t._v(" "),i("td"),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),i("td",[t._v("The 5 GHz wifi interface")])]),t._v(" "),i("tr",[i("td",[t._v("interface_guest")]),t._v(" "),i("td"),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),i("td",[t._v("The guest wifi interface")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('    ddwrt="<key>"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Where "),e("code",[this._v("<key>")]),this._v(" may take any of these values:")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("Key")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("routertype")])]),t._v(" "),i("tr",[i("td",[t._v("wlan24")])]),t._v(" "),i("tr",[i("td",[t._v("wlan50")])]),t._v(" "),i("tr",[i("td",[t._v("wlanguest")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v('String DEVICE_NAME {ddwrt="routertype"}\nSwitch WIFI_24     {ddwrt="wlan24"}\nSwitch WIFI_50     {ddwrt="wlan50"}\nSwitch WIFI_GUEST  {ddwrt="wlanguest"}\n')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"notes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notes","aria-hidden":"true"}},[this._v("#")]),this._v(" Notes")])}],!1,null,null,null);n.options.__file="readme.md";e.default=n.exports}}]);