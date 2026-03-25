"use client";

import {
  Card,
  Column,
  Heading,
  Icon,
  Line,
  Media,
  Row,
  Text,
} from "@once-ui-system/core";
import type { IconName } from "@/resources/icons";

const toDataUri = (svg: string) => `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

const CASE_STUDY_IMAGE_PLACEHOLDER = toDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#0B0B0F" stop-opacity="0.9"/>
        <stop offset="1" stop-color="#161621" stop-opacity="0.9"/>
      </linearGradient>
    </defs>
    <rect width="1600" height="900" fill="url(#g)"/>
    <rect x="80" y="80" width="1440" height="740" rx="24" fill="none" stroke="#2A2A39" stroke-width="4"/>
    <text x="800" y="465" text-anchor="middle" fill="#9AA0B4" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" font-size="56" font-weight="600">
      Case study image
    </text>
    <text x="800" y="535" text-anchor="middle" fill="#6B7280" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" font-size="26" font-weight="400">
      Placeholder (replace later)
    </text>
  </svg>
`);

/** Landscape wordmark from Meritt (bundled locally from app.meritt.io). */
const MERITT_LOGO_SRC = "/images/meritt-logo-darkmode.svg";

type TagVariant = "neutral" | "brand" | "accent" | "info" | "danger" | "warning" | "success";

type SkillTag = {
  key: string;
  label: string;
  icon: IconName;
  variant: TagVariant;
};

const skillTagPool: SkillTag[] = [
  { key: "openai", label: "OpenAI", icon: "openai", variant: "brand" },
  { key: "pinecone", label: "Pinecone", icon: "opensearch", variant: "success" },
  { key: "vector", label: "Vector search", icon: "opensearch", variant: "info" },
  { key: "posthog", label: "PostHog", icon: "posthog", variant: "warning" },
  { key: "ab testing", label: "A/B testing", icon: "googleanalytics", variant: "accent" },
  { key: "a/b", label: "A/B testing", icon: "googleanalytics", variant: "accent" },
  { key: "figma", label: "Figma", icon: "figma", variant: "accent" },
  { key: "api", label: "REST APIs", icon: "swagger", variant: "neutral" },
  { key: "discovery", label: "Discovery", icon: "globe", variant: "success" },
  { key: "experiments", label: "Experimentation", icon: "rocket", variant: "brand" },
  { key: "alignment", label: "Stakeholder alignment", icon: "person", variant: "neutral" },
];

const fallbackTags: SkillTag[] = [
  { key: "fb1", label: "Product strategy", icon: "rocket", variant: "neutral" },
  { key: "fb2", label: "AI delivery", icon: "openai", variant: "brand" },
  { key: "fb3", label: "Experimentation", icon: "rocket", variant: "warning" },
  { key: "fb4", label: "Cross-functional", icon: "person", variant: "info" },
];

function shuffleDeterministic<T>(items: T[], seed: string): T[] {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  }
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.abs(h + i * 17) % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function extractSkillTags(content: string, title: string): SkillTag[] {
  const normalized = content.toLowerCase();
  const picked: SkillTag[] = [];
  const seen = new Set<string>();

  for (const skill of skillTagPool) {
    if (picked.length >= 4) break;
    if (!normalized.includes(skill.key)) continue;
    if (seen.has(skill.label)) continue;
    seen.add(skill.label);
    picked.push(skill);
  }

  if (picked.length < 4) {
    const rest = shuffleDeterministic(
      fallbackTags.filter((f) => !seen.has(f.label)),
      title,
    );
    for (const fb of rest) {
      if (picked.length >= 4) break;
      seen.add(fb.label);
      picked.push(fb);
    }
  }

  return picked.slice(0, 4);
}

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
}) => {
  const tags = extractSkillTags(content || "", title);
  const imageSrc = images?.[0] ?? CASE_STUDY_IMAGE_PLACEHOLDER;

  return (
    <Card
      href={href}
      fillWidth
      radius="l-4"
      border="neutral-alpha-medium"
      background="page"
      transition="micro-medium"
      direction="column"
    >
      <Row fillWidth paddingX="20" paddingY="12" vertical="center">
        <img
          src={MERITT_LOGO_SRC}
          alt="Meritt"
          width={500}
          height={150}
          style={{
            height: "14px",
            width: "auto",
            maxWidth: "min(42vw, 120px)",
            display: "block",
            objectFit: "contain",
          }}
        />
      </Row>

      <Media
        src={imageSrc}
        alt={`${title} case study`}
        sizes="(max-width: 960px) 100vw, 960px"
        fillWidth
        aspectRatio="4 / 3"
        radius="l"
        border="neutral-alpha-weak"
      />

      <Column fillWidth paddingX="20" paddingY="24" gap="8">
        <Heading as="h2" wrap="balance" variant="heading-strong-m">
          {title}
        </Heading>

        {description?.trim() && (
          <Text
            wrap="balance"
            onBackground="neutral-weak"
            variant="body-default-s"
            style={{ fontWeight: "var(--font-weight-light, 300)" }}
          >
            {description}
          </Text>
        )}
      </Column>

      <Line background="neutral-alpha-medium" />

      <Row fillWidth paddingX="20" paddingY="12" gap="8" vertical="center" wrap>
        {tags.map((tag) => (
          <Row
            key={`${tag.key}-${tag.label}`}
            fitWidth
            vertical="center"
            gap="4"
            paddingX="8"
            paddingY="2"
            radius="s"
            background={`${tag.variant}-weak`}
            border={`${tag.variant}-alpha-medium`}
            onBackground={`${tag.variant}-medium`}
          >
            <Icon name={tag.icon} size="xs" />
            <Text variant="body-default-s" style={{ fontWeight: "var(--font-weight-light, 300)" }}>
              {tag.label}
            </Text>
          </Row>
        ))}
      </Row>
    </Card>
  );
};
