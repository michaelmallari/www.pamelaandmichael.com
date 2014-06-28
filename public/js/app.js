var myModule = angular.module('pmApp', ['ngRoute', 'ngAnimate']);


myModule.controller('ctaCtrl', function($scope) {
	$scope.detailsVisible = true;
	$scope.setDetailsVisible = function (visible) {
		$scope.detailsVisible = visible;
	};


	$scope.bottomNavItems = [
		{name:'About', url:'/about/'},
		{name:'Terms of Use', url:'/terms/'},
		{name:'Privacy Policy', url:'/privacy/'},
		{name:'Contact', url:'/contact/'}
	];    
});
