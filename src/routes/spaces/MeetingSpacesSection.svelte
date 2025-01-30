<script lang="ts">
	import SpaceCard from "$lib/components/SpaceCard.svelte";
import { MeetingSpaces } from "$lib/scripts/spaces";

</script>

<section id="meeting-spaces" class="meeting-spaces-section">
  <div class="container">
    <h2 class="h2">Meeting Spaces</h2>

    <ul class="list">
      {#each MeetingSpaces as space}
        <li>
          <SpaceCard {...space} />
        </li>
      {/each}
    </ul>
  </div>
</section>


<style>
  /* MEETING SPACES SECTION */
  section.meeting-spaces-section > div.container {
    width: 100%;
    padding-block: 3.75rem; /* 60px */
  }
  section.meeting-spaces-section h2.h2 {
    text-align: center;
  }

  /* Spaces List */
  ul.list {
    list-style: none;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5rem; /* 24px */
    padding-block-start: 1.5rem; /* 24px */
    margin-inline: auto;
  }
</style>
