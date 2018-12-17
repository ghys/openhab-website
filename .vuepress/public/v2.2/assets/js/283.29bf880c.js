(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{730:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("The Wake-on-LAN binding allows you to turn on or wake up a computer by sending it a "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Wake-on-LAN",target:"_blank",rel:"noopener noreferrer"}},[t._v("network message"),e("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("The Wake-on-LAN binding does not have a configuration file.")]),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("The syntax for the Wake-on-LAN binding configuration string is explained here:")]),t._v(" "),t._m(5),t._m(6),t._v(" "),e("p",[t._v("Here are some examples of valid binding configuration strings:")]),t._v(" "),t._m(7),e("p",[t._v("As a result, your lines in the items file might look like the following:")]),t._v(" "),t._m(8),t._m(9),t._v(" "),e("p",[t._v("The item binding can be combined with an exec binding to be able to switch the system on and off. The example below works if openHAB is running on a windows host.")]),t._v(" "),t._m(10),e("p",[t._v("The example below is for openHab running on a linux host.")]),t._v(" "),t._m(11),e("DocPreviousVersions"),t._v(" "),e("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"wake-on-lan-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wake-on-lan-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Wake-on-LAN Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("For Windows computers not in a domain, the firewall must be configured properly (allow remote shutdowns) and the DWORD-Regkey "),s("code",[this._v("LocalAccountTokenFilterPolicy")]),this._v(" in "),s("code",[this._v("HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System")]),this._v(" must be set to 1.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"item-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('wol="<broadcast-IP>#<macaddress>"\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("NOTE: The "),s("code",[this._v("<broadcast-IP>")]),this._v(" address is not the one from the machine you want to wake up - this is identified by MAC address. IP is the broadcast IP from the SubNet; Here some examples for a typical C class network: - 192.168.1.255 for the destination IP 192.168.1.10 - or 127.0.0.255 for 127.0.0.15.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('wol="192.168.1.255#00:1f:d0:93:f8:b7"\nwol="192.168.1.255#00-1f-d0-93-f8-b7"\n')])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("Network_OpenhabWebsite")]),t._v("   "),e("span",{attrs:{class:"token string"}},[t._v('"openHAB Web"')]),t._v("  "),e("span",{attrs:{class:"token tag"}},[t._v(" (Status, Network)")]),t._v("   "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" wol"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"192.168.1.255#00:1f:d0:93:f8:b7"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("networkPC")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Computer"')]),e("span",{attrs:{class:"token tag"}},[t._v(" (network, gOGBuero)")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" wol"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"192.168.10.255#00-DE-AD-BE-EF-00"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exec"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('">[OFF:shutdown -s -m \\\\\\\\192.168.10.23 -t 0 -f]"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("networkPC")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Computer"')]),e("span",{attrs:{class:"token tag"}},[t._v(" (network, gOGBuero)")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" wol"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"192.168.10.255#00-DE-AD-BE-EF-00"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exec"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('">[OFF:net rpc shutdown -C MESSAGE -I 192.168.10.23 -U USER%%PASSWORD -f -t 120]"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="readme.md";s.default=n.exports}}]);