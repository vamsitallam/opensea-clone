import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '6el1gx24',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skoxhkjGWfKe8mKUqHmeM8aF8WH2O6Z1LcRXj69hL1S6Oyr6TgkRVtrHZzk7sBmU6ABRm6LHWnJteuAlXLWbfofelnJV6bLCfnJjQRmEGVpbUIbBDfxu6rZ2oJQQKx8Z4REcuYoRhBgZp34psOplQJpErUmhlERCmOh5C0HICxtnn33BHTyo',
  useCdn: false,
})
