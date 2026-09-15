// src/pages/AgePolicyPage.tsx

import { ShieldAlert } from 'lucide-react';
import {
  PolicyLayout,
  PolicySection,
  PolicyList,
  PolicyCallout,
} from '@/components/PolicyLayout';

export function AgePolicyPage() {
  return (
    <PolicyLayout
      title="Age Policy & Marketing Standards"
      subtitle="Our commitment to responsible marketing and age-gated access."
      lastUpdated="September 15, 2026"
      icon={<ShieldAlert className="w-8 h-8" />}
    >
      <PolicyCallout variant="warning">
        <strong>Strictly 21+</strong> — KAPOW products are intended for adults of legal age
        only. We do not market to, sell to, or engage with minors under any circumstance.
      </PolicyCallout>

      <PolicySection number="01" title="Age Restriction">
        <p>
          All KAPOW products, this website, and our marketing communications are strictly
          intended for adults aged 21 or older, or of legal purchasing age in your
          jurisdiction, whichever is higher.
        </p>
        <p>
          By accessing this website, you confirm that you meet the age requirement in your
          jurisdiction. If you do not, you must exit immediately.
        </p>
      </PolicySection>

      <PolicySection number="02" title="Age Verification">
        <p>We employ the following measures to prevent underage access:</p>
        <PolicyList
          items={[
            'A mandatory age gate on first visit to our website',
            'Age verification at point of purchase through our retail partners',
            'Strict compliance with all applicable age-verification laws',
            'Ongoing review of our verification practices',
          ]}
        />
      </PolicySection>

      <PolicySection number="03" title="Marketing Standards">
        <p>
          KAPOW is committed to responsible marketing practices. All of our marketing
          materials adhere to the following principles:
        </p>
        <PolicyList
          items={[
            <>
              <strong>No youth targeting</strong> — our advertising, social media, and
              promotional materials never target, feature, or appeal to minors.
            </>,
            <>
              <strong>No health claims</strong> — we do not claim that our products are
              healthy, safe, or a cessation aid.
            </>,
            <>
              <strong>No misleading imagery</strong> — we never use imagery that suggests
              youth appeal or celebrity endorsement.
            </>,
            <>
              <strong>Clear age disclosure</strong> — all marketing materials include
              age-restriction notices.
            </>,
            <>
              <strong>Responsible placement</strong> — we avoid advertising in media
              channels primarily consumed by minors.
            </>,
          ]}
        />
      </PolicySection>

      <PolicySection number="04" title="Retail Partner Requirements">
        <p>All authorized KAPOW retail partners must:</p>
        <PolicyList
          items={[
            'Verify customer age before completing any sale',
            'Display our age-restriction signage prominently',
            'Refuse sale to anyone who cannot prove they meet age requirements',
            'Comply with all local, state, and federal regulations',
            'Participate in our responsible retailing training program',
          ]}
        />
      </PolicySection>

      <PolicySection number="05" title="Online Purchase Restrictions">
        <p>
          For any direct online purchases, we require multi-step age verification. Orders
          that fail age verification will be cancelled and refunded. We reserve the right to
          request additional documentation at any time.
        </p>
      </PolicySection>

      <PolicySection number="06" title="Reporting Concerns">
        <p>
          If you believe a minor has accessed our website or products, or if you have
          observed any violation of these marketing standards, please report it
          immediately:
        </p>
        <PolicyList
          items={[
            <>Email: <a href="mailto:compliance@kapow.com">compliance@kapow.com</a></>,
            <>All reports are treated confidentially.</>,
          ]}
        />
      </PolicySection>

      <PolicySection number="07" title="Regulatory Compliance">
        <p>
          KAPOW operates in full compliance with applicable regulations, including (where
          applicable):
        </p>
        <PolicyList
          items={[
            'FDA regulations on vaping products',
            'State-level age-verification requirements',
            'Federal Trade Commission (FTC) advertising guidelines',
            'Local advertising and retail restrictions',
          ]}
        />
      </PolicySection>

      <PolicySection number="08" title="Consumer Responsibility">
        <p>
          KAPOW products are designed for adults of legal age who choose to use them
          responsibly. We expect our customers to follow all applicable laws and to
          keep our products out of the reach of minors and pets.
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}