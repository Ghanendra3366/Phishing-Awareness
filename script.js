document.addEventListener('DOMContentLoaded', () => {
    // Example phishing and legitimate emails
    const examples = [
        {
            type: 'phishing',
            subject: 'Urgent: Your Account Has Been Suspended!',
            sender: 'support@secure-bank-login.com',
            body: 'Dear Customer, your account has been suspended. Click here to verify your information: http://fakebank-login.com',
            tips: [
                'Check the sender\'s email address for suspicious domains.',
                'Beware of urgent language and threats.',
                'Hover over links to see the real URL before clicking.'
            ]
        },
        {
            type: 'legit',
            subject: 'Your Monthly Statement is Ready',
            sender: 'noreply@yourbank.com',
            body: 'Hello, your monthly statement is now available. Please log in to your account through our official website.',
            tips: [
                'Legitimate emails usually address you by name.',
                'Official emails do not ask for sensitive info via links.',
                'Check for correct sender address and branding.'
            ]
        }
    ];

    // Render examples
    const container = document.getElementById('examples');
    if (container) {
        examples.forEach((ex, idx) => {
            const card = document.createElement('div');
            card.className = `email-example ${ex.type}`;
            card.innerHTML = `
                <h3>${ex.type === 'phishing' ? 'Phishing Example' : 'Legitimate Example'}</h3>
                <strong>Subject:</strong> ${ex.subject}<br>
                <strong>From:</strong> ${ex.sender}<br>
                <p>${ex.body}</p>
                <button id="tips-btn-${idx}">Show Tips</button>
                <ul id="tips-list-${idx}" style="display:none;"></ul>
            `;
            container.appendChild(card);

            // Show tips on button click
            document.getElementById(`tips-btn-${idx}`).addEventListener('click', () => {
                const tipsList = document.getElementById(`tips-list-${idx}`);
                if (tipsList.style.display === 'none') {
                    tipsList.innerHTML = ex.tips.map(tip => `<li>${tip}</li>`).join('');
                    tipsList.style.display = 'block';
                } else {
                    tipsList.style.display = 'none';
                }
            });
        });
    }
});