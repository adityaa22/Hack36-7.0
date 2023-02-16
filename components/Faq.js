export const Faq = () => {
  return (
    <section>
      <div className="container py-14">
        <div className="">
          <h1 className="text-4xl font-bold tracking-wider text-center uppercase font-harry-font md:text-5xl lg:text-6xl">
            Faqs
          </h1>
          <p className="mt-4 text-center capitalize">
            O wizard! Thee wizard !! What is yond wisdom thee seeketh?
          </p>
        </div>
        <div className="py-4 space-y-4">
          <details className="w-4/5 mx-auto">
            <summary
              itemprop="name"
              className="p-4 bg-gray-600 rounded-md cursor-pointer"
            >
              Do I Need To Pay Any Money To Register ?
            </summary>
            <div class="bg-gray-600 my-4 rounded-md p-4">
              <p>
                No. You do not have to pay anything to anyone to register
                yourself for Hack36
              </p>
            </div>
          </details>
          <details className="w-4/5 mx-auto">
            <summary
              itemprop="name"
              className="p-4 bg-gray-600 rounded-md cursor-pointer"
            >
              Who Can Apply?
            </summary>
            <div class="bg-gray-600 my-4 rounded-md p-4">
              <p>
                Anyone having a knack of solving real life problems can apply
                for the hackathon.
              </p>
            </div>
          </details>
          <details className="w-4/5 mx-auto">
            <summary
              itemprop="name"
              className="p-4 bg-gray-600 rounded-md cursor-pointer"
            >
              What Is The Procedure Of Forming A Team?
            </summary>
            <div class="bg-gray-600 my-4 rounded-md p-4">
              <p>
                After registration, participants are required to form their team
                by logging in
              </p>
            </div>
          </details>
          <details className="w-4/5 mx-auto">
            <summary
              itemprop="name"
              className="p-4 bg-gray-600 rounded-md cursor-pointer"
            >
              What We Can Build?
            </summary>
            <div class="bg-gray-600 my-4 rounded-md p-4">
              <p>
                You can build anything you are passionate about like some web
                app, mobile app or something using hardware.
              </p>
            </div>
          </details>
          <details className="w-4/5 mx-auto">
            <summary
              itemprop="name"
              className="p-4 bg-gray-600 rounded-md cursor-pointer"
            >
              Will there still be goodies and swag?
            </summary>
            <div class="bg-gray-600 my-4 rounded-md p-4">
              <p>Definitely yes!</p>
            </div>
          </details>
          <details className="w-4/5 mx-auto">
            <summary
              itemprop="name"
              className="p-4 bg-gray-600 rounded-md cursor-pointer"
            >
              How Will The Shortlisting Be Done?
            </summary>
            <div class="bg-gray-600 my-4 rounded-md p-4">
              <p>
                Participants will be shortlisted based on their GitHub profile
                and resume.
              </p>
            </div>
          </details>
          <details className="w-4/5 mx-auto">
            <summary
              itemprop="name"
              className="p-4 bg-gray-600 rounded-md cursor-pointer"
            >
              What Can Be The Size Of The Team?
            </summary>
            <div class="bg-gray-600 my-4 rounded-md p-4">
              <p>A team can consist of 2 to 4 members.</p>
            </div>
          </details>
          <details className="w-4/5 mx-auto">
            <summary
              itemprop="name"
              className="p-4 bg-gray-600 rounded-md cursor-pointer"
            >
              What Is The Criteria For Selection Of A Team?
            </summary>
            <div class="bg-gray-600 my-4 rounded-md p-4">
              <p>
                If 75% members of a team have a decent profile, the team will
                get shortlisted. In a rare case where a team is not shortlisted,
                that team can contact us for the re-evaluation of their team.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};
