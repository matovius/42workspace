<script lang="ts">
  import { dev } from "$app/environment";
	import DesignSystem from "$lib/components/DesignSystem.svelte";
</script>

<svelte:head>
  {#if dev}
    <title>The design system</title>
  {:else}
    <title>Nothing to see here...</title>
  {/if}
</svelte:head>

{#if dev}
  <DesignSystem />
{:else}
  <p class="p">There's absolutely nothing to see here. Be on your way...</p>
{/if}