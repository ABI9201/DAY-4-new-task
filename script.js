//DAY 4 TASK
1. //compare two json have the same properties without order

const object1 = {
       name: 'Person 1',
    age  : '5'
     };
         
    const object2 = {
       age: '5',
       name: 'person 1'
     };
         
     JSON.stringify(object1) === JSON.stringify(object2)
     // false
         
     _.isEqual(object1, object2)
     // true


//2.print all th countries flag in the console

var req = new XMLHttpRequest();

req.open("Get","https://restcountries.com/v2/all")

req.send()

req.onload=function(){
   var result=JSON.parse(req.response);
  
   console.log(result);

for(var i=0;i<result.length;i++){
   console.log(result[i].flag)
}


   
}

//3.print all the countries name,region,subregion,population

var req = new XMLHttpRequest();

req.open("Get","https://restcountries.com/v2/all")

req.send()

req.onload=function(){
   var result=JSON.parse(req.response);
  
   console.log(result);

for(var i=0;i<result.length;i++){
   console.log(`CountryName-${result[i].name} and Region- ${result[i].region} and Subregion - ${result[i].subregion} and Population-${result[i].population}`)
}


   
}