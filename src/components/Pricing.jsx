import { useState } from 'react';
import { TrendingUp, CheckCircle, Calculator } from 'lucide-react';

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState('equity');

  const tabs = [
    { id: 'equity', label: 'Equity' },
    { id: 'fo', label: 'F&O' },
    { id: 'currency', label: 'Currency' },
    { id: 'commodity', label: 'Commodity' }
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
            Charges
          </h1>
          <p className="text-xl text-blue-100 mb-8 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
            List of all charges and taxes
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 animate-[fadeInUp_0.8s_ease-out_0.4s_both] hover:scale-105 hover:bg-white/20 transition-all duration-300">
              <CheckCircle className="h-10 w-10 mx-auto mb-3 animate-[bounce_1s_ease-in-out_0.6s]" />
              <h3 className="text-xl font-bold mb-2">Free equity delivery</h3>
              <p className="text-blue-100 text-sm">All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 animate-[fadeInUp_0.8s_ease-out_0.6s_both] hover:scale-105 hover:bg-white/20 transition-all duration-300">
              <CheckCircle className="h-10 w-10 mx-auto mb-3 animate-[bounce_1s_ease-in-out_0.8s]" />
              <h3 className="text-xl font-bold mb-2">Intraday and F&O trades</h3>
              <p className="text-blue-100 text-sm">Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 animate-[fadeInUp_0.8s_ease-out_0.8s_both] hover:scale-105 hover:bg-white/20 transition-all duration-300">
              <CheckCircle className="h-10 w-10 mx-auto mb-3 animate-[bounce_1s_ease-in-out_1s]" />
              <h3 className="text-xl font-bold mb-2">Free direct MF</h3>
              <p className="text-blue-100 text-sm">All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Tables */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-semibold transition-all border-b-2 ${
                activeTab === tab.id
                  ? 'text-blue-600 border-blue-600'
                  : 'text-gray-600 border-transparent hover:text-blue-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Equity Table */}
        {activeTab === 'equity' && (
          <div className="space-y-8">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 font-semibold text-gray-700 border-b-2 border-gray-200"></th>
                    <th className="text-left p-4 font-semibold text-gray-700 border-b-2 border-gray-200">Equity delivery</th>
                    <th className="text-left p-4 font-semibold text-gray-700 border-b-2 border-gray-200">Equity intraday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700 border-b border-gray-200">Brokerage</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">Zero Brokerage</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">0.03% or Rs. 20/executed order whichever is lower</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700 border-b border-gray-200">STT/CTT</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">0.1% on buy & sell</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">0.025% on the sell side</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700 border-b border-gray-200">Transaction charges</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">NSE: 0.00297%<br/>BSE: 0.00375%</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">NSE: 0.00297%<br/>BSE: 0.00375%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700 border-b border-gray-200">GST</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">18% on (brokerage + SEBI charges + transaction charges)</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">18% on (brokerage + SEBI charges + transaction charges)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700 border-b border-gray-200">SEBI charges</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">₹10 / crore</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">₹10 / crore</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700 border-b border-gray-200">Stamp charges</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">0.015% or ₹1500 / crore on buy side</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">0.003% or ₹300 / crore on buy side</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* F&O Table */}
        {activeTab === 'fo' && (
          <div className="space-y-8">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 font-semibold text-gray-700 border-b-2 border-gray-200"></th>
                    <th className="text-left p-4 font-semibold text-gray-700 border-b-2 border-gray-200">F&O - Futures</th>
                    <th className="text-left p-4 font-semibold text-gray-700 border-b-2 border-gray-200">F&O - Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700 border-b border-gray-200">Brokerage</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">0.03% or Rs. 20/executed order whichever is lower</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">Flat Rs. 20 per executed order</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700 border-b border-gray-200">STT/CTT</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">0.02% on the sell side</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">0.0625% on sell side (on premium)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700 border-b border-gray-200">Transaction charges</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">NSE: 0.00173%<br/>BSE: 0</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">NSE: 0.03503% (on premium)<br/>BSE: 0.0325% (on premium)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700 border-b border-gray-200">GST</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">18% on (brokerage + SEBI charges + transaction charges)</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">18% on (brokerage + SEBI charges + transaction charges)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700 border-b border-gray-200">SEBI charges</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">₹10 / crore</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">₹10 / crore</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700 border-b border-gray-200">Stamp charges</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">0.002% or ₹200 / crore on buy side</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">0.003% or ₹300 / crore on buy side</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Currency Table */}
        {activeTab === 'currency' && (
          <div className="space-y-8">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 font-semibold text-gray-700 border-b-2 border-gray-200"></th>
                    <th className="text-left p-4 font-semibold text-gray-700 border-b-2 border-gray-200">Currency futures</th>
                    <th className="text-left p-4 font-semibold text-gray-700 border-b-2 border-gray-200">Currency options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700 border-b border-gray-200">Brokerage</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">0.03% or ₹20/executed order whichever is lower</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">₹20/executed order</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700 border-b border-gray-200">STT/CTT</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">No STT</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">No STT</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700 border-b border-gray-200">Transaction charges</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">NSE: 0.00035%<br/>BSE: 0.00045%</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">NSE: 0.0311%<br/>BSE: 0.001%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700 border-b border-gray-200">GST</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">18% on (brokerage + SEBI charges + transaction charges)</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">18% on (brokerage + SEBI charges + transaction charges)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700 border-b border-gray-200">SEBI charges</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">₹10 / crore</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">₹10 / crore</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700 border-b border-gray-200">Stamp charges</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">0.0001% or ₹10 / crore on buy side</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">0.0001% or ₹10 / crore on buy side</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Commodity Table */}
        {activeTab === 'commodity' && (
          <div className="space-y-8">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 font-semibold text-gray-700 border-b-2 border-gray-200"></th>
                    <th className="text-left p-4 font-semibold text-gray-700 border-b-2 border-gray-200">Commodity futures</th>
                    <th className="text-left p-4 font-semibold text-gray-700 border-b-2 border-gray-200">Commodity options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700 border-b border-gray-200">Brokerage</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">0.03% or Rs. 20/executed order whichever is lower</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">₹20/executed order</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700 border-b border-gray-200">STT/CTT</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">0.01% on sell side (Non-Agri)</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">0.05% on sell side</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700 border-b border-gray-200">Transaction charges</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">MCX: 0.0021%<br/>NSE: 0.0001%</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">MCX: 0.0418%<br/>NSE: 0.001%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700 border-b border-gray-200">GST</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">18% on (brokerage + SEBI charges + transaction charges)</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">18% on (brokerage + SEBI charges + transaction charges)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700 border-b border-gray-200">SEBI charges</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">Agri: ₹1 / crore<br/>Non-agri: ₹10 / crore</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">₹10 / crore</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700 border-b border-gray-200">Stamp charges</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">0.002% or ₹200 / crore on buy side</td>
                    <td className="p-4 text-gray-600 border-b border-gray-200">0.003% or ₹300 / crore on buy side</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Calculator CTA */}
        <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
          <Calculator className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Calculate your costs upfront</h3>
          <p className="text-gray-600 mb-6">Use our brokerage calculator to estimate your trading costs</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Brokerage Calculator
          </button>
        </div>

        {/* Additional Charges Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Additional Charges</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Account Opening */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Charges for account opening</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-700">Online account</span>
                  <span className="font-semibold text-blue-600">Free</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-700">Offline account</span>
                  <span className="font-semibold text-blue-600">Free</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-700">NRI account (offline only)</span>
                  <span className="font-semibold text-gray-900">₹500</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-700 text-sm">Partnership, LLP, HUF, or Corporate accounts</span>
                  <span className="font-semibold text-gray-900">₹500</span>
                </div>
              </div>
            </div>

            {/* Demat AMC */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Demat AMC (Annual Maintenance Charge)</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-700">Up to ₹4 lakh</span>
                  <span className="font-semibold text-blue-600">Free*</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-700">₹4 lakh - ₹10 lakh</span>
                  <span className="font-semibold text-gray-900">₹100 per year*</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-700">Above ₹10 lakh</span>
                  <span className="font-semibold text-gray-900">₹300 per year</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">* Applicable only for Basic Services Demat Account (BSDA)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
