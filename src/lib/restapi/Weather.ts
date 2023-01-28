import type CurrentWeather from "$lib/dto/CurrentWeather";

const currentUrl = "https://api.openweathermap.org/data/2.5/";
const key = "6f449c8f8b1bcbbd7b1bc7f8db5d45a9";

async function getCurrentWeather(cityName: string): Promise<CurrentWeather | null> {
    const url: string = currentUrl + "weather/?q=+" + cityName + "&appid=" + key + "&units=metric";
    const response: Response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            accept: "*/*",
        },
        redirect: "follow",
    });
    let result: CurrentWeather = null;
    if (response.ok) {
        result = await response.json();
    } else {
        let errortext = await response.text();
        console.log(errortext);
        throw new Error(response.statusText + ": " + errortext);
    }
    return result;
}

export { getCurrentWeather };

