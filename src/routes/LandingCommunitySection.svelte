<script lang="ts">
</script>

<section id="community-and-offering" class="community-and-offering-section">
  <div class="container">
    <div class="community">
      <h2 class="h2">The workspace for tech startups and scale-ups</h2>
      <p class="p">
        Join our community of innovative tech startups, software-driven companies, and experienced scale-ups in Rotterdam,
        all aiming for global expansion and international success. The companies and entrepreneurs we harbour are open and
        dedicated to supporting each other in their journeys towards long-term success and sustainable growth.
      </p>
    </div>

    <div class="offering">
      <h4 class="h4">What we offer at 42workspace</h4>

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
  div.offering > h4.h4 {
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
</style>
