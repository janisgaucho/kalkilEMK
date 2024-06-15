const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const button = document.querySelector("#button");
const reset = document.querySelector(".reset");

const emk = document.querySelector("#emk");
const minWeight = document.querySelector("#min-weight");
const maxWeight = document.querySelector("#max-weight");
const emkComment = document.querySelector("#emk-comment");
const userHeight = document.querySelector("#user-height");
const loader = document.querySelector(".loader");
const result = document.querySelector(".result");

button.addEventListener("click", calculEMK);

function calculEMK() {
  const formuleEMK = (weight.valueAsNumber / (height.valueAsNumber * height.valueAsNumber)) * 10000;
  emk.textContent = formuleEMK.toPrecision(3);
  userHeight.textContent = height.valueAsNumber;
  
  loader.style.display = "none";
  result.style.display = "block";
  button.style.opacity = "0.5";
  button.style.cursor = "not-allowed";

  if (formuleEMK < 16.5) {
    emkComment.textContent = "eta grangou";
    result.style.color = "#4BD8D8";
  } else if (formuleEMK >= 16.5 && formuleEMK < 18.5) {
    emkComment.textContent = "de mensè";
    result.style.color = "#4BD8D8";
  } else if (formuleEMK >= 18.5 && formuleEMK < 25) {
    emkComment.textContent = "kondisyon ko nomal";
    result.style.color = "#4BD8A3";
  } else if (formuleEMK >= 25 && formuleEMK < 30) {
    emkComment.textContent = "eta ki two gwo";
    result.style.color = "#D8D24B";
  } else if (formuleEMK >= 30 && formuleEMK < 35) {
    emkComment.textContent = "eta de obezite modere";
    result.style.color = "#D8974B";
  } else if (formuleEMK >= 35 && formuleEMK < 40) {
    emkComment.textContent = "eta de obezite grav";
    result.style.color = "#D84B6D   ";
  } else {
    emkComment.textContent = "eta de obezite masiv";
  }
}

reset.addEventListener("click", getReset);

function getReset() {
  location.reload();
}