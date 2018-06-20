/* personalPortfolio app.js */

var app = angular.module("PersonalPortfolioApp", ["ngRoute", "ui.bootstrap"]);

app.config(function($routeProvider) {

    $routeProvider

        .when("/", {
            templateUrl: "./templates/technologies.html",
            controller: "TechnologiesController"
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

app.directive("resize", function($window) {

    return function(scope) {

        scope.width = $window.innerWidth;
        scope.height = $window.innerHeight;
        angular.element($window).on("resize", function() {

            scope.$apply(function() {

                scope.width = $window.innerWidth;
                console.log(scope.width);
                scope.height = $window.innerHeight;
            });
        });
    };
});