const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "We create beautiful and functional websites and web applications tailored to your needs.",
      icon: "code",
    },
    {
      title: "Graphic Design",
      description:
        "Our design team crafts stunning visuals that elevate your brand identity.",
      icon: "palette",
    },
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "We help your website rank higher in search results, driving organic traffic.",
      icon: "search",
    },
    {
      title: "Content Marketing",
      description:
        "We create engaging content that attracts and retains your target audience.",
      icon: "newspaper",
    },
    {
      title: "Social Media Marketing",
      description:
        "We manage your social media presence to connect with your audience and grow your brand.",
      icon: "users",
    },
    {
      title: "E-commerce Development",
      description:
        "We build user-friendly online stores that drive sales and revenue.",
      icon: "shopping-cart",
    },
  ];

  return (
    <section className="services bg-black py-16 mb-6">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">
          Services We Provide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="service p-6 rounded-lg shadow-md bg-white"
            >
              <h3 className="text-lg font-bold mb-2 text-black">
                {service.title}
              </h3>
              <p className="text-black">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
