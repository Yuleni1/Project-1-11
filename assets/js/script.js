const catImgBlock = document.getElementById("cat-img")
const catFactEl = document.getElementById("cat-fact")
const generateCat = document.getElementById("generate")

let catImgArr = []
let catFactArr = []

let catImg = fetch("https://api.thecatapi.com/v1/images/search")
    .then(res => res.json())
    .then(data => {
        // console.log(data)
    })

let catFact = fetch("https://cat-fact.herokuapp.com/facts")
    .then(res => res.json())
    .then(data => {
        let userClick = 0
        generateCat.addEventListener("click", () => {
            userClick++

            catFactEl.textContent = ""
            let randomFact = data[userClick].text
            factEl = document.createElement("p")
            factEl.textContent = randomFact
            catFactEl.appendChild(factEl)
        })
    })

