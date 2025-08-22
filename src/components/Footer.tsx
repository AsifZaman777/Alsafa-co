import { Separator } from "@/components/ui/separator";
import { Globe, Ship, Truck, Mail, Phone, MapPin } from "lucide-react";
import alsafa from "../../public/favicon.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={alsafa} alt="ALSAFA Logo" className="h-10 w-10 contain" />
              <div>
                <div className="font-bold text-lg">ALSAFA</div>
                <div className="text-xs opacity-80">Export Import Co.</div>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Your trusted partner for global trade solutions. Connecting businesses 
              worldwide with reliable import and export services.
            </p>
            <div className="flex space-x-2">
              <Globe className="w-5 h-5" />
              <Ship className="w-5 h-5" />
              <Truck className="w-5 h-5" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Home', 'About Us', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="opacity-80 hover:opacity-100 transition-opacity">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                'Ocean Freight',
                'Land Transportation', 
                'Documentation',
                'Cargo Insurance',
                'Supply Chain',
                'Global Network'
              ].map((service) => (
                <li key={service} className="opacity-80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 opacity-80" />
                <div className="opacity-80">
                  123 Trade Center Blvd<br />
                  Dubai, UAE 12345
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 opacity-80" />
                <span className="opacity-80">+971 4 XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 opacity-80" />
                <span className="opacity-80">info@alsafa-export.com</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p>&copy; {currentYear} ALSAFA Export Import Co. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;