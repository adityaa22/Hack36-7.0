<script lang="ts">
    import ccLogo from "$lib/images/cc-logo.webp";
    import heroScroll from "$lib/images/hero-scroll.webp";

    import { browser } from "$app/environment";
    import { onMount } from "svelte";

    onMount(() => {
        if (browser) {
            const script = document.createElement("script");
            script.src = "https://apply.devfolio.co/v2/sdk.js";
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            };
        }
    });
</script>

<div class="" data-aos="fade-in">
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
            <div class="grid grid-cols-1 md:grid-cols-2 w-full h-full">
                <div />
                <div>
                    <div class="flex flex-col justify-center items-center h-full overflow-clip">
                        <img
                            src={heroScroll}
                            class="relative bg-cover h-[50rem] w-[30rem]"
                            alt=""
                        />
                        <div class="absolute text-black flex flex-col items-center">
                            <img src={ccLogo} class="h-20" alt="" />
                            <p class="text-2xl font-bold">MNNIT Computer Coding Club</p>

                            <div class="flex flex-col">
                                <p class="text-xl font-bold">presents</p>
                                <p class="text-7xl font-bold">Hack36 7.0</p>
                                <p class="text-xl font-bold">Caffeinate. Collaborate. Celebrate.</p>

                                <p class="text-2xl mt-4">April 19-21, 2024</p>
                                <div class="w-full mb-2 flex items-center justify-center mt-2">
                                    <div
                                        class="apply-button"
                                        data-hackathon-slug="hack36-2024"
                                        data-button-theme="light"
                                        style="height: 44px;"
                                    />
                                </div>

                                <a
                                    href="https://discord.gg/4bsWrGrcyJ"
                                    target="_blank"
                                    class="hero-btn p-2 mx-8 md:mx-0 rounded-lg text-xl flex gap-x-4 justify-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        class="inline bi bi-discord w-6 h-6"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
                                        />
                                    </svg>
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
