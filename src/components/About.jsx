import React from 'react';
// import logo from '../assets/sonu.jpg';
import logo from '../assets/sonu.jpg'
import { Users, Award, TrendingUp } from 'lucide-react';

export default function About() {
  const leaders = [
    {
      name: "Nikhil Kamath",
      role: "Co-founder & CFO",
      img: "https://tse3.mm.bing.net/th/id/OIP.bwT0HWTmH6w013KM05v7hwHaFj?pid=Api&P=0&h=180",
    },
    {
      name: "Dr. Kailash Nadh",
      role: "CTO",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Venu Madhav",
      role: "COO",
      img: "https://media.istockphoto.com/id/1401481821/photo/handsome-young-man-in-working-on-laptop-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=E1hL7xB4vxJYv4vX_OgkqkDu2Y_8AdQYV-XL4PNsbi4=",
    },
    {
      name: "Hanan Delvi",
      role: "CCO",
      img: "https://plus.unsplash.com/premium_photo-1658506802808-172790d1d76c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    },
    {
      name: "Seema Patil",
      role: "Director",
      img: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Karthik Rangappa",
      role: "Chief of Education",
      img: "https://images.unsplash.com/photo-1734434570358-21badf4ba1c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    },
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
            About Us
          </h1>
          <p className="text-xl text-blue-100 mb-8 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
            Built by traders, for traders - Transforming the Indian investment landscape
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 animate-[fadeInUp_0.8s_ease-out_0.4s_both] hover:scale-105 hover:bg-white/20 transition-all duration-300">
              <Users className="h-10 w-10 mx-auto mb-3 animate-[bounce_1s_ease-in-out_0.6s]" />
              <h3 className="text-xl font-bold mb-2">1.6+ Crore clients</h3>
              <p className="text-blue-100 text-sm">
                India's largest retail stockbroker by active clients.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 animate-[fadeInUp_0.8s_ease-out_0.6s_both] hover:scale-105 hover:bg-white/20 transition-all duration-300">
              <Award className="h-10 w-10 mx-auto mb-3 animate-[bounce_1s_ease-in-out_0.8s]" />
              <h3 className="text-xl font-bold mb-2">Pioneering model</h3>
              <p className="text-blue-100 text-sm">
                First discount broker to disrupt the industry in 2010.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 animate-[fadeInUp_0.8s_ease-out_0.8s_both] hover:scale-105 hover:bg-white/20 transition-all duration-300">
              <TrendingUp className="h-10 w-10 mx-auto mb-3 animate-[bounce_1s_ease-in-out_1s]" />
              <h3 className="text-xl font-bold mb-2">Technology driven</h3>
              <p className="text-blue-100 text-sm">
                In-house tech stack powering millions of trades daily.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          {/* Top heading */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
              We pioneered the discount broking model in India.
              <br />
              Now, we are breaking ground with our technology.
            </h2>
          </div>

          <hr className="border-gray-200 mb-10" />

          {/* Main description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700 text-md leading-relaxed mb-14">
            <p>
              We kick-started operations on the 15th of August, 2010 with the goal
              of breaking all barriers that traders and investors face in India.
              <br /><br />
              Today, our pricing models and in-house technology have made us the
              biggest stock broker in India.
              <br /><br />
              Over 1.7+ crore clients place billions of orders every year.
            </p>

            <p>
              We run several open online educational initiatives.
              <br /><br />
              <span className="text-blue-600 font-medium cursor-pointer hover:underline">Rainmatter</span>, our
              fintech fund, has invested in many startups.
              <br /><br />
              Follow our <span className="text-blue-600 cursor-pointer hover:underline">blog</span> or see what
              the media is <span className="text-blue-600 cursor-pointer hover:underline">saying</span>.
            </p>
          </div>

          {/* People */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-gray-900">People</h2>
          </div>

          {/* Founder block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
            <div className="flex justify-center">
              <img
                src={logo}
                alt="Rohiteswer Thakur"
                className="w-70 h-70 object-cover rounded-full shadow-xl border-4 border-white"
              />
            </div>

            <div className="text-gray-700 text-sm leading-relaxed">
              <h3 className="text-lg font-semibold mb-1">Sonu Kumar saw</h3>
              <p className="text-gray-500 text-xs mb-3">Founder, CEO</p>

              <p>
                Nithin founded Zerodha in 2010 to overcome the hurdles he faced as a trader.
              </p>
              <br />
              <p>He is a member of SEBI advisory committees.</p>
              <br />
              <p>Playing basketball is his zen.</p>
            </div>
          </div>

          {/* Leadership grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-14 gap-x-10 text-center">
            {leaders.map((person, idx) => (
              <div key={idx} className="group cursor-pointer">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-40 h-40 object-cover rounded-full mx-auto mb-3 shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-base font-semibold text-gray-900">{person.name}</h3>
                <p className="text-gray-500 text-xs mb-1">{person.role}</p>
                <p className="text-blue-600 text-xs hover:underline">Bio ▼</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
