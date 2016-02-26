(function () {
    'use strict';

    angular
        .module('answerit')
        .service('PlayService', PlayService);

    PlayService.$inject = ['$http'];

    function PlayService($http) {
        this.getQas = getQas;

        function getQas() {
            return $http({
                'url': '/api/qas',
                'method': 'GET',
                'content-type': 'application/json'
            }).then(function (qas) {
                return qas;
            });
        }
    }
})();