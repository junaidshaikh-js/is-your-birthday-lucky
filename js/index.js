const dateOfBirth = document.querySelector("#dob");

const luckyNumber = document.querySelector("#lucky-number");

const form = document.querySelector("form");

function isNumberLucky(dob, number) {
  let dateString = dob.replaceAll("-", "");
  let array = dateString.split("");
  console.log(array);

  let sumOfBirthDate = array.reduce((a, b) => {
    return Number(a) + Number(b);
  }, 0);

  if (!(sumOfBirthDate % number)) {
    return true;
  }
  return false;
}

function flush(bool, Number) {
  let para = document.createElement("p");

  if (bool) {
    para.innerText = `${Number} is a Lucky Number!! 🎉`;
  } else {
    para.innerText = `${Number} is NOT a Lucky Number!! 😟`;
  }

  para.setAttribute("class", "result");
  form.after(para);

  setTimeout(() => {
    para.remove();
    dateOfBirth.value = "";
    luckyNumber.value = "";
  }, 3000);
}

function showLuckyNumber(e) {
  let dob = dateOfBirth.value;
  let number = +luckyNumber.value;

  let isLucky = isNumberLucky(dob, number);

  flush(isLucky, number);
  e.preventDefault();
}

form.addEventListener("submit", showLuckyNumber);
