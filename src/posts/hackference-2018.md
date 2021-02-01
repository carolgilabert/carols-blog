---
title: Hackference 2018
author: Carolina Gilabert
date: 2018-11-13
readingTime: 7 min
---

I’d heard really good things about Hackference from various Nottingham based folks, so when the super early bird tickets were released, I bagsied one straight away! It might even have been the first one, my ticket reference was DWZ0-1 🤔

The venue was very nice and had a cosy and chilled out vibe, which really helped me relax and meet some people before I even had my first coffee (!)

## Talks
There were two tracks available, _Innovate_ and _Develop_. I ended up attending talks from both tracks throughout the day, and I really wish I could have seen them all 🙈

{% Image "src/images/posts/hackference-2018/mike.jpeg", "Mike Elsmore opening the conference", "(max-width: 600px) 90vw, 60vw" %}
📷 *[Mike Elsmore](https://twitter.com/ukmadlz) opening the conference*

I’ll try and briefly summarise my takeaways from them:

### Deno

[Martin Sonnenholzer](https://twitter.com/chaos_monster) gave us an intro to Deno, a very, very new V8 runtime developed by Ryan Dahl, creator of Node.js. It was originally written in Go, but has since been rewritten in Rust.
It supports TypeScript natively, which it then compiles to JavaScript on execution. One of the main characteristics of Deno is the fact that it doesn’t use a package manager at all, scripts are imported directly through a URL.
It is very much experimental, but worth having a play with 🙂

### From cave paintings 🎨 to emoji 😀: a visual tradition

[Lily Madar](https://twitter.com/Lily_2point0) took us all on a visual communication journey through the ages, leading to emoji.
She explored their origin, their current ubiquitousness in modern communication, how they help transcend language barriers and how they are another space in which representation matters 🙋‍♀️

### That’s magic! Combining WebVR and WebSpeech API

[Marta Bondyra](https://twitter.com/marta_bondyra) shared with us her learning on WebSpeech and WebVR APIs, and how she used those to create an excellent Harry Potter VR game for the browser! 👦🏻⚡️

{% Image "src/images/posts/hackference-2018/marta.jpeg", "Marta Bondyra", "(max-width: 600px) 90vw, 60vw" %}
📷 *[Marta Bondyra](https://twitter.com/marta_bondyra)*

She wrote a blog post about the game, with a recording of this talk, check it out:

[Interactions of the future — Combining WebVR with Speech Recognition](https://medium.com/typeforms-engineering-blog/interactions-of-the-future-combining-webvr-with-speech-recognition-a147f245b8b8)

### Getting started with kubernetes

[Bastian Hofmann](https://twitter.com/BastianHofmann) taught us the essentials about Kubernetes during his session. 
It was an excellent session, but quite hard to convey without writing a blog post on Kubernetes myself, so I’m going to be lazy and link to a recording of Bastian’s talk in a different conference, so you can check it out yourself 😅

[Bastian Hofmann - Getting started with Kubernetes](https://www.youtube.com/watch?v=bXRmFfuyxQ0)


### Why you should become an editor on the HTML5 spec

In the funniest session of the day, [Terence Eden](https://twitter.com/edent) told us about his involvement with the W3C and collaborating on the HTML spec.
He’s a very engaging speaker, and his talk encouraged me to open a [teeny tiny PR on the html spec](https://github.com/w3c/html/pull/1641)!
He remarked on how the web is for everyone, and as developers we don’t often think enough about inclusivity and accessibility.
By contributing to the spec, anyone can make a difference to billions of people.

His was my favourite quote of the day:
> If you don’t have the budget for accessibility, you don’t have the budget for your product. 

{% Image "src/images/posts/hackference-2018/terence.jpeg", "Terence Eden", "(max-width: 600px) 90vw, 60vw" %}
📷 *[Terence Eden](https://twitter.com/edent)*

### Introduction to modern identity

[Jeremy Meiss](https://twitter.com/IAmJerdog) went over some modern identity principles with us. Namely, how identity is broken down into:

1. Authentication: the way you login
2. Authorisation: right access at the right time
3. Personalisation: tailored user experience
4. Security: protecting data in motion and at rest

He also went over different options to authenticate users, such as passwordless and multi-factor authentication. He especially reinforced that good MFA should rely on both something you have and something you know.
Identity is incredibly difficult to get right, so Jeremy’s overall advice is that whenever possible, it’s better to buy than to build.

### Serverless: the missing manual

[James Thomas](https://twitter.com/thomasj) answered some of the most frequently asked questions about serverless, and told us all to:

> Be lazy and embrace the cloud.

Some of the things I made a note of:
* Where do I store my files? Object storage is a good bet.
* How do I install my DB? Use a managed DB service, and make sure to consider event support and scalability.
* How do I debug serverless? Logs and metrics.
* Can I set cost limits? You can set up rate limiting and billing alerts, and you most definitely should!

### Burnout and your meat computer

[Jessica Rose](https://twitter.com/jesslynnrose) closed the conference on a high note, encouraging us all to take care of ourselves, and do our best to avoid burnout.
She shared a burnout checklist:

- Have you become cynical or critical at work?
- Do you drag yourself to work and have trouble getting started once you arrive?
- Have you become irritable or impatient with co-workers, customers or clients?
- Do you lack the energy to be consistently productive?
- Do you lack satisfaction from your achievements?
- Do you feel disillusioned about your job?
- Are you using food, drugs or alcohol to feel better or simply not feel?
- Have your sleep habits or appetite changed?
- Are you troubled by unexplained headaches, backaches or other physical complaints?

If you said yes to _one_ of these or more, you might be suffering from burnout 🔥 Congratulations!

{% Image "src/images/posts/hackference-2018/jess.jpeg", "Jessica Rose", "(max-width: 600px) 90vw, 60vw" %}
📷 *[Jessica Rose](https://twitter.com/jesslynnrose) telling us all to take it easy*

The good news is that Jess also gave us lots of great advice on how to recover from burnout, like:
* Do less, outsource what you can.
* Start saying no. (That is a big one for me 🙈)
* Be sparing with your heck budget.
* Ask for help when you need it.
* Practice forgiveness.
* Don’t be a jerk.

She also gave us some great news:

> You’re not an idiot whisperer.

Jess is a brilliant speaker, and I encourage you to attend one of her talks if you get the chance. A recording of this talk is available [here](https://www.youtube.com/watch?v=gcYRhATiyO4).

## Hackathon
Hackference hosts the conference on a Friday, and a hackathon over the weekend. I was lucky enough to team up with Nottingham tech power couple [Anna](https://twitter.com/anna_hax) and [Jamie](https://twitter.com/JamieTanna) 👩‍💻👩‍💻👨‍💻

{% Image "src/images/posts/hackference-2018/anna_hax.jpeg", "Anna hacking", "(max-width: 600px) 90vw, 60vw" %}
📷 *[Anna](https://twitter.com/anna_hax) mid hack*

{% Image "src/images/posts/hackference-2018/jamie_trex.jpeg", "Jamie being attacked by a T-Rex", "(max-width: 600px) 90vw, 60vw" %}
📷 *[Jamie](https://twitter.com/JamieTanna) mid T-Rex attack*

The hackathon was held at the Impact Hub in Birmingham. It is a lovely space, clearly aimed at collaboration. 

{% Image "src/images/posts/hackference-2018/impact_hub.jpeg", "Impact Hub", "(max-width: 600px) 90vw, 60vw" %}

For our hack, we decided to build a multi factor authentication flow, using one of the guidelines from Jeremy Meiss’ talk: something you have and something you know.
Jamie had been telling us about [IndieAuth](https://indieauth.com/) as a way of gaining ownership over your own identity rather than relying on other services like Google or Facebook. So our initial idea was to use IndieAuth as the first factor, but because of typical hackathon time constraints, we ended up using Google login for that.
For the second factor, we decided to call the user and get them to enter a PIN using [Nexmo’s DTMF API](https://developer.nexmo.com/voice/voice-api/guides/dtmf), as it would allow the user to use their phone (something they have) and the PIN (something they know).
For the implementation we used a React app for the frontend, and a couple of Lambdas to orchestrate the flow with Auth0 and Nexmo.

{% Image "src/images/posts/hackference-2018/who_dis.png", "Cat illustration with caption 'new login, who dis?'", "(max-width: 600px) 90vw, 60vw" %}

📷 *Home page illustration for ‘New login, who dis?’ by our in-team illustrator [Anna Dodson](https://twitter.com/anna_hax) 😋*

And… we won!

We won some really cool Auth0 Hacktoberfest t-shirts and we won an amazing Nanoleaf kit each from Nexmo!
{% Image "src/images/posts/hackference-2018/team_and_jeremy.png", "Our hack team with Jeremy Meiss, from Auth0", "(max-width: 600px) 90vw, 60vw" %}
📷 *Our hack team with [Jeremy Meiss](https://twitter.com/IAmJerdog) from Auth0*

{% Image "src/images/posts/hackference-2018/team_and_sam.jpg", "Our hack team with Sam Machin, from Nexmo", "(max-width: 600px) 90vw, 60vw" %}
📷 *Our hack team with [Sam Machin](https://twitter.com/sammachin) from Nexmo*

During our hack time, we took a [Hacktoberfest](https://hacktoberfest.digitalocean.com/) break, in which we scoured GitHub for good issues to close and get our Hacktoberfest PRs in.
I’d like to thank Anna and Jamie again for helping and encouraging me to do it. Thanks to them, I got [my first PR](https://github.com/AnnaDodson/hacktoberfest-website/pull/34) to an open source project done that day 💛

## Wrap up
It was my first time at Hackference, but I’ll definitely make sure to come back. The talks were brilliant and informative, and the hackathon was super chilled out and great fun!

I also made a [twitter moment](https://twitter.com/i/moments/1051806012519456768) to collect some of the 💛

Hopefully see you next year!
