window.addEventListener("DOMContentLoaded", init);

var id = 0;
var counter = 1;

function init(){
    // document.querySelector("#name").innerHTML = localStorage.name;
    document.querySelector("#add").addEventListener("click", add);
    document.querySelector("#search").addEventListener("click", search);
    document.querySelector("#searchAll").addEventListener("click", ()=>{
        var pr = productOperations.fetchAll();
        pr.then((object)=>{
           printTable(object);
        })
    });
    
 
    increase();
    document.querySelector("#showhide").className = "hide";
}

function increase(){
    var pr = productOperations.searchForId();
    pr.then(data=>{
        if(data){
            data.id++;
            id= data.id;
            document.querySelector("#productId").innerHTML = id;
        }
        else{
            counter = 1;
            id = counter;
            document.querySelector("#productId").innerHTML = id;
        }
    })

  
}

function add(){
    var product_name = document.querySelector("#product-name").value;
    var price = document.querySelector("#price").value;
    var url = document.querySelector("#url").value;
    if(product_name && price && url){
        var productObject = new Product(id, product_name, price, url);
        productOperations.addProduct(productObject);
        printRecord(productObject);
        document.querySelector("#product-name").value ="";
        document.querySelector("#price").value = "";
        document.querySelector("#url").value = "";
    
        increase();
    }
    else{
        alert('Fill all the details please');
    }
   
}

function search(){
    document.querySelector("#showhide").className = "show";
    document.querySelector("#showhide").addEventListener("change", ()=>{
        var id = document.querySelector("#searchId").value;
        console.log("id is",id);
        var pr = productOperations.searchById(id);
        pr.then(data=>{
            document.querySelector("#result").innerHTML ="Id of product:"+ data.id+ ",<br>"+"Name of the product: "+data.product_name+",<br>"+" Price of product "+data.price+",<br>"+"Url of product is "+data.url;
        }).catch(err=>{
            console.log("error is",err);
        })
    })
    
}

function printRecord(productObject){
    console.log("printrecord");
    var tbody= document.querySelector("#productList");
    var tr = tbody.insertRow();
    var index=0;
    for(let key in productObject){
        tr.insertCell(index).innerHTML = productObject[key];
        index++;
    }
    tr.insertCell(index).appendChild(createIcon(productObject.id));

}

function createIcon(id){
    // var button = document.createElement("button");
    // button.innerHTML = "X";
    var img= document.createElement("img");
    img.setAttribute("pid", id);
    img.src= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAeFBMVEX///8wMDANDQ0tLS0aGhojIyN4eHgQEBCPj48TExPT09MpKSlQUFDy8vKGhoavr6+bm5s+Pj5mZmakpKQdHR3Z2dmqqqo4ODhKSkrt7e34+Pjg4OAgICBYWFi9vb1fX1/IyMhtbW23t7eUlJSHh4dsbGzMzMzm5uYO+iaHAAAClElEQVR4nO2b6ZKiMBSFhQAxBhBklU3bXnz/N5ywOJ1AukaSSNXM3PPzVorzSeJN0MNuBwKBQErKPqlDeDlFGGzoHxF7Kfq1mX/O7DD71KJIU2/kH7i2TRqKZqLNaSMAdgOIi6yl0HkbAI/5S+yZrtsAfOX58SbVfRuA/1BVoKbKhHn2UTaSrvOUMG0jzS9G1mJV90mOp9Oi34eWi+c9b4UIwfSq7O8N7qm7aHrPi9LGIUdF/9AeW6686Twt5Dqdkn/Xz6C05a4VtVSWYoWYPzVg3xN4CgAJu/+G/Nk0KOzUsY1/2HJU9L7a/45tx8T8T2pXA9yM3gCrWN2WI4MroNfqRXC7fHomBUeFv1VHX1+ZDsBe8zTQS+uBad8/AWlKDwCnVFcHPQD9dggAAGAQoJBcXlIrxJoxAL8LzsnMz6ur7E0sxfk56MoXAMTDhtqJ/sMgkWDoOzUHagpgP1Za3mzc5A98afqZJjQPMD3evHHnpHg8ZwX8w0M4DovoqwBOKVoA8L/YPAC+T7SmAbij4gMAc1APAEy3BHAkAC4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMA/B5CMFZ8DKMa8as3H3qbkoGceYMzD1YSPmOVDLeQB4iE8WSHzAFafz60LIeNW9GHRnAjBv8udTUprvwAAobYks5gljVvLtu3U4mu+7/DDtF57SPgAg9unjHHDxxxR2gefxeAfHYZ9/5urla0+8ADIdQgR/JlbSogzi3n0w9LfTKWO/26HhIsjukgZS0piLdQD+GjmV18rrTXI1nOhmWxVSRQLuuoBlPrvvRy1/E28enQt/2z0g05moqxVpIZwUQvVS5XdkpXKOwjygkAg0HP6Bb8+Zz838TkcAAAAAElFTkSuQmCC";
    img.className = "icon";
    img.addEventListener("click", deleteRecord);
    return img;

}
function deleteRecord(){
    var id = this.getAttribute("pid");
    console.log("Id for Deletion is ",id);
    var pr = productOperations.deleteRecord(id);
    console.log("pr",pr);
    pr.then(object=>{
        // console.log("After Delete Records are ",object);
        printTable(object);
    }).catch(err=>console.log("Error is ",err));
    
}
function printTable(object){
    document.querySelector("#productList").innerHTML = "";
    for(let key in object){
        printRecord(object[key]);
    }
}