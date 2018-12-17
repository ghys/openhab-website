(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{541:function(e,t,r){"use strict";r.r(t);var n=r(0),i=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p",[e._v("The Weather Action service provides meteorological information to your scripts and rules.")]),e._v(" "),r("ul",[e._m(1),e._v(" "),r("li",[r("code",[e._v("getBeaufortIndex(double speed)")]),e._v(": Compute the "),r("a",{attrs:{href:"http://en.wikipedia.org/wiki/Beaufort_scale",target:"_blank",rel:"noopener noreferrer"}},[e._v("Beaufort scale"),r("OutboundLink")],1),e._v(" for a given wind speed in m/s.  Returns the Beaufort Index between 0 and 12.  "),r("code",[e._v("transform/beaufort.map")]),e._v(":")])]),e._v(" "),e._m(2),r("ul",[r("li",[r("code",[e._v("getSeaLevelPressure(double pressure, double temp, double altitude)")]),e._v(": Compute the "),r("a",{attrs:{href:"http://keisan.casio.com/exec/system/1224575267",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sea Level Pressure"),r("OutboundLink")],1),e._v(", given absolute pressure in hPa, temperature in Celsius, and altitude in meters.  Returns equivalent sea level pressure.")]),e._v(" "),e._m(3)]),e._v(" "),r("DocPreviousVersions"),e._v(" "),r("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"weather-actions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#weather-actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Weather Actions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("getHumidex(double temperature, int hygro)")]),this._v(": Compute the Humidex index given temperature in Celsius and hygrometry (relative percent).  Returns Humidex index value.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("0=Calm\n1=Light air\n2=Light breeze\n3=Gentle breeze\n4=Moderate breeze\n5=Fresh breeze\n6=Strong breeze\n7=High wind\n8=Gale\n9=Strong/severe gale\n10=Storm\n11=Violent storm\n12=Hurricane force\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("getWindDirection(int degree)")]),this._v(": Transform an orientation angle (in degrees) to its cardinal string equivalent.  Returns string representing the direction.")])}],!1,null,null,null);i.options.__file="readme.md";t.default=i.exports}}]);