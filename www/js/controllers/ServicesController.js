InterInstrumentApp.controller("ServicesController", function($scope, $rootScope, $state) {
    $rootScope.imageSrc='services';
    $rootScope.leftMenu=[
        {text:'Проектирование',url:'design'},
        {text:'Изготовление',url:'manufacture'},
        {text:'Сопровождение',url:'maintenance'}
    ]
});