function addProduct(){
    $.ajax({
      "url": "http://localhost:3033/products",
      "method": "POST",
      "headers": {
        "content-type": "application/x-www-form-urlencoded"
      },
      "data": {
        "code": document.getElementById('product_code').value,
        "name": document.getElementById('product_name').value,
        "price": document.getElementById('product_price').value,
        "description": document.getElementById('product_desc').value,
        "inventoryActual": document.getElementById('product_inventory').value
      },
      "success": function(response){
        console.log(response);
        window.location.href = '/products/index.html';
      },
      "error": function(xhr, ajaxOptions, thrownError){
        console.log(xhr);
        let erreur = xhr.responseJSON;
        for (let key in erreur.errors) {
          erreur = `<p class="help is-danger">${erreur.errors[key]}</p>`;

          if(key == 'code'){
            $('#field_code').append(erreur);
          }else if(key == 'name'){
            $('#field_name').append(erreur);
          }else if (key == 'price') {
            $('#field_code').append(erreur);
          }
          //console.log(key, erreur.errors[key]);
        }
      }
    });
}
