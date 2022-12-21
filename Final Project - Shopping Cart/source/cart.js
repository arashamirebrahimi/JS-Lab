
let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
   cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y,0);

}

calculation();

let generateCartItems = () =>{
    if(basket.length !== 0){
        return shoppingCart.innerHTML = basket.map((x) =>{
            let {id,item} = x;
            let search = shopItems.find((y) => y.id === id) || [];
            return `
                <div class="cart-item">
                    <img width="150px" height ="150px" src="${search.img}" alt=""/>
                
                    <div class="details">
                    
                        <div class="title-price-x">
                            <h4 class ="title-price">
                                <p>${search.Name}</p>
                                <p class="cart-item-price">$ ${search.Price}</p>
                            </h4>
                            <i onclick="removeItem(${id})" class = "bi bi-x-lg"></i>
                        </div>
                    
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div id=${id} class="quantity">${item}</div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    
                        <h3>$ ${item * search.Price}</h3>
                    </div>
                </div>
            `;
        }).join("");
    }
    else{
        shoppingCart.innerHTML = ``;
        label.innerHTML = `
            <h2>Cart is Empty</h2>
            <a href = "../Shopping Cart/main.html">
                <button class = "homeBtn">Back to Home</button>
            </a>
        `
    }
};

let increment = (id) =>{
    console.log(id);
    let selectedItem = id;
    let search = basket.find((item) => item.id === selectedItem.id);
    
    if( search === undefined){
        basket.push({
            id: selectedItem.id,
            item:1,
        })
    }
    else{
        search.item ++;
    };
    
    update(selectedItem.id);
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
}

let decrement = (id) =>{
    let selectedItem = id;
    let search = basket.find((item) => item.id === selectedItem.id);
    if(search === undefined) return;
    else if( search.item === 0) return;
    else{
        search.item --;
    };
    
    update(selectedItem.id);
    basket = basket.filter((x) => x.item !==0);
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
}

let update = (id) =>{
    let search = basket.find((item) => item.id === id);
    document.getElementById(id).innerHTML = search.item;
    generateCartItems();
    totalAmount();
    calculation();
}


let removeItem =(id) => {
    let selectedItem = id;
    basket = basket.filter((x) => x.id !==selectedItem.id);
    generateCartItems();
    calculation();
    totalAmount();
    localStorage.setItem("data", JSON.stringify(basket));
}

let emptyCart = () =>{
    basket = [];
    generateCartItems();
    calculation();
    localStorage.setItem("data", JSON.stringify(basket));
}

let totalAmount = () =>{
    if(basket.length !== 0){
        let amount = basket.map((x) =>{
        let {item , id}=x; 
        let search = shopItems.find((y) => y.id === id) || [];
        return item * search.Price;
        }).reduce((x,y) => x+y,0);
        label.innerHTML = `
            <h2>Your Total Bill : $ ${amount}</h2>
            <button class="checkout">Checkout</button>
            <button onclick="emptyCart()" class="removeAll">Empty Cart</button>
        `
    }
    else return;
}


generateCartItems();

totalAmount();
