class Register{
    constructor(id,name, mobile, email, password){
       this.id= id;
        this.name = name;
        this.mobile = mobile;
        this.email = email;
        this.password = password;
    }
};

class Login{
    constructor(loginNumber, loginEmail, loginPassword){
        this.loginNumber = loginNumber;
        this.loginEmail = loginEmail;
        this.loginPassword= loginPassword;
    }
};

class Product{
    constructor(id, product_name, price, url){
        this.id= id;
        this.product_name = product_name;
        this.price = price;
        this.url = url;
    }
};