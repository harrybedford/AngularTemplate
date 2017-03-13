'use strict';

module.exports = ['$state', 
	function ($state) {

		var vm = this;

		vm.navList = [
			{
				name: 'Home',
				state: 'home'
			},{
				name: 'About',
				state: 'about'
			},
		];

	}
];