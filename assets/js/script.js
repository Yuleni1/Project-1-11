
var displayCatEl = document.querySelector("#displayCat");
var displayFactEl = document.querySelector("#cat-fact");
var generateEl = document.querySelector("#generate");
var showFact = document.getElementById("btn")
var showImg = document.querySelector("#img")



var apiUrl = "https://api.thecatapi.com/v1/images/search"


showFact.addEventListener("click",getCatImage)

function getCatImage (){



fetch(apiUrl)
.then(function(response){
    // console.log (response);
    return response.json()



})

.then(function(data){
   

   
    
    // showFact.addEventListener("click", function(){
        var userClickimg = 0
         userClickimg++
       
          if(userClickimg > 4){
              userClickimg = 0
          }
          var randomCatPic = data[0].url
         console.log("this is what it returning", randomCatPic)
         var catPic = document.createElement("img");
          catPic.setAttribute('src',randomCatPic );
          console.log("data",catPic)
    


         displayFactEl.appendChild(catPic);
        
        
})


// })


}

getCatImage ()

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
           
          var randomFact = data[userClick].text
           displayFactEl.textContent="";
            var factEl = document.createElement("h1");
             factEl.textContent = randomFact;
             console.log("this is showing ",factEl)
             displayFactEl.appendChild(factEl);
            
            
            }
        )


    })
}



getCatFactApi() 


