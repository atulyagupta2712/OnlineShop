const productOperations = {

    addProduct(productObject){
        firebase.database().ref("products/"+productObject.id).set(productObject);
        alert("record added..");
    },

    searchById(id){
        var pr = new Promise((resolve,reject)=>{
            var prodRef= firebase.database().ref("products/"+id);
            prodRef.on("value", snapshot=>{
                var object = snapshot.val();
                resolve(object);
            })
        })
        return pr;
    },
    searchAll(){
        var prodRef = firebase.database().ref("products");
        prodRef.on("value", snapshot =>{
            var object = snapshot.val();
            for(let key in object){
                obj = object[key];
                console.log(object[key]);
                for(let k in obj){
                    console.log(obj[k]);
                }
            }
        })
        this.fetchAll();
    }, 
    fetchAll(){
        var pr = new Promise((resolve, reject)=>{
            var prodRef = firebase.database().ref('products');
        prodRef.on('value',(snapshot)=>{
            var object = snapshot.val();
            resolve(object);
        });
        });
        return pr;
    },

    deleteRecord(id){
        var prodRef = firebase.database().ref('products/'+id);
        prodRef.remove();
        return this.fetchAll();
    },
    searchForId(){
        var pr = new Promise((resolve,reject)=>{
            var search = firebase.database().ref("products");
            search.limitToLast(1).on("child_added", snapshot =>{
                var object = snapshot.val();
                resolve(object);
            }) 
        })
        return pr;
    }
}