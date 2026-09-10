// src/pages/TermsOfServicePage.tsx

import { FileText } from 'lucide-react';
import {
  PolicyLayout,
  PolicySection,
  PolicyList,
  PolicyCallout,
} from '@/components/PolicyLayout';

export function TermsOfServicePage() {
  return (
    <PolicyLayout
      title="Terms of Service"
      subtitle="The rules and conditions for using the KAPOW website and services."
      lastUpdated="September 10, 2026"
      icon={<FileText className="w-8 h-8" />}
    >
      <PolicyCallout>
        <strong>Important:</strong> By accessing or using this website, you agree to be bound
        by these Terms of Service. If you do not agree, please do not use our site.
      </PolicyCallout>

      <PolicySection number="01" title="Acceptance of Terms">
        <p>
          These Terms of Service ("Terms") govern your access to and use of the KAPOW
          website, products, and services. By accessing or using our services, you confirm
          that you are of legal age in your jurisdiction and agree to comply with these
          Terms.
        </p>
      </PolicySection>

      <PolicySection number="02" title="Eligibility">
        <p>
          Our products and website are intended exclusively for adults of legal age in their
          jurisdiction. By using this site, you represent and warrant that:
        </p>
        <PolicyList
          items={[
            'You are of legal age to purchase and use our products in your jurisdiction',
            'You have the legal capacity to enter into a binding agreement',
            'You will not use our services for any unlawful purpose',
          ]}
        />
      </PolicySection>

      <PolicySection number="03" title="Product Information">
        <p>
          We strive to ensure that all product descriptions, images, and specifications on
          our website are accurate. However, we do not warrant that product descriptions or
          other content are completely accurate, complete, or error-free.
        </p>
        <p>
          Our products are non-nicotine and are not intended to diagnose, treat, cure, or
          prevent any disease or condition.
        </p>
      </PolicySection>

      <PolicySection number="04" title="Intellectual Property">
        <p>
          All content on this website — including text, graphics, logos, images, icons,
          code, and software — is the property of KAPOW or its licensors and is protected by
          international copyright, trademark, and other intellectual property laws.
        </p>
        <p>
          You may not reproduce, distribute, modify, or create derivative works of our
          content without our express written permission.
        </p>
      </PolicySection>

      <PolicySection number="05" title="Prohibited Conduct">
        <p>You agree not to:</p>
        <PolicyList
          items={[
            'Use our website for any illegal or unauthorized purpose',
            'Attempt to gain unauthorized access to any part of our systems',
            'Interfere with or disrupt the operation of our services',
            'Submit false, misleading, or fraudulent verification codes',
            'Use automated tools (bots, scrapers) to access our website',
            'Resell our products to minors or in jurisdictions where they are prohibited',
          ]}
        />
      </PolicySection>

      <PolicySection number="06" title="Third-Party Links">
        <p>
          Our website may contain links to third-party websites or services (such as Google
          Drive for download resources). We are not responsible for the content, privacy
          practices, or terms of any third-party sites.
        </p>
      </PolicySection>

      <PolicySection number="07" title="Disclaimer of Warranties">
        <p>
          Our website and services are provided "as is" and "as available" without any
          warranties of any kind, whether express or implied. We disclaim all warranties,
          including merchantability, fitness for a particular purpose, and
          non-infringement.
        </p>
      </PolicySection>

      <PolicySection number="08" title="Limitation of Liability">
        <p>
          To the maximum extent permitted by law, KAPOW shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages arising out of
          or related to your use of our website or products.
        </p>
      </PolicySection>

      <PolicySection number="09" title="Governing Law">
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the
          jurisdiction in which KAPOW is registered, without regard to its conflict of law
          principles.
        </p>
      </PolicySection>

      <PolicySection number="10" title="Changes to Terms">
        <p>
          We reserve the right to modify these Terms at any time. Changes will take effect
          immediately upon posting. Your continued use of our website after changes are
          posted constitutes acceptance of the updated Terms.
        </p>
      </PolicySection>

      <PolicySection number="11" title="Contact">
        <p>
          For questions about these Terms, please contact us at{' '}
          <a href="mailto:legal@kapow.com">legal@kapow.com</a>.
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}