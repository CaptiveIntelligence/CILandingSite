import { defineType, defineField, defineArrayMember } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'nav',
      title: 'Navigation',
      type: 'object',
      fields: [
        defineField({
          name: 'links',
          title: 'Nav Links',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'label', title: 'Label', type: 'string' }),
                defineField({ name: 'href', title: 'Href', type: 'string' }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'signInLabel',
          title: 'Sign In Button Label',
          type: 'string',
          initialValue: 'Sign In',
        }),
        defineField({
          name: 'demoButtonLabel',
          title: 'Demo Button Label',
          type: 'string',
          initialValue: 'Request Demo',
        }),
      ],
    }),

    // ── Demo Modal ────────────────────────────────────────────────────────
    defineField({
      name: 'demoModal',
      title: 'Demo Modal',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'subtext', title: 'Subtext', type: 'text', rows: 2 }),
        defineField({ name: 'successHeading', title: 'Success Heading', type: 'string' }),
        defineField({ name: 'successBody', title: 'Success Body', type: 'text', rows: 3 }),
      ],
    }),

    // ── Footer ───────────────────────────────────────────────────────────
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
        defineField({
          name: 'columns',
          title: 'Link Columns',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'heading', title: 'Column Heading', type: 'string' }),
                defineField({
                  name: 'links',
                  title: 'Links',
                  type: 'array',
                  of: [
                    defineArrayMember({
                      type: 'object',
                      fields: [
                        defineField({ name: 'label', title: 'Label', type: 'string' }),
                        defineField({ name: 'href', title: 'Href', type: 'string' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'legalLinks',
          title: 'Legal Links',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'label', title: 'Label', type: 'string' }),
                defineField({ name: 'href', title: 'Href', type: 'string' }),
              ],
            }),
          ],
        }),
        defineField({ name: 'copyright', title: 'Copyright Text', type: 'string' }),
      ],
    }),
  ],
});
