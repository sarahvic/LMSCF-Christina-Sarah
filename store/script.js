var food = JSON.parse(groceries);
for (var i = 0; i < food.length; i++) {
    $(".itemsContainer").append(
        `<div class="box" id="item${food[i].ID}">
        <div class="pic"> ${food[i].img} </div>
        <p>Name : ${food[i].name} </p>
        <p>Price : € ${food[i].price} </p>
        <button class="btn" type="submit">Add to Cart </button>
       </div>`
    )
};