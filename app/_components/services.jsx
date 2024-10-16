import { ChevronRight, Code, Server, Smartphone } from "lucide-react";

export const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sky-900">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: Code,
              title: "Web Development",
              description:
                "Crafting responsive and scalable web applications tailored to your business needs.",
            },
            {
              icon: Server,
              title: "Cloud Solutions",
              description:
                "Leveraging cloud technologies to build robust, secure, and scalable infrastructures.",
            },
            {
              icon: Smartphone,
              title: "Mobile Development",
              description:
                "Creating intuitive and powerful mobile experiences for iOS and Android platforms.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-sky-50 p-8 flex items-center flex-col text-center rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <service.icon className="w-16 h-16 text-sky-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-sky-900">
                {service.title}
              </h3>
              <p className="text-sky-700 mb-6">{service.description}</p>
              <a
                href="#"
                className="text-sky-500 hover:text-sky-600 inline-flex items-center transition-colors duration-200"
              >
                Learn More <ChevronRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
