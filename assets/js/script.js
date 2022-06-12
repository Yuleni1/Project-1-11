const catImgBlock = document.getElementById("cat-img")
const catFactEl = document.getElementById("cat-fact")

let catImgArr = []
let catFactArr = []

let catImg = fetch("https://cataas.com/api/cats?limit=1")
    .then(res => res.json())
    .then(data => {
        // console.log(data)
    })

let catFact = fetch("https://cat-fact.herokuapp.com/facts")
    .then(res => res.json())
    .then(data => {

        for (let i = 0; i < data.length; i++) {
                    
        }

    })

