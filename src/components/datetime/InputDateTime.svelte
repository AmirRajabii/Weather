<script lang="ts">
	import { getText } from "./datetime.dic";
	import { getTimeMillisShamsi } from "./jalaliConverter";

	export let required = false;
	export let disabled = false;

	let day: number;
	let month: number;
	let year: number;

	export function getMillis(): number {
		return getTimeMillisShamsi(year, month, day);
	}
</script>

<div class="row  mx-1">
	<div class="col-3 px-1">
		<input
			bind:value={day}
			type="number"
			min="1"
			max="31"
			class="form-control"
			placeholder={getText("general")["day"]}
			{required}
			{disabled}
			title={getText("general")["day"]}
		/>
	</div>
	<div class="col-3 px-1">
		<input
			bind:value={month}
			type="number"
			min="1"
			max="12"
			class="form-control"
			placeholder={getText("general")["month"]}
			{required}
			{disabled}
			title={getText("general")["month"]}
		/>
	</div>
	<div class="col-6 px-1">
		<input
			bind:value={year}
			type="number"
			min="1301"
			max="1499"
			class="form-control"
			placeholder={getText("general")["year"]}
			{required}
			{disabled}
			title={getText("general")["year"]}
		/>
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
