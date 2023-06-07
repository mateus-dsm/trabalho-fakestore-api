var url = 'https://fakestoreapi.com/products';

var selectElement = document.getElementById("category-options");

selectElement.addEventListener("change", function(){
    switch(selectElement.value){
        case "2":
            url += "/category/electronics";
            break;
        case "3":
            url += "/category/jewelery";
            break;
        case "4":
            url += "/category/men's clothing";
            break;
        case "5":
            url += "/category/women's clothing";
            break;
    }
    loadCards(url);
    url = 'https://fakestoreapi.com/products';
});

function loadCards(url){
    fetch(url).then(res=>res.json()).then(data=>{
        let str = "";
        for(let i=0; i<data.length; i++){
            let produto = data[i];
            str += 
            `<div class="card col-12 col-md-4 col-lg-3" style="width: 18rem;">
                <img src="${produto.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${produto.title}</h5>
                    <h5 class="card-price">R$ ${produto.price}</h5>
                    <p class="card-category">Category: ${produto.category}</p>
                    <p class="card-text">${produto.description.length > 100 ? produto.description.substring(0,100).concat("...") : produto.description}</p>
                    <a href="detalhes.html#${produto.id}" class="btn btn-primary">Details</a>
                </div>
            </div>`;
        }
        document.getElementById("products").innerHTML = str;
    });
}

document.addEventListener("DOMContentLoaded", loadCards(url));

const form = document.getElementById("search-box");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const text = document.getElementById("search-text").value;
    window.location.href = "pesquisa.html?text=" + encodeURIComponent(text);
});
