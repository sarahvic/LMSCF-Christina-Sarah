var food = JSON.parse(groceries);
for (var i = 0; i < food.length; i++) {
    $(".itemsContainer").append(
        `<div id="item${food[i].ID}">
        <p> ${food[i].img} </p>
        <p>Name : ${food[i].name} </p>
        <p>Price : ${food[i].price} </p>
        <button type="submit">Add to Cart </button>
       </div>`
    )
};