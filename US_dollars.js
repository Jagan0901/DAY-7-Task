var request = new XMLHttpRequest(); //create XHR object by using new keyword
request.open("GET","https://restcountries.com/v3.1/currency/dollar",true); //3 parameters (http methods,api url,true or false (optional) - to handle errors)
request.send();  //sending the request to initiate the connection

request.onload = () =>{
    let countries        = JSON.parse(request.response);
    let USD_countries = countries.filter((e)=>e.currencies[`USD`]);
    for(let i in USD_countries){
    console.log(`${+i+1} ${USD_countries[i].name.common}`);
    }
}