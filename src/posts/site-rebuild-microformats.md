---
title: "Rebuilding my site - Part 2: Microformats"
subtitle: "Adding a bit of spice to my HTML."
author: Carolina Gilabert
date: 2021-04-26
readingTime: 4 min
---

Something I never got around to doing on my old site was to thoroughly annotate the content with Microformats. In rebuilding it from the ground up, I wanted to correct that.

Microformats are a standard for annotating markup on the web, making it more meaningful. This makes your site machine readable, which is useful for things like RSS, but also for standardised interactions among websites.

## IndieWeb? What? Why? How?

The IndieWeb in a nutshell (at least for me) is the idea of owning your own space on the internet and owning the content you put out there. Other folks much smarter than I am have shared some great stuff on the IndieWeb. In particular, I'd recommend these three resources:

- [Jamie](https://www.jvt.me)'s Tech Nottingham [talk on the IndieWeb Movement](https://www.youtube.com/watch?v=qFXOZww5mmE): it's a comprehensive overview of what the IndieWeb is about and how you can get involved.
- [Ana](https://ohhelloana.blog)'s Smashing [blog post on autonomy online and the IndieWeb](https://www.smashingmagazine.com/2020/08/autonomy-online-indieweb/): it makes a strong case for the IndieWeb and gives you both an overview of it and tools to get started yourself.
- [Heydon](https://heydonworks.com)'s [Webbed Brief on the IndieWeb](https://briefs.video/videos/why-the-indieweb/) is great fun, has amazing production values, and really drives home the why.

[indiewebify.me](http://indiewebify.me/) is a good starting point in terms of implementation. It's likely that you'll need to reach for more docs, but at least it gets you going 🙂

## Microformats

If you'd like to annotate your site using Microformats, check out [the official docs](https://microformats.io/).  There are some good blog posts on the subject out there, but what worked for me was to follow these steps:

1. Review the content on my site.
2. Read the wiki pages to see available items and properties.
3. Look through a few sites in the wild to see how they're done.

🕵🏼‍♀️  If you want to snoop into people's sites, I recommend parsing their site [here](https://php.microformats.io/) and then looking through their markup to see how they structured their properties.

Some folks whose lovely sites I snooped on: [Jamie Tanna](https://www.jvt.me/), [Ana Rodrigues](https://ohhelloana.blog/), [Max Böck](https://mxb.dev/), and [Jeremy Keith](https://adactio.com/).

Nothing about my implementation is unique or groundbreaking, but if like me, you fare well by looking at real world examples, here are my snippets:

### Personal Card

A while back I implemented RSVPs on my site, with help from [Jamie's blog post](https://www.jvt.me/posts/2019/08/21/rsvp-from-your-website/). For that, I created an `h-card` that I hid from the page. I'm keeping that same setup for now. It looks like this:

```html
{% raw %}
<section class="p-author h-card" style="display: none">
    <a href="https://carol.gg" class="u-url">
        <img src="https://carol.gg/avatar.jpeg" alt="my face" class="u-photo" />
        <span class="p-name">Carolina Gilabert</span>
    </a>
    <p>
        You can say hi at
        <a href="mailto:hello@carol.gg" class="u-email">hello@carol.gg</a>
    </p>
</section>
{% endraw %}
```

In future, I'd like to make a feature of the `h-card` on my homepage, kinda like [Jamie has done at the top of his site](https://www.jvt.me/) or how [Ana has on her site's footer](https://ohhelloana.blog/).

### Feeds

I have a couple of feeds around my site: the latest posts section on my homepage and the blog page. For those, I'm using `h-feed`:

```html
{% raw %}
<ul class="h-feed">
    {%- for post in postList %}
    <li>
        <article class="h-entry">
            {% include "h-card.html" %}
            <a class="u-url" href="{{ post.url }}">
                <h2 class="p-name">{{ post.data.title }}</h2>
            </a>
            <span>
                <time class="dt-published" datetime="{{ post.data.date | isoDate }}">
                    {{ post.data.date | date }}
                </time>
                · {{ post.data.readingTime }}
            </span>
            <p class="p-summary">{{ post.data.subtitle }}</p>
        </article>
    </li>
    {%- endfor %}
</ul>
{% endraw %}
```

### Blog Posts

For the posts, I'm using `h-entry` and my layout looks like this:

```html
{% raw %}
<div class="h-entry">
    <h1 class="p-name">{{ title }}</h1>
    <p class="p-summary"><em>{{ subtitle }}</em></p>
    <span>
        <time class="dt-published" datetime="{{ date | isoDate }}">
            {{ date | date }}
        </time>
        · {{readingTime }}
    </span>
    {% include "h-card.html" %}
    <div class="e-content">
        {{ content | safe }}
    </div>
</div>
{% endraw %}
```

### Events

As I mentioned above, events were what I implemented first on this site, way back on the Gatsby days, so I could RSVP to IndieWeb events. This is what that partial looks like:

```html
{% raw %}
<article class="h-entry" id="{{ event.id }}">
    <a class="u-url" href="https://carol.gg/events#{{ event.id }}">
        <span role="img" aria-label="chainlink emoji"> 🔗 </span>
    </a>
    {% include "h-card.html" %}
    <span class="p-rsvp" value="{{ event.value }}"> {{ event.value }} </span>
    <h2>
        <a class="u-in-reply-to" href="{{ event.url }}"> {{ event.name }} </a>
    </h2>
    <time datetime="{{ event.date }}"> {{ event.date }} </time>
</article>
{% endraw %}
```

## What's next?

This is a pretty good starting point for layering more IndieWeb functionality onto my site. I'll probably do some basic styling next, and then re-implement IndieAuth.

It might happen next week, or next year, but it's coming. See you then! 😄

---
Edits:
* added a missing p-name class on the title tag in the feeds code sample
* changed the p-description class in the post code sample to a p-summary, to align with the feed properties