<script>
    import headerImage from "$lib/images/header.jpg";
    import aboutImage from "$lib/images/about.jpg";
    import Hero from "$lib/components/Hero.svelte";
    import About from "$lib/components/About.svelte";
</script>

<svelte:head>
    <title>Hack36 7.0</title>
    <meta name="description" content="Hack36 7.0 MNNIT" />
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
    />
</svelte:head>

<div>
    <Hero />
    <About />
</div>
