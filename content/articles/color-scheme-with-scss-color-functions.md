---
title: Creating a color scheme with scss color functions
author: remcohendriksen
image: badass-color-scheme.jpg
---

A balanced color scheme can be easily created by using some math. Picking one base color and calculate all the variants from that is a really simple way to create one.

In this post, you will learn how to create one using scss functions [darken()](https://sass-lang.com/documentation/modules/color#darken), [lighten()](https://sass-lang.com/documentation/modules/color#lighten), [saturate()](https://sass-lang.com/documentation/modules/color#saturate) and [desaturate()](https://sass-lang.com/documentation/modules/color#desaturate)

```scss
$primary: #bada55; // This is our base color
$primary-lighter: saturate(lighten($primary, 15%), 15%);
$primary-lightest: saturate(lighten($primary, 25%), 25%);
$primary-darken: desaturate(darken($primary, 15%), 15%);
$primary-darkest: desaturate(darken($primary, 25%), 25%);
```

This will generate the following color scheme:

<div class="boxes" style="display:flex; height: 64px;">
    <div style="flex:1; background-color: #eafbb4" ></div> 
    <div style="flex:1; background-color: #d9f18a" ></div> 
    <div style="flex:1; background-color: #bada55" ></div> 
    <div style="flex:1; background-color: #8ea939" ></div> 
    <div style="flex:1; background-color: #6a7a35" ></div>
    
</div><br /><br />

## Why saturate and desaturate the colors?

Use `saturate()` on the light colors, because colors can become quite dull when you lighten them. When you saturate them a bit, you bring some life back in the color.

When you darken colors, the colors can become to vibrant to be in balance with the base color. That's why you tame them with `desaturate()`.

## Grayscales

This method works also great on creating a set of gray scale colors. You won't be needing the `saturate()` and `desaturate()` function obviously.

```scss
$black: #111;
$grey-darkest: lighten($black, 10%);
$grey-darker: lighten($black, 30%);
$grey: lighten($black, 50%);
$grey-lighter: lighten($black, 70%);
$grey-lightest: lighten($black, 90%);
```

Leave a comment below if you have got any questions about this article.
