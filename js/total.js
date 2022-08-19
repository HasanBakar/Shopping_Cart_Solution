function getElementById(ElementId) {
    const getElement = document.getElementById(ElementId);
    const getElementString = getElement.innerText;
    const getElementValue = Number(getElementString);
    return getElementValue;
}
function setValue(setElementId, value) {
    const subTotalElement = document.getElementById(setElementId);
    subTotalElement.innerText = value;
}
function taxAmout(subTotal) {
    const taxAmout = subTotal * 0.1;
    const taxAmoutString = taxAmout.toFixed(2);
    const tax = parseFloat(taxAmoutString);
    return tax;
}

document.getElementById('btn_phone_plus').addEventListener('click', function () {
    // subTotal calculation 
    const phoneTotal = getElementById('phone_per_price');
    const caseTotal = getElementById('case_per_price');
    const Value = phoneTotal + caseTotal;
    getElementById('sub_total');
    setValue('sub_total', Value);


    // Tax amount calculation 
    getElementById('tax_amount');
    const taxValue = taxAmout(Value);
    setValue('tax_amount', taxValue);

    // final Total calculation 
    const finalValue = Value + taxValue;
    setValue('final_total', finalValue);


});

document.getElementById('btn_phone_minus').addEventListener('click', function () {
    // subTotal calculation 
    const phoneTotal = getElementById('phone_per_price');
    const caseTotal = getElementById('case_per_price');
    const Value = phoneTotal + caseTotal;
    getElementById('sub_total');
    setValue('sub_total', Value);


    // Tax amount calculation 
    getElementById('tax_amount');
    const taxValue = taxAmout(Value);
    setValue('tax_amount', taxValue);


    // final Total calculation 
    const finalValue = Value + taxValue;
    setValue('final_total', finalValue);
});

document.getElementById('btn_case_plus').addEventListener('click', function () {
    // subTotal calculation
    const phoneTotal = getElementById('phone_per_price');
    const caseTotal = getElementById('case_per_price');
    const Value = phoneTotal + caseTotal;
    getElementById('sub_total');
    setValue('sub_total', Value);



    // Tax amount calculation 
    getElementById('tax_amount');
    const taxValue = taxAmout(Value);
    setValue('tax_amount', taxValue);


    // final Total calculation 
    const finalValue = Value + taxValue;
    setValue('final_total', finalValue);
});

document.getElementById('btn_case_minus').addEventListener('click', function () {
    // subTotal calculation
    const phoneTotal = getElementById('phone_per_price');
    const caseTotal = getElementById('case_per_price');
    const Value = phoneTotal + caseTotal;
    getElementById('sub_total');
    setValue('sub_total', Value);


    // Tax amount calculation 
    getElementById('tax_amount');
    const taxValue = taxAmout(Value);
    setValue('tax_amount', taxValue);


    // final Total calculation 
    const finalValue = Value + taxValue;
    setValue('final_total', finalValue);
});