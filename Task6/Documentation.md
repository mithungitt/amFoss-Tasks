
# Documentation for Weather-App

## Overview

The **Weather-App** is designed to provide users with real-time weather information for a specified location. It integrates with a third-party weather API to fetch and display details such as temperature, humidity, and weather conditions in an intuitive format.

## Functionality

### The Weather-App offers the following functionality:

1. Fetch current weather data for any specified city.

2. Display essential weather information such as:
   - Temperature (in Celsius or Fahrenheit).
    - Humidity percentage.
    - Weather description (clear, cloudy, rainy, etc.).
    - Additional weather data like wind speed and pressure.

3. Responsive design for mobile and desktop devices.

4. Error handling for invalid city names or network issues.


#### The Weather App includes several key functions and features. Below is a summary of the important functions within the app:

### **Index**

- **`get()`**: Handles GET requests to the root URL. Retrieves all cities from the database, fetches weather data for each city, and renders the `index.html` template with the weather information.

  - **Details**: 
    - Queries the `City` model to get a list of all cities.
    - Calls `getCityData()` for each city to fetch weather data from the OpenWeatherMap API.
    - Passes the weather data to the `index.html` template for display.

### **getCityData**

- **`get_city_data(city)`**
: Fetches weather data for a specific city from the OpenWeatherMap API.

  - **Details**: 
    - Constructs the API URL using the city name and a fixed API key.
    - Sends a GET request to the OpenWeatherMap API and returns the JSON response containing weather information.

### **index_post**

- **`post()`**: Handles POST requests to the root URL (`/`). Processes form submissions to add a new city to the database or display an appropriate flash message.

  - **Details**: 
    - Retrieves the city name from the form submission.
    - Checks if the city is already in the database.
    - If the city is not present, validates it by calling `getCityData()`.
    - Adds the new city to the database or sets a flash message indicating an error or success.

### **delete_city**

- **`get(name)`**: Handles DELETE requests to remove a city from the database.

  - **Details**: 
    - Finds the city by name in the database.
    - Deletes the city and commits the change.
    - Sets a flash message indicating the successful removal of the city.

### **db_setup**

- **`setup_db()`**: Initializes the database schema.

  - **Details**: 
    - Imports the `database` object from `application.py`.
    - Calls `database.create_all()` to create the database tables based on the defined models.

### **index.html**

- **`render()`**: Renders the main page of the Weather App.

  - **Details**: 
    - Provides a form to add new cities.
    - Displays current weather information for all cities in a responsive layout.
    - Shows flash messages for user feedback on actions like adding or deleting cities.

### **flaskapp.service**

- **`service_config()`**: Systemd service unit configuration for running the Flask application.

  - **Details**: 
    - Defines how to start, restart, and manage the Flask application service.
    - Uses Python to run the Flask application script located at `/var/flask-app/flask/application.py`.

### **flask-app.conf**

- **`apache_config()`**: Apache configuration file for serving the Flask application.

  - **Details**: 
    - Configures Apache to serve the Flask application using `mod_wsgi`.
    - Sets up the virtual host for the Flask application.

### **applicationSetup.yml**

- **`ansible_setup()`**: Ansible playbook for setting up the application environment.

  - **Details**: 
    - Automates the installation of dependencies, cloning the repository, setting up symbolic links, and configuring Apache.
    - Ensures the application environment is correctly configured and ready for deployment.

### **requirements.txt**

- **`dependencies()`**: Lists the Python dependencies required for the Flask application.

  - **Details**: 
    - Includes packages such as `Flask`, `Flask_SQLAlchemy`, and `requests`.

These functions and configuration files work together to provide a seamless experience for users interacting with the Weather App, from setting up the environment to adding and viewing weather data for cities.

  
## Implementation Details

The app is implemented using **Flask** (Python) for the backend and **HTML/CSS/JavaScript** for the frontend. The app interacts with the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data based on user input. 

### Backend (Flask)

- The Flask server handles API requests, processes them, and sends the necessary weather data to the frontend.
- Routes are defined in `application.py`, which serves the main webpage and handles the weather requests.
- A SQLite database is used to store user preferences, such as favorite cities or previous searches.

### Frontend

