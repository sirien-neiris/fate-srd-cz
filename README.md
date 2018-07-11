# Fate Roleplaying Game SRD - Czech

This repository contains formatted SRD documents 
for the Fate Roleplaying Game. The source documents are from 
[Evil Hat Productions, LLC](http://www.faterpg.com/licensing/).

You'll find the following rules in this project:

- Fate Core System System Reference Document
- Fate Accelerated Edition System Reference Document
- Fate System Toolkit System Reference Document

## Folder structure

Markdown source files for individual books

- ```src/FateCore``` - Fate Core (Fate základní pravidla)
- ```src/FAE``` - Fate Accelerated (Fate zrychlená edice)
- ```src/Toolkit``` - Fate System Toolkit (Fate systémové nástroje)


## Technical

Powered by [VuePress](https://vuepress.vuejs.org/)

### Build static page

```bash
docker-compose up
```

### Run development server

```bash
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```

## License

This work is based on [Fate Core System](http://www.faterpg.com/) and Fate Accelerated Edition, products of Evil Hat Productions, LLC, developed, authored, and edited by Leonard Balsera, Brian Engard, Jeremy Keller, Ryan Macklin, Mike Olson, Clark Valentine, Amanda Valentine, Fred Hicks, and Rob Donoghue, and licensed for our use under the [Creative Commons Attribution 3.0 Unported license](http://creativecommons.org/licenses/by/3.0/).
