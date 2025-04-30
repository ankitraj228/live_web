import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-black px-4 py-2 mx-2 my-2 rounded-2xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo and Brand */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/mm.png" alt="Logo" className="w-14 h-14 mb-2" />
          <h2 className="text-xl font-bold">Mike</h2>
          <p className="text-sm mt-2 text-gray-400">Let&#39;s code the future.</p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="hover:text-pink-500" /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="hover:text-blue-500" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="hover:text-cyan-400" /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube className="hover:text-red-600" /></a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-center md:text-left">Contact Us</h3>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 rounded-md  border border-gray-600 text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 rounded-md  border border-gray-600 text-black"
            />
            <textarea
              placeholder="Message"
              className="w-full px-3 py-2 rounded-md  border border-gray-600 text-black h-24 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-black hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-md w-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Mike. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
