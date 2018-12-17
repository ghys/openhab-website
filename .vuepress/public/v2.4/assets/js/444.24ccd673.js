(window.webpackJsonp=window.webpackJsonp||[]).push([[444],{474:function(e,t,n){"use strict";n.r(t);var i=n(0),a=Object(i.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),n("p",[e._v("This page describes the necessary steps in order to implement a new binding for openHAB 2.")]),e._v(" "),n("p",[n("em",[e._v("Note:")]),e._v(" Please note that in contrast to openHAB 1.x, openHAB 2 is based on the "),n("a",{attrs:{href:"http://eclipse.org/smarthome/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Eclipse SmartHome"),n("OutboundLink")],1),e._v(" project.\nSo the APIs and concepts have changed, so please read this documentation carefully, if you are coming from openHAB 1.x development.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),n("p",[e._v("As a first step, you need to decide in which namespace you want to develop your binding - assuming that you want to contribute it back to the community, you have two options:")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),n("p",[e._v('For the openHAB namespace: Choose the option "openHAB 2 Add-ons" in '),n("router-link",{attrs:{to:"./ide.html"}},[e._v("your IDE setup")]),e._v(", and create a skeleton for your binding.\nTo do this, go into your Git repository under "),n("code",[e._v("git/openhab2-addons/addons/binding")]),e._v(" and call the script "),n("code",[e._v("create_openhab_binding_skeleton.sh")]),e._v(" with two arguments.\nIt is important that your binding name is in camel case (e.g. 'ACMEProduct' or 'SomeSystem').\nAfter the binding name, provide your name as the author (surrounded by quotes if you want to use whitespaces to separate your first and last name).\nExample: "),n("code",[e._v('~/git/openhab2-addons/addons/binding/create_openhab_binding_skeleton.sh BindingName "Firstname Lastname"')])],1),e._v(" "),n("p",[e._v('For the Eclipse SmartHome namespace: Choose the option "Eclipse SmartHome Extensions" in '),n("router-link",{attrs:{to:"./ide.html"}},[e._v("your IDE setup")]),e._v(", and create a skeleton for your binding.\nTo do this, go to "),n("code",[e._v("git/smarthome/tools/archetype")]),e._v("and run "),n("code",[e._v("mvn install")]),e._v(" in order to install the archetype definition in your local Maven repo.\nNow go to "),n("code",[e._v("git/smarthome/extensions/binding")]),e._v(" and call the script "),n("code",[e._v("create_binding_skeleton.sh")]),e._v(" with two parameters.\nThe first one is your binding name in camel case (e.g. 'ACMEProduct' or 'SomeSystem').\nThe second one is your name as author (surrounded by quotes if you want to use whitespaces to separate your fist and last name).")],1),e._v(" "),e._m(5),e._v(" "),n("p",[n("em",[e._v("Note:")]),e._v(" Here you can find a "),n("a",{attrs:{href:"http://youtu.be/30nhm0yIcvA",target:"_blank",rel:"noopener noreferrer"}},[e._v("screencast of the binding skeleton creation"),n("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(6),e._v(" "),n("p",[e._v("The skeleton should give you an easy starting point for your developments.\nTo learn about the internal structure and the concepts of a binding, please see the "),n("a",{attrs:{href:"https://www.eclipse.org/smarthome/documentation/development/bindings/how-to.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Eclipse tutorial on binding development"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Please especially note our "),n("a",{attrs:{href:"guidelines"}},[e._v("coding guidelines")]),e._v(", which must be respected for having pull requests approved.\nIf you have any special dependencies in your code, please check the "),n("a",{attrs:{href:"https://www.eclipse.org/smarthome/documentation/development/bindings/dependencies.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("library recommendations"),n("OutboundLink")],1),e._v(" at Eclipse SmartHome.\nThis will ensure that everyone uses the same libraries for e.g. JSON and XML processing or for HTTP and websocket communication.")]),e._v(" "),e._m(7),e._v(" "),n("ul",[e._m(8),e._v(" "),n("li",[e._v("run "),n("code",[e._v("mvn license:format")]),e._v(" in the root folder of your local Git repository (see "),n("router-link",{attrs:{to:"./guidelines.html#a-code-style"}},[e._v("coding guidelines A.2")]),e._v(")")],1)]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),n("p",[e._v("Once you are happy with your implementation, you need to integrate it in the Maven build and add it to the official distro.\nFor the Maven build, please add a new line in the "),n("a",{attrs:{href:"https://github.com/openhab/openhab2-addons/blob/master/addons/binding/pom.xml",target:"_blank",rel:"noopener noreferrer"}},[e._v("binding pom.xml"),n("OutboundLink")],1),e._v(" at the alphabetically correct position.\nIn order to have the binding being included by the distro, you furthermore need to add it to the "),n("a",{attrs:{href:"https://github.com/openhab/openhab2-addons/blob/master/features/openhab-addons/src/main/feature/feature.xml",target:"_blank",rel:"noopener noreferrer"}},[e._v("feature.xml"),n("OutboundLink")],1),e._v(", again at the alphabetically correct position.\nIf you have a dependency on a transport bundle (e.g. upnp, mdns or serial), make sure to add a line for this dependency as well (see the other bindings as an example).")]),e._v(" "),n("p",[e._v("Before you create a pull request on GitHub, you should now run")]),e._v(" "),e._m(18),n("p",[e._v("from the repository root to ensure that the build works smoothly.\nIf it does, it is time to "),n("router-link",{attrs:{to:"./../contributing/contributing.html"}},[e._v("contribute your work")]),e._v("!")],1),e._v(" "),e._m(19),e._v(" "),n("p",[e._v("The Build includes "),n("a",{attrs:{href:"https://github.com/openhab/static-code-analysis",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tooling for static code analysis"),n("OutboundLink")],1),e._v(" that will validate your code against the openHAB Coding Guidelines and some additional best practices.\nInformation about the checks can be found "),n("a",{attrs:{href:"https://github.com/openhab/static-code-analysis#esh-guidelines-covered",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(20),e._v(" "),e._m(21),n("p",[e._v("Please fix all the priority 1 issues and all issues with priority 2 and 3 that are relevant (if you have any doubt don't hesitate to ask).\nRe-run the build to confirm that the checks are passing.")]),e._v(" "),n("DocPreviousVersions"),e._v(" "),n("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"developing-a-binding-for-openhab-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#developing-a-binding-for-openhab-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Developing a Binding for openHAB 2")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For information about code style and naming conventions, please see the "),t("a",{attrs:{href:"guidelines"}},[this._v("coding guidelines")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"choosing-a-namespace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#choosing-a-namespace","aria-hidden":"true"}},[this._v("#")]),this._v(" Choosing a Namespace")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("You can choose "),t("code",[this._v("org.eclipse.smarthome")]),this._v(", if you want to directly contribute it to the Eclipse SmartHome project.\nThe advantage of this option is that you make it available to a wider audience as your binding will also be available for other solutions than openHAB that are based on Eclipse SmartHome.\nThe disadvantage is that the contribution process is stricter as it involves intellectual property checks and in general makes it harder or even impossible to include third-party libraries with copy-left licenses such as LGPL or code that you have written by reverse engineering some protocol.")]),this._v(" "),t("li",[this._v("You can choose "),t("code",[this._v("org.openhab")]),this._v(", if you want it to be used for openHAB only.\nThis is the better option, if your binding is not interesting for other solutions, requires special libraries or has technical dependencies on openHAB specific things (although this should be avoided as much as possible).")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"creating-a-skeleton"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-skeleton","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating a Skeleton")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Now switch back to Eclipse and choose "),t("code",[this._v("File->Import->General->Existing Projects into Workspace")]),this._v(', enter the folder of the newly created skeleton as the root directory, and press "Finish".')])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"implement-the-binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implement-the-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Implement the Binding")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("Note:")]),this._v(" Currently Eclipse SmartHome and openHAB use different license versions (EPL-2.0 for ESH and EPL-1.0 for OH2).\nThe skeleton templates use the newer EPL-2.0 version.\nTo compile a new openHAB binding without errors, you have to perform the following additional steps:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("replace "),t("code",[this._v("NOTICE")]),this._v(" with "),t("code",[this._v("about.html")]),this._v(" in the "),t("code",[this._v("build-properties")]),this._v(" file")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"setup-and-run-the-binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup-and-run-the-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Setup and Run the Binding")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("To setup the binding you need to configure at least one "),n("em",[e._v("Thing")]),e._v(" and link an "),n("em",[e._v("Item")]),e._v(" to it.\nIn your workspace in "),n("code",[e._v("distro-resources/src/main/resources/things")]),e._v(", you can define and configure "),n("em",[e._v("Things")]),e._v(" in files with a "),n("code",[e._v("*.things")]),e._v(" extension.\nThe following file defines a thing for the Yahoo Weather binding:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('yahooweather:weather:berlin     [ location="638242" ]\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In this example a "),t("em",[this._v("Thing")]),this._v(" of the "),t("em",[this._v("ThingType")]),this._v(" "),t("code",[this._v("yahooweather:weather")]),this._v(" is defined with a configuration for the location.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Next you need to create "),t("em",[this._v("Items")]),this._v(" and link them to the "),t("em",[this._v("Channel")]),this._v(" of your binding.\nHere is the example of the Yahoo Weather binding:")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dsl"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),n("span",{attrs:{class:"token class-name"}},[e._v("Berlin_Temperature")]),e._v("       "),n("span",{attrs:{class:"token string"}},[e._v('"Temperature in Berlin [%.1f °C]"')]),e._v("   "),n("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),n("span",{attrs:{class:"token operator"}},[e._v("=")]),n("span",{attrs:{class:"token string"}},[e._v('"yahooweather:weather:berlin:temperature"')]),e._v(" "),n("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),n("span",{attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),n("span",{attrs:{class:"token class-name"}},[e._v("Berlin_Humidity")]),e._v("          "),n("span",{attrs:{class:"token string"}},[e._v('"Humidity in Berlin [%d %%]"')]),e._v("        "),n("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),n("span",{attrs:{class:"token operator"}},[e._v("=")]),n("span",{attrs:{class:"token string"}},[e._v('"yahooweather:weather:berlin:humidity"')]),e._v(" "),n("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The syntax for a channel link is "),t("code",[this._v('{ channel = "<binding-id>:<thing-type-id>:<thing-id>:<channel-id>" }')]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If you start the openHAB runtime including the binding now (make sure that your binding is checked in the launch configuration dialog!), the code inside your "),t("code",[this._v("ThingHandler")]),this._v(" implementation is executed.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"include-the-binding-in-the-build-and-the-distro"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#include-the-binding-in-the-build-and-the-distro","aria-hidden":"true"}},[this._v("#")]),this._v(" Include the Binding in the Build and the Distro")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("mvn clean install\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"static-code-analysis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#static-code-analysis","aria-hidden":"true"}},[this._v("#")]),this._v(" Static code analysis")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The tool will generate an individual report for each binding, which you can find in "),t("code",[this._v(".../your_binding_directory/target/code-analysis/report.html")]),this._v(" file and a report for the whole build that contains links to the individual reports in the "),t("code",[this._v("../openhab2-addons/target/summary_report.html")]),this._v(".\nThe tool categorizes the found issues by priority: 1(error), 2(warning) or 3(info).\nIf any error is found within your code the Maven build will end with failure.\nYou will receive detailed information (path to the file, line and message) listing all problems with priority 1 on the console:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("...\n[ERROR] Failed to execute goal org.openhab.tools:static-code-analysis:0.0.4:report (default) on project org.openhab.binding.example: Code Analysis Tool has found 1 error(s)!\n[ERROR] Please fix the errors and rerun the build.\n[ERROR] Errors list:\n[ERROR] ERROR found by checkstyle: .binding.example.test/about.html:0 Missing about.html file.\n[ERROR] Detailed report can be found at: file////path_to_openhab/openhab2-addons/addons/binding/org.openhab.binding.example/target/code-analysis/report.html\n...\n")])])])}],!1,null,null,null);a.options.__file="bindings.md";t.default=a.exports}}]);