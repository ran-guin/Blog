importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "bael-cms-template",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/0dce5f464aae83291e62.js",
    "revision": "62a3a7d9ba1cadab53acd2404179f9f0"
  },
  {
    "url": "/_nuxt/113aca16abc0e4fb4bd3.js",
    "revision": "821aab0da29d15f1b8b1735b58bce0da"
  },
  {
    "url": "/_nuxt/23098125c2a75d11dab6.css",
    "revision": "cfef01e8b2f16b0f478ba50c66f231b2"
  },
  {
    "url": "/_nuxt/40ebde302e464bc5452d.css",
    "revision": "0bf1a77c90c4db49c71ce9299da5c808"
  },
  {
    "url": "/_nuxt/43a5f93a858b73e2be2c.js",
    "revision": "b67543ac4ac161e76ac2cedc84927c45"
  },
  {
    "url": "/_nuxt/56afe2f310bb71aab031.js",
    "revision": "aafd464dc8d4354597ab851b9d287446"
  },
  {
    "url": "/_nuxt/58028e10b7315aa3087a.js",
    "revision": "3ee6ace6b4914824a6c998dc79e3d0d2"
  },
  {
    "url": "/_nuxt/5d5fcaf7c4aa12031f34.js",
    "revision": "c07225734e456c872e13d81b7ae14cf0"
  },
  {
    "url": "/_nuxt/7202a8c3ed40b6e7c700.js",
    "revision": "3961bbaf2a81a4e974f125a6707422e3"
  },
  {
    "url": "/_nuxt/8f314f5a0b125a1985e3.css",
    "revision": "0bf1a77c90c4db49c71ce9299da5c808"
  },
  {
    "url": "/_nuxt/aaad0a638e9e55632715.css",
    "revision": "c4502a13b542214a83f5c0b2dc3831ec"
  },
  {
    "url": "/_nuxt/ab4331fb09979e46bbfc.css",
    "revision": "0bf1a77c90c4db49c71ce9299da5c808"
  },
  {
    "url": "/_nuxt/aef955beec3f387de3bb.js",
    "revision": "1ba1893906f97f047303a1d451b78a4f"
  },
  {
    "url": "/_nuxt/e201c1c053e268e1bdaa.css",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/images/uploads/.*'), workboxSW.strategies.cacheFirst({"cacheName":"image-cache","cacheExpiration":{"maxEntries":100,"maxAgeSeconds":86400}}), 'GET')

