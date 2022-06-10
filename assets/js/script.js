
var displayCatEl = document.querySelector("#displayCat");
var displayFactEl = document.querySelector("#cat-fact");
var generateEl = document.querySelector("#generate");



var apiUrl = "https://cataas.com/api/cats?limit=20"

var catArray=[];




// fetch(apiUrl)
// .then(function(response){
//     // console.log (response);
//     return response.json()



// })

// .then(function(data){
   
//     for (var i = 0; i < data.length; i++){
//         var pullCatImg = data[i].id
//     //create a div for each image       
//     // var dataEl = document.createElement("a");
//     // displayCatEl.appendChild(dataEl)
//     // dataEl 
   
//     // catArray.push(pullCatImg)
//     // console.log(pullCatImg)
//     // return pullCatImg
// }
// })



var catFactArray =[];

var getCatFactApi = function(data) {
    var factApiUrl = "https://cat-fact.herokuapp.com/facts"
    
    fetch(factApiUrl)
    .then(function(response){
        console.log("response successful", response)
        return response.json()
        
    })

    .then(function(data){
        
        for (var i = 0; i < data.length; i++ ){
         
            var carFact = data[i].text
            console.log(data[i].text);

            var factEl = document.createElement("h1");
            factEl.textContent = carFact;
            console.log(factEl)
            displayFactEl.appendChild(factEl);
            //catFactArray.push(carFact)
        }
      
    })
}
     



       
//     .then(function(data){
// displayCatFact (data)
         
//     for (var i = 0; i < data.length; i++ ){
        
//         //var pullCatFact = catFactArray.push(data[i].text)

//          var pullCatFact = data[i].text
//             catFactArray.push(pullCatFact).

//                 console.log("this is what is being pulled",pullCatFact);
//         console.log(data)
//     })
   
// }

getCatFactApi() 


// function displayCatFact (data){
  
        
//         //var repoEl = document.createElement("a");

//         }

// }

// displayCatFact()

generateEl.addEventListener("sumbit", getCatFactApi)