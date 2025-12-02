import { TrendingUp, Twitter, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Company: ['About', 'Products', 'Pricing', 'Careers', 'Press & Media', 'Zerodha Cares'],
    Support: ['Contact us', 'Support portal', 'Z-Connect blog', 'List of charges', 'Downloads', 'Videos'],
    Account: ['Open an account', 'Fund transfer', 'Console', 'Kite', 'Coin', 'Kite Connect API'],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">Zerodha</span>
            </div>
            <p className="text-sm mb-6 text-gray-400">
              India's largest broker offering the lowest trading costs, built on cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/sonu-kumar-194506298/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
            <div>
              <p className="mb-2">
                NSE & BSE - SEBI Registration no.: INZXXXXXXX33 | CDSL - SEBI Registration no.: IN-XXXXXX431-2019
              </p>
              <p>
                Zerodha Broking Ltd.: Member of NSE, BSE | SEBI Registration no.: XXXXXX
              </p>
            </div>
            <div className="md:text-right">
              <p className="mb-2">© 2010 - 2024, Zerodha Broking Ltd.</p>
              <p>All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
