(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{781:function(t,e,s){"use strict";s.r(e);var n=s(0),i=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("AddonLogo"),t._v(" "),s("p",[t._v("The Withings binding allows openHAB to synchronize data from the official\nWithings API to items. The following body measure types are supported: diastolic\nblood pressure, fat free mass, fat mass weight, fat ratio, heart pulse, height,\nsystolic blood pressure, and weight.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("If using multiple withings accounts, the following properties are required\nfor each account.")]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("To access Withings data, the user needs to authenticate via an OAuth 1.0 flow.\nThe binding implements this flow through the command line interface. The first\ntime the binding is started, it prints the following messages to the console:")]),t._v(" "),t._m(6),t._m(7),t._v(" "),s("p",[t._v("The binding will print the following lines to the console:")]),t._v(" "),t._m(8),t._m(9),t._v(" "),s("p",[t._v("The binding stores the OAuth tokens so that the user does not need to log in\nagain. From this point, the binding is successfully configured.")]),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("The Withings Binding uses a default application registration to request an OAuth\ntoken. The application belongs to the binding developer. If the user wants to\nuse his own application, the binding can be configured to use another OAuth\nconsumer key and consumer secret. Please read the "),s("a",{attrs:{href:"http://oauth.withings.com/en/partner/dashboard",target:"_blank",rel:"noopener noreferrer"}},[t._v("Withings documentation"),s("OutboundLink")],1),t._v("\non how to register an application. After the application is created, Withings\nwill generate a consumer key and secret. The redirect URL must be configured,\ntoo.")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),s("p",[t._v("The following table shows the measure types and units that are supported by the binding:")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"withings-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#withings-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Withings Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The binding can be configured in the file "),e("code",[this._v("services/withings.cfg")]),this._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("refresh")]),t._v(" "),s("td",[t._v("360000")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",[t._v("The periodicity, in milliseconds, at which the binding requests Withings data. By default the Withings data is requested every 60 minutes (360000 milliseconds).")])]),t._v(" "),s("tr",[s("td",[t._v("consumerkey")]),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",[t._v("your consumer key")])]),t._v(" "),s("tr",[s("td",[t._v("consumersecret")]),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",[t._v("your consumer secret")])]),t._v(" "),s("tr",[s("td",[t._v("redirectUrl")]),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",[t._v("your redirect url")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"configuration-for-multiple-accounts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-for-multiple-accounts","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration for multiple accounts")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("<accountId>")]),t._v(".userid")]),t._v(" "),s("td",[t._v("The userid for this account")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("<accountId>")]),t._v(".token")]),t._v(" "),s("td",[t._v("The token for this account")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("<accountId>")]),t._v(".tokensecret")]),t._v(" "),s("td",[t._v("The token secret for this account")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("#########################################################################################\n# Withings Binding needs authentication.\n# Execute 'withings:startAuthentication \"<accountId>\"' on OSGi console.\n#########################################################################################\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In order to start the authentication process, the user needs to execute\n"),e("code",[this._v("withings:startAuthentication <accountId>")]),this._v(" on the OSGi console where\n"),e("code",[this._v("<accountId>")]),this._v(" is an arbitrary key also used in the "),e("code",[this._v("services/withings.cfg")]),this._v("\nfile in order to differentiate between the different credentials per Withings\naccount.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('#########################################################################################\n# Withings Binding Setup: \n# 1. Open URL \'http://<auth-url>//\' in your webbrowser\n# 2. Login, choose your user and allow openHAB to access your Withings data\n# 3. Execute \'withings:finishAuthentication "<accountId>" "<verifier>" "<user-id>"\' on OSGi console\n#########################################################################################\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The user needs to open the given URL in a web browser, log in with his Withings\ncredentials, and confirm that openHAB is allowed to access the user's data.  At\nthe end of this process, the user will be redirected to a page on github. There\nthe user finds the command "),e("code",[this._v('withings:finishAuthentication "<accountId>" "<verifier>" "<user-id>"')]),this._v("\nwith pre-filled parameters that is needed to finish the authentication.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"advanced-oauth-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#advanced-oauth-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Advanced OAuth Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To bind a measure value to an item, the measure type has to be defined in the\nitem binding config. Withings data can be bound to "),e("code",[this._v("Number")]),this._v(" items only. The\nsyntax for a Withings item binding is:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('withings="<measure type>"\n')])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Measure Type")]),t._v(" "),s("th",[t._v("Binding Config")]),t._v(" "),s("th",[t._v("Unit")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Weight")]),t._v(" "),s("td",[t._v("weight")]),t._v(" "),s("td",[t._v("kg")])]),t._v(" "),s("tr",[s("td",[t._v("Height")]),t._v(" "),s("td",[t._v("height")]),t._v(" "),s("td",[t._v("meter")])]),t._v(" "),s("tr",[s("td",[t._v("Fat Free Mass")]),t._v(" "),s("td",[t._v("fat_free_mass")]),t._v(" "),s("td",[t._v("kg")])]),t._v(" "),s("tr",[s("td",[t._v("Fat Ratio")]),t._v(" "),s("td",[t._v("fat_ratio")]),t._v(" "),s("td",[t._v("%")])]),t._v(" "),s("tr",[s("td",[t._v("Fat Mass Weight")]),t._v(" "),s("td",[t._v("fat_mass_weight")]),t._v(" "),s("td",[t._v("kg")])]),t._v(" "),s("tr",[s("td",[t._v("Diastolic Blood Pressure")]),t._v(" "),s("td",[t._v("diastolic_blood_pressure")]),t._v(" "),s("td",[t._v("mmHg")])]),t._v(" "),s("tr",[s("td",[t._v("Systolic Blood Pressure")]),t._v(" "),s("td",[t._v("systolic_blood_pressure")]),t._v(" "),s("td",[t._v("mmHg")])]),t._v(" "),s("tr",[s("td",[t._v("Heart Pulse")]),t._v(" "),s("td",[t._v("heart_pulse")]),t._v(" "),s("td",[t._v("bpm")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"examples-of-multiple-account-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-of-multiple-account-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples of multiple account configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("thomas.userid=ImThomas\nthomas.token=74c0e77021ef5be1ec8dcb4dd88c1xckusadwe92f9541c86799dcbbfcb8fc8b236\nthomas.tokensecret=25f1098209xns511711b3287288f90740ff45532cef91658c5043db0b0e0c851c\npeter.userid=PeterPeter\npeter.token=74c0e77021ef5be1ec8dcb4dd88c1xckusadwe92f9541c86799dcbbfcb8fc8b236\npeter.tokensecret=25f1098209xns511711b3287288f90740ff45532cef91658c5043db0b0e0c851c\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"item-configuration-examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration-examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Item configuration examples")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Weight")]),t._v("     "),s("span",{attrs:{class:"token string"}},[t._v('"Weight  [%.1f kg]"')]),t._v("     "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" withings "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"weight"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("FatRatio")]),t._v("   "),s("span",{attrs:{class:"token string"}},[t._v('"FatRatio [%.1f %%]"')]),t._v("    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" withings "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"fat_ratio"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("HeartPulse")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"HeartPulse [%d bpm]"')]),t._v("   "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" withings "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"heart_pulse"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("PHeight")]),t._v("    "),s("span",{attrs:{class:"token string"}},[t._v('"Height  [%d in]"')]),t._v("       "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" withings "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"peter:height"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);i.options.__file="readme.md";e.default=i.exports}}]);