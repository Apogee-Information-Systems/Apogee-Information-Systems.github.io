(function () {
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }

    return new Promise(function (resolve, reject) {
      var area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.left = '-9999px';
      document.body.appendChild(area);
      area.select();

      try {
        document.execCommand('copy');
        document.body.removeChild(area);
        resolve();
      } catch (err) {
        document.body.removeChild(area);
        reject(err);
      }
    });
  }

  document.querySelectorAll('pre.code-block').forEach(function (pre) {
    if (pre.closest('.code-block-wrap')) {
      return;
    }

    var wrap = document.createElement('div');
    wrap.className = 'code-block-wrap';
    pre.parentNode.insertBefore(wrap, pre);
    wrap.appendChild(pre);

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'code-copy-btn';
    btn.textContent = 'Copy';
    btn.setAttribute('aria-label', 'Copy code to clipboard');
    wrap.appendChild(btn);

    btn.addEventListener('click', function () {
      var code = pre.querySelector('code') || pre;
      var text = code.textContent.replace(/\n$/, '');

      copyText(text)
        .then(function () {
          btn.textContent = 'Copied';
          btn.classList.add('is-copied');
          window.setTimeout(function () {
            btn.textContent = 'Copy';
            btn.classList.remove('is-copied');
          }, 2000);
        })
        .catch(function () {
          btn.textContent = 'Failed';
          window.setTimeout(function () {
            btn.textContent = 'Copy';
          }, 2000);
        });
    });
  });
})();
