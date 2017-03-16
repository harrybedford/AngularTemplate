'use strict';

var angular = require('angular');

module.exports = angular.module('TemplateApp.global', [require('angular-ui-router')])
	.controller('NavController', require('./nav.controller'));