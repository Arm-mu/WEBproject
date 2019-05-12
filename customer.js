$.getJSON('data/customers.json', function (data) {

    console.log(data);
    var i = 0
    for (i = 0; i < data.length; i++) {
        var j = i + 1;
        htmlString = '<tr><th scope="row">' + j + '</th><td>' + data[i].customerID +
            '</td><td ><a href="custdetail.html" onclick="setCookies(' + i + ')">' + data[i].contactName + '</a></td><td>' + data[i].contactTitle + '</td></tr>'
        $('#getData').append(htmlString);
    }

});
function setCookies(cookie) {
    Cookies.set('custIndex', cookie);

} 