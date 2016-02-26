(function () {
    'use strict';

    angular
        .module('answerit')
        .controller('AboutController', AboutController);

    AboutController.$inject = [];

    function AboutController() {
        var vm = this;

        vm.about = "This app is crated using Angular.js and Asp.Net Core 1.0. To know more about Angular.js, please go to https://angularjs.org/ and for ASP.net Core 1.0, go to https://docs.asp.net/en/latest/";

        activate();

        ////////////////

        function activate() {}
    }
})();