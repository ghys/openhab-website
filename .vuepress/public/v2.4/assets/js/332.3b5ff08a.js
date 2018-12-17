(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{279:function(t,e,r){t.exports=r.p+"ebaa8cd915e07b72be5a67b7ba1d91df.jpg"},805:function(t,e,r){"use strict";r.r(e);var a=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"vitotronic-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vitotronic-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Vitotronic Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:r(279),alt:"Architectur"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("heating (Vitotronic core system)")]),t._v(" "),r("li",[t._v("pelletburner (Pellet Fireplace, works for wood also)")]),t._v(" "),r("li",[t._v("oilburner (Oil Fireplace)")]),t._v(" "),r("li",[t._v("storagetank (Storage Tank, stores heat in a water tank on 3 levels: bottom, middle, top=hot water)")]),t._v(" "),r("li",[t._v("circuit (Heating circuit controls the flow between the heating system and the radiators in the rooms)")]),t._v(" "),r("li",[t._v("solar (Solar water heating (SWH): Convert sunlight into energy for water heating)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("temperaturesensor (Single temperature sensor)")]),this._v(" "),e("li",[this._v("pump (Single pump)")]),this._v(" "),e("li",[this._v("valve (Single valve)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("The binding discovers the adapter with broadcast and put the found "),r("code",[t._v("vitotronic:bridge")]),t._v(" into the inbox. For automatic detection the adapter and "),r("strong",[t._v("openHAB")]),t._v(" must be on the same LAN. The discovery itself must be start in the Paper-UI.\nIf the bridge isn't on the same LAN the bridge can also add manually. In this case the "),r("code",[t._v("IP-Address")]),t._v(" and the "),r("code",[t._v("adapterID")]),t._v(" is required.\nÍf the "),r("code",[t._v("vitotronic:bridge")]),t._v(" added a second discovery will be start. It discovers all things, define in the adapter and put found things into the inbox.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("ipAddress (The IP address of the Optolink adapter)")]),this._v(" "),e("li",[this._v("port (Port of the LAN gateway. Default: 31113)")]),this._v(" "),e("li",[this._v("adapterID (The ID/Name of the adapter)")]),this._v(" "),e("li",[this._v("refreshInterval (Refresh time for data in seconds. Default: 600 seconds)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("There is no configuration of Things necessary. Only some channels are set active by default. If this channels are defined in the adapter and will be used in "),e("strong",[this._v("openHAB")]),this._v("  it must set active manually.\nDon't change the Thing Name. It is the reference to the name in the adapter.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("Channel Type ID")]),t._v(" "),r("th",[t._v("Item Type")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("systemtime")]),t._v(" "),r("td",[t._v("DateTime")]),t._v(" "),r("td",[t._v("DateTime of the heating system")])]),t._v(" "),r("tr",[r("td",[t._v("outside_temp")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Outside temperature sensor")])]),t._v(" "),r("tr",[r("td",[t._v("boiler_temp")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Temperature sensor of boiler (fireplace)")])]),t._v(" "),r("tr",[r("td",[t._v("flowuprating")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("Pump state of flow up rating")])]),t._v(" "),r("tr",[r("td",[t._v("flame_temp")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Temperature of flame")])]),t._v(" "),r("tr",[r("td",[t._v("airshutter_prim")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Position of the primary air shutter")])]),t._v(" "),r("tr",[r("td",[t._v("airshutter_sec")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Position of the secondary air shutter")])]),t._v(" "),r("tr",[r("td",[t._v("lambdasensor")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Oxygen content of the exhaust air")])]),t._v(" "),r("tr",[r("td",[t._v("fanspeed")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Fan Speed in rpm")])]),t._v(" "),r("tr",[r("td",[t._v("fanspeed_target")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Fan Speed in rpm")])]),t._v(" "),r("tr",[r("td",[t._v("error")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("starts")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Count of starts")])]),t._v(" "),r("tr",[r("td",[t._v("ontime")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Ontime in hours")])]),t._v(" "),r("tr",[r("td",[t._v("consumedpellets")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Consumed Pellets since start of heating in tons")])]),t._v(" "),r("tr",[r("td",[t._v("power")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Power of the pellet burner")])]),t._v(" "),r("tr",[r("td",[t._v("powerlevel")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Power of the oil burner")])]),t._v(" "),r("tr",[r("td",[t._v("actualpower")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Actual power of the burner")])]),t._v(" "),r("tr",[r("td",[t._v("ontimelevel1")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Ontime in hours")])]),t._v(" "),r("tr",[r("td",[t._v("ontimelevel2")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Ontime in hours")])]),t._v(" "),r("tr",[r("td",[t._v("consumedoil")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Consumed Oil since start of heating in Liter")])]),t._v(" "),r("tr",[r("td",[t._v("hotwater_temp")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Temperature sensor of the hot water")])]),t._v(" "),r("tr",[r("td",[t._v("middle_temp")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Temperature sensor in the middle of the storage tank")])]),t._v(" "),r("tr",[r("td",[t._v("bottom_temp")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Temperature sensor at the bottom of the storage tank")])]),t._v(" "),r("tr",[r("td",[t._v("circuitpump")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("Circuit pump state")])]),t._v(" "),r("tr",[r("td",[t._v("flowtemperature")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Temperature sensor of the ciruit flow")])]),t._v(" "),r("tr",[r("td",[t._v("pump")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("Pump state")])]),t._v(" "),r("tr",[r("td",[t._v("operationmode")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Operationmode")])]),t._v(" "),r("tr",[r("td",[t._v("savemode")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("Savemode on/off")])]),t._v(" "),r("tr",[r("td",[t._v("partymode")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("Partymode on/off")])]),t._v(" "),r("tr",[r("td",[t._v("party_temp")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Target temperature of party mode")])]),t._v(" "),r("tr",[r("td",[t._v("room_temp")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Target temperature of rooms")])]),t._v(" "),r("tr",[r("td",[t._v("save_temp")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Target temperature of save mode")])]),t._v(" "),r("tr",[r("td",[t._v("gradient")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("The gradient relativ to outside temperature")])]),t._v(" "),r("tr",[r("td",[t._v("niveau")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("The niveau relativ to outside temperature")])]),t._v(" "),r("tr",[r("td",[t._v("collector_temp")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Actual temperature of the collector")])]),t._v(" "),r("tr",[r("td",[t._v("storagetank_temp")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Actual temperature of the storage tank (solar sensor)")])]),t._v(" "),r("tr",[r("td",[t._v("bufferload")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("State of the pump (on/off)")])]),t._v(" "),r("tr",[r("td",[t._v("loadsuppression")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("State of the load suppression (on/off)")])]),t._v(" "),r("tr",[r("td",[t._v("producedheat")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Produced heat since starting solar system")])]),t._v(" "),r("tr",[r("td",[t._v("temperature")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Generic temperature sensor")])]),t._v(" "),r("tr",[r("td",[t._v("valve")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Value of a generic valve")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])}],_=r(0),v=Object(_.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("AddonLogo"),t._v(" "),r("p",[t._v("Viessmann heating systems with Vitotronic has a optolink Interface for maintenance.\nThis interface can use for get/set data in the heating system. "),r("a",{attrs:{href:"http://openv.wikispaces.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("see on openv"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("The Vitotronic binding is a solution to bind this interface into openHAB2.\nIt supports the separation of the heating adaption from the integration in "),r("a",{attrs:{href:"http://www.openhab.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("openHAB2"),r("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("The adapter transform the address oriented raw interface of the Vitotronic to a abstract format.\nThe adapter itself is not a part of the openhab2 binding.\n"),r("a",{attrs:{href:"https://github.com/steand/optolink",target:"_blank",rel:"noopener noreferrer"}},[t._v("A alpha version is available here"),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"https://github.com/steand/optolink/wiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("More Information about the adapter"),r("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("For easy using are the main things of a heating system are already define in this binding:")]),t._v(" "),t._m(3),t._v(" "),r("p",[t._v("For advanced used 3 basic things of a headingsystem define also.")]),t._v(" "),t._m(4),t._v(" "),r("p",[t._v("Note: The mapping of things and channels to the heating system addresses must be done in the adapter.")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),r("p",[t._v("Binding itself has 4 configuration parameters:")]),t._v(" "),t._m(8),t._v(" "),r("p",[t._v("If the adapter is automatic discovered the ipAddress, and adapterID will be set by discovery.\nThe rereshInterval can be set between 60 and 600 seconds. The minimal setting is dependent of the performance of the adapter.")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),r("p",[t._v("The follow channels are implemented:")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),r("p",[t._v("t.b.d")]),t._v(" "),r("DocPreviousVersions"),t._v(" "),r("EditPageLink")],1)},a,!1,null,null,null);v.options.__file="readme.md";e.default=v.exports}}]);