<script>
    import Hero from "$lib/components/Hero.svelte";
    import About from "$lib/components/About.svelte";
    import Prizes from "$lib/components/Prizes.svelte";
    import clouds from "$lib/images/clouds.png";
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
    <Prizes />
</div>
