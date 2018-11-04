window.addEventListener("DOMContentLoaded", bindEvents);

var counter=1;
var id = 1;

function bindEvents(){
    document.querySelector("#login-submit").addEventListener("click", login);
    document.querySelector("#pills-profile-tab").addEventListener("click", register)
   

    increment();
  
}
function increment(){
    var pr= loginOperations.searchById();
    pr.then(data=>{
        if(data){
            data.id++;
            id=data.id;
            document.querySelector("#rid").innerHTML = id;
        }
        else{
            counter = 1;
            id=counter;
            document.querySelector("#rid").innerHTML = id;
        }
    })

}


function login(){
        var loginNumber = document.querySelector("#form-number").value; 
        var loginEmail = document.querySelector("#login-email").value;
        var loginPassword = document.querySelector("#login-password").value;
        if(loginNumber && loginEmail && loginPassword){
            var loginObject = new Login(loginNumber, loginEmail, loginPassword);
            var pr = loginOperations.searchByLoginNumber(loginObject);
            pr.then(data =>{
                if(data.email == loginEmail){
                    if(data.password == loginPassword){
                        localStorage.loginEmail = loginEmail;
                        document.querySelector("#message").innerHTML = "You have been successfully logged in...";
                        location.href = "welcome.html"
                    }
                    else{
                        document.querySelector("#message").innerHTML = "Invalid password..."
                    }
                }
                else{
                    document.querySelector("#message").innerHTML = "Invalid email address...."
                }
            })
       
        }
        else{
            document.querySelector("#message").innerHTML = "Please fill in all the fields."
        }
 
    
// })
}

function register(){
  
    document.querySelector("#register-submit").addEventListener("click", ()=>{
        var name = document.querySelector("#name").value;

        var mobile = document.querySelector("#mobile").value;
        var email = document.querySelector("#email").value;
        var password = document.querySelector("#password").value;
        if(name && mobile && email && password){
            var registerObject = new Register( id,name, mobile, email, password);
            registerOperations.addRegistration(registerObject);
       
            increment();
            localStorage.name = document.querySelector("#name").value;
            document.querySelector("#register-message").innerHTML = "You have been successfully registered. You can login.";
        }
        else{
            document.querySelector("#register-message").innerHTML = "Please fill in all the fields.";
        }
      
        // 
    
    });
    
       
   
 
}