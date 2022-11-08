var request = new XMLHttpRequest(); //create XHR object by using new keyword
request.open("GET","https://restcountries.com/v3.1/all",true); //3 parameters (http methods,api url,true or false (optional) - to handle errors)
request.send();  //sending the request to initiate the connection

request.onload = () =>{
        let countries            = JSON.parse(request.response);
    const population_Under_2lakh = countries.filter((e)=>e.population<2_00_000);
    console.log(population_Under_2lakh);//Printing countries details when population is under 2 lakh  
    for(let i in population_Under_2lakh){
     //Printing countries name and population when population is under 2 lakh   
    console.log(`${(+i)+1}. ${population_Under_2lakh[i].name.common} has a population of ${population_Under_2lakh[i].population}`);
    }
}