let txt="";
let products = document.querySelector(".products");
let p = products.querySelectorAll("div");
let search = document.getElementById("search");

search.addEventListener("keyup" , (event) => {
    txt = event.target.value.toUpperCase();
    for( let i=0; i<p.length;i++){
        let prodname = p[i].querySelector("p").textContent;
        if(prodname.toUpperCase().indexOf(txt) <0) p[i].style.display ="none";
        else p[i].style.display ="block";
    }
});