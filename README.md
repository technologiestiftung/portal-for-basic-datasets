![](https://img.shields.io/badge/Built%20with%20%E2%9D%A4%EF%B8%8F-at%20Technologiestiftung%20Berlin-blue)

# ODIS Dataportal for Berlins basic datsets of Berlin

In this data portal, the Open Data Informationsstelle Berlin (ODIS) provides processed and particularly relevant geodata sets. The focus is on geodata sets that, in our view, are frequently in demand and are used for many data analyses and visualizations for the Berlin area. The portal is a metadata portal: each dataset links out to the [WFS-Explorer](https://wfsexplorer.odis-berlin.de/) where the underlying WFS service can be explored and downloaded.

## Setup

```
npm install
npm run dev
```

## Overview

### source/assets

Static files like images, CSS, etc.
Those files are coppied to \_site/assets, based on the .eleventy.json

```
eleventyConfig.addPassthroughCopy("source/assets", "assets");
```

### source/\_data/site.js

Basic configs for the site, like baseUrl, etc.
baseUrl is the most important, for local development set this to your localhost setup, for deployment, this needs to be set to the final url (https://daten.odis-berlin.de).

### source/\_data/datasets.source.json

The list of datasets and the single source of truth for what is shown on the site. An array of `{ "title", "wfs" }` objects. The `wfs` value has the `https://wfsexplorer.odis-berlin.de/?wfs%2F` prefix stripped off (only the ending is stored); full URLs (those starting with `http`) are kept as-is. To add or update a dataset, edit this file.

### source/\_data/datasets.js

Reads `datasets.source.json`, re-prepends the `https://wfsexplorer.odis-berlin.de/?wfs%2F` prefix to the trimmed entries and exposes `{ title, wfs, url }` to the start page, where `url` is the full wfsexplorer link.

### source/\_includes/layouts

- default.liquid: base template for the html files (head, header, footer)
- startpage.liquid: the main list page

### source

- 404.liquid: redirects any unknown / old sub-page to the main page
- index.liquid: the main page (index.html)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Lisa-Stubert"><img src="https://avatars.githubusercontent.com/u/61182572?v=4?s=64" width="64px;" alt=""/><br /><sub><b>Lisa-Stubert</b></sub></a><br /><a href="https://github.com/technologiestiftung/portal-for-basic-datasets/commits?author=Lisa-Stubert" title="Code">💻</a> <a href="https://github.com/technologiestiftung/portal-for-basic-datasets/commits?author=Lisa-Stubert" title="Documentation">📖</a> <a href="#content-Lisa-Stubert" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.sebastianmeier.eu/"><img src="https://avatars.githubusercontent.com/u/302789?v=4?s=64" width="64px;" alt=""/><br /><sub><b>Sebastian Meier</b></sub></a><br /><a href="https://github.com/technologiestiftung/portal-for-basic-datasets/commits?author=sebastian-meier" title="Code">💻</a> <a href="https://github.com/technologiestiftung/portal-for-basic-datasets/commits?author=sebastian-meier" title="Documentation">📖</a></td>
    <td align="center"><a href="http://www.awsm.de/"><img src="https://avatars.githubusercontent.com/u/434355?v=4?s=64" width="64px;" alt=""/><br /><sub><b>Ingo Hinterding</b></sub></a><br /><a href="#content-Esshahn" title="Content">🖋</a> <a href="#maintenance-Esshahn" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://fabianmoronzirfas.me/"><img src="https://avatars.githubusercontent.com/u/315106?v=4?s=64" width="64px;" alt=""/><br /><sub><b>Fabian Morón Zirfas</b></sub></a><br /><a href="#maintenance-ff6347" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/vogelino"><img src="https://avatars.githubusercontent.com/u/2759340?v=4?s=64" width="64px;" alt=""/><br /><sub><b>Lucas Vogel</b></sub></a><br /><a href="https://github.com/technologiestiftung/portal-for-basic-datasets/commits?author=vogelino" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Credits

<table>
  <tr>
    <td>
      <a src="https://odis-berlin.de">
        <br />
        <br />
        <img width="200" src="https://logos.citylab-berlin.org/logo-odis-berlin.svg" />
      </a>
    </td>
    <td>
      Together with: <a src="https://citylab-berlin.org/en/start/">
        <br />
        <br />
        <img width="200" src="https://logos.citylab-berlin.org/logo-citylab-berlin.svg" />
      </a>
    </td>
    <td>
      A project by: <a src="https://www.technologiestiftung-berlin.de/en/">
        <br />
        <br />
        <img width="150" src="https://logos.citylab-berlin.org/logo-technologiestiftung-berlin-en.svg" />
      </a>
    </td>
    <td>
      Supported by: <a src="https://www.berlin.de/rbmskzl/en/">
        <br />
        <br />
        <img width="80" src="https://logos.citylab-berlin.org/logo-berlin-senweb-en.svg" />
      </a>
    </td>
  </tr>
</table>
