const services = [
  {
    title: "Web Development",
    description: "We build responsive and high-performing websites.",
    icon: "🌐",
  },
  {
    title: "App Development",
    description: "Custom mobile applications for Android and iOS.",
    icon: "📱",
  },
  {
    title: "Software Testing",
    description: "Ensuring bug-free performance and smooth operations.",
    icon: "🧪",
  },
  {
    title: "Digital Marketing",
    description: "Grow your brand with SEO, SEM, and social strategies.",
    icon: "📈",
  },
];

const Services = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden px-4 py-2 mx-2 my-2 rounded-2xl shadow-md  text-black">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="text-black p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-700 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
