import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Hipaa() {
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
            HIPAA Compliance Notice
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#9CA3AF] font-helvetica text-sm mb-12"
          >
            Effective Date: January 1, 2025
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
                The Peptide Market is committed to maintaining the privacy and security of your Protected Health Information (PHI) in full compliance with the Health Insurance Portability and Accountability Act (HIPAA) and related federal regulations.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">What is HIPAA?</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                HIPAA is a federal law that protects your medical information from being disclosed without your consent or knowledge. It establishes national standards for the security and privacy of health information, ensuring your medical data remains confidential.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Your Protected Health Information (PHI)</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                PHI includes any information about your health status, medical care, or payment for healthcare that can identify you. This includes:
              </p>
              <ul className="list-disc list-inside text-[#E5E5E5] font-helvetica leading-relaxed space-y-2 ml-4">
                <li>Medical history, diagnoses, and treatment records</li>
                <li>Lab results and test data</li>
                <li>Prescription and medication information</li>
                <li>Physician notes and clinical assessments</li>
                <li>Billing and payment records</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">How We Protect Your PHI</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                The Peptide Market implements comprehensive safeguards:
              </p>
              <ul className="list-disc list-inside text-[#E5E5E5] font-helvetica leading-relaxed space-y-3 ml-4">
                <li><strong>Technical Safeguards:</strong> End-to-end encryption, secure servers, firewalls, and regular security audits</li>
                <li><strong>Physical Safeguards:</strong> Secure facilities with restricted access and encrypted storage devices</li>
                <li><strong>Administrative Safeguards:</strong> Staff training, privacy policies, and access controls limiting PHI to authorized personnel only</li>
                <li><strong>Business Associate Agreements:</strong> All third parties (labs, pharmacies) sign HIPAA-compliant agreements</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">When We May Disclose Your PHI</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                We only disclose your health information when:
              </p>
              <ul className="list-disc list-inside text-[#E5E5E5] font-helvetica leading-relaxed space-y-2 ml-4">
                <li><strong>You Authorize It:</strong> Written consent for specific disclosures</li>
                <li><strong>Treatment:</strong> Sharing with physicians, pharmacies, and labs involved in your care</li>
                <li><strong>Payment:</strong> Processing insurance claims or billing (if applicable)</li>
                <li><strong>Legal Requirements:</strong> Court orders, law enforcement requests, or public health reporting</li>
                <li><strong>Safety:</strong> Preventing serious threats to health or safety when legally required</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Your Rights Under HIPAA</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-[#E5E5E5] font-helvetica leading-relaxed space-y-2 ml-4">
                <li><strong>Access:</strong> Request copies of your medical records</li>
                <li><strong>Amendment:</strong> Request corrections to inaccurate health information</li>
                <li><strong>Accounting:</strong> Receive a list of disclosures made of your PHI</li>
                <li><strong>Restriction:</strong> Request limits on uses and disclosures of your PHI</li>
                <li><strong>Confidential Communication:</strong> Request communications through alternative means or locations</li>
                <li><strong>Notice:</strong> Receive this notice of our privacy practices</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Breach Notification</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                In the unlikely event of a breach compromising your PHI, we will notify you promptly as required by law, typically within 60 days of discovery. Notification will include details of the breach, steps we're taking, and actions you can take to protect yourself.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Data Retention</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                We retain medical records for a minimum of 7 years as required by federal and state laws. After the retention period, records are securely destroyed using approved methods that render PHI unreadable and irretrievable.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Privacy Officer</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                Our designated Privacy Officer oversees HIPAA compliance and handles privacy-related inquiries. To exercise your rights or file a privacy complaint, contact:
              </p>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed ml-4">
                <strong>Privacy Officer</strong><br />
                The Peptide Market<br />
                Email: <a href="mailto:info@thepeptidemarket.com" className="text-[#FF6B35] hover:text-[#FF8C42] underline">info@thepeptidemarket.com</a>
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Filing a Complaint</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                If you believe your privacy rights have been violated, you may file a complaint with us or with the U.S. Department of Health and Human Services Office for Civil Rights. You will not be retaliated against for filing a complaint.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Updates to This Notice</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                We reserve the right to revise this HIPAA Notice. Changes will be posted on our website and made available upon request. The effective date indicates when the current version was last updated.
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

