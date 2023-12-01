"use strict";

// input
const nameInput = document.getElementById("nameInput");
const amountInput = document.getElementById("amountInput");

// date
const date = new Date();

// ui
const balance = document.getElementById("accBalance");
const income = document.getElementById("income");
const outcome = document.getElementById("outcome");

// button
const incomeBtn = document.getElementById("incomeBtn");
const outcomeBtn = document.getElementById("outcomeBtn");

// error
const errorName = document.querySelector(".errorName");
const errorNumber = document.querySelector(".errorNumber");

// content
const content = document.querySelector(".containerMain");

let accountBalance = 0;
let accountIncome = 0;
let accountOutcome = 0;
balance.textContent = accountBalance;
income.textContent = accountIncome;
outcome.textContent = accountOutcome;

function updateUI() {
  balance.textContent = accountBalance;
  income.textContent = accountIncome;
  outcome.textContent = accountOutcome;
}

function errorText() {
  if (nameInput.value.trim() == "") {
    errorName.textContent = "Please enter a valid name";
  }
  if (amountInput.value == "") {
    errorNumber.textContent = "Please enter a valid Number";
  }
}

function incomeFunction() {
  errorText();
  if (!(nameInput.value.trim() == "") && !(amountInput.value == "")) {
    const amount = parseFloat(amountInput.value);

    accountBalance += amount;
    accountIncome += amount;

    // Insert content
    content.insertAdjacentHTML(
      "beforeend",
      `
      <div class="content">
        <p id="date">${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}</p>
        <p id="name">${nameInput.value}</p>
        <div id="eventIncome">Income</div>
        <div id="amount">+${amountInput.value}</div>
      </div>`
    );

    updateUI();
    errorName.textContent = "";
    errorNumber.textContent = "";
    nameInput.value = "";
    amountInput.value = "";
  }
}

function outcomeFunction() {
  errorText();
  if (!(nameInput.value.trim() == "") && !(amountInput.value == "")) {
    const amount = parseFloat(amountInput.value);

    accountBalance -= amount;
    accountOutcome += amount;

    // Insert content
    content.insertAdjacentHTML(
      "beforeend",
      `
      <div class="content">
        <p id="date">${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}</p>
        <p id="name">${nameInput.value}</p>
        <div id="eventOutcome">Outcome</div>
        <div id="amount" style="color: red;">-${amountInput.value}</div>
      </div>`
    );

    updateUI();
    errorName.textContent = "";
    errorNumber.textContent = "";
    nameInput.value = "";
    amountInput.value = "";
  }
}

incomeBtn.addEventListener("click", incomeFunction);
outcomeBtn.addEventListener("click", outcomeFunction);
