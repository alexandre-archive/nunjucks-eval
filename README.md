# nunjucks-eval [![Version](http://img.shields.io/npm/v/nunjucks-eval.svg)](https://www.npmjs.org/package/nunjucks-eval) [![Build Status](https://travis-ci.org/alexandrevicenzi/nunjucks-eval.svg?branch=master)](https://travis-ci.org/alexandrevicenzi/nunjucks-eval) [![Coverage Status](https://coveralls.io/repos/alexandrevicenzi/nunjucks-eval/badge.svg?branch=master&service=github)](https://coveralls.io/github/alexandrevicenzi/nunjucks-eval?branch=master)

[![npm package](https://nodei.co/npm/nunjucks-eval.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/nunjucks-eval/)

Turning nunjucks evil

## How to install?

`npm install nunjucks-eval`

## How to use it?

```js
var nunjucks = require('nunjucks'),
    njeval = require('nunjucks-eval'),

var env = nunjucks.configure({ autoescape: true });

njeval.install(env);
```
And then:

```html
{% eval year="new Date().getFullYear()" %}

<span>{{ year }}</span>
```

And with multiple variables:

```html
{% eval month="new Date().getMonth() + 1", year="new Date().getFullYear()" %}

<span>{{ month }}/{{ year }}</span>
```

eval tag is similar to [set](http://mozilla.github.io/nunjucks/templating.html#set) tag.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/alexandrevicenzi/nunjucks-eval/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
