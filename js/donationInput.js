// document.getElementById('donate-btn').addEventListener('click', function () {
    
//     const balanceElement = document.getElementById('total-balance');
//     const donationInput = document.getElementById('donation-input');
//     const donationNameInput = document.getElementById('donation-name');
//     const currentDonationElement = document.getElementById('current-donation-amount');
//     const historyList = document.getElementById('history-list');

//     const totalBalance = parseFloat(balanceElement.textContent);
//     const donationAmount = parseFloat(donationInput.value);
//     const donationName = donationNameInput.value.trim();

//     // validation
//     if (isNaN(donationAmount) || donationAmount <= 0) {
//         alert('Please enter a valid donation amount.');
//         return;
//     }
    
//     else if (donationAmount > totalBalance) {
//         alert('Donation amount exceeds your total balance.');
//         return;
//     }
//     else {
        
//     }

//     const newBalance = totalBalance - donationAmount;
//     balanceElement.textContent = newBalance.toFixed(2);

//     const currentDonation = parseFloat(currentDonationElement.textContent);
//     const newDonationTotal = currentDonation + donationAmount;
//     currentDonationElement.textContent = newDonationTotal.toFixed(2);

//     // history part start
//     const now = new Date();
//     const fullDateTime = now.toString();

//     const historyItem = document.createElement('li');
//     historyItem.textContent = `
//             Date: ${fullDateTime} . 

//             `;
    
//     historyList.appendChild(historyItem);
    
//     donationInput.value = ' ';
//     donationNameInput.value = '';
   
    

// });

