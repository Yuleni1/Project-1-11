
var displayCatEl = document.querySelector("#displayCat");
var displayFactEl = document.querySelector("#cat-fact");
var generateEl = document.querySelector("#generate");
var showFact = document.getElementById("btn")



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

var getCatFactApi = function() {
    
    var factApiUrl = "https://cat-fact.herokuapp.com/facts/"
    
    fetch(factApiUrl)
    .then(function(response){
        console.log("response successful", response)
        return response.json()
        
    })

    .then(function(data){
        
        // displayCatFacts(data);
        var userClick = 0
        // var userClicks = data[userClick];
         console.log("this is the data", data[userClick].text)

       
        showFact.addEventListener("click", function(){
            userClick++
           
           randomFact = data[userClick].text
            var factEl = document.createElement("h1");
             factEl.textContent = randomFact;
             console.log("this is showing ",factEl)
             displayFactEl.appendChild(factEl);
            
            
            }
        )


    })
}



getCatFactApi() 


