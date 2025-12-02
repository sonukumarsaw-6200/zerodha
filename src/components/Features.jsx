import { Smartphone, PieChart, BookOpen, Zap, Lock, HeadphonesIcon } from 'lucide-react';

function FeatureCard({ icon, title, description }) {
  return (
    <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default function Features() {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8 text-white" />,
      title: 'Modern Trading Platform',
      description:
        'Trade on web and mobile with our advanced, lightning-fast trading platforms designed for both beginners and professionals.',
    },
    {
      icon: <PieChart className="h-8 w-8 text-white" />,
      title: 'Portfolio Analytics',
      description:
        'Get detailed insights into your portfolio performance with real-time analytics, reports, and visualization tools.',
    },
    {
      icon: <BookOpen className="h-8 w-8 text-white" />,
      title: 'Free Education',
      description:
        'Access comprehensive educational content, market analysis, and trading strategies through Varsity and webinars.',
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: 'Lightning Fast',
      description:
        'Execute trades in milliseconds with our high-performance infrastructure and direct market access.',
    },
    {
      icon: <Lock className="h-8 w-8 text-white" />,
      title: 'Bank-Level Security',
      description:
        'Your data and investments are protected with enterprise-grade security, encryption, and compliance.',
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-white" />,
      title: '24/7 Support',
      description:
        'Get help anytime with our dedicated support team, comprehensive FAQs, and active community forums.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why choose Zerodha?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience seamless trading with cutting-edge technology, transparent pricing, and exceptional support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
