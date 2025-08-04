const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold text-blue-700 mb-4">Contact Us</h2>
      <p className="mb-6 text-gray-600">Reach out via email or phone for more information.</p>
      <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
        <textarea placeholder="Your Message" className="w-full border p-2 rounded" rows="4"></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
      </form>
    </section>
  );
};

export default Contact;
