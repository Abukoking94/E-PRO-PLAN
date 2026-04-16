import { ArrowRight } from 'lucide-react';

import Button from '../../components/ui/Button';

export default function HeroActions({ primary, secondary }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
      <Button href={primary.href} className="gap-2 sm:w-auto">
        {primary.label}
        <ArrowRight className="h-4 w-4" />
      </Button>
      <Button href={secondary.href} variant="secondary" className="sm:w-auto">
        {secondary.label}
      </Button>
    </div>
  );
}
