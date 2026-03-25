import {
  Heading,
  Text,
  Column,
  Row,
  Schema,
  Meta,
} from "@once-ui-system/core";
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
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
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
          <Column maxWidth="s" horizontal="center" align="center" gap="m">
            <Heading wrap="balance" variant="display-strong-l" paddingBottom="8">
              {home.headline}
            </Heading>

            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
              align="center"
            >
              {home.subline}
            </Text>
          </Column>
        </Row>
      </Column>

      <Column fillWidth gap="l" marginTop="40">
        <Row fillWidth horizontal="center">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            Featured case studies
          </Heading>
        </Row>

        <Projects range={[1, 4]} />
      </Column>
    </Column>
  );
}