- The frontend consists of a search bar where users can input a city name.
- JavaScript is used to send asynchronous requests to the Flask backend and dynamically update the webpage with the retrieved weather data.
- HTML and CSS are used for the layout and design of the webpage.

Now giving a detailed view into the various ways the app implements it front-end and back-end:

### City Creation

- **City Addition**
  - **Process**: Cities are added through a form in the `index.html` template. The form submission is handled by the `index_post` view function in `application.py`.
  - **Details**: 
    - The user enters a city name and submits the form.
    - The `index_post` function processes the form data, checks if the city already exists in the database, and if not, validates it by calling the `getCityData` function to ensure it is a valid city.
    - If the city is valid, a new `City` instance is created and added to the database.
    - If the city already exists or is invalid, an appropriate flash message is set to inform the user.

### City Listing

- **Weather Display**
  - **Process**: The list of cities and their weather data is displayed in `index.html` by querying the `City` model. The data is rendered by the `index` view function in `application.py`.
  - **Details**: 
    - The `index` function retrieves all cities from the database.
    - For each city, the `getCityData` function is called to fetch the current weather data from the OpenWeatherMap API.
    - The weather data, including temperature, description, and icon, is collected and passed to the `index.html` template.
    - The template renders the weather information in a user-friendly format.

### City Update

- **City Modification**
  - **Process**: Cities can be modified by adding new cities through the form in `index.html`. The update process involves adding or updating the city in the database.
  - **Details**: 
    - Users submit new city names through the form.
    - The `index_post` function handles form submissions, checking if the city is already present or needs to be added.
    - If the city is new, it is added to the database. If the city is already listed, a flash message is shown to the user.

### City Deletion

- **City Removal**
  - **Process**: Cities are removed using the delete functionality provided in `index.html`. The deletion request is handled by the `delete_city` view function in `application.py`.
  - **Details**: 
    - Each city listed in the weather display has a delete button.
    - When the delete button is clicked, a request is sent to the `delete_city` view with the city name.
    - The `delete_city` function finds the city in the database, deletes it, and commits the change.
    - A flash message is set to confirm the successful removal of the city.

### Database Setup

- **Database Initialization**
  - **Process**: The SQLite database is set up using the `db_setup.py` script.
  - **Details**: 
    - The script imports the `database` object from `application.py` and calls `database.create_all()` to create the necessary database tables.
    - This setup ensures that the database schema is initialized before running the application.

### Application Configuration

- **Service Management**
  - **Process**: The Flask application is managed using a systemd service defined in `flaskapp.service`.
  - **Details**: 
    - The service configuration specifies how to start, restart, and manage the Flask application.
    - The `ExecStart` directive points to the Flask application script, ensuring it runs as a service on system startup.

- **Web Server Configuration**
  - **Process**: Apache is configured to serve the Flask application using `mod_wsgi`, as defined in `flask-app.conf`.
  - **Details**: 
    - The Apache configuration file sets up a virtual host for the Flask application.
    - It directs requests to the WSGI application interface, allowing Apache to serve the Flask app.

### Infrastructure Setup

- **Automated Setup**
  - **Process**: The application environment is set up using Ansible, as specified in `applicationSetup.yml`.
  - **Details**: 
    - The playbook installs necessary dependencies, clones the application repository, and configures the environment.
    - It ensures that all required packages are installed and the application is properly configured for deployment.


### Example of API Call to OpenWeatherMap

The application sends a GET request to the OpenWeatherMap API using the following URL format:

```bash
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
```

## Code Example

Below is a snippet of how the weather data is fetched in `application.py`:

```python
import requests
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        city = request.form['city']
        api_key = 'your_openweathermap_api_key'
        weather_url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}'
        weather_data = requests.get(weather_url).json()

        if weather_data.get('cod') != 200:
            return render_template('index.html', error='City not found.')

        weather = {
            'city': city,
            'temperature': weather_data['main']['temp'],
            'description': weather_data['weather'][0]['description'],
            'humidity': weather_data['main']['humidity']
        }

        return render_template('index.html', weather=weather)
    
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
```

This snippet demonstrates how the Flask app handles user input, sends a request to the weather API, and renders the weather data on the frontend.

---

For more details on how to contribute to this project or further add to its functionality, refer to the [README.md](README.md) file.
