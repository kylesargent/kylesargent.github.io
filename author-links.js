(() => {
  const authorUrls = {
    "Kyle Sargent": "https://kylesargent.github.io",
    "K. Sargent": "https://kylesargent.github.io",
    "Ruiqi Gao": "https://ruiqigao.github.io",
    "Philipp Henzler": "https://henzler.github.io",
    "Charles Herrmann": "https://www.linkedin.com/in/charles-herrmann-9573379/",
    "Aleksander Holynski": "https://holynski.org",
    "Li Fei-Fei": "https://profiles.stanford.edu/fei-fei-li",
    "Jiajun Wu": "https://jiajunwu.com",
    "Jason Zhang": "https://jasonyzhang.com",
    "Jason Y. Zhang": "https://jasonyzhang.com",
    "Zizhang Li": "https://kyleleey.github.io/",
    "Tanmay Shah": "https://www.linkedin.com/in/tashah/",
    "Hong-Xing Yu": "https://kovenyu.com",
    "Hong-Xing \"Koven\" Yu": "https://kovenyu.com",
    "Hong-Xing “Koven” Yu": "https://kovenyu.com",
    "Yunzhi Zhang": "https://cs.stanford.edu/~yzzhang",
    "Eric Ryan Chan": "https://ericryanchan.github.io",
    "Dmitry Lagun": "https://scholar.google.com/citations?user=sY8lt7AAAAAJ&hl=en",
    "Deqing Sun": "https://deqings.github.io",
    "Jing Yu Koh": "https://jykoh.com/",
    "Han Zhang": "https://sites.google.com/view/hanzhang",
    "Huiwen Chang": "https://www.linkedin.com/in/huiwen-chang-999962156/",
    "H. Chang": "https://www.linkedin.com/in/huiwen-chang-999962156/",
    "Pratul Srinivasan": "https://pratulsrinivasan.github.io/",
    "Kyle Hsu": "https://www.kylehsu.org",
    "Justin Johnson": "https://web.eecs.umich.edu/~justincj",
    "V. Jampani": "https://varunjampani.github.io/",
    "Varun Jampani": "https://varunjampani.github.io/",
    "A. Kar": "https://abhishekkar.info/",
    "R. Tucker": "https://research.google/people/richardtucker/",
    "W. T. Freeman": "https://billf.mit.edu/",
    "D. Salesin": "https://www.cs.washington.edu/people/faculty/salesin",
    "B. Curless": "https://www.cs.washington.edu/people/faculty/curless",
    "C. Liu": "https://people.csail.mit.edu/celiu/",
    "Ce Liu": "https://people.csail.mit.edu/celiu/",
    "Kevis-Kokitsi Maninis": "https://kkmaninis.github.io/",
    "Andreas Engelhardt": "https://aengelhardt.com/",
    "Andre Araujo": "https://research.google/people/andrearaujo/",
    "Ameesh Makadia": "https://amakadia.github.io/",
    "Howard Zhou": "https://research.google/people/howardzhou/",
    "Hsin-Ping Huang": "https://hhsinping.github.io/",
    "Junhwa Hur": "https://hurjunhwa.github.io/",
    "Erika Lu": "https://erikalu.com/",
    "Ming-Hsuan Yang": "https://faculty.ucmerced.edu/mhyang/",
    "Basile Van Hoorick": "https://basilevh.github.io/",
    "Rundi Wu": "https://rundiwu.github.io/",
    "Ege Ozguroglu": "https://www.cs.columbia.edu/~egeozguroglu/",
    "Ruoshi Liu": "https://ruoshiliu.github.io/",
    "Pavel Tokmakov": "https://thoth.inrialpes.fr/people/tokmakov/",
    "Changxi Zheng": "https://www.cs.columbia.edu/~cxz/",
    "Carl Vondrick": "https://www.cs.columbia.edu/~vondrick/",
    "Haoyi Duan": "https://haoyi-duan.github.io/",
    "Michael Rubinstein": "https://people.csail.mit.edu/mrub/",
    "William T. Freeman": "https://billf.mit.edu/",
    "Forrester Cole": "https://fcole.github.io/",
    "Noah Snavely": "https://www.cs.cornell.edu/~snavely/",
    "Lu Jiang": "https://www.lujiang.info/",
    "Ramin Zabih": "https://www.cs.cornell.edu/rdz/",
    "Dilip Krishnan": "https://dilipkay.wordpress.com/",
    "Stephen Tian": "https://s-tian.github.io/",
    "Blake Wulfe": "https://wulfebw.github.io/",
    "Katherine Liu": "https://www.thekatherineliu.com/projects.html",
    "Sergey Zakharov": "https://zakharos.github.io/",
    "Vitor Guizilini": "https://vitorguizilini.weebly.com/"
  };

  const names = Object.keys(authorUrls).sort((a, b) => b.length - a.length);

  function makeAuthorAnchor(name, url) {
    const a = document.createElement("a");
    a.href = url;
    a.textContent = name;
    a.className = "author-link";
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    return a;
  }

  function linkifyInTextNode(textNode, name, url) {
    const text = textNode.nodeValue;
    if (!text.includes(name)) {
      return false;
    }

    const frag = document.createDocumentFragment();
    const parts = text.split(name);
    parts.forEach((part, idx) => {
      if (part) {
        frag.appendChild(document.createTextNode(part));
      }
      if (idx < parts.length - 1) {
        frag.appendChild(makeAuthorAnchor(name, url));
      }
    });

    textNode.parentNode.replaceChild(frag, textNode);
    return true;
  }

  function addAuthorStyles() {
    const style = document.createElement("style");
    style.textContent = `
      .author-link {
        color: #000 !important;
        text-decoration: none;
      }
      .author-link:hover,
      .author-link:focus {
        text-decoration: underline;
      }
    `;
    document.head.appendChild(style);
  }

  function linkifyAuthorList(container) {
    container.querySelectorAll("a").forEach((a) => a.classList.add("author-link"));

    names.forEach((name) => {
      const url = authorUrls[name];
      const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          if (!node.nodeValue || !node.nodeValue.includes(name)) {
            return NodeFilter.FILTER_SKIP;
          }
          const parent = node.parentElement;
          if (!parent) {
            return NodeFilter.FILTER_SKIP;
          }
          if (parent.closest("a")) {
            return NodeFilter.FILTER_SKIP;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      });

      const textNodes = [];
      let current;
      while ((current = walker.nextNode())) {
        textNodes.push(current);
      }

      textNodes.forEach((textNode) => linkifyInTextNode(textNode, name, url));
    });
  }

  function initAuthorLinks() {
    addAuthorStyles();
    document.querySelectorAll(".author-list").forEach(linkifyAuthorList);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAuthorLinks);
  } else {
    initAuthorLinks();
  }
})();
