const penaltyLevels = [
  {
    time: "0 - 3 Months",
    rate: 5,
  },
  {
    time: "3 - 6 Months",
    rate: 10,
  },
  {
    time: "6 - 9 Months",
    rate: 15,
  },
  {
    time: "9 - 12 Months",
    rate: 20,
  },
  {
    time: "> 12 Months",
    rate: 25,
  },
];

const radioGroup = document.querySelector(".select");
radioGroup.innerHTML =
  radioGroup.innerHTML +
  penaltyLevels
    .map(({ time, rate }) => {
      return `<div>
        <input type="radio" name="latefee" value="${rate}" id="${rate}">
         <label for="${rate}">${time}</label>
    </div>`;
    })
    .join(" ");

let radios = radioGroup.querySelectorAll('input[type=radio][name="latefee"]');
radios.forEach((radio) => radio.addEventListener("change", calculateTotal));

let insuranceInput = document.getElementById("insurance");
insuranceInput.addEventListener("input", calculateTotal);

function calculateTotal() {
  let yearlyFee = parseInt(document.querySelector("#yfee").value);
  if (!yearlyFee) {
    alert("Please Enter Yearly Renewal Fee");
    let radio = radioGroup.querySelector(
      "input[type=radio][name=latefee]:checked"
    );
    radio.checked = false;
  } else {
    let penaltyLevel = document.getElementsByName("latefee");
    let penaltyRate = 0;
    for (let radio of penaltyLevel) {
      if (radio.checked) {
        penaltyRate = parseInt(radio.value);
      }
    }
    let lateFee = (yearlyFee * penaltyRate) / 100;
    document.querySelector("#latefee").value = lateFee;

    let insuranceCharge = parseInt(insuranceInput.value) || 0;

    let totalCharge = yearlyFee + lateFee + insuranceCharge;
    document.querySelector("#total").value = parseInt(totalCharge);
  }
}
