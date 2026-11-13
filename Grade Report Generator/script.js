function getLetterGrade(score){
  if (score >= 90){
    return "A";
  }
  if (score >= 80 && score < 90){
    return "B";
  }
  if (score >= 70 && score < 80){
    return "C";
  }
  if (score >= 60 && score < 70){
    return "D";
  }
  if (score < 60 ){
    return "F";
  }
  
}

function hasPassed(score){
    if (getLetterGrade(score) !== "F"){
      return true;
    }
return false;  
}


function getFeedback(grade){
    
    if (grade === "A"){
      return `Excellent Work!!`;
    }
    
    if (grade === "B"){
      return `GREAT JOB!!`;
    }
    
    if (grade === "C" || grade === "D"  ){
      return `You passed!!`;
    }
    
     if (grade === "F"){
      return `Keep practicing!`;
    }
     
    }
    
  



function createGradeReport(name, score){
    
    let grade0 = getLetterGrade(score);
    
    
    return {
      name: name,
      score: score,
      passed: hasPassed(score),
      feedback: getFeedback(grade0)
      
      
      
      
    }
  
  
  
  
  
}

console.log(createGradeReport('Ava', 92));
console.log(createGradeReport('Noah', 48));
console.log(createGradeReport('Mina', 75));
console.log(createGradeReport('Sam', 60));