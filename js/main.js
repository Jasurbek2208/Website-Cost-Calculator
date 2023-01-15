const price = document.querySelector('#final-price');

// inputs
const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');

// radio inputs
const typeInputs = document.querySelectorAll('input[name="type"]');
const buildingInputs = document.querySelectorAll('input[name="building"]');

// checkbox inputs
const ceilingInput = document.querySelector('input[name="ceiling"]');
const wallsInput = document.querySelector('input[name="walls"]');
const floorInput = document.querySelector('input[name="floor"]');

// price vars
const defPrice = 6000;
let totalPrice = 0;
// extra prices
let typePrice = 1.3;
let buildingPrice = 1.1;
let ceilingPrice = 1;
let wallsPrice = 1;
let floorPrice = 1;

squareInput.addEventListener('input', function () {
    if (squareInput.value < 0 || squareInput.value == "") {
        squareInput.value = 0;
    }
    if (squareInput.value > 200) {
        squareInput.value = 200;
    }
    if (squareInput.value.length > 1 && squareInput.value[0] == 0) {
        let num = "";
        let strNum = squareInput.value.toString();
        for (let i = 0; i < strNum.length; i++) {
            if (i > 0) {
                num += squareInput.value[i];
            }
        }
        squareInput.value = num;
    }
    squareRange.value = squareInput.value;
    calclPrice();
});

squareRange.addEventListener('input', function () {
    squareInput.value = squareRange.value;
    calclPrice();
});

for (const typeInput of typeInputs) {
    typeInput.addEventListener('input', function () {
        if (typeInput.checked) {
            typePrice = Number(typeInput.value);
            calclPrice();
        }
    })
}

for (const buildingInput of buildingInputs) {
    buildingInput.addEventListener('input', function () {
        if (buildingInput.checked) {
            buildingPrice = Number(buildingInput.value);
            calclPrice();
        }
    })
}

ceilingInput.addEventListener('input', function () {
    if (ceilingInput.checked) {
        ceilingPrice = 1.1;
    } else {
        ceilingPrice = 1;
    }
    calclPrice();
});

wallsInput.addEventListener('input', function () {
    if (wallsInput.checked) {
        wallsPrice = 1.1;
    } else {
        wallsPrice = 1;
    }
    calclPrice();
});

floorInput.addEventListener('input', function () {
    if (floorInput.checked) {
        floorPrice = 1.1;
    } else {
        floorPrice = 1;
    }
    calclPrice();
});

function calclPrice() {
    let formatter = new Intl.NumberFormat("ru");
    totalPrice = (Number(squareInput.value) * defPrice) * Number(typePrice) * Number(buildingPrice) * Number(ceilingPrice) * Number(wallsPrice) * Number(floorPrice);
    extraPrice = 1;
    price.textContent = formatter.format(totalPrice);
}
calclPrice();