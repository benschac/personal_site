<script>
  export let segment
</script>

<svelte:head>
  <title>Benjamin Schachter</title>
</svelte:head>
<style>
.hero {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 100vh;
}

  .name {
    border: var(--s-2) solid var(--text-primary);
    padding: var(--s-2);
    transform: skew(-16deg);
    margin-top: var(--s2);
  }

  header {
    margin: 0 auto;
    margin-top: var(--s3);
    padding: 0 var(--s2);
    background: var(--bg-secondary);
    color: var(--bg-primary);
  }

.switcher > * {
  display: flex;
  flex-wrap: wrap;
}

.switcher > * > * {
  --basis: 60rem;
  flex-grow: 1;
  /* TODO: Learn about this more */
  flex-basis: calc((var(--basis) - (100% - var(--s1))) * 999);
  margin: calc(var(--s1) / 2);
}

.text-align\:center {
  text-align: center;
}

/* Not great, i'll allow it for now */
.text-align\:center a {
  text-decoration: none;
}


</style>

<div class="hero">
  <header>
    <h1 class="name text-align:center h2">Benjamin Schachter</h1>
  </header>
  

  <div class="switcher">
    <div>
      <div class="text-align:center">
        <a aria-current={segment === undefined ? 'page' : undefined} href="/about">
          <span class="h1">📖</span><h3>About</h3>
        </a>
      </div>
      <div class="text-align:center">
        <a aria-current={segment === undefined ? 'page' : undefined} href="/work">
          <span class="h1">🧑🏻‍💻</span><h3>Work</h3>
        </a>
      </div>
      <div class="text-align:center">
        <a aria-current={segment === undefined ? 'page' : undefined} href="/contact">
          <span class="h1">🤙🏻</span><h3>Contact</h3>
        </a>
      </div>
    </div>
  </div>
</div>