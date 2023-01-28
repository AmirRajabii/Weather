<script lang="ts">
    import type WaitingModal from "$components/waitingmodal/WaitingModal.svelte";
    import type CurrentWeather from "$lib/dto/CurrentWeather";
    import { getCurrentWeather } from "$lib/restapi/Weather";
    import { onMount } from "svelte";
    let waitingmodal: WaitingModal;
    let currentWather: CurrentWeather;

    async function loadCurrentWeather(cityName: string) {
        try {
            // waitingmodal.show();
            currentWather = await getCurrentWeather(cityName);
            console.log(currentWather);
        } catch (e) {
            console.log(e);
        } finally {
            setTimeout(() => {
                // waitingmodal.hide();
            }, 600);
        }
    }

    onMount(() => {
        // loadCurrentWeather("Tehran");
    });
</script>   

<div style="margin:20% auto; flex: auto;" id="gradient" />
<div class="container">
    <div class="weather-side">
        <div class="weather-gradient" id="gradient" />
        <div class="date-container ">
            <h2 class="date-dayname">Tuesday</h2>
            <span class="date-day">15 Jan 2019</span><i
                class="location-icon"
                data-feather="map-pin"
            /><span class="location">Paris, FR</span>
        </div>
        <div class="weather-container">
            <i class="weather-icon" data-feather="sun" />
            <h1 class="weather-temp">29°C</h1>
            <h3 class="weather-desc">Sunny</h3>
        </div>
    </div>
    <div class="info-side">
        <div class="today-info-container">
            <div class="today-info">
                <div class="precipitation">
                    <span class="title">PRECIPITATION</span><span class="value"
                        >0 %</span
                    >
                    <div class="clear" />
                </div>
                <div class="humidity">
                    <span class="title">HUMIDITY</span><span class="value"
                        >34 %</span
                    >
                    <div class="clear" />
                </div>
                <div class="wind">
                    <span class="title">WIND</span><span class="value"
                        >0 km/h</span
                    >
                    <div class="clear" />
                </div>
            </div>
        </div>
        <div class="week-container">
            <ul class="week-list">
                <li class="active">
                    <i class="day-icon" data-feather="sun" /><span
                        class="day-name">Tue</span
                    ><span class="day-temp">29°C</span>
                </li>
                <li>
                    <i class="day-icon" data-feather="cloud" /><span
                        class="day-name">Wed</span
                    ><span class="day-temp">21°C</span>
                </li>
                <li>
                    <i class="day-icon" data-feather="cloud-snow" /><span
                        class="day-name">Thu</span
                    ><span class="day-temp">08°C</span>
                </li>
                <li>
                    <i class="day-icon" data-feather="cloud-rain" /><span
                        class="day-name">Fry</span
                    ><span class="day-temp">19°C</span>
                </li>
                <div class="clear" />
            </ul>
        </div>
        <div class="location-container">
            <button class="location-button" on:click={()=>{loadCurrentWeather("Tehran")}}>
                <i data-feather="map-pin" /><span>Change location</span></button
            >
        </div>
    </div>
</div>
