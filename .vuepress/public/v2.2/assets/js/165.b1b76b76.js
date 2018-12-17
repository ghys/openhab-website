(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{703:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("The aim of this binding is to allow the connection from openHAB to MAX! devices (wall thermostat/radiator valves) using the "),a("a",{attrs:{href:"http://busware.de/tiki-index.php?page=CUL",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUL USB dongle"),a("OutboundLink")],1),t._v(" rather than the MAX!Cube. This should allow greater control over the devices than the cube offers as all interaction is handled manually.")]),t._v(" "),a("p",[t._v("A lot of credit must go to the "),a("a",{attrs:{href:"http://fhem.de/fhem.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("FHEM project"),a("OutboundLink")],1),t._v(": without their implementation of the MAX interface with CUL this would be taking a lot longer to implement!")]),t._v(" "),a("p",[t._v("There is also a binding specifically for openHAB 2 "),a("router-link",{attrs:{to:"/addons/bindings/max/"}},[t._v("here")]),t._v(".")],1),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("The binding is currently in beta and it is recommended that you only use it expecting there to be bugs and issues. It is has enough features to be useful as a heating system, though lacks some of the finer features. This page will be updated as things progress.")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("There is a tutorial using a Raspberry Pi available at "),a("a",{attrs:{href:"https://technpol.wordpress.com/2016/04/09/configuration-of-maxcul-and-cul-dongle/",target:"_blank",rel:"noopener noreferrer"}},[t._v("technpol"),a("OutboundLink")],1),t._v(", which addresses some of the configuration issues and how to pair.  It's not clear that I'm doing pairing right (it seems very manual) but it does work.")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("The binding currently offers the following features:")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("Aside from understanding what the binding does do which is documented here there are some key things to be aware of that may limit what you hope to achieve.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("When using a serial port, you may need to add "),a("code",[t._v("-Dgnu.io.rxtx.SerialPorts=/dev/ttyACM0")]),t._v(" in your server startup.  Please consult the "),a("a",{attrs:{href:"https://community.openhab.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("forum"),a("OutboundLink")],1),t._v(" for the latest information.")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("Some quick examples:")]),t._v(" "),t._m(12),a("p",[t._v("will return/set the thermostat temperature of radiator thermostat with the serial number JEQ1234565")]),t._v(" "),t._m(13),a("p",[t._v("will return the battery level of radiator thermostat with the serial number JEQ0304492, if supported by the thermostat")]),t._v(" "),t._m(14),a("p",[t._v("will return the measured temperature of a wall mounted thermostat with serial number JEQ1234566")]),t._v(" "),t._m(15),a("p",[t._v("will set/return the desired temperature of a wall mounted thermostat with serial number JEQ1234566")]),t._v(" "),t._m(16),a("p",[t._v("ON maps to Auto, OFF maps to Eco of the push button with serial number JEQ1234567")]),t._v(" "),t._m(17),a("p",[t._v("Switch only, ON enables pair mode for 60s. Will automatically switch off after this time.")]),t._v(" "),t._m(18),a("p",[t._v("Switch only, puts binding into mode where it doesn't process messages - just listens to traffic, parses and outputs it in the log. Mainly used for debugging and checking behaviours. Can monitor devices associated with another controller, e.g a Max! Cube.")]),t._v(" "),t._m(19),a("p",[t._v("Will be updated with the latest value for the TX credit whenever it receives an update or command to a maxcul binding item. This number is used to adhere to the 1% transmission time rule. The 1% rule is enforced by the CUL USB device firmware.")]),t._v(" "),t._m(20),a("p",[t._v('This allows the wall thermostat display to be switched between actual temperature ("ON") and setpoint temperature ("OFF").')]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),a("p",[t._v("The following devices have the following valid features:")]),t._v(" "),t._m(23),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),t._m(24),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),t._m(28),t._m(29),t._v(" "),a("p",[t._v("Association allows you to link two items together. For example you might want to link a Wall Thermostat and a Radiator Thermostat together. This would have the effect that you don't need rules to keep the set point temperature synchronised as it is communicated directly by the devices. It also means that the radiator thermostat will use the measured temperature from the wall thermostat.")]),t._v(" "),a("p",[t._v("The devices must be associated both ways. The binding doesn't do this automatically (though it could in the future).")]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),t._m(30),t._v(" "),a("p",[t._v("The binding allows more than one association per device. They just need to be comma separated. Example:")]),t._v(" "),t._m(31),t._m(32),t._v(" "),a("p",[t._v("A device needs to be associated with the Max!CUL binding to work correctly. This is a simple process:")]),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),a("p",[t._v("The table below shows what messages are implemented and to what extent. Transmit means we can build and transmit a packet of that type with relevant data. Decode means we can extract data into some meaningful form. All message types can be received, identified and the raw payloads displayed. Messages not identified in this table cannot be transmitted by the binding and can only be decoded as a raw payload.")]),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),a("p",[t._v("For situations such as the pairing where a whole sequences of messages is required the binding has implemented a message sequencing system. This allows the implementation of a state machine for the system to pass through as messages are passed back and forth.")]),t._v(" "),a("p",[t._v("This will be documented in more detail in due course.")]),t._v(" "),t._m(39),t._v(" "),a("p",[t._v("These are in no particular priority and are simply ideas. They may not get implemented at all.")]),t._v(" "),t._m(40),t._v(" "),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"max-cul-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#max-cul-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" MAX!CUL Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"status"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#status","aria-hidden":"true"}},[this._v("#")]),this._v(" Status")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"tutorial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tutorial","aria-hidden":"true"}},[this._v("#")]),this._v(" Tutorial")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"features"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("Listen mode - this allows you to listen in on MAX! network activity from a MAX!Cube for example. A trace will be output in debug mode that decodes implemented messages")]),t._v(" "),a("li",[t._v("Pairing - can pair devices with OpenHAB by triggering Pair Mode using a Switch item")]),t._v(" "),a("li",[t._v("Wall Thermostat")]),t._v(" "),a("li",[t._v("Can send set point temperature")]),t._v(" "),a("li",[t._v("Can receive set point temperature")]),t._v(" "),a("li",[t._v("Can receive measured temperature")]),t._v(" "),a("li",[t._v("Can receive battery status")]),t._v(" "),a("li",[t._v("Can receive operating mode")]),t._v(" "),a("li",[t._v("Can factory reset device")]),t._v(" "),a("li",[t._v("Can be configured to display current temperature or current setpoint ("),a("em",[t._v("likely 1.8.0+")]),t._v(")")]),t._v(" "),a("li",[t._v("Radiator Thermostat Valve")]),t._v(" "),a("li",[t._v("Can send set point temperature")]),t._v(" "),a("li",[t._v("Can receive set point temperature")]),t._v(" "),a("li",[t._v("Can receive measured temperature")]),t._v(" "),a("li",[t._v("Can receive valve position")]),t._v(" "),a("li",[t._v("Can receive battery status")]),t._v(" "),a("li",[t._v("Can receive operating mode")]),t._v(" "),a("li",[t._v("Can factory reset device")]),t._v(" "),a("li",[t._v("Push Button")]),t._v(" "),a("li",[t._v("Can receive either AUTO or ECO depending on button press (translated to ON/OFF)")]),t._v(" "),a("li",[t._v("Can factory reset device")]),t._v(" "),a("li",[t._v("Association")]),t._v(" "),a("li",[t._v("It is possible to link devices together so that they communicate directly with each other, for example a wall thermostat and a radiator valve.")]),t._v(" "),a("li",[t._v("TX Credit Monitoring")]),t._v(" "),a("li",[t._v("It is possible to report TX credits from the CUL device via an item binding.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"limitations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#limitations","aria-hidden":"true"}},[this._v("#")]),this._v(" Limitations")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Radiator thermostat data is updated quite sporadically. Items such as set point temperature, measured temperature, valve position, battery status and operating mode are only sent when the state of the valve changes - i.e. valve moves or the dial used to manually set a temperature. If you want measured temperature it is much better to use a wall thermostat.")]),this._v(" "),e("li",[this._v("The binding has no concept of 'auto' mode: It currently has no ability to retrieve from any source and subsequently send a schedule to devices. This may change in the future, which would allow basic operation should OpenHAB fail for some reason.")]),this._v(" "),e("li",[this._v("If a wall thermostat is set to 'OFF' (mapped to 4.5deg) it won't update the measured temperature.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This binding can be configured in the "),e("code",[this._v("services/maxcul.cfg")]),this._v(" file.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("device")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("in the form "),a("code",[t._v("serial:<device>")]),t._v(", where "),a("code",[t._v("<device>")]),t._v(" is a local serial port, or"),a("br"),t._v(" "),a("code",[t._v("network:<host>:<port>")]),t._v(", where "),a("code",[t._v("<host>")]),t._v(" is the host name or IP address and "),a("code",[t._v("<port>")]),t._v(" is the port number.  The "),a("code",[t._v("network")]),t._v(" option works with ser2net from a tuxnet device")])]),t._v(" "),a("tr",[a("td",[t._v("baudrate")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[t._v("one of 75, 110, 300, 1200, 2400, 4800, 9600, 19200, "),a("strong",[t._v("38400")]),t._v(", 57600, 115200")])]),t._v(" "),a("tr",[a("td",[t._v("parity")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[t._v("one of EVEN, ODD, MARK, NONE, SPACE or "),a("strong",[t._v("0")])])]),t._v(" "),a("tr",[a("td",[t._v("refreshInterval")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[t._v("refresh interval in milliseconds")])]),t._v(" "),a("tr",[a("td",[t._v("timezone")]),t._v(" "),a("td",[t._v("Europe/London")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[t._v("set timezone you want the units to be set to")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Create a directory "),e("code",[this._v("maxcul")]),this._v(" in the "),e("code",[this._v("etc")]),this._v(" directory of your openHAB installation (e.g. "),e("code",[this._v("/usr/share/openhab2/etc/")]),this._v(") and make it writeable for the user account under which the openHAB is running.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("RadTherm1")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" maxcul"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"RadiatorThermostat:JEQ1234565"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("RadThermBatt")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" maxcul"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"RadiatorThermostat:JEQ1234565:feature=battery"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("wallThermTemp")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" maxcul"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"WallThermostat:JEQ1234566:feature=temperature"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("wallThermSet")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" maxcul"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"WallThermostat:JEQ1234566:feature=thermostat"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("pushBtn")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" maxcul"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"PushButton:JEQ1234567"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("pair")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" maxcul"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"PairMode"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("listen")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" maxcul"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"ListenMode"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("txCredit")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" maxcul"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"CreditMonitor"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("heating_display")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" maxcul"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"WallThermostat:JEQ1234567:feature=displaySetting"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"additional-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#additional-options","aria-hidden":"true"}},[this._v("#")]),this._v(" Additional options")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"feature"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#feature","aria-hidden":"true"}},[this._v("#")]),this._v(" feature")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("RadiatorThermostat - "),a("code",[t._v("thermostat")]),t._v(" (default),"),a("code",[t._v("temperature")]),t._v(","),a("code",[t._v("battery")]),t._v(","),a("code",[t._v("valvepos")]),t._v(","),a("code",[t._v("reset")])]),t._v(" "),a("li",[t._v("WallThermostat - "),a("code",[t._v("thermostat")]),t._v(" (default),"),a("code",[t._v("temperature")]),t._v(","),a("code",[t._v("battery")]),t._v(","),a("code",[t._v("reset")]),t._v(","),a("code",[t._v("displaySetting")])]),t._v(" "),a("li",[t._v("PushButton - "),a("code",[t._v("switch")]),t._v(","),a("code",[t._v("reset")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("wallThermTemp")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" maxcul"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"WallThermostat:JEQ1234566:feature=temperature"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"configtemp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configtemp","aria-hidden":"true"}},[this._v("#")]),this._v(" configTemp")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("There is the option of the addition of "),e("code",[this._v("configTemp=20.0/15.0/30.5/4.5/4.5/0.0/0.0")]),this._v(" at the end of a thermostat device binding (wall or radiator) will allow the setting of comfort/eco/max/min/windowOpenDetectTemp/windowOpenDetectTime/measurementOffset respectively. It's best to set this on only one binding of each device - if you set this on more than one binding for the same device then it will take the first one in the parsing order (whatever that is - hence generating some uncertainty!). These correspond to the following:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("comfort - the defined 'comfort' temperature (default 21.0)")]),t._v(" "),a("li",[t._v("eco - the defined eco setback temperature (default 17.0)")]),t._v(" "),a("li",[t._v('max - maximum temperature that can be set on the thermostat (default 30.5, which is the maximum value and corresponds to "open valve")')]),t._v(" "),a("li",[t._v('min - minimum temperature that can be set on the thermostat (default 4.5, which is the minimum value and corresponds to "closed valve")')]),t._v(" "),a("li",[t._v("windowOpenDetectTemp - set point in the event that a window open event is triggered by a shutter, if set to 4.5, this function is deactivated.")]),t._v(" "),a("li",[t._v("windowOpenDetectTime - Rounded down to the nearest 5 minutes. (default is 0)")]),t._v(" "),a("li",[t._v("measurement offset - offset applied to measure temperature (range is -3.5 to +3.5) - default is 0.0")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("wallThermDesired")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" maxcul"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"WallThermostat:KEQ0946847:feature=thermostat:configTemp=20.0/15.0/30.5/4.5/4.5/0.0/0.0"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"associate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#associate","aria-hidden":"true"}},[this._v("#")]),this._v(" associate")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v('Number heating_radvalve "Valve Setpoint [%.1f °C]" { maxcul="RadiatorThermostat:KEQ1234561:associate=KEQ1234560" } Number heating_wallThermMeasured "Wall Meas [%.1f °C]" { maxcul="WallThermostat:KEQ1234560:feature=temperature:associate=KEQ1234561" }')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("heating_wallThermMeasured")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Wall Meas [%.1f °C]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" maxcul"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"WallThermostat:KEQ1234560:feature=temperature:associate=KEQ1234561,KEQ1234562"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"pairing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pairing","aria-hidden":"true"}},[this._v("#")]),this._v(" Pairing")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Ensure you have an item that has the correct device serial and settings you want configured in openhab")]),this._v(" "),e("li",[this._v("If you haven't already then create a seperate item and sitemap entry that is a switch that allows you to turn on pairing mode (NB. it will turn off automatically after 30s)")]),this._v(" "),e("li",[this._v("Switch on pairing mode")]),this._v(" "),e("li",[this._v("Once pairing mode is activated then you need to pair the device by pressing and holding the pairing button the device (see your device manual). You should see it start to count down a timer from 30. Once the pairing process has begun then you will see AC displayed (on Wall and Radiator thermostats at least) or for devices without a display the LED will flash as described in the manual.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Please note:")]),this._v(" If the device has been paired before you will need to factory reset it before use. Please see the device user manual for details on how to do this.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"technical-information"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#technical-information","aria-hidden":"true"}},[this._v("#")]),this._v(" Technical Information")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"implemented-messages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#implemented-messages","aria-hidden":"true"}},[this._v("#")]),this._v(" Implemented Messages")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Message")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Transmit")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Decode")]),t._v(" "),a("th",[t._v("Comments")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("ACK")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("PAIR PING")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("PAIR PONG")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("SET GROUP ID")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("SET TEMPERATURE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",[t._v("Allows setting of temperature of (wall)therm")])]),t._v(" "),a("tr",[a("td",[t._v("TIME INFO")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("WAKEUP")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("WALL THERMOSTAT CONTROL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",[t._v("Provides measured temp and set point")])]),t._v(" "),a("tr",[a("td",[t._v("THERMOSTAT STATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",[t._v("Provides battery/valvepos/temperature/thermostat set point")])]),t._v(" "),a("tr",[a("td",[t._v("WALL THERMOSTAT STATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",[t._v("Provides battery/valvepos/temperature/thermostat set point")])]),t._v(" "),a("tr",[a("td",[t._v("PUSH BUTTON STATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",[t._v("Auto maps to ON, Eco maps to OFF")])]),t._v(" "),a("tr",[a("td",[t._v("ADD LINK PARTNER")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",[t._v("Links a device with another")])]),t._v(" "),a("tr",[a("td",[t._v("SET DISPLAY ACTUAL TEMP")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",[t._v("Set a wall thermostat to show current measured or current setpoint temperature")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"message-sequences"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#message-sequences","aria-hidden":"true"}},[this._v("#")]),this._v(" Message Sequences")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"planned-future-features"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#planned-future-features","aria-hidden":"true"}},[this._v("#")]),this._v(" Planned Future Features")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ol",[a("li",[t._v("If there is a pending SET_TEMPERATURE message in the queue and we receive a SET_TEMPERATURE from the thermostat we are waiting to send to then we should clear the message from the queue as it will be outdated.")]),t._v(" "),a("li",[t._v("Add the ability to interface with the window contact devices")]),t._v(" "),a("li",[t._v("Add the ability pretend to be a wall thermostat. This would allow us to associate with a radiator thermostat and send measured temperatures to it. These could be then sent from another binding for example.")]),t._v(" "),a("li",[t._v("Add the ability to simulated a window contact. This would allow us to associate with a radiator thermostat and send window events to it.")]),t._v(" "),a("li",[t._v("Explore how to avoid the queue getting too long due to lack of credits with many devices.")]),t._v(" "),a("li",[t._v("Add ability to setup device groups which should help reduce lack of credit issue")])])}],!1,null,null,null);r.options.__file="readme.md";e.default=r.exports}}]);