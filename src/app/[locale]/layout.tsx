// next
import { Metadata } from "next";

// redux toolkit + style registry providers
import Providers from "./providers/Providers";

// global styles
import GlobalStyles from "app/[locale]/styles/GlobalStyles";
import { useLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

// font
import { League_Spartan } from "next/font/google";
import { ReactNode } from "react";
const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--league-spartan",
});

// metadata
export const metadata: Metadata = {
  title: "Job Listings",
  icons: [{ rel: "icon", type: "image/png", url: "/images/favicon-32x32.png" }],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: any;
}) {
  // for server components
  const locale = useLocale();
  if (params.locale !== locale) {
    notFound();
  }
  // for client components
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={leagueSpartan.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <GlobalStyles />
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
