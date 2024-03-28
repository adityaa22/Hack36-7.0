<script lang="ts">
    import devfolio from "$lib/images/devfolio.png";
    import ethIndia from "$lib/images/eth-india.png";
    import polygon from "$lib/images/polygon.png";
    import themeBg from "$lib/images/theme-bg.png";

    let sponsors = [
        {
            alt: "DEVFOLIO LOGO",
            logo: devfolio,
        },
        {
            alt: "POLYGON LOGO",
            logo: polygon,
        },
        {
            alt: "ETHINDIA LOGO",
            logo: ethIndia,
        },
    ];
</script>

<div id="judges" class="flex flex-col items-center justify-center text-black bg-orange-300 pb-24">
    <h1 class="text-6xl">Judges</h1>
    <div class="mt-16 items-center justify-center flex flex-col w-full">
        <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center blur-md gap-x-12"
        >
            <div class="flex items-center justify-center">
                <img src={themeBg} alt="" />
            </div>
            <div class="flex items-center justify-center">
                <img src={themeBg} alt="" />
            </div>
            <div class="flex items-center justify-center">
                <img src={themeBg} alt="" />
            </div>
        </div>
        <h1 class="mb-12 tracking-tight text-6xl">Announcing soon ...</h1>
    </div>
</div>
