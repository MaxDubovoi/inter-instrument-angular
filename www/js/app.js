var InterInstrumentApp = angular.module("InterInstrumentApp", ['LocalStorageModule', 'ui.router']);

InterInstrumentApp.config(function (localStorageServiceProvider, $httpProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

    $stateProvider
        .state('aboutCompany', {
            url: "/",
            templateUrl: "/views/about.html",
            controller: 'AboutCompanyController'
        })
        .state('products', {
            url: "/products",
            templateUrl: "/views/products.html",
            controller: 'ProductsController'
        })
        .state('contacts', {
            url: "/contacts",
            templateUrl: "/views/contacts.html",
            controller: 'ContactsController'
        })
        .state('production', {
            url: "/production",
            templateUrl: "/views/production.html",
            controller: 'ProductionController'
        })
        .state('services', {
            url: "/services",
            templateUrl: "/views/services.html",
            controller: 'ServicesController'
        })
});

