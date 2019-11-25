function submit(){
    var naslov = document.getElementById("naslov");
    var tekst = document.getElementById("tekst");
    if(naslov.value=="" || tekst.value==""){
        alert("Morate uneti sve elemente!");
    }else{
        document.getElementById("forma_novi").submit();
    }
}

function reset(){
    document.getElementById("forma_novi").reset();
}