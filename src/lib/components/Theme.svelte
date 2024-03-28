<script lang="ts">
    import clouds from "$lib/images/clouds.png";
    import themeBg from "$lib/images/theme-bg.png";
</script>

<div>
    <div
        class="text-center h-[80rem] text-black align-middle relative overflow-hidden bg-no-repeat bg-cover"
    >
        <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
            <img
                src={clouds}
                class="h-[21rem] w-full z-20 overflow-clip absolute bg-no-repeat bg-cover bg-fixed bottom-[-11rem]"
                alt=""
            />
            <h1 class="mb-12 text-4xl font-bold tracking-tight sm:text-6xl">Themes</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
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
    </div>
</div>
