<script lang="ts">
  import Header from '$lib/components/Header.svelte';

</script>

<svelte:head>
  <title>42workspace - The Tech Coworking Space of Rotterdam</title>
</svelte:head>

<Header />

<main>
  <section id="hero" class="hero-section">
    <div class="container">
      <h1 class="h1">The Tech Coworking Space of <span>Rotterdam</span></h1>
      <p class="p">
        We are Rotterdam's best coworking space and community for innovative tech startups, scale-ups and freelancers.
        Being in the heart of Rotterdam, we provide the perfect environment and network to take your business to the next level.
      </p>
      <div class="cta">
        <button class="btn btn-primary" aria-label="Book a tour">
          <span aria-hidden="true">Book a tour</span>
        </button>
      </div>
      <div class="image-cloud">
        <div class="image one"></div>
        <div class="image two"></div>
        <div class="image three"></div>
      </div>
    </div>
  </section>
</main>

<style>
  main {
    min-height: 200lvh;
  }
  section {
    display: flex;
    justify-content: center;
    padding-inline: .75rem; /* 12px */
  }
  section > div.container {
    max-width: 1200px;
    padding-block: 7.5rem; /* 120px */
    position: relative;
  }
  section.hero-section h1.h1 > span {
    color: var(--clr-primary-500);
  }
  section.hero-section p.p {
    max-width: 37.5rem; /* 600px */
    padding-block-start: 1.5rem; /* 24px */
  }
  section.hero-section div.cta {
    padding-block-start: 1.5rem; /* 24px */
  }
  section.hero-section button.btn {
    --btn-padding: 24px 60px;
  }
  section.hero-section div.image-cloud {
    isolation: isolate;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    position: absolute;
    inset-block-end: 1.875rem; /* 30px */
    inset-inline-start: 50%;
    transform: rotate(-30deg);
  }
  div.image {
    --_size: 7.5rem; /* 120px */
    width: var(--_size);
    height: auto;
    aspect-ratio: 1;
    border-radius: 50%;
    background: var(--clr-neutral-200);
    position: absolute;
  }
  div.image.one {
    transform: translateX(calc(-100% - (var(--_size) / 5)));
  }
  div.image.three {
    transform: translateX(calc(100% + (var(--_size) / 5)));
  }
  div.image:hover {
    scale: 1.1;
    z-index: 10;
  }
</style>