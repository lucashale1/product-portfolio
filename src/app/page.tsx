import {
  Avatar,
  Button,
  Column,
  Row,
  Schema,
  Meta,
} from "@once-ui-system/core";
import { PageShell, PageHeroTitle, PageHeroLead, SectionTitle } from "@/components";
import { home, person, about, baseURL } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <PageShell>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Row
          fillWidth
          horizontal="center"
          gap="24"
          align="center"
          s={{ direction: "column" }}
        >
          <Column maxWidth="m" horizontal="center" align="center" gap="m" paddingX="24">
            <PageHeroTitle>{home.headline}</PageHeroTitle>

            <PageHeroLead align="center">{home.subline}</PageHeroLead>

            <Row horizontal="center" marginTop="24">
              <Button
                id="about"
                data-border="rounded"
                href={about.path}
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                <Row gap="8" vertical="center" paddingRight="4">
                  {about.avatar.display && (
                    <Avatar
                      marginRight="8"
                      style={{ marginLeft: "-0.75rem" }}
                      src={person.avatar}
                      size="m"
                    />
                  )}
                  {about.title}
                </Row>
              </Button>
            </Row>
          </Column>
        </Row>
      </Column>

      <Column fillWidth gap="l">
        <Row fillWidth horizontal="center">
          <SectionTitle>Featured work</SectionTitle>
        </Row>

        <Projects range={[1, 4]} />
      </Column>
    </PageShell>
  );
}
