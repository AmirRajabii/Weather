<script lang="ts">
	import { onMount } from "svelte";

	import { getText } from "./datetime.dic";
	import { getYearMonthDayByMillis } from "./jalaliConverter";

	export let millis: number;
	let yearMonthDay: number[] = [];

	$: millisChanged(millis);
	function millisChanged(millis){
		yearMonthDay = getYearMonthDayByMillis(millis);
	}
</script>

<div class="row  mx-1">
	<div class="col-3 px-1">
		<input value={yearMonthDay[2]} type="number" class="form-control" placeholder={getText("general")["day"]} title={getText("general")["day"]} disabled />
	</div>
	<div class="col-3 px-1">
		<input value={yearMonthDay[1]} type="number" class="form-control" placeholder={getText("general")["month"]} title={getText("general")["month"]} disabled />
	</div>
	<div class="col-6 px-1">
		<input value={yearMonthDay[0]} type="number" class="form-control" placeholder={getText("general")["year"]} title={getText("general")["year"]} disabled />
	</div>
</div>

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type="number"] {
		-moz-appearance: textfield;
	}
</style>
