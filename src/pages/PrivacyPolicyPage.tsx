// src/pages/PrivacyPolicyPage.tsx

import { ShieldCheck } from 'lucide-react';
import {
  PolicyLayout,
  PolicySection,
  PolicyList,
  PolicyCallout,
} from '@/components/PolicyLayout';

export function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      subtitle="How KAPOW collects, uses, and protects your personal information."
      lastUpdated="September 15, 2026"
      icon={<ShieldCheck className="w-8 h-8" />}
    >
      <PolicyCallout>
        <strong>Summary:</strong> We collect minimal data, never sell your information, and
        only use what you provide to deliver our services. You can request deletion of your
        data at any time.
      </PolicyCallout>

      <PolicySection number="01" title="Introduction">
        <p>
          KAPOW ("we," "our," or "us") is committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, disclose, and safeguard your information when
          you visit our website or interact with our products and services.
        </p>
        <p>
          By using our website, you consent to the practices described in this policy. If you
          do not agree with the terms of this policy, please do not access the site.
        </p>
      </PolicySection>

      <PolicySection number="02" title="Information We Collect">
        <p>We may collect the following types of information:</p>
        <PolicyList
          items={[
            <>
              <strong>Contact information</strong> — name and email address you provide
              when subscribing to our newsletter or contacting support.
            </>,
            <>
              <strong>Product verification data</strong> — verification codes you submit
              through our Verification page, along with verification timestamps.
            </>,
            <>
              <strong>Usage data</strong> — anonymized analytics such as pages visited,
              browser type, device type, and general geographic region.
            </>,
            <>
              <strong>Cookies</strong> — small data files used to enhance your experience
              and remember your preferences.
            </>,
          ]}
        />
      </PolicySection>

      <PolicySection number="03" title="How We Use Your Information">
        <p>Your information is used exclusively for the following purposes:</p>
        <PolicyList
          items={[
            'Responding to your inquiries and support requests',
            'Verifying product authenticity and tracking verification history',
            'Sending occasional newsletters or product updates (only if you have opted in)',
            'Improving our website, products, and services',
            'Complying with legal obligations and preventing fraud',
          ]}
        />
      </PolicySection>

      <PolicySection number="04" title="Data Sharing and Disclosure">
        <p>
          <strong>We never sell your personal information.</strong> We may share your data
          only in the following limited circumstances:
        </p>
        <PolicyList
          items={[
            'With trusted service providers who assist in operating our website (bound by confidentiality agreements)',
            'When required by law, court order, or legal process',
            'To protect the rights, property, or safety of KAPOW, our customers, or others',
            'In connection with a business transfer, merger, or acquisition',
          ]}
        />
      </PolicySection>

      <PolicySection number="05" title="Data Security">
        <p>
          We implement industry-standard security measures including encryption in transit
          (HTTPS), secure storage, and access controls to protect your personal information.
          However, no method of transmission over the internet is 100% secure, and we cannot
          guarantee absolute security.
        </p>
      </PolicySection>

      <PolicySection number="06" title="Your Rights">
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <PolicyList
          items={[
            'Access the personal information we hold about you',
            'Request correction of inaccurate information',
            'Request deletion of your personal information',
            'Opt out of marketing communications at any time',
            'Object to certain processing activities',
          ]}
        />
        <p>
          To exercise any of these rights, please contact us at{' '}
          <a href="mailto:privacy@kapow.com">privacy@kapow.com</a>.
        </p>
      </PolicySection>

      <PolicySection number="07" title="Age Restriction">
        <p>
          Our products and website are intended for adults of legal age only. We do not
          knowingly collect information from anyone under the legal age in their
          jurisdiction. If we become aware that we have collected such information, we will
          delete it promptly.
        </p>
      </PolicySection>

      <PolicySection number="08" title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. The "Last updated" date at
          the top of this page indicates when it was last revised. Material changes will be
          communicated via email or a prominent notice on our website.
        </p>
      </PolicySection>

      <PolicySection number="09" title="Contact Us">
        <p>
          If you have questions or concerns about this Privacy Policy, please contact us:
        </p>
        <PolicyList
          items={[
            <>Email: <a href="mailto:privacy@kapow.com">privacy@kapow.com</a></>,
            <>Support: <a href="mailto:hello@kapow.com">hello@kapow.com</a></>,
          ]}
        />
      </PolicySection>
    </PolicyLayout>
  );
}