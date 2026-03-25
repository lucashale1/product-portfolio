import {
  Card,
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Grid,
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
  const highlights = [
    {
      metric: "0→1 to 8,000+ MAU",
      label: "Defined product vision + roadmap through continuous discovery and quarterly buy-in.",
    },
    {
      metric: "AI Video Coach: +20%",
      label: "Improved interview acceptance rates; achieved 92% positive candidate feedback.",
    },
    {
      metric: "Activation: 30%→45%",
      label: "Reduced drop-off using PostHog funnel + behavioural data and structured A/B tests (10,000+ candidates).",
    },
    {
      metric: "Search: 3m+ points, <200ms",
      label: "Shipped semantic matching using embeddings (OpenAI) + Pinecone with cost-aware delivery.",
    },
  ] as const;

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
            {home.featured.display && (
              <RevealFx
                fillWidth
                horizontal="center"
                paddingTop="16"
                paddingBottom="8"
                paddingLeft="12"
              >
                <Badge
                  background="brand-alpha-weak"
                  paddingX="12"
                  paddingY="4"
                  onBackground="neutral-strong"
                  textVariant="label-default-s"
                  arrow={false}
                  href={home.featured.href}
                >
                  <Row paddingY="2">{home.featured.title}</Row>
                </Badge>
              </RevealFx>
            )}

            <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="8">
              <Heading wrap="balance" variant="display-strong-l">
                {home.headline}
              </Heading>
            </RevealFx>

            <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="8">
              <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
                {home.subline}
              </Text>
            </RevealFx>

            <Row gap="12" wrap s={{ direction: "column" }} horizontal="center" paddingTop="8">
              <Button
                href="/work"
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                View case studies
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                Contact
              </Button>
            </Row>
          </Column>

          <Column horizontal="center" align="center" gap="m" maxWidth="xs">
            <Avatar src={person.avatar} size="xl" />
            <Text variant="heading-default-xs" onBackground="neutral-weak" align="center">
              Product Manager & co-founder at Meritt
            </Text>
          </Column>
        </Row>
      </Column>

      <Column fillWidth gap="l" marginTop="16">
        <Row fillWidth horizontal="center">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            Highlights (metric-driven)
          </Heading>
        </Row>

        <Grid columns="2" s={{ columns: 1 }} fillWidth gap="16">
          {highlights.map((h) => (
            <Card
              key={h.metric}
              fillWidth
              border="neutral-alpha-weak"
              background="surface"
              padding="l"
              radius="l"
              transition="micro-medium"
            >
              <Heading variant="heading-strong-l" wrap="balance">
                {h.metric}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak" marginTop="8">
                {h.label}
              </Text>
            </Card>
          ))}
        </Grid>
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
