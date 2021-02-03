---
title: "Rebuilding my site - Part 1: Eleventy"
subtitle: "A brief tour through my shiny new Eleventy site."
author: Carolina Gilabert
date: 2021-01-31
readingTime: 8 min
---

Almost a year ago, I got caught up in the enthusiasm of having all this free time at home (before it got consumed by existential and other assorted dreads) and decided to rebuild my website.

It took me a while, but I'm doing it now 🎉

## Why Eleventy?

I decided to ditch [Gatsby](https://www.gatsbyjs.com/) in favour of [Eleventy](https://11ty.dev), for a few reasons:

-   I want the code for my site to be as lean as possible, and I want it to have very little JavaScript. Gatsby renders all my pages beautifully on the server, but then proceeds to require them to be downloaded again and rendered in JS. Why? 😩
-   I wanted to wrangle fewer dependencies. A few months ago I wrote a blog post after months of not touching my site, and I immediately had to spend time debugging dependencies that broke for no reason. Not fun.
-   I wanted to build every aspect myself and learn things in detail in the process. I accidentally ended up working at "the back of the frontend" and I really wanna learn more about "the front of the frontend", so why not on my own site?

## But first, learning

I had my first go at the rebuild by reading the [Eleventy docs](https://www.11ty.dev/docs/), and I got pretty far, but felt like I needed a more comprehensive walkthrough before I could really get stuck in. Because Eleventy is so flexible, I felt a bit overwhelmed by choice, and a bit lost.

Fortuitously, Piccalilli came out with an Eleventy course at just the right time, and it's great! You should totally check it out: [https://piccalil.li/course/learn-eleventy-from-scratch](https://piccalil.li/course/learn-eleventy-from-scratch)

Doing the course really helped me see all that was possible and how the different parts of the site might hang together. After I finished that, I was ready to go.

My second go was a lot more successful, as I'd learnt a bunch in the course, and was able to reference a bunch of Eleventy-built websites and learning materials that popped up in the meantime.

My favourite sources for this were:

-   [Eleventy docs](https://www.11ty.dev/docs/)
-   The site we built on the [Eleventy from Scratch course](https://piccalil.li/course/learn-eleventy-from-scratch)
-   [11ty Rocks](https://11ty.rocks/)
-   [Max Böck's site](https://mxb.dev/)
-   [The a11y project's site](https://www.a11yproject.com/)

## Building time 🛠

My site is pretty simple, so there's nothing too special going on. It's also public on GitHub, so you can always [go have a snoop 👀](https://github.com/carolgilabert/carols-blog)

Having said that, let's go over some aspects of the migration:

### Layout

Eleventy allows you to use and extend layouts, which is awesome! It means I can set up my base layout with my navigation, footer, and all the good stuff, and then create a page as simply as:

```html
{% raw %}
---
layout: base.html
---

<h1>Hey there!</h1>
{% endraw %}
```

Isn't that neat?

### Navigation

I used the [Eleventy Navigation Plugin](https://www.11ty.dev/docs/plugins/navigation/) to manage my navigation. It's really simple and works well. All you need to do is add a couple of properties to your frontmatter, like so:

```html
{% raw %}
---
layout: base.html
eleventyNavigation:
    key: My Page
    order: 4
---

<h1>Hey there!</h1>
{% endraw %}
```

It then adds your page to its navigation collection, that you can loop through to render your navigation menu.

### Partials

Partials allow you to extract common blocks in your site and reuse them. They're super useful and easy to use. Once you've created a partial file, all you need to do to use it is:

```liquid
{% raw %}
{% include "my-partial.html" %}
{% endraw %}
```

### Environment variables

One of the things I needed was to be able to conditionally include a partial based on an environment variable. I use Fathom on this site for analytics, and only wanted to include their script for production builds of the site.

I managed to set that up using a [JavaScript data file](https://www.11ty.dev/docs/data-js/#example-exposing-environment-variables). These are the relevant parts in play:

```json
"scripts": {
    "dev": "ELEVENTY_ENV=dev npx @11ty/eleventy --serve",
    "build": "ELEVENTY_ENV=prod npx @11ty/eleventy"
}
```
These are the scripts I set up in my package.json.

```js
module.exports = {
    environment: process.env.ELEVENTY_ENV,
};
```
I then exposed my environment variable through a data file, in my case, site.js.

```liquid
{% raw %}
{% if site.environment == "prod" %}
{% include "fathom.html" %}
{% endif %}
{% endraw %}
```
Eleventy in turn exposes the contents of the data file under the file's name, so I can access my variable through `site.environment`.

### Image optimisation

Image management was by far the biggest hurdle. Gatsby for sure has a lot of drawbacks, but it handles images very well. Fortunately, while I was in the middle of struggling with it, Eleventy creator [Zach Leat](https://www.zachleat.com/) published [a blog post on the subject](https://www.zachleat.com/web/eleventy-image/).

The first issue I ran into was the location of all my images. I used to colocate blog post images with their respective markdown files. But in order to use [Eleventy image plugin](https://www.11ty.dev/docs/plugins/image/), I had to move all of those to a centralised images folder. If you're interested in how I did this, check out the notes I added at the end of this post.

Once I was set up with the image plugin, I ran into the second issue: even though I set up different sizes for my images, and a media query to pick the right size, my images were still being displayed at the narrowest width. I'm using the image plugin's generateHtml utility, which outputs markup that looks like this:

```html
<picture>
    <source
        type="image/avif"
        srcset="/images/6cccb4ec-600.avif 600w, /images/6cccb4ec-900.avif 900w"
        sizes="(max-width: 600px) 90vw, 60vw"
    />
    <source
        type="image/webp"
        srcset="/images/6cccb4ec-600.webp 600w, /images/6cccb4ec-900.webp 900w"
        sizes="(max-width: 600px) 90vw, 60vw"
    />
    <source
        type="image/jpeg"
        srcset="/images/6cccb4ec-600.jpeg 600w, /images/6cccb4ec-900.jpeg 900w"
        sizes="(max-width: 600px) 90vw, 60vw"
    />
    <img
        src="/images/6cccb4ec-600.jpeg"
        alt="My lovely, lovely picture."
        loading="lazy"
        decoding="async"
        width="600"
        height="400"
    />
</picture>
```

I [reached out to Zach](https://twitter.com/CarolSaysThings/status/1354436629255970822?s=20), who kindly helped me out. As it turns out, you need a CSS reset to make the images fluid, and allow them to stretch beyond the smallest size.

He recommended [this article](https://alistapart.com/article/fluid-images/) by Ethan Marcotte, which was a great read. I also ended up living on the [responsive images MDN page](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) for a little while, it's really good.

Ultimately I decided to leave the reset out for a little while, as I'm leaving the site HTML only for now. I guess it surprised me that you need CSS to get the picture element to behave adequately, I expected the solution to be HTML only.

I did learn a bunch from this experience, which was exactly the point, so good times all around 🎉

While I was writing this post, Zach published [this excellent blog post](https://www.zachleat.com/web/fluid-images/), detailing the whole situation and providing solutions. Highly recommend giving it a read 🙌🏼

## Next steps

I'm quite happy with the content migration, so I'm putting this new version of my site out there. I'm excited to build on it, and learn some more lessons along the way.

I'll do my best to document my progress, for myself, and for whoever else might find it useful.

Next I'll be looking at microformats, fonts and some basic CSS ✨

See you there! 👋🏼

___

## PS: Relocating images

As I mentioned earlier, I started off with my blog post images in the same folder as the markdown file:

```bash
├── pandemic-diaries
│   ├── github-contributions.png
│   ├── index.md
│   └── the-workweek.png
```

So I needed to do the following:

1. Move all images into `src/images` preserving their parent folders
2. Rename all markdown files after their parent folder and move those up a level
3. Replace all the markdown image tags with my new nunjucks shortcode

### 1: Moving the images

Disclaimer: these commands and scripts are what I used to do it on a Mac, your mileage may vary.

Copy the whole posts folder into the images folder:

```bash
cp -r src/posts src/images
```

Remove the markdown files from each post folder:

```bash
find . -name 'index.md' -delete
```

### 2: Renaming and moving the markdown files

For this bit, I wrote a little Node script. For each post, it pulls the markdown file out of the folder, renames it to match its old folder name, and deletes the folder (along with any images that were in it).

Since the images are no longer located with the posts, it makes sense to flatten it all into a single directory.

```js
{% raw %}
const fs = require("fs/promises");
const path = require("path");

async function doIt(startingFolder) {
    const allPostsDirectoryPath = path.join(__dirname, startingFolder);
    const postFolders = await fs.readdir(allPostsDirectoryPath);
    postFolders.forEach(async (postFolder) => {
        try {
            const postDirectoryPath = path.join(
                allPostsDirectoryPath,
                postFolder
            );
            const postFiles = await fs.readdir(postDirectoryPath);
            postFiles.forEach(async (file) => {
                if (path.extname(file) === ".md") {
                    // rename the markdown file with the folder's name
                    // and move it up a level
                    await fs.rename(
                        path.join(postDirectoryPath, "index.md"),
                        path.join(allPostsDirectoryPath, `${postFolder}.md`)
                    );
                }
            });

            // delete old post dir
            await fs.rm(postDirectoryPath, { recursive: true, force: true });
        } catch (e) {
            console.error("Whoopsie! Guess that was a folder xD ", e);
        }
    });
}

(async function () {
    try {
        await doIt(".");
        console.log(`successfully rejigged things`);
    } catch (error) {
        console.error("there was an error:", error.message);
    }
})("/tmp/hello");
{% endraw %}
```

### 3: Replacing the image tags

I also did this step through a script, using a regex to find all the image tags, retain the path and alt text of each, and then place those in a shortcode. At some point, I'd like to go back to using native markdown image tags, but that means I need to mess with the markdown parsing library, so I'm leaving it for now, in an attempt to keep things simple.

```js
{% raw %}
const fs = require("fs/promises");
const path = require("path");

async function doIt(startingFolder) {
    const allPostsDirectoryPath = path.join(__dirname, startingFolder);
    const posts = await fs.readdir(allPostsDirectoryPath);
    posts.forEach(async (post) => {
        if (path.extname(post) === ".md") {
            const postSlug = path.basename(post, ".md");
            // find all images
            // replace with same but with extra path
            let postContents = await fs.readFile(post, "utf8");
            postContents = postContents.replace(
                /!\[(?<alt>.*)\]\((\.\/)?(?<filename>.*)\)/gm,
                `{% Image "src$<filename>", "$<alt>", "(max-width: 600px) 90vw, 60vw" %}`
            );
            await fs.writeFile(post, postContents, "utf8");
        }
    });
}

(async function () {
    try {
        await doIt(".");
        console.log(`successfully replaced images`);
    } catch (error) {
        console.error("there was an error:", error.message);
    }
})("/tmp/hello");
{% endraw%}
```

Hope this helps! 🙂
