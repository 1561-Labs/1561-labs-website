export function StatsSection() {
  const stats = [
    { value: '50+', label: 'Projects' },
    { value: '111+', label: 'Happy Clients' },
    { value: '2', label: 'Offices' },
    { value: '20M+', label: 'Reach' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Where ideas become inevitable impact
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We transform ambitious visions into tangible results through strategic thinking, innovative design, and flawless execution.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
