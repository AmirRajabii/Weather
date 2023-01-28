<script lang="ts">
	import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

	export function show() {
		var modal = bootstrap.Modal.getOrCreateInstance(document.getElementById("modalLoadind"));
		modal.show();
	}

	export function hide() {
		var modal = bootstrap.Modal.getOrCreateInstance(document.getElementById("modalLoadind"));
		modal.hide();
	}
</script>

<!-- Modal -->
<div
	class="modal fade"
	id="modalLoadind"
	data-bs-backdrop="static"
	data-bs-keyboard="false"
	tabindex="-1"
	aria-labelledby="staticBackdropLabel"
	aria-hidden="true"
>
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="staticLoading">
					Plase waite
				</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" disabled />
			</div>
			<div class="modal-body">
				<div class="d-flex align-items-center">
					<strong>Processing your request ...</strong>
					<div class="spinner-border ms-auto" role="status" aria-hidden="true" />
				</div>
			</div>
		</div>
	</div>
</div>
