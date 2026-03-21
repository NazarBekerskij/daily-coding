const nameRef = document.querySelector(".name")
const surnameRef = document.querySelector(".surname")
const saveBtn = document.querySelector(".save")



let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

saveBtn.addEventListener("click", () => {
    const newContact = {
        name: nameRef.value,
        surname: surnameRef.value,
    }
    contacts.push(newContact)


    localStorage.setItem("contacts", JSON.stringify(contacts))

    nameRef.value = "";
    surnameRef.value = "";
})
