$.getJSON('data/products.json', function (data) {
    var count = 0;
    while (data[count]) {
        count++;
    }
    var htmlString = '<h4 class="text-primary">'+count+'</h4>';
    $('#totalProducts').append(htmlString);
    console.log(count);

});
$.getJSON('data/customers.json', function (data) {
    var count = 0;
    while (data[count]) {
        count++;
    }
    var htmlString = '<h4 class="text-primary">'+count+'</h4>';
    $('#totalCustomers').append(htmlString);

    console.log(count);

});
$.getJSON('data/suppliers.json', function (data) {
    var count = 0;
    while (data[count]) {
        count++;
    }
    var htmlString = '<h4 class="text-primary">'+count+'</h4>';
    $('#totalSuppliers').append(htmlString);
    console.log(count);

});
$.getJSON('data/orders.json', function (data) {
    var count = 0;
    while (data[count]) {
        count++;
    }
    var htmlString = '<h4 class="text-primary">'+count+'</h4>';
    $('#totalOrders').append(htmlString);
    console.log(count);

});

