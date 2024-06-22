"use client";

import Head from "next/head";
import { useRouter } from "next/router";

import pages from "./meta";

export default function Meta() {
  const router = useRouter();
  const currentPage = pages.find((page) => page.url === router.pathname);

  if (!currentPage) {
    return null; // ページが見つからない場合は何も表示しない
  }

  return (
    <Head>
      <title>{currentPage.title}</title>
      <meta name="description" content={currentPage.description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
