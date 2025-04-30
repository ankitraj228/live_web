import { FaInstagram, FaGithub } from "react-icons/fa";

const developers = [
  {
    name: "Atul Kumar",
    image: "/atul.jpg", // Replace with real image
    role: "Project Manager",
    description: "Passionate about technology and innovation.",
    instagram: "https://www.instagram.com/atulshivaan/",
    github: "",
 
  },
  {
    name: "Amaan",
    image: "/aman2.png",
    role: "Backend Engineer",
    description: "Loves building scalable server-side solutions.",
    instagram: "https://www.instagram.com/amaan._.alvi_/",
    github: "https://github.com/bob",
  },
  {
    name: "Ankit Raj",
    image: "/ankit.png", // Replace with real image
    role: "Frontend Engineer",
    description: "Designing elegant interfaces that delight users and enhance usability.",
    instagram: "https://www.instagram.com/ankit_jaiswal_228?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    github: "https://github.com/bob",
  },
  {
    name: "Pathik Sharma",
    image: "/pathik.png", // Replace with real image
    role: "Data Engineer",
    description: "Transforming data into actionable insights.",
    instagram: "https://www.instagram.com/pathiksharmaa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    github: "https://github.com/bob",
  },
  {
    name: "Anay Dhayani",
    image: "/anay.png", // Replace with real image
    role: "UI/UX Designer",
    description: "Crafting intuitive and engaging user experiences.",
    instagram: "https://www.instagram.com/anay_dhyani?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    github: "https://github.com/bob",
  },
  {
    name: "Shivam Kumar",
    image: "/shivam.png", // Replace with real image
    role: "QA Engineer",
    description: "Ensuring the quality and performance of our products.",
    instagram: "https://www.instagram.com/shivampanchal73?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    github: "https://github.com/bob",
  },
  // Add more developers as needed
];

const About = () => {
  return (
    <div className="text-black px-4 py-2 mx-2 my-2 rounded-2xl shadow-md relative overflow-hidden h-[calc(100vh-2rem)]">
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full bg-cover bg-center filter blur-[1px] brightness-60 rounded-2xl bg-[url('/your-background.jpg')]" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-black px-4 overflow-y-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          We are a forward-thinking tech company driven by innovation, building amazing things for the future.
        </p>

        <div className="grid grid-cols-1 border-0 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {developers.map((dev, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
              <img src={dev.image} alt={dev.name} className="w-24 h-24 rounded-full mb-4 object-cover" />
              <h3 className="text-xl font-semibold">{dev.name}</h3>
              <p className="text-sm text-gray-600">{dev.role}</p>
              <p className="text-sm mt-2">{dev.description}</p>
              <div className="flex space-x-4 mt-3">
                <a href={dev.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-pink-500 text-xl hover:text-pink-600" />
                </a>
                <a href={dev.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-gray-800 text-xl hover:text-black" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
