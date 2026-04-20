import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Sobre', href: '/about' },
    { label: 'Serviços', href: '/services' },
    { label: 'Feedback', href: '/testimonials' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contato', href: '/contact' },
  ];

  const isActive = (href: string) => location === href;

  return (
    <nav className="navigation">
      <div className="nav-container">
        <a href="/" className="nav-logo">
          RAYLLA STUDIO
        </a>

        {/* Desktop Menu */}
        <div className="nav-menu">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="nav-mobile">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-mobile-link ${isActive(item.href) ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
