<script>
  let heads = Array.from(...)
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<style>
  .hero {
    display: grid;
    height: 100vh;
    grid-template-columns: repeat(12, minmax(var(--s1), 1fr));
    grid-template-rows: repeat(12, minmax(var(--s1), 1fr));
    column-gap: var(--s-3);
    row-gap: var(--s-3);
    /* background-image: url("../ben-filled.svg");
    background-size: 5%; */
    /* box-sizing: content-box; */
  }

  .hero > h2,
  .hero > h3 {
    border: var(--s-2) solid var(--text-primary);
    padding: var(--s-1);
    justify-self: center;
    align-self: center;
  }

  .hero > h3 {
    border: var(--s-3) solid var(--text-primary);
  }
  

  .hero > .name {
    grid-area: 6 / 3 / 8 / 11;
    transform: skew(-16deg);
    text-align: center;
  }

  .hero > .action {
    grid-area: 7 / 6 / 8 / 7;
    transform: skew(-16deg);
    z-index: 1;
  }

  .hero > .state {
    grid-area: 9 / 4 / 10 / 9;
  }
</style>

<div class="hero">

  {#each}

  {/each}

  <h2 class="name">Benjamin Schachter</h2>
  <!-- <h3 class="action">is</h3> -->
  <!-- <h2 class="state">Looking For A Job</h2> -->
</div>
