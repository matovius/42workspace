<script lang="ts">
  interface Props {
    url?: string;
    previewImage?: string;
    previewImageAlt?: string;
    title?: string;
    date?: string;
  }
  let {
    url = '/#',
    previewImage = '/favicon.png',
    previewImageAlt = '',
    title = 'This is a test heading',
    date = 'June 1st 2024'
  }: Props = $props();
</script>

<a href={url} class="article-link">
  <article>
    <div class="preview-image">
      <img src={previewImage} alt={previewImageAlt}>
    </div>
    <div class="details">
      <small class="small date">{date}</small>
      <h6 class="h5">{title}</h6>
    </div>
  </article>
</a>

<style>
  a.article-link {
    text-decoration: none;
    display: block;
    border-radius: 1.5rem; /* 24px */
    border: 2px solid var(--clr-neutral-100);
    isolation: isolate;
    overflow: hidden;
    outline: 2px solid transparent;
    outline-offset: .1875rem; /* 3px */
  }
  a.article-link > article {
    background: var(--clr-white);
  }
  div.preview-image {
    height: 15rem; /* 240px */
    border-bottom: 2px solid var(--clr-neutral-100);
    position: relative;
    overflow: hidden;
  }
  div.preview-image > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(1);
    position: absolute;
  }
  div.details {
    padding: .75rem; /* 12px */
  }
  div.details > small.date {
    color: var(--clr-neutral-500);
  }
  a.article-link:hover {
    border-color: var(--clr-primary-500);
  }
  a.article-link:is(:hover, :focus) div.preview-image > img {
    filter: grayscale(0);
    transform: scale(120%) rotate(10deg);
  }
  a.article-link:is(:hover, :focus) div.details > h6 {
    color: var(--clr-primary-500);
  }
  a.article-link:focus-visible {
    outline-color: var(--clr-black);
  }
</style>
