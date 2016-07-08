(function(){
    'use strict';
    angular
    .module('app')
    .controller('SearchController',SearchController);

    SearchController.$inject = ['$scope','locationFactory'];

    function SearchController ($scope, locationFactory){
        var vm = this;
        vm.searchLocationOrigin = searchLocationOrigin;
        vm.searchLocationDestination = searchLocationDestination;

        function searchLocationOrigin(){
            locationFactory
            .getAll(vm.origin)
            .then(function(data){
                console.log(data)
            })
            .catch(function(error){
                console.log(error)
            });
        }

        function searchLocationDestination(){
            locationFactory
            .getAll(vm.destination)
            .then(function(data){
                console.log(data)
            })
            .catch(function(error){
                console.log(error)
            });
        }

        locationFactory
                .getNearly()
                .then(function (data) {
                    console.log(data)
                })
                .catch(function (error) {
                    console.log(error)
                });

    }

})();
