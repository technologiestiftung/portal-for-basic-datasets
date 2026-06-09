const datasets = require("./datasets.source.json");

// The prefix that was stripped from the URLs in datasets.source.json.
// Entries that start with this prefix removed (i.e. don't begin with "http")
// get it prepended again to rebuild the full wfsexplorer link.
const PREFIX = "https://wfsexplorer.odis-berlin.de/?wfs%2F";

module.exports = function () {
  return datasets.map(({ title, preview, wfs }) => {
    const url = wfs.startsWith("http") ? wfs : PREFIX + wfs;
    const previewImage = preview ? `assets/previews/${preview}.jpg` : null;
    return { title, wfs, url, preview: previewImage };
  });
};
