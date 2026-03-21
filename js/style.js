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



const players = [
    "Vinicius Junior",
    "Jude Bellingham",
    "Kylian Mbappe",
    "Federico Valverde",
    "Rodrygo",
    "Luka Modric",
    "Eduardo Camavinga",
    "Aurelien Tchouameni",
    "Dani Carvajal",
    "Thibaut Courtois",
    "Antonio Rudiger",
    "Arda Guler",
    "Brahim Diaz",
    "Endrick"
];



const inputRef = document.querySelector("#search");
const listRef = document.querySelector(".list");

function renderPlayers (playerToRender) {
    const murkup = playerToRender.map((player) => {
       return `<li>${player}</li>`
    }).join("")
    listRef.innerHTML = murkup;
}
renderPlayers(players)

inputRef.addEventListener("input", (event) => {
    const value = event.target.value.toLowerCase();
    

    const fillteredPlayers = players.filter((player) => {
        const tolowerPlayer = player.toLowerCase();
        return tolowerPlayer.includes(value)
    })    
    renderPlayers(fillteredPlayers)
})











































