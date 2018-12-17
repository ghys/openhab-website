(window.webpackJsonp=window.webpackJsonp||[]).push([[375],{459:function(e,t,n){"use strict";n.r(t);var i=n(0),r=Object(i.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),n("p",[e._v("Note that the openHAB distribution repository does not contain any source code, but it rather aggregates features from different repos:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/eclipse/smarthome",target:"_blank",rel:"noopener noreferrer"}},[e._v("Eclipse SmartHome Framework"),n("OutboundLink")],1),e._v(": This repo holds the major parts of the core functionality.")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/kaikreuzer/openhab-core",target:"_blank",rel:"noopener noreferrer"}},[e._v("openHAB 2 Core"),n("OutboundLink")],1),e._v(": This repo contains a few small bundles that are not part of Eclipse SmartHome, but required for the openHAB runtime. This e.g. contains a compatibility layer for supporting openHAB 1 add-ons.")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/openhab/openhab2",target:"_blank",rel:"noopener noreferrer"}},[e._v("openHAB 2 Add-ons"),n("OutboundLink")],1),e._v(": Add-ons of openHAB that use the Eclipse SmartHome APIs can be found within this repository. They cannot be used with an openHAB 1.x runtime, since they provide features that the old runtime does not support.")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/openhab/openhab",target:"_blank",rel:"noopener noreferrer"}},[e._v("openHAB 1 Add-ons"),n("OutboundLink")],1),e._v(": Add-ons developed for openHAB 1.x. Most of them are working smoothly on the openHAB 2 runtime and thus they are packaged within the distribution.")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/eclipse/smarthome/tree/master/extensions",target:"_blank",rel:"noopener noreferrer"}},[e._v("Eclipse SmartHome Extensions"),n("OutboundLink")],1),e._v(": Since openHAB uses the Eclipse SmartHome framework, it is automatically compatible with all extensions that are available for it and maintained within the Eclipse SmartHome repository. These are usually high-quality extensions that might be even used in commercial products.")])]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),n("p",[e._v("We are always thrilled to receive pull requests, and do our best to\nprocess them as fast as possible. Not sure if that typo is worth a pull\nrequest? Do it! We will appreciate it.")]),e._v(" "),n("p",[e._v("If your pull request is not accepted on the first try, don't be\ndiscouraged! If there's a problem with the implementation, hopefully you\nreceived feedback on what to improve.")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),n("p",[e._v("We recommend discussing your plans "),n("a",{attrs:{href:"https://community.openhab.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("in the discussion forum"),n("OutboundLink")],1),e._v("\nbefore starting to code - especially for more ambitious contributions.\nThis gives other contributors a chance to point you in the right\ndirection, give feedback on your design, and maybe point out if someone\nelse is working on the same thing.")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),n("p",[e._v('Please take a moment to check that an issue doesn\'t already exist\ndocumenting your bug report or improvement proposal. If it does, it\nnever hurts to add a quick "+1" or "I have this problem too". This will\nhelp prioritize the most common problems and requests.')]),e._v(" "),e._m(9),e._v(" "),n("p",[e._v("Fork the repo and make changes on your fork in a feature branch:")]),e._v(" "),e._m(10),e._v(" "),n("p",[e._v("Submit unit tests for your changes.  openHAB has a great test framework built in; use\nit! Take a look at existing tests for inspiration. Run the full test suite on\nyour branch before submitting a pull request.")]),e._v(" "),n("p",[e._v("Update the documentation when creating or modifying features. Test\nyour documentation changes for clarity, concision, and correctness, as\nwell as a clean documentation build.")]),e._v(" "),n("p",[e._v("Write clean code. Universally formatted code promotes ease of writing, reading,\nand maintenance.")]),e._v(" "),n("p",[e._v("Pull requests descriptions should be as clear as possible and include a\nreference to all the issues that they address.")]),e._v(" "),n("p",[e._v("Pull requests must not contain commits from other users or branches.")]),e._v(" "),n("p",[e._v("Commit messages must start with a capitalized and short summary (max. 50\nchars) written in the imperative, followed by an optional, more detailed\nexplanatory text which is separated from the summary by an empty line.")]),e._v(" "),n("p",[e._v("Code review comments may be added to your pull request. Discuss, then make the\nsuggested modifications and push additional commits to your feature branch. Be\nsure to post a comment after pushing. The new commits will show up in the pull\nrequest automatically, but the reviewers will not be notified unless you\ncomment.")]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),n("p",[e._v("openHAB maintainers use the "),n("a",{attrs:{href:"https://help.github.com/articles/about-pull-request-reviews/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github review feature"),n("OutboundLink")],1),e._v(" to indicate acceptance.")]),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),n("p",[e._v("The sign-off is a simple line at the end of the explanation for the\npatch, which certifies that you wrote it or otherwise have the right to\npass it on as an open-source patch.  The rules are pretty simple: if you\ncan certify the below (from\n"),n("a",{attrs:{href:"http://developercertificate.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("developercertificate.org"),n("OutboundLink")],1),e._v("):")]),e._v(" "),e._m(16),n("p",[e._v("then you just add a line to every git commit message:")]),e._v(" "),e._m(17),e._v(" "),n("p",[e._v("using your real name (sorry, no pseudonyms or anonymous contributions.)")]),e._v(" "),n("p",[e._v('If your commit contains code from others as well, please ensure that they certify the DCO as well and add them with an "Also-By" line to your commit message:')]),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),n("p",[e._v("There are several exceptions to the signing requirement. Currently these are:")]),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),n("ul",[n("li",[e._v("Step 1: learn the component inside out")]),e._v(" "),n("li",[e._v("Step 2: make yourself useful by contributing code, bugfixes, support etc.")]),e._v(" "),n("li",[e._v("Step 3: volunteer on [in the community] ("),n("a",{attrs:{href:"https://community.openhab.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://community.openhab.org/"),n("OutboundLink")],1),e._v(")")])]),e._v(" "),n("p",[e._v("Don't forget: being a maintainer is a time investment. Make sure you will have time to make yourself available.\nYou don't have to be a maintainer to make a difference on the project!")]),e._v(" "),e._m(22),e._v(" "),n("p",[e._v("We want to keep the openHAB community awesome, growing and collaborative. We\nneed your help to keep it that way. To help with this we've come up with some\ngeneral guidelines for the community as a whole:")]),e._v(" "),e._m(23),e._v(" "),n("DocPreviousVersions"),e._v(" "),n("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"contributing-to-the-development-of-openhab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contributing-to-the-development-of-openhab","aria-hidden":"true"}},[this._v("#")]),this._v(" Contributing to the Development of openHAB")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"the-repositories"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-repositories","aria-hidden":"true"}},[this._v("#")]),this._v(" The Repositories")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"contribution-guidelines"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contribution-guidelines","aria-hidden":"true"}},[this._v("#")]),this._v(" Contribution Guidelines")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"pull-requests-are-always-welcome"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pull-requests-are-always-welcome","aria-hidden":"true"}},[this._v("#")]),this._v(" Pull Requests are Always Welcome")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("We're trying very hard to keep openHAB lean and focused. We don't want it\nto do everything for everybody. This means that we might decide against\nincorporating a new feature. However, there might be a way to implement\nthat feature "),t("em",[this._v("on top of")]),this._v(" openHAB.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"discuss-your-design-on-the-mailing-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#discuss-your-design-on-the-mailing-list","aria-hidden":"true"}},[this._v("#")]),this._v(" Discuss your Design on the Mailing List")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"create-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-issues","aria-hidden":"true"}},[this._v("#")]),this._v(" Create Issues...")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Any significant improvement should be documented as a GitHub\nissue in the "),t("a",{attrs:{href:"#the-repositories"}},[this._v("appropriate repository")]),this._v(" before anybody\nstarts working on it.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"but-check-for-existing-issues-first"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#but-check-for-existing-issues-first","aria-hidden":"true"}},[this._v("#")]),this._v(" ...but Check for Existing Issues First!")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"conventions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conventions","aria-hidden":"true"}},[this._v("#")]),this._v(" Conventions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("If it's a bugfix branch, name it XXX-something where XXX is the number of the\nissue")]),this._v(" "),t("li",[this._v("If it's a feature branch, create an enhancement issue to announce your\nintentions, and name it XXX-something where XXX is the number of the issue.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Before the pull request is merged, make sure that you squash your commits into\nlogical units of work using "),t("code",[this._v("git rebase -i")]),this._v(" and "),t("code",[this._v("git push -f")]),this._v(". After every\ncommit the test suite should be passing. Include documentation changes in the\nsame commit so that a revert would remove all traces of the feature or fix.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Commits that fix or close an issue should include a reference like "),t("code",[this._v("Closes #XXX")]),this._v("\nor "),t("code",[this._v("Fixes #XXX")]),this._v(", which will automatically close the issue when merged.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"merge-approval"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#merge-approval","aria-hidden":"true"}},[this._v("#")]),this._v(" Merge Approval")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("A change requires approval from an absolute majority of the maintainers of each\ncomponent affected. For example, if a change affects "),n("code",[e._v("addons/")]),e._v(" and "),n("code",[e._v("features/")]),e._v(", it\nneeds an absolute majority from the maintainers of "),n("code",[e._v("addons/")]),e._v(" AND, separately, an\nabsolute majority of the maintainers of "),n("code",[e._v("features/")]),e._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"sign-your-work"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sign-your-work","aria-hidden":"true"}},[this._v("#")]),this._v(" Sign your Work")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("Developer Certificate of Origin\nVersion 1.1\n\nCopyright (C) 2004, 2006 The Linux Foundation and its contributors.\n660 York Street, Suite 102,\nSan Francisco, CA 94110 USA\n\nEveryone is permitted to copy and distribute verbatim copies of this\nlicense document, but changing it is not allowed.\n\n\nDeveloper's Certificate of Origin 1.1\n\nBy making a contribution to this project, I certify that:\n\n(a) The contribution was created in whole or in part by me and I\n    have the right to submit it under the open source license\n    indicated in the file; or\n\n(b) The contribution is based upon previous work that, to the best\n    of my knowledge, is covered under an appropriate open source\n    license and I have the right under that license to submit that\n    work with modifications, whether created in whole or in part\n    by me, under the same open source license (unless I am\n    permitted to submit under a different license), as indicated\n    in the file; or\n\n(c) The contribution was provided directly to me by some other\n    person who certified (a), (b) or (c) and I have not modified\n    it.\n\n(d) I understand and agree that this project and the contribution\n    are public and that a record of the contribution (including all\n    personal information I submit with it, including my sign-off) is\n    maintained indefinitely and may be redistributed consistent with\n    this project or the open source license(s) involved.\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("Signed-off-by: Joe Smith <joe.smith@email.com> (github: github_handle)\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("Also-by: Ted Nerd <ted.nerd@email.com> (github: github_handle_ted)\nAlso-by: Sue Walker <sue.walker@email.com> (github: github_handle_sue)\nSigned-off-by: Joe Smith <joe.smith@email.com> (github: github_handle_joe)\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"small-patch-exception"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#small-patch-exception","aria-hidden":"true"}},[this._v("#")]),this._v(" Small Patch Exception")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Your patch fixes spelling or grammar errors.")]),this._v(" "),t("li",[this._v("Your patch is a single line change to documentation.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"how-can-i-become-a-maintainer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-become-a-maintainer","aria-hidden":"true"}},[this._v("#")]),this._v(" How can I Become a Maintainer?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"community-guidelines"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#community-guidelines","aria-hidden":"true"}},[this._v("#")]),this._v(" Community Guidelines")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("p",[this._v("Be nice: Be courteous, respectful and polite to fellow community members: no\nregional, racial, gender, or other abuse will be tolerated. We like nice people\nway better than mean ones!")])]),this._v(" "),t("li",[t("p",[this._v("Encourage diversity and participation: Make everyone in our community\nfeel welcome, regardless of their background and the extent of their\ncontributions, and do everything possible to encourage participation in\nour community.")])]),this._v(" "),t("li",[t("p",[this._v("Keep it legal: Basically, don't get us in trouble. Share only content that\nyou own, do not share private or sensitive information, and don't break the\nlaw.")])]),this._v(" "),t("li",[t("p",[this._v("Stay on topic: Make sure that you are posting to the correct channel\nand avoid off-topic discussions. Remember when you update an issue or\nrespond to an email you are potentially sending to a large number of\npeople.  Please consider this before you update.  Also remember that\nnobody likes spam.")])])])}],!1,null,null,null);r.options.__file="contributing.md";t.default=r.exports}}]);