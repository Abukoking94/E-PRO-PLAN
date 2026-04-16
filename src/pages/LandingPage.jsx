import { motion, useReducedMotion } from 'framer-motion';

import AppShell from '../app/AppShell';
import GridBackdrop from '../components/layout/GridBackdrop';
import TopNav from '../components/layout/TopNav';
import {
  heroReveal,
  sectionRevealLeft,
  sectionRevealRight,
} from '../features/motion/motionVariants';
import HeroSection from '../sections/hero/HeroSection';
import LivePulseSection from '../sections/pulse/LivePulseSection';
import TransformationSection from '../sections/transformation/TransformationSection';
import CapabilitiesSection from '../sections/capabilities/CapabilitiesSection';
import StickyWalkthroughSection from '../sections/walkthrough/StickyWalkthroughSection';
import AutomationSection from '../sections/automation/AutomationSection';
import CollaborationSection from '../sections/collaboration/CollaborationSection';
import RoadmapSection from '../sections/roadmap/RoadmapSection';
import AnalyticsSection from '../sections/analytics/AnalyticsSection';
import IntegrationsSection from '../sections/integrations/IntegrationsSection';
import PricingSection from '../sections/pricing/PricingSection';
import FaqSection from '../sections/faq/FaqSection';
import SiteFooter from '../sections/footer/SiteFooter';

const sections = [
  HeroSection,
  LivePulseSection,
  TransformationSection,
  CapabilitiesSection,
  StickyWalkthroughSection,
  AutomationSection,
  CollaborationSection,
  RoadmapSection,
  AnalyticsSection,
  IntegrationsSection,
  PricingSection,
  FaqSection,
];

export default function LandingPage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AppShell>
      <GridBackdrop />
      <TopNav />
      <main className="relative z-10">
        {sections.map((SectionComponent, index) => {
          const variant =
            index === 0 ? heroReveal : index % 2 === 0 ? sectionRevealLeft : sectionRevealRight;

          return (
            <motion.div
              key={SectionComponent.name}
              variants={variant}
              initial={prefersReducedMotion ? false : 'initial'}
              whileInView={prefersReducedMotion ? undefined : 'whileInView'}
              viewport={prefersReducedMotion ? undefined : { once: true, amount: index === 0 ? 0.12 : 0.18 }}
            >
              <SectionComponent />
            </motion.div>
          );
        })}
      </main>
      <SiteFooter />
    </AppShell>
  );
}
