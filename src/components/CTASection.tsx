import { ImageWithFallback } from './figma/ImageWithFallback';

export function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to build something real
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's turn your vision into reality
          </p>
          <button className="px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors font-medium">
            Let's Talk
          </button>
        </div>

        <div className="flex justify-center mt-12">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1675618007903-2893a538c89c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodGhvdXNlJTIwYnVpbGRpbmclMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzY4MzExMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Lighthouse illustration"
            className="w-full max-w-md rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
