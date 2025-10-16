import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Terms() {
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
            Terms & Conditions
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
            className="prose prose-invert prose-lg max-w-none"
          >
            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                The Peptide Market ("We," "Us," "Our," or "Company") provides premium peptide solutions, telemedicine services, and related healthcare products. By accessing our website or using our services, you ("You" or "Your") agree to these Terms and Conditions. The Peptide Market is a Limited Liability Company registered in the United States.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">2. Services</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                We provide access to peptide products, hormone therapy consultations, health assessments, and ongoing clinical support. All treatments require physician approval and are dispensed through FDA-registered pharmacies. Services include:
              </p>
              <ul className="list-disc list-inside text-[#E5E5E5] font-helvetica leading-relaxed space-y-2 ml-4">
                <li>Injectable peptides and TRT protocols</li>
                <li>Oral and topical formulations</li>
                <li>Board-certified physician consultations</li>
                <li>Lab optimization and dosage adjustments</li>
                <li>Discreet shipping and ongoing support</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">3. Patient Obligations</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                You agree to provide accurate, complete, and truthful medical information during your health assessment. You are responsible for:
              </p>
              <ul className="list-disc list-inside text-[#E5E5E5] font-helvetica leading-relaxed space-y-2 ml-4">
                <li>Completing health questionnaires honestly and thoroughly</li>
                <li>Following physician-prescribed protocols and dosages</li>
                <li>Reporting any adverse reactions or side effects immediately</li>
                <li>Maintaining regular communication with your assigned clinician</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">4. Payments & Refunds</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                All fees are outlined during your consultation. We offer transparent pricing with no hidden membership fees. Consultation fees are $0. Product pricing varies by treatment plan. Payments are processed securely and are generally non-refundable once products have been dispensed, except where required by law or in cases of product defects.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">5. Medical Disclaimer</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                Our services are not intended to diagnose, treat, cure, or prevent any disease. All treatments require approval from board-certified physicians. Results may vary. You acknowledge that peptide therapy carries potential risks and side effects, which will be discussed during your consultation. Always consult with healthcare professionals before starting any new treatment.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">6. Limitation of Liability</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                The Peptide Market's total liability is limited to the fees paid by you in the preceding 90 days. We are not liable for indirect, consequential, or punitive damages, including loss of profits or health complications beyond our reasonable control. We do not guarantee specific health outcomes or results.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">7. Privacy & Confidentiality</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                Your health information is protected under HIPAA regulations. We maintain strict confidentiality protocols and only share information with licensed healthcare providers involved in your care, FDA-registered pharmacies fulfilling prescriptions, and as required by law. See our <Link to="/privacy" className="text-[#FF6B35] hover:text-[#FF8C42] underline">Privacy Policy</Link> for details.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">8. Termination</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                You may discontinue services at any time with 30 days' written notice. We reserve the right to terminate services for non-payment, provision of false medical information, or violation of these terms.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">9. Governing Law</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed mb-4">
                This Agreement is governed by the laws of the United States. Disputes are subject to the exclusive jurisdiction of United States courts. If any provision is found invalid, the remaining provisions remain in full force.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <h2 className="text-2xl font-helvetica font-bold text-white mb-4">10. Contact</h2>
              <p className="text-[#E5E5E5] font-helvetica leading-relaxed">
                For questions regarding these Terms & Conditions, contact us at:{" "}
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

