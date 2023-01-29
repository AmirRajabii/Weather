
# Weather

A simple Weather project with svelte.(To learn and practice)

## Screenshots

[![App Screenshot](https://www.linkpicture.com/q/Screenshot_weather.png)](https://www.linkpicture.com/view.php?img=LPic63d64ed4a6e94291936161)

## API Reference

#### Get Current Weather Data

```https
  GET /api.openweathermap.org/data/2.5/"weather/?q={cityName}&appid={key}&units=metric
```


#### Get 5 day / 3 hour forecast data

```https
  GET /api.openweathermap.org/data/2.5/"weather/?q={cityName}&appid={key}&units=metric
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `cityName` | `string` | **Required**. Your City |

Reference :  https://openweathermap.org/ 
## Run Locally

Clone the project

```bash
  git clone https://github.com/AmirRajabii/Weather.git
```

Go to the project directory

```bash
  cd Weather
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

To build the project 
```bash
  npm run build
```
## Feedback

If you have any feedback, please reach out to us at 

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/amir-rajabii)
## Support



[![Logo](https://coffeebede.ir/DashboardTemplateV2/app-assets/images/banner/default-yellow.svg)](https://www.coffeebede.com/amirrajabi)
