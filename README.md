
# Smart Wardrobe Assistant

Smart Wardrobe Assistant is a web-based application that helps Gen Z users streamline their daily outfit decisions by integrating real-time weather updates, event-specific recommendations, and location-based activity notifications. This project aims to minimize stress and save time in fashion decisions.

## Features

- **Real-Time Weather Updates**: Provides outfit suggestions based on the current weather.
- **Event-Specific Recommendations**: Suggests outfits based on the user's calendar events.
- **Location-Based Notifications**: Notifies users about relevant collections based on their current location (e.g., coffee shop, shopping mall, office, park).

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Flask (Python)
- **APIs**: IPinfo for location, Weather API for weather updates

## Project Structure

/project-directory
/static
smart_wardrobe_script.js
/images
ASSISTANT.png
/templates
index.html
app.py
README.md
style.css


## Setup Instructions

1. **Install required packages**:
    ```bash
    pip install flask requests
    ```

2. **Add your API keys**:
    - Open `app.py`.
    - Replace the placeholders with your actual API keys.
        ```python
        IPINFO_API_KEY = 'your_ipinfo_api_key'
        WEATHER_API_KEY = 'your_weather_api_key'
        ```

3. **Run the Flask application**:
    ```bash
    python app.py
    ```

4. **Open your browser and navigate to**:
    ```
    http://127.0.0.1:5000/
    ```

## File Descriptions

- **app.py**: The Flask backend that handles API requests and responses.
- **index.html**: The main frontend file that contains the UI of the Smart Wardrobe Assistant.
- **smart_wardrobe_script.js**: The JavaScript file for handling frontend logic.
- **style.css**: The CSS file for styling the application.
- **/static/images/ASSISTANT.png**: The background image used in the frontend.

## How It Works

1. **Weather and Location Integration**: The application fetches the user's location using the IPinfo API and retrieves the current weather using the Weather API.
2. **Outfit Suggestion**: Based on the user's location and weather conditions, the application generates a suitable outfit suggestion.
3. **Location-Based Notifications**: If "you’re at a coffee shop, the assistant will notify you about the latest casual wear collections. Similarly, if you’re at a shopping mall, you’ll get an update about new trendy wear collections. The `checkLocationAndNotify` function uses the location to trigger these notifications.

## Example Usage

- If you’re at a coffee shop, the assistant will notify you about the latest casual wear collections. Similarly, if you’re at a shopping mall, you’ll get an update about new trendy wear collections.
- The `checkLocationAndNotify` function uses the location to trigger these notifications.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

If you have any questions or suggestions, please feel free to reach out.

---

Enjoy using the Smart Wardrobe Assistant and make your fashion decisions smarter and easier!
