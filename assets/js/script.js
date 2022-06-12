var displayCatEl = document.querySelector("#displayCat");
var displayFactEl = document.querySelector("#cat-fact");
var generateEl = document.querySelector("#generate");
var showFact = document.getElementById("btn");


const catimgLimit = 200;
const catimgNumber = Math.floor(Math.random() * catimgLimit);
var caturl = "https://cataas.com/cat?" + catimgNumber + ".jpg"
document.getElementById("displayCat").innerHTML = `<img src=${caturl} >`

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