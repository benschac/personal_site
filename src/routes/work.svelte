<script>
</script>

<style>

.nav {
  margin: var(--s2) 0;
  display: flex;
  margin: var(--s2);
}


.nav-link {
    color: var(--text-headline);
    flex-grow: 1;
  }

.work {
  min-height: 100vh;
  margin: 0 auto;
  max-width: 80rem;
}

.grid {
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(2, minmax( var(--s4), 1fr));
  grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
  gap: var(--s-3);
  margin: 0 var(--s2);
}

.grid__item {
  border: var(--s-3) solid var(--text-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: var(--s-1) 0;
}


</style>

<div class="work">
  <nav class="nav">
    <a href="/." class="h3 nav-link">⬅</a>
    <h3><i>resume</i> 📄</h3>
  </nav>
  <div class="grid">
    <div class="grid__item">
      <h3>WeWork</h3>
    </div>
    <div class="grid__item">
      <h3>Prolific Interactive</h3>
    </div>
    <div class="grid__item">
      <h3>Freelance</h3>
    </div>
    <div class="grid__item">
      <h3>Run Dexter</h3>
    </div>
    <div class="grid__item"><h3><a target="_blank" href="https://medium.com/@benschac">Technical Writing</a></h3></div>
  </div>
</div>