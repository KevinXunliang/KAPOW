// src/pages/HomePage.tsx

import { HeroSection, MissionStrip } from '@/components/home/HeroSection';
import { BannerCarousel } from '@/components/home/BannerCarousel';
import { ProductSpotlightSection } from '@/components/home/ProductSpotlightSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { BrandStorySection } from '@/components/home/BrandStorySection';
import { EcoNarrativeSection } from '@/components/home/EcoNarrativeSection';
import { SceneGallerySection } from '@/components/home/SceneGallerySection'; // ← 新导入
import { BlogTeaserSection } from '@/components/home/BlogTeaserSection';
import { SubscribeSection } from '@/components/home/SubscribeSection'; 

export function HomePage() {
  return (
    <>
      <BannerCarousel />
      <HeroSection />
      <MissionStrip />
      <ProductSpotlightSection />
      <FeaturesSection />
      <BrandStorySection />
      <EcoNarrativeSection />
      <SceneGallerySection />    {/* ← 替换 SpecsSection */}
      <BlogTeaserSection />
      <SubscribeSection />
    </>
  );
}