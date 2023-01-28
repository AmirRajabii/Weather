<script lang="ts">
	import {type AlertObject, getTimeout } from "./AlertObject";

	export let alertobject: AlertObject = {
		icon: null,
		message: null,
		type: null,
		timeout: getTimeout(),
	};
</script>

{#if alertobject && alertobject.message}
	{#if alertobject.timeout || alertobject.timeout >= 0}
		<div class="d-none">
			{setTimeout(() => {
				alertobject.message = null;
			}, alertobject.timeout)}
		</div>
	{/if}
	<div class="alert alert-{alertobject.type} d-flex align-items-center mt-2" role="alert">
		{#if alertobject.icon}
			<i class="{alertobject.icon} mx-2" />
		{/if}
		<div>{@html alertobject.message}</div>
	</div>
{/if}
