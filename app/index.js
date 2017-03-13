'use strict';

var angular = require('angular');

module.exports = angular.module('TemplateApp', [
	require('./home').name, require('./home/home.template.html'),
	require('./global').name
]).config(require('./app.config'));