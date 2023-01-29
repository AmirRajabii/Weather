export default class FiveDaysWeather {


    public list: List[]
    constructor(strjson: string) {
        Object.assign(this, strjson);
    }
}
class List {

    public dt: number;
    public main: Main

    constructor(strjson: string) {
        Object.assign(this, strjson);
    }
}
class Main {
    public temp: number;
    constructor(strjson: string) {
        Object.assign(this, strjson);
    }
}

