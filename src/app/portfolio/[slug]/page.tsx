'use server';

import matter from 'gray-matter';
import toml from 'toml';
import { notFound } from 'next/navigation';
import { remark } from 'remark';
import html from 'remark-html';
import './page.css';
import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
    const dir = path.join(process.cwd(), 'public', 'content', 'portfolio');
    const files = fs.readdirSync(dir);
    return files
        .filter((file) => file.endsWith('.md'))
        .map((file) => ({ slug: file.replace(/\.md$/, '') }));
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/content/portfolio/${slug}.md`);
    if (!res.ok) return notFound();
    const file = await res.text();
    const { content, data } = matter(file, { language: 'toml', delimiters: "+++", engines: { toml: toml.parse } });
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return (
        <div className="portfolio-post-container">
            <main className="portfolio-post-main">
                <h1>{data.title || slug}</h1>
                {data.description && <p className="lead">{data.description}</p>}
                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </main>
        </div>
    );
}