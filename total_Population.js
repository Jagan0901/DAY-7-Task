var request = new XMLHttpRequest(); //create XHR object by using new keyword
request.open("GET","https://restcountries.com/v3.1/all",true); //3 parameters (http methods,api url,true or false (optional) - to handle errors)
request.send();  //sending the request to initiate the connection

request.onload = () =>{
    let countries = JSON.parse(request.response);
    let empt_arr  = [];
    for(let i in countries){
        empt_arr.push(countries[i].population)
    }
 const total_Population = empt_arr.reduce((acc,curr)=>acc+curr,0);
    // console.log(empt_arr);
    console.log(total_Population); //Printing total population of the countries in the world
}