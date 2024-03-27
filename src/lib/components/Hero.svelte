<script lang="ts">
    import heroScroll from "$lib/images/hero-scroll.png";
    import ccLogo from "$lib/images/cc-logo.png";
</script>

<div class="">
    <!-- <div class="">
        <img src={heroPhoneImage} class="h-full block md:hidden w-full" alt="" />
        <img src={heroTabletImage} class="h-full hidden md:block lg:hidden w-full" alt="" />
        <img src={heroMainImage} class="h-full hidden lg:block w-full" alt="" />
    </div> -->

    <div
        class="text-center h-screen text-white align-middle relative overflow-hidden bg-no-repeat bg-cover home__main"
    >
        <div
            class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed home__img-div"
        >
            <div class="grid grid-cols-2 w-full h-full">
                <div />
                <div>
                    <div class="flex flex-col justify-center items-center h-full">
                        <img src={heroScroll} class="relative" alt="" />
                        <div class="absolute text-black">
                            <div class="flex flex-row items-center">
                                <img src={ccLogo} class="h-20" alt="" />
                                <h1 class="text-2xl font-bold">MNNIT Computer Coding Club</h1>
                            </div>

                            <div class="flex flex-col">
                                <h1 class="text-xl font-bold">presents</h1>
                                <h1 class="text-7xl font-bold">Hack36 7.0</h1>
                                <h1 class="text-xl font-bold">
                                    Caffeinate. Collaborate. Celebrate.
                                </h1>

                                <a href="." class="hero-btn p-2 mt-6 mb-2 rounded-lg text-xl">
                                    Register Now
                                </a>

                                <a href="." class="hero-btn p-2 rounded-lg text-xl">
                                    Join Discord Server
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
