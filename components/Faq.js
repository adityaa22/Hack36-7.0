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
              A question about something
            </summary>
            <div class="bg-gray-600 my-4 rounded-md p-4">
              <p>The answer about this has some points to make:</p>
            </div>
          </details>
          <details className="w-4/5 mx-auto">
            <summary
              itemprop="name"
              className="p-4 bg-gray-600 rounded-md cursor-pointer"
            >
              A question about something
            </summary>
            <div class="bg-gray-600 my-4 rounded-md p-4">
              <p>The answer about this has some points to make:</p>
            </div>
          </details>
          <details className="w-4/5 mx-auto">
            <summary
              itemprop="name"
              className="p-4 bg-gray-600 rounded-md cursor-pointer"
            >
              A question about something
            </summary>
            <div class="bg-gray-600 my-4 rounded-md p-4">
              <p>The answer about this has some points to make:</p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};
