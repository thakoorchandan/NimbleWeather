# Nimble.AI Weather

</br></br>
Meet Nimble.AI Weather that provides you with latest weather forecasts, AQI, Humidity ...... and more!

### Features

-   Provide current weather conditions for any city in the world
-   Give you the forecast for the next few days for a specific city
-   Provide information about AQ (Air Quality) in different cities
-   Answer questions about weather-related topics like climate change, weather patterns 


### How To Use

-   Go to [Nimble.AI Weather App]() and click on "Login with Github" to sign in
-   Type in your request in the chat box and press enter
-   If you want to know the weather in a specific city, type in "What is the weather in {city name}?"
-   If you want to know the forecast for a specific city, type in "What is the forecast for {city name}?"
-   If you want to know the air quality in a specific city, type in "What is the air quality in {city name}?"
-   If you want to know the above information for your current location, type in "What is the weather/forecast/air quality here?"

#### Examples

-   `Login Page`
    <img src="https://github.com/thakoorchandan/NimbleWeather/blob/main/src/public/login_page.png?raw=true" alt="Login" style="max-width:400px">

-   `What is the weather here ?`
    <img src="https://github.com/thakoorchandan/NimbleWeather/blob/main/src/public/CurrentLocation.png?raw=true" alt="Current Location" style="max-width:400px">

-   `What is the AQI (Air Quality Information) of Hyderabad ?`
    <img src="https://github.com/thakoorchandan/NimbleWeather/blob/main/src/public/AQI.png?raw=true" alt="Hyderabad AQI" style="max-width:400px">

-   `What is the forecast for Hyderabad ?`
    <img src="https://github.com/thakoorchandan/NimbleWeather/blob/main/src/public/Forecast.png?raw=true" alt="Hyderabad Forecast" style="max-width:400px">

-   `What is the weather in Raipur ?`
    <img src="https://github.com/thakoorchandan/NimbleWeather/blob/main/src/public/Weather.png?raw=true" alt="Raipur weather" style="max-width:400px">


### How It Works

-   User input is processed using a combination of regular expressions and fuzzy string matching to determine the user's intent and a location
-   If it is a weather realted request and location is a valid city, the bot will use the OpenWeather API to retrieve weather data for that city
-   If the intent is not weather-related, the request is sent to NBox API to retrieve a response (llama2 model)
-   The response is then sent to the supabase database to be stored and used for future requests

### Important Notes

-   The project is built using React and is hosted on [Netlify](https://jazzy-pavlova-932105.netlify.app/).
-   The project is using [Tailwind CSS](https://tailwindcss.com/) for styling.
-   The project is using the [OpenWeather API](https://openweathermap.org/api) to retrieve weather data.
-   The project is using the [NBox API](https://nbox.ai/) to generate responses to user requests.
-   The project is using the [Supabase](https://supabase.io/) for persistent storage and authentication.
-   The project is a client-side only application. This means that all requests are made from the browser and no data is stored on the server.
-   The project is using [Redux Toolkit](https://redux-toolkit.js.org/) for state management.
-   The project is using [React Router](https://reactrouter.com/) for routing.
-   The project is using a self-hosted CORS proxy to make requests to the NBox API. This is because the API does not have CORS enabled. This is not ideal, but it is the only way to make requests to the API from the browser. The proxy is hosted on Heroku.

### Self Hosting Instructions

**Create a Supabase Project**
The application holds conversations in a Supabase database. You can create a free account [here](https://supabase.io/).

makr.AI needs a Supabase URL and Anon Key to connect to your database. You can find these in your Supabase project settings.

You must create 3 tables in your supabase project:

![NimbeWeather](https://github.com/thakoorchandan/NimbleWeather/blob/main/src/public/SupabaseSchema.png?raw=true)

-   Clone the repository to your local machine using `git clone https://github.com/thakoorchandan/NimbleWeather`
-   Run `yarn` command to install all dependencies
-   Create a `.env` file in the root directory and add the following environment variables:

```js
VITE_CORSPROXY_URL; // URL of the CORS proxy
VITE_NBX_KEY; // NBox API key
VITE_OPENWEATHERMAP_KEY; // OpenWeather API key
VITE_SUPABASE_KEY; // Supabase API key
VITE_SUPABASE_URL; // Supabase API URL
```

-   Run `yarn dev` to start the development server
