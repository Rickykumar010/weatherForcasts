### Weather Application
The Weather Application is a sleek and user-friendly React-based application that allows users to search for and view the current weather, including humidity levels, for any city. The app fetches weather data in real-time from the OpenWeatherMap API and presents it in a clean and accessible interface.

### Features
- *City Search:* Quickly find and display weather details by entering a city name.
- *Weather Information:* Displays the current temperature and humidity for the chosen city.
- *Real-Time Data:* Utilizes the OpenWeatherMap API to fetch up-to-date weather information.
- *Add_to_favorites:* user can add there favourite city $ can remove as well.
 
### Installation
*Clone the repository:*
- git clone https://github.com/Rickykumar010/application_weather.git
- cd weather-dashboard

*Install dependencies:*
- npm install

*Run the application:*
- npm run dev

### How to Use
- Search for a city: Enter the name of the city you want to check the weather for in the search bar at the top of the page.
- View weather details: The current temperature and humidity for the city will be displayed below the search bar.

### Project Structure

weather-app/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│  
└── package.json

### Weather Application Screenshot
<img src="./src/assets/imgs.png" alt="">

### Planned Enhancements
- Toggle Mode: Implement Functionality light theme and dark theme functionality.
- Search Functionality: Implement the Debounce search functionality.
- Weather Icons: Display 3d icons representing different weather conditions (e.g., sunny, cloudy, rainy).

### Acknowledgments
- OpenWeatherMap for the weather API.