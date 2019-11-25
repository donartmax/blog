function validate(){
    var username = document.getElementById("uname");
    var password = document.getElementById("pass");

    if(username.value =="" || password.value==""){
        alert("Unesi nesto, nema praznih vrednosti!");
        return false;
    }else{
        return true;
    }
}

function validatereg(){
    var name = document.getElementById("name");
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if(name.value == "" || username.value =="" || email.value =="" || password.value==""){
        alert("Sve mora biti popunjeno!");
        return false;
    }else{
        return true;
    }
}