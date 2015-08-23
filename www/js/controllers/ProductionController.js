InterInstrumentApp.controller("ProductionController", function($scope, $rootScope, $state) {
    $rootScope.imageSrc='production';
    $rootScope.leftMenu=[
        {text:'Технологии',url:'technology'},
        {text:'Производство',url:'production'},
        {text:'Сервис',url:'service'}
    ];
    $rootScope.menuHide = '';
    $rootScope.activePage='production';
    $rootScope.activeSubPage='production';
});