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

// Show history section and hide donation section
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

    // Close modal on button click
    document.getElementById('close-modal').addEventListener('click', function() {
        modal.classList.add('hidden');
    });
}

// Function to handle donations
function handleDonation(cardId) {
    const balanceElement = document.getElementById('total-balance');
    const donationInput = document.getElementById(`donation-input-${cardId}`);
    const donationNameInput = document.getElementById(`donation-name-${cardId}`);
    const currentDonationElement = document.getElementById(`current-donation-${cardId}`);
    const historyList = document.getElementById(`history-Section-${cardId}`);

    // Parse values
    const totalBalance = parseFloat(balanceElement.textContent);
    const donationAmount = parseFloat(donationInput.value);
    const donationName = donationNameInput.value.trim();

    // Validate input
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

    document.addEventListener('DOMContentLoaded', function () {
        // Reusable function for creating donation history entries
        function createDonationHistory(donationAmount, location) {
            const donationHistoryCreate = document.createElement('div');
            donationHistoryCreate.classList.add('border', 'border-2', 'border-gray-200', 'mb-5', 'p-10', 'rounded-2xl');
    
            donationHistoryCreate.innerHTML = `
                <h2 class="font-bold text-2xl mb-3">${donationAmount} Taka Aid for ${location}</h2>
                <p class="text-[#404040]">Date: ${new Date().toString()}</p> `;
    
            return donationHistoryCreate;
        }
    
        // Function to handle donation event
        function handleDonation(donationLocation, containerId) {
            const totalMoneyText = document.getElementById('donation-total').textContent.replace(' BDT', '');
            const totalMoney = parseFloat(totalMoneyText);
    
            const donationHistory = createDonationHistory(totalMoney, donationLocation);
            document.getElementById(containerId).appendChild(donationHistory);
        }
    
        // Set up event listeners for different donation buttons
        const donationButtons = [
            { id: 'donate-btn-3', location: 'Injured in the Quota Movement', container: 'movementDonation' },
            { id: 'donate-btn-2', location: 'Flood at Feni', container: 'FeniDonation' },
            { id: 'donate-btn-1', location: 'Flood at Noakhali', container: 'floodDonation' }
        ];
    
        donationButtons.forEach(btnConfig => {
            const button = document.getElementById(btnConfig.id);
            if (button) {
                button.addEventListener('click', function (event) {
                    event.preventDefault();
                    handleDonation(btnConfig.location, btnConfig.container);
                });
            }
        });
    });

    


    // Clear inputs
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


