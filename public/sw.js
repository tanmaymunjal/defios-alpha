if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),d={module:{uri:n},exports:t,require:r};s[n]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/SlMZnFKPrkBTSZrlXUQx5/_buildManifest.js",revision:"feddf2fd0659762a4f526225a2dc021e"},{url:"/_next/static/SlMZnFKPrkBTSZrlXUQx5/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/145-2bed1a88c17eaaad.js",revision:"2bed1a88c17eaaad"},{url:"/_next/static/chunks/240.94b279cf4debf133.js",revision:"94b279cf4debf133"},{url:"/_next/static/chunks/243.84366c84f81dc11c.js",revision:"84366c84f81dc11c"},{url:"/_next/static/chunks/251.4963347d6008a148.js",revision:"4963347d6008a148"},{url:"/_next/static/chunks/298.b51b547b8a71520f.js",revision:"b51b547b8a71520f"},{url:"/_next/static/chunks/311-82cb75d0042793ed.js",revision:"82cb75d0042793ed"},{url:"/_next/static/chunks/320.5bdd0e424046b2f1.js",revision:"5bdd0e424046b2f1"},{url:"/_next/static/chunks/336.5fa76fd239c20e47.js",revision:"5fa76fd239c20e47"},{url:"/_next/static/chunks/348-b6bcd1b5e21854e2.js",revision:"b6bcd1b5e21854e2"},{url:"/_next/static/chunks/349.a7f3e3e94e3943bd.js",revision:"a7f3e3e94e3943bd"},{url:"/_next/static/chunks/402-289376f615938115.js",revision:"289376f615938115"},{url:"/_next/static/chunks/454-665edf4ac8466e12.js",revision:"665edf4ac8466e12"},{url:"/_next/static/chunks/507.ba45465aab9e03aa.js",revision:"ba45465aab9e03aa"},{url:"/_next/static/chunks/509.3cdf6bee3e362189.js",revision:"3cdf6bee3e362189"},{url:"/_next/static/chunks/512-31aae59e78130135.js",revision:"31aae59e78130135"},{url:"/_next/static/chunks/531-f87191b42cdfbf3b.js",revision:"f87191b42cdfbf3b"},{url:"/_next/static/chunks/592-ff3916ceb25f2999.js",revision:"ff3916ceb25f2999"},{url:"/_next/static/chunks/5a3f41a5-36d69aeaff133d21.js",revision:"36d69aeaff133d21"},{url:"/_next/static/chunks/664-37d3607a5fbabc86.js",revision:"37d3607a5fbabc86"},{url:"/_next/static/chunks/71-20e5e4065e83c59d.js",revision:"20e5e4065e83c59d"},{url:"/_next/static/chunks/750-80e40db56be2b68b.js",revision:"80e40db56be2b68b"},{url:"/_next/static/chunks/772.11c68e5e5968b395.js",revision:"11c68e5e5968b395"},{url:"/_next/static/chunks/853.2475ae305ed8918f.js",revision:"2475ae305ed8918f"},{url:"/_next/static/chunks/868-5c6a6ab66295346a.js",revision:"5c6a6ab66295346a"},{url:"/_next/static/chunks/88.bf57dfbb77b44024.js",revision:"bf57dfbb77b44024"},{url:"/_next/static/chunks/962-fb806769b8a10266.js",revision:"fb806769b8a10266"},{url:"/_next/static/chunks/framework-73b8966a3c579ab0.js",revision:"73b8966a3c579ab0"},{url:"/_next/static/chunks/main-9db040eb1ed363da.js",revision:"9db040eb1ed363da"},{url:"/_next/static/chunks/pages/404-7fd64f595ded9626.js",revision:"7fd64f595ded9626"},{url:"/_next/static/chunks/pages/_app-aa95b5f8cbde61b3.js",revision:"aa95b5f8cbde61b3"},{url:"/_next/static/chunks/pages/_error-409f831d3504c8f5.js",revision:"409f831d3504c8f5"},{url:"/_next/static/chunks/pages/enterprise-32eb85a913f7259e.js",revision:"32eb85a913f7259e"},{url:"/_next/static/chunks/pages/incentivize-contributors-e65e2cef922eb667.js",revision:"e65e2cef922eb667"},{url:"/_next/static/chunks/pages/index-e38911b387cf5a47.js",revision:"e38911b387cf5a47"},{url:"/_next/static/chunks/pages/issues-f2966cfa108d3c91.js",revision:"f2966cfa108d3c91"},{url:"/_next/static/chunks/pages/jobs-af95ad67dc612a19.js",revision:"af95ad67dc612a19"},{url:"/_next/static/chunks/pages/notifications-68c589779db6f181.js",revision:"68c589779db6f181"},{url:"/_next/static/chunks/pages/profile-3cf7b576b10848b8.js",revision:"3cf7b576b10848b8"},{url:"/_next/static/chunks/pages/projects-7009dab352038f38.js",revision:"7009dab352038f38"},{url:"/_next/static/chunks/pages/roadmaps-70c907316116d6de.js",revision:"70c907316116d6de"},{url:"/_next/static/chunks/pages/swap-c05ae600e4777f5e.js",revision:"c05ae600e4777f5e"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-89cafcc29b8de608.js",revision:"89cafcc29b8de608"},{url:"/_next/static/css/14332dab1f94310a.css",revision:"14332dab1f94310a"},{url:"/_next/static/css/31bd7616cc52eba5.css",revision:"31bd7616cc52eba5"},{url:"/_next/static/media/1.4dbca401.png",revision:"d67969903f203227c18bff2812f5b51a"},{url:"/_next/static/media/10.0bb20a46.jpg",revision:"4f6864798753a1a92d272989a88102b4"},{url:"/_next/static/media/11.cdc3c463.jpg",revision:"227631f6acc4415277161219ade08f80"},{url:"/_next/static/media/2.3e7881c0.png",revision:"71812b8f50456b98783fc78a0cfcf1e7"},{url:"/_next/static/media/3.270c90c0.png",revision:"6a35b214d45ed58c4de1bfd97f978960"},{url:"/_next/static/media/4.482c53fb.png",revision:"103d27c8d26e89bab96674bfe118caa0"},{url:"/_next/static/media/404-dark.88f7f707.svg",revision:"9946c2eac18c520941269bc63fe32c8f"},{url:"/_next/static/media/5.69fc4f70.png",revision:"35fbead9203f8cebc08874612db6f02d"},{url:"/_next/static/media/8.d01df0ca.jpg",revision:"a1ecd8202a9a1f4d382fea1bbd67ba43"},{url:"/_next/static/media/9.cbdf23e0.jpg",revision:"4badb43d5c1d2a96ed55e99dcf657120"},{url:"/_next/static/media/author.67e99d23.jpg",revision:"3094dd694f05fb77263bbb29593cb119"},{url:"/_next/static/media/binance.72164c61.svg",revision:"2317499849a2ff3b6fad5d2b92bf46e1"},{url:"/_next/static/media/broken.b3ba8d63.svg",revision:"1c7b7c026133bc4149072d85f2e20e79"},{url:"/_next/static/media/collection-1.2655e340.jpg",revision:"fdb05a61a09c62a7f68b18c97566f6a2"},{url:"/_next/static/media/collection-2.89da124f.jpg",revision:"9de3f89c9d9830cbd76dc0c8b5bb21e8"},{url:"/_next/static/media/collection-3.4e0f5e37.jpg",revision:"34cfc9e1a7bbd81acedc92e2f2fa76f4"},{url:"/_next/static/media/collection-4.5ddfe301.jpg",revision:"5d999d5bd8bd89fb141ca5592a830790"},{url:"/_next/static/media/github-mark-white.fd5c0afd.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"/_next/static/media/logo-full.f32bfc25.png",revision:"88b07b9cd9772881923ef5b247dc1111"},{url:"/_next/static/media/metamask.3285bae2.svg",revision:"c879a582a94e772b8ed27295ae83145d"},{url:"/_next/static/media/nft-1.35139713.jpg",revision:"7c20fd9c46a7cdf82a5a89760b296c1e"},{url:"/_next/static/media/nft-2.c1c5fed8.jpg",revision:"c681f6e9baefd72f36b8284aecc6f576"},{url:"/_next/static/media/nft-3.906f9ce2.jpg",revision:"9ae6662be4a369208bd3b475b5116056"},{url:"/_next/static/media/nft-4.e9c10886.jpg",revision:"9d6cb2a72e479fe533a4505401757e25"},{url:"/_next/static/media/profile-cover.56ac09da.jpg",revision:"e1e1bece5b85fdf3550de16b4f4a5f79"},{url:"/_next/static/media/secure.2584fd3c.svg",revision:"80fda89cd073c69aa0269d4fe8143cb9"},{url:"/_next/static/media/user-1.d4b43d77.png",revision:"ddf3e4622304fda97b504081c06de271"},{url:"/_next/static/media/user-2.83edef50.png",revision:"d278930bbc7843dc9a7e389b1f3d26b1"},{url:"/_next/static/media/user-3.ca745d29.png",revision:"0769ea241939c89fe4f180c7ac3f9ee5"},{url:"/_next/static/media/vulnerable.89048963.svg",revision:"2a696705ff30186c3d80d58af4b4e0f8"},{url:"/android-chrome-192x192.png",revision:"357ea8372c3900eb13abe81647497b79"},{url:"/android-chrome-512x512.png",revision:"0cd19e34d8d4a7a560c13931f1162f2b"},{url:"/apple-touch-icon.png",revision:"b0cf3d26a594e69781d31d695a1320b5"},{url:"/favicon-16x16.png",revision:"1fa512f7e0c26b8d8ba0236352727821"},{url:"/favicon-32x32.png",revision:"b165a2ac7607d76163df48594c701a10"},{url:"/favicon.ico",revision:"2db9a527e21938ba3dd8908837fd8d58"},{url:"/site.webmanifest",revision:"0f0313c9d6d03e27904694634e747f04"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
