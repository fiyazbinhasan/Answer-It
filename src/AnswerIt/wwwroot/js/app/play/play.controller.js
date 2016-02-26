(function () {
    'use strict';

    angular
        .module('answerit')
        .controller('PlayController', PlayController);

    PlayController.$inject = ['PlayService', 'qas', '$timeout'];

    function PlayController(PlayService, qas, $timeout) {
        var vm = this;

        var TIMER_MAX_VALUE = 5;

        vm.timer = timer;
        vm.giveAnswer = giveAnswer;
        vm.goNext = goNext;
        vm.startAgain = startAgain;

        function giveAnswer(ans) {
            vm.selectedAnswer = ans;
            vm.isAnswered = true;
            vm.isRightAnswer = ans.result;
        }

        function goNext() {
            vm.current++;

            vm.currentQuestion = vm.qas[vm.current].question;
            vm.currentAnswers = vm.qas[vm.current].answers;

            vm.timerValue = 0;
            vm.isTimerStopped = false;
            vm.isAnswered = false;
            vm.isRightAnswer = false;

            vm.timer();

        }

        function startAgain() {
            activate();
        }

        function timer() {
            $timeout(function () {
                if (vm.isAnswered || (vm.timerValue === TIMER_MAX_VALUE)) {
                    vm.isTimerStopped = true;
                    if (vm.current < vm.qasCount - 1) {
                        vm.hasNext = true;
                    } else {
                        vm.hasNext = false;
                        vm.gameOver = true;
                    }
                } else {
                    vm.timerValue++;
                    vm.timer();
                }
            }, 1000);
        }

        activate();

        function activate() {
            vm.qas = qas.data;
            vm.qasCount = vm.qas.length;

            vm.current = 0;
            vm.hasNext = false;
            vm.gameOver = false;


            vm.timerValue = 0;
            vm.isTimerStopped = false;
            vm.isAnswered = false;
            vm.isRightAnswer = false;


            vm.currentQuestion = vm.qas[vm.current].question;
            vm.currentAnswers = vm.qas[vm.current].answers;

            vm.timer();
        }
    }
})();