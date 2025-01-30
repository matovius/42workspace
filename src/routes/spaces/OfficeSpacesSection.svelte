<script lang="ts">
	import SpaceCard from "$lib/components/SpaceCard.svelte";
import { OfficeSpaces } from "$lib/scripts/spaces";

</script>

<section id="office-spaces" class="office-spaces-section">
  <div class="container">
    <h2 class="h2">Office Spaces</h2>

    <ul class="list">
      {#each OfficeSpaces as space}
        <li>
          <SpaceCard {...space} />
        </li>
      {/each}
    </ul>
  </div>
</section>


<style>
  /* OFFICE SPACES SECTION */
  section.office-spaces-section > div.container {
    width: 100%;
    padding-block: 3.75rem; /* 60px */
  }
  section.office-spaces-section h2.h2 {
    text-align: center;
  }

  /* Spaces List */
  ul.list {
    list-style: none;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: .75rem; /* 12px */
    padding-block-start: 1.5rem; /* 24px */
    margin-inline: auto;
  }
</style>
