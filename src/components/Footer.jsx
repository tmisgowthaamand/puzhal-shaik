import { MapPin, Phone, Mail, FileText, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { PROFILE_DATA, CONTACT_DETAILS } from '../data/profileData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onOpenPolicy, onNavigateSection }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-grid">
          {/* Column 1: Identity */}
          <div className="footer-col">
            <strong className="footer-brand">{PROFILE_DATA.name}</strong>
            <p className="footer-role">{PROFILE_DATA.roleTitle}</p>
            <p className="footer-creds">{PROFILE_DATA.credentials}</p>
            <p className="footer-note">
              Working for constitutional rights, education, social justice, and inclusive public welfare.
            </p>
          </div>

          {/* Column 2: Chambers & Contact */}
          <div className="footer-col">
            <h3 className="footer-heading">Office &amp; Chambers</h3>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={15} className="footer-icon" />
                <span>
                  {CONTACT_DETAILS.addressLine1}, {CONTACT_DETAILS.addressLine2}
                </span>
              </li>
              <li>
                <Phone size={15} className="footer-icon" />
                <a href={`tel:${CONTACT_DETAILS.phone}`}>{CONTACT_DETAILS.phone}</a>
              </li>
              <li>
                <Mail size={15} className="footer-icon" />
                <a href={`mailto:${CONTACT_DETAILS.email}`}>{CONTACT_DETAILS.email}</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Dedicated Legal & Policy Pages */}
          <div className="footer-col">
            <h3 className="footer-heading">Legal &amp; Policies</h3>
            <div className="footer-policy-cards">
              <a
                href="/privacy-policy"
                className="footer-policy-card"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenPolicy('privacy-policy');
                }}
              >
                <span className="footer-policy-label">
                  <ShieldCheck size={16} />
                  <span>Privacy Policy</span>
                </span>
                <ArrowUpRight size={15} />
              </a>

              <a
                href="/terms-and-conditions"
                className="footer-policy-card"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenPolicy('terms-and-conditions');
                }}
              >
                <span className="footer-policy-label">
                  <FileText size={16} />
                  <span>Terms &amp; Conditions</span>
                </span>
                <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="footer-quick-links">
              <button type="button" className="footer-link-btn" onClick={() => onNavigateSection('top')}>
                Home
              </button>
              <button type="button" className="footer-link-btn" onClick={() => onNavigateSection('contact')}>
                Send Inquiry
              </button>
            </div>
          </div>
        </div>

        <p className="footer-disclaimer">
          © {CURRENT_YEAR} {PROFILE_DATA.name}. Informational profile only — published in accordance with Bar
          Council of India guidelines (no solicitation or advertisement of legal services).
        </p>
      </div>
    </footer>
  );
}
