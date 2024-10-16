export const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sky-900">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              name: "Mc Aveli",
              role: "CTO, Maisomo.",
              quote:
                "NextTab's innovative solutions have revolutionized our operations. Their expertise and dedication are unmatched.",
            },
            {
              name: "Elijah Mwanzia",
              role: "Founder, Pydev",
              quote:
                "Working with NexTab was a game-changer for our startup. They delivered beyond our expectations.",
            },
            {
              name: "Stanley Dzombo",
              role: "Director of IT, Easeride",
              quote:
                "The team at NextTab consistently delivers high-quality, scalable solutions that drive our business forward.",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-sky-50 p-8 rounded-lg shadow-md">
              <p className="text-sky-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-sky-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-sky-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sky-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
