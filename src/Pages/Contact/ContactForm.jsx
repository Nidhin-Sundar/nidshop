const ContactForm = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ml-40">
      {/* Form Section */}
      <div>
        <h3
          className="text-3xl 
        text-gray-500 font-semibold mb-6"
        >
          Drop Us a Line
        </h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <input
              type="text"
              placeholder="First Name"
              className="border-gray-300 border p-3 rounded-md w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border-gray-300 border p-3 rounded-md w-full"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <input
              type="tel"
              placeholder="Your Phone"
              className="border-gray-300 border p-3 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border-gray-300 border p-3 rounded-md w-full"
            />
          </div>
          <textarea
            placeholder="Message"
            className="border-gray-300 border p-3 rounded-md w-full"
            rows={5}
          />
          <button
            type="submit"
            className="px-6 py-3 bg-green-500 text-white rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Image Section */}

      <div className="hidden lg:block">
        <img
          src="https://images.pexels.com/photos/7709287/pexels-photo-7709287.jpeg?auto=compress&cs=tinysrgb&w=700&h=400"
          alt="contact"
          className="rounded-md shadow-lg"
        />
      </div>
    </div>
  );
};

export default ContactForm;
