(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{520:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("table",[t._m(6),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("hostname")]),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",[t._v('SMTP server hostname, e.g. "'),s("a",{attrs:{href:"http://smtp.gmail.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("smtp.gmail.com"),s("OutboundLink")],1),t._v('"')])]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14)])]),t._v(" "),t._m(15),t._v(" "),t._m(16),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"mail-actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mail-actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Mail Actions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This add-on provides SMTP services so your rules and scripts can send e-mails.\nThe "),e("code",[this._v("to")]),this._v(" paremeter can contain a semicolon-separated list of email addresses.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Actions")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("sendMail(String to, String subject, String message)")]),t._v(": Sends an email via SMTP.")]),t._v(" "),s("li",[s("code",[t._v("sendMail(String to, String subject, String message, String attachmentUrl)")]),t._v(": Sends an email with attachment via SMTP.")]),t._v(" "),s("li",[s("code",[t._v("sendMail(String to, String subject, String message, List<String> attachmentUrlList)")]),t._v(": Sends an email with one or more attachments via SMTP.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This action service can be configured via the "),e("code",[this._v("services/mail.cfg")]),this._v(" file.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Property")]),this._v(" "),e("th",[this._v("Default")]),this._v(" "),e("th",{staticStyle:{"text-align":"center"}},[this._v("Required")]),this._v(" "),e("th",[this._v("Description")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("port")]),this._v(" "),e("td",[this._v("25 (resp. 587 for TLS/SSL)")]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[this._v("No")]),this._v(" "),e("td",[this._v("SMTP port to use")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",[t._v("username")]),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("if the SMTP server at "),s("code",[t._v("<hostname>")]),t._v(" and "),s("code",[t._v("<port>")]),t._v(" requires authentication")]),t._v(" "),s("td",[t._v("SMTP user name")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",[t._v("password")]),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("if the SMTP server at "),s("code",[t._v("<hostname>")]),t._v(" and "),s("code",[t._v("<port>")]),t._v(" requires authentication")]),t._v(" "),s("td",[t._v("SMTP password")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("from")]),this._v(" "),e("td"),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[this._v("Yes")]),this._v(" "),e("td",[this._v("Email address to use for sending mails")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",[t._v("tls")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",[s("code",[t._v("true")]),t._v(" if STARTTLS is enabled (not required) for the connection")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",[t._v("ssl")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",[s("code",[t._v("true")]),t._v(" if SSL negotiation should occur on connection.  Do not set both "),s("code",[t._v("tls")]),t._v(" and "),s("code",[t._v("ssl")]),t._v(" to "),s("code",[t._v("true")]),t._v(". If "),s("code",[t._v("true")]),t._v(' is used here, the port will automatically be set to "465".')])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",[t._v("popbeforesmtp")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",[t._v("set to "),s("code",[t._v("true")]),t._v(" if POP before SMTP (another authentication mechanism) should be enabled. Username and password are taken from the above configuration")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("charset")]),this._v(" "),e("td",[this._v("platform default")]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[this._v("No")]),this._v(" "),e("td",[this._v("Character set used to encode the message body")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" java"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token class-name"}},[t._v("List")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("List")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" attachmentUrlList "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("newArrayList")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{attrs:{class:"token string"}},[t._v('"http://some.web/site/snap.jpg&param=value"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token string"}},[t._v('"http://192.168.1.100/data.txt"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token string"}},[t._v('"file:///tmp/201601011031.jpg"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("sendMail")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"you@email.net"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Test"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"This is the message."')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attachmentUrlList"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="readme.md";e.default=n.exports}}]);