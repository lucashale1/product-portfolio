import type { IconName } from "@/resources/icons";

/** Background/border tone for project skill chips (Once UI token suffixes). */
export type ProjectSkillVariant =
  | "neutral"
  | "brand"
  | "accent"
  | "info"
  | "danger"
  | "warning"
  | "success";

/** Skill chip shown on project cards and case study pages; sourced from project MDX frontmatter. */
export type ProjectSkillTag = {
  label: string;
  icon: IconName;
  variant: ProjectSkillVariant;
};
