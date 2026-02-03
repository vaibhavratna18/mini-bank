function createAccountService(name, balance, kyc) {
    if (!name || balance < 0) {
        return { success: false, message: "Invalid account details" };
    }

    const account = {
        accountNo: accountCounter++,
        holderName: name,
        balance: balance,
        isKYCVerified: kyc
    };

    accounts.push(account);
    return { success: true, message: "Account created successfully" };
}

function depositService(accNo, amount) {
    const acc = accounts.find(a => a.accountNo === accNo);
    if (!acc || amount <= 0) {
        return { success: false, message: "Invalid deposit details" };
    }
    acc.balance += amount;
    return { success: true, message: "Deposit successful" };
}

function withdrawService(accNo, amount) {
    const acc = accounts.find(a => a.accountNo === accNo);
    if (!acc || amount <= 0) {
        return { success: false, message: "Invalid withdrawal details" };
    }
    if (acc.balance < amount) {
        return { success: false, message: "Insufficient balance" };
    }
    acc.balance -= amount;
    return { success: true, message: "Withdrawal successful" };
}

function transferService(senderNo, receiverNo, amount) {
    const sender = accounts.find(a => a.accountNo === senderNo);
    const receiver = accounts.find(a => a.accountNo === receiverNo);

    if (!sender || !receiver || amount <= 0) {
        return { success: false, message: "Invalid transfer details" };
    }
    if (!sender.isKYCVerified) {
        return { success: false, message: "Sender KYC not verified" };
    }
    if (sender.balance < amount) {
        return { success: false, message: "Insufficient balance" };
    }

    sender.balance -= amount;
    receiver.balance += amount;
    return { success: true, message: "Transfer successful" };
}
