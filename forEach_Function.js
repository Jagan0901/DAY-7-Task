var request = new XMLHttpRequest(); //create XHR object by using new keyword
request.open("GET","https://restcountries.com/v3.1/all",true); //3 parameters (http methods,api url,true or false (optional) - to handle errors)
request.send();  //sending the request to initiate the connection

request.onload = () =>{
    let countries  = JSON.parse(request.response);
     countries.forEach((e) => {
       console.log(`Country name:`,e.name.common);//Printing countries name
       console.log(`Capital:`,e.capital); //Printing countries capital
        console.log(`Country flag:`,e.flags); //Printing countries flags    
    });
    }




