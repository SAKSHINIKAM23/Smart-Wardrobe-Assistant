// Existing section hover functionality
const men_section = document.querySelector('.men');
const women_section = document.querySelector('.women');
const kids_section = document.querySelector('.kids');
const home_section = document.querySelector('.homeliving');
const beauty_section = document.querySelector('.beauty');

const men_section_items = document.querySelector('.men-section-items');
const women_section_items = document.querySelector('.women-section-items');
const kids_section_items = document.querySelector('.kids-section-items');
const home_section_items = document.querySelector('.home-section-items');
const beauty_section_items = document.querySelector('.beauty-section-items');

men_section.onmouseover = () => {
    men_section_items.classList.remove('visibility');
}
men_section.onmouseout = () => {
    men_section_items.classList.add('visibility');
}

women_section.onmouseover = () => {
    women_section_items.classList.remove('visibility');
}
women_section.onmouseout = () => {
    women_section_items.classList.add('visibility');
}

kids_section.onmouseover = () => {
    kids_section_items.classList.remove('visibility');
}
kids_section.onmouseout = () => {
    kids_section_items.classList.add('visibility');
}

home_section.onmouseover = () => {
    home_section_items.classList.remove('visibility');
}
home_section.onmouseout = () => {
    home_section_items.classList.add('visibility');
}

beauty_section.onmouseover = () => {
    beauty_section_items.classList.remove('visibility');
}
beauty_section.onmouseout = () => {
    beauty_section_items.classList.add('visibility');
}

// Smart Wardrobe Assistant integration
async function suggestOutfit() {
    const location = document.getElementById('location').value;
    const weather = document.getElementById('weather').value || getWeatherConditions();
    const colors = document.getElementById('preferences').value.split(',').map(color => color.trim());

    let eventType;
    if (location.includes("work")) {
        eventType = 0; // formal
    } else if (location.includes("gym")) {
        eventType = 1; // sporty
    } else {
        eventType = 2; // casual
    }

    let weatherCondition;
    switch (weather.toLowerCase()) {
        case "sunny":
            weatherCondition = 0;
            break;
        case "rainy":
            weatherCondition = 1;
            break;
        case "cold":
            weatherCondition = 2;
            break;
        default:
            weatherCondition = 0; // default to sunny
    }

    const season = new Date().getMonth() < 5 ? 0 : 1; // Simple season check (0: summer, 1: winter)

    try {
        const response = await fetch('http://127.0.0.1:5000/suggest_outfit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                temperature: 22, // Placeholder value
                event_type: eventType,
                weather_condition: weatherCondition,
                season: season,
                colors: colors
            }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        document.getElementById('outfit').innerText = data.outfit.join(', ');
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('outfit').innerText = 'Unable to get outfit suggestion.';
    }
}

// Placeholder function to simulate weather conditions retrieval
function getWeatherConditions() {
    // In practice, replace this with actual weather retrieval logic
    return "sunny"; // Example weather condition
}
