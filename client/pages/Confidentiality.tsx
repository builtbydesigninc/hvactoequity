import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Confidentiality() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      {/* Header */}
      <header className="border-b border-[#222222] px-6 sm:px-8 md:px-12 py-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="flex items-center">
            <img 
              src="/assets/logo.png" 
              alt="HVAC to Equity" 
              className="h-10 sm:h-12 w-auto"
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
            Confidentiality Agreement
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
                HVAC to Equity maintains the highest standards of confidentiality to protect your business information, competitive advantages, and strategic plans. This agreement outlines our commitment to safeguarding your proprietary information.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Our Confidentiality Commitment</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                We understand that your business information is your competitive advantage. We treat all client information with the same level of protection we would expect for our own proprietary data. Every team member and partner signs comprehensive NDAs before accessing any client information.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Protected Information</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                All information shared with HVAC to Equity is considered confidential, including:
              </p>
              <ul className="list-disc list-inside text-[#E5E5E5] font-helvetica leading-relaxed space-y-2 ml-4">
                <li>Financial statements, revenue data, and profitability metrics</li>
                <li>Customer lists, contracts, and pricing strategies</li>
                <li>Operational processes and proprietary systems</li>
                <li>Employee information and organizational structure</li>
                <li>Strategic plans and growth initiatives</li>
                <li>Technology systems and intellectual property</li>
                <li>Vendor relationships and supply chain details</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">How We Protect Your Information</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                We implement multiple layers of protection:
              </p>
              <ul className="list-disc list-inside text-[#E5E5E5] font-helvetica leading-relaxed space-y-3 ml-4">
                <li><strong>Legal Protection:</strong> Comprehensive NDAs with all parties</li>
                <li><strong>Physical Security:</strong> Locked facilities, secure document storage</li>
                <li><strong>Digital Security:</strong> Encrypted communications, secure servers, access controls</li>
                <li><strong>Process Controls:</strong> Need-to-know basis, compartmentalized information</li>
                <li><strong>Team Training:</strong> Regular confidentiality training for all staff</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Permitted Disclosures</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                We will only share your information when:
              </p>
              <ul className="list-disc list-inside text-[#E5E5E5] font-helvetica leading-relaxed space-y-2 ml-4">
                <li><strong>You Authorize It:</strong> Written consent for specific disclosures</li>
                <li><strong>Strategic Introductions:</strong> To pre-qualified buyers/investors (with your explicit approval)</li>
                <li><strong>Professional Services:</strong> To legal/financial advisors under NDA for your benefit</li>
                <li><strong>Legal Requirements:</strong> When compelled by law or court order</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Duration of Confidentiality</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                Our confidentiality obligations continue for 5 years after our engagement ends, or longer if required by law or agreement. Trade secrets and proprietary methodologies remain confidential indefinitely.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Your Rights</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-[#E5E5E5] font-helvetica leading-relaxed space-y-2 ml-4">
                <li>Request return or destruction of confidential materials</li>
                <li>Audit our confidentiality practices</li>
                <li>Specify additional confidentiality requirements</li>
                <li>Receive notice of any potential breaches</li>
                <li>Pursue legal remedies for unauthorized disclosures</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Breach Response</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                In the unlikely event of a confidentiality breach, we will immediately notify you, investigate the incident, take corrective action, and cooperate fully with any legal proceedings. We maintain professional liability insurance to cover potential damages.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Industry Standards</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                We adhere to industry best practices for M&A advisory confidentiality, including Investment Banking standards and Private Equity protocols. Our processes are regularly reviewed and updated to maintain the highest standards.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">Contact</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed">
                For questions about confidentiality or to report concerns, contact:{" "}
                <a href="mailto:info@hvactoequity.com" className="text-[#326ec2] hover:text-[#2958a3] underline">
                  info@hvactoequity.com
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
