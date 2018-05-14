/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "651b10518973e7a581ec0256c622c231"
  },
  {
    "url": "static/images/icons/icon-128x128.png",
    "revision": "9f40119fb625f30c1c496bc4d5a9fb8d"
  },
  {
    "url": "static/images/icons/icon-144x144.png",
    "revision": "6f35b0c0a8f794bfaea5bb390ebeea00"
  },
  {
    "url": "static/images/icons/icon-152x152.png",
    "revision": "060a012a37614e6e2498835deddd4316"
  },
  {
    "url": "static/images/icons/icon-192x192.png",
    "revision": "060a012a37614e6e2498835deddd4316"
  },
  {
    "url": "static/images/icons/icon-384x384.png",
    "revision": "060a012a37614e6e2498835deddd4316"
  },
  {
    "url": "static/images/icons/icon-512x512.png",
    "revision": "060a012a37614e6e2498835deddd4316"
  },
  {
    "url": "static/images/icons/icon-72x72.png",
    "revision": "ed00c6fd549cbe3178b2071c7f0426c1"
  },
  {
    "url": "static/images/icons/icon-96x96.png",
    "revision": "a43279153f855b06d94414493e08c592"
  },
  {
    "url": "static/js/main.js",
    "revision": "a25863cdeaae1dd8ee052cf6b3d2414b"
  },
  {
    "url": "static/manifest.json",
    "revision": "d985ffc68f02db05f7708780ebdec113"
  },
  {
    "url": "static/styles/main.css",
    "revision": "cb9ce3b7b68f2a9d566bb2ffdafd60fb"
  },
  {
    "url": "workbox-config.js",
    "revision": "7cb35ec833229977265e5daeba417697"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
