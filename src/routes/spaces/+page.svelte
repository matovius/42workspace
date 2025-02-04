<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import SpacesHeroSection from './SpacesHeroSection.svelte';
  import OfficeSpacesSection from './OfficeSpacesSection.svelte';
	import MeetingSpacesSection from './MeetingSpacesSection.svelte';
</script>

<svelte:head>
  <title>Coworking Spaces - 42workspace</title>
</svelte:head>

<Header />

<main>
  <SpacesHeroSection />

  <OfficeSpacesSection />
  <MeetingSpacesSection />

</main>

<Footer />

<style>
  main {
    width: 100%;
    min-height: 200lvh;
    /* display: none; */
  }
</style>
