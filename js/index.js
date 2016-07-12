function search(){
   var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

   var myBpi = $.ajax({
      url: url,
      type: "GET",
      dataType: 'json',
      async: false
    });
   $(".ticker").html("1 BTC = " + "$" + myBpi.responseJSON.bpi.USD.rate);
   $(".homeTicker").html("1 BTC = " + "$" + myBpi.responseJSON.bpi.USD.rate);
}

search();



