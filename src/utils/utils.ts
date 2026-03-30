import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { isValidIconName } from "@/resources/icons";
import type {
  ProjectSkillTag,
  ProjectSkillVariant,
} from "@/types/project.types";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  subtitle?: string;
  publishedAt: string;
  summary: string;
  hidden?: boolean;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
  skills: ProjectSkillTag[];
};

const SKILL_VARIANTS: ProjectSkillVariant[] = [
  "neutral",
  "brand",
  "accent",
  "info",
  "danger",
  "warning",
  "success",
];

function isSkillVariant(v: string): v is ProjectSkillVariant {
  return (SKILL_VARIANTS as readonly string[]).includes(v);
}

function normalizeSkills(raw: unknown): ProjectSkillTag[] {
  if (!Array.isArray(raw)) return [];

  const out: ProjectSkillTag[] = [];
  for (const item of raw) {
    if (!item || typeof item !== "object") continue;
    const o = item as Record<string, unknown>;
    const label = typeof o.label === "string" ? o.label.trim() : "";
    if (!label) continue;

    const iconStr = typeof o.icon === "string" ? o.icon : "";
    const icon = isValidIconName(iconStr) ? iconStr : "globe";

    const variantStr = typeof o.variant === "string" ? o.variant : "neutral";
    const variant = isSkillVariant(variantStr) ? variantStr : "neutral";

    out.push({ label, icon, variant });
  }
  return out;
}

import { notFound } from "next/navigation";

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    notFound();
  }

  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || "",
    subtitle: data.subtitle || "",
    publishedAt: data.publishedAt,
    summary: data.summary || "",
    hidden: Boolean(data.hidden),
    image: data.image || "",
    images: data.images || [],
    tag: data.tag || [],
    team: data.team || [],
    link: data.link || "",
    skills: normalizeSkills(data.skills),
  };

  return { metadata, content };
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(customPath = ["", "", "", ""]) {
  const postsDir = path.join(process.cwd(), ...customPath);
  return getMDXData(postsDir);
}
