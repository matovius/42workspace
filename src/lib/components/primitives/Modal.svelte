<script lang="ts">
	import { quadOut } from "svelte/easing";
	import { fade } from "svelte/transition";

  interface Props {
    isOpen?: boolean;
    children: any;
  }
  let {
    isOpen = $bindable(false),
    children
  }: Props = $props();

  let Dialog: HTMLDialogElement;

  $effect(() => {
    if (Dialog) {
      if (isOpen) {
        Dialog.showModal();
      } else {
        setTimeout(() => {
          Dialog.close();
        }, 200);
      }
    }
  });
</script>

<dialog bind:this={Dialog}>
  {#if isOpen}
    <div class="backdrop" transition:fade={{ duration: 200, easing: quadOut }}></div>
  {/if}

  {@render children()}
</dialog>

<style>
  dialog {
    width: 0;
    height: 0;
    overflow: visible;
    padding: 0;
    margin: 0;
    border: none;
    isolation: isolate;
  }
  dialog::backdrop {
    opacity: 0;
    background: transparent;
  }

  div.backdrop {
    position: fixed;
    inset: 0;
    max-width: 100dvw;
    max-height: 100dvh;
    background: color-mix(in srgb, var(--clr-black), transparent 60%);
  }
</style>