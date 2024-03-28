<script lang="ts">
    import heroScroll from "$lib/images/hero-scroll.png";
    import ccLogo from "$lib/images/cc-logo.png";
    import clouds from "$lib/images/clouds.png";
    import caveDown from "$lib/images/cave-down.png";
    import chest from "$lib/images/chest.png";
    import chestFirst from "$lib/images/chest-1st.png";
    import chestSecond from "$lib/images/chest-2nd.png";
    import chestThird from "$lib/images/chest-3rd.png";

    let prizes = [
        {
            label: "1",
            sup: "st",
            open: chestFirst,
            image: chest,
            card: [
                "#1 Gold",
                "POSESSER OF ELDER WAND",
                "Prizes Worth Rs.100k+ Cash Prize Worth Rs. 30000 +Tons of swags and giveaways",
            ],
        },
        {
            label: "2",
            sup: "nd",
            open: chestSecond,
            image: chest,
            card: [
                "#2 Silver",
                "OWNER OF RESURRECTION STONE",
                "Prizes Worth Rs.80k+ Cash Prize Rs. 20000 +Tons of swags and giveaways",
            ],
        },
        {
            label: "3",
            sup: "rd",
            open: chestThird,
            image: chest,
            card: [
                "#3 Bronze",
                "BEARER OF CLOAK OF INVISIBILITY",
                "Prizes Worth Rs.50k+ Cash Prize Worth Rs. 10000 Tons of swags and giveaways",
            ],
        },
    ];

    function onHover(idx: number) {
        prizes[idx].image = prizes[idx].open;
    }

    function onHoverOut(idx: number) {
        prizes[idx].image = chest;
    }
</script>

<div class="">
    <div
        class="text-center h-[128vh] text-black align-middle relative overflow-hidden bg-no-repeat bg-cover prizes__main"
    >
        <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
            <img
                src={clouds}
                class="h-[21rem] w-full z-10 overflow-clip absolute bg-no-repeat bg-cover bg-fixed top-[-10rem]"
                alt=""
            />
            <img
                src={caveDown}
                class="h-[18rem] w-full z-10 overflow-clip absolute bg-no-repeat bg-cover bg-fixed bottom-0"
                alt=""
            />
            <div class="w-full mt-[12rem]">
                <p class="text-white text-7xl">Prizes</p>
            </div>
            <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24 w-full h-full overflow-scroll text-white text-5xl"
            >
                {#each prizes as prize, i}
                    <div class="flex flex-col items-center z-20">
                        <div
                            class={`bg-yellow-700 w-[24rem] rounded-lg ${prize.image !== chest ? "opacity-100" : "opacity-0"}`}
                        >
                            {#each prize.card as card}
                                <p class="text-2xl">{card}</p>
                            {/each}
                        </div>
                        <img
                            src={prize.image}
                            alt=""
                            on:mouseenter={() => onHover(i)}
                            on:mouseleave={() => onHoverOut(i)}
                        />
                        <p>{prize.label}<sup>{prize.sup}</sup> Prize</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>
