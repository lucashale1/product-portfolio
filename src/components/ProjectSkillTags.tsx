import { Icon, Row, Text } from "@once-ui-system/core";
import type { ProjectSkillTag } from "@/types/project.types";

type ProjectSkillTagsProps = {
  skills: ProjectSkillTag[];
  /** Match project card footer padding when true */
  padded?: boolean;
  fillWidth?: boolean;
  horizontal?: "start" | "center" | "end" | "between";
};

export function ProjectSkillTags({
  skills,
  padded,
  fillWidth = true,
  horizontal,
}: ProjectSkillTagsProps) {
  if (!skills.length) return null;

  return (
    <Row
      fillWidth={fillWidth}
      gap="8"
      vertical="center"
      wrap
      {...(horizontal ? { horizontal } : {})}
      {...(padded ? { paddingX: "20", paddingY: "12" } : {})}
    >
      {skills.map((tag, index) => (
        <Row
          key={`${index}-${tag.label}-${tag.icon}`}
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
          <Text variant="body-default-s">{tag.label}</Text>
        </Row>
      ))}
    </Row>
  );
}
