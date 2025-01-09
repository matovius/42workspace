<script lang="ts">
</script>

<section id="community-and-offering" class="community-and-offering-section">
  <div class="container">
    <div class="community">
      <h2 class="h2">We're the workspace for tech startups and scale-ups</h2>
      <p class="p">
        Join our community of innovative tech startups, software-driven companies, and experienced scale-ups in Rotterdam,
        all aiming for global expansion and international success. The companies and entrepreneurs we harbour are open and
        dedicated to supporting each other in their journeys towards long-term success and sustainable growth.
      </p>
    </div>

    <div class="offering">
      <h6 class="h5">What we offer at 42workspace</h6>

      <ul class="offerings-list">
        <li>
          <div class="offering-item"></div>
        </li>
        <li>
          <div class="offering-item"></div>
        </li>
        <li>
          <div class="offering-item"></div>
        </li>
        <li>
          <div class="offering-item"></div>
        </li>
        <li>
          <div class="offering-item"></div>
        </li>
        <li>
          <div class="offering-item"></div>
        </li>
        <li>
          <div class="offering-item"></div>
        </li>
        <li>
          <div class="offering-item"></div>
        </li>
        <li>
          <div class="offering-item"></div>
        </li>
        <li>
          <div class="offering-item"></div>
        </li>
        <li>
          <div class="offering-item"></div>
        </li>
        <li>
          <div class="offering-item"></div>
        </li>
        <li>
          <div class="offering-item"></div>
        </li>
        <li>
          <div class="offering-item"></div>
        </li>
        <li>
          <div class="offering-item"></div>
        </li>
        <li>
          <div class="offering-item"></div>
        </li>
      </ul>
    </div>

    <div class="cta">
      <button class="btn btn-default" aria-label="Explore our spaces">
        <span aria-hidden="true">Explore our spaces</span>
      </button>
    </div>
  </div>
</section>

<style>
  /* COMMUNITY AND OFFERING SECTION */
  section.community-and-offering-section {
    background: var(--clr-kessler);
  }
  section.community-and-offering-section > div.container {
    padding-block: 3.75rem; /* 60px */
  }

  /* Community */
  div.community {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media screen and (min-width: 720px) {
      flex-direction: row;

      & > * {
        flex: 1;
      }
    }
  }

  /* Offering */
  div.offering {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    padding-block-start: 3.75rem; /* 60px */
  }
  div.offering > h6 {
    text-align: center;
    color: color-mix(in oklab, var(--clr-neutral-800), transparent 50%);
  }
  ul.offerings-list {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1.5rem; /* 24px */
  }
  ul.offerings-list > li > div.offering-item {
    width: 120px;
    height: auto;
    aspect-ratio: 1;
    border-radius: 50%;
    background: var(--clr-white);
  }

  /* CTA */
  div.cta {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block-start: 3.75rem; /* 60px */
  }
  div.cta > button.btn {
    --btn-padding: .75rem 1.5rem; /* 12px 24px */
  }
</style>
