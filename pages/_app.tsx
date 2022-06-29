import { useEffect } from "react";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import * as Fathom from "fathom-client";

import * as gtag from "../lib/gtag";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import "../styles/globals.css"; // Global style sheet for css
// import "../styles/global.scss"; //Global stylesheet for sass

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const siteUrl = process.env.SITE_URL as string;
  const siteTitle = process.env.SITE_TITLE;
  const fathom = process.env.FATHOM_ANALYTICS_ID as string; //fathom analytics id
  const siteUrlhttpsStripped = process.env.SITE_URL?.split("//")[1] as string;

  useEffect(() => {
    // Load fathom analytics
    // Fathom.load(fathom, {
    //   includedDomains: [siteUrlhttpsStripped],
    //   excludedDomains: ["localhost", "*.vercel.app"],
    // });

    // Google Analytics
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };

    // Fathom Analytics
    // const handleRouteChange = () => {
    //   Fathom.trackPageview();
    // };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo
        title={siteTitle}
        description="The Creative Newham Alliance is an independent consortium of arts, cultural, educational, social and voluntary organisations"
        canonical={`${siteUrl}${router.asPath === "/" ? "" : router.asPath}`}
        openGraph={{
          type: "website",
          url: `${siteUrl}${router.asPath === "/" ? "" : router.asPath}`,
          site_name: siteTitle,
          title: siteTitle,
          description:
            "The Creative Newham Alliance is an independent consortium of arts, cultural, educational, social and voluntary organisations",
          images: [
            {
              url: "/social.jpg",
              width: 1200,
              height: 630,
              alt: "Enter social image alt text here",
            },
          ],
        }}
        twitter={{
          handle: "@twitterhandle",
          site: siteUrl,
          cardType: "summary_large_image",
        }}
      />
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
