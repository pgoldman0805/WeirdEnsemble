/*global alert, angular */
(function () {
    "use strict";

    var myApp = angular.module("myApp", ["ngRoute"]);

    myApp.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "templates/main.html"
            })
            .when("/about", {
                templateUrl: "templates/about.html"
            })
            .when("/products", {
                templateUrl: "templates/products.html"
            })
            .when("/product-details/:prod_id", {
                templateUrl: "templates/product-details.html",
                controller: "productDetailsController"
            })
            .when("/contact", {
                templateUrl: "templates/contact.html"
            })
            .when("/login", {
                templateUrl: "templates/login.html"
            })
            .when("/register", {
                templateUrl: "templates/register.html"
            })
            .otherwise({
                templateUrl: "templates/error.html"
            });
    });

    myApp.controller("productDetailsController", function ($scope) {
        $scope.prod_id = "";
    });

}());