<svelte:head>
  <title>About</title>
</svelte:head>
<style>

ul {
  list-style: none;
}

  .layout {
    --max-width: 80rem;
    max-width: var(--max-width);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .about {
    min-height: 100vh;
    margin: 0 var(--s2);
  }
  .nav-link {
    color: var(--text-headline);
  }

  .avatar {
    width: var(--s4);
  }

  .sidebar {
    padding: var(--s-1);
    margin: 0 var(--s0);
  }


  .content ul li {
    margin-bottom: var(--s-1);
  }

  .content ul li::before {
    color: var(--text-headline);
  }

  .italic {
    font-style: italic;
  }



</style>
<div class="about">
  <nav>
    <a href="/." class="h1 nav-link">⬅</a>
  </nav>
  
  <section class="layout">
    <div class="sidebar">
      <img class="avatar" src="ben-filled.svg" alt="benjamin's branded face">
    </div>
    <div class="content">
    <ul>
      <li><h4><span class="italic">Location</span>: New York, NY</h4></li>
      <li><h4><span class="italic">Profession</span>: Software Engineer</h4></li>
      <li><h4><span class="italic">Favorite Dog</span>: They’re all good dogs</h4></li>
      <li><h4> <span class="italic">Favorite New Technology</span>: Svelte</h4></li>
      <li><h4> <span class="italic">Tools</span>: React, Redux, CSS, HTML, JavaScript, GraphQL</h4></li>
      <li><h4><span class="italic">For fun</span>: <span class="h3">🏃🏻</span>, <span class="h3">🏋🏻</span>, <span class="h3">🚴🏻</span>, <span>🏒</span>, Pretending the New Jersey Devils will have a competitive team.</h4></li>
    </ul>      
    </div>
  </section>
</div>