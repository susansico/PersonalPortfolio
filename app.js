/* personalPortfolio app.js */

var app = angular.module("PersonalPortfolioApp", ["ui.router", "ui.bootstrap", "ngAnimate"]);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider

        .otherwise("/");

    $stateProvider

        .state("/", {
            url: "/",
            templateUrl: "/templates/home.html"
        })
        .state("technologies", {
            url: "/technologies",
            templateUrl: "/templates/technologies.html"
        })
        .state("projects", {
            url: "/projects",
            templateUrl: "/templates/projects.html"
        })
        .state("contact", {
            url: "/contact",
            templateUrl: "/templates/contact.html"
        });
});

app.controller("NavbarCollapse",["$scope", function($scope) {

    $scope.isNavCollapsed = true;

    $scope.addClass = function(elementId) {

    let element = document.getElementById(elementId);

        element.classList.add("collapsed");
    };

    $scope.removeClass = function(elementId) {

        let element = document.getElementById(elementId);

        element.classList.remove("collapsed");
    };

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

