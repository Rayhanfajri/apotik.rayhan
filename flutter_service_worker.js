'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/AUTO_MERGE": "81c0a38a0e369782332e7dbffb26aa04",
".git/COMMIT_EDITMSG": "6d2fd4056babc68a3df3615c6361a522",
".git/config": "71c8b2eb43cee217261b608eb65e7e3d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7522b13bfca8ad57ef68e2e879c7d483",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "effb1f8a9f9769b3c233bdea881d5f69",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f841b0bb1a4343f711cb897e41063d82",
".git/logs/refs/heads/main": "7b8f3d5dc9d9202b1ef6245aecb8d4f0",
".git/logs/refs/remotes/origin/main": "25798d4adddbc648612b93320f3bdbd8",
".git/MERGE_HEAD": "60e010b399d034c0e321c149f1924c48",
".git/MERGE_MODE": "d41d8cd98f00b204e9800998ecf8427e",
".git/MERGE_MSG": "9ad39fd00946d98e1160067a86493c74",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/02/3d6e793d028d1239500bd84def3dd52e32836f": "f09912cd476bc2092a68c6cc6e5a0a26",
".git/objects/02/9afe9dbd8f8f28494ba16c4c1f2a736cc890ed": "4480177f334751a3621d01e778dacc51",
".git/objects/03/1d4a907cbff44870516ddf732f40c45425509b": "83452865081ca51916160e21daf28263",
".git/objects/04/28534de57609e921787b3e318976ef4da4f38c": "dfa86c2c2fe4097bf0ff26292262a4c2",
".git/objects/04/3a6553586ce9a7c22748536fd4708781d4735c": "5c3f56ee72a8169ba99c42e86a6cbd3c",
".git/objects/06/a295b6ace4010a66ecf8343de048c97842766b": "628a8bedd4ee77f1176e14001f191e91",
".git/objects/0a/1b14aca44641e73e2fefc0ed1a67afe814bef3": "ce4a6f1b7be9d772476be7f64d0a1d49",
".git/objects/0d/1d848868fdb28e8d33dd980a80833722c0e705": "fe9ffc9b7a71231d8224ffca64373f8d",
".git/objects/15/4c1472ae6cd1892a75e786fa20c223708e24d3": "d79449fd6d9d2e4fbd7a2ac8074c82b2",
".git/objects/17/744a48681753ef0c3baa0be7a75df1cc1a8449": "eac02bbc29c105718519bf85cbcfef38",
".git/objects/1d/87722d04457948e4f4dd375ff04df4f72a12bd": "d79f3c725a93b481d5dcc2e7f245d861",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/29/30b81361ed99978292d94748ae8cfef3089c6c": "008bcc798e197a39c5c9db49be6fd89b",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2d/c2716519f6681b9aad56441f2c01966b2c260a": "32b930428d9288e2793e2ceec30f4996",
".git/objects/2f/0e04ac7908673adf4529251b0396dcb93855bd": "9a56b97b7da8e66d9e24c3809ed2159d",
".git/objects/32/782ed884ac17fe6dfa929676ede8b87a2e493a": "63081b582d3a41b63b0cb1db520f0c79",
".git/objects/33/ae7ce8dc36ea51d80cd72bc34128e40e627340": "36b985c0d1417b475956f3597933820e",
".git/objects/3a/ce84dea034c4cace0d8322ec09c1a59028bc80": "c3186da8f9d94114a97db7984163c7be",
".git/objects/3f/61230143d7d727beb0e564d13fed4c744cceec": "07be5298d3c9a4ac2c7881a829762437",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/f0ddf66ddbf7b1d3117f4cbc2072b1a9c14918": "6405b68439b9a8b350f206cc6306e95e",
".git/objects/47/fa1232209f27efcb241e9751b655c69533afc8": "5f39d5f0b14c9505ff43c191b8609ecd",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/54/d2c7c2ef29c2c384a797e61e8a1ed63cbd61b1": "9b723233dde86fa17a370d57d093262a",
".git/objects/56/7a27e054a9b5a84b085a96e47f85728e078abe": "08af30e16b5f1d49ff506b1b4a11b31b",
".git/objects/5e/cbbbb6a20a638747d1e5581c1e07ff43f3d7ad": "88b92091ddb5144d1830d2850f414418",
".git/objects/60/128cd9feb42ac1e117e8eb826af400c0f42ffc": "65a05d8645f5e60b9611c63212e81411",
".git/objects/60/4edd146611fa92c851a2aee7463466e1e3e407": "8a742f6d9e5b1074620f04f6471c924c",
".git/objects/67/0d851eb6f74e8223600c6402e8bf5397147d60": "56e9ae71fd6a01739323ab7b2178cee6",
".git/objects/71/0fad74aeb3dc96a663814f4f59084ecbfb3102": "8b11448b16ade654c57e4d86a99c8872",
".git/objects/79/7ea714062b4fc0753e6f243d78da1299e22ac7": "1744f1feb5cb76fbe0de509569561867",
".git/objects/7a/2a24ef4146f2041c91f53428d2efb793fc402a": "f930a6fc5b5bf43b69ce0727004c4bfe",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7a/ccbabf4d3a53ad3d0c22144fc62717dc791420": "bb84a0ec431a8c881a3611b871fd3ab1",
".git/objects/82/4e8d9eaf375ca4672a95c65839cef08d44b527": "375ab48f7b13b31dfa40456cad77c2df",
".git/objects/87/25d8989e26659b22e467fd6c397c7332daa0af": "0d18e61d3bf634a9ec6c2d8847edd095",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/197ecfb4868a9b845395c669155cc07cdd03e0": "ec736b875758c4e22b0e717ee44df414",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a0/c74c53f10f7b48a6ebf6090726a0a549b0815a": "857ef1f34197c0e37f011947a1f13b29",
".git/objects/a2/5260a830498d3b784681ff2d44be97a99aef82": "81326d1d624e1975ad645b5200d36d03",
".git/objects/a5/b2b26b306a020ec928968a0726ea2a538ef236": "9a2a31c7ffa7cc3f8ef18bf43fbb754a",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ab/68e907abab43b3558b24130a7487b81bbc305a": "1a22c409297ca3633d2365687fa3de4d",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ae/a65e4bb061e62aad00363f4afeca8c53206575": "3a8b6bad55c14f39f7aeede7afd8f6e3",
".git/objects/b2/d1b0b798b7a1db7bf2d38f416573155d78bbaf": "34bc0baa808adc64560a5e7fea41169e",
".git/objects/b5/aca96c8c8043d6f65e5677a704eda82db1222c": "a172da585d1298b1f88042046a7ef572",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b6/dd8b7a352d616613aa0a1489c807af7501da04": "dbc3fa62be8b3b326b809c87496474c0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/f28c45176fd1a4c0a58e7e3bad8b4069fa3ea6": "26c0124c46eeab4ccfa055d5c97c9744",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/6fc67e4d624daf40bade6fb83f19b677ec794b": "75c1b392c04621462e3a022d00a733bf",
".git/objects/bc/7d993f94baf32ca11e5f5dc5412aac12a668a9": "d782f8a82d795ae96da7df117f4c51bd",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/28c42816e1ba98b5202e9a751a7a71c42d96e6": "963cafb9d7043e8a4b08248318128b18",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cf/b9240f6507c06b0a0b1df86ec3c2c26b60b25a": "c129e627942c8773ce29e31999593bdb",
".git/objects/d1/0c85c6d03fc6f7eaa3d92201ad2506d2f6f7f3": "e6207a06ae009529e23274bdc7bed3a0",
".git/objects/d3/5bc1365aed1ac1737005d64e404764d9176c1b": "05c53bc36ba4605309d023b8baf3bf1f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/c14aa55d52710a4ce17fb17dbb946adbb1c1e8": "7d740e15a314083400afc7b2f3dedf6d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e5/38c60a5e3bffe03e0a2594b26e449f628ee8af": "1dc2f62e4948231bca3be0a8999cdb15",
".git/objects/eb/41e06ac6e1e225955ef36fa9fd15a82d5034ea": "119ecfccea74323a7b0a2bb8ae2c08ae",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f1/39f9c597145cc2cee4f986963023381bd8cec4": "b18ef31ad8aaad0d2b0b606114d7a7a2",
".git/objects/f1/803940ffe5959eb244dc5549c1fc512a57d12a": "978be29cf481513698c4dd5149d510f6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/af392fd5137f368bee615714f30592db99033b": "953cf38116d9fa8d0ee1de08bf841208",
".git/objects/f6/cc06a0d471df5df1f35082b09b45fced798d05": "b3ed116bd3c82d600d635270058f4345",
".git/objects/fc/57c031408137d4f59d7d0ca08c49ea61802994": "7570719ddc7583c755c2a3b2beedb7d7",
".git/objects/fc/8f64cbe0a1d1b974f521dec0acb06bd4a98592": "d8df3349c1040432de116cc33ef599bd",
".git/objects/fc/ee511d4694159f469681c679a5bebc2b2244ae": "1bf35ca2a6459d2567a5facc7c838657",
".git/objects/fd/4b15c6863fba8c696c1e59db588f1ab799f766": "6ca3c855512526086b1f716da4fafde3",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/ORIG_HEAD": "54e293b4ffdc52e9e77e0a6ccd72630b",
".git/refs/heads/main": "54e293b4ffdc52e9e77e0a6ccd72630b",
".git/refs/remotes/origin/main": "60e010b399d034c0e321c149f1924c48",
"assets/AssetManifest.bin": "f929d26b906eb8c2e374c675cf6661b4",
"assets/AssetManifest.bin.json": "874c64dd703f2549e92ec4fde4e521a5",
"assets/AssetManifest.json": "ee13d9d14310519a3c211076d1871a2f",
"assets/assets/images/amoxicillin.jpg": "8aaa2b6d173b28fe6338431c8661dfa7",
"assets/assets/images/Azithromycin.jpeg": "967169ec755f9a9d97063963f38d39a9",
"assets/assets/images/back.jpg": "fdece0a95bb8ccb37a589a747054bdb9",
"assets/assets/images/banner.png": "94eee771f982458cbd36099ce3356aac",
"assets/assets/images/Bg_Cb.png": "5f2ec46c29e40ca4c31501f1980adb8f",
"assets/assets/images/Cetirizine.png": "4625d01c050ea3249436a028a2e818f6",
"assets/assets/images/Dexamethasone.jpg": "cb6c4c8db7a8845c9a052cfa2080b578",
"assets/assets/images/ibuprofen.jpg": "2cf754021f57869f1027e38207845204",
"assets/assets/images/logo.png": "5dbe33effb59c74a299622503a52899a",
"assets/assets/images/Multivitamin.jpg": "a22a226884d2b1706963f4b046e95cb0",
"assets/assets/images/paracetamol.png": "691de823237567e5b1a34eb8522b4a32",
"assets/assets/images/VitaminC.jpg": "3606baa7c73546d35178604dfc938d6b",
"assets/assets/images/vitamind.jpg": "e0510f331b60666f39d3cd981b7b0872",
"assets/assets/videos/background.mp4": "a7416676303e1a04626a5bd66a7ff4c0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6f7e803dbcd3f4b7e9a851ddb3d75cd1",
"assets/NOTICES": "29992fc592684a2624ea3c189618dfa0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "9a40650c42fff62fe5c2a3f5af92dda2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "214a81ed3cf1f6e6de5b7b24a1b3b514",
"/": "214a81ed3cf1f6e6de5b7b24a1b3b514",
"main.dart.js": "5c386a90247d9b5ada666828ebbdf6c7",
"manifest.json": "9a5554aa0483f2b32bd3c56589673a6c",
"version.json": "e02e9c4ea28148d3f38c66d7c63482a2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
