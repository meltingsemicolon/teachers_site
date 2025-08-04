const Teachers = () => {
  return (
    <section id="teachers" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold text-blue-700 mb-8">Our Teachers</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md w-64">
          <img src="/assets/abhishek.jpeg" alt="Teacher 1" className="w-full rounded-md mb-4" />
          <h3 className="text-xl font-medium">avishek</h3>
          <p className="text-sm text-gray-600">Mathematics</p>
        </div>
        {/* Add more teacher cards as needed */}
      </div>
    </section>
  );
};

export default Teachers;
