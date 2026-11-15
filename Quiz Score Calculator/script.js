function isAnswerCorrect(question, userAnswer){
  if (!userAnswer){
    return false;
  }
  
  if (question.correctAnswer === userAnswer.answer){
    return true;
  }
  
  return false;
}


function countCorrectAnswer(questions, userAnswers){
  let x = 0;
  
  for (let question of questions){
    let userAnswer0 = userAnswers.find((userAnswer) => 
      userAnswer.questionId === question.id)
      
      if (isAnswerCorrect(question, userAnswer0)){
        x += 1;
      }
    x += 0;
  }
  
  return x;
}


function calculatePercentage(correctCount, totalQuestions){
  
  let percentage0 = (correctCount / totalQuestions) * 100;
  return percentage0;
  
  
}

function getResultMessage(percentage) {
  if (percentage >= 80) {
    return 'Great work';
  }
  if (percentage >= 60) {
    return 'You passed';
  }
  return 'Keep practicing';
}

function createQuizResult(questions, userAnswers){
  
  let correctCount = countCorrectAnswer(questions, userAnswers);
  let totalQuestions = questions.length;
  let percentage = calculatePercentage(correctCount, totalQuestions);
  let message = getResultMessage(percentage);
  
  return {
    
    correctCount : correctCount,
    totalQuestions : totalQuestions,
    percentage : percentage,
    message : message
    
    
  }

}


const questions = [
  { id: 1, correctAnswer: 'B' },
  { id: 2, correctAnswer: 'A' },
  { id: 3, correctAnswer: 'D' },
  { id: 4, correctAnswer: 'C' },
];
const userAnswers = [
  { questionId: 1, answer: 'B' },
  { questionId: 2, answer: 'C' },
  { questionId: 3, answer: 'D' },
  { questionId: 4, answer: 'C' },
];
console.log(createQuizResult(questions, userAnswers));
console.log(countCorrectAnswer(questions, userAnswers));
console.log(calculatePercentage(3, questions.length));
const partialAnswers = [{ questionId: 1, answer: 'B' }];
console.log(createQuizResult(questions, partialAnswers));