sherlocke.github.io
===================

Official website and development blog for Sherlocke.

### Overview

This is a standard [Jekyll][jekyll] static site.

### Viewing the site locally

You should have Ruby 2.1.x and Python 2.7.x (for [Pygments][pygments]) installed. I recommend using [rbenv][] and [pyenv][] to manage your Ruby & Python installations.

First, you'll need [bundler][]:

```bash
gem install bundler
```

Bundle the required gems:

```bash
bundle install
```

Then clone this repository and serve the site locally:

```bash
git clone git@github.com:sherlocke/sherlocke.github.io.git
cd sherlocke.github.io/
jekyll serve
```

You can use the `watch` flag when developing to instantly see the changes that you've made.

```bash
jekyll serve --watch
```

_NOTE: Changes to `config.yml` will not be instantly applied; you'll need to restart the server._

### Branching

Use the `draft` branch to make any updates to the website. Whenever you want to publish your changes to the website, merge `draft` into `master` and then deploy:

```bash
# After making updates, merge `draft` into `master`
git checkout master
git merge draft

# Deploy to GitHub Pages
git push origin master
```

_IMPORTANT: It's okay for commits on_ `draft` _to contain bugs/issues, but_ `master` _should always point to a commit that is ready to be published._


[jekyll]:   http://jekyllrb.com/ "Jekyll"
[pygments]: http://pygments.org/ "Pygments"
[rbenv]:    https://github.com/sstephenson/rbenv
[pyenv]:    https://github.com/yyuu/pyenv
[bundler]:  http://bundler.io/
