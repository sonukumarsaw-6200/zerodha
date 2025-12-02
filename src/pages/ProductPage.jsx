import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router";
import Lottie from "lottie-react";
import investmentAnimation from "../lottie/investment.json";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
      <style>
        {`
      @keyframes blob {
        0%, 100% { transform: translate(0, 0) scale(1);}
        33% {transform: translate(30px, -50px) scale(1.1);}
        66% {transform: translate(-20px, 20px) scale(0.9);}
      }
      @keyframes fadeInUp {
        from {opacity: 0;transform: translateY(30px);}
        to {opacity: 1;transform: translateY(0);}
      }
      @keyframes fadeInDown {
        from {opacity: 0;transform: translateY(-30px);}
        to {opacity: 1;transform: translateY(0);}
      }
      @keyframes fadeInLeft {
        from {opacity: 0;transform: translateX(-50px);}
        to {opacity: 1;transform: translateX(0);}
      }
      @keyframes fadeInRight {
        from {opacity: 0;transform: translateX(50px);}
        to {opacity: 1;transform: translateX(0);}
      }
      @keyframes scroll {
        0% {transform: translateY(0);opacity: 0;}
        40% {opacity: 1;}
        100% {transform: translateY(12px);opacity: 0;}
      }
      @keyframes pulse {
        0%, 100% { opacity: 1;}
        50% { opacity: 0.8;}
      }
      @keyframes scaleIn {
        from { opacity: 0; transform: scale(0.9);}
        to { opacity: 1; transform: scale(1);}
      }
      @keyframes textShimmer {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
      }
      @keyframes slideInScale {
        0% {opacity: 0; transform: translateY(-20px) scale(0.95);}
        100% {opacity: 1; transform: translateY(0) scale(1);}
      }

      .animate-blob { animation: blob 7s infinite;}
      .animation-delay-2000 {animation-delay: 2s;}
      .animation-delay-4000 {animation-delay: 4s;}
      .animate-fadeInUp {animation: fadeInUp 1s ease-out;}
      .animate-fadeInDown {animation: fadeInDown 1s ease-out;}
      .animate-fadeInLeft {animation: fadeInLeft 1s ease-out;}
      .animate-fadeInRight {animation: fadeInRight 1s ease-out;}
      .animate-scroll {animation: scroll 2s ease-in-out infinite;}
      .animate-scaleIn {animation: scaleIn 0.8s ease-out;}
      .animate-pulse-slow {animation: pulse 3s ease-in-out infinite;}

      .professional-headline {
        background: linear-gradient(
          90deg,
          #ffffff 0%,
          #e0f2fe 25%,
          #ffffff 50%,
          #bae6fd 75%,
          #ffffff 100%
        );
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: textShimmer 4s linear infinite, slideInScale 1s ease-out;
        filter: drop-shadow(0 4px 20px rgba(255, 255, 255, 0.3));
        font-weight: 800;
        letter-spacing: -0.02em;
        padding: 0.25rem 0;
        line-height: 1.2;
        display: inline-block;
      }
      `}
      </style>

      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side */}
          <div className="text-center lg:text-left animate-fadeInLeft">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 professional-headline">
              Invest in everything
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-pulse-slow">
              Online platform to invest in stocks, derivatives, mutual funds,
              ETFs, bonds, and more.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12 animate-scaleIn">
              <button
                onClick={() => navigate("/auth")}
                className="group bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl flex items-center space-x-2 cursor-pointer"
              >
                <span>Sign up for free</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 flex items-center space-x-2 cursor-pointer">
                <Play className="h-5 w-5" />
                <span>Watch demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105 animate-fadeInUp" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
                <h3 className="text-3xl font-bold text-white mb-2">1+ Crore</h3>
                <p className="text-blue-100">Active Clients</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105 animate-fadeInUp" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
                <h3 className="text-3xl font-bold text-white mb-2">₹3.5+ Lakh Cr</h3>
                <p className="text-blue-100">Client Assets</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105 animate-fadeInUp" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
                <h3 className="text-3xl font-bold text-white mb-2">15+ Years</h3>
                <p className="text-blue-100">Of Trust</p>
              </div>
            </div>
          </div>

          {/* Right side - Lottie animation */}
          <div className="flex items-center justify-center animate-fadeInRight">
            <div className="w-full max-w-lg">
              <Lottie
                animationData={investmentAnimation}
                loop={true}
                autoplay={true}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
}
