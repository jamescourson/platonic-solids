<script>
  import "../app.css"
</script>


<header>
  <section class="title">
    <h1 class="text-lg rounded">Platonic Solids</h1>
    <small>by <a href="https://courson.dev" class="text- hover:text-jg hover:underline">James Courson</a></small>
  </section>

  <nav>
    <button class="rounded-l">Tetrahedron</button>
    <button>Hexahedron</button>
    <button>Octahedron</button>
    <button>Dodecahedron</button>
    <button class="rounded-r">Icosahedron</button>
  </nav>
</header>

<slot />


<style lang="postcss">
  header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 1em;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
  }

  header .title {
    display: flex;
    flex-flow: row wrap;
    gap: .5em;
    align-items: center;
  }

  nav {
    display: inline-flex;
    flex-flow: row wrap;
  }

  nav button {
    @apply text-sm;
  }

  header .title h1, nav button {
    @apply bg-jg opacity-70 py-2 px-4 text-jg-text font-bold;
    transition: opacity 150ms ease;
  }

  header .title h1:hover, nav button:hover {
    @apply opacity-80 text-jg-white;
  }
</style>
