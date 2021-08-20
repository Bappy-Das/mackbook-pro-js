
//Set extra Memory Price 
function extraMemmoryPrice(price) {
    const extraMemmory = document.getElementById('extra-memory');
    extraMemmory.innerText = price;
}
// Handle Extra Memory Price 
document.getElementById('8gb-memory').addEventListener('click', function () {
    extraMemmoryPrice(0);
    totalPrice();

})
document.getElementById('16gb-memory').addEventListener('click', function () {
    extraMemmoryPrice(180);
    totalPrice();
})


//set extra Storage Price 
function extraStoragePrice(storagePrice) {
    const extraStorage = document.getElementById('extra-storage');
    extraStorage.innerText = storagePrice;
}
// handle extra Storage Price 
document.getElementById('256gb-ssd').addEventListener('click', function () {
    extraStoragePrice(0)
    totalPrice()
})
document.getElementById('512gb-ssd').addEventListener('click', function () {
    extraStoragePrice(100);
    totalPrice()
})
document.getElementById('1tb-ssd').addEventListener('click', function () {
    extraStoragePrice(180);
    totalPrice()
})


// Delivery 
function delivery(charge) {
    const deliverCharge = document.getElementById('deliver-charge');
    deliverCharge.innerText = charge;
}

document.getElementById('free-delivery').addEventListener('click', function () {
    delivery(0);
    totalPrice()
})
document.getElementById('paid-delivery').addEventListener('click', function () {
    delivery(20);
    totalPrice()
})

function totalPrice() {
    const memory = parseInt(document.getElementById('extra-memory').innerText);
    const storage = parseInt(document.getElementById('extra-storage').innerText);
    const delivery = parseInt(document.getElementById('deliver-charge').innerText);
    const totalPrice = 1299 + memory + storage + delivery;

    const total = document.getElementById('total-price');
    total.innerText = totalPrice;
}




