<script lang="ts">
    import caveDown from "$lib/images/cave-down.webp";
    import caveUp from "$lib/images/cave-up.webp";
    import chestFirst from "$lib/images/chest-1st.webp";
    import chestSecond from "$lib/images/chest-2nd.webp";
    import chestThird from "$lib/images/chest-3rd.webp";
    import chest from "$lib/images/chest.webp";

    let prizes = [
        {
            label: "3",
            sup: "rd",
            open: chestThird,
            image: chest,
            card: [
                "#3 Bronze",
                "Holder of Tia Dalma's Compass",
                "Prizes Worth Rs.50k+ Cash Prize Worth Rs. 10000 Tons of swags and giveaways",
            ],
        },
        {
            label: "1",
            sup: "st",
            open: chestFirst,
            image: chest,
            card: [
                "#1 Gold",
                "Holder of Trident of Poseidon",
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
                "Holder of Dead Man's Chest",
                "Prizes Worth Rs.80k+ Cash Prize Rs. 20000 +Tons of swags and giveaways",
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

<div id="prizes">
    <div
        class="text-center h-full text-black align-middle overflow-hidden bg-no-repeat bg-cover prizes__main bg-center"
    >
        <div class="relative top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
            <img
                src={caveUp}
                class="h-[18rem] w-full z-10 overflow-clip absolute bg-no-repeat bg-cover top-0"
                alt=""
            />
            <img
                src={caveDown}
                class="h-[18rem] w-full z-10 overflow-clip absolute bg-no-repeat bg-cover bottom-0"
                alt=""
            />
            <div class="w-full mt-[12rem]">
                <p class="text-white text-7xl">Prizes</p>
                <p class="text-white text-4xl">Track prizes to be added soon...</p>
            </div>
            <div
                class="hidden lg:grid lg:grid-cols-3 mt-12 mb-12 w-full h-full overflow-hidden text-white text-5xl"
            >
                {#each prizes as prize, i}
                    <div class="flex flex-col items-center z-20">
                        <div
                            class={`bg-yellow-700 w-[24rem] rounded-xl ${prize.image !== chest ? "opacity-100" : "opacity-0"}`}
                        >
                            {#each prize.card as card, i}
                                <p
                                    class={`${i === 0 ? "text-6xl" : i === 1 ? "text-4xl" : "text-2xl"}`}
                                >
                                    {card}
                                </p>
                            {/each}
                        </div>
                        <img
                            src={prize.image}
                            alt=""
                            on:mouseenter={() => onHover(i)}
                            on:mouseleave={() => onHoverOut(i)}
                        />
                    </div>
                {/each}
            </div>

            <div
                class="lg:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24 w-full h-full overflow-visible text-white text-5xl"
            >
                {#each prizes as prize, i}
                    <div class="flex flex-col items-center z-20">
                        <div class={`bg-yellow-700 w-[12rem] rounded-xl`}>
                            {#each prize.card as card}
                                <p class="text-xl">{card}</p>
                            {/each}
                        </div>
                        <img src={prize.open} alt="" />
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>
