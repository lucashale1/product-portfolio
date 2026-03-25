import { Heading, Text } from "@once-ui-system/core";
import { PageShell } from "@/components";

export default function NotFound() {
  return (
    <PageShell horizontal="center" align="center" paddingBottom="160">
      <Text marginBottom="s" variant="display-strong-m">
        404
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        Page Not Found
      </Heading>
      <Text onBackground="neutral-weak">The page you are looking for does not exist.</Text>
    </PageShell>
  );
}
