interface Item {
    productId: number;
    name: string;
    price: number;
    quantity: number;
    brand: string;
}

let cartItems = [
    {
        productId: 123,
        name: "Maggi",
        price: 15,
        brand: "Nestle",
        quantity: 1,
    },
];

function calculateCartPrice() {
    let cartPrice = 0;
    cartItems.forEach(item => {
        const { quantity, price } = item
        cartPrice += quantity * price
    })
    return cartPrice
}


function getCartItem() {
    return cartItems;
}

function addItems(items = []) {
    items.forEach((item) => {
        addItem(item);
    });
}
function addItem(item) {
    const { productId, quantity } = item;
    if (quantity < 1) {
        console.log('Quantity should be greater than zero')
        return
    }
    let preExistingItem = cartItems.find(
        (cartItem) => cartItem.productId === productId
    );
    if (preExistingItem) {
        let indexOfPreExistingItem = cartItems.findIndex(
            (cartItem) => cartItem.productId === productId
        );
        cartItems[indexOfPreExistingItem].quantity += quantity;
    } else {
        cartItems.push(item);
    }
}

function removeItems(items) {
    items.forEach((item) => {
        removeItem(item);
    });
}
function removeItem(item) {
    const { productId, quantity } = item;
    if (quantity < 1) {
        console.log('Quantity should be greater than zero')
        return
    }
    let preExistingItem = cartItems.find(
        (cartItem) => cartItem.productId === productId
    );
    if (preExistingItem) {
        let indexOfPreExistingItem = cartItems.findIndex(
            (cartItem) => cartItem.productId === productId
        );
        cartItems[indexOfPreExistingItem].quantity -= quantity;
    } else {
        cartItems.push(item);
    }
}
