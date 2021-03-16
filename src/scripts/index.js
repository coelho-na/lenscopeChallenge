let rightEsferico = document.getElementById("right-eye__esferico");
let rightCilindrico = document.getElementById("right-eye__cilindrico");
let leftEsferico = document.getElementById("left-eye__esferico");
let leftCilindrico = document.getElementById("left-eye__cilindrico");
let grauEsferico = generateArray(-15.0, 0.25);
let grauCilindrico = generateArray(-5.0, 0.25);

function generateArray(initial, steps) {
  let newArray = [];
  let i = 0;
  while (initial + steps * i <= initial * -1) {
    newArray.push((initial + steps * i).toFixed(2));
    i++;
  }
  return newArray;
}

function generateTagOption(element, list) {
  createTag = `<option selected > Selecione  </option>`;
  let i = 0;
  while (i < list.length) {
    if (list[i] !== "0.00") {
      createTag += `<option value="${list[i]}">${list[i]}</option>`;
    }
    i++;

    element.innerHTML = createTag;
  }
}

generateTagOption(rightEsferico, grauEsferico);
generateTagOption(rightCilindrico, grauCilindrico);
generateTagOption(leftEsferico, grauEsferico);
generateTagOption(leftCilindrico, grauCilindrico);

function getSelectValue() {
  let selectRightEsferico = document.getElementById("right-eye__esferico")
    .value;
  let selectLeftEsferico = document.getElementById("left-eye__esferico").value;
  let selectRightCilindrico = document.getElementById("right-eye__cilindrico")
    .value;
  let selectLeftCilindrico = document.getElementById("left-eye__cilindrico")
    .value;

  if (
    (selectRightEsferico >= "-3.00" || selectRightEsferico <= "-12.00") &&
    (selectLeftEsferico >= "-3.00" || selectLeftEsferico <= "-12.00") &&
    selectRightCilindrico <= "-2.00" &&
    selectLeftCilindrico <= "-2.00"
  ) {
    document.getElementById("whatLens").innerHTML = "<h1>Lente Prime</h1>";
  } else if (
    (selectRightCilindrico <= "-5.00" || selectLeftCilindrico <= "-5.00") &&
    (selectRightEsferico <= "-15.00" || selectLeftEsferico <= "-15.00")
  ) {
    document.getElementById("whatLens").innerHTML = "<h1>Lente Vision</h1>";
  } else {
    document.getElementById("whatLens").innerHTML = "";
  }
}
