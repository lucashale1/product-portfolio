import {
  Avatar,
  Button,
  Column,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { PageShell, PageHeroTitle, PageHeroLead, SectionTitle } from "@/components";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];
  return (
    <PageShell>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Row fillWidth s={{ direction: "column"}} horizontal="center">
        {/* Mobile-only: name/role/social above the avatar */}
        <Column hide s={{ hide: false }} fillWidth horizontal="center" paddingX="l" paddingBottom="m">
          <PageHeroTitle className={styles.textAlign}>{person.name}</PageHeroTitle>
          <PageHeroLead className={styles.textAlign}>{person.role}</PageHeroLead>
          {social.length > 0 && (
            <Row
              className={styles.blockAlign}
              paddingTop="20"
              paddingBottom="8"
              gap="8"
              wrap
              horizontal="center"
              fitWidth
              data-border="rounded"
            >
              {social
                .filter((item) => item.essential)
                .map(
                  (item) =>
                    item.link && (
                      <IconButton
                        key={item.name}
                        size="l"
                        href={item.link}
                        icon={item.icon}
                        variant="secondary"
                      />
                    ),
                )}
            </Row>
          )}
        </Column>
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Row>

            {about.tableOfContent.display && (
              <Column s={{ hide: true }}>
                <TableOfContents structure={structure} about={about} fixed={false} />
              </Column>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
            s={{ hide: true }}
          >
            <PageHeroTitle className={styles.textAlign}>{person.name}</PageHeroTitle>
            <PageHeroLead className={styles.textAlign}>{person.role}</PageHeroLead>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social
                      .filter((item) => item.essential)
                      .map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Row s={{ hide: true }}>
                          <Button
                            key={item.name}
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="s"
                            weight="default"
                            variant="secondary"
                          />
                        </Row>
                        <Row hide s={{ hide: false }}>
                          <IconButton
                            size="l"
                            key={`${item.name}-icon`}
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                          />
                        </Row>
                      </React.Fragment>
                    ),
                )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <SectionTitle id={about.work.title} marginBottom="m">
                {about.work.title}
              </SectionTitle>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    {/* Desktop: role left, date right */}
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4" s={{ hide: true }}>
                      <Text variant="heading-strong-l">{experience.role}</Text>
                      <Text variant="body-default-s" onBackground="neutral-weak">{experience.timeframe}</Text>
                    </Row>
                    {/* Mobile: date above role */}
                    <Column fillWidth marginBottom="4" hide s={{ hide: false }}>
                      <Text variant="body-default-s" onBackground="neutral-weak">{experience.timeframe}</Text>
                      <Text variant="heading-strong-l">{experience.role}</Text>
                    </Column>
                    <Text id={experience.company} variant="heading-strong-s" onBackground="neutral-weak" marginBottom="m">
                        {experience.company}
                      </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map(
                        (achievement: React.ReactNode, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                    {experience.images && experience.images.length > 0 && (
                      <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {experience.images.map((image) => (
                          <Row
                            key={image.src}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <SectionTitle id={about.studies.title} marginBottom="m">
                {about.studies.title}
              </SectionTitle>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    {/* Desktop: name left, graduation date right */}
                    <Row fillWidth horizontal="between" vertical="end" s={{ hide: true }}>
                      <Text id={institution.name} variant="heading-strong-s">{institution.name}</Text>
                      {institution.timeframe && (
                        <Text variant="body-default-s" onBackground="neutral-weak">{institution.timeframe}</Text>
                      )}
                    </Row>
                    {/* Mobile: date above name */}
                    <Column fillWidth hide s={{ hide: false }}>
                      {institution.timeframe && (
                        <Text variant="body-default-s" onBackground="neutral-weak">{institution.timeframe}</Text>
                      )}
                      <Text id={institution.name} variant="heading-strong-s">{institution.name}</Text>
                    </Column>
                    <Text variant="body-default-m">{institution.description}</Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <SectionTitle id={about.technical.title} marginBottom="40">
                {about.technical.title}
              </SectionTitle>
              <Column fillWidth gap="l">
                {about.technical.skills.map((skill) => (
                  <Column key={skill.title} fillWidth gap="4">
                    <Text id={skill.title} variant="heading-strong-s">
                      {skill.title}
                    </Text>
                    <Text variant="body-default-m">
                      {skill.description}
                    </Text>
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="8" paddingTop="8">
                        {skill.tags.map((tag, tagIndex) => (
                          <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                    {skill.images && skill.images.length > 0 && (
                      <Row fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image) => (
                          <Row
                            key={image.src}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Row>
    </PageShell>
  );
}