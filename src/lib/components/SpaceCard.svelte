<script lang="ts">
  import type { Duration, Space } from "$lib/scripts/types";

  interface Props extends Space {}

  let {
    name = 'Hello World!',
    price = 0,
    url = '/#',
    duration = 'day',
    details = '',
    img = '/favicon.png',
    imgAlt = '',
  }: Props = $props();
</script>

<article>
  <div class="header">
    <h6 class="h5">{name}</h6>
  </div>
  <div class="preview-image">
    <img src={img} alt={imgAlt}>
  </div>
  <div class="details">
    <p class="p date">&euro;{price} per {duration}</p>
    <p class="small description">{details}</p>
  </div>
  {#if url}
    <div class="cta">
      <button class="btn btn-default" aria-label="Book now">
        <span aria-hidden="true">Book now</span>
      </button>
      <button class="btn btn-inverse" aria-label="Learn more">
        <span aria-hidden="true">Learn more</span>
      </button>
    </div>
  {/if}
</article>

<style>
  article {
    height: 100%;
    border-radius: 1.5rem; /* 24px */
    border: 2px solid var(--clr-neutral-100);
    isolation: isolate;
    position: relative;
    overflow: hidden;
    background: var(--clr-white);
  }

  div.header {
    padding: .75rem; /* 12px */
  }

  div.header > h6 {
    text-align: center;
  }

  div.preview-image {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    /* border-block: 2px solid var(--clr-neutral-100); */
    position: relative;
    overflow: hidden;
    filter: brightness(0.5);
  }
  div.preview-image > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }

  div.details {
    padding: .75rem; /* 12px */
    padding-block-end: 3.75rem; /* 60px */
  }
  div.details > .date {
    font-weight: 600;
    color: var(--clr-neutral-500);
  }

  div.cta {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: .25rem; /* 4px */
    position: absolute;
    inset-inline: .75rem; /* 12px */
    inset-block-end: .75rem; /* 12px */
  }
</style>
