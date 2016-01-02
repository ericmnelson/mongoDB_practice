var myApp = angular.module("myApp");

myApp.controller("customersController", ["$scope", "$http", "$location","$routeParams" , function($scope, $http, $location, $routeParams){
	console.log("Customer Controller Initialized");

	$scope.getCustomers = function(){
		console.log("Getting customers?")
		$http.get("/api/customers").success(function(response){
			console.log(response)
			$scope.customers = response;
		});
	}

	$scope.getCustomerInvoices = function(){
		var id = $routeParams.id;
		$http.get("/api/invoices/customer/"+id).success(function(response){
			$scope.customerInvoices = response;
		});
	}

	$scope.getCustomer = function(){
		var id = $routeParams.id;
		$http.get("/api/customers/"+id).success(function(response){
			$scope.customer = response;
		});
	}

	$scope.addCustomer = function(){
		$http.post('/api/customers/',$scope.customer).success(function(response){
			window.location.href='/#customers';
			console.log("Added Customer!")
		});
	}

	$scope.updateCustomer = function(){
		$http.put('/api/customers/'+$scope.customer._id,$scope.customer).success(function(response){
			window.location.href='/#customers';
			console.log("Updated Customer!")
		});
	}

	$scope.deleteCustomer = function(id){
		$http.delete('/api/customers/'+id).success(function(response){
			window.location.href='/#customers';
			console.log("Deleted Customer!")
		});
	}
}]);