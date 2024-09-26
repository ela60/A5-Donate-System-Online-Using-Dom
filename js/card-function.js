// Toggle between Donation and History sections
const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');

// Show donation section and hide history section
donationBtn.addEventListener('click', function () {
    donationBtn.classList.add('bg-primary', 'text-black');
    donationBtn.classList.remove('bg-white', 'text-text');

    historyBtn.classList.remove('bg-primary', 'text-black');
    historyBtn.classList.add('bg-white', 'text-text');

    document.getElementById('card-section').classList.remove('hidden');
    document.getElementById('card-section-1').classList.remove('hidden');
    document.getElementById('card-section-2').classList.remove('hidden');

    document.getElementById('history-all-1').classList.add('hidden');
    document.getElementById('history-all-2').classList.add('hidden');
    document.getElementById('history-all-3').classList.add('hidden');
});

// show history section and hide donation section
historyBtn.addEventListener('click', function () {
    historyBtn.classList.add('bg-primary', 'text-black');
    historyBtn.classList.remove('bg-white', 'text-text');

    donationBtn.classList.remove('bg-primary', 'text-black');
    donationBtn.classList.add('bg-white', 'text-text');

    document.getElementById('card-section').classList.add('hidden');
    document.getElementById('card-section-1').classList.add('hidden');
    document.getElementById('card-section-2').classList.add('hidden');

    document.getElementById('history-all-1').classList.remove('hidden');
    document.getElementById('history-all-2').classList.remove('hidden');
    document.getElementById('history-all-3').classList.remove('hidden');
});

// Function to show congratulatory modal
function showCongratsModal() {
    const modal = document.getElementById('congrats-modal');
    modal.classList.remove('hidden');

    // close modal on button click
    document.getElementById('close-modal').addEventListener('click', function () {
        modal.classList.add('hidden');
    })
}

function handleDonation(cardId) {
    const balanceElement = document.getElementById('total-balance');
    const donationInput = document.getElementById(`donation-input-${cardId}`);
    const donationNameInput = document.getElementById(`donation-name-${cardId}`);
    const currentDonationElement = document.getElementById(`current-donation-${cardId}`);
    const historyList = document.getElementById(`history-list-${cardId}`);

    const totalBalance = parseFloat(balanceElement.textContent);
    const donationAmount = parseFloat(donationInput.value);

    // validation part
    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert('please enter a valid donation amount.');
        return;
    }
    else if (donationAmount > totalBalance) {
        alert('Donation amount exceeds your total balance .');
        return;
    }
    
    // update total balance
    const newBalance = totalBalance - donationAmount;
    balanceElement.textContent = newBalance.toFixed(2);

    // Update current donation amount for the specific card
    const currentDonation = parseFloat(currentDonationElement.textContent);
    const newDonationTotal = currentDonation + donationAmount;
    currentDonationElement.textContent = newDonationTotal.toFixed(2);

    // clear the donation input
    donationInput.value = '';

    showCongratsModal();

    // Get the specific title based on the button clicked
    const titleElement = document.getElementById(`title-${cardId}`);
    const title = titleElement ? titleElement.innerText : '';

    const now = new Date();
    const options = {
        timeZone: 'Asia/Dhaka',
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',  
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',

        hour12: true,
    };
    const formattedDateTime = now.toLocaleString('en-GB', options);

    
    // create a history item and include the specific title
    const historyItem = document.createElement('li');
    historyItem.innerHTML = `
        ${donationAmount.toFixed(2)} 
        Taka is ${title}
        <br>Date: ${formattedDateTime},
        GMT +0600 (Bangladesh Standard Time)

         `;
    
    historyList.appendChild(historyItem);
    
}



// Add event listeners for all three buttons , each tied to a different title
document.getElementById('donate-btn-1').addEventListener('click', function () {
    handleDonation(1);
});
document.getElementById('donate-btn-2').addEventListener('click', function () {
    handleDonation(2);
});
document.getElementById('donate-btn-3').addEventListener('click', function () {
    handleDonation(3);
});




