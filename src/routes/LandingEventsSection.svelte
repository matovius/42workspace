<script lang="ts">
</script>

<section id="events" class="events-section">
  <div class="container">
    <div class="lead">
      <h2 class="h2">Events at 42workspace</h2>
      <p class="p">
        We have space for a wide range of innovative and educational events. Be part of meetups and tech talks,
        competitions and hackathons, workshops and fireside chats, keynotes and a whole lot more.
        Or host your own private or open events in one of our incredible spaces.
      </p>
      <div class="cta">
        <button class="btn btn-inverse" aria-label="Find out more">
          <span aria-hidden="true">Find out more</span>
        </button>
      </div>
    </div>

    <div class="image-cloud">
      <div class="image one"></div>
      <div class="image two"></div>
      <!-- <div class="image three"></div> -->
    </div>
  </div>
</section>

<style>
  /* EVENTS SECTION */
  section.events-section {
    color: var(--clr-white);
    background: var(--clr-oxford-blue);
  }
  section.events-section > div.container {
    padding-block: 3.75rem; /* 60px */
  }
  
  /* Lead */
  section.events-section div.lead {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  section.events-section h2.h2 {
    text-align: center;
  }
  section.events-section p.p {
    text-align: center;
    max-width: 37.5rem; /* 600px */
    padding-block-start: 1.5rem; /* 24px */
  }
  section.events-section div.cta {
    padding-block-start: 1.5rem; /* 24px */
  }
  div.cta > button.btn {
    --btn-padding: .75rem 1.5rem; /* 12px 24px */
    --btn-outline-color: var(--clr-white);
  }

  /* Image Cloud */
  div.image-cloud {
    padding-block-start: 1.5rem; /* 24px */
    margin-inline: auto;
    display: flex;
    flex-direction: row;
    user-select: none;
  }
  div.image {
    --_size: 11.25rem; /* 180px */
    width: var(--_size);
    height: auto;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 12px solid var(--clr-primary-500);
    background: var(--clr-neutral-200);

    @media screen and (min-width: 640px) {
      --_size: 12.5rem; /* 200px */
    }

    @media screen and (min-width: 720px) {
      --_size: 15rem; /* 240px */
    }

    @media screen and (min-width: 960px) {
      --_size: 17.5rem; /* 280px */
    }
  }
  div.image:not(.one) {
    margin-inline-start: -3rem; /* 48px */
  }
</style>

