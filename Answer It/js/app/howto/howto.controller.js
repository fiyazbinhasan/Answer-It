(function () {
    'use strict';

    angular
        .module('answerit')
        .controller('HowToController', HowToController);

    HowToController.$inject = [];

    function HowToController() {
        var vm = this;

        vm.howto = "Welcome to Answer It! A game for every age of people. Start the game and try answering all the questions in the limited amout of time. If you get all the answers correct, You will get the glorious prize of 'NOTHING'";

        activate();

        ////////////////

        function activate() {}
    }
})();