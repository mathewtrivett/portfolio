---
title: 'Week notes #1'
slug: /blog/weeknotes-1
date: "2021-02-12"
excerpt: Introducing my new blog and starting fast.ai 
cta: Continue reading
external: false
published: true
template: blog
tags: ["Week notes"]
---

import Stat from '../../../src/components/Stat'

I want to write more as part of my practice. So, I've decided to jump on the [week notes](https://weeknot.es/) bandwagon.  Week notes feels like a low effort [😂] way for me to write each week, maybe some writing will turn into longer form pieces.

### <a id="new-personal-site" href="#new-personal-site">#</a> New personal site

I wanted a home online that wasn't just Medium so this week I've been working on getting this new personal site online. It's built with [Gatsby.js](https://www.gatsbyjs.com/) and hosted on [Netlify](https://www.netlify.com/). It's been a good excuse to learn / practice working with GraphQL.

I'm planning on writing more about software development here but also on [Medium](https://medium.com/@mathewtrivett). I want to use this site as a bit of playground for writing and new ideas. It's a work in progress but already has some pretty cool features like syntax highlighting and MDX formatting.

[Prism.js](https://prismjs.com/) allows me to write highlighted code snippets in different languages like JavaScript, Ruby, Elixir or JSX.

```jsx
<Stat pre='Increase of' number='500' post='users' />
```

I really enjoy writing in [Markdown](https://www.markdownguide.org/). Sometimes though I want a more visual way to present content in the flow of writing. [MDX](https://mdxjs.com/) is Markdown for the component era. For example, the code snippet above is actually a React component I've created called `Stat`. Rendered it looks like this:

<Stat pre='Increase of' number='500' post='users' />

MDX gives me the terseness of Markdown for  writing. When I need a more expressive way to present content, I can use React Components.

It's been a bit hacky getting started but I'll be developing my site in the open.

> [See the code on Github](https://github.com/mathewtrivett/portfolio)

### <a id="fast-ai" href="#fast-ai">#</a> Fast.AI

This week I started the [fast.ai](https://www.fast.ai/) Practical Deep Learning for Coders course. It teaches deep learning from practical application to theory. I'll be writing up a few study notes on this blog as I work through the course.

