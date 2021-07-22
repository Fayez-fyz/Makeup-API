async function getData() {
    try {
     const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json');
     const data = await response.json();
     loadData(data); 
        
    } catch (error) {
        throw console.log("FAILED",error);
    }
   
 }
 getData();

//header part 
var div_1 = document.createElement('div')
div_1.setAttribute('class','no-gutters')
var div_2 = document.createElement('div')
div_2.setAttribute('class','header no-gutters py-5')
var title = document.createElement('h1');
title.setAttribute('id','heading')
title.innerText=" MAKEUP API"
var pr = document.createElement('p')
pr.setAttribute('id','p_head')
pr.innerText=" Designed By Fayez"

div_1.append(div_2)
div_2.append(title);
div_2.append(pr);
document.body.append(div_1);

// Display MakeupAPI data
var divbd1 = document.createElement('div')
divbd1.setAttribute("class","container-fluid px-4 no-gutters")
divbd1.setAttribute("id","container2")
var divbd2 = document.createElement('div')
divbd2.setAttribute("class","card text-white bg-dark mb-3")
divbd2.setAttribute('id','makeup_dt')
divbd1.append(divbd2)
document.body.append(divbd1)


function loadData(data){

  //looping all the data into the html elements
    for(i=10;i<100;i++){        // this MAKEUP API was not good it takes more time to load and this api have  more than 950 data, first 1 to 10 some images are not available so i took 10 to 100 array data only.it will get data array of 10 to 100 only, i have used this for reduce rendering time.
        var row = document.createElement('div');
        row.setAttribute('class','row pt-4')
        var col = document.createElement('div')
        col.setAttribute('class','col-md-4')
         var image = document.createElement('img');
        image.setAttribute('class','card-img-top pl-3')
        image.setAttribute('id','mkp_img')
        var col_2 = document.createElement('div')
        col_2.setAttribute('class','col-md-8') 
        var card_body= document.createElement('div')
        var name = document.createElement('h1')
        var brand = document.createElement('h2');
        var price = document.createElement('h3');
        var des  = document.createElement('p');

        image.src= data[i].image_link;
        image.alt="Not available"; 
        name.innerText = (data[i].name);
        brand.innerText = ('Brand : ' + data[i].brand);
        price.innerText = ('Price : ' + data[i].price_sign +" " + data[i].price);
        des.innerHTML = (data[i].description);
        row.append(col);
        col.append(image);
        row.append(col_2);
        col_2.append(card_body);
        card_body.append(name,brand,price,des);
         document.getElementById("makeup_dt").append(row);
    }
}


