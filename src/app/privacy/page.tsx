import { allDocs } from "contentlayer/generated";
import { MDXContent } from "next-docs-ui/mdx";
import { notFound } from "next/navigation";
import { Content } from "@/components/content";
import type { Metadata } from "next";
import { domain } from "@config";

export const metadata: Metadata = {
  alternates: {
    canonical: `${domain}/privacy`,
  },
};

export default function PrivacyPage() {
  const page = allDocs.find((docs) => docs.slug === "privacy");
  if (!page) notFound();
  return (
    <main className="container py-10">
      <MDXContent>
        <h1>{page.title}</h1>
        <Content code={page.body.code} />
      </MDXContent>
    </main>
  );
}
