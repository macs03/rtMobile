(function () {
    'use strict';
    angular
        .module('app')
        .factory('locationFactory',locationFactory);

        locationFactory.$inject = ['$http','$q','apiRtUrl'];

        function locationFactory($http,$q,apiRtUrl){
            return {
                getAll: getAll,
                getNearly: getNearly 
            }

            function getAll(query) {
                var defered = $q.defer();
                var promise = defered.promise;
                var destination = [];

                $http({
                    cache: false,
                    method:'GET',
                    url: apiRtUrl+'destinations/?q='+query
                })
                .success(function (data) {
                    defered.resolve(data);
                })
                .error(function (error) {
                    defered.reject(err);
                });

                return promise;
            }

            function getNearly() {
                var defered = $q.defer();
                var promise = defered.promise;

                $http({
                    cache: false,
                    method:'GET',
                    url: apiRtUrl+'geolocate/?language=es',
                })
                .success(function(data) {
                    defered.resolve(data);
                })
                .error(function(err) {
                    defered.reject(err);
                });

            return promise;
            }

        }
})();