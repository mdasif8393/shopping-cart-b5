const iphonePlusButton = document.getElementById('iphone-plus-button');
iphonePlusButton.addEventListener('click',()=>{
    const iphonePriceInput = document.getElementById('iphone-price');
    const iphonePrice = parseFloat(iphonePriceInput.innerText);

    const iphoneQuantityInput = document.getElementById('iphone-quantity-input');
    const iphoneQuantity = parseFloat(iphoneQuantityInput.value);

    const newIphoneQuantity = iphoneQuantity + 1;
    iphoneQuantityInput.value = newIphoneQuantity;

    const newIphonePrice = 1219 * newIphoneQuantity;
    iphonePriceInput.innerText = newIphonePrice;

    const subTotalInput = document.getElementById('subtotal');
    const subTotal = parseFloat(subTotalInput.innerText);
    const newSubTotal = subTotal + 1219;
    subTotalInput.innerText = newSubTotal;

    const totalInput = document.getElementById('total');
    const total = parseFloat(totalInput.innerText);
    const newTotal = total + 1219;
    totalInput.innerText = newTotal;
    
})

const iphoneMinusButton = document.getElementById('iphone-minus-button');
iphoneMinusButton.addEventListener('click',()=>{
    const iphonePriceInput = document.getElementById('iphone-price');
    const iphonePrice = parseFloat(iphonePriceInput.innerText);

    const iphoneQuantityInput = document.getElementById('iphone-quantity-input');
    const iphoneQuantity = parseFloat(iphoneQuantityInput.value);

    const newIphoneQuantity = iphoneQuantity - 1;
    iphoneQuantityInput.value = newIphoneQuantity;

    const newIphonePrice = 1219 * newIphoneQuantity;
    iphonePriceInput.innerText = newIphonePrice;

    const subTotalInput = document.getElementById('subtotal');
    const subTotal = parseFloat(subTotalInput.innerText);
    const newSubTotal = subTotal - 1219;
    subTotalInput.innerText = newSubTotal;

    const totalInput = document.getElementById('total');
    const total = parseFloat(totalInput.innerText);
    const newTotal = total - 1219;
    totalInput.innerText = newTotal;
    
})

const casePlusButton = document.getElementById('case-plus-button');
casePlusButton.addEventListener('click',()=>{
    const casePriceInput = document.getElementById('case-price');
    const casePrice = parseFloat(casePriceInput.innerText);

    const caseQuantityInput = document.getElementById('case-quantity-input');
    const caseQuantity = parseFloat(caseQuantityInput.value);

    const newCaseQuantity = caseQuantity + 1;
    caseQuantityInput.value = newCaseQuantity;

    const newCasePrice = 59 * newCaseQuantity;
    casePriceInput.innerText = newCasePrice;

    const subTotalInput = document.getElementById('subtotal');
    const subTotal = parseFloat(subTotalInput.innerText);
    const newSubTotal = subTotal + 59;
    subTotalInput.innerText = newSubTotal;

    const totalInput = document.getElementById('total');
    const total = parseFloat(totalInput.innerText);
    const newTotal = total + 59;
    totalInput.innerText = newTotal;
    
})

const caseMinusButton = document.getElementById('case-minus-button');
caseMinusButton.addEventListener('click',()=>{
    const casePriceInput = document.getElementById('case-price');
    const casePrice = parseFloat(casePriceInput.innerText);

    const caseQuantityInput = document.getElementById('case-quantity-input');
    const caseQuantity = parseFloat(caseQuantityInput.value);

    const newCaseQuantity = caseQuantity - 1;
    caseQuantityInput.value = newCaseQuantity;

    const newCasePrice = 59 * newCaseQuantity;
    casePriceInput.innerText = newCasePrice;

    const subTotalInput = document.getElementById('subtotal');
    const subTotal = parseFloat(subTotalInput.innerText);
    const newSubTotal = subTotal - 59;
    subTotalInput.innerText = newSubTotal;

    const totalInput = document.getElementById('total');
    const total = parseFloat(totalInput.innerText);
    const newTotal = total - 59;
    totalInput.innerText = newTotal;
    
})