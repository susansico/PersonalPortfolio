/* personalPortfolio app.js */

var app = angular.module("PersonalPortfolioApp", ["ngRoute", "ui.bootstrap"]);

app.config(function($routeProvider) {

    $routeProvider

        .when("/", {
            templateUrl: "./templates/home.html",
            controller: "HomeController"
        })
        .when("/projects", {
            templateUrl: "./templates/projects.html",
            controller: "ProjectsController"
        })
        .when("/about", {
            templateUrl: "./templates/about.html",
            controller: "AboutController"
        });
});

app.controller("NavbarCollapse",["$scope", function($scope) {

    $scope.isNavCollapsed = true;
}]);