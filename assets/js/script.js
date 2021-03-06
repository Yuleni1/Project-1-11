const catImgBlock = document.getElementById("cat-img")
const catFactEl = document.getElementById("cat-fact")
const generateCat = document.getElementById("generate")
const saveFactBtn = document.getElementById("save-fact")
const loadFactsEl = document.getElementById("load-facts")
const savedCatsBtn = document.getElementById("saved-fact-btn")
const closeBtn = document.getElementById("close")
const generatePage = document.getElementById("generate-page")
const savedList = document.getElementById("saved-list")
const saveNoti = document.getElementById("save-notif")

generateCat.addEventListener("click", fetchPics)
savedCatsBtn.addEventListener("click", loadFacts)

closeBtn.addEventListener("click", () => {
    closeBtn.classList.add("hide")
    savedList.classList.add("hide")
    generatePage.classList.remove("hide")
})


let loadedFacts = []


function fetchPics()  {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(res => res.json())
        .then(data => {

            catImgBlock.innerHTML = ""

            let userClick = 0
            userClick++

            let catsImgUrl = data[0].url
            let catsImgEl = document.createElement("img")
            catsImgEl.setAttribute('src', catsImgUrl)
            
            catImgBlock.appendChild(catsImgEl)

    })
}


let catFact = fetch("https://cat-fact.herokuapp.com/facts")
    .then(res => res.json())
    .then(data => {
        let userClick = 0
        generateCat.addEventListener("click", () => {
            userClick++

            if (userClick > 4) {
                userClick = 0
            }

            catFactEl.textContent = ""
            let randomFact = data[userClick].text
            factEl = document.createElement("p")
            factEl.textContent = randomFact
            catFactEl.appendChild(factEl)

            saveNoti.classList.add("hide")

            saveFactBtn.addEventListener("click", () => {
                console.log(loadedFacts)
                if (loadedFacts.indexOf(randomFact) === -1) {
                    loadedFacts.push(randomFact)
                    localStorage.setItem("fact", JSON.stringify(loadedFacts))
                }else {
                    return
                }

                saveNoti.classList.remove("hide")
            })
        })
    })

 
function loadFacts() {
    loadedFacts = JSON.parse(localStorage.getItem("fact"))
    generatePage.classList.add("hide")
    savedList.classList.remove("hide")
    closeBtn.classList.remove("hide")

    loadFactsEl.innerHTML = ""

    for (let i = 0; i < loadedFacts.length; i++) {
        const displayFactEl = document.createElement("li")
        displayFactEl.textContent = loadedFacts[i]
        loadFactsEl.appendChild(displayFactEl)
    }
    
}