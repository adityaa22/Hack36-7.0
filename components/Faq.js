import data from "../data/faqData";
export const Faq = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="800"
    >
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
          {data.map((faq, idx) => {
            return (
              <details
                className="w-4/5 mx-auto"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="800"
                key={idx}
              >
                <summary
                  itemprop="name"
                  className="p-4 bg-gray-600 rounded-md cursor-pointer"
                >
                  {faq.question}
                </summary>
                <div className="p-4 my-4 bg-gray-600 rounded-md">
                  <p>{faq.answer}</p>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
};
