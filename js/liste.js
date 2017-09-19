$(document).ready(function() {
  $.get("http://localhost:3033/products", function(data){
    $.each(data["data"], function(i, obj){

      $('#productList').append(`<tr> <th> ${obj.code}</th> <th> ${obj.name} </th>
        <th>${obj.price}$</th> <th> ${obj.description || ''}</th>
        <th>${obj.inventoryActual}</th> </tr>`)

    });
    console.log(data["data"]);
  });

});
