<script lang="ts">
  import { page } from "$app/stores";
	import { browser } from "$app/environment";
	import Logo from "$lib/components/Logo.svelte";
  import { GeneralNavLinks } from "$lib/scripts/links";

  let isHeaderScrolled: boolean = $state(false);

  function checkScroll() {
    if (browser) {
      if (window.scrollY > 20) {
        isHeaderScrolled = true;
      } else {
        isHeaderScrolled = false;
      }
    }
  }
</script>

<svelte:window onscroll={checkScroll} />

<header data-scrolled={isHeaderScrolled}>
  <div class="container">
    <div class="side start">
      <a href="/" class="home-link" aria-label="Go to homepage">
        <Logo baseColor={isHeaderScrolled ? '#000521' : 'white'} />
      </a>
    </div>

    <div class="side end">
      <nav>
        <ul class="nav-list">
          {#each GeneralNavLinks as link}
            <li>
              <a href={link.url} class="nav-link {$page.url.pathname.includes(link.url) ? 'current' : ''}">{link.label}</a>
            </li>
          {/each}
        </ul>
      </nav>
      
      <div class="cta">
        <button class="btn {isHeaderScrolled ? 'btn-default' : 'btn-inverse'} btn-book-a-tour" aria-label="Book a tour">
          <span aria-hidden="true">Book a tour</span>
        </button>
      </div>
    </div>
  </div>
</header>


<style>
  header {
    color: var(--clr-white);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-inline: .75rem; /* 12px */
    background: linear-gradient(180deg, var(--clr-oxford-blue) 80%, tranparent);
    position: fixed;
    inset-inline: 0;
    inset-block-start: 0;
    z-index: 100;
  }
  header[data-scrolled=true] {
    background: var(--clr-white);
    color: var(--clr-oxford-blue);
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
    width: 36px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: .375rem; /* 6px */
    outline: 2px solid transparent;
    outline-offset: 6px;
  }
  a.home-link:focus-visible {
    outline-color: var(--clr-primary-500);
  }

  div.side.end nav {
    display: block;
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
    --nav-color: var(--clr-neutral-500);
    --nav-hover-color: var(--clr-white);
    --nav-outline-color: var(--clr-white);
  }
  header[data-scrolled=true] a.nav-link {
    --nav-hover-color: var(--clr-neutral-950);
    --nav-outline-color: var(--clr-neutral-950);
  }
  a.nav-link.current, header[data-scrolled=true] a.nav-link.current {
    --nav-color: var(--clr-primary-500);
    --nav-hover-color: var(--clr-primary-500);
  }

  div.side.end > .cta {
    display: none;

    @media screen and (min-width: 31.25rem) /* 500px */ {
      display: block;
    }
  }

  .btn.btn-inverse.btn-book-a-tour {
    --btn-hover-bg: var(--clr-primary-500);
    --btn-hover-color: var(--clr-white);
  }
</style>
