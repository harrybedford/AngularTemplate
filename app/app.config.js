'use strict';

module.exports = function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvide
        .state('home', {
            url: '/',
            templateUrl: './home/template.html',
            controller: 'HomeController as vm'
        });
        
};