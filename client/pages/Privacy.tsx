import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      {/* Header */}
      <header className="border-b border-[#222222] px-6 sm:px-8 md:px-12 py-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/">
            <img
              src="/logos/dark.svg"
              alt="the peptide market"
              className="h-8 sm:h-10 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#9CA3AF] to-[#E5E7EB] bg-clip-text text-transparent font-helvetica text-4xl sm:text-5xl md:text-6xl mb-4"
          >
            Privacy Policy
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#9CA3AF] font-helvetica text-sm mb-12"
          >
            Last updated: January 1, 2025
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-10"
          >
            {/* Intro */}
            <div>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                At The Peptide Market, we are committed to protecting your privacy and health information. This Privacy Policy explains how we collect, use, and safeguard your personal and medical data in compliance with HIPAA and applicable privacy laws.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Information We Collect</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                We collect information necessary to provide personalized healthcare services:
              </p>
              <ul className="list-disc list-inside text-[#E5E5E5] font-helvetica leading-relaxed space-y-2 ml-4">
                <li><strong>Personal Information:</strong> Name, email, phone number, address, date of birth</li>
                <li><strong>Medical Information:</strong> Health history, symptoms, lab results, current medications, allergies</li>
                <li><strong>Payment Information:</strong> Billing address, payment method (encrypted and processed securely)</li>
                <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on site</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                Your information enables us to deliver personalized healthcare:
              </p>
              <ul className="list-disc list-inside text-[#E5E5E5] font-helvetica leading-relaxed space-y-2 ml-4">
                <li>Conducting physician consultations and treatment approvals</li>
                <li>Processing prescriptions through FDA-registered pharmacies</li>
                <li>Coordinating lab testing and results analysis</li>
                <li>Providing ongoing clinical support and dosage optimization</li>
                <li>Shipping medications discreetly to your address</li>
                <li>Sending appointment reminders and treatment updates</li>
                <li>Improving our services and patient experience</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">HIPAA Compliance & Data Protection</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                We maintain strict HIPAA compliance standards. Your Protected Health Information (PHI) is:
              </p>
              <ul className="list-disc list-inside text-[#E5E5E5] font-helvetica leading-relaxed space-y-2 ml-4">
                <li>Encrypted during transmission and storage</li>
                <li>Accessible only to licensed healthcare providers involved in your care</li>
                <li>Never sold or shared for marketing purposes</li>
                <li>Stored on secure servers with regular security audits</li>
                <li>Retained only as long as necessary for treatment and legal compliance</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Information Sharing</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                We share your information only when necessary:
              </p>
              <ul className="list-disc list-inside text-[#E5E5E5] font-helvetica leading-relaxed space-y-2 ml-4">
                <li><strong>Healthcare Providers:</strong> Board-certified physicians who review and approve your treatment</li>
                <li><strong>Pharmacies:</strong> FDA-registered pharmacies that dispense your prescriptions</li>
                <li><strong>Labs:</strong> Certified laboratories conducting your diagnostic tests</li>
                <li><strong>Payment Processors:</strong> Secure third-party payment processors (credit card information is never stored)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect rights and safety</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Cookies & Tracking</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                We use cookies to improve your experience and analyze site usage. Cookies help us remember your preferences, secure your session, and optimize our services. You can disable cookies in your browser settings, though some features may not function properly.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Your Rights</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-[#E5E5E5] font-helvetica leading-relaxed space-y-2 ml-4">
                <li>Access your personal and medical information</li>
                <li>Request corrections to inaccurate data</li>
                <li>Request deletion of your data (subject to legal retention requirements)</li>
                <li>Opt out of marketing communications</li>
                <li>Receive a copy of your medical records</li>
              </ul>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mt-4">
                To exercise these rights, contact us at{" "}
                <a href="mailto:info@thepeptidemarket.com" className="text-[#FF6B35] hover:text-[#FF8C42] underline">
                  info@thepeptidemarket.com
                </a>
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Data Retention</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                We retain your medical records and personal information for a minimum of 7 years as required by law. Usage data is retained for shorter periods for analytics purposes. You may request deletion after the required retention period.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Children's Privacy</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect information from minors. If you believe a minor has provided us with information, please contact us immediately.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Policy Updates</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date. We will notify you of significant changes via email. Continued use of our services after changes constitutes acceptance.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Contact Us</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed">
                For questions about this Privacy Policy or to exercise your privacy rights, contact us at:{" "}
                <a href="mailto:info@thepeptidemarket.com" className="text-[#FF6B35] hover:text-[#FF8C42] underline">
                  info@thepeptidemarket.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-colors font-helvetica"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to home
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

