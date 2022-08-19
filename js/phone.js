





function updatePhone(isIncrease) {
    const caseInputField = document.getElementById('phone_number_field');
    const caseInputString = caseInputField.value;
    const caseInput = parseInt(caseInputString);
    let newCaseInput, totalPrice;

    if (isIncrease === true) {
        newCaseInput = caseInput + 1;
        caseInputField.value = newCaseInput;
        totalPrice = document.getElementById('phone_per_price');
        totalPrice.innerText = newCaseInput * 1219;
    }
    else {
        newCaseInput = caseInput - 1;
        caseInputField.value = newCaseInput;
        totalPrice = document.getElementById('phone_per_price');
        totalPrice.innerText = newCaseInput * 1219;
    }
    return newCaseInput;
};


document.getElementById('btn_phone_plus').addEventListener('click', function () {
    updatePhone(true);
});

document.getElementById('btn_phone_minus').addEventListener('click', function () {
    updatePhone(false);
});
