export const GTM_ID = 'G-EKY9NM6TCG'

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}