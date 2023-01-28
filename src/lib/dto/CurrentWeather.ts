export default class CurrentWeather {


    public weather: Weather[]
    public main: Main
    public wind: Wind
    public dt: number;
    public sys: Sys
    public timezone: number;
    public name: string;
    constructor(strjson: string) {
        Object.assign(this, strjson);
    }
}
class Weather {

    public id: number;
    public main: string;
    public description: string;
    public icon: string;
    constructor(strjson: string) {
        Object.assign(this, strjson);
    }
}
class Main {

    public temp: number;
    public feels_like: number;
    public temp_min: number;
    public temp_max: number;
    constructor(strjson: string) {
        Object.assign(this, strjson);
    }
}
class Wind {
    public speed: number;
    constructor(strjson: string) {
        Object.assign(this, strjson);
    }
}

class Sys {

    public type: number;
    public id: number;
    public country: string;
    public sunrise: number;
    public sunset: number;
    constructor(strjson: string) {
        Object.assign(this, strjson);
    }
}
