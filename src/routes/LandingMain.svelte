<script lang="ts">
  import LandingHeroSection from './LandingHeroSection.svelte';
  import LandingCommunitySection from './LandingCommunitySection.svelte';
	import LandingFromBlog from './LandingFromBlog.svelte';
	import LandingEventsSection from './LandingEventsSection.svelte';

</script>

<main>

  <LandingHeroSection />
  <LandingCommunitySection />
  <LandingFromBlog />
  <LandingEventsSection />

</main>

<style>
  main {
    width: 100%;
    min-height: 200lvh;
    /* display: none; */
  }
</style>

