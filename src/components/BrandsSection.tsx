export function BrandsSection() {
  const brands = [
    { name: 'Rupay', logo: '💳' },
    { name: 'Paytm', logo: '💰' },
    { name: 'Swiggy', logo: '🍔' },
    { name: 'Zomato', logo: '🍕' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Proudly more than (those who know)
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Trusted by leading brands across industries
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {brands.map((brand, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="text-4xl mb-2">{brand.logo}</div>
              <div className="text-lg font-semibold text-gray-900">{brand.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
