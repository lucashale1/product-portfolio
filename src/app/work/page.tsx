import { Column, Meta, Schema, Tag, Text } from "@once-ui-system/core";
import { PageShell, PageHeroTitle, PageHeroLead } from "@/components";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <PageShell>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="8">
        <PageHeroTitle align="center">Case Studies</PageHeroTitle>
        <PageHeroLead align="center">
          Strategy through delivery: AI + data-first decisions, rigorous discovery, and measurable outcomes across the full product lifecycle.
        </PageHeroLead>
        <Tag size="l" style={{ marginTop: "var(--static-space-16)" }}>More coming soon!</Tag>
      </Column>
      <Projects />
    </PageShell>
  );
}
