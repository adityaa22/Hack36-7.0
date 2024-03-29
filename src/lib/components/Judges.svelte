<script lang="ts">
    import themeBg from "$lib/images/theme-bg.webp";
</script>

<div id="judges" class="flex flex-col items-center justify-center text-black bg-orange-300 pb-24">
    <h1 class="text-6xl" data-aos="fade-up">Judges</h1>
    <h1 class="mb-12 text-4xl" data-aos="fade-up">Announcing soon ...</h1>
    <div class="mt-16 items-center justify-center flex flex-col w-full" data-aos="fade-up">
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
    </div>
</div>
