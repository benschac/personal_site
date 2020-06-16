<script>
  export let segment;
</script>

<style>
  /* nav {
    border-bottom: var(--border-size) solid var(--border);
    font-weight: 300;
    padding: 0 1em;
  }

  a img {
    width: 3rem;
  } */
</style>

<nav>
  <ul>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        <img src="ben-filled.svg" alt="benjamin schachter head illistration" />
      </a>
    </li>
  </ul>
</nav>
