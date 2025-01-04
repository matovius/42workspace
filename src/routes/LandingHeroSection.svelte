<script lang="ts">
</script>

<section id="hero" class="hero-section">
  <div class="container">
    <div class="lead">
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
    </div>

    <div class="featured">
      <h6 class="h5">As featured on</h6>
      <ul class="featured-list">
        <li>
          <div class="featured-link"></div>
        </li>
        <li>
          <div class="featured-link"></div>
        </li>
        <li>
          <div class="featured-link"></div>
        </li>
        <li>
          <div class="featured-link"></div>
        </li>
      </ul>
    </div>
  </div>
</section>

<style>
  /* HERO SECTION */
  section.hero-section {
    color: var(--clr-white);
    min-height: 100vh;
    min-height: 100lvh;
    background: var(--clr-oxford-blue);
  }
  section.hero-section > div.container {
    padding-block: 12.5rem 6rem; /* 200px, 96px */
  }
  /* Lead */
  section.hero-section div.lead {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  section.hero-section h1.h1 {
    text-align: center;
  }
  section.hero-section h1.h1 > span {
    color: var(--clr-primary-500);
  }
  section.hero-section p.p {
    text-align: center;
    max-width: 37.5rem; /* 600px */
    padding-block-start: 1.5rem; /* 24px */
  }
  section.hero-section div.cta {
    padding-block-start: 1.5rem; /* 24px */
  }
  section.hero-section button.btn {
    --btn-padding: 24px 60px;
  }
  /* Featured */
  div.featured {
    padding-block-start: 6rem; /* 96px */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .75rem; /* 12px */
  }
  div.featured > h6 {
    color: var(--clr-neutral-500);
  }
  div.featured > ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
  }
  div.featured div.featured-link {
    width: 7.5rem; /* 120px*/
    height: 2.25rem; /* 36px */
    background: var(--clr-neutral-200);
    border-radius: 9999rem;
  }
</style>

