import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ScrollMessage } from '@/components/scroll-message'
import { ProblemSection } from '@/components/problem-section'
import { SolutionSection } from '@/components/solution-section'
import { ProductSection } from '@/components/product-section'
import { FeatureSection } from '@/components/feature-section'
import { FieldMobileSection } from '@/components/field-mobile-section'
import { CaseStudySection } from '@/components/case-study-section'
import { NumbersSection } from '@/components/numbers-section'
import { WhySmsSection } from '@/components/why-sms-section'
import { NewsSection } from '@/components/news-section'
import { ColumnSection } from '@/components/column-section'
import { AboutSmsSection } from '@/components/about-sms-section'
import { FaqSection } from '@/components/faq-section'
import { FinalCtaSection } from '@/components/final-cta-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ScrollMessage />
        <ProblemSection />
        <SolutionSection />
        <ProductSection />
        <FeatureSection />
        <FieldMobileSection />
        <CaseStudySection />
        <NumbersSection />
        <WhySmsSection />
        <NewsSection />
        <ColumnSection />
        <AboutSmsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
