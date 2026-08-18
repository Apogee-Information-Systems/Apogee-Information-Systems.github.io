(function () {
  var FEED_URL = 'https://apogeewatcher.com/blog/feed.xml';
  var POST_LIMIT = 5;
  var BLOG_HOME = 'https://apogeewatcher.com/blog';

  function decodeHtml(text) {
    var el = document.createElement('textarea');
    el.innerHTML = text;
    return el.value;
  }

  function formatDate(pubDate) {
    var date = new Date(pubDate);
    if (Number.isNaN(date.getTime())) return '';
    return new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(date);
  }

  function truncate(text, max) {
    if (!text) return '';
    var clean = text.replace(/\s+/g, ' ').trim();
    if (clean.length <= max) return clean;
    return clean.slice(0, max).trimEnd() + '…';
  }

  function renderPosts(container, posts) {
    var list = document.createElement('ul');
    list.className = 'blog-feed-list';
    list.setAttribute('aria-label', 'Latest Apogee Watcher blog posts');

    posts.forEach(function (post, index) {
      var item = document.createElement('li');
      item.className = 'blog-feed-item';

      var idx = document.createElement('p');
      idx.className = 'blog-feed-idx';
      idx.textContent = String(index + 1).padStart(2, '0');

      var title = document.createElement('h3');
      var titleLink = document.createElement('a');
      titleLink.className = 'blog-feed-title';
      titleLink.href = post.link;
      titleLink.target = '_blank';
      titleLink.rel = 'noopener';
      titleLink.textContent = post.title;
      title.appendChild(titleLink);

      var meta = document.createElement('p');
      meta.className = 'blog-feed-date';
      meta.textContent = post.date;

      var excerpt = document.createElement('p');
      excerpt.className = 'blog-feed-excerpt';
      excerpt.textContent = post.description;

      item.appendChild(idx);
      item.appendChild(title);
      item.appendChild(meta);
      item.appendChild(excerpt);
      list.appendChild(item);
    });

    container.replaceChildren(list);
  }

  function renderError(container, message) {
    container.innerHTML = '<p class="blog-feed-message">' + message + '</p>';
  }

  function loadBlogFeed() {
    var container = document.getElementById('blog-feed');
    if (!container) return;

    fetch(FEED_URL)
      .then(function (response) {
        if (!response.ok) throw new Error('Feed request failed');
        return response.text();
      })
      .then(function (xml) {
        var doc = new DOMParser().parseFromString(xml, 'application/xml');
        if (doc.querySelector('parsererror')) throw new Error('Feed parse failed');

        var items = doc.querySelectorAll('item');
        var posts = Array.from(items)
          .slice(0, POST_LIMIT)
          .map(function (item) {
            var titleNode = item.querySelector('title');
            var linkNode = item.querySelector('link');
            var dateNode = item.querySelector('pubDate');
            var descNode = item.querySelector('description');

            return {
              title: decodeHtml(titleNode ? titleNode.textContent : ''),
              link: linkNode ? linkNode.textContent.trim() : BLOG_HOME,
              date: formatDate(dateNode ? dateNode.textContent : ''),
              description: truncate(
                decodeHtml(descNode ? descNode.textContent : ''),
                180
              ),
            };
          })
          .filter(function (post) {
            return post.title && post.link;
          });

        if (!posts.length) throw new Error('No posts found');
        renderPosts(container, posts);
      })
      .catch(function () {
        renderError(
          container,
          'Latest posts could not be loaded. Visit the Apogee Watcher blog for updates.'
        );
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadBlogFeed);
  } else {
    loadBlogFeed();
  }
})();
