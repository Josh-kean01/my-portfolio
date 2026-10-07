import React from "react";
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { AppShell } from "../src/App";
import { getPageMetadata, getPrerenderedRoutes } from "../src/seo/metadata";

const meta = (property: string, content: string) => ({
    type: "meta",
    props: { property, content },
});

const namedMeta = (name: string, content: string) => ({
    type: "meta",
    props: { name, content },
});

export function prerender({ url }: { url: string }) {
    const metadata = getPageMetadata(url);
    const html = renderToString(
        <MemoryRouter initialEntries={[url]}>
            <AppShell />
        </MemoryRouter>,
    );

    return {
        html,
        links: new Set(getPrerenderedRoutes()),
        head: {
            title: metadata.title,
            elements: new Set([
                namedMeta("description", metadata.description),
                { type: "link", props: { rel: "canonical", href: metadata.canonicalUrl } },
                meta("og:type", metadata.openGraphType),
                meta("og:url", metadata.canonicalUrl),
                meta("og:title", metadata.title),
                meta("og:description", metadata.description),
                meta("og:image", metadata.image),
                namedMeta("twitter:card", metadata.twitterCard),
                namedMeta("twitter:url", metadata.canonicalUrl),
                namedMeta("twitter:title", metadata.title),
                namedMeta("twitter:description", metadata.description),
                namedMeta("twitter:image", metadata.image),
            ]),
        },
    };
}