import { Column, Heading, Text } from "@once-ui-system/core";
import type { ComponentProps } from "react";

type ColumnProps = ComponentProps<typeof Column>;
type HeadingProps = ComponentProps<typeof Heading>;
type TextProps = ComponentProps<typeof Text>;

export function PageShell({ maxWidth = "m", gap = "xl", paddingY = "12", horizontal = "center", ...rest }: ColumnProps) {
  return <Column maxWidth={maxWidth} gap={gap} paddingY={paddingY} horizontal={horizontal} {...rest} />;
}

export function PageHeroTitle({
  variant = "display-strong-m",
  wrap = "balance",
  paddingBottom = "8",
  ...rest
}: HeadingProps) {
  return <Heading variant={variant} wrap={wrap} paddingBottom={paddingBottom} {...rest} />;
}

export function PageHeroLead({
  variant = "body-default-xl",
  onBackground = "neutral-weak",
  wrap = "balance",
  className,
  ...rest
}: TextProps) {
  return (
    <Text
      variant={variant}
      onBackground={onBackground}
      wrap={wrap}
      className={className}
      {...rest}
    />
  );
}

export function SectionTitle({
  as = "h2",
  variant = "display-strong-xs",
  wrap = "balance",
  ...rest
}: HeadingProps) {
  return <Heading as={as} variant={variant} wrap={wrap} {...rest} />;
}
