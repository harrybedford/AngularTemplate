'use strict';

var angular = require('angular');

module.exports = angular.module('TemplateApp.home', [])
	.controller('HomeController', require('./home.controller'));