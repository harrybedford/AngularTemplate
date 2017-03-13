'use strict';

var angular = require('angular');

module.exports = angular.module('TemplateApp.global', [])
	.controller('NavController', require('./nav.controller'));