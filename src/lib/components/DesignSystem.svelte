<div class="palettes">
  <div class="palette neutral">
    <div class="box" style="background: var(--clr-neutral-50, red);"></div>
    <div class="box" style="background: var(--clr-neutral-100, red);"></div>
    <div class="box" style="background: var(--clr-neutral-200, red);"></div>
    <div class="box" style="background: var(--clr-neutral-300, red);"></div>
    <div class="box" style="background: var(--clr-neutral-400, red);"></div>
    <div class="box" style="background: var(--clr-neutral-500, red);"></div>
    <div class="box" style="background: var(--clr-neutral-600, red);"></div>
    <div class="box" style="background: var(--clr-neutral-700, red);"></div>
    <div class="box" style="background: var(--clr-neutral-800, red);"></div>
    <div class="box" style="background: var(--clr-neutral-900, red);"></div>
    <div class="box" style="background: var(--clr-neutral-950, red);"></div>
  </div>
  <div class="palette primary">
    <div class="box" style="background: var(--clr-primary-50, red);"></div>
    <div class="box" style="background: var(--clr-primary-100, red);"></div>
    <div class="box" style="background: var(--clr-primary-200, red);"></div>
    <div class="box" style="background: var(--clr-primary-300, red);"></div>
    <div class="box" style="background: var(--clr-primary-400, red);"></div>
    <div class="box" style="background: var(--clr-primary-500, red);"></div>
    <div class="box" style="background: var(--clr-primary-600, red);"></div>
    <div class="box" style="background: var(--clr-primary-700, red);"></div>
    <div class="box" style="background: var(--clr-primary-800, red);"></div>
    <div class="box" style="background: var(--clr-primary-900, red);"></div>
    <div class="box" style="background: var(--clr-primary-950, red);"></div>
  </div>
</div>

<div class="typefaces">
  <h1 class="h1">The quick brown fox jumps over the lazy dog</h1>
  <h2 class="h2">The quick brown fox jumps over the lazy dog</h2>
  <h3 class="h3">The quick brown fox jumps over the lazy dog</h3>
  <h4 class="h4">The quick brown fox jumps over the lazy dog</h4>
  <h5 class="h5">The quick brown fox jumps over the lazy dog</h5>
  <p class="p">The quick brown fox jumps over the lazy dog</p>
  <small class="small">The quick brown fox jumps over the lazy dog</small>
</div>

<div class="buttons">
  <button class="btn btn-default">
    <span>Default Button</span>
  </button>
  <button class="btn btn-inverse">
    <span>Inverse Button</span>
  </button>
  <button class="btn btn-primary">
    <span>Primary Button</span>
  </button>
  <button class="btn btn-ghost">
    <span>Ghost Button</span>
  </button>
</div>

<style>
  .palettes {
    display: flex;
    flex-direction: column;
    gap: 12px;

    & > div.palette {
      display: flex;
      flex-direction: row;
    }
  }

  .box {
    width: 100px;
    height: 100px;
    aspect-ratio: 1;
  }

  .typefaces {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .buttons {
    padding-block-start: 24px;
  }
</style>