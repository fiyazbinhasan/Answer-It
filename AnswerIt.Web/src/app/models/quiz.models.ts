export interface Answer {
  answer: string;
  result: boolean;
}

export interface Question {
  question: string;
  answers: Answer[];
}
