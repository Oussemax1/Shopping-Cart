var deleteButtons = document.querySelectorAll(".fa-times");
var heartButtons = document.querySelectorAll(".fa-heart");
var plusButtons = document.querySelectorAll(".fa-plus");
var minusButtons = document.querySelectorAll(".fa-minus");
var total = document.querySelector("#total");

Array.from(deleteButtons).map( (el) => {
el.addEventListener("click", ()=> {
    el.parentElement.parentElement.remove();
});
});
Array.from(heartButtons).map( (el) => {
    el.addEventListener("click", ()=> {
        el.classList.toggle("red")
    });
    });
    Array.from(plusButtons).map((el)=> {
    el.addEventListener("click", () => {
        el.nextElementSibling.innerHTML =
        parseInt(el.nextElementSibling.innerHTML) +1;
        var price = el.parentElement.nextElementSibling.innerHTML.replace("€","");
        console.log(total);
        total.innerHTML = parseInt(total.innerHTML.replace("€","")) + parseInt(price) + "€";
    }); 
});
Array.from(minusButtons).map((el)=> {
    el.addEventListener("click", () => {
     if   (el.previousElementSibling.innerHTML > 1) {
        el.previousElementSibling.innerHTML =
        parseInt(el.previousElementSibling.innerHTML) - 1;
        var price = el.parentElement.nextElementSibling.innerHTML.replace("€","");
        total.innerHTML = parseInt(total.innerHTML.replace("€","")) - parseInt(price) + "€";
     }
    }); 
});