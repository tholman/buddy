## Buddy!

### Foreword
In the winter of 2016, I began creating Buddy. Initially Buddy was built to be a friend when working from home, something or someone to talk back at me every now and then, and inject a little humor into my life.

After some time, the ***surprise and delight*** of creating my own bot (if you could even call it that) went missing, and I opened Buddy up to some friends, with the promise that whatever code they write, will be running in my browser.

Its probably best if you watch me talk about him, to really experience what he became all about.

[![Video of me talking about buddy](https://s3.amazonaws.com/tholman.com/img/buddy-video-image.png)](https://youtu.be/RY8aCIfERHU?t=15m4s)

He's a nasty piece of work.

--

Understandably, there's some really weird code in his actual source, but due to overwhelming want, I'm open sourcing a really (read: really really) simple shell, of Buddy's existance. So people can create and play with their own "Buddy".

A few things that the "video" version has that this doesn't are: style injecting, some strange system to give default "popups", something that definitely manages timings, so certain things can happen at certain hours of the day. __But hey, perhaps the fun part is building those pieces yourself!__

### How it works!
#### tldr: 
Buddy injects scripts onto your page.

#### More weird version that makes little sense to myself

A few things you need to know... for the most part, pages funcitonality runs out of `pages/pageName.js` ... so reddit will run out of reddit.js.

The javascript for specific pages is injected by the `bindPage` file, which then requests page information from the `client` ... which is in 'bot/init.js'

A few other files exist. `actions.js` which is the client side functions like "speak", this maps to the `pageActions` speak function.

### Licence
The MIT License (MIT)

Copyright (C) 2016 ~ [Tim Holman](http://tholman.com) ~ timothy.w.holman@gmail.com

