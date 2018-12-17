(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{553:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("AddonLogo"),t._v(" "),a("p",[t._v("This binding integrates devices compatible with "),a("a",{attrs:{href:"https://www.qualcomm.com/products/allplay",target:"_blank",rel:"noopener noreferrer"}},[t._v("Qualcomm AllPlay"),a("OutboundLink")],1),t._v(".\nThe binding uses native libraries for the AllJoyn framework.\nLibraries for the following platforms are already included in the binding:")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("The Windows libraries have a dependency on the "),a("a",{attrs:{href:"https://www.microsoft.com/en-US/download/details.aspx?id=48145",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual C++ Redistributable for Visual Studio 2015"),a("OutboundLink")],1),t._v(".\nIf you are using Windows, please make sure to install these components before using the AllPlay binding.")]),t._v(" "),a("p",[t._v("If there is need for another architecture/platform, please open a "),a("a",{attrs:{href:"https://github.com/openhab/openhab/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("ticket on GitHub"),a("OutboundLink")],1),t._v(" so the missing native library can be added.")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("All AllPlay compatible speakers are supported by this binding.\nThis includes for example the "),a("a",{attrs:{href:"http://www.panasonic.com/uk/consumer/home-entertainment/wireless-speaker-systems.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Panasonic ALL series"),a("OutboundLink")],1),t._v(". All AllPlay speakers are registered as an audio sink in the framework.")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("The AllPlay devices are discovered through the AllJoyn discovery mechanism and are put in the Inbox upon discovery.")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v('The binding has the following configuration options, which can be set for "binding:allplay":')]),t._v(" "),a("table",[t._m(5),t._v(" "),a("tbody",[t._m(6),t._v(" "),t._m(7),t._v(" "),a("tr",[a("td",[t._v("callbackUrl")]),t._v(" "),a("td",[t._v("Callback URL")]),t._v(" "),a("td",[t._v("URL to use for playing audio streams, e.g. "),a("a",{attrs:{href:"http://192.168.0.2:8080",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://192.168.0.2:8080"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("no")])])])]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("AllPlay Players are identified by their device ID (e.g. 9fbe37ca-d015-47a2-b76e-8fce7bc25687). Available configuration parameters are:")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("The devices support the following channels:")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("demo.things:")]),t._v(" "),t._m(15),a("p",[t._v("demo.items:")]),t._v(" "),t._m(16),a("p",[t._v("demo.sitemap:")]),t._v(" "),t._m(17),a("p",[t._v("demo.rules:")]),t._v(" "),t._m(18),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"allplay-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#allplay-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" AllPlay Binding")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("Linux ARM")]),t._v(" "),a("li",[t._v("Linux x86 (32 bit, AllJoyn v16.04a)")]),t._v(" "),a("li",[t._v("Linux x86-64 (64 bit, AllJoyn v16.04a)")]),t._v(" "),a("li",[t._v("Windows x86 (32 bit, AllJoyn v16.04a)")]),t._v(" "),a("li",[t._v("Windows x86-64 (64 bit, AllJoyn v16.04a)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Parameter")]),this._v(" "),e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Description")]),this._v(" "),e("th",[this._v("Required")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("rewindSkipTimeInSec")]),this._v(" "),e("td",[this._v("Rewind skip time (s)")]),this._v(" "),e("td",[this._v("Seconds to jump backwards if the rewind command is executed")]),this._v(" "),e("td",[this._v("yes")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("fastForwardSkipTimeInSec")]),this._v(" "),e("td",[this._v("Fast forward skip time (s)")]),this._v(" "),e("td",[this._v("Seconds to jump forward if the fastforward command is executed")]),this._v(" "),e("td",[this._v("yes")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter Label")]),t._v(" "),a("th",[t._v("Parameter ID")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Required")]),t._v(" "),a("th",[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Device ID")]),t._v(" "),a("td",[t._v("deviceId")]),t._v(" "),a("td",[t._v("The device identifier identifies one certain speaker")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Device Name")]),t._v(" "),a("td",[t._v("deviceName")]),t._v(" "),a("td",[t._v("The device name of the speaker")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Volume step size")]),t._v(" "),a("td",[t._v("volumeStepSize")]),t._v(" "),a("td",[t._v("Step size to use if the volume is changed using the increase/decrease command")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("Zone Member Separator")]),t._v(" "),a("td",[t._v("zoneMemberSeparator")]),t._v(" "),a("td",[t._v("Separator which is used when sending multiple zone members to channel 'zonemembers'")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v(",")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Channel Type ID")]),t._v(" "),a("th",[t._v("Item Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("clearzone")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("Remove the current speaker from the zone")])]),t._v(" "),a("tr",[a("td",[t._v("control")]),t._v(" "),a("td",[t._v("Player")]),t._v(" "),a("td",[t._v("Control the speaker, play/pause/next/previous/ffward/rewind")])]),t._v(" "),a("tr",[a("td",[t._v("coverart")]),t._v(" "),a("td",[t._v("Image")]),t._v(" "),a("td",[t._v("Image data of cover art of the current song")])]),t._v(" "),a("tr",[a("td",[t._v("coverarturl")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("URL of the cover art of the current song")])]),t._v(" "),a("tr",[a("td",[t._v("currentalbum")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Name of the album currently playing")])]),t._v(" "),a("tr",[a("td",[t._v("currentartist")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Name of the artist currently playing")])]),t._v(" "),a("tr",[a("td",[t._v("currentduration")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Duration in seconds of the track currently playing")])]),t._v(" "),a("tr",[a("td",[t._v("currentgenre")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Genre of the track currently playing")])]),t._v(" "),a("tr",[a("td",[t._v("currenttitle")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Title of the track currently playing")])]),t._v(" "),a("tr",[a("td",[t._v("currenturl")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("URL of the track or radio station currently playing")])]),t._v(" "),a("tr",[a("td",[t._v("currentuserdata")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Custom user data (e.g. name of radio station) of the track currently playing")])]),t._v(" "),a("tr",[a("td",[t._v("input")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Input of the speaker, e.g. Line-In (not supported by all speakers)")])]),t._v(" "),a("tr",[a("td",[t._v("loopmode")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Loop mode of the speaker (ONE, ALL, NONE)")])]),t._v(" "),a("tr",[a("td",[t._v("mute")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("Set or get the mute state of the master volume of the speaker (not supported by all speakers)")])]),t._v(" "),a("tr",[a("td",[t._v("playstate")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("State of the Speaker, e.g. PLAYING, STOPPED,..")])]),t._v(" "),a("tr",[a("td",[t._v("shufflemode")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("Toggle the shuffle mode of the speaker")])]),t._v(" "),a("tr",[a("td",[t._v("stop")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("Stop the playback")])]),t._v(" "),a("tr",[a("td",[t._v("stream")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Play the given HTTP or file stream (file:// or http://)")])]),t._v(" "),a("tr",[a("td",[t._v("volume")]),t._v(" "),a("td",[t._v("Dimmer")]),t._v(" "),a("td",[t._v("Get and set the volume of the speaker")])]),t._v(" "),a("tr",[a("td",[t._v("volumecontrol")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("Flag if the volume control is enabled (might be disabled if speaker is not master of the zone)")])]),t._v(" "),a("tr",[a("td",[t._v("zoneid")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Id of the Zone the speaker belongs to")])]),t._v(" "),a("tr",[a("td",[t._v("zonemembers")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Set the zone members by providing a comma-separated list of device names.")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("(This channel is currently only for setting the zone members.")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("It does not update automatically if the zone members are changed from another source)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"audio-support"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#audio-support","aria-hidden":"true"}},[this._v("#")]),this._v(" Audio Support")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("All AllPlay speakers are registered as an audio sink in the framework.\nAudio streams are sent to the "),e("code",[this._v("stream")]),this._v(" channel.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"full-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("allplay"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("speaker"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mySpeaker")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" deviceId"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"9fbe37ca-d015-47a2-b76e-8fce7bc25687"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("All2Stream")]),t._v("                           "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"allplay:speaker:9fbe37ca-d015-47a2-b76e-8fce7bc25687:stream"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Player")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("All2Control")]),t._v("                          "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"allplay:speaker:9fbe37ca-d015-47a2-b76e-8fce7bc25687:control"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("All2Volume")]),t._v("    "),a("span",{attrs:{class:"token string"}},[t._v('"Volume"')]),t._v("               "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"allplay:speaker:9fbe37ca-d015-47a2-b76e-8fce7bc25687:volume"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("All2Title")]),t._v("     "),a("span",{attrs:{class:"token string"}},[t._v('"Title [%s]"')]),t._v("           "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"allplay:speaker:9fbe37ca-d015-47a2-b76e-8fce7bc25687:currenttitle"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("All2State")]),t._v("     "),a("span",{attrs:{class:"token string"}},[t._v('"State [%s]"')]),t._v("           "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"allplay:speaker:9fbe37ca-d015-47a2-b76e-8fce7bc25687:playstate"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("All2Artist")]),t._v("    "),a("span",{attrs:{class:"token string"}},[t._v('"Artist [%s]"')]),t._v("          "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"allplay:speaker:9fbe37ca-d015-47a2-b76e-8fce7bc25687:currentartist"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("All2CoverUrl")]),t._v("  "),a("span",{attrs:{class:"token string"}},[t._v('"Cover Art URL [%s]"')]),t._v("   "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"allplay:speaker:9fbe37ca-d015-47a2-b76e-8fce7bc25687:coverarturl"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-perl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("sitemap")]),t._v(" demo "),a("span",{attrs:{class:"token constant"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Main Menu"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"All2"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Default")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("All2Control\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Slider")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("All2Volume\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("All2Title\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("All2Artist\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("All2State\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Play Online Radio stream"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" All2OnlineRadio "),a("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("ON")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),a("span",{attrs:{class:"token function-name"}},[t._v("All2Stream")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"http://chromaradio.com:8008/listen.pls"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="readme.md";e.default=n.exports}}]);