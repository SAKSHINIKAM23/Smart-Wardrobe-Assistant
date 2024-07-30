from flask import Flask, request, jsonify
import requests
import logging

app = Flask(__name__)

# API Keys
IPINFO_API_KEY = '1f497dbe5d491e'
WEATHER_API_KEY = '329f5fef31865f5e5ef4229d0276e927'

# Configure logging
logging.basicConfig(level=logging.INFO)

def generate_outfit_suggestion(location, weather_condition, event):
    location = location.lower()
    if 'gym' in location:
        return 'Check out the latest sportswear collection!'
    elif 'temple' in location:
        return 'Explore our new ethnic wear collection!'
    elif 'office' in location:
        return 'Consider wearing business casual for your work event.'
    elif 'park' in location:
        return 'How about a comfortable outfit for a day out at the park?'
    else:
        return f'For the {event}, consider wearing something suitable for {weather_condition} weather.'

@app.route('/get_outfit_suggestion', methods=['POST'])
def get_outfit_suggestion():
    logging.info('Received request for outfit suggestion')
    try:
        user_ip = request.remote_addr
        
        # Get location based on IP
        location_response = requests.get(f'https://ipinfo.io/{user_ip}/json?token={IPINFO_API_KEY}')
        if location_response.status_code != 200:
            raise Exception(f"Error fetching location data: {location_response.status_code}")
        location_data = location_response.json()
        location = location_data.get('city', 'Unknown City')
        
        # Fetch weather data
        weather_response = requests.get(f'https://api.weatherapi.com/v1/current.json?key={WEATHER_API_KEY}&q={location}')
        if weather_response.status_code != 200:
            raise Exception(f"Error fetching weather data: {weather_response.status_code}")
        weather_data = weather_response.json()
        weather_condition = weather_data.get('current', {}).get('condition', {}).get('text', 'Unknown')
        
        # Generate outfit suggestion
        outfit_suggestion = generate_outfit_suggestion(location, weather_condition, 'Meeting')
        
        if outfit_suggestion:
            return jsonify({'suggestion': outfit_suggestion})
        else:
            return jsonify({'suggestion': "Oops!! We're working our fashion magic for you. Please check back soon!"})
    except Exception as e:
        logging.error(f'Error occurred: {e}')
        return jsonify({'suggestion': f"Oops! Something went wrong. Error: {str(e)}"})

if __name__ == '__main__':
    app.run(debug=True)
