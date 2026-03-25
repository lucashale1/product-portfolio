import { Avatar, Button, Column, Heading, Meta, Row, Schema, Text } from "@once-ui-system/core";
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
    <Column maxWidth="m" paddingTop="24" paddingBottom="64" horizontal="center" gap="24">
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
        <Heading variant="display-strong-xl" wrap="balance">
          Contact Lucas
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          {contact.description}
        </Text>
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
    </Column>
  );
}

