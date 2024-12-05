<script lang="ts">
</script>

<header>
  <div class="container">
    <div class="side start">
      <a href="/" class="home-link" aria-label="Go to homepage">
        <div class="icon" aria-hidden="true">42</div>
      </a>

      <nav>
        <ul class="nav-list">
          <li>
            <a href="/" class="nav-link">Spaces</a>
          </li>
          <li>
            <a href="/" class="nav-link">Events</a>
          </li>
          <li>
            <a href="/" class="nav-link">Pricing</a>
          </li>
          <li>
            <a href="/" class="nav-link">Blog</a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="side end">
      <div class="cta">
        <button class="btn btn-default" aria-label="Book a tour">
          <span aria-hidden="true">Book a tour</span>
        </button>
      </div>
      <div class="mobile-nav">
        <button class="btn btn-ghost" aria-label="Open navigation menu">
          <span aria-hidden="true">Menu</span>
        </button>
      </div>
    </div>
  </div>
</header>


<style>
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-inline: .75rem; /* 12px */
    box-shadow: 0 2px 0 0 var(--clr-neutral-100);
    background: var(--clr-neutral-50);
    position: fixed;
    inset-inline: 0;
    inset-block-start: 0;
    z-index: 100;
  }
  header > div.container {
    width: 100%;
    max-width: 75rem; /* 1200px */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem; /* 24px */
    padding-block: .75rem; /* 12px */
  }

  .side {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: .75rem; /* 12px */
  }
  .side.start {
    justify-content: flex-start;
  }
  .side.end {
    justify-content: flex-end;
  }

  a.home-link {
    text-decoration: none;
  }
  a.home-link > .icon {
    color: transparent;
    width: 36px;
    height: auto;
    aspect-ratio: 1;
    background: var(--clr-neutral-300);
    user-select: none;
  }

  div.side.start nav {
    display: none;

    @media screen and (min-width: 31.25rem) /* 500px */ {
      display: block;
    }
  }

  ul.nav-list {
    list-style: none;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: .1875rem; /* 3px */
  }

  a.nav-link {
    color: var(--clr-neutral-600);
    font-weight: 500;
    text-decoration: none;
    padding: .1875rem .5625rem; /* 3px 9px */
    border-radius: 9999rem;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  a.nav-link:is(:hover, :focus) {
    color: var(--clr-neutral-900);
    background: var(--clr-neutral-200);
  }
  a.nav-link:focus-visible {
    outline-color: var(--clr-black);
  }

  div.side.end > .cta {
    display: none;

    & ~ .mobile-nav {
      display: block;
    }

    @media screen and (min-width: 31.25rem) /* 500px */ {
      display: block;

      & ~ .mobile-nav {
        display: none;
      }
    }
  }
</style>

