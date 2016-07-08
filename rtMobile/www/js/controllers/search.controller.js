(function(){
    'use strict';
    angular
    .module('app')
    .controller('SearchController',SearchController);

    SearchController.$inject = ['$scope','locationFactory','$ionicModal'];

    function SearchController ($scope, locationFactory,$ionicModal){
        var vm = this;
        vm.searchLocation = searchLocation;
        vm.citySelected = citySelected;
        vm.selectCity = slectCity;
        vm.selectableNames = [];

        $ionicModal.fromTemplateUrl('templates/modal.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;
        });

        function searchLocation(){
            if(vm.query == ''){
                vm.selectableNames = vm.suggestions;
            }else{
                locationFactory
                    .getAll(vm.query)
                    .then(function(data){
                        vm.selectableNames = data.items
                    })
                    .catch(function(error){
                        console.log(error)
                    });
            }
        }

        locationFactory
                .getNearly()
                .then(function (data) {
                    vm.selectableNames = data.suggestions;
                    vm.suggestions = data.suggestions;
                })
                .catch(function (error) {
                    console.log(error)
                });

        function citySelected(city, country){
            if(vm.type === 1){
                vm.origin = city+', '+ country;
            }else{
                vm.destination = city+', '+ country;
            }
            $scope.modal.hide()
        }
        function slectCity(type) {
            vm.type = type;
            $scope.modal.show()
        }

    }

})();
