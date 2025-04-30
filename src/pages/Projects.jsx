const projects = [
  {
    name: "Portfolio Website",
    image: "/portfolio.jpg", // Make sure these are in /public
    feedback: "This portfolio helped me showcase my skills beautifully!",
  },
  {
    name: "E-commerce App",
    image: "/ecommerce.jpg",
    feedback: "A very smooth and scalable shopping experience!",
  },
  {
    name: "Chat Application",
    image: "/chat.jpg",
    feedback: "Real-time chatting was flawless, great work!",
  },
  {
    name: "Blog Platform",
    image: "/blog.jpg",
    feedback: "User-friendly and perfectly crafted blogging tool.",
  },
];

const Reviews = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden px-4 py-2 mx-2 my-2 rounded-2xl shadow-md text-black">
      <h1 className="text-4xl font-bold text-center mb-8">Project  Reviews</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="text-black p-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform text-center"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-400 text-sm italic">{project.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
