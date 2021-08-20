//==================
// global variable
//==================
let withPromo = false;



//==================
// event functions
//==================

// grand total function
function updateGrandTotal() {
    // get grand total text field
    const grandTotalPriceField = document.getElementById("grand-total");
    // get total price
    const totalPriceField = parseFloat(document.getElementById("total-price").innerText);

    // checking if promo has been provided or not
    if(withPromo) {
        // applying 20% discount on promo code
        grandTotalPriceField.innerText = totalPriceField * 0.8;
    } else {
        grandTotalPriceField.innerText = totalPriceField;
    }
}

// total price updater function
function updateTotalPrice() {
    // get all the prices
    const basePrice = parseFloat(document.getElementById("base-price").innerText);
    const memoryCost = parseFloat(document.getElementById("memory-cost").innerText);
    const storageCost = parseFloat(document.getElementById("storage-cost").innerText);
    const deliveryCharge = parseFloat(document.getElementById("delivery-charge").innerText);

    // total cost text element
    const totalPriceField = document.getElementById("total-price");

    //set total cost
    const totalCost = basePrice + memoryCost + storageCost + deliveryCharge;
    totalPriceField.innerText = totalCost;

    // update grand total
    updateGrandTotal(false);
};

// memory updater function
function updateMemory(event) {
    // html price field form memory
    let memoryField = document.getElementById("memory-cost");

    // get memory size dynamically from html custom data-size attribute
    let memorySize = event.target.getAttribute("data-size");

    // updating price based on memory size
    switch (memorySize) {
        case "8gb":
            memoryField.innerText = 0;
            break;
        case "16gb":
            memoryField.innerText = 180;
            break;
        default:
            break;
    }
    // update total price
    updateTotalPrice();
};

// storage updater function
function updateStorage(event) {
    // html price field form memory
    let storageField = document.getElementById("storage-cost");

    // get storage size dynamically from html custom data-size attribute
    let storageSize = event.target.getAttribute("data-size");

    // updating price based on memory size
    switch (storageSize) {
        case "256gb":
            storageField.innerText = 0;
            break;
        case "512gb":
            storageField.innerText = 100;
            break;
        case "1tb":
            storageField.innerText = 180;
            break;
        default:
            break;
    }
    // update total price
    updateTotalPrice();
};

// delivery cost updater function
function updatedeliveryCost(event) {
    // html price field form memory
    let deliveryChargeField = document.getElementById("delivery-charge");

    // get delivery charge dynamically from html custom data-charge attribute
    let deliveryCharge = event.target.getAttribute("data-charge");

    // updating price based on memory size
    switch (deliveryCharge) {
        case "free":
            deliveryChargeField.innerText = 0;
            break;
        case "paid":
            deliveryChargeField.innerText = 20;
            break;
        default:
            break;
    }
    // update total price
    updateTotalPrice();
};

// apply promo code function
function applyPromoCode(event) {
    // get promo code from input field
    const promoCode = document.getElementById("promo-code");
    const promoCodeValue = document.getElementById("promo-code").value;
    //setting promo code fiend to empty
    promoCode.value = "";
    
    // validating promo code
    if(promoCodeValue == "") {
        return;
    } else {
        // check if promo code is "stevekaku"
        if(promoCodeValue.toLowerCase() == "stevekaku") {
            // set global promo variable to "true"
            withPromo = true;
            updateGrandTotal();
            event.target.setAttribute("disabled", true);
        } else {
            return;
        }
    }
}



//==================
// event handlers
//==================
document.getElementById("memory").addEventListener("click", updateMemory);
document.getElementById("storage").addEventListener("click", updateStorage);
document.getElementById("delivery").addEventListener("click", updatedeliveryCost);
document.getElementById("promo-btn").addEventListener("click", applyPromoCode);