/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"logalig/project_fiori_ctm/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
