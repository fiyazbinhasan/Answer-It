import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from '../services/quiz';
import { Question, Answer } from '../models/quiz.models';

@Component({
  selector: 'app-play',
  imports: [CommonModule],
  templateUrl: './play.html',
  styleUrl: './play.scss'
})
export class PlayComponent implements OnInit {
  questions: Question[] = [];
  currentQuestionIndex = 0;
  currentQuestion: Question | null = null;
  selectedAnswer: Answer | null = null;
  isAnswered = false;
  isRightAnswer = false;
  timerValue = 0;
  isTimerStopped = false;
  hasNext = false;
  gameOver = false;
  private timerId: any;
  
  private readonly TIMER_MAX_VALUE = 5;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.quizService.getQuestions().subscribe({
      next: (questions) => {
        this.questions = questions;
        this.startGame();
      },
      error: (error) => {
        console.error('Error loading questions:', error);
      }
    });
  }

  startGame(): void {
    this.currentQuestionIndex = 0;
    this.gameOver = false;
    this.hasNext = false;
    this.loadCurrentQuestion();
  }

  loadCurrentQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length) {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.resetQuestion();
      this.startTimer();
    }
  }

  resetQuestion(): void {
    this.selectedAnswer = null;
    this.isAnswered = false;
    this.isRightAnswer = false;
    this.timerValue = 0;
    this.isTimerStopped = false;
    this.hasNext = false;
  }

  giveAnswer(answer: Answer): void {
    if (this.isAnswered) return;
    
    this.selectedAnswer = answer;
    this.isAnswered = true;
    this.isRightAnswer = answer.result;
    this.stopTimer();
    this.checkGameState();
  }

  startTimer(): void {
    this.timerId = setInterval(() => {
      if (this.isAnswered || this.timerValue >= this.TIMER_MAX_VALUE) {
        this.stopTimer();
        this.checkGameState();
      } else {
        this.timerValue++;
      }
    }, 1000);
  }

  stopTimer(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    this.isTimerStopped = true;
  }

  checkGameState(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.hasNext = true;
    } else {
      this.gameOver = true;
    }
  }

  goNext(): void {
    this.currentQuestionIndex++;
    this.loadCurrentQuestion();
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
