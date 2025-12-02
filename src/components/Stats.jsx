import { useEffect, useState } from 'react';
import { TrendingUp, Users, Shield, Award } from 'lucide-react';

function StatItem({ icon, value, label, delay }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`flex flex-col items-center p-6 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="bg-blue-100 p-4 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
        {icon}
      </div>
      <h3 className="text-3xl font-bold text-gray-900 mb-2">{value}</h3>
      <p className="text-gray-600 text-center">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            India's largest broker
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by millions of traders and investors
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem
            icon={<Users className="h-8 w-8 text-blue-600" />}
            value="1+ Cr"
            label="Active clients"
            delay={100}
          />
          <StatItem
            icon={<TrendingUp className="h-8 w-8 text-blue-600" />}
            value="15%"
            label="Contribution to daily retail volumes"
            delay={200}
          />
          <StatItem
            icon={<Shield className="h-8 w-8 text-blue-600" />}
            value="₹3.5L+ Cr"
            label="Client assets under custody"
            delay={300}
          />
          <StatItem
            icon={<Award className="h-8 w-8 text-blue-600" />}
            value="100+"
            label="Industry awards"
            delay={400}
          />
        </div>
      </div>
    </section>
  );
}
