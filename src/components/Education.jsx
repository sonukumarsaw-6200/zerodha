import { BookOpen, MessageCircle, Video, FileText } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Free and open market education
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Learn from comprehensive resources designed to help you become a better trader and investor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
            <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Varsity</h3>
            <p className="text-blue-100 mb-4">
              Comprehensive modules on trading and markets
            </p>
            <button className="text-white font-medium hover:underline">
              Learn more →
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
            <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <MessageCircle className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">TradingQ&A</h3>
            <p className="text-blue-100 mb-4">
              Community forum for traders to discuss and learn
            </p>
            <button className="text-white font-medium hover:underline">
              Join community →
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
            <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <Video className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Webinars</h3>
            <p className="text-blue-100 mb-4">
              Live sessions with market experts and traders
            </p>
            <button className="text-white font-medium hover:underline">
              Watch now →
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
            <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <FileText className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Market Reports</h3>
            <p className="text-blue-100 mb-4">
              Daily market insights and analysis reports
            </p>
            <button className="text-white font-medium hover:underline">
              Read reports →
            </button>
          </div>
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center border border-white/20">
          <h3 className="text-3xl font-bold mb-4">Ready to get started?</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join over 1 crore investors and traders who trust Zerodha for their investment journey
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl cursor-pointer">
            Open an account - it's free!
          </button>
        </div>
      </div>
    </section>
  );
}
