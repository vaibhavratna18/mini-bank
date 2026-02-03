# Online Bank Mini System

## Objective
The objective of this project is to develop and deploy an Online Bank Mini System that demonstrates core banking operations with proper validation logic and a clean, usable user interface. The project focuses on transaction handling, validation rules, and modular code design as required by the assessment.

---

## Technology Stack
- HTML
- CSS
- JavaScript
- Public deployment using Netlify / GitHub Pages

---

## Project Structure




online-bank-mini-system/
│
├── index.html
│
├── css/
│ └── style.css
│
├── js/
│ ├── data.js
│ ├── services.js
│ ├── ui.js
│ └── app.js
│
└── README.md








---

## Data Model
Each bank account consists of the following fields:
- `accountNo` – Unique account number
- `holderName` – Account holder name
- `balance` – Current account balance
- `isKYCVerified` – Indicates whether KYC is verified

---

## Functional Requirements

### Create Account
- Allows users to create a new bank account
- Automatically generates a unique account number
- Supports setting KYC status during account creation

### Deposit Money
- Allows users to deposit money into an existing account
- Validates account number and deposit amount

### Withdraw Money
- Allows users to withdraw money from an account
- Ensures sufficient balance before withdrawal

### Transfer Money
Implements the function:
`TransferMoney(senderAccount, receiverAccount, amount)`

Validations:
- Sender account must be KYC verified
- Sender must have sufficient balance
- Invalid inputs are rejected with appropriate error messages

---

## Mandatory UI Screens
- Account creation screen
- Transaction screens (deposit, withdraw, transfer)
- Account listing screen
- Output display panel for success and error messages

---

## Code Design
The project follows a layered structure:
- `data.js` handles data storage
- `services.js` contains all business logic and validations
- `ui.js` manages UI updates and messages
- `app.js` connects the UI with service logic

This structure improves maintainability and clarity.

---

## Error Handling
- Handles invalid inputs and account numbers
- Prevents invalid transactions
- Displays clear error messages to the user

---

## How to Run the Project
1. Clone the repository
2. Open the project folder
3. Open `index.html` in a web browser or use Live Server in VS Code

---

## Live Deployment
Live URL: https://mini-bqnk.netlify.app/

---

## GitHub Repository
Repository Link:https://github.com/vaibhavratna18/mini-bank

---

## Demo Video
Demo Video Link: (https://drive.google.com/file/d/1NOh-5Z2sgG_lYbUSRXJbkT0_FT5d1h5r/view?usp=drive_link)

---

## Conclusion
This project successfully implements an Online Bank Mini System with required validations, clean UI, and modular code structure, fulfilling all the assessment requirements.

