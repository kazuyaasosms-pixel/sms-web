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
      </main>
    </>
  )
}
