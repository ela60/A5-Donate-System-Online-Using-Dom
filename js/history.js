
const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');


donationBtn.addEventListener('click', function() {
    
    donationBtn.classList.add('bg-primary', 'text-black');
    donationBtn.classList.remove('bg-white', 'text-text');
    
   
    historyBtn.classList.remove('bg-primary', 'text-black');
    historyBtn.classList.add('bg-white', 'text-text');

    document.getElementById('card-section').classList.remove('hidden');
});


historyBtn.addEventListener('click', function() {
    
    historyBtn.classList.add('bg-primary', 'text-black');
    historyBtn.classList.remove('bg-white', 'text-text');
    
   
    donationBtn.classList.remove('bg-primary', 'text-black');
    donationBtn.classList.add('bg-white', 'text-text');

    document.getElementById('card-section').classList.add('hidden');
    document.getElementById('donation-name').classList.add('hidden');
});

// card-1
document.getElementById('donate-btn').addEventListener('click', function () {
    
    const balanceElement = document.getElementById('total-balance');
    const donationInput = document.getElementById('donation-input');
    const donationNameInput = document.getElementById('donation-name');
    const currentDonationElement = document.getElementById('current-donation-amount');
    const historyList = document.getElementById('history-list');

    const totalBalance = parseFloat(balanceElement.textContent);
    const donationAmount = parseFloat(donationInput.value);
    const donationName = donationNameInput.value.trim();

    // validation
    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert('Please enter a valid donation amount.');
        return;
    }
    
    else if (donationAmount > totalBalance) {
        alert('Donation amount exceeds your total balance.');
        return;
    }
    else {
        
    }

    const newBalance = totalBalance - donationAmount;
    balanceElement.textContent = newBalance.toFixed(2);

    const currentDonation = parseFloat(currentDonationElement.textContent);
    const newDonationTotal = currentDonation + donationAmount;
    currentDonationElement.textContent = newDonationTotal.toFixed(2);

    // history part start
    const now = new Date();
    const fullDateTime = now.toString();

    const historyItem = document.createElement('li');
    historyItem.textContent = `
            Date: ${fullDateTime} . 

            `;
    
    historyList.appendChild(historyItem);
    
    donationInput.value = ' ';
    donationNameInput.value = '';
   
    

});

// card-2 section js part
document.getElementById('donate-btn-2').addEventListener('click', function () {
    
    const balanceElement = document.getElementById('total-balance');
    const donationInput = document.getElementById('donation-input-2');
    const donationNameInput = document.getElementById('donation-name');
    const currentDonationElement = document.getElementById('current-donation-amount');
    const historyList = document.getElementById('history-list');

    const totalBalance = parseFloat(balanceElement.textContent);
    const donationAmount2 = parseFloat(donationInput.value);
    const donationName = donationNameInput.value.trim();

    // validation
    if (isNaN(donationAmount2) || donationAmount2 <= 0) {
        alert('Please enter a valid donation amount.');
        return;
    }
    
    else if (donationAmount2 > totalBalance) {
        alert('Donation amount exceeds your total balance.');
        return;
    }
    else {
        
    }

    const newBalance = totalBalance - donationAmount;
    balanceElement.textContent = newBalance.toFixed(2);

    const currentDonation = parseFloat(currentDonationElement.textContent);
    const newDonationTotal = currentDonation + donationAmount;
    currentDonationElement.textContent = newDonationTotal.toFixed(2);

    // history part start
    const now = new Date();
    const fullDateTime = now.toString();

    const historyItem = document.createElement('li');
    historyItem.textContent = `
            Date: ${fullDateTime} . 

            `;
    
    historyList.appendChild(historyItem);
    
    donationInput.value = ' ';
    donationNameInput.value = '';
   
    

});


