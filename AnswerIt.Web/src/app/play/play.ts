import { Component, OnInit, OnDestroy, inject, signal, computed } from '@angular/core';
import { Quiz } from '../services/quiz';
import { Question, Answer } from '../models/quiz.models';

@Component({
  selector: 'app-play',
  imports: [],
  templateUrl: './play.html',
  styleUrl: './play.scss',
})
export class Play implements OnInit, OnDestroy {
  private readonly quizService = inject(Quiz);
  private readonly TIMER_MAX_VALUE = 5;
  private timerId: ReturnType<typeof setInterval> | null = null;

  questions = signal<Question[]>([]);
  currentQuestionIndex = signal(0);
  selectedAnswer = signal<Answer | null>(null);
  isAnswered = signal(false);
  isRightAnswer = signal(false);
  timerValue = signal(0);
  isTimerStopped = signal(false);
  hasNext = signal(false);
  gameOver = signal(false);

  currentQuestion = computed(() => this.questions()[this.currentQuestionIndex()] ?? null);

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.quizService.getQuestions().subscribe({
      next: (questions) => {
        this.questions.set(questions);
        this.startGame();
      },
      error: (error) => {
        console.error('Error loading questions:', error);
      }
    });
  }

  startGame(): void {
    this.currentQuestionIndex.set(0);
    this.gameOver.set(false);
    this.hasNext.set(false);
    this.resetQuestion();
    this.startTimer();
  }

  resetQuestion(): void {
    this.selectedAnswer.set(null);
    this.isAnswered.set(false);
    this.isRightAnswer.set(false);
    this.timerValue.set(0);
    this.isTimerStopped.set(false);
    this.hasNext.set(false);
  }

  giveAnswer(answer: Answer): void {
    if (this.isAnswered()) return;

    this.selectedAnswer.set(answer);
    this.isAnswered.set(true);
    this.isRightAnswer.set(answer.result);
    this.stopTimer();
    this.checkGameState();
  }

  startTimer(): void {
    this.timerId = setInterval(() => {
      if (this.isAnswered() || this.timerValue() >= this.TIMER_MAX_VALUE) {
        this.stopTimer();
        this.checkGameState();
      } else {
        this.timerValue.update(v => v + 1);
      }
    }, 1000);
  }

  stopTimer(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    this.isTimerStopped.set(true);
  }

  checkGameState(): void {
    if (this.currentQuestionIndex() < this.questions().length - 1) {
      this.hasNext.set(true);
    } else {
      this.gameOver.set(true);
    }
  }

  goNext(): void {
    this.currentQuestionIndex.update(i => i + 1);
    this.resetQuestion();
    this.startTimer();
  }

  startAgain(): void {
    this.startGame();
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }
}
