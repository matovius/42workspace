<script lang="ts">
	import Logo from "$lib/components/Logo.svelte";
	import Modal from "$lib/components/primitives/Modal.svelte";
	import { quadOut } from "svelte/easing";
	import { fly } from "svelte/transition";

  let isMobileMenuOpen: boolean = false;
</script>

<header>
  <div class="container">
    <div class="side start">
      <a href="/" class="home-link" aria-label="Go to homepage">
        <Logo />
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
        <button class="btn btn-ghost" aria-label="Open navigation menu" onclick={() => { isMobileMenuOpen = true; }}>
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
    display: flex;
    justify-content: center;
    align-items: center;
    padding-inline: .75rem; /* 12px */
    box-shadow: 0 2px 0 0 var(--clr-neutral-100);
    background: var(--clr-white);
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
    width: 36px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
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
</style>

