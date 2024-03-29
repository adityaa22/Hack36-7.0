<script lang="ts">
    import * as Accordion from "$lib/components/ui/accordion";

    let faq = [
        {
            question: "Do I Need To Pay Any Money To Register ?",
            answer: "No. You do not have to pay anything to anyone to register yourself for Hack36",
        },
        {
            question: "Who Can Apply?",
            answer: "Anyone(must be a college student) having a knack of solving real life problems can apply for the hackathon.",
        },
        {
            question: "What Is The Procedure Of Forming A Team?",
            answer: "Firstly make sure all teammates have registered on Devfolio. You can create your team from the devfolio dashboard.",
        },
        {
            question: "What We Can Build?",
            answer: "You can build anything you are passionate about like some web app, mobile app or something using hardware.",
        },
        {
            question: "Will there be goodies and swag?",
            answer: "Definitely yes!",
        },
        {
            question: "How Will The Shortlisting Be Done?",
            answer: "Participants will be shortlisted based on their GitHub profile and resume.",
        },
        {
            question: "What Can Be The Size Of The Team?",
            answer: "A team can consist of 2 to 4 members.",
        },
        {
            question: "What Is The Criteria For Selection Of A Team?",
            answer: "If 75% members of a team have a decent profile, the team will get shortlisted. In a rare case where a team is not shortlisted, that team can contact us for the re-evaluation of their team.",
        },
    ];
</script>

<div id="faq" class="flex flex-col items-center justify-center text-black bg-orange-300 pb-24">
    <h1 class="text-6xl" data-aos="fade-up">FAQs</h1>
    <div class="mt-16 items-center justify-center flex flex-col w-full">
        <div class="flex flex-col w-full max-w-xl font-inter" data-aos="fade-up">
            {#each faq as { question, answer }}
                <Accordion.Root class="mx-6">
                    <Accordion.Item value={question}>
                        <Accordion.Trigger class="text-lg text-start">{question}</Accordion.Trigger>
                        <Accordion.Content class="text-lg text-start">{answer}</Accordion.Content>
                    </Accordion.Item>
                </Accordion.Root>
            {/each}
        </div>
    </div>
</div>
