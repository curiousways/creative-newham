import { useEffect } from "react";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";

import * as gtag from "../lib/gtag";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import "../styles/globals.css"; // Global style sheet for css

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const siteUrl = process.env.SITE_URL as string;
  const siteTitle = process.env.SITE_TITLE;

  useEffect(() => {
    // Google Analytics
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo
        title={`${siteTitle} - arts, cultural, educational, social and voluntary organisations`}
        description="The Creative Newham Alliance is an independent consortium of arts, cultural, educational, social and voluntary organisations"
        canonical={`${siteUrl}${router.asPath === "/" ? "" : router.asPath}`}
        openGraph={{
          type: "website",
          url: `${siteUrl}${router.asPath === "/" ? "" : router.asPath}`,
          site_name: siteTitle,
          title: `${siteTitle} - arts, cultural, educational, social and voluntary organisations`,
          description:
            "The Creative Newham Alliance is an independent consortium of arts, cultural, educational, social and voluntary organisations",
          images: [
            {
              url: "/social.jpg",
              width: 1200,
              height: 630,
              alt: siteTitle,
            },
          ],
        }}
        twitter={{
          handle: "@twitterhandle",
          site: siteUrl,
          cardType: "summary_large_image",
        }}
      />
      <div className="flex flex-col min-h-screen">
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
