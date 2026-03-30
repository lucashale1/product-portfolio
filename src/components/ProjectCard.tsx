"use client";

import {
  Card,
  Column,
  Heading,
  Line,
  Media,
  Row,
  Text,
} from "@once-ui-system/core";
import type { ProjectSkillTag } from "@/types/project.types";
import { ProjectSkillTags } from "@/components/ProjectSkillTags";

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

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  description: string;
  skills: ProjectSkillTag[];
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  description,
  skills,
}) => {
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
      <Row fillWidth s={{ direction: "column" }}>
        <Column flex={6} paddingX="20" paddingTop="20" paddingBottom="20" s={{ style: { paddingBottom: "0" } }}>
          <Media
            src={imageSrc}
            alt={`${title} case study`}
            sizes="(max-width: 960px) 100vw, 60vw"
            fillWidth
            aspectRatio="16 / 10"
            radius="l"
            border="neutral-alpha-weak"
          />
        </Column>

        <Column flex={5} fillWidth paddingX="20" paddingY="l" gap="16" horizontal="start" align="start">
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

          <Heading as="h2" wrap="balance" variant="heading-strong-m">
            {title}
          </Heading>

          {description?.trim() && (
            <Text wrap="balance" onBackground="neutral-weak" variant="body-default-s">
              {description}
            </Text>
          )}

          <Line background="neutral-alpha-medium" />
          <ProjectSkillTags skills={skills} />
        </Column>
      </Row>
    </Card>
  );
};
