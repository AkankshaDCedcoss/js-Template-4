var Product_details = [];
function myfunction() {
  var Product_Id = parseInt(document.getElementById("pid").value);
  var Product_name = parseInt(document.getElementById("pname").value);
  var Product_price = parseInt(document.getElementById("pprice").value);

  product = {
    p_id: Product_Id,
    p_name: Product_name,
    p_price: Product_price,
  };
  Product_details.push(product);
  entry(Product_details);
}

function entry(Product_details) {
  var html =
    "<table><tr><th>Product_Id</th><th>Product_name</th><th>Product_price</th><tr>";
  for (var i = 0; i < Product_details.length; i++) {
    html +=
      "<tr><td>" +
      Product_details[i].p_id +
      "</td><td>" +
      Product_details[i].p_name +
      "</td><td>" +
      Product_details[i].p_price +
      " USD " +
      "</td><tr>";
  }
  html += "</table>";
  document.getElementById("outputdiv").innerHTML = html;
}
