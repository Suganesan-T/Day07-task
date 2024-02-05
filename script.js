//1)a)Get all the countries from Asia continent /region using Filter function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    var asia_countries = res.filter((ele)=>ele.region=="Asia")
    console.log(asia_countries)
}
//b)Get all the countries with a population of less than 2 lakhs using Filter function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    var population = res.filter((ele)=>ele.population<200000)
    console.log(population)
}
//c)Print the following details name, capital, flag, using forEach function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function (){
    var res = JSON.parse(request.response);
    res.forEach((ele)=>{
        console.log(ele.name,ele.capital,ele.flag,ele.currencies);
         })
    }
//d)Print the total population of countries using reduce function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    var total_population = res.reduce((acc,vc)=>acc+vc.population,0)
    console.log(total_population)
}
//e)Print the country that uses US dollars as currency.
var request = new XMLHttpRequest();
   request.open("Get", "https://restcountries.com/v3.1/all")
   request.send();
   request.onload = function () {
   var res = JSON.parse(this.response);
   for(i=0;i<res.length;i++){
        if(res[i].currencies[0].code==="USD")
       {
           console.log("name:",res[i].name,"==>",res[i].currencies[0].code)
       }
     }
    }