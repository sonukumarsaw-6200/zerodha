import { BarChart3, LineChart, Wallet, Bot, TrendingUp, Shield, Zap, Building2, UserCheck, Calculator } from 'lucide-react';

function ProductCard({ icon, title, description, features, bgColor, label }) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className={`${bgColor} p-8 text-white relative`}>
        {label && (
          <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
            {label}
          </span>
        )}
        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-white/90">{description}</p>
      </div>
      <div className="p-8">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">•</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Products() {
  const products = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Kite',
      description: 'Our flagship trading platform',
      label: 'Investing',
      features: [
        'Advanced charting with 100+ indicators',
        'Market depth and order book',
        'Real-time streaming quotes',
        'Customizable workspace',
      ],
      bgColor: 'bg-gradient-to-br from-orange-500 to-red-600',
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: 'Console',
      description: 'Portfolio management suite',
      label: 'Backoffice',
      features: [
        'Comprehensive portfolio analytics',
        'P&L statements and reports',
        'Tax insights and optimization',
        'Performance tracking',
      ],
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-700',
    },
    {
      icon: <Wallet className="h-8 w-8" />,
      title: 'Coin',
      description: 'Direct mutual fund platform',
      label: 'Mutual funds',
      features: [
        'Zero commission on mutual funds',
        'Direct plans with better returns',
        'SIP automation',
        'Fund recommendations',
      ],
      bgColor: 'bg-gradient-to-br from-gray-700 to-gray-900',
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: 'Kite Connect API',
      description: 'Build your trading apps',
      features: [
        'REST and WebSocket APIs',
        'Historical market data',
        'Algo trading capabilities',
        'Developer documentation',
      ],
      bgColor: 'bg-gradient-to-br from-orange-600 to-orange-700',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Ditto',
      description: 'Insurance advisory platform',
      label: 'Insurance',
      features: [
        'Personalized insurance recommendations',
        'Term and health insurance',
        'No commission model',
        'Expert guidance',
      ],
      bgColor: 'bg-gradient-to-br from-gray-600 to-gray-800',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Smallcase',
      description: 'Thematic investment platform',
      features: [
        'Ready-made equity portfolios',
        'Rebalancing automation',
        'Expert curated strategies',
        'Low minimum investment',
      ],
      bgColor: 'bg-gradient-to-br from-blue-400 to-blue-600',
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: 'Sensibull',
      description: 'Options trading platform',
      label: 'Options',
      features: [
        'Options strategy builder',
        'Greeks and analytics',
        'Backtesting tools',
        'Options chain analysis',
      ],
      bgColor: 'bg-gradient-to-br from-red-500 to-orange-600',
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: 'Tijori',
      description: 'Financial planning tool',
      features: [
        'Goal-based planning',
        'Net worth tracking',
        'Budget management',
        'Investment insights',
      ],
      bgColor: 'bg-gradient-to-br from-gray-700 to-gray-900',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Streak',
      description: 'Algo trading made easy',
      features: [
        'Create algos without coding',
        'Backtest strategies',
        'Live deployment',
        'Strategy marketplace',
      ],
      bgColor: 'bg-gradient-to-br from-blue-600 to-indigo-700',
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
            Products
          </h1>
          <p className="text-xl text-blue-100 mb-8 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
            Technology-first platforms designed for every type of investor
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 animate-[fadeInUp_0.8s_ease-out_0.4s_both] hover:scale-105 hover:bg-white/20 transition-all duration-300">
              <Building2 className="h-10 w-10 mx-auto mb-3 animate-[bounce_1s_ease-in-out_0.6s]" />
              <h3 className="text-xl font-bold mb-2">Powerful platforms</h3>
              <p className="text-blue-100 text-sm">
                Built for speed, reliability, and ease of use.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 animate-[fadeInUp_0.8s_ease-out_0.6s_both] hover:scale-105 hover:bg-white/20 transition-all duration-300">
              <Shield className="h-10 w-10 mx-auto mb-3 animate-[bounce_1s_ease-in-out_0.8s]" />
              <h3 className="text-xl font-bold mb-2">Secure & reliable</h3>
              <p className="text-blue-100 text-sm">
                Bank-grade security with 99.9% uptime guarantee.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 animate-[fadeInUp_0.8s_ease-out_0.8s_both] hover:scale-105 hover:bg-white/20 transition-all duration-300">
              <Zap className="h-10 w-10 mx-auto mb-3 animate-[bounce_1s_ease-in-out_1s]" />
              <h3 className="text-xl font-bold mb-2">Lightning fast</h3>
              <p className="text-blue-100 text-sm">
                Execute orders in milliseconds with cutting-edge tech.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complete suite of powerful tools designed for every type of trader and investor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
