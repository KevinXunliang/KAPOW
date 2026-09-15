// src/pages/HomePage.tsx

import { HeroSection, MissionStrip } from '@/components/home/HeroSection';
import { BannerCarousel } from '@/components/home/BannerCarousel';
import { FeaturedEventSection } from '@/components/home/FeaturedEventSection';
import { ProductSpotlightSection } from '@/components/home/ProductSpotlightSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import {
  BrandStorySection,
  StatsStrip,
  BrandPillarsSection,
} from '@/components/home/BrandStorySection';
import { QualityCommitmentSection } from '@/components/home/QualityCommitmentSection';
import { SceneGallerySection } from '@/components/home/SceneGallerySection';
import { BlogTeaserSection } from '@/components/home/BlogTeaserSection';
import { SubscribeSection } from '@/components/home/SubscribeSection';

export function HomePage() {
  return (
    <>
      {/* 首屏 */}
      <BannerCarousel />
      <HeroSection />
      <MissionStrip />

      {/* 活动与产品 */}
      <FeaturedEventSection />
      <ProductSpotlightSection />
      <FeaturesSection />

      {/* 品牌故事线 */}
      <BrandStorySection />
      <StatsStrip />
      <BrandPillarsSection />
      <QualityCommitmentSection />

      {/* 生活场景与内容 */}
      <SceneGallerySection />
      <BlogTeaserSection />
      <SubscribeSection />
    </>
  );
}