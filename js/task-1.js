// const nameRef = document.querySelector(".name")
// const surnameRef = document.querySelector(".surname")
// const saveBtn = document.querySelector(".save")



// let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

// saveBtn.addEventListener("click", () => {
//     const newContact = {
//         name: nameRef.value,
//         surname: surnameRef.value,
//     }
//     contacts.push(newContact)


//     localStorage.setItem("contacts", JSON.stringify(contacts))

//     nameRef.value = "";
//     surnameRef.value = "";
// })


////////////////////////////////////////////////////////////////////////




// const players = [
//     "Vinicius Junior",
//     "Jude Bellingham",
//     "Kylian Mbappe",
//     "Federico Valverde",
//     "Rodrygo",
//     "Luka Modric",
//     "Eduardo Camavinga",
//     "Aurelien Tchouameni",
//     "Dani Carvajal",
//     "Thibaut Courtois",
//     "Antonio Rudiger",
//     "Arda Guler",
//     "Brahim Diaz",
//     "Endrick"
// ];



// const searchRef = document.querySelector("#search")
// const listRef = document.querySelector(".list")


// function renderPlayers (playersToRender) {
//     const murkup = playersToRender.map((player) => {
//         return `<li>${player}</li>`
//     }).join("")    
//     listRef.innerHTML = murkup
// }

// renderPlayers(players)

// searchRef.addEventListener("input", (event) => {
//     const value = event.target.value.toLowerCase()
    
//     const fillteredPlayers = players.filter((player) => {
//         const tolowerPlayer = player.toLowerCase()
//         return tolowerPlayer.includes(value)
//     })

//     renderPlayers(fillteredPlayers)    
// })







/////////// 2 спроба сам //////////////////////////////////////



// const players = [
//     "Vinicius Junior",
//     "Jude Bellingham",
//     "Kylian Mbappe",
//     "Federico Valverde",
//     "Rodrygo",
//     "Luka Modric",
//     "Eduardo Camavinga",
//     "Aurelien Tchouameni",
//     "Dani Carvajal",
//     "Thibaut Courtois",
//     "Antonio Rudiger",
//     "Arda Guler",
//     "Brahim Diaz",
//     "Endrick"
// ];



// const inputRef = document.querySelector("#search");
// const listRef = document.querySelector(".list");

// function renderPlayers (playerToRender) {
//     const murkup = playerToRender.map((player) => {
//        return `<li>${player}</li>`
//     }).join("")
//     listRef.innerHTML = murkup;
// }
// renderPlayers(players)

// inputRef.addEventListener("input", (event) => {
//     const value = event.target.value.toLowerCase();
    

//     const fillteredPlayers = players.filter((player) => {
//         const tolowerPlayer = player.toLowerCase();
//         return tolowerPlayer.includes(value)
//     })    
//     renderPlayers(fillteredPlayers)
// })












///////////////////// 3 спроба з назвами клубів /////////////////



// const clubs = [
//     { name: "Real Madrid", country: "Spain" },
//     { name: "Manchester City", country: "England" },
//     { name: "Bayern Munich", country: "Germany" },
//     { name: "AC Milan", country: "Italy" },
//     { name: "Karpaty Lviv", country: "Ukraine" },
//     { name: "Girona", country: "Spain" },
//     { name: "Liverpool", country: "England" }
// ];


// const inputRef = document.querySelector("#search");
// const listRef = document.querySelector(".list");

// function renderClubs (clubsToRender){
//     const murkup = clubsToRender.map((club) => {
//         return `<li>${club.name}<span>${club.country}</span></li>`
//     }).join("")
//     listRef.innerHTML = murkup;
// }

// renderClubs(clubs)

// inputRef.addEventListener("input", (event) => {
//     const value = event.target.value.toLowerCase()

    
//     const fillterClubs = clubs.filter((club) => {
//         const tolowerClubs = club.name.toLowerCase()
//         return tolowerClubs.includes(value)
//     })
//     renderClubs(fillterClubs)    
// })







////////timer///////////////////////////////////////////////////////////



// const startRef = document.querySelector(".start")
// const stopRef = document.querySelector(".stop")
// const timeRef = document.querySelector(".time")




// let s = 30;
// let id = null;


// startRef.addEventListener("click", () => {
//     if(id) return;
//     id = setInterval(() => {

//         const minutes = Math.floor(s / 60).toString().padStart(2, "0")
//         const second = (s % 60).toString().padStart(2, "0")

//         timeRef.textContent = `${minutes}:${second}`

//         s--
//         // timeRef.textContent = s


//         if(s === 10){
//             timeRef.classList.add("active")
//         }

//         if(s === 0){
//             clearInterval(id)
//             id = null;
//         }
//     }, 1000)
// })


// stopRef.addEventListener("click", () => {
//     clearInterval(id)
//     id = null;
// })














