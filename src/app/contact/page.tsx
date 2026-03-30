import { Avatar, Button, Column, Meta, Row, Schema, Text } from "@once-ui-system/core";
import { PageShell, PageHeroTitle } from "@/components";
import { about, baseURL, contact, person, social } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: contact.title,
    description: contact.description,
    baseURL: baseURL,
    path: contact.path,
    image: `/api/og/generate?title=${encodeURIComponent(contact.title)}`,
  });
}

export default function Contact() {
  const email = social.find((item) => item.name === "Email")?.link ?? `mailto:${person.email}`;
  const linkedIn = social.find((item) => item.name === "LinkedIn")?.link ?? "https://www.linkedin.com/in/lucas-hale/";

  return (
    <PageShell horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={contact.title}
        description={contact.description}
        path={contact.path}
        image={`/api/og/generate?title=${encodeURIComponent(contact.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column maxWidth="s" gap="16" horizontal="center" align="center">
        <Avatar src={person.avatar} size="xl" />
        <PageHeroTitle>Contact Lucas</PageHeroTitle>
      </Column>

      <Row fillWidth horizontal="center" gap="12" s={{ direction: "column" }}>
        <Button variant="secondary" href={email} size="l" suffixIcon="arrowUpRightFromSquare" fillWidth={false}>
          Email
        </Button>
        <Button variant="secondary" href={linkedIn} size="l" suffixIcon="arrowUpRightFromSquare" fillWidth={false}>
          LinkedIn
        </Button>
      </Row>

      <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
        If you’re hiring for Product Management roles, I’m especially interested in teams that value data, experimentation, and practical UX.
      </Text>
    </PageShell>
  );
}
