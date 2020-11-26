const calcy = () => {
  let wd = document.getElementById('wd').value;
  let maths = document.getElementById('maths').value;
  let comp = document.getElementById('comp').value;
  let phy = document.getElementById('phy').value;

  let total_grades = Number(wd) + Number(maths) + Number(comp) + Number(phy);

  let percentage = (total_grades / 400) * 100;

  let grades;

  if (percentage <= 100 && percentage >= 80) {
    grades = 'A';
  } else if (percentage < 79 && percentage >= 60) {
    grades = 'B';
  } else if (percentage < 60 && percentage >= 40) {
    grades = 'C';
  } else {
    grades = 'F';
  }

  if (percentage >= 39.5) {
    document.getElementById(
      'showData'
    ).innerHTML = `Out of 400 your total is ${total_grades} and percentage is ${percentage}%. <br> Your Grade is ${grades}. Your are pass.`;
  } else {
    document.getElementById(
      'showData'
    ).innerHTML = `Out of 400 your total is ${total_grades} and percentage is ${percentage}%. <br> Your Grade is ${grades}. Your are fail.`;
  }
};
