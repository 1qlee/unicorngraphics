import "@/styles/globals.scss";
import "@/styles/radix-var-overrides.css";
import '@radix-ui/themes/components.css';
import '@radix-ui/themes/tokens/base.css';
import '@radix-ui/themes/tokens/colors/indigo.css';
import '@radix-ui/themes/tokens/colors/slate.css';
import '@radix-ui/themes/utilities.css'; 
import { Theme } from '@radix-ui/themes';
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { Button, Box, Link } from "@radix-ui/themes";
import { GeistSans } from 'geist/font/sans';

import Nav from "@/components/Nav/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={GeistSans.className}
      >
        <Theme
          accentColor="indigo"
          grayColor="slate"
          radius="full"
          appearance="light"
          style={{
            backgroundColor: "var(--gray-1)"
          }}
        >
          {draftMode().isEnabled && (
            <Box
              position="absolute"
              bottom="2"
              right="2"
            >
              <Link
                href="/api/draft-mode/disable"
              >
                <Button
                  variant="outline"
                >
                  Disable preview mode
                </Button>
              </Link>
            </Box>
          )}
          <Nav />
          {children}
          {draftMode().isEnabled && <VisualEditing />}
        </Theme>
      </body>
    </html>
  );
}
