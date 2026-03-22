import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { CaseStudy } from '@/types/case-study'

const CASE_STUDIES_DIR = path.join(process.cwd(), 'src/content/case-studies')

export function getCaseStudies(): CaseStudy[] {
  const files = fs.readdirSync(CASE_STUDIES_DIR).filter(f => f.endsWith('.mdx'))
  return files
    .map(file => {
      const raw = fs.readFileSync(path.join(CASE_STUDIES_DIR, file), 'utf-8')
      const { data } = matter(raw)
      return data as CaseStudy
    })
    .sort((a, b) => a.order - b.order)
}

export function getCaseStudyBySlug(slug: string): CaseStudy {
  const file = path.join(CASE_STUDIES_DIR, `${slug}.mdx`)
  const raw = fs.readFileSync(file, 'utf-8')
  const { data } = matter(raw)
  return data as CaseStudy
}

export function getAllCaseStudySlugs(): string[] {
  return getCaseStudies().map(cs => cs.slug)
}
