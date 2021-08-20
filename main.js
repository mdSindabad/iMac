//==================
// common functions
//==================

// total price updater function
function updateTotalPrice() {
    // get all the prices
    const basePrice = parseFloat(document.getElementById("base-price").innerText);
    const memoryCost = parseFloat(document.getElementById("memory-cost").innerText);
    const storageCost = parseFloat(document.getElementById("storage-cost").innerText);
    const deliveryCharge = parseFloat(document.getElementById("delivery-charge").innerText);

    // total cost and grand-total text element
    const totalPriceField = document.getElementById("total-price");
    const grandTotalPriceField = document.getElementById("grand-total");

    //set total cost
    const totalCost = basePrice + memoryCost + storageCost + deliveryCharge;
    totalPriceField.innerText = totalCost;
    grandTotalPriceField.innerText = totalCost;
};

// memory updater function
function updateMemory(event) {
    //html price field form memory
    let memoryField = document.getElementById("memory-cost");

    //get memory size dynamically from html data-name attribute
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
    //html price field form memory
    let storageField = document.getElementById("storage-cost");

    //get memory size dynamically from html data-name attribute
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
    //html price field form memory
    let deliveryChargeField = document.getElementById("delivery-charge");

    //get memory size dynamically from html data-name attribute
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



//==================
// event handlers
//==================
document.getElementById("memory").addEventListener("click", updateMemory);
document.getElementById("storage").addEventListener("click", updateStorage);
document.getElementById("delivery").addEventListener("click", updatedeliveryCost);