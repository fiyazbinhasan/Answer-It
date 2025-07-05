export interface Answer {
  text: string;
  result: boolean;
}

export interface Question {
  text: string;
  answers: Answer[];
}