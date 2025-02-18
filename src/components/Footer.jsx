import Image from 'next/image';

export default function Footer() {
  return (
    <div className="bg-[#1c1c28] py-16 mt-24 pl-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Footer Left */}
          <div className="col-span-1">
            <div className="footer-left">
              <div className="logo-thumbnail mb-4">
                <a className="logo-light" href="/">
                  <Image alt="logo" src="/logo.png" width={106} height={35} />
                </a>
              </div>
              <p className="text-white text-sm pt-5">
                Empowering Nigerian artisans with a decentralized marketplace for their crafts.
              </p>
              <hr className="border-gray-600 mt-8" />
              <div className="footer-newsletter pt-12">
                <h6 className="text-white text-lg font-semibold">Get The Latest DMLA Updates</h6>
                <div className="flex mt-2">
                  <input
                    type="text"
                    className="form-control bg-gray-700 text-white p-2 rounded-l-md w-full"
                    placeholder="Your username"
                  />
                  <button className="btn bg-[#232e46] text-white p-2 rounded-r-md hover:bg-blue-400 transition-all">
                    Subscribe
                  </button>
                </div>
                <p className="text-white text-sm mt-2">Your email is safe with us. We don't spam.</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 pl-10">
            <h6 className="text-white text-2xl font-semibold mb-4">DMLA</h6>
            <ul className="text-white space-y-2">
              {['Explore Crafts', 'Create Collection', 'Add Crafts', 'Sell Crafts', 'Blog', 'Activity Log', 'Contact Us'].map((link, index) => (
                <li key={index} className="relative group">
                  <a href={`/${link.toLowerCase().replace(/ /g, '-')}`} className="hover:text-blue-400 transition-all relative inline-block">
                    {link}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="col-span-1">
            <h6 className="text-white text-2xl font-semibold mb-4">Information</h6>
            <ul className="text-white space-y-2">
              {['About Us', 'FAQs', 'Support', 'Terms of Service', 'Privacy Policy'].map((info, index) => (
                <li key={index} className="relative group">
                  <a href={`/${info.toLowerCase().replace(/ /g, '-')}`} className="hover:text-blue-400 transition-all relative inline-block">
                    {info}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recently Sold Crafts */}
          <div className="col-span-1">
            <h6 className="text-white text-2xl font-semibold mb-4">Recently Sold Crafts</h6>
            <ul className="space-y-4">
              {[
                { img: '/f1.png', name: 'Handmade Basket', bid: '0.244wETH', link: '/handmade-basket' },
                { img: '/f2.png', name: 'Wooden Sculpture', bid: '0.022wETH', link: '/wooden-sculpture' },
                { img: '/f3.png', name: 'Handwoven Rug', bid: '0.892wETH', link: '/handwoven-rug' }
              ].map((craft, index) => (
                <li key={index} className="flex space-x-6 items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-500">
                    <Image alt={craft.name} src={craft.img} width={64} height={60} />
                  </div>
                  <div>
                    <h6 className="text-white font-semibold">
                      <a href={craft.link} className="hover:text-blue-400 transition-all relative inline-block">
                        {craft.name}
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
                      </a>
                    </h6>
                    <p className="text-white text-sm">Highest bid 1/20</p>
                    <span className="text-blue-400">{craft.bid}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* HR Line */}
      <hr className="border-gray-600 mt-8" />
      
      {/* Copyright Section */}
      <div className="pt-6 pl-6">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="text-white">
            <span>© 2022 NaijaChain. All rights reserved   |</span>
            <ul className="inline-flex space-x-3 ml-4">
              <li> <a href="/terms-condition" className="hover:text-blue-400 transition-all inline-block ">Terms</a> <span>.</span></li>
              <li><a href="/privacy-policy" className="hover:text-blue-400 transition-all relative inline-block">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-white">
            {['facebook', 'twitter', 'instagram', 'linkedin', 'mail'].map((icon, index) => (
              <a key={index} href={`https://${icon}.com`} target="_blank" rel="noreferrer" aria-label={icon} className="hover:text-blue-400 transition-all">
                <i className={`feather-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
