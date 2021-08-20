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

    // total cost text element
    const totalPriceField = document.getElementById("total-price");

    //set total cost
    const totalCost = basePrice + memoryCost + storageCost + deliveryCharge;
    totalPriceField.innerText = totalCost;
};

// memory updater function
function updateMemory(event) {
    //html price field form memory
    let memoryField = document.getElementById("memory-cost");

    //get memory size dynamically from html data-name attribute
    let memorySize = event.target.getAttribute("data-name");

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

//==================
// event handlers
//==================

document.getElementById("memory").addEventListener("click", updateMemory);