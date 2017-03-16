'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider) {
    
	    $urlRouterProvider.otherwise('/');
	    
	    $stateProvider
	        .state('home', {
	            url: '/',
	            templateUrl: 'home.template.html',
	            controller: 'HomeController as vm'
	        });
	        
	}
];