(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{523:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("The Telegram Action service allows sending formatted messages to Telegram clients ("),s("a",{attrs:{href:"https://telegram.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://telegram.org"),s("OutboundLink")],1),t._v("), by using the Telegram Bot API.")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("As described in the Telegram Bot API, this is the manual procedure needed in order to get the necessary information.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("telegram.rules")]),t._v(" "),t._m(14),t._m(15),t._v(" "),s("p",[t._v("telegram.rules")]),t._v(" "),t._m(16),t._m(17),t._v(" "),s("p",[t._v("telegram.rules")]),t._v(" "),t._m(18),s("p",[t._v("telegram.rules")]),t._v(" "),t._m(19),t._m(20),t._v(" "),s("p",[t._v("telegram.rules")]),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"telegram-actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#telegram-actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Telegram Actions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Create the Bot and get the Token")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("On a Telegram client open a chat with BotFather.")]),this._v(" "),e("li",[this._v("write "),e("code",[this._v("/newbot")]),this._v(" to BotFather, fill all the needed information, write down the token. This is the authentication token needed.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Create the destination chat and get the chatId")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("Open a new chat with your new Bot and post a message on the chat")]),t._v(" "),s("li",[t._v("Open a browser and invoke "),s("code",[t._v("https://api.telegram.org/bot&lt;token&gt;/getUpdates")]),t._v(" (where "),s("code",[t._v("&lt;token&gt;")]),t._v(" is the authentication token previously obtained)")]),t._v(" "),s("li",[t._v("Look at the JSON result and write down the value of "),s("code",[t._v("result[0].message.chat.id")]),t._v(". That is the chatId.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The action can be configured in "),e("code",[this._v("services/telegram.cfg")]),this._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("bots")]),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",[t._v("Comma-separated list of "),s("code",[t._v("<bot-name>")]),t._v("s")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("<bot name>.chatId")])]),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",[t._v("chat id")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("<bot name>.token")])]),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",[t._v("authentication token")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"configuration-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("bots=bot1,bot2\n\nbot1.chatId=22334455\nbot1.token=xxxxxxxxxxx\n\nbot2.chatId=654321\nbot2.token=yyyyyyyyyyy\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("It this example two bots can be used ("),e("code",[this._v("bot1")]),this._v(" and "),e("code",[this._v("bot2")]),this._v(").")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"send-a-text-message-to-telegram-chat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#send-a-text-message-to-telegram-chat","aria-hidden":"true"}},[this._v("#")]),this._v(" Send a text message to telegram chat")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Send telegram with Fixed Message"')]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n\t"),s("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" Foo "),s("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n\t"),s("span",{attrs:{class:"token function"}},[t._v("sendTelegram")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"bot1"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"item Foo changed"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"send-a-text-message-with-a-formatted-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#send-a-text-message-with-a-formatted-message","aria-hidden":"true"}},[this._v("#")]),this._v(" Send a text message with a formatted message")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Send telegram with Formatted Message"')]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n\t"),s("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" Foo "),s("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n\t"),s("span",{attrs:{class:"token function"}},[t._v("sendTelegram")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"bot1"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"item Foo changed to %s and number is %.1f"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token function-name"}},[t._v("Foo")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("toString")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("23.56")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"send-an-image-to-telegram-chat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#send-an-image-to-telegram-chat","aria-hidden":"true"}},[this._v("#")]),this._v(" Send an image to telegram chat")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Send telegram with image and caption from image accessible by url"')]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" Light_GF_Living_Table "),s("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("sendTelegramPhoto")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"bot1"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"http://www.openhab.org/assets/images/openhab-logo-top.png"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token string"}},[t._v('"sent from openHAB"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Send telegram with image without caption from image accessible by url"')]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" Light_GF_Living_Table "),s("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("sendTelegramPhoto")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"bot1"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"http://www.openhab.org/assets/images/openhab-logo-top.png"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token constant"}},[t._v("null")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In case your image is behind an authenticated web server (locked by username and password) you can pass the credentials as additional parameters to the extended "),e("code",[this._v("sendTelegramPhoto")]),this._v(" method.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Send telegram with image without caption from image accessible by url"')]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" Light_GF_Living_Table "),s("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("sendTelegramPhoto")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"bot1"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"http://www.openhab.org/assets/images/openhab-logo-top.png"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token constant"}},[t._v("null")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"username"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"password"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Do not use username/password in url like in this example "),e("code",[this._v("http://<username>:<password>@server/image.png")]),this._v("; pass the credentials to the "),e("code",[this._v("sendTelegramPhoto")]),this._v(" method instead.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("http")]),this._v(" and "),e("code",[this._v("https")]),this._v(" are the only protocols allowed.")])}],!1,null,null,null);n.options.__file="readme.md";e.default=n.exports}}]);