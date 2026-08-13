export type Experience = {
  company: string
  role: string
  logo?: string
  logoAlt?: string
  period?: string
  description: string
}

export const experiences: Experience[] = [
  {
    company: 'Acuity',
    role: 'Product Designer',
    logo: '/images/acuity-logo.png',
    logoAlt: 'Acuity logo',
    description:
      'Acuity is data intelligence for the medical device industry. I led 0→1 design for agentic experiences and built Acuity\u2019s first user research practice from the ground up.',
  },
]
