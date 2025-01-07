<script lang="ts">
  import BlogArticle from '$lib/components/BlogArticle.svelte';

</script>

<section id="from-blog" class="from-blog-section">
  <div class="container">
    <h2 class="h2">From our blog</h2>

    <ul class="featured-articles">
      <li>
        <BlogArticle />
      </li>
      <li>
        <BlogArticle />
      </li>
      <li>
        <BlogArticle />
      </li>
    </ul>

    <div class="cta">
      <button class="btn btn-ghost" aria-label="Read more">
        <span aria-hidden="true">Visit the blog</span>
      </button>
    </div>
  </div>
</section>

<style>
  /* HERO SECTION */
  section.from-blog-section > div.container {
    width: 100%;
    padding-block: 3.75rem; /* 60px */
  }
  section.from-blog-section h2.h2 {
    text-align: center;
  }
  section.from-blog-section div.cta {
    padding-block-start: 1.5rem; /* 24px */
  }
  ul.featured-articles {
    list-style: none;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5rem; /* 24px */
    padding-block-start: 1.5rem; /* 24px */
    margin-inline: auto;
  }
  div.cta {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div.cta > button.btn {
    --btn-padding: .75rem 1.5rem; /* 12px 24px */
  }
</style>

