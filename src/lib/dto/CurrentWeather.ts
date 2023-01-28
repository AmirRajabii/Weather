export default class CurrentWeather {

    public name: string;
    public id: number;
    constructor(strjson: string) {
        Object.assign(this, strjson);
    }
}