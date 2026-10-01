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
    // Projecting a plain string yields null, so legacy string-only lists pass through untouched
    logosBar[]{
      ...,
      "logos": select(
        count(logos[_type == "company"]) > 0 => logos[]{
          ...,
          "logoUrl": logo.asset->url
        },
        logos
      )
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
