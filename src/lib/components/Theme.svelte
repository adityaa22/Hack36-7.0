<script lang="ts">
    import caveDown from "$lib/images/cave-down.webp";
    import themeBg from "$lib/images/theme-bg.webp";
</script>

<div id="theme">
    <div class="text-center h-full text-black align-middle overflow-hidden bg-no-repeat bg-cover">
        <div class="relative top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
            <div
                class="h-[21rem] w-full z-10 overflow-clip absolute bg-no-repeat bg-cover top-[-11rem] clouds bg-center"
            />
            <div data-aos="fade-up">
                <h1 class="mb-12 mt-32 md:mt-44 z-20 text-6xl">Themes</h1>
                <h1 class="mb-12 text-4xl">Announcing soon ...</h1>
                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center blur-md"
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
            </div>
            <img
                src={caveDown}
                class="h-[21rem] w-full z-20 overflow-clip bg-no-repeat bg-cover bg-fixed"
                alt=""
            />
        </div>
    </div>
</div>
