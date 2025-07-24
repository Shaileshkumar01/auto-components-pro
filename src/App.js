import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Award, 
  Users, 
  Globe, 
  Play, 
  Star, 
  Phone, 
  Mail, 
  MapPin,
  Download,
  Shield,
  Zap,
  Settings,
  TrendingUp,
  MessageCircle,
  Search,
  Filter,
  ShoppingCart,
  User,
  BarChart3,
  Eye,
  Clock,
  Target
} from 'lucide-react';

const AutoComponentsWebsite = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');

  // Simulated CMS data
  const cmsData = {
    company: {
      name: "AutoTech Components",
      tagline: "Precision Engineering for Tomorrow's Vehicles",
      description: "Leading manufacturer of high-quality automotive components with over 20 years of expertise in precision engineering and manufacturing excellence."
    },
    products: [
      {
        id: 1,
        name: "Precision Engine Valves",
        category: "Engine Components",
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400",
        specifications: {
          material: "High-Grade Steel",
          temperature: "800°C Max",
          precision: "±0.01mm",
          coating: "Titanium Nitride"
        },
        price: 299,
        description: "High-performance engine valves engineered for extreme conditions"
      },
      {
        id: 2,
        name: "Advanced Brake Discs",
        category: "Braking System",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
        specifications: {
          material: "Carbon Composite",
          diameter: "330mm",
          thickness: "32mm",
          ventilation: "Directional Vanes"
        },
        price: 459,
        description: "Premium brake discs with superior heat dissipation"
      },
      {
        id: 3,
        name: "Smart Transmission Gears",
        category: "Transmission",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400",
        specifications: {
          material: "Forged Steel",
          teeth: "48T",
          hardness: "58-62 HRC",
          surface: "Ground Finish"
        },
        price: 675,
        description: "Precision-engineered transmission gears for smooth operation"
      }
    ],
    certifications: [
      { name: "ISO 9001:2015", icon: "🏆", description: "Quality Management" },
      { name: "IATF 16949", icon: "🚗", description: "Automotive Quality" },
      { name: "ISO 14001", icon: "🌱", description: "Environmental Management" },
      { name: "OHSAS 18001", icon: "🛡️", description: "Safety Management" }
    ],
    testimonials: [
      {
        name: "BMW Group",
        logo: "🏎️",
        text: "AutoTech's precision components have consistently exceeded our quality standards. Their innovative approach to manufacturing has made them our preferred supplier.",
        rating: 5
      },
      {
        name: "Mercedes-Benz",
        logo: "⭐",
        text: "Outstanding quality and reliability. AutoTech Components delivers precision parts that meet our stringent requirements every time.",
        rating: 5
      },
      {
        name: "Audi AG",
        logo: "🚙",
        text: "The technical expertise and manufacturing capabilities of AutoTech are truly exceptional. They're an integral part of our supply chain.",
        rating: 5
      }
    ]
  };

  // Analytics data
  const analyticsData = {
    visitors: 12450,
    leads: 890,
    orders: 234,
    revenue: 125000,
    growth: 23.5
  };

  const digitalProducts = [
    {
      id: 1,
      name: "CAD Design Files - Engine Components",
      type: "Digital Download",
      price: 199,
      downloads: 1250,
      rating: 4.8
    },
    {
      id: 2,
      name: "Technical Documentation Package",
      type: "PDF Bundle",
      price: 99,
      downloads: 2340,
      rating: 4.9
    },
    {
      id: 3,
      name: "Quality Control Software",
      type: "Software License",
      price: 1299,
      downloads: 45,
      rating: 4.7
    }
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const NavBar = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Settings className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">{cmsData.company.name}</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === 'home' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentPage('products')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === 'products' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Products
              </button>
              <button 
                onClick={() => setCurrentPage('digital')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === 'digital' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Digital Products
              </button>
              <button 
                onClick={() => setCurrentPage('analytics')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === 'analytics' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Analytics
              </button>
              <button className="relative p-2 text-gray-700 hover:text-blue-600">
                <ShoppingCart className="h-5 w-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              <div className="w-6 h-6 flex flex-col justify-center">
                <span className={`block h-0.5 w-6 bg-gray-600 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-600 mt-1 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-600 mt-1 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => {setCurrentPage('home'); setIsMenuOpen(false);}} className="block px-3 py-2 text-gray-700">Home</button>
            <button onClick={() => {setCurrentPage('products'); setIsMenuOpen(false);}} className="block px-3 py-2 text-gray-700">Products</button>
            <button onClick={() => {setCurrentPage('digital'); setIsMenuOpen(false);}} className="block px-3 py-2 text-gray-700">Digital Products</button>
            <button onClick={() => {setCurrentPage('analytics'); setIsMenuOpen(false);}} className="block px-3 py-2 text-gray-700">Analytics</button>
          </div>
        </div>
      )}
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-pulse">
              {cmsData.company.tagline}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {cmsData.company.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                View Products <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" /> Watch Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Global Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50M+</div>
              <div className="text-gray-600">Parts Manufactured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Quality Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600">Precision-engineered components for the automotive industry</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cmsData.products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quality Certifications</h2>
            <p className="text-xl text-gray-600">Certified excellence in automotive manufacturing</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {cmsData.certifications.map((cert, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl opacity-90">What our OEM partners say about us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cmsData.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{testimonial.logo}</div>
                  <div>
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl opacity-90">Ready to discuss your automotive component needs?</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="opacity-90">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="opacity-90">info@autotechcomponents.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="opacity-90">123 Manufacturing Drive, Detroit, MI 48201</p>
                </div>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-6 w-6 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">WhatsApp Business</h3>
                  <p className="opacity-90">+1 (555) 987-6543</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-gray-900">
              <h3 className="text-xl font-semibold mb-4">Request Quote</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const ProductsPage = () => (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Product Catalog</h1>
          <p className="text-xl text-gray-600">Explore our comprehensive range of automotive components</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="all">All Categories</option>
            <option value="Engine Components">Engine Components</option>
            <option value="Braking System">Braking System</option>
            <option value="Transmission">Transmission</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cmsData.products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{product.category}</span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Technical Specifications</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="capitalize">{key}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                  <div className="flex gap-2">
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-2 rounded transition-colors">
                      <Download className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const DigitalProductsPage = () => (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Digital Products</h1>
          <p className="text-xl text-gray-600">CAD files, documentation, and software solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {digitalProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                  <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">{product.type}</span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Downloads:</span>
                    <span className="font-medium">{product.downloads.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Rating:</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors flex items-center"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AnalyticsDashboard = () => (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Analytics Dashboard</h1>
          <p className="text-xl text-gray-600">Track your business performance and insights</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Total Visitors</h3>
                <p className="text-3xl font-bold text-blue-600">{analyticsData.visitors.toLocaleString()}</p>
              </div>
              <Eye className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-sm text-green-600 mt-2">↗ +{analyticsData.growth}% from last month</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Leads Generated</h3>
                <p className="text-3xl font-bold text-green-600">{analyticsData.leads.toLocaleString()}</p>
              </div>
              <Target className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-sm text-green-600 mt-2">↗ +12.3% conversion rate</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Orders</h3>
                <p className="text-3xl font-bold text-purple-600">{analyticsData.orders.toLocaleString()}</p>
              </div>
              <ShoppingCart className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-sm text-green-600 mt-2">↗ +8.7% this month</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Revenue</h3>
                <p className="text-3xl font-bold text-orange-600">${analyticsData.revenue.toLocaleString()}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
            <p className="text-sm text-green-600 mt-2">↗ +15.2% growth</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Overview</h3>
            <div className="h-64 flex items-center justify-center text-gray-500">
              <BarChart3 className="h-16 w-16 mr-4" />
              <span>Traffic Analytics Chart</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Lead Sources</h3>
            <div className="h-64 flex items-center justify-center text-gray-500">
              <Target className="h-16 w-16 mr-4" />
              <span>Lead Sources Chart</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b">
              <div className="flex items-center">
                <User className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-900">New lead from BMW Group</span>
              </div>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <div className="flex items-center">
                <ShoppingCart className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-900">Order #12345 completed</span>
              </div>
              <span className="text-sm text-gray-500">4 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <div className="flex items-center">
                <Download className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-900">CAD files downloaded</span>
              </div>
              <span className="text-sm text-gray-500">6 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'products':
        return <ProductsPage />;
      case 'digital':
        return <DigitalProductsPage />;
      case 'analytics':
        return <AnalyticsDashboard />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      {renderCurrentPage()}
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Settings className="h-8 w-8 text-blue-600 mr-2" />
                <span className="text-xl font-bold">{cmsData.company.name}</span>
              </div>
              <p className="text-gray-400 mb-4">{cmsData.company.description}</p>
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Engine Components</a></li>
                <li><a href="#" className="hover:text-white">Braking Systems</a></li>
                <li><a href="#" className="hover:text-white">Transmission Parts</a></li>
                <li><a href="#" className="hover:text-white">Digital Products</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Custom Manufacturing</a></li>
                <li><a href="#" className="hover:text-white">Quality Testing</a></li>
                <li><a href="#" className="hover:text-white">Engineering Support</a></li>
                <li><a href="#" className="hover:text-white">Export Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>123 Manufacturing Drive</p>
                <p>Detroit, MI 48201</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Email: info@autotechcomponents.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 {cmsData.company.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AutoComponentsWebsite;