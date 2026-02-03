let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
let accountCounter = Number(localStorage.getItem("accountCounter")) || 1001;

function saveData() {
    localStorage.setItem("accounts", JSON.stringify(accounts));
    localStorage.setItem("accountCounter", accountCounter);
}
