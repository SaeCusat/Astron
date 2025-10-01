import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://astron.cusat.co.in',
      lastModified: new Date(),
    },
  ];
}
