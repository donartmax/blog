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