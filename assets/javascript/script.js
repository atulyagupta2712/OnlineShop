const best_sellers_array = {
   fetchAll(){
       var pr = new Promise((resolve,reject)=>{
           var prodRef = firebase.database().ref("products");
           prodRef.on("value", snapshot=>{
               var object = snapshot.val();
               resolve(object);
           })
       })
       return pr;
   }
}