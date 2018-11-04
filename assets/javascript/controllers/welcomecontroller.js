window.addEventListener("DOMContentLoaded", init);

function init(registerObject){
document.querySelector("#name").innerHTML = localStorage.name;
// loadCart();
printImages();
}

function printImages(){
    var best_sellers = document.querySelector("#best_sellers");
 
   var pr = best_sellers_array.fetchAll();
   pr.then((data)=>{

    for(let key in data){
     
        var li = document.createElement("li");
        var span = document.createElement("span");
        var span2 = document.createElement("span");
        var img = document.createElement("img");
        var cart = document.createElement("button");
        span.innerHTML= data[key].product_name;
       
        span.setAttribute("title", data.id);
        span2.innerHTML = "Rs "+data[key].price;
        span2.setAttribute("title", data[key].id);
        img.src = data[key].url;
        cart.innerHTML = "Add to cart";
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(span2);
        li.appendChild(cart);
        best_sellers.appendChild(li);
        img.className = "size";
        span.className = "spanSize";
        span2.className = "spanSize";
        cart.className = "cart";
        // li.className = "size";
        cart.addEventListener("click", showCart);
   
  
   }
})
 
}
function showCart(){
    alert("Product is added to the cart");
    var ul = document.querySelector("#myCart");
    var list_to_add = event.srcElement.parentElement;
    // console.log(image_to_add);
    var li = document.createElement("li");
    li.innerHTML= list_to_add.innerHTML;
    var image = li.children[0];
    var span = li.children[1];
    var price = li.children[2];
    price.className = "price";
    var btn = li.children[3];
    image.className = "image";
    btn.innerHTML = "Delete";
    span.className = "spanSize";
    li.className = "text-center";
    ul.appendChild(li);
    console.log(btn);
    btn.addEventListener("click", deleteItem);
    // btn.className = "delete";

}

    


function deleteItem(){
    var li = event.srcElement.parentElement;
    li.style.display = "none";
}

