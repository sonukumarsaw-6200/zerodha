import { useState } from 'react';
import { TrendingUp, Mail, Lock, User, Phone, CheckCircle, ArrowRight } from 'lucide-react';

export default function SignupPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-blue-600 flex flex-col">
      {/* Header */}
      {/* <header className="px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-6 w-6 text-white" />
          <span className="text-xl font-bold text-white">Zerodha 2.0</span>
        </div>
        <button className="text-white hover:text-blue-100 transition-colors text-sm hidden sm:block">
          Already have an account? <span className="font-semibold underline">Sign in</span>
        </button>
      </header> */}

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-40">
        <div className="max-w-md w-full">
          
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            <div className="mb-6">
              <div className="flex space-x-1 mb-5 bg-blue-50 rounded-lg p-1">
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                    !isLogin
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  Sign Up
                </button>
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                    isLogin
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  Login
                </button>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-1.5">
                {isLogin ? 'Welcome back!' : 'Create your account'}
              </h2>
              <p className="text-sm text-gray-600">
                {isLogin
                  ? 'Sign in to continue to your account'
                  : 'Start investing in stocks, mutual funds & more'}
              </p>
            </div>

            <div className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full pl-10 pr-3 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-3 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full pl-10 pr-3 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a strong password"
                    className="w-full pl-10 pr-3 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Re-enter your password"
                      className="w-full pl-10 pr-3 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="w-3.5 h-3.5 text-blue-600 rounded" />
                    <span className="ml-2 text-xs text-gray-600">Remember me</span>
                  </label>
                  <button className="text-xs text-blue-600 hover:underline font-semibold">
                    Forgot password?
                  </button>
                </div>
              )}

              {!isLogin && (
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    className="w-3.5 h-3.5 text-blue-600 rounded mt-0.5"
                  />
                  <label className="ml-2 text-xs text-gray-600">
                    I agree to the{' '}
                    <button className="text-blue-600 hover:underline font-semibold">
                      Terms & Conditions
                    </button>{' '}
                    and{' '}
                    <button className="text-blue-600 hover:underline font-semibold">
                      Privacy Policy
                    </button>
                  </label>
                </div>
              )}

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 text-center">
              <p className="text-xs text-gray-600">
                {isLogin ? "Don't have an account? " : 'Already have an account? '}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-600 hover:underline font-semibold cursor-pointer"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>

            {!isLogin && (
              <div className="mt-6 pt-5 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  By signing up, you agree to receive important updates and promotional content from Zerodha. You can unsubscribe anytime.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-3 px-4 sm:px-6 text-center text-white/80 text-xs">
        <p>© 2024 Zerodha 2.0 | All rights reserved | SEBI Registration No: INZ000031633</p>
      </footer>
    </div>
  );
}