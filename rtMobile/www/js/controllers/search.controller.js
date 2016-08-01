(function() {
    'use strict';
    angular
        .module('app')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['$scope', 'locationFactory', '$ionicModal', '$timeout'];

    function SearchController($scope, locationFactory, $ionicModal, $timeout) {
        var vm = this;
        vm.searchLocation = searchLocation;
        vm.citySelected = citySelected;
        vm.selectCity = selectCity;
        vm.selectableNames = [];

        $ionicModal.fromTemplateUrl('templates/modal.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;
        });

        function searchLocation() {
            console.log(vm.query)
            if (vm.query === '') {
                $timeout(function() {
                    vm.selectableNames = vm.suggestions;
                }, 1000);
            } else {
                locationFactory
                    .getAll(vm.query)
                    .then(function(data) {
                        vm.selectableNames = data
                    })
                    .catch(function(error) {
                        console.log(error)
                    });
            }
        }

        locationFactory
            .getNearly()
            .then(function(data) {
                vm.selectableNames = data;
                vm.suggestions = data;
            })
            .catch(function(error) {
                console.log(error)
            });

        function citySelected(city, country) {
            console.log(city);
            if (vm.type === 1) {
                vm.origin = city + ', ' + country;
            } else {
                vm.destination = city + ', ' + country;
            }
            $scope.modal.hide()
        }

        function selectCity(type) {
            vm.type = type;
            $scope.modal.show()
        }

    }

})();