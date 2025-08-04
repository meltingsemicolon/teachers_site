

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-semibold text-blue-700 mb-8">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        <img src="/assets/kapil.jpeg" className="rounded-lg shadow-md" alt="Gallery 1" />
        <img src="/assets/abhishek.jpeg" className="rounded-lg shadow-md" alt="Gallery 2" />
        {/* Add more images */}
      </div>
    </section>
  );
};

export default Gallery;
