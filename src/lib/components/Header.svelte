<script lang="ts">
	import { browser } from "$app/environment";
	import Logo from "$lib/components/Logo.svelte";
	import Modal from "$lib/components/primitives/Modal.svelte";
	import { quadOut } from "svelte/easing";
	import { fly } from "svelte/transition";

  let isMobileMenuOpen: boolean = $state(false);
  let isHeaderScrolled: boolean = $state(false);

  function checkScroll() {
    if (browser) {
      if (window.scrollY > 10) {
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
      
      <div class="cta">
        <button class="btn {isHeaderScrolled ? 'btn-default' : 'btn-inverse'} btn-book-a-tour" aria-label="Book a tour">
          <span aria-hidden="true">Book a tour</span>
        </button>
      </div>
      <div class="mobile-nav">
        <button class="btn btn-inverse" aria-label="Open navigation menu" onclick={() => { isMobileMenuOpen = true; }}>
          <span aria-hidden="true">Menu</span>
        </button>
        <Modal bind:isOpen={isMobileMenuOpen}>
          {#if isMobileMenuOpen}
            <div class="mobile-nav-menu" transition:fly={{ duration: 200, easing: quadOut, x: 0, y: "-100%", opacity: 1 }}>
              <div>
                <button class="btn btn-ghost" aria-label="Close navigation menu" onclick={() => { isMobileMenuOpen = false; }}>
                  <span aria-hidden="true">Close</span>
                </button>
              </div>
              <ul class="mobile-nav-list">
                <li>
                  <a href="/" class="nav-link mobile" onclick={() => { isMobileMenuOpen = false; }}>Spaces</a>
                </li>
                <li>
                  <a href="/" class="nav-link mobile" onclick={() => { isMobileMenuOpen = false; }}>Events</a>
                </li>
                <li>
                  <a href="/" class="nav-link mobile" onclick={() => { isMobileMenuOpen = false; }}>Pricing</a>
                </li>
                <li>
                  <a href="/" class="nav-link mobile" onclick={() => { isMobileMenuOpen = false; }}>Blog</a>
                </li>
                <li>
                  <a href="/" class="btn btn-primary" onclick={() => { isMobileMenuOpen = false; }}>Book a tour</a>
                </li>
              </ul>
            </div>
          {/if}
        </Modal>
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
    --nav-color: var(--clr-neutral-600);
    --nav-hover-color: var(--clr-white);
    --nav-outline-color: var(--clr-white);
  }
  header[data-scrolled=true] a.nav-link {
    --nav-color: var(--clr-neutral-400);
    --nav-hover-color: var(--clr-neutral-900);
    --nav-outline-color: var(--clr-neutral-900);
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

  div.mobile-nav-menu {
    /* width: 100%; */
    background: var(--clr-white);
    padding: 12px;
    position: fixed;
    top: 0;
    inset-inline: 0;
    border-radius: 0 0 1.5rem 1.5rem; /* 24px */
  }
  div.mobile-nav-menu > div:nth-child(1) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  ul.mobile-nav-list {
    list-style: none;
    display: grid;
    gap: .75rem; /* 12px */
  }

  .btn.btn-inverse.btn-book-a-tour {
    --btn-hover-bg: var(--clr-primary-500);
    --btn-hover-color: var(--clr-white);
  }
</style>

