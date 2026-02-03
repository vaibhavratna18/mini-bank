function showMessage(msg, isError = false) {
    const out = document.getElementById("output");
    out.innerText = msg;
    out.style.borderLeftColor = isError ? "#dc2626" : "#16a34a";
}

function renderAccounts() {
    const list = document.getElementById("accountList");
    list.innerHTML = "";

    accounts.forEach(acc => {
        const li = document.createElement("li");
        li.innerText =
            "AccountNo: " + acc.accountNo +
            " | Name: " + acc.holderName +
            " | Balance: " + acc.balance +
            " | KYC: " + acc.isKYCVerified;
        list.appendChild(li);
    });
}
