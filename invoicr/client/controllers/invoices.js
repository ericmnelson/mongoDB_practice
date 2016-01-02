var myApp = angular.module("myApp");

myApp.controller("invoicesContoller", ["$scope", "$http", "$location","$routeParams" , function($scope, $http, $location, $routeParams){
	console.log("Invoices Controller Initialized");

	$scope.getCustomers = function(){
		console.log("Getting customers?")
		$http.get("/api/customers").success(function(response){
			console.log(response)
			$scope.customers = response;
		});
	}

	$scope.getInvoices = function(){
		$http.get("/api/invoices").success(function(response){
			$scope.invoices = response;

		});
	}

	$scope.getInvoice = function(){
		var id = $routeParams.id;
		console.log("Getting invoice");
		$http.get("/api/invoices/"+id).success(function(response){
			$scope.invoice = response;
			//Fill Select
			$scope.invoice.customer_id = response.customer._id;
			$scope.invoice.status = response.invoice.status;
		});
	}

	$scope.addInvoice = function(){
		$http.post('/api/invoices/',$scope.invoice).success(function(response){
			window.location.href='/#invoices';
			console.log("Added Invoice!")
		});
	}

	$scope.updateInvoice = function(){
		$http.put('/api/invoices/'+$scope.invoice._id,$scope.invoice).success(function(response){
			window.location.href='/#invoices';
			console.log("Updated Invoice!")
		});
	}

	$scope.deleteInvoice = function(id){
		$http.delete('/api/invoices/'+id).success(function(response){
			window.location.href='/#invoices';
			console.log("Deleted Invoice!")
		});
	}
}]);