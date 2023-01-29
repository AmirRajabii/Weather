<script lang="ts">
    import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
    import { onMount } from "svelte";

    let spinner: boolean = false;
    export let cityName: string;
    export let afterhide = (): any => {};
    export function show() {
        var modal = bootstrap.Modal.getOrCreateInstance(
            document.getElementById("changeLocationModal")
        );
        modal.show();
    }

    export function hide() {
        var modal = bootstrap.Modal.getOrCreateInstance(
            document.getElementById("changeLocationModal")
        );
        modal.hide();
    }
    async function onYesClick() {
        try {
            spinner = true;
            document.getElementById("hiddenInputLoad").click();
        } catch (e) {
        } finally {
            setTimeout(() => {
                hide();
                spinner = false;
            }, 500);
        }
    }

    onMount(() => {
        document
            .getElementById("changeLocationModal")
            .addEventListener("hidden.bs.modal", () => {
                afterhide();
            });
    });
</script>

<!-- Modal -->
<div
    class="modal fade"
    id="changeLocationModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="changeLocationModalLabel"
    aria-hidden="true"
    style="z-index: 100000;"
>
    {#if cityName}
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="changeLocationModalLabel">
                        Enter Your City Name
                    </h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    />
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <label for="txtName" class="form-label"
                                ><i class="bi bi-geo-alt mx-1" />Location
                                Name 
                            </label>
                            <input
                                bind:value={cityName}
                                id="txtName"
                                type="text"
                                class="form-control"
                            />
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="row w-100">
                        <div class="col-sm-6" />
                        <div class="col-sm-3">
                            <button
                                on:click={hide}
                                type="button"
                                class="btn btn-secondary w-100">Cancel</button
                            >
                        </div>
                        <div class="col-sm-3">
                            <button
                                disabled={cityName.length < 2}
                                on:click={onYesClick}
                                type="button"
                                class="btn btn-primary w-100"
                            >
                                {#if spinner}
                                    <div
                                        class="spinner-border text-white spinner-border-sm"
                                        role="status"
                                    >
                                        <span class="visually-hidden"
                                            >Loading...</span
                                        >
                                    </div>
                                {:else}
                                    Search
                                {/if}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</div>
