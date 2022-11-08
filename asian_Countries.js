var request = new XMLHttpRequest(); //create XHR object by using new keyword
request.open("GET","https://restcountries.com/v3.1/all",true); //3 parameters (http methods,api url,true or false (optional) - to handle errors)
request.send();  //sending the request to initiate the connection

request.onload = () =>{
    let countries         = JSON.parse(request.response);
    const asian_countries = countries.filter((e)=>e.region==="Asia");
    console.log(asian_countries);//Printing asian countries details
    for(let i in asian_countries){
    console.log(`${(+i)+1}. ${asian_countries[i].name.common}`);//Printing asian countries name
    }
}