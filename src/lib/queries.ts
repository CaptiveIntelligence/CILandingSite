export const PAGE_QUERY = `{
  "settings": *[_type == "siteSettings"][0],
  "page": *[_type == "homePage"][0]{
    ...,
    examples{
      ...,
      items[]{
        ...,
        "imageUrl": image.asset->url,
        "imageAlt": image.alt
      }
    },
    useCases{
      ...,
      tabs[]{
        ...,
        "imageUrl": image.asset->url,
        "imageAlt": image.alt
      }
    }
  },
  "simplePages": *[_type == "simplePage"] | order(_createdAt asc) { title, "slug": slug.current }
}`;

export const SIMPLE_PAGE_QUERY = `*[_type == "simplePage" && slug.current == $slug][0]{
  title,
  description,
  body
}`;
