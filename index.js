//------------------------------problem 1---------------------------

function calculateTax(income, expenses) {
  if (income <= 0 || expenses <= 0) {
    return "Invalid Input";
  }
  let incomeExpensesDiff = income - expenses;
  let tax = incomeExpensesDiff * 0.2;

  return tax;
}

// console.log(calculateTax(10000, 3000));
// console.log(calculateTax(34000, 1753));
// console.log(calculateTax(5000, 1500));
// console.log(calculateTax(7000, 7000));
// console.log(calculateTax(-5000, 2000));
// console.log(calculateTax(6000, -1500));

//------------------------------problem 2---------------------------

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

// console.log("zihad@gmail.com".split("@"));
// sendNotification("zihad@gmail.com");
// console.log(sendNotification("zihad@gmail.com"));
// console.log(sendNotification("farhan34@yahoo.com"));
// console.log(sendNotification("nadim.naem5@outlook.com"));
// console.log(sendNotification("fahim234.hotmail.com"));
// console.log(sendNotification("sadia8icloud.com"));

//------------------------------problem 3---------------------------

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
// console.log(checkDigitsInName("Raj123"));
// console.log(checkDigitsInName("Suman"));
// console.log(checkDigitsInName("Name2024"));
// console.log(checkDigitsInName("!@#"));
// console.log(checkDigitsInName(["Raj"]));
// name("Raj123");

//------------------------------problem 4---------------------------

function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input  ";
  }
  let totalMarks = obj.testScore + obj.schoolGrade;
  if (obj.isFFamily) {
    totalMarks = totalMarks + totalMarks + 20;
  }
  if (obj.isFFamily && totalMarks >= 80) {
    return true;
  } else {
    return false;
  }
}

// console.log(
//   calculateFinalScore({
//     name: "Rajib",
//     testScore: 45,
//     schoolGrade: 25,
//     isFFamily: true,
//   })
// );
// console.log(
//   calculateFinalScore({
//     name: "Rajib",
//     testScore: 45,
//     schoolGrade: 25,
//     isFFamily: false,
//   })
// );
// console.log(calculateFinalScore("hello"));
// console.log(
//   calculateFinalScore({
//     name: "Rajib",
//     testScore: 15,
//     schoolGrade: 25,
//     isFFamily: true,
//   })
//);
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: true,
  })
);
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: false,
  })
);
console.log(calculateFinalScore("hello"));
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 15,
    schoolGrade: 25,
    isFFamily: true,
  })
);

//------------------------------problem 5---------------------------

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
// console.log(waitingTime([3, 5, 7, 11, 6], 10));
// console.log(waitingTime([13, 2], 6));
// console.log(waitingTime([13, 2, 6, 7, 10], 6));
// console.log(waitingTime([6], 4));
// console.log(waitingTime(7, 10));
// console.log(waitingTime("[6,2]", 9));
// console.log(waitingTime([7, 8, 3, 4, 5], "9"));
