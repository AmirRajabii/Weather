<script lang="ts">
    import type CurrentWeather from "$lib/dto/CurrentWeather";
    import type FiveDaysWeather from "$lib/dto/FiveDaysWeather";
    import {
        getCurrentWeather,
        getFiveDaysWeather,
    } from "$lib/restapi/WeatherApi";
    import { onMount } from "svelte";
    import ChangeLocationModal from "./Modal/ChangeLocationModal.svelte";

    let currentWather: CurrentWeather;
    let fiveDaysWeather: FiveDaysWeather;
    export let cityName: string = "Tehran";
    let changeLocationModal: ChangeLocationModal;

    async function loadCurrentWeather(cityName: string) {
        try {
            currentWather = await getCurrentWeather(cityName);
            fiveDaysWeather = await getFiveDaysWeather(cityName);
        } catch (e) {
            console.log(e);
        }
    }

    function showChangeLocationModal() {
        setTimeout(() => {
            changeLocationModal.show();
        }, 200);
    }

    onMount(() => {
        loadCurrentWeather(cityName);
    });
</script>
<input id="hiddenInputLoad" type="button" style="display:none;" on:click={()=>{loadCurrentWeather(cityName)}}>
<ChangeLocationModal bind:this={changeLocationModal} bind:cityName/>
{#if currentWather && fiveDaysWeather}
    <div style="margin:20% auto; flex: auto;" id="gradient" />
    <div class="container">
        <div class="weather-side">
            <div class="weather-gradient" id="gradient" />
            <div class="date-container ">
                <h2 class="date-dayname">
                    {currentWather.name}, {currentWather.sys.country}
                </h2>
                <span class="date-day"
                    >{new Date(currentWather.dt * 1000)
                        .toString()
                        .split(" ")[1]}
                    {new Date(currentWather.dt * 1000).getDate()}</span
                ><i class="location-icon" data-feather="map-pin" />
            </div>
            <div class="weather-container">
                <i class="weather-icon" data-feather="sun" />
                <h1 class="weather-temp">
                    {Math.round(currentWather.main.feels_like)}°C
                </h1>
                <h3 class="weather-desc">
                    {currentWather.weather[0].description}
                </h3>
            </div>
        </div>
        <div class="info-side">
            <div class="today-info-container">
                <div class="today-info">
                    <div class="precipitation">
                        <span class="title">Sunrise</span><span class="value">
                            {new Date(
                                currentWather.sys.sunrise * 1000
                            ).getHours()} : {new Date(
                                currentWather.sys.sunrise * 1000
                            ).getMinutes()} : {new Date(
                                currentWather.sys.sunrise * 1000
                            ).getSeconds()}</span
                        >
                        <div class="clear" />
                    </div>
                    <div class="precipitation">
                        <span class="title">Sunset</span><span class="value">
                            {new Date(
                                currentWather.sys.sunset * 1000
                            ).getHours()} : {new Date(
                                currentWather.sys.sunset * 1000
                            ).getMinutes()} : {new Date(
                                currentWather.sys.sunset * 1000
                            ).getSeconds()}</span
                        >
                        <div class="clear" />
                    </div>
                    <div class="humidity">
                        <span class="title">HUMIDITY</span><span class="value"
                            >{currentWather.main.humidity} %</span
                        >
                        <div class="clear" />
                    </div>
                    <div class="wind">
                        <span class="title">WIND</span><span class="value"
                            >{currentWather.wind.speed} km/h</span
                        >
                        <div class="clear" />
                    </div>
                </div>
            </div>
            <div class="week-container">
                <ul class="week-list">
                    <li class="active">
                        <i class="day-icon" data-feather="sun" /><span
                            class="day-name"
                            >{new Date(fiveDaysWeather.list[0].dt * 1000)
                                .toString()
                                .split(" ")[0]}</span
                        ><span class="day-temp"
                            >{Math.round(
                                fiveDaysWeather.list[0].main.temp
                            )}°C</span
                        >
                    </li>
                    <li>
                        <i class="day-icon" data-feather="sun" /><span
                            class="day-name"
                            >{new Date(fiveDaysWeather.list[8].dt * 1000)
                                .toString()
                                .split(" ")[0]}</span
                        ><span class="day-temp"
                            >{Math.round(
                                fiveDaysWeather.list[8].main.temp
                            )}°C</span
                        >
                    </li>
                    <li>
                        <i class="day-icon" data-feather="cloud" /><span
                            class="day-name"
                            >{new Date(fiveDaysWeather.list[16].dt * 1000)
                                .toString()
                                .split(" ")[0]}</span
                        ><span class="day-temp"
                            >{Math.round(
                                fiveDaysWeather.list[16].main.temp
                            )}°C</span
                        >
                    </li>
                    <li>
                        <i class="day-icon" data-feather="cloud-snow" /><span
                            class="day-name"
                            >{new Date(fiveDaysWeather.list[24].dt * 1000)
                                .toString()
                                .split(" ")[0]}</span
                        ><span class="day-temp"
                            >{Math.round(fiveDaysWeather.list[24].main.temp)
                                .toString()
                                .split(" ")[0]}°C</span
                        >
                    </li>
                    <li>
                        <i class="day-icon" data-feather="cloud-rain" /><span
                            class="day-name"
                            >{new Date(fiveDaysWeather.list[32].dt * 1000)
                                .toString()
                                .split(" ")[0]}</span
                        ><span class="day-temp"
                            >{Math.round(
                                fiveDaysWeather.list[32].main.temp
                            )}°C</span
                        >
                    </li>
                    <div class="clear" />
                </ul>
            </div>
            <div class="location-container">
                <button
                    class="location-button"
                    on:click={showChangeLocationModal}
                >
                    <i data-feather="map-pin" /><span>Change location</span
                    ></button
                >
            </div>
        </div>
    </div>
{:else}
    <h1 style="color:aliceblue ;">Please Wait ...</h1>
{/if}
