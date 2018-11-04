
const loginOperations = {
    searchByLoginNumber(loginObject){
        var pr = new Promise((resolve,reject)=>{
            var loginRef = firebase.database().ref("registration/admin/"+loginObject.loginNumber);
            // var loginRefEmail =  firebase.database().ref("registration/"+loginObject.loginNumber)
            loginRef.on("value", snapshot =>{
                var object = snapshot.val();
                resolve(object);
               
            })
        })
        return pr;
    }

    
  
    
}