import { favicons } from "favicons";
import fs from "fs-extra";

const source = "icons/favicon.png"; // Source image(s). `string`, `buffer` or array of `string`
const metaDescription =
  "Samm Mets OÜ põhilised tegevusalad on metsakinnistuste ost, metsa ülestöötamine, metsamaterjali ost, metsamaterjali vedu ning saematerjali tootmine.";

const configuration = {
  path: "/", // Path for overriding default icons path. `string`
  appName: "Samm mets", // Your application's name. `string`
  appShortName: null, // Your application's short_name. `string`. Optional. If not set, appName will be used
  appDescription: metaDescription, // Your application's description. `string`
  developerName: "", // Your (or your developer's) name. `string`
  developerURL: "", // Your (or your developer's) URL. `string`
  dir: "auto", // Primary text direction for name, short_name, and description
  lang: "et_EE", // Primary language for name and short_name
  background: "#FFE9D7", // Background colour for flattened icons. `string`
  theme_color: "#FFE9D7", // Theme color user for example in Android's task switcher. `string`
  appleStatusBarStyle: "black-translucent", // Style for Apple status bar: "black-translucent", "default", "black". `string`
  display: "browser", // Preferred display mode: "fullscreen", "standalone", "minimal-ui" or "browser". `string`
  orientation: "any", // Default orientation: "any", "natural", "portrait" or "landscape". `string`
  scope: "/", // set of URLs that the browser considers within your app
  start_url: "/", // Start URL when launching the application from a device. `string`
  preferRelatedApplications: false, // Should the browser prompt the user to install the native companion app. `boolean`
  relatedApplications: undefined, // Information about the native companion apps. This will only be used if `preferRelatedApplications` is `true`. `Array<{ id: string, url: string, platform: string }>`
  version: "1.0", // Your application's version string. `string`
  pixel_art: false, // Keeps pixels "sharp" when scaling up, for pixel art.  Only supported in offline mode.
  loadManifestWithCredentials: false, // Browsers don't send cookies when fetching a manifest, enable this to fix that. `boolean`
  manifestMaskable: false, // Maskable source image(s) for manifest.json. "true" to use default source. More information at https://web.dev/maskable-icon/. `boolean`, `string`, `buffer` or array of `string`
  icons: {
    // Platform Options:
    // - offset - offset in percentage
    // - background:
    //   * false - use default
    //   * true - force use default, e.g. set background for Android icons
    //   * color - set background for the specified icons
    //
    android: false, // Create Android homescreen icon. `boolean` or `{ offset, background }` or an array of sources
    appleIcon: false, // Create Apple touch icons. `boolean` or `{ offset, background }` or an array of sources
    appleStartup: false, // Create Apple startup images. `boolean` or `{ offset, background }` or an array of sources
    favicons: { background: false }, // Create regular favicons. `boolean` or `{ offset, background }` or an array of sources
    windows: false, // Create Windows 8 tile icons. `boolean` or `{ offset, background }` or an array of sources
    yandex: false, // Create Yandex browser icon. `boolean` or `{ offset, background }` or an array of sources
  },
};

try {
  clearOldFiles();

  /* GENERATE DATA */
  const iconsData = await favicons(source, configuration);

  /* GENERATE FILES */
  iconsData.images.map((image) => {
    fs.outputFileSync(`./static/${image.name}`, image.contents);
  });

  console.log("!!! Successfully generated icons !!!");
} catch (error) {
  console.log(error.message);
}

async function clearOldFiles() {
  fs.readdirSync("./static").forEach((file) => {
    if (isIconImageFile(file)) fs.removeSync("./static/" + file);
  });
  fs.removeSync("./static/manifest.webmanifest");
  fs.removeSync("./static/browserconfig.xml");
}

function isIconImageFile(name) {
  const starts = ["android-chrome", "apple-touch", "mstile", "favicon"];
  if (/\.(png|ico)$/.test(name)) {
    return starts.some((item) => name.startsWith(item));
  }
  return false;
}
