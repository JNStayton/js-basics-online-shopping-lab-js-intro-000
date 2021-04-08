var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  var itemObj = {itemName: item, itemPrice: price};
    cart.push(itemObj);
  return `${item} has been added to your cart.`;
}


function viewCart() {
      if (cart.length === 0) {
        return `Your shopping cart is empty.`
      } else if (cart.length === 1) {
        return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
      } else if (cart.length === 2) {
        return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
      } else if (cart.length >= 3 ) {
        return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
      }
}

function total() {
  let allPrices = []
  let sum = 0
  for (var i = 0; i < cart.length; i++) {
    allPrices.push(cart[i].itemPrice)
    sum += allPrices[i]
  }
  return sum
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty('item')) {
        cart.splice([i], 1)
      }
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
}
