import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">
                MindfulMeditation
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Discover inner peace and transform your life through guided meditation practices. 
              Join thousands of users on their journey to mindfulness and well-being.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                <Facebook size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                <Twitter size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                <Instagram size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                <Youtube size={18} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/meditations" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                All Meditations
              </Link>
              <Link to="/resources" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Resources
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                About Us
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact
              </Link>
              <a href="#privacy" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#terms" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span>info@mindfulmeditation.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span>123 Mindfulness Ave, Zen City, ZC 12345</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Stay Connected</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for meditation tips, new content, and peaceful insights.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-muted/50 border-border focus:border-primary"
              />
              <Button className="w-full bg-gradient-primary shadow-glow hover:shadow-lg transition-all duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 MindfulMeditation. All rights reserved. Made with ❤️ for your well-being.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#help" className="hover:text-primary transition-colors">Help Center</a>
              <a href="#support" className="hover:text-primary transition-colors">Support</a>
              <a href="#feedback" className="hover:text-primary transition-colors">Feedback</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;