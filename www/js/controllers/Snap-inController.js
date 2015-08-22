InterInstrumentApp.controller("Snap-inController", function($scope, $rootScope, $state) {
    $rootScope.imageSrc='products'
    $rootScope.leftMenu=[
        {text:'Оборудование',url:'equipment'},
        {text:'Инструмент',url:'tool'},
        {text:'Оснастка',url:'snap-in'}
    ];
    $rootScope.menuHide = '';
    $rootScope.activePage='equipment';
});