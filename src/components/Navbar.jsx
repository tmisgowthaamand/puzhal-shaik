import { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const NAV_SECTIONS = [
  { id: 'journey', label: 'Journey' },
  { id: 'legal-political', label: 'Law & Politics' },
  { id: 'literary', label: 'Literature' },
  { id: 'vision', label: 'Vision' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ onNavigateSection }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSectionClick = (sectionId) => {
    setDrawerOpen(false);
    onNavigateSection(sectionId);
  };

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a
            href="#top"
            className="brand-mark"
            onClick={(e) => {
              e.preventDefault();
              handleSectionClick('top');
            }}
          >
            <img
              src="/advocate-logo.svg"
              alt="Advocate Logo"
              className="brand-logo-img"
              width={36}
              height={36}
            />
            <span className="brand-text">
              <span className="brand-name">Adv. Shaik Mohamed Ali</span>
              <span className="brand-sub">MBA, LL.B. · Chennai</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary Navigation">
            {NAV_SECTIONS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSectionClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            className="mobile-menu-btn"
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {drawerOpen && (
        <div
          className="mobile-drawer-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          onClick={() => setDrawerOpen(false)}
        >
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <span className="brand-name">Navigation</span>
              <button
                type="button"
                className="mobile-menu-btn"
                aria-label="Close navigation menu"
                onClick={() => setDrawerOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            {NAV_SECTIONS.map((item) => (
              <button
                key={item.id}
                type="button"
                className="mobile-drawer-link"
                onClick={() => handleSectionClick(item.id)}
              >
                <span>{item.label}</span>
                <ChevronRight size={16} />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
