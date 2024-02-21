const metric = document.getElementById("metric");
const imperial = document.getElementById("imperial");

const metricContainer = document.querySelector(".metric-container");
const imperialContainer = document.querySelector(".imperial-container");

const welcomeContainer = document.getElementById("welcome-container");
const bmiResultContainer = document.getElementById("bmi-result__container");

let metricHeight = document.getElementById("metric-height");
let metricWeight = document.getElementById("metric-weight");

let imperialHeightFt = document.getElementById("imp-height-ft");
let imperialHeightIn = document.getElementById("imp-height-in");

let imperialWeightStone = document.getElementById("imp-weight-st");
let imperialWeightLbs = document.getElementById("imp-weight-lbs");

let bmiValue = document.getElementById("bmi-value");
let bmiWeight = document.getElementById("bmi-weight");
let lowerWeight = document.getElementById("lower-weight");
let upperWeight = document.getElementById("upper-weight");

function clearingResults() {
  metricHeight.value = "";
  metricWeight.value = "";
  imperialHeightFt.value = "";
  imperialHeightIn.value - "";
  imperialWeightStone.value = "";
  imperialWeightLbs.value = "";
  bmiValue.innerHTML = "";
  bmiWeight.innerHTML = "";
  lowerWeight.innerHTML = "";
  upperWeight.innerHTML = "";
  bmiResultContainer.style.display = "none";
  welcomeContainer.style.display = "flex";
}

metric.addEventListener("click", function () {
  metricContainer.style.display = "flex";
  imperialContainer.style.display = "none";
  clearingResults();
});

imperial.addEventListener("click", function () {
  metricContainer.style.display = "none";
  imperialContainer.style.display = "flex";
  clearingResults();
});
let bmiResult = 0;

function bmiOutcome() {
  if (bmiResult < 18.6) bmiWeight.innerHTML = "Under Weight";
  else if (bmiResult >= 18.6 && bmiResult < 24.9)
    bmiWeight.innerHTML = "at Normal Weight";
  else if (bmiResult > 24.9 && bmiResult <= 29.9)
    bmiWeight.innerHTML = "Over Weight";
  else bmiWeight.innerHTML = "Obese Weight";
}

function displayWelcomeResult() {
  welcomeContainer.style.display = "none";
  bmiResultContainer.style.display = "flex";
}

function metricCalculation(e) {
  e.preventDefault();
  let metricHeightInput = parseInt(metricHeight.value);
  let metricWeightInput = parseInt(metricWeight.value);

  bmiResult = (
    metricWeightInput /
    ((metricHeightInput * metricHeightInput) / 10000)
  ).toFixed(2);
  bmiValue.innerHTML = bmiResult;

  bmiOutcome();

  lowerWeight.innerHTML =
    parseInt(
      18.6 * (metricHeightInput * 0.01) * (metricHeightInput * 0.01).toFixed(2)
    ) + "kg";
  upperWeight.innerHTML =
    parseInt(
      24.9 * (metricHeightInput * 0.01) * (metricHeightInput * 0.01).toFixed(2)
    ) + "kg";

  displayWelcomeResult();
}
metricHeight.onchange = metricCalculation;
metricWeight.onchange = metricCalculation;

function imperialCalculation() {
  let imperialHeightInput =
    Number(imperialHeightFt.value * 12) + Number(imperialHeightIn.value);

  let imperialWeightInput =
    Number(imperialWeightStone.value * 14) + Number(imperialWeightLbs.value);

  bmiResult = ((703 * imperialWeightInput) / imperialHeightInput ** 2).toFixed(
    2
  );

  bmiValue.innerHTML = bmiResult;

  bmiOutcome();

  lowerWeight.innerHTML =
    parseInt(
      18.6 *
        (imperialHeightInput * 0.0254) *
        (imperialHeightInput * 0.0254).toFixed(2)
    ) + "lb";
  upperWeight.innerHTML =
    parseInt(
      24.9 *
        (imperialHeightInput * 0.0254) *
        (imperialHeightInput * 0.0254).toFixed(2)
    ) + "lb";

  displayWelcomeResult();
}
imperialHeightFt.onchange = imperialCalculation;
imperialHeightIn.onchange = imperialCalculation;
imperialWeightStone.onchange = imperialCalculation;
imperialWeightLbs.onchange = imperialCalculation;
