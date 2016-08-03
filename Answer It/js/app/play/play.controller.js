(function () {
    'use strict';

    angular
        .module('answerit')
        .controller('PlayController', PlayController);

    PlayController.$inject = ['$interval'];

    function PlayController($interval) {
        var vm = this;

        var TIMER_MAX_VALUE = 5;

        vm.timerValue = 0;
        vm.isTimerStopped = false;
        vm.isAnswered = false;
        vm.isRightAnswer = false;

        vm.timer = timer;
        vm.giveAnswer = giveAnswer;

        function giveAnswer(ans) {
            vm.selectedAnswer = ans;
            vm.isAnswered = true;
            vm.isRightAnswer = ans.result;
        }

        function timer() {
            $interval(function () {
                if (vm.isAnswered || (vm.timerValue === TIMER_MAX_VALUE)) {
                    vm.isTimerStopped = true;
                } else {
                    vm.timerValue++;
                }
            }, 1000);
        }

        activate();

        function activate() {
            vm.question = "What is the scientific name of Leopard?";

            vm.answers = [{
                    "answer": "Panthera tigris",
                    "result": false
                },
                {
                    "answer": "Panthera leo",
                    "result": false
                },
                {
                    "answer": "Vulpes vulpes",
                    "result": false
                },
                {
                    "answer": "Panthera pardus",
                    "result": true
                }];

            vm.timer();
        }
    }
})();