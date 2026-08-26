import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { PROPERTIES, BAIRROS } from "@/lib/data";
import { BLOG_POSTS } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/imoveis", "/bairros", "/sobre", "/blog", "/vender-meu-imovel"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
    })
  );

  const propertyRoutes = PROPERTIES.map((p) => ({
    url: `${SITE_URL}/imoveis/${p.slug}`,
    lastModified: new Date(),
  }));

  const bairroRoutes = BAIRROS.map((b) => ({
    url: `${SITE_URL}/bairros/${b.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = BLOG_POSTS.filter((p) => !p.draft).map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: p.date,
  }));

  return [...staticRoutes, ...propertyRoutes, ...bairroRoutes, ...blogRoutes];
}
