import { defineMigration, at, set } from 'sanity/migrate';

const randomKey = () => Math.random().toString(36).slice(2, 12);

// Converts the Logos Bar to the current schema: an array of slides, each
// holding `company` objects (name + optional logo) rather than plain strings.
// Also wraps the older single-object `logosBar` shape into a one-slide array.
export default defineMigration({
  title: 'Convert Logos Bar company names to company objects',
  documentTypes: ['homePage'],

  migrate: {
    document(doc) {
      const raw = (doc as any).logosBar;
      if (!raw || typeof raw !== 'object') return;

      const isLegacyShape = !Array.isArray(raw);
      const slides: any[] = isLegacyShape ? [raw] : raw;
      const hasStrings = slides.some(
        (slide) => Array.isArray(slide?.logos) && slide.logos.some((l: unknown) => typeof l === 'string'),
      );
      if (!isLegacyShape && !hasStrings) return;

      return at(
        'logosBar',
        set(
          slides.map((slide) => ({
            ...slide,
            _key: slide._key ?? randomKey(),
            logos: (slide.logos ?? []).map((l: any) =>
              typeof l === 'string' ? { _type: 'company', _key: randomKey(), name: l } : l,
            ),
          })),
        ),
      );
    },
  },
});
