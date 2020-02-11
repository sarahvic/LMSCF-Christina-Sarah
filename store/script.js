var food = JSON.parse(groceries);

function shopStore(food){
for (var i = 0; i < food.length; i++) {
    $(".itemsContainer").append(
        `<div class="box" id="item${food[i].ID}">
        <div class="pic"> ${food[i].img} </div>
        <p>Name : ${food[i].name} </p>
        <p>Price : € ${food[i].price} </p>
        <button class="btn" type="submit" onclick="addtoBasket(${food[i].ID})">Add to Cart </button>
       </div>`
    )
}

};

$("#hidden").hide();
var selectedItem = [];
shopStore(food);
        function addtoBasket(ID){
            selectedItem.push(ID);
            console.table(selectedItem);
        };
        function showBasket(){
            var sum = 0;
            var shipping = 9;
            var tax = 0;
            var discount = 0
            var item = "";

            for (j = 0; j < selectedItem.length; j++){
                for (i = 0; i < food.length; i++){
                    if(food[i].ID == selectedItem[j]){
                        item +=  `<div class="hidden">
                                    <p class="name">${food[i].name} </p>
                                    <p class="price"> € ${food[i].price} </p>
                                </div>`;
                                sum += food[i].price;
                                
                                
                    }
                }   
            };
            

           
           
            document.getElementById("hidden").innerHTML += item;
            $("#hidden").show();
            $('.exitBtn').on('click', function(){
				$('#hidden').hide();
			})

            

                //console.table(selectedItem);
        }
