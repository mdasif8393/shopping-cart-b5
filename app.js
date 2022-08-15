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