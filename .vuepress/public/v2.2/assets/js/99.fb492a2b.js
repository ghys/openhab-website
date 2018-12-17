(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{604:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("This binding integrates the possibility to execute arbitrary shell commands.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("The binding does not require any specific configuration.")]),t._v(" "),a("p",[t._v("Note that the commands are executed in the context and with the privileges of the process running the java virtual machine.\nIt is not advised to run the virtual machine as superuser/root.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("For each command a separate Thing has to be defined.")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("All Things support the following channels:")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"exec-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exec-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Exec Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"supported-things"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Currently, the binding supports a single type of Thing, being the "),s("code",[this._v("command")]),this._v(" Thing.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"thing-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("command")]),this._v(" Thing requires the command to execute on the shell.\nOptionally one can specify:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("a transformation to apply on the execution result,")]),this._v(" "),s("li",[this._v("an interval, in seconds, the command will be repeatedly executed,")]),this._v(" "),s("li",[this._v("a time-out, in seconds, the execution of the command will time out, and lastly,")]),this._v(" "),s("li",[this._v("a boolean parameter to make the command execute immediately every time the state of the input channel has changed.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("exec"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("command"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("apc")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("command"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"/usr/local/bin/apcaccess  status"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" interval"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("15")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeout"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autorun"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("command")]),this._v(" itself can be enhanced using the well known syntax of the "),s("strong",[this._v("java.util.Formatter")]),this._v(" class.\nThe following parameters are automatically added:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("the current date (as java.util.Date, example: "),s("code",[this._v("%1$tY-%1$tm-%1$td")]),this._v(")")]),this._v(" "),s("li",[this._v("the current State of the input channel (see below, example: "),s("code",[this._v("%2$s")]),this._v(")")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"channels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Channel Type ID")]),t._v(" "),a("th",[t._v("Item Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("input")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Input parameter to provide to the command")])]),t._v(" "),a("tr",[a("td",[t._v("output")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Output of the last execution of the command")])]),t._v(" "),a("tr",[a("td",[t._v("exit")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("The exit value of the last execution of the command")])]),t._v(" "),a("tr",[a("td",[t._v("run")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("Send ON to execute the command and the current state tells whether it is running or not")])]),t._v(" "),a("tr",[a("td",[t._v("lastexecution")]),t._v(" "),a("td",[t._v("DateTime")]),t._v(" "),a("td",[t._v("Time/Date the command was last executed, in yyyy-MM-dd'T'HH:mm:ss.SSSZ format")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Example")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("demo.things")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("exec"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("command"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("apc")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("command"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"/usr/local/bin/apcaccess  status"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" interval"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("15")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeout"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("exec"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("command"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("myscript")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("command"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"php ./configurations/scripts/script.php %2$s"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transform"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"REGEX((.*?))"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("demo.items")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("APCRaw")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"[%s]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (All)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"exec:command:apc:output"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("APCRunning")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"exec:command:apc:run"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("APCExitValue")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"exec:command:apc:exit"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("DateTime")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("APCLastExecution")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"exec:command:apc:lastexecution"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="readme.md";s.default=e.exports}}]);