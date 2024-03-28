<script>
    import Hero from "$lib/components/Hero.svelte";
    import About from "$lib/components/About.svelte";
    import Prizes from "$lib/components/Prizes.svelte";
    import Theme from "$lib/components/Theme.svelte";
    import Sponsor from "$lib/components/Sponsor.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import Judges from "$lib/components/Judges.svelte";
    import Faq from "$lib/components/FAQ.svelte";
    import Footer from "$lib/components/Footer.svelte";
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
    <Navbar />

    <Hero />
    <About />
    <Theme />
    <Prizes />
    <Sponsor />
    <Judges />
    <Faq />

    <Footer />
</div>
