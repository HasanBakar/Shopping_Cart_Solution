/**
 * step-A.1: add event handler with case section + icon 
 * Step-A.2: get input field value from case section 
 * step-A.2.5: set new input field value 
 * 
 */




function updateCase(isIncrease) {
    const caseInputField = document.getElementById('case_input_field');
    const caseInputString = caseInputField.value;
    const caseInput = parseInt(caseInputString);
    let newCaseInput, totalPrice;

    if (isIncrease === true) {
        newCaseInput = caseInput + 1;
        caseInputField.value = newCaseInput;
        totalPrice = document.getElementById('case_per_price');
        totalPrice.innerText = newCaseInput * 59;
    }
    else {
        newCaseInput = caseInput - 1;
        caseInputField.value = newCaseInput;
        totalPrice = document.getElementById('case_per_price');
        totalPrice.innerText = newCaseInput * 59;
    }
};



document.getElementById('btn_case_plus').addEventListener('click', function () {
    updateCase(true);
});

/**
 * step-B.1: add event handler with case section - icon
 * step-B.2: get input field value from case section
 * step-B.2.5: set condition for reduce to 0
 */
//  step-B.1:
document.getElementById('btn_case_minus').addEventListener('click', function () {
    updateCase(false);
});

/**
 * step-C.1: 
 */
