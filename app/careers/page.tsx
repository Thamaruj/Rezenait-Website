import { client } from '@/sanity/lib/client'
import { JOB_QUERY } from '@/sanity/lib/queries'
import CareersPage from './careersContent'


export default async function CareersPageRoute() {
  const jobs = await client.fetch(JOB_QUERY)
  return <CareersPage jobs={jobs} />
}