var chrome = angular.module('ChromeExtension', []);

chrome.factory('ChromeFactory',function($http){

	var ChromeFactory ={};

	ChromeFactory.fetchAll = function() {
		return $http.get('/users')
			.then(function(response) {
				return response.data;
			})
	};

	ChromeFactory.getCsv = function(){
		return $http.get('/csv')
			.then(function(response){
				return response.data;
			})
	}


	return ChromeFactory;
})

chrome.controller('chromeCtrl', function ($scope,ChromeFactory ) {

 	ChromeFactory.fetchAll()
 		.then(function(data){
 			$scope.userData = data;
 			console.log($scope.userData);
 		})

 	$scope.csv = function (){
 		ChromeFactory.getCsv()
 			.then(function(response){
 				console.log(response);
 			})
 	}	

});