export const faq = [
  {
    question: 'Is this project frontend-only?',
    answer:
      'Yes. The project is intentionally frontend-only, and the live operational sections use public GitHub REST endpoints instead of a custom backend.',
  },
  {
    question: 'Why use GitHub as the live API?',
    answer:
      'GitHub is a strong fit for the product-management narrative because public repositories expose issues, pull requests, commits, contributors, and releases that can be translated into believable delivery signals.',
  },
  {
    question: 'What parts are live and what parts are product storytelling?',
    answer:
      'The live pulse, roadmap, release stream, and analytics panels are driven by GitHub data. The rest of the page is deliberate product storytelling, interface design, and information architecture.',
  },
  {
    question: 'Can this structure scale into a full product later?',
    answer:
      'Yes. The app is split into sections, reusable UI primitives, chart components, content files, and a dedicated GitHub feature layer, so it can grow into deeper pages or authenticated product flows later.',
  },
];
