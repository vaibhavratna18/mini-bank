function createAccount() {
    const res = createAccountService(
        holderName.value,
        Number(initialBalance.value),
        kycStatus.checked
    );
    showMessage(res.message, !res.success);
    renderAccounts();
}

function depositMoney() {
    const res = depositService(
        Number(depositAcc.value),
        Number(depositAmt.value)
    );
    showMessage(res.message, !res.success);
    renderAccounts();
}

function withdrawMoney() {
    const res = withdrawService(
        Number(withdrawAcc.value),
        Number(withdrawAmt.value)
    );
    showMessage(res.message, !res.success);
    renderAccounts();
}

function transferMoney() {
    const res = transferService(
        Number(senderAcc.value),
        Number(receiverAcc.value),
        Number(transferAmt.value)
    );
    showMessage(res.message, !res.success);
    renderAccounts();
}
