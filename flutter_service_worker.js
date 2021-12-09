'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "cc12fd32a5f48ad92a13dea4622fd22c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d5832c4070a343115fda067dce085ea5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fadb911c647381c06fa031365bfcfe2b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "17248464dd52a319fb097635e1dd36c8",
".git/logs/refs/heads/main": "17248464dd52a319fb097635e1dd36c8",
".git/logs/refs/remotes/origin/main": "981b0ba4d78873c1ce7557e571913566",
".git/objects/00/acd3bae2acc4fa103134fc577069801e3eb66b": "88a6b5d7092f5d3c53bbb92a4baa366e",
".git/objects/00/e18dd250c0aa9447b9a018156c2fa84b9173d9": "6c56aa532bf6f3cd94435d8818d509b0",
".git/objects/03/413ed46b85dea23d36d13f84ae8dbe15ad3028": "12803ec11e9fa8d62257d04c53ab5d2b",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/dc75ea5d8201215ea0bc548d1cf8439dfccd3c": "4f094c929b7a15bccf0040a12c906995",
".git/objects/18/13d95998deee84487c738dfb6c105f84ca8ed3": "6b696ebd240c3579c1f40320d630f856",
".git/objects/1d/bcc14163515a5b2383310ec14f006e977e28df": "af37e28c7305cc4fa0a78e696e255685",
".git/objects/26/83ee204c4840fdc99e07c1e8c784bf83f2b96f": "469fbcc5b5f5b4ee0dd078c4d839f57a",
".git/objects/27/f7029147efbdabf085bc6d68540758dc6f23e3": "7ed30e3daefa5b1906c35ec06f4a0770",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/c8b59da45036944bf74145a03b8270947df447": "329621ded061c16c66e55e948898e2f7",
".git/objects/37/9a3e6b08f656e424c5a8cbb42888c26350e558": "3cd92f4c019068cccfa96eae854be057",
".git/objects/3f/ec1da3a7ee285a6e2dfbe4420a4b7a584c21d9": "c547a1bada900e7cb2084ab9cfb2d8ab",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/6bace460870ee56141254126788705484da7e3": "fdcb871098ba787883b62ccce095a8eb",
".git/objects/51/a0a95df587b27e69edc5ac6745b23e5fc64495": "94466851c81d38ece57de32eab6a71a7",
".git/objects/56/4de5a5a9e95a72ecca4856fcaf160985a5c786": "6ba76600212b33e7dec47570f74b6e74",
".git/objects/5a/f4a9c2afe5c4d8682ed871381a0a65d232b188": "a97270102557578d2909185f0d787439",
".git/objects/5b/c45c0885113fc6d8a352075989a08997d69ff8": "c5fb09db590614311eda80746d00679c",
".git/objects/60/751145e903c202dd52a5ddd6ee1bcf9f03f948": "c7aadec5d3624ded6d1b8ca44cce5732",
".git/objects/65/ecafcc509504d4bc4ac0c9b5b1317c3d4ea6f7": "37d57cc14a439c630169c0956ef45a99",
".git/objects/69/0bde9d11e2966c73cb6b46e4eb5a0834f5e768": "8c4421d7604ba16c9adeb16c2426c3af",
".git/objects/78/5facdb306b5585527bd91a42957fbb55d88ff7": "42a88c865da652da457b1e4afa4604e8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/85/138eb7364eccd8b665a7c81c9c3fc63df7eb8e": "fcf0effc08b0f133569a01319da40f3c",
".git/objects/85/3444f468954c8e0b36590f0937e46045c7afad": "5f61ca930b6fe8706fc1251c32acf5e0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/18b0f08190aff26c9c808ac2c97f57b0fd8c14": "4e445468bc90d17e5e09aad3f30b7488",
".git/objects/bd/e82eee181cd64f1b8a669e7d8fa5da92c2c0c5": "c24ee70707f7a16615fec0a7d140db21",
".git/objects/c5/2b83d7c6f70d7d598fce26bffab38dfbc52ade": "72188da7f44f9cacea89c256c6d71e68",
".git/objects/c9/ed347c4e2aeae35abbd78469a5bfb509e9c38c": "0de084cb8403d4055d353ff9bcd3df35",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e3/0334d571205202f8ba66e8371be5c8e7520922": "377dc40272c307d115cd596dd449cfee",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8cf07dac8e72bb4a91f749520b639627fd21dc": "3e39ec28bd118a173cca1d0b9aee9a24",
".git/objects/ef/b5fe2bd848beaeaffdee0aee36a2f980e27b2c": "b05afbf014b88877556f13c96bb09595",
".git/objects/f1/deb1bcb0eefb4237d013da9f506a2f5bfa1c47": "37a894b801696228e863ea9acbe4b89a",
".git/objects/f4/cd9d4ec319a3bdbbc1188f8711f5e03484e621": "ac570dba4f452e8d8d0679d44f1ac747",
".git/objects/f6/3616d02a0ad447d02a9f552d3a8e0b81541811": "3460357d8aef5ecddfb2174efdfac3ae",
".git/objects/f9/a4d84ce07620b86ea9dd49e755a5a838419bc6": "b5fe87031d2683bddf40375d1e09684f",
".git/refs/heads/main": "8617004b20574e24c61f48727f07cec9",
".git/refs/remotes/origin/main": "8617004b20574e24c61f48727f07cec9",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "6c8da1b2bc2a8406b0c720aa438f090e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "01ee673ae3e5f21e07d7e1ec70439700",
"/": "01ee673ae3e5f21e07d7e1ec70439700",
"main.dart.js": "d671129a0a19dfa0023301e3a09efa91",
"manifest.json": "972e0f8276a2d8fc5121e46045085ace",
"version.json": "a1634b3287617c0cb2bdf2f5e31b80bb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
