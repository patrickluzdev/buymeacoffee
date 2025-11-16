export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.baseUrl

  const robotsTxt = `User-Agent: *
Disallow: /success
Disallow: /failure
Disallow: /pending

Sitemap: ${baseUrl}/sitemap.xml`

  setResponseHeader(event, 'Content-Type', 'text/plain')
  return robotsTxt
})
