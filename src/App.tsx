import React, { useState } from 'react';
import {
  Wallet,
  Shield,
  Globe,
  Rocket,
  Binary,
  Blocks,
  Zap,
  Lock,
  TrendingUp,
  Users,
  ExternalLink,
  Star,
  Cpu,
  ChevronRight,
  Lightbulb,
  Link,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  const [connected, setConnected] = useState(false);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setConnected(true);
      } catch (error) {
        console.error('User denied account access');
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  const carouselImages = [
    {
      url: 'https://imgbb.io/images/FdRh.jpg',
      caption: '',
    },
    {
      url: 'https://imgbb.io/images/FdC0.jpg',
      caption: '',
    },
    {
      url: 'https://imgbb.io/images/Flzx.jpg',
      caption: '',
    },
    {
      url: 'https://imgbb.io/images/FlmN.jpg',
      caption: '',
    },
    {
      url: 'https://imgbb.io/images/FdWp.jpg',
      caption: '',
    },
  ];

  return (
    <div className="min-h-screen bg-mtc-dark text-white">
      {/* Header */}
      <header className="fixed w-full bg-mtc-darker bg-opacity-95 backdrop-blur-sm z-50 border-b border-mtc-gold/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <img
              src="https://imgbb.io/images/Fd7F.png"
              alt="MuskTrumpCoin Logo"
              className="w-12 h-12"
            />
            <span className="text-xl sm:text-2xl font-bold">MuskTrumpCoin</span>
          </div>
          <button
            onClick={connectWallet}
            className="bg-mtc-gold text-mtc-navy px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transition-colors w-full sm:w-auto"
          >
            {connected ? 'Connected' : 'Connect Wallet'}
          </button>
        </div>
      </header>

      {/* Hero Section with Carousel */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden bg-mtc-darker">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <Star className="w-6 h-6 text-mtc-gold" />
                <span className="text-mtc-gold font-bold">
                  American Innovation
                </span>
              </div>

              {/* Logo da moeda */}
              <div className="mb-8 flex justify-center lg:justify-start">
                <img
                  src="https://imgbb.io/images/Fd7F.png"
                  alt="MuskTrumpCoin Logo Large"
                  className="w-48 h-48 object-contain animate-float"
                />
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                The Key to Digital Economy
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-mtc-gold mb-4">
                More Than Just a Cryptocurrency
              </p>
              <p className="text-lg sm:text-xl text-gray-400 mb-8">
                With advanced technology, fast transactions, and low fees,
                MuskTrumpCoin is ready to transform fintech, DeFi, and beyond.
              </p>
            </div>
            <div className="relative">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                className="w-full aspect-square rounded-2xl shadow-2xl"
              >
                {carouselImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                      <img
                        src={image.url}
                        alt={image.caption}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <p className="text-white text-lg font-bold">
                          {image.caption}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* IDO Section */}
      <section className="py-12 bg-mtc-darker border-y border-mtc-gold/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-mtc-gold">
              IDO launched On
            </h1>
            <a
              href="https://dx.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="https://i.ibb.co/BjTc2Qt/dxsale-logo.png"
                alt="dx-logo"
                className="w-48 sm:w-64"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-mtc-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Visionary Leadership</h2>
            <p className="text-xl text-gray-300 mb-12">
              Backed by the vision of industry titans Elon Musk and Donald
              Trump, MuskTrumpCoin is positioned to revolutionize the
              cryptocurrency landscape and create a new era of digital finance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-mtc-darker p-8 rounded-xl border border-mtc-gold/10">
                <img
                  src="https://images.unsplash.com/photo-1562114808-b4b33cf60f4f?auto=format&fit=crop&w=800&q=80"
                  alt="Innovation Leader"
                  className="w-32 h-32 mx-auto rounded-full mb-6 object-cover"
                />
                <h3 className="text-2xl font-bold mb-4">
                  Innovation & Technology
                </h3>
                <p className="text-gray-400">
                  Leading the charge in technological advancement and
                  sustainable innovation
                </p>
              </div>
              <div className="bg-mtc-darker p-8 rounded-xl border border-mtc-gold/10">
                <img
                  src="https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?auto=format&fit=crop&w=800&q=80"
                  alt="Business Vision"
                  className="w-32 h-32 mx-auto rounded-full mb-6 object-cover"
                />
                <h3 className="text-2xl font-bold mb-4">Business Acumen</h3>
                <p className="text-gray-400">
                  Bringing unparalleled business expertise and market
                  understanding
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Combined Technology Section */}
<section className="py-20 bg-gradient-to-b from-mtc-navy to-mtc-dark">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <h2 className="text-4xl font-bold text-center mb-4 text-white">
      Revolutionary Technology & Features
    </h2>
    <p className="text-center text-mtc-gold mb-12 text-xl">
      Built for the Future of Finance
    </p>

    {/* Grid of Features */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-gray-800/50 p-8 rounded-xl border border-mtc-gold/10">
        <Shield className="w-16 h-16 text-orange-500 mb-6" />
        <h3 className="text-2xl font-bold mb-4 text-white">Secure Blockchain</h3>
        <p className="text-gray-300 mb-4">
          Built on a next-generation blockchain network, ensuring security and scalability.
        </p>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
            <span className="text-gray-300">
              Advanced encryption standards
            </span>
          </li>
          <li className="flex items-start gap-3">
            <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
            <span className="text-gray-300">
              Fully decentralized framework
            </span>
          </li>
        </ul>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-800/50 p-8 rounded-xl border border-mtc-gold/10">
        <Zap className="w-16 h-16 text-orange-500 mb-6" />
        <h3 className="text-2xl font-bold mb-4 text-white">Proof of Stake (PoS)</h3>
        <p className="text-gray-300 mb-4">
          Energy-efficient system that rewards active network participants.
        </p>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
            <span className="text-gray-300">
              Low energy consumption
            </span>
          </li>
          <li className="flex items-start gap-3">
            <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
            <span className="text-gray-300">
              Rewarding staking mechanisms
            </span>
          </li>
        </ul>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-800/50 p-8 rounded-xl border border-mtc-gold/10">
        <Vote className="w-16 h-16 text-orange-500 mb-6" />
        <h3 className="text-2xl font-bold mb-4 text-white">Decentralized Governance</h3>
        <p className="text-gray-300 mb-4">
          Active community participation in decisions through decentralized voting.
        </p>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
            <span className="text-gray-300">
              Transparent voting mechanisms
            </span>
          </li>
          <li className="flex items-start gap-3">
            <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
            <span className="text-gray-300">
              Community-driven proposals
            </span>
          </li>
        </ul>
      </div>

      {/* Card 4 */}
      <div className="bg-mtc-darker p-8 rounded-xl border border-mtc-gold/10">
        <Cpu className="w-16 h-16 text-mtc-gold mb-6" />
        <h3 className="text-2xl font-bold mb-4 text-white">Robust Infrastructure</h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
            <span className="text-gray-300">
              Scalable architecture for growing demands
            </span>
          </li>
          <li className="flex items-start gap-3">
            <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
            <span className="text-gray-300">
              High-performance transaction processing
            </span>
          </li>
        </ul>
      </div>

      {/* Card 5 */}
      <div className="bg-mtc-darker p-8 rounded-xl border border-mtc-gold/10">
        <Blocks className="w-16 h-16 text-mtc-gold mb-6" />
        <h3 className="text-2xl font-bold mb-4 text-white">Ecosystem Integration</h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
            <span className="text-gray-300">
              Seamless DeFi platform compatibility
            </span>
          </li>
          <li className="flex items-start gap-3">
            <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
            <span className="text-gray-300">
              Smart contract interoperability
            </span>
          </li>
        </ul>
      </div>

      {/* Card 6 */}
      <div className="bg-mtc-darker p-8 rounded-xl border border-mtc-gold/10">
        <Lightbulb className="w-16 h-16 text-mtc-gold mb-6" />
        <h3 className="text-2xl font-bold mb-4 text-white">Future Innovation</h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
            <span className="text-gray-300">
              AI-powered trading features
            </span>
          </li>
          <li className="flex items-start gap-3">
            <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
            <span className="text-gray-300">
              Quantum-resistant encryption
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* Polygon Network Integration */}
      <section className="py-20 bg-mtc-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">
              Polygon Network Integration
            </h2>
            <div className="bg-mtc-darker p-8 rounded-2xl border border-mtc-gold/10 mb-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                <div className="flex items-center gap-4">
                  <img
                    src="https://cryptologos.cc/logos/polygon-matic-logo.png"
                    alt="Polygon Logo"
                    className="w-12 h-12"
                  />
                  <div>
                    <h3 className="text-2xl font-bold">MUSKTRUMPCOIN (MTC)</h3>
                    <p className="text-mtc-gold">Powered by Polygon Network</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-mtc-navy/50 px-4 py-2 rounded-lg">
                  <Link className="w-5 h-5 text-mtc-gold" />
                  <span className="text-sm font-mono text-gray-300 break-all">
                    0xD3675B7a26C6d6C4788c9b27eD417B7BD9c7C71F
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-mtc-darker p-6 rounded-xl border border-mtc-gold/10">
                <h3 className="text-xl font-bold mb-4">How to Buy MTC</h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="bg-mtc-gold text-mtc-navy w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                      1
                    </span>
                    <div>
                      <p className="font-bold">Set Up MetaMask</p>
                      <p className="text-gray-400">
                        Install MetaMask and add Polygon network
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-mtc-gold text-mtc-navy w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                      2
                    </span>
                    <div>
                      <p className="font-bold">Get MATIC</p>
                      <p className="text-gray-400">
                        Purchase MATIC from an exchange
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-mtc-gold text-mtc-navy w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                      3
                    </span>
                    <div>
                      <p className="font-bold">Swap for MTC</p>
                      <p className="text-gray-400">
                        Use QuickSwap or Uniswap to swap MATIC for MTC
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="bg-mtc-darker p-6 rounded-xl border border-mtc-gold/10">
                <h3 className="text-xl font-bold mb-4">Token Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">Total Supply</p>
                      <p className="text-gray-400">1,000,000,000 MTC</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">Network</p>
                      <p className="text-gray-400">Polygon (MATIC)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">Token Type</p>
                      <p className="text-gray-400">ERC-20</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Roadmap</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-orange-500 p-4 rounded-full h-min">
                  <Timeline className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Phase 1: Launch</h3>
                  <p className="text-gray-300">Initial token sale, website launch, and community engagement kickoff</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-orange-500 p-4 rounded-full h-min">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Phase 2: Development</h3>
                  <p className="text-gray-300">Implementation of staking, governance system, and establishment of strategic partnerships</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-orange-500 p-4 rounded-full h-min">
                  <Coins className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Phase 3: Expansion</h3>
                  <p className="text-gray-300">Major exchange listings and payment system integrations</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-orange-500 p-4 rounded-full h-min">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Phase 4: Global Recognition</h3>
                  <p className="text-gray-300">Global adoption campaigns and international themed events</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

      {/* Investment Benefits */}
      <section className="py-20 bg-mtc-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Invest in MuskTrumpCoin?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Robust Technology',
                desc: 'Built on cutting-edge blockchain architecture',
              },
              {
                icon: TrendingUp,
                title: 'Growth Potential',
                desc: 'Positioned for significant market expansion',
              },
              {
                icon: Globe,
                title: 'Global Ecosystem',
                desc: 'Integrated across multiple platforms',
              },
              {
                icon: Wallet,
                title: 'Visionary Support',
                desc: 'Backed by industry leaders',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-mtc-darker p-6 rounded-xl border border-mtc-gold/10 hover:border-mtc-gold/30 transition-colors"
              >
                <feature.icon className="w-12 h-12 text-mtc-gold mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mtc-darker py-12 border-t border-mtc-gold/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-6 md:mb-0">
              <img
                src="https://imgbb.io/images/Fd7F.png"
                alt="MuskTrumpCoin Logo"
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold">MuskTrumpCoin</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://x.com/musktrumpcoin__?s=11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-mtc-gold transition-colors"
              >
                X (Twitter)
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-500">
            <p>&copy; 2024 MuskTrumpCoin (MTC). All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
