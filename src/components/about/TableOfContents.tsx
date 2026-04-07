"use client";

import React from "react";
import { Column, Flex, Text } from "@once-ui-system/core";
import styles from "./about.module.scss";

interface TableOfContentsProps {
  structure: {
    title: string;
    display: boolean;
    items: string[];
  }[];
  about: {
    tableOfContent: {
      display: boolean;
      subItems: boolean;
    };
  };
  /**
   * When true, renders as a fixed-position left navigation.
   * When false, renders inline (e.g. under the avatar column).
   */
  fixed?: boolean;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ structure, about, fixed = true }) => {
  const scrollTo = (id: string, offset: number) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (!about.tableOfContent.display) return null;

  const hoverClassName = fixed ? styles.hover : undefined;

  return (
    <Column
      left={fixed ? "0" : undefined}
      style={
        fixed
          ? {
              top: "50%",
              transform: "translateY(-50%)",
              whiteSpace: "nowrap",
            }
          : { whiteSpace: "normal", alignSelf: "center" }
      }
      position={fixed ? "fixed" : undefined}
      paddingLeft={fixed ? "24" : undefined}
      gap={fixed ? "32" : "16"}
      m={fixed ? { hide: true } : undefined}
      horizontal="start"
      align="start"
      padding="l"
      radius="l"
      background={fixed ? "neutral-alpha-weak" : "surface"}
      border="neutral-alpha-weak"
      overflow={fixed ? undefined : "hidden"}
    >
      {structure
        .filter((section) => section.display)
        .map((section, sectionIndex) => (
          <Column key={sectionIndex} gap={fixed ? "12" : "8"}>
            <Flex
              cursor="interactive"
              className={hoverClassName}
              gap="8"
              vertical="center"
              onClick={() => scrollTo(section.title, 80)}
            >
              <Text variant="label-default-m">{section.title}</Text>
            </Flex>
            {about.tableOfContent.subItems && (
              <>
                {section.items.map((item, itemIndex) => (
                  <Flex
                    l={{ hide: true }}
                    key={itemIndex}
                    style={{ cursor: "pointer" }}
                    className={hoverClassName}
                    gap="8"
                    paddingLeft="24"
                    vertical="center"
                    onClick={() => scrollTo(item, 80)}
                  >
                    <Text variant="label-default-s">{item}</Text>
                  </Flex>
                ))}
              </>
            )}
          </Column>
        ))}
    </Column>
  );
};

export default TableOfContents;
