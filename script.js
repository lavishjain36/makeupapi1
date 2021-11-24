

         
async function getAlldata() {
  try {
    var data = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json");
    var obj = await data.json();
    console.log(obj);



    
      for (var i = 0; i < obj.length; i++){
        var name = obj[i].name;
        var brand = obj[i].brand;
        var price = obj[i].price;
        var image = obj[i].image_link;
        var description = obj[i].description;
        var category = obj[i].category;
        var product = document.createElement("div");
        product.className = "product";
        product.innerHTML = `<div class="product-image">
                              <img src="${image}" alt="${name}">
                            </div>
                            <div class="product-info">
                              <h2>${name}</h2>
                              <h3>${brand}</h3>
                              <p>${description}</p>
                              <p>${price}</p>
                            </div>`;
        // document.getElementById("products").appendChild(product);
        document.body.appendChild(product);  
      }
    

  } catch (error) {
    console.log(error);
  }

    
}

getAlldata();