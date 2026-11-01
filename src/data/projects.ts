export type Project = {
  number: string
  category: string
  title: string
  summary: string
  stack: string[]
  outcome: string
  detail: string
}

// Review every statement and replace placeholders with details you are authorised to share.
export const projects: Project[] = [
  {
    number: '01',
    category: 'DOCUMENT AUTOMATION',
    title: 'Document classification & extraction',
    summary: 'An enterprise solution bringing document classification and extraction into a streamlined business workflow.',
    stack: ['Power Platform', 'Power Automate', 'Dataverse', 'Integrations'],
    outcome: 'Up to 95% less manual effort',
    detail: 'Contributed to a solution reported to reduce manual effort by up to 95% and support a user population of 100K+. Add your exact responsibilities, architecture and verified technology details before publishing.',
  },
  {
    number: '02',
    category: 'ENTERPRISE APPLICATIONS',
    title: 'Credit & lending workflows',
    summary: 'Enterprise application development supporting operational and frontline credit-and-lending processes.',
    stack: ['Canvas Apps', 'Dataverse', 'Power Automate', 'Power Fx'],
    outcome: 'Complex business workflows',
    detail: 'Describe the application journeys you personally delivered, the Dataverse relationships and business rules involved, and how you handled status synchronisation, security and delegation.',
  },
  {
    number: '03',
    category: 'SYSTEM INTEGRATION',
    title: 'Dataverse integration workflows',
    summary: 'Workflow orchestration and data transformation connecting business applications and enterprise services.',
    stack: ['Power Automate', 'REST APIs', 'JSON', 'Dataverse'],
    outcome: 'Reliable data exchange',
    detail: 'Add an anonymised example of message processing, JSON transformation, record matching, trigger design and error handling. Include only integrations you personally worked on.',
  },
]
