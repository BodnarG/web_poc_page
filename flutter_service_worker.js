'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "cc12fd32a5f48ad92a13dea4622fd22c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2d272b51b7c343ae7fd7162c8e8137d8",
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
".git/index": "1eb6d5c33d708bb0239d3e0315198afe",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "845a70d582fc0d4df5283f3562907391",
".git/logs/refs/heads/main": "845a70d582fc0d4df5283f3562907391",
".git/logs/refs/remotes/origin/main": "872aa89e05b5e733d869d9a25b68c0f3",
".git/objects/00/acd3bae2acc4fa103134fc577069801e3eb66b": "88a6b5d7092f5d3c53bbb92a4baa366e",
".git/objects/00/e18dd250c0aa9447b9a018156c2fa84b9173d9": "6c56aa532bf6f3cd94435d8818d509b0",
".git/objects/03/413ed46b85dea23d36d13f84ae8dbe15ad3028": "12803ec11e9fa8d62257d04c53ab5d2b",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/dc75ea5d8201215ea0bc548d1cf8439dfccd3c": "4f094c929b7a15bccf0040a12c906995",
".git/objects/18/13d95998deee84487c738dfb6c105f84ca8ed3": "6b696ebd240c3579c1f40320d630f856",
".git/objects/1d/869d1168350cf406fd8479ea4f7bb1bc39785f": "cc9d013feee8215f57da7b1f297ea7a2",
".git/objects/1d/bcc14163515a5b2383310ec14f006e977e28df": "af37e28c7305cc4fa0a78e696e255685",
".git/objects/26/83ee204c4840fdc99e07c1e8c784bf83f2b96f": "469fbcc5b5f5b4ee0dd078c4d839f57a",
".git/objects/26/95f7696d9d32842e9876c3f8890a5abc120a58": "283b8c6bed8d55192b08103b5552cd6a",
".git/objects/27/f7029147efbdabf085bc6d68540758dc6f23e3": "7ed30e3daefa5b1906c35ec06f4a0770",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/c8b59da45036944bf74145a03b8270947df447": "329621ded061c16c66e55e948898e2f7",
".git/objects/37/9a3e6b08f656e424c5a8cbb42888c26350e558": "3cd92f4c019068cccfa96eae854be057",
".git/objects/3b/ce916bdf260b86c77402734637205c471a63f1": "8ca64f086213d3d03790263e79c8bd36",
".git/objects/3f/ec1da3a7ee285a6e2dfbe4420a4b7a584c21d9": "c547a1bada900e7cb2084ab9cfb2d8ab",
".git/objects/42/8cf90e62c10697add2c532c99ce6985a772477": "583cd80cda27e0d7b0e2013963d60121",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/6bace460870ee56141254126788705484da7e3": "fdcb871098ba787883b62ccce095a8eb",
".git/objects/50/741a5c4234f41ae29f82c640ccb4063d940765": "75b9a9f2650635fdc00a8f0c6e9a1592",
".git/objects/51/a0a95df587b27e69edc5ac6745b23e5fc64495": "94466851c81d38ece57de32eab6a71a7",
".git/objects/56/4de5a5a9e95a72ecca4856fcaf160985a5c786": "6ba76600212b33e7dec47570f74b6e74",
".git/objects/59/7c0ca9c6f125c0d5ec4d584327c503ee3a3cc7": "a976633d77fb3d47fae64f5c57e1efb4",
".git/objects/5a/f4a9c2afe5c4d8682ed871381a0a65d232b188": "a97270102557578d2909185f0d787439",
".git/objects/5b/c45c0885113fc6d8a352075989a08997d69ff8": "c5fb09db590614311eda80746d00679c",
".git/objects/60/751145e903c202dd52a5ddd6ee1bcf9f03f948": "c7aadec5d3624ded6d1b8ca44cce5732",
".git/objects/65/ecafcc509504d4bc4ac0c9b5b1317c3d4ea6f7": "37d57cc14a439c630169c0956ef45a99",
".git/objects/69/0bde9d11e2966c73cb6b46e4eb5a0834f5e768": "8c4421d7604ba16c9adeb16c2426c3af",
".git/objects/6a/8fa9186bd20f37e4f5303544d26f5024a1b32e": "b659cf8bd2c6dfd12757a23dc869c147",
".git/objects/74/ec85d89cac59c68181e7880aa8708f483d1f89": "f9f94778891140be9f48a351736dc4bb",
".git/objects/78/5facdb306b5585527bd91a42957fbb55d88ff7": "42a88c865da652da457b1e4afa4604e8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/28006246a94a352e3984e9c033cfc623c1c10b": "560165074af650efff4a5d27cdd62ed1",
".git/objects/83/8132ed4be19401697f24cfa5eba91705ee4e00": "3386cc821f1b5697ab7bc94ec21b4d03",
".git/objects/84/7bc6b36f86c75e4e6c686546a054221495a0bf": "c195f568a72d4bdc963e370d7ba7085e",
".git/objects/85/138eb7364eccd8b665a7c81c9c3fc63df7eb8e": "fcf0effc08b0f133569a01319da40f3c",
".git/objects/85/3444f468954c8e0b36590f0937e46045c7afad": "5f61ca930b6fe8706fc1251c32acf5e0",
".git/objects/88/429d1f07ab68a857a8102d71dbf17baffb465b": "8bdb77ac606a23d5aeffe5b654f679ca",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/bd28f6a1b200f63e429fbdd8480158da269874": "ccb8211a44b8a43e4e705c02804827b9",
".git/objects/90/2c7306ea850a2952ee1a4fe97d36ec6c420824": "697f012267662b7e4df614198f928fa7",
".git/objects/90/46977d9328d4fa62b1e1dc3ea2bd4fa08e95ab": "3ccd8ba2f678506fc6a456157d19c478",
".git/objects/94/8e1bd63622a0f95d4fccfadca5b35ba3bc5879": "a101161b63430cddac07b6b908c68e48",
".git/objects/99/8c6cbb8c06dc299f496469cc599e14e99ba3b2": "aa10f4bef37bb115bddeffa50a236679",
".git/objects/a0/c153feb20fb9efb07acfdb291fad0cdc7ca284": "f0b05122a92d75cb231739fb709ba59f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/18b0f08190aff26c9c808ac2c97f57b0fd8c14": "4e445468bc90d17e5e09aad3f30b7488",
".git/objects/bd/e82eee181cd64f1b8a669e7d8fa5da92c2c0c5": "c24ee70707f7a16615fec0a7d140db21",
".git/objects/c5/2b83d7c6f70d7d598fce26bffab38dfbc52ade": "72188da7f44f9cacea89c256c6d71e68",
".git/objects/c5/e0e7bdb59c6d294fb74d3a16948e311c8612b0": "f766dd1abe915ffe12cdd57794604ddc",
".git/objects/c7/5b5462d7c475b263b9efe208e81f7c998d7832": "6ef5397c5b32f0131dc95a25fddfa712",
".git/objects/c9/ed347c4e2aeae35abbd78469a5bfb509e9c38c": "0de084cb8403d4055d353ff9bcd3df35",
".git/objects/d1/53d086432704abe3db89f4d359e24775b14db9": "d2df96c29eaa8fae39f498d7e246b246",
".git/objects/d2/b5603317fc2cc290c9b6c0b4bdde966e547b48": "a77cb9cd9c87378cf873678d4063df2e",
".git/objects/d5/a0822262ef3e4bdcbcb57f24f168d9ee714773": "fadb987271205dd91c880ddfe80f5e43",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/432f3103c1ddb6d87fcf8dcc4168b1562fc068": "f2879698e7cef9123d0e3421dd25fee3",
".git/objects/db/9e6c7311300c47dd44e55f1bcbd33d26cf42b2": "29d452f50d07b6340cd0560cbcb2b7ff",
".git/objects/e3/0334d571205202f8ba66e8371be5c8e7520922": "377dc40272c307d115cd596dd449cfee",
".git/objects/e4/6f6da8f911c9d4ef27d9c978e2ea12884b2ef2": "73cb456e85812ec7ac3a963b2f06212c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/2bb5334718ef720ae1a6a72b3ea524cc82cade": "f10d5489648e20047332fab251f28393",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8cf07dac8e72bb4a91f749520b639627fd21dc": "3e39ec28bd118a173cca1d0b9aee9a24",
".git/objects/ef/b5fe2bd848beaeaffdee0aee36a2f980e27b2c": "b05afbf014b88877556f13c96bb09595",
".git/objects/f1/deb1bcb0eefb4237d013da9f506a2f5bfa1c47": "37a894b801696228e863ea9acbe4b89a",
".git/objects/f4/cd9d4ec319a3bdbbc1188f8711f5e03484e621": "ac570dba4f452e8d8d0679d44f1ac747",
".git/objects/f6/3616d02a0ad447d02a9f552d3a8e0b81541811": "3460357d8aef5ecddfb2174efdfac3ae",
".git/objects/f9/a4d84ce07620b86ea9dd49e755a5a838419bc6": "b5fe87031d2683bddf40375d1e09684f",
".git/refs/heads/main": "c005c73bdf1c312df3a92f0c981578f9",
".git/refs/remotes/origin/main": "c005c73bdf1c312df3a92f0c981578f9",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "4cddfb00e3fb3cfefa6ad8df7c3a14a3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "41dffce4a116cc69bca9e671c61c3bb2",
"/": "41dffce4a116cc69bca9e671c61c3bb2",
"main.dart.js": "da6a3d37d9141fdffe1933847b917bb2",
"manifest.json": "972e0f8276a2d8fc5121e46045085ace",
"version.json": "8c530df21a02321eb533308b87b53392"
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
