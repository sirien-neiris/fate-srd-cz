---
sidebar: auto
---


# Formátování

## Fate znaky

| znak | html |
| :---: | :---: |
| <span class="fate-font">+</span> | `<span class="fate-font">+</span>` |
| <span class="fate-font">-</span> | `<span class="fate-font">-</span>` |
| <span class="fate-font">0</span> | `<span class="fate-font">0</span>` |
| <span class="fate-font">a</span> | `<span class="fate-font">a</span>` |
| <span class="fate-font">c</span> | `<span class="fate-font">c</span>` |
| <span class="fate-font">d</span> | `<span class="fate-font">d</span>` |
| <span class="fate-font">o</span> | `<span class="fate-font">o</span>` |


## odkazy

[Nápověda knihovny](https://vuepress.vuejs.org/guide/markdown.html)

[Fate core](/FateCore/zaklady)

## Boxy

test odstavce sss

::: tip Muj název pro typ
This is a tip
:::

::: warning Muj název pro varování
This is a warning
:::

::: danger Muj název pro Chybu
This is a dangerous warning
:::

## Komentáře

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can  

## listy

1. First ordered list item
2. Another item
   * Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
    1. Ordered sub-list
4. And another item.
    
    You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).
    
    To have a line break without a paragraph, you will need to use two trailing spaces.
    
    Note that this line is separate, but within the same paragraph.
    
    (This is contrary to HTML the typical GFM line break behaviour, where trailing spaces are not required.)
    
1. test

* Unordered list can use asterisks
- Or minuses
+ Or pluses

## Speciální zápis zdroju obrazků a url 
I get 10 times more traffic from [Google][1] than from
[Yahoo][2] or [MSN][3].

[1]: http://google.com/        "Google"
[2]: http://search.yahoo.com/  "Yahoo Search"
[3]: http://search.msn.com/    "MSN Search"

![alt text][id]


[id]: ~../images/Powered-by-Fate-Final-Light-BG-300x117.png "Fate logo"

