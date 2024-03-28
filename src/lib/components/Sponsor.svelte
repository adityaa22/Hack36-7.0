<script lang="ts">
    import * as Carousel from "$lib/components/ui/carousel";
    import caveUp from "$lib/images/cave-up.png";
    import devfolio from "$lib/images/devfolio.png";
    import ethIndia from "$lib/images/eth-india.png";
    import polygon from "$lib/images/polygon.png";
    import AutoPlay from "embla-carousel-autoplay";

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

<div id="sponsors" class="bg-orange-300">
    <div
        class="text-center h-screen text-black align-middle relative overflow-hidden bg-no-repeat bg-cover"
    >
        <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
            <img
                src={caveUp}
                class="h-[18rem] w-full z-20 overflow-clip absolute bg-no-repeat bg-cover bg-fixed"
                alt=""
            />
            <h1 class="mt-44 tracking-tight text-6xl">Sponsors</h1>
            <h1 class="text-4xl tracking-tight">More comming soon...</h1>
            <div class="mt-16 items-center justify-center flex w-full">
                <Carousel.Root
                    class="w-full max-w-[80vw] h-full"
                    plugins={[
                        AutoPlay({
                            delay: 2000,
                        }),
                    ]}
                >
                    <Carousel.Content>
                        {#each sponsors as sponsor, i (i)}
                            <Carousel.Item
                                class="md:basis-1/2 lg:basis-1/3 flex items-center justify-center"
                            >
                                <div
                                    class="h-[20rem] w-[20rem] sponsor__card overflow-hidden bg-no-repeat bg-cover flex items-center justify-center"
                                >
                                    <img src={sponsor.logo} alt={sponsor.alt} class="w-[10rem]" />
                                </div>
                            </Carousel.Item>
                        {/each}
                    </Carousel.Content>
                    <Carousel.Previous />
                    <Carousel.Next />
                </Carousel.Root>
            </div>
        </div>
    </div>
</div>
