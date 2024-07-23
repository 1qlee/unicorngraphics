import "@/styles/globals.scss";
import "@/styles/radix-var-overrides.css";
import '@radix-ui/themes/components.css';
import '@radix-ui/themes/tokens/base.css';
import '@radix-ui/themes/tokens/colors/indigo.css';
import '@radix-ui/themes/tokens/colors/orange.css';
import '@radix-ui/themes/tokens/colors/lime.css';
import '@radix-ui/themes/tokens/colors/slate.css';
import '@radix-ui/themes/utilities.css'; 
import { Theme } from '@radix-ui/themes';
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { Button, Box, Link } from "@radix-ui/themes";
import { GeistSans } from 'geist/font/sans';
import { CONTACT_QUERY, PRODUCTS_QUERY, SERVICES_QUERY, SETTINGS_QUERY } from "@/sanity/lib/queries";
import { CONTACT_QUERYResult, PRODUCTS_QUERYResult, SERVICES_QUERYResult, SETTINGS_QUERYResult } from "@/root/sanity.types";
import { sanityFetch } from "@/sanity/lib/client";

import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const products = await sanityFetch<PRODUCTS_QUERYResult>({
    query: PRODUCTS_QUERY,
  });
  const settings = await sanityFetch<SETTINGS_QUERYResult>({
    query: SETTINGS_QUERY,
  });
  const services = await sanityFetch<SERVICES_QUERYResult>({
    query: SERVICES_QUERY,
  });
  const contact = await sanityFetch<CONTACT_QUERYResult>({
    query: CONTACT_QUERY,
  })

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
              position="fixed"
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
          <Nav 
            products={products}
            services={services}
            settings={settings}
            contact={contact}
          />
          {children}
          {draftMode().isEnabled && <VisualEditing />}
          <Footer 
            products={products}
            services={services}
            settings={settings}
          />
        </Theme>
      </body>
    </html>
  );
}
