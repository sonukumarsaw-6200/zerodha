import { useState } from "react";
import { Plus, ChevronDown, MessageCircle, HelpCircle, FileText } from "lucide-react";

export default function Support() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { title: "Account Opening" },
    { title: "Your Zerodha Account" },
    { title: "Kite" },
    { title: "Funds" },
    { title: "Console" },
    { title: "Coin" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes textShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes slideInScale {
          0% {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
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
      `}</style>

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-40 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 professional-headline">
            Support
          </h1>
          <p className="text-xl text-blue-100 mb-8 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
            Search for answers or browse help topics to create a ticket
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 animate-[fadeInUp_0.8s_ease-out_0.4s_both] hover:scale-105 hover:bg-white/20 transition-all duration-300">
              <MessageCircle className="h-10 w-10 mx-auto mb-3 animate-[bounce_1s_ease-in-out_0.6s]" />
              <h3 className="text-xl font-bold mb-2">Track support ticket</h3>
              <p className="text-blue-100 text-sm">
                Track and manage your open support tickets in real-time.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 animate-[fadeInUp_0.8s_ease-out_0.6s_both] hover:scale-105 hover:bg-white/20 transition-all duration-300">
              <HelpCircle className="h-10 w-10 mx-auto mb-3 animate-[bounce_1s_ease-in-out_0.8s]" />
              <h3 className="text-xl font-bold mb-2">Browse FAQs</h3>
              <p className="text-blue-100 text-sm">
                Find instant answers to common questions and issues.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 animate-[fadeInUp_0.8s_ease-out_0.8s_both] hover:scale-105 hover:bg-white/20 transition-all duration-300">
              <FileText className="h-10 w-10 mx-auto mb-3 animate-[bounce_1s_ease-in-out_1s]" />
              <h3 className="text-xl font-bold mb-2">Helpful resources</h3>
              <p className="text-blue-100 text-sm">
                Access guides, tutorials, and documentation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Support Content */}
      <section className="bg-gray-50 pb-20 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header + My Tickets */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900">Support Portal</h2>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md">
              My tickets
            </button>
          </div>

          {/* Search Bar */}
          <div className="bg-white shadow-sm p-5 rounded-xl border border-gray-200 mb-10">
            <input
              type="text"
              placeholder="Eg: How do I open my account, How do I activate F&O..."
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left FAQ Section */}
            <div className="lg:col-span-2 space-y-5">
              {faqs.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-5 border border-gray-200 rounded-xl cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <Plus className="text-blue-600 h-5 w-5" />
                      <h3 className="text-gray-900 font-semibold">
                        {item.title}
                      </h3>
                    </div>

                    <ChevronDown
                      className={`h-5 w-5 text-gray-600 transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {openIndex === index && (
                    <div className="mt-4 text-gray-600 pl-8">
                      <p className="text-sm">
                        This is placeholder content. You can add real FAQs or
                        dropdown content here.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Section */}
            <div className="space-y-6">
              {/* Important Updates */}
              <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Important Updates
                </h4>
                <ul className="list-disc list-inside text-blue-700 space-y-2 text-sm">
                  <li className="cursor-pointer hover:underline">
                    Current Takeovers and Delisting – November 2025
                  </li>
                  <li className="cursor-pointer hover:underline">
                    Rights Entitlements listing in November 2025
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Quick links
                </h4>

                <ul className="space-y-3 text-blue-700 text-sm">
                  <li className="cursor-pointer hover:underline">
                    1. Track account opening
                  </li>
                  <li className="cursor-pointer hover:underline">
                    2. Track segment activation
                  </li>
                  <li className="cursor-pointer hover:underline">
                    3. Intraday margins
                  </li>
                  <li className="cursor-pointer hover:underline">
                    4. Kite user manual
                  </li>
                  <li className="cursor-pointer hover:underline">
                    5. Learn how to create a ticket
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
