const bookInfo = {
    price: 24.99,
    title: "Fifty Shades of Chicken",
    image: "./assets/images/book.jpg"
  };

const printToDOM = (divID, toPrint) => {
    document.getElementById(divID).innerHTML = toPrint;
}

const addToCartEvent = () => {
    console.log('added to cart');
}

const makeStore = () => {
    let domString = '<h2>Our only book:</h2>';
    domString += '<p>Buy it now:</p>';
    domString += `<h3>$${bookInfo.price}</h3>`;
    domString += `<img src=${bookInfo.image} alt="book cover"/>`;
    domString += '<button id="cartButton" type="button" class="btn btn-secondary col-12">Add to Cart</button>';

    printToDOM('storeContainer', domString);
    document.getElementById('cartButton').addEventListener('click', addToCartEvent);
}

// export default. what's inside brackets is object
export default{ makeStore };