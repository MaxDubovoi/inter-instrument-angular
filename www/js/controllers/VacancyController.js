InterInstrumentApp.controller("VacancyController", function($scope, $rootScope, $state) {
    $rootScope.imageSrc='aboutCompany';
    $rootScope.leftMenu=[
        {text:'История',url:'history'},
        {text:'миссия и цели',url:'aim'},
        {text:'Вакансии',url:'vacancy'},
        {text:'Партнеры',url:'partner'}
    ];
    $rootScope.menuHide = '';
    $rootScope.activePage='history';

});