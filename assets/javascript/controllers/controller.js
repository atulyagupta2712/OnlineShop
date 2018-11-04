window.addEventListener("DOMContentLoaded", init);

function init(){
    var admin = document.querySelector('.admin');
    var user = document.querySelector('.user');
    admin.addEventListener('click', ()=>{
        location.href = "admin.html";
    })
    user.addEventListener('click',()=>{
        location.href = "user.html";
    })
}