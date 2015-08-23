var InterInstrumentApp = angular.module("InterInstrumentApp", ['LocalStorageModule', 'ui.router']);

InterInstrumentApp.config(function (localStorageServiceProvider, $httpProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

    $stateProvider
        .state('contacts', {
            url: "/contacts",
            templateUrl: "/views/contacts.html",
            controller: 'ContactsController'
        })
    /*ABOUT COMPANY MENU*/
        .state('history', {
            url: "/",
            templateUrl: "/views/aboutCompany/history.html",
            controller: 'HistoryController'
        })
        .state('aim', {
            url: "/aim",
            templateUrl: "/views/aboutCompany/aim.html",
            controller: 'AimController'
        })
        .state('vacancy', {
            url: "/vacancy",
            templateUrl: "/views/aboutCompany/vacancy.html",
            controller: 'VacancyController'
        })
        .state('partner', {
            url: "/partners",
            templateUrl: "/views/aboutCompany/partner.html",
            controller: 'PartnersController'
        })
    /*PRODUCTS MENU*/
        .state('equipment', {
            url: "/equipment",
            templateUrl: "/views/products/equipment.html",
            controller: 'EquipmentController'
        })
        .state('tool', {
            url: "/tool",
            templateUrl: "/views/products/tool.html",
            controller: 'ToolController'
        })
        .state('snap-in', {
            url: "/snap-in",
            templateUrl: "/views/products/snap-in.html",
            controller: 'Snap-inController'
        })
    /*SERVICES MENU*/
        .state('engineering', {
            url: "/engineering",
            templateUrl: "/views/services/engineering.html",
            controller: 'EngineeringController'
        })
        .state('manufacture', {
            url: "/manufacture",
            templateUrl: "/views/services/manufacture.html",
            controller: 'ManufactureController'
        })
        .state('maintenance', {
            url: "/maintenance",
            templateUrl: "/views/services/maintenance.html",
            controller: 'MaintenanceController'
        })
    /*PRODUCTION MENU*/
        .state('technology', {
            url: "/technology",
            templateUrl: "/views/production/technology.html",
            controller: 'TechnologyController'
        })
        .state('production', {
            url: "/production",
            templateUrl: "/views/production/production.html",
            controller: 'ProductionController'
        })
        .state('service', {
            url: "/service",
            templateUrl: "/views/production/service.html",
            controller: 'ServiceController'
        })

});