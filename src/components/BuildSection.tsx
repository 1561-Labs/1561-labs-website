import { Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BuildSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          How we build what matters
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* 1561 Design Lab */}
          <div className="bg-black rounded-2xl p-6 text-white flex flex-col">
            <div className="mb-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY4MzAxMTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="1561 Design Lab"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">1561 Design Lab</h3>
            <p className="text-gray-300 text-sm">
              Where creativity meets functionality. We craft digital experiences that captivate and convert.
            </p>
          </div>

          {/* 1561 Media Lab */}
          <div className="bg-black rounded-2xl p-6 text-white flex flex-col">
            <div className="mb-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY4MzAxMTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="1561 Media Lab"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">1561 Media Lab</h3>
            <p className="text-gray-300 text-sm">
              Telling stories that resonate. We create compelling content that engages and inspires.
            </p>
          </div>

          {/* 8 Ingenious Verticals */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
              <Zap className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">8 ingenious verticals</h3>
            <p className="text-gray-600 text-sm">
              Specialized expertise across multiple domains to deliver comprehensive solutions.
            </p>
            <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
