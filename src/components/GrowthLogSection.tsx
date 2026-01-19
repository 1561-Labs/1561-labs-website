import { Play } from 'lucide-react';

export function GrowthLogSection() {
  const videos = [
    {
      title: "How we scaled a startup to 10M users",
      duration: "5:30",
      thumbnail: "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY4MzAxMTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Design thinking in action",
      duration: "8:45",
      thumbnail: "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY4MzAxMTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Building products that matter",
      duration: "6:15",
      thumbnail: "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY4MzAxMTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our growth log
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative bg-gray-200 rounded-xl overflow-hidden mb-4 aspect-video">
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="text-gray-900 ml-1" size={24} />
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{video.title}</h3>
              <p className="text-sm text-gray-600">{video.duration}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors font-medium">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
