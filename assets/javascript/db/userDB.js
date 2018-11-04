const registerOperations = {
    addRegistration(registerObject){
    
            firebase.database().ref("registration/users/"+registerObject.id).set(registerObject);
    
    
       
    }
}
const loginOperations = {
    searchByLoginNumber(loginObject){
        var pr = new Promise((resolve,reject)=>{
            var loginRef = firebase.database().ref("registration/users/"+loginObject.loginNumber);
        
            loginRef.on("value", snapshot =>{
                var object = snapshot.val();
                resolve(object);
               
            })
        })
        return pr;
    },
    searchById(){
        var pr = new Promise((resolve, reject)=>{
            var search = firebase.database().ref("registration/users");
            search.limitToLast(1).on("child_added", snapshot=>{
                var object = snapshot.val();
                resolve(object);
            })
        })
        return pr;
    }
  
    
}
