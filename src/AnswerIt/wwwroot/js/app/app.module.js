(function () {
    'use strict';

    angular.module('answerit', [
        'ui.router'
    ])
        .config(['$urlRouterProvider', '$stateProvider', configRoutes])
        .run(['$rootScope', '$state', configureStateWithScope]);

    function configRoutes($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/play');

        $stateProvider
            .state('play', {
                url: '/play',
                templateUrl: 'templates/play.html',
                controller: 'PlayController',
                controllerAs: 'vm',
                resolve: {
                    qas: ['PlayService', function (PlayService) {
                        return PlayService.getQas();
                    }]
                }
            })
            .state('howto', {
                url: '/howto',
                templateUrl: 'templates/howto.html',
                controller: 'HowToController',
                controllerAs: 'vm'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'templates/about.html',
                controller: 'AboutController',
                controllerAs: 'vm'
            });
    }

    function configureStateWithScope($rootScope, $state) {
        $rootScope.$state = $state;
    }
})();