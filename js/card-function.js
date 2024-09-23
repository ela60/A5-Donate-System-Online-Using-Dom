// button functonality


const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');


donationBtn.addEventListener('click', function() {
    
    donationBtn.classList.add('bg-primary', 'text-black');
    donationBtn.classList.remove('bg-white', 'text-text');
    
   
    historyBtn.classList.remove('bg-primary', 'text-black');
    historyBtn.classList.add('bg-white', 'text-text');

    document.getElementById('card-section').classList.remove('hidden');
    document.getElementById('history-all-1').classList.add('hidden');
    document.getElementById('history-all-2').classList.add('hidden');
    document.getElementById('history-all-3').classList.add('hidden');
});


historyBtn.addEventListener('click', function() {
    
    historyBtn.classList.add('bg-primary', 'text-black');
    historyBtn.classList.remove('bg-white', 'text-text');
    
   
    donationBtn.classList.remove('bg-primary', 'text-black');
    donationBtn.classList.add('bg-white', 'text-text');

    document.getElementById('card-section').classList.add('hidden');
    document.getElementById('history-all-1').classList.remove('hidden');
    document.getElementById('history-all-2').classList.remove('hidden');
    document.getElementById('history-all-3').classList.remove('hidden');
    
});

// Function to show the modal
function showCongratsModal() {
    const modal = document.getElementById('congratsModal');
    modal.classList.remove('hidden'); 
}

// Function to close the modal when 'Close' button is clicked
document.getElementById('closeModal').addEventListener('click', function () {
    const modal = document.getElementById('congratsModal');
    modal.classList.add('hidden'); // Hide the modal
});

// Common function to handle donation for any card
function handleDonation(cardId) {
    const balanceElement = document.getElementById('total-balance');
    const donationInput = document.getElementById(`donation-input-${cardId}`);
    const donationNameInput = document.getElementById(`donation-name-${cardId}`);
    const currentDonationElement = document.getElementById(`current-donation-${cardId}`);
    const historyList = document.getElementById(`history-list-${cardId}`);

    // Parse values
    const totalBalance = parseFloat(balanceElement.textContent);
    const donationAmount = parseFloat(donationInput.value);
    const donationName = donationNameInput.value.trim();

    // validation
    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert('Please enter a valid donation amount.');
        return;
    }
    
    if (donationAmount > totalBalance) {
        alert('Donation amount exceeds your total balance.');
        return;
    }

    // Update total balance
    const newBalance = totalBalance - donationAmount;
    balanceElement.textContent = newBalance.toFixed(2);

    // Update current donation amount for the specific card
    const currentDonation = parseFloat(currentDonationElement.textContent);
    const newDonationTotal = currentDonation + donationAmount;
    currentDonationElement.textContent = newDonationTotal.toFixed(2);

    // Get the current date and time in 24-hour format (Bangladesh time)
    const now = new Date();
    const options = {
        timeZone: 'Asia/Dhaka',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // 24-hour format
    };
    const formattedDateTime = now.toLocaleString('en-GB', options);

    // Add a meaningful notification to the history
    const historyItem = document.createElement('li');
    historyItem.textContent = `Date: ${formattedDateTime}, Donation: ${donationAmount.toFixed(2)} for ${donationName}`;
    historyList.appendChild(historyItem);

    // Clear the donation input and name
    donationInput.value = '';
    donationNameInput.value = '';

    // Show congratulatory modal
    showCongratsModal();
}

// Add event listeners for all three cards
document.getElementById('donate-btn-1').addEventListener('click', function () {
    handleDonation(1);
});

document.getElementById('donate-btn-2').addEventListener('click', function () {
    handleDonation(2);
});

document.getElementById('donate-btn-3').addEventListener('click', function () {
    handleDonation(3);
});




