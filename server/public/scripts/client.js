var app = angular.module('CarApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/company.html',
        controller: 'CompanyController as vm'
    }).when('/cars', {
        templateUrl: '/views/cars.html',
        controller: 'CarsController as vm'
    }).when('/company',{
        redirectTo:'/'
    }).otherwise({
        // redirectTo: '/'   This redirects to companypage
        template: '<div>404</div>'
    })
});

// 



app.controller