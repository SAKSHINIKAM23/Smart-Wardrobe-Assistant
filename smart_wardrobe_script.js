// smart_wardrobe_script.js

async function getOutfitSuggestion() {
    try {
        // Fetch the user's IP address (using a dummy IP for testing)
        const ipAddress = '8.8.8.8';
        
        // Send a request to the backend to get the outfit suggestion
        const response = await fetch('/api/get_fashion_update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ip_address: ipAddress })
        });
        
        // Parse the JSON response
        const data = await response.json();
        
        // Update the UI with the received suggestion
        document.getElementById('outfit').innerText = data.message + '\nLocation: ' + data.location;
    } catch (error) {
        console.error('Error fetching outfit suggestion:', error);
        document.getElementById('outfit').innerText = 'Failed to get outfit suggestion. Please try again.';
    }
}
