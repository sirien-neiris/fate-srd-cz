---
sidebar: auto
---

# Obsluha GitHub repozitáře

## Pojmy

 * **Git** - systém verzování souborů
 * **GitHub** - stránky kde může mít člověk veřejný git repozitář 
 zde je potřeba mít učet pokud chcete editovat SRD
 * **Repozitář** - složka kde se používá git

## Základní fungování 

 * Máme hlavní repozitář daného SRD ve kterém je aktuální verze textů v markdownu
 * Přispívání a editování jednotlivbých části se provádní přes fork aktuální 
 verze provedení požadovaných změn a vytvoření pull requestu
 * pulrequest projde kontrolou osoby zodpovědné za SRD a pak kontrolou člověka zodpovědného za technické řešení.
 * Po uspěšné kontrole dojde k začlenění requestu do SRD a aktualizace webu
 
## Jak přidat nebo změnit obsah 

### Vytvoření forku

Fork vytvoříte tlačítkem na obrázku v repozitáři SRD

![Vytvoření forku](~./images/navod1.jpg)

### Práce s vlastním repozitářem 

Výsledkem forku je že se vám po chvíli zobrazí váš vlastní repozitář s SRD, 
vydíte info že je to výš repozitář a odkud byl forknut. V pravo vidíte lačítka pro přidání souborů
a pod nimi část kde mužete procházet jednotlivé složky. 

![Vytvoření forku](~./images/navod2.jpg)

Vás bude zajímat složka src ve které by měly být jednotlivé složky pro jednotlivé knihy SRD. Skrze ní se mužete dostat k jednotlivíms tránkám v markdovnu.

![Vytvoření forku](~./images/navod3.jpg)

Když budete mít daný soubor otevřený a uvidíte jeho obsah můžete kliknout na tužtičku a začít editovat. 

![Vytvoření forku](~./images/navod4.jpg)

Po skončení editace soubor comitnete, uložíte tak jeho změny pokud je to první commit ve forku 
doporučuji místo comitu do větve master vytvořit novou větev. 
Pokud už máte větev vytvořenou tak ji nechte vybranou. 

Po potvrzení na vás vyskočí formulář jestli chcete udělat pull request pokud už nechcete nic dál 
editovat tak mužete změny odestal pul requestem ke schválení a začlenění do srd. 

![Vytvoření forku](~./images/navod5.jpg)

Pokud ale chcete dělat další změny tak mužete pokračovat v editaci jen pozor aby ste byly ve správné větvi kde děláte změny. 

![Vytvoření forku](~./images/navod6.jpg)

### Vytvoření Pull requestu

Když už budete mít všechny změny hotové tak a budete je chtít odeslat ke zpracování do SRD tak kliknete na tlačítko create pull request

![Vytvoření forku](~./images/navod7.jpg)

Zde zvolíte větev ve které ste změny dělaly. Popíšete změny které ste udělaly. A vytvoříte lull request. 

![Vytvoření forku](~./images/navod8.jpg)

Zde vydíte vytvořený pull request který čeká na zpracování  začlenení z naší strany. 

### Smazání svého forknutého repozitáře

Pokud už máte vše hotové a odeslané mužete smazat repozitář a příště si forknout aktuální verzi znovu. 

![Vytvoření forku](~./images/navod9.jpg)

Smazat jde repozitář v nastavení.

![Vytvoření forku](~./images/navod10.jpg)

## Struktura složek

* /src/ - záknladní složka s daty
* /src/.vuepress - složka s nastavením SRD nepotřebujete měnit
* /src/menu.js - zde je potřeba přidávat kapitoly do menu 
* /src/README.md - hlavní stránka SRD 
* /src/{složka s knihou SRD}/ - složka pro všechny data k srd knížce
* /src/{složka s knihou SRD}/images/ - složka s obrázky pro danou knížku  
* /src/{složka s knihou SRD}/*.md - jednotlivé stránka knihy v markdownu
