$.getJSON('data/customers.json',function(data)
    {console.log(data);
        console.log(Cookies.get("custIndex"));
        var i=Cookies.get("custIndex");
        var headhtml = ''+data[i].customerID+'';
        console.log(data[i].contactName);
        $("#id").append(headhtml);
            console.log(data[i].address);
        var bodyhtml = 'ID: '+data[i].customerID+'<br>Company: '+
        ''+data[i].companyName+'<br>Name: '+
        ''+data[i].contactName+'<br>Title: '+
        ''+data[i].contactTitle+'<br>Address: '+
        ''+data[i].address.street+' '+data[i].address.city+' '+data[i].address.region+' '+data[i].address.postalCode+' '+data[i].address.country+' '+data[i].address.phone;
        $("#detailCard").append(bodyhtml);
        });