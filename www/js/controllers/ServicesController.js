InterInstrumentApp.controller("ServicesController", function($scope, $rootScope, $state) {
    $rootScope.imageSrc='services';
    $rootScope.leftMenu=[
        {text:'Проектирование',url:'engineering'},
        {text:'Изготовление',url:'manufacture'},
        {text:'Сопровождение',url:'maintenance'}
    ];
    $rootScope.menuHide = '';
    $rootScope.activePage='engineering';
});