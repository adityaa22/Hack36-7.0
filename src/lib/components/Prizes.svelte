<script lang="ts">
    import heroScroll from "$lib/images/hero-scroll.png";
    import ccLogo from "$lib/images/cc-logo.png";
    import clouds from "$lib/images/clouds.png";
</script>

<div class="">
    <div
        class="text-center h-screen text-black align-middle relative overflow-hidden bg-no-repeat bg-cover prizes__main"
    >
        <img
            src={clouds}
            class="h-[21rem] w-[96rem] z-20 overflow-clip absolute bg-no-repeat bg-cover bg-fixed top-[-10rem]"
            alt=""
        />
        <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
            <div class="w-full mt-[12rem]">
                <p class="text-white text-7xl">Prizes</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 w-full h-full"></div>
        </div>
    </div>
</div>
