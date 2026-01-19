import groupImage from '../assets/Group 789.png';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-green-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Ideas engineered into outcomes
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are a team of designers, developers and strategists who build digital products that solve real-world problems and create meaningful impact for businesses and users alike.
            </p>
            <button className="px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors font-medium">
              Get Started
            </button>
          </div>

          {/* Illustration */}
          <div className="flex justify-center">
            <img
              src={groupImage}
              alt="Digital innovation illustration"
              className="w-full max-w-md rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
