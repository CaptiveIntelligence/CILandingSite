import { defineType, defineField, defineArrayMember } from 'sanity';

// ── Reusable sub-objects ───────────────────────────────────────────────────

const linkField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'object',
    fields: [
      defineField({ name: 'label', title: 'Label', type: 'string' }),
      defineField({ name: 'href', title: 'Href', type: 'string' }),
    ],
  });

// ── Schema ─────────────────────────────────────────────────────────────────

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    // ── Hero ─────────────────────────────────────────────────────────────
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'badge', title: 'Badge Text', type: 'string' }),
        defineField({ name: 'headline', title: 'Headline', type: 'string' }),
        defineField({ name: 'gradientWord', title: 'Gradient Word / Phrase', type: 'string' }),
        defineField({ name: 'subtext', title: 'Subtext', type: 'text', rows: 3 }),
        defineField({ name: 'primaryCtaLabel', title: 'Primary CTA Label', type: 'string' }),
        defineField({ name: 'secondaryCtaLabel', title: 'Secondary CTA Label', type: 'string' }),
        defineField({
          name: 'stats',
          title: 'Stats',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'number', title: 'Number', type: 'string' }),
                defineField({ name: 'label', title: 'Label', type: 'string' }),
              ],
            }),
          ],
        }),
        defineField({ name: 'chartCaption', title: 'Mock Chart Caption', type: 'string' }),
        defineField({
          name: 'chartBars',
          title: 'Mock Chart Bars',
          description: 'Bars rendered in the hero dashboard mock. Heights are scaled so the largest value reaches the top of the chart.',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'label', title: 'Label', type: 'string' }),
                defineField({ name: 'value', title: 'Value', type: 'number' }),
              ],
              preview: {
                select: { title: 'label', subtitle: 'value' },
              },
            }),
          ],
        }),
      ],
    }),

    // ── Logos Bar ─────────────────────────────────────────────────────────
    defineField({
      name: 'logosBar',
      title: 'Logos Bar (Carousel Slides)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({
              name: 'logos',
              title: 'Company Names',
              type: 'array',
              of: [defineArrayMember({ type: 'string' })],
            }),
          ],
          preview: {
            select: { title: 'label', logos: 'logos' },
            prepare({ title, logos }) {
              return {
                title: title || 'Untitled slide',
                subtitle: Array.isArray(logos) ? `${logos.length} logos` : '',
              };
            },
          },
        }),
      ],
    }),

    // ── Platform ──────────────────────────────────────────────────────────
    defineField({
      name: 'platform',
      title: 'Platform Section',
      type: 'object',
      fields: [
        defineField({ name: 'badge', title: 'Badge', type: 'string' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'subtext', title: 'Subtext', type: 'text', rows: 3 }),
        defineField({
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
                defineField({
                  name: 'iconType',
                  title: 'Icon Type',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Table (Benchmarking)', value: 'table' },
                      { title: 'Clock (Real-Time)', value: 'clock' },
                      { title: 'Waveform (Analytics)', value: 'waveform' },
                      { title: 'Document (Filings)', value: 'document' },
                      { title: 'Monitor (API)', value: 'monitor' },
                    ],
                  },
                }),
                defineField({
                  name: 'colorScheme',
                  title: 'Colour Scheme',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Orange', value: 'orange' },
                      { title: 'Blue', value: 'blue' },
                      { title: 'Green', value: 'green' },
                    ],
                  },
                }),
                defineField({ name: 'isLarge', title: 'Large card (spans 2 columns)', type: 'boolean', initialValue: false }),
                defineField({ name: 'linkLabel', title: 'Link Label (optional)', type: 'string' }),
                defineField({ name: 'linkHref', title: 'Link Href (optional)', type: 'string' }),
              ],
            }),
          ],
        }),
      ],
    }),

    // ── Data Coverage ─────────────────────────────────────────────────────
    defineField({
      name: 'dataCoverage',
      title: 'Data Coverage Section',
      type: 'object',
      fields: [
        defineField({ name: 'badge', title: 'Badge', type: 'string' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'subtext', title: 'Subtext', type: 'text', rows: 3 }),
        defineField({
          name: 'stats',
          title: 'Stats',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'number', title: 'Number', type: 'string' }),
                defineField({ name: 'label', title: 'Label', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
              ],
            }),
          ],
        }),
        defineField({ name: 'detailHeading', title: 'Detail Heading', type: 'string' }),
        defineField({ name: 'detailBody', title: 'Detail Body', type: 'text', rows: 4 }),
        defineField({
          name: 'coverageList',
          title: 'Coverage List Items',
          type: 'array',
          of: [defineArrayMember({ type: 'string' })],
        }),
        defineField({
          name: 'domiciles',
          title: 'Domicile Pills',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'name', title: 'Name', type: 'string' }),
                defineField({ name: 'isActive', title: 'Active (highlighted)', type: 'boolean', initialValue: false }),
              ],
            }),
          ],
        }),
        defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string' }),
      ],
    }),

    // ── Use Cases ─────────────────────────────────────────────────────────
    defineField({
      name: 'useCases',
      title: 'Use Cases Section',
      type: 'object',
      fields: [
        defineField({ name: 'badge', title: 'Badge', type: 'string' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'subtext', title: 'Subtext', type: 'text', rows: 2 }),
        defineField({
          name: 'tabs',
          title: 'Tabs',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'id', title: 'ID (e.g. tab-managers)', type: 'string' }),
                defineField({ name: 'label', title: 'Tab Label', type: 'string' }),
                defineField({ name: 'heading', title: 'Panel Heading', type: 'string' }),
                defineField({ name: 'body', title: 'Panel Body', type: 'text', rows: 4 }),
                defineField({
                  name: 'bullets',
                  title: 'Bullet Points',
                  type: 'array',
                  of: [defineArrayMember({ type: 'string' })],
                }),
                defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string' }),
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: { hotspot: true },
                  fields: [
                    defineField({ name: 'alt', title: 'Alt text', type: 'string' }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // ── Testimonials ─────────────────────────────────────────────────────
    defineField({
      name: 'testimonials',
      title: 'Testimonials Section',
      type: 'object',
      fields: [
        defineField({ name: 'badge', title: 'Badge', type: 'string' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({
          name: 'items',
          title: 'Testimonials',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 4 }),
                defineField({ name: 'name', title: 'Name', type: 'string' }),
                defineField({ name: 'role', title: 'Role / Title', type: 'string' }),
                defineField({ name: 'initials', title: 'Initials (2 chars)', type: 'string' }),
                defineField({ name: 'isFeatured', title: 'Featured (highlighted card)', type: 'boolean', initialValue: false }),
              ],
            }),
          ],
        }),
      ],
    }),

    // ── About ─────────────────────────────────────────────────────────────
    defineField({
      name: 'about',
      title: 'About Section',
      type: 'object',
      fields: [
        defineField({ name: 'badge', title: 'Badge', type: 'string' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({
          name: 'paragraphs',
          title: 'Paragraphs',
          type: 'array',
          of: [defineArrayMember({ type: 'text' })],
        }),
        defineField({
          name: 'values',
          title: 'Value Cards',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'iconType',
                  title: 'Icon Type',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Check Circle (Accuracy)', value: 'check-circle' },
                      { title: 'Lightning (Always Current)', value: 'lightning' },
                      { title: 'Shield (Secure)', value: 'shield' },
                      { title: 'Users (Expert Support)', value: 'users' },
                    ],
                  },
                }),
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'body', title: 'Body', type: 'text', rows: 2 }),
              ],
            }),
          ],
        }),
      ],
    }),

    // ── CTA ──────────────────────────────────────────────────────────────
    defineField({
      name: 'cta',
      title: 'CTA Section',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'subtext', title: 'Subtext', type: 'text', rows: 3 }),
        defineField({ name: 'primaryCtaLabel', title: 'Primary CTA Label', type: 'string' }),
        defineField({ name: 'secondaryCtaLabel', title: 'Secondary CTA Label', type: 'string' }),
        defineField({ name: 'secondaryCtaHref', title: 'Secondary CTA Href', type: 'string' }),
      ],
    }),
  ],
});
