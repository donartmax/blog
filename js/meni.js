// function myFunction(x) {
//     x.classList.toggle("change");
//     x.addEventListener("click", function () {
//         this.classList.toggle("active");
//         var item = document.getElementsByClassName("meni-telefon");

//         if (item.style.display === "inline-block") {
//             item.style.display = "none";
//         } else {
//             item.style.display = "inline-block";
//         }
//     }
// }

// function myFunction(x) {
//     x.classList.toggle("change");
//     var el = document.getElementsByClassName("meni-telefon");
//     if (el.style.display === "inline") {
//         el.style.display = "none";
//     } else {
//         el.style.display = "inline";
//     }
// }

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";
    }
} 