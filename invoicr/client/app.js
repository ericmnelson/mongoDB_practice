var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function($routeProvider){
	$routeProvider.when("/", {
		controller: "DashboardController",
		templateUrl: "views/dashboard.html"
	})
	.when("/customers", {
		controller: "customersController",
		templateUrl: "views/customers.html"
	})
	.when("/customers/details/:id", {
		controller: "customersController",
		templateUrl: "views/customer_details.html"
	})
	.when("/invoices", {
		controller: "invoicesContoller",
		templateUrl: "views/invoices.html"
	})
	.when("/invoices/details/:id", {
		controller: "invoicesContoller",
		templateUrl: "views/invoice_details.html"
	})
	.when("/customers/add", {
		controller: "customersController",
		templateUrl: "views/add_customer.html"
	})
	.when("/invoices/add", {
		controller: "invoicesContoller",
		templateUrl: "views/add_invoice.html"
	})
	.when("/customers/edit/:id", {
		controller: "customersController",
		templateUrl: "views/edit_customer.html"
	})
	.when("/invoices/edit/:id", {
		controller: "invoicesContoller",
		templateUrl: "views/edit_invoice.html"
	})
	
	.otherwise({
		redirectTo: "/"
	});
});