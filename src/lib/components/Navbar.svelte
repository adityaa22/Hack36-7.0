<script lang="ts">
    import hack36 from "$lib/images/hack36.webp";

    let showMobileNav = false;

    let navLinks = [
        {
            name: "About",
            href: "#about",
        },
        {
            name: "Themes",
            href: "#theme",
        },
        {
            name: "Prizes",
            href: "#prizes",
        },
        {
            name: "Sponsors",
            href: "#sponsors",
        },
        {
            name: "Judges",
            href: "#judges",
        },
        {
            name: "FAQ",
            href: "#faq",
        },
    ];
</script>

<nav class="bg-zinc-50/60 shadow-zinc-50 fixed w-full z-30 top-0 start-0 border-b font-inter">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="." class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={hack36} class="h-10 ml-4" alt="Hack36 logo" />
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-sticky"
                aria-expanded="false"
                on:click={() => (showMobileNav = !showMobileNav)}
            >
                <span class="sr-only">Open main menu</span>
                <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                >
                    <path
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15"
                    />
                </svg>
            </button>
        </div>
        <div
            class={`items-center justify-between w-full md:flex md:w-auto md:order-1 text-sm ${showMobileNav ? "" : "hidden"}`}
            id="navbar-sticky"
        >
            <ul
                class="flex flex-col p-4 md:p-0 mt-4 font-medium rounded bg-white md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-"
            >
                {#each navLinks as navLink}
                    <li>
                        <a
                            href={navLink.href}
                            on:click={() => (showMobileNav = false)}
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:underline md:p-0"
                            >{navLink.name}</a
                        >
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</nav>
