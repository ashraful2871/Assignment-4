function calculateTax(income, expenses) {
  if (income <= 0 || expenses <= 0) {
    return "Invalid Input";
  }
  let incomeExpensesDiff = income - expenses;
  let tax = incomeExpensesDiff * 0.2;

  return tax;
}

function sendNotification(email) {
  if (email.indexOf("@") === -1) {
    return "Invalid Email";
  }
  let emailParts = email.split("@");
  let part1 = emailParts[0];
  let part2 = emailParts[1];
  let addParts = part1 + " sent you an email from " + part2;
  return addParts;
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  let checkNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let char of name) {
    if (checkNumbers.includes(char)) {
      return true;
    }
  }
  return false;
}

function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input  ";
  }
  let totalMarks = obj.testScore + obj.schoolGrade;
  if (obj.isFFamily) {
    totalMarks = totalMarks + totalMarks * 0.2;
  }
  if (obj.isFFamily && totalMarks >= 80) {
    return true;
  } else {
    return false;
  }
}

function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }
  let sum = 0;
  for (let time of waitingTimes) {
    sum += time;
  }
  let avg = sum / waitingTimes.length;
  let roundedAvg = Math.round(avg);

  let beforeEsratPeople = serialNumber - 1;
  let remainingPeople = beforeEsratPeople - waitingTimes.length;
  let waitTime = remainingPeople * roundedAvg;
  return waitTime;
}
