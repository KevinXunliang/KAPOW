// src/pages/WarrantyPolicyPage.tsx

import { ShieldCheck } from 'lucide-react';
import {
  PolicyLayout,
  PolicySection,
  PolicyList,
  PolicyCallout,
} from '@/components/PolicyLayout';

export function WarrantyPolicyPage() {
  return (
    <PolicyLayout
      title="Warranty Policy"
      subtitle="Our commitment to quality — what's covered and how to claim."
      lastUpdated="September 10, 2026"
      icon={<ShieldCheck className="w-8 h-8" />}
    >
      <PolicyCallout>
        <strong>Coverage summary:</strong> Every KAPOW device is covered for 30 days from
        date of purchase against manufacturing defects. Contact us for a fast resolution.
      </PolicyCallout>

      <PolicySection number="01" title="Warranty Coverage">
        <p>
          KAPOW warrants that all KAPOW-branded devices are free from manufacturing defects
          in materials and workmanship under normal use for a period of{' '}
          <strong>30 days from the date of purchase</strong>.
        </p>
        <p>
          This warranty applies to the original purchaser only and is non-transferable.
        </p>
      </PolicySection>

      <PolicySection number="02" title="What's Covered">
        <p>This warranty covers:</p>
        <PolicyList
          items={[
            'Battery failures (device will not charge, hold charge, or power on)',
            'Heating element failures (device produces no vapor under normal use)',
            'Charging port defects (Type-C port malfunction not caused by misuse)',
            'Button or airflow mechanism failures',
            'Structural defects present at time of purchase',
          ]}
        />
      </PolicySection>

      <PolicySection number="03" title="What's Not Covered">
        <p>This warranty does <strong>not</strong> cover:</p>
        <PolicyList
          items={[
            'Normal wear and tear including gradual decline in battery life',
            'Damage caused by misuse, dropping, crushing, or water exposure',
            'Devices purchased from unauthorized resellers',
            'Devices with removed, altered, or missing serial numbers',
            'Consumable components (e-liquid usage, coil degradation over time)',
            'Cosmetic damage that does not affect functionality',
            'Devices used with non-KAPOW chargers or accessories',
          ]}
        />
      </PolicySection>

      <PolicySection number="04" title="How to File a Claim">
        <p>
          To initiate a warranty claim, please complete the following steps:
        </p>
        <PolicyList
          items={[
            <>
              <strong>Step 1:</strong> Contact us at{' '}
              <a href="mailto:support@kapow.com">support@kapow.com</a> within 30 days of
              purchase.
            </>,
            <>
              <strong>Step 2:</strong> Provide your proof of purchase (receipt or order
              confirmation).
            </>,
            <>
              <strong>Step 3:</strong> Provide a description of the defect with photos or
              a short video if possible.
            </>,
            <>
              <strong>Step 4:</strong> Provide the verification code from your packaging
              so we can validate the product.
            </>,
            <>
              <strong>Step 5:</strong> Our team will review your claim within 3 business
              days and provide resolution instructions.
            </>,
          ]}
        />
      </PolicySection>

      <PolicySection number="05" title="Resolution Options">
        <p>
          Based on our assessment, we will offer one of the following resolutions at our
          discretion:
        </p>
        <PolicyList
          items={[
            'Replacement of the defective device with the same model',
            'Replacement with an equivalent model (if original is unavailable)',
            'Store credit for the purchase value',
            'Refund of the purchase price (in limited circumstances)',
          ]}
        />
      </PolicySection>

      <PolicySection number="06" title="Shipping Costs">
        <p>
          If your claim is approved within the warranty period, KAPOW will cover the cost
          of return shipping. Instructions for returning the defective product will be
          provided by our support team.
        </p>
        <p>
          For claims that fall outside warranty coverage, the customer is responsible for
          all shipping costs.
        </p>
      </PolicySection>

      <PolicySection number="07" title="Processing Time">
        <p>
          Once we receive your returned product, please allow 5–10 business days for
          inspection and processing. You will receive email updates throughout the process.
        </p>
      </PolicySection>

      <PolicySection number="08" title="Extended Considerations">
        <p>
          If you purchased your KAPOW device from one of our authorized retail partners,
          please note that the retailer's return policy may apply in addition to this
          warranty. We encourage you to first contact the retailer for the fastest
          resolution.
        </p>
      </PolicySection>

      <PolicySection number="09" title="Limitation of Warranty">
        <p>
          This warranty is the exclusive warranty provided by KAPOW. To the fullest extent
          permitted by law, all other warranties — express or implied — are disclaimed,
          including merchantability and fitness for a particular purpose.
        </p>
      </PolicySection>

      <PolicySection number="10" title="Contact Warranty Support">
        <p>For all warranty inquiries, please contact us:</p>
        <PolicyList
          items={[
            <>Email: <a href="mailto:support@kapow.com">support@kapow.com</a></>,
            <>Response time: Within 1–2 business days</>,
          ]}
        />
      </PolicySection>
    </PolicyLayout>
  );
}