(() => {
  'use strict';
  const content = window.GOODAY_CONTENT;
  const main = document.querySelector('main');
  let lang = 'zh';
  try { lang = localStorage.getItem('gooday-language') === 'en' ? 'en' : 'zh'; } catch {}
  let filter = 'all';
  let previousRoute = '';
  const icons = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="10.8" cy="10.8" r="6.5"/><path d="m16 16 4.8 4.8"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="m6 6 12 12M18 6 6 18"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 7h16M4 12h16M4 17h16"/></svg>'
  };
  const copy = {
    zh: {
      home:'首页',journal:'手记',works:'作品',about:'关于',brandSub:'GOODAY · 日有清欢',search:'搜索',menuOpen:'打开导航',menuClose:'关闭导航',nav:'主导航',mobileNav:'移动端导航',close:'关闭搜索',
      eyebrow:'文字 · 作品 · 日常',hero:'留一隅清静，<br><span class="soft">与日子慢慢相逢。</span>',heroDescription:'我是花飞雨追。<br>在这里写下日常，收藏灵感，也安放慢慢完成的作品。',readNotes:'翻阅手记',viewWorks:'看看作品',artMotto:'山静 · 日长',artCaption:'一山一水，皆是心境',welcome:'小站初开，欢迎老朋友来坐坐。',welcomeEn:'A LITTLE CORNER, A GOOD DAY.',
      notesTitle:'案头手记',worksTitle:'慢慢成形',allNotes:'全部手记',allWorks:'全部作品',noteIntro:'日子寻常，<br>也值得被写下。',noteIntroText:'一些生活的片段，一些不急着回答的问题。',blankLabel:'留白 · 待落笔',blankTitle:'纸已备好，等故事慢慢落笔。',blankText:'第一篇手记还在酝酿。<br>下次来时，也许就有了新的篇章。',workHeading:'想法有了形状，<br>便成为作品。',workText:'这里将收录我慢慢完成的创作。<br>眼下，先为灵感留一个位置。',workArtLabel:'GOODAY / A WORK IN THE MAKING',workArtCorner:'静候 · 成形',workStatus:'作品集待启',aboutHello:'你好，我是花飞雨追。',aboutShort:'以文字记日常，以创作留心意。欢迎你，路过我的小天地。',moreAbout:'认识一下',footerNote:'落笔有声，来日方长。',footerMeta:'文字与作品，慢慢生长',
      journalEyebrow:'一页一页，记下生活',journalHeading:'手记',journalDescription:'有时写生活，有时记灵感。让细碎的日子，在文字里停一停。',journalGlyph:'记',worksEyebrow:'把心里的想法，慢慢做出来',worksHeading:'作品',worksDescription:'收集创作的痕迹，也记录从念头到成形的过程。',worksGlyph:'作',all:'全部',essay:'随笔',life:'生活',ideas:'灵感',design:'设计',creation:'创作',other:'其他',postUnit:'篇手记',workUnit:'件作品',journalEmptyTitle:'这一页，尚待落笔。',journalEmptyText:'文字还在路上。先留一张白纸，等一个想认真记录的瞬间。',worksEmptyTitle:'好作品，值得慢慢来。',worksEmptyText:'这里还没有公开的作品。灵感已有了自己的位置，待成形时，再与你分享。',filteredEmpty:'这一栏，暂且留白。',filteredText:'这个分类还没有内容，可以先去其他分类坐坐。',backHome:'回到首页',viewAll:'查看全部',journalFoot:'不赶路的时候，就写几行字。',worksFoot:'让每一份心意，都找到自己的形状。',
      aboutEyebrow:'有朋来，便是好日子',aboutHeading:'关于我',aboutDescription:'在文字与创作之间，安放一方自己的天地。',aboutGlyph:'我',portraitLabel:'花飞雨追',room:'这间书房',roomText:'写博客 · 展作品 · 见朋友',now:'此刻',nowText:'小站初开，内容慢慢添置',nameLabel:'我的名字',contactTitle:'来日，常联系。',contactText:'如果文字或作品让你想起什么，欢迎以后来聊聊。',contactPending:'联系方式尚未公开。',emailMe:'写一封信',resume:'下载简历',resumePending:'简历待补充',resumeHint:'简历准备好后，会在这里开放下载。',
      searchTitle:'寻一段文字',searchPlaceholder:'搜索手记或作品…',searchHint:'ESC 关闭 · 搜索文字与作品',searchStart:'找一句话，或一个想法。',searchStartText:'输入关键词，翻找这间小书房里的手记与作品。',searchEmpty:'这里暂时还是一张白纸。',searchEmptyText:'等手记和作品添上之后，就能在这里找到它们。',noResults:'暂时没有找到。',noResultsText:'换一个词试试，也许就在下一页。',searchResultUnit:'条相关内容',backJournal:'返回手记',backWorks:'返回作品',articleEnd:'写在这里，与你分享。',copyLink:'复制链接',copied:'链接已复制',copyFailed:'请复制浏览器地址栏中的链接',readTime:'分钟阅读',visitWork:'查看作品',missingTitle:'这一页，还没有写下。',missingText:'也许链接有误，也许它还在酝酿。回到首页，再慢慢逛逛。',artAlt:'淡墨远山、小亭、松树与湖中一叶扁舟'
    },
    en: {
      home:'Home',journal:'Journal',works:'Works',about:'About',brandSub:'GOODAY · A QUIET CORNER',search:'Search',menuOpen:'Open navigation',menuClose:'Close navigation',nav:'Main navigation',mobileNav:'Mobile navigation',close:'Close search',
      eyebrow:'WORDS · WORKS · EVERYDAY LIFE',hero:'A quiet corner.<br><span class="soft">A day, well noticed.</span>',heroDescription:'I’m 花飞雨追.<br>A place for everyday words, passing ideas, and works taking shape.',readNotes:'Read the journal',viewWorks:'Explore works',artMotto:'STILL HILLS · SLOW DAYS',artCaption:'A landscape of the mind',welcome:'The door is open. Come in, old friend.',welcomeEn:'A LITTLE CORNER, A GOOD DAY.',
      notesTitle:'From the journal',worksTitle:'Taking shape',allNotes:'All entries',allWorks:'All works',noteIntro:'Ordinary days.<br>Worth a few words.',noteIntroText:'Fragments of life, and questions that can wait.',blankLabel:'A PAGE, WAITING',blankTitle:'The paper is ready. A story will follow.',blankText:'The first entry is still finding its words.<br>Perhaps there will be a new chapter next time.',workHeading:'An idea takes shape.<br>A work begins.',workText:'A place for things I make, at my own pace.<br>For now, a little room for inspiration.',workArtLabel:'GOODAY / A WORK IN THE MAKING',workArtCorner:'TAKING SHAPE',workStatus:'A collection to come',aboutHello:'Hello, I’m 花飞雨追.',aboutShort:'Everyday words and thoughtful creations. Welcome to my little corner.',moreAbout:'A little about me',footerNote:'A few words today. More days to come.',footerMeta:'Words and works, growing slowly',
      journalEyebrow:'LIFE, A PAGE AT A TIME',journalHeading:'Journal',journalDescription:'Everyday moments and passing thoughts, given a little space on the page.',journalGlyph:'Words',worksEyebrow:'FROM A SMALL IDEA TO SOMETHING REAL',worksHeading:'Works',worksDescription:'A collection of creations, and the journeys that bring them to life.',worksGlyph:'Made',all:'All',essay:'Essays',life:'Life',ideas:'Ideas',design:'Design',creation:'Creation',other:'Other',postUnit:'entries',workUnit:'works',journalEmptyTitle:'A page, waiting for words.',journalEmptyText:'The words are on their way. A blank page awaits a moment worth keeping.',worksEmptyTitle:'Good things take their time.',worksEmptyText:'No works have been shared yet. The ideas have a place here; when they take shape, you’ll find them.',filteredEmpty:'A little room for something new.',filteredText:'Nothing in this category yet. Feel free to explore the others.',backHome:'Back to home',viewAll:'View all',journalFoot:'When there is no hurry, write a few lines.',worksFoot:'A little care. A shape of its own.',
      aboutEyebrow:'A FRIEND’S VISIT MAKES A GOOD DAY',aboutHeading:'About me',aboutDescription:'A small place of my own, between words and making.',aboutGlyph:'Hello',portraitLabel:'花飞雨追',room:'This space',roomText:'A journal · A collection · A meeting place',now:'Right now',nowText:'Newly opened, slowly filling the shelves',nameLabel:'My name',contactTitle:'Let’s keep in touch.',contactText:'If something here sparks a thought, there will be a place to share it.',contactPending:'Contact details have not been shared yet.',emailMe:'Write a letter',resume:'Download résumé',resumePending:'Résumé to come',resumeHint:'A download will be available here when the résumé is ready.',
      searchTitle:'A word, an idea',searchPlaceholder:'Search the journal and works…',searchHint:'ESC to close · Search words and works',searchStart:'Find a word, or an idea.',searchStartText:'Enter a keyword to explore the journal and works.',searchEmpty:'A blank page, for now.',searchEmptyText:'Once entries and works are added, you’ll find them here.',noResults:'Nothing found this time.',noResultsText:'Try another word. It may be on the next page.',searchResultUnit:'results',backJournal:'Back to journal',backWorks:'Back to works',articleEnd:'A thought, left here to share.',copyLink:'Copy link',copied:'Link copied',copyFailed:'Please copy the link from your browser’s address bar',readTime:'min read',visitWork:'Visit the work',missingTitle:'This page is still unwritten.',missingText:'The link may have wandered, or the page may still be taking shape. Let’s return home.',artAlt:'An ink landscape with distant mountains, a pavilion, pine trees and a small boat on a lake'
    }
  };
  const t = key => copy[lang][key] || key;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const localized = value => typeof value === 'object' && value !== null ? (value[lang] || value.zh || value.en || '') : String(value ?? '');
  const arrow = '<span class="arrow" aria-hidden="true">↗</span>';
  const safeUrl = value => {
    if (!value || typeof value !== 'string') return '';
    if (/^(https?:\/\/|mailto:|\.\/|\/[^/])/.test(value)) return esc(value);
    return '';
  };
  const routeFor = (item,type) => `#/${type}/${encodeURIComponent(item.slug)}`;
  const sorted = list => [...list].sort((a,b) => String(b.date || '').localeCompare(String(a.date || '')));
  const dateLabel = date => {
    if (!date) return '';
    const parsed = new Date(date + 'T00:00:00');
    return Number.isNaN(parsed.getTime()) ? esc(date) : new Intl.DateTimeFormat(lang === 'zh' ? 'zh-CN' : 'en-GB',{year:'numeric',month:'2-digit',day:'2-digit'}).format(parsed);
  };
  const writingMark = '<div class="writing-mark" aria-hidden="true"><span>未</span></div>';
  const orbit = '<div class="orbit" aria-hidden="true"><span class="orbit-square"></span><span class="orbit-dot"></span></div>';

  function navigation() {
    const current = location.hash.split('/')[1] || '';
    const active = current === 'post' ? 'journal' : current === 'work' ? 'works' : current;
    const links = [['', 'home'],['journal','journal'],['works','works'],['about','about']].map(([path,key]) => `<a class="nav-link ${active===path?'active':''}" ${active===path?'aria-current="page"':''} href="#/${path}">${t(key)}</a>`).join('');
    document.querySelector('.desktop-nav').innerHTML = links;
    document.querySelector('.mobile-nav').innerHTML = links;
    document.querySelector('.desktop-nav').setAttribute('aria-label',t('nav'));
    document.querySelector('.mobile-nav').setAttribute('aria-label',t('mobileNav'));
    document.querySelector('.brand').setAttribute('aria-label',`${content.profile.name} · ${t('home')}`);
    document.querySelector('.brand-sub').textContent = t('brandSub');
    document.querySelector('.search-open').setAttribute('aria-label',t('search'));
    document.querySelector('.search-open').innerHTML = icons.search;
    const language = document.querySelector('.language-button');
    language.textContent = lang === 'zh' ? 'EN' : '中';
    language.setAttribute('aria-label',lang === 'zh' ? 'Switch to English' : '切换为中文');
    closeMenu();
    document.querySelector('.site-footer').innerHTML = `<div class="container footer-inner"><a class="footer-brand" href="#/">花飞雨追</a><span class="footer-note">${t('footerNote')}</span><span class="footer-meta">© ${new Date().getFullYear()} GOODAY <span aria-hidden="true">/</span> ${t('footerMeta')}</span></div>`;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }

  function sectionTop(number,title,en,link,key) {
    return `<div class="section-top"><h2 class="section-title"><span class="section-number">${number}</span>${t(title)}${lang==='zh'?`<span class="section-en">${en}</span>`:''}</h2><a class="text-link" href="${link}">${t(key)}${arrow}</a></div>`;
  }

  function home() {
    const posts = sorted(content.posts).slice(0,3);
    const works = sorted(content.works).slice(0,2);
    return `<div class="container fade-in"><section class="hero" aria-labelledby="hero-title"><div class="hero-copy"><p class="eyebrow">${t('eyebrow')}</p><h1 id="hero-title">${t('hero')}</h1><p class="hero-description">${t('heroDescription')}</p><div class="hero-links"><a class="button primary" href="#/journal">${t('readNotes')}${arrow}</a><a class="text-link" href="#/works">${t('viewWorks')}${arrow}</a></div></div><figure class="hero-art"><img src="./mountain-study.svg" alt="${t('artAlt')}" width="1200" height="800" fetchpriority="high"><span class="art-motto" aria-hidden="true">${t('artMotto')}</span><figcaption class="art-caption">${t('artCaption')}</figcaption></figure></section><div class="welcome-strip"><span class="welcome-text"><span class="status-dot" aria-hidden="true"></span>${t('welcome')}</span><span class="strip-en">${t('welcomeEn')}</span></div><section class="home-section">${sectionTop('01','notesTitle','JOURNAL','#/journal','allNotes')}${posts.length?`<div class="post-list">${posts.map(postCard).join('')}</div>`:`<div class="journal-empty"><div class="empty-intro"><h3>${t('noteIntro')}</h3><p>${t('noteIntroText')}</p></div><div class="empty-note">${writingMark}<div><p class="tiny-label">${t('blankLabel')}</p><h3>${t('blankTitle')}</h3><p>${t('blankText')}</p></div></div></div>`}</section><section class="home-section">${sectionTop('02','worksTitle','SELECTED WORKS','#/works','allWorks')}${works.length?`<div class="work-grid">${works.map(workCard).join('')}</div>`:`<div class="works-empty"><div class="work-art">${orbit}<span class="work-art-label">${t('workArtLabel')}</span><span class="work-art-corner">${t('workArtCorner')}</span></div><div class="work-empty-copy"><span class="small-label">${t('workStatus')}</span><h3>${t('workHeading')}</h3><p>${t('workText')}</p><a class="text-link" href="#/works">${t('viewWorks')}${arrow}</a></div></div>`}</section><section class="about-strip"><div class="about-seal" aria-hidden="true">花</div><div class="about-strip-copy"><h3>${t('aboutHello')}</h3><p>${t('aboutShort')}</p></div><a class="text-link" href="#/about">${t('moreAbout')}${arrow}</a></section></div>`;
  }

  function postCard(post) {
    return `<a class="post-row" href="${routeFor(post,'post')}"><time datetime="${esc(post.date)}">${dateLabel(post.date)}</time><div><h3>${esc(localized(post.title))}</h3><p>${esc(localized(post.excerpt))}</p><span class="post-category">${t(post.category || 'essay')}</span></div>${arrow}</a>`;
  }

  function workCard(work) {
    return `<a class="work-card" href="${routeFor(work,'work')}">${safeUrl(work.cover)?`<img src="${safeUrl(work.cover)}" alt="${esc(localized(work.title))}" loading="lazy">`:`<div class="work-art">${orbit}</div>`}<h3>${esc(localized(work.title))}</h3><span class="post-category">${t(work.category || 'other')} ${work.date?' / '+dateLabel(work.date):''}</span><p>${esc(localized(work.excerpt))}</p></a>`;
  }

  function pageHeader(prefix) {
    return `<header class="page-header"><p class="eyebrow">${t(prefix+'Eyebrow')}</p><h1>${t(prefix+'Heading')}</h1><p>${t(prefix+'Description')}</p><span class="page-glyph" aria-hidden="true">${t(prefix+'Glyph')}</span></header>`;
  }

  function collection(type) {
    const isJournal = type === 'journal';
    const list = sorted(isJournal ? content.posts : content.works);
    const items = filter === 'all' ? list : list.filter(item => item.category === filter);
    const categories = isJournal ? ['all','essay','life','ideas'] : ['all','design','creation','other'];
    const title = filter !== 'all' && list.length ? 'filteredEmpty' : type+'EmptyTitle';
    const description = filter !== 'all' && list.length ? 'filteredText' : type+'EmptyText';
    return `<div class="container page fade-in">${pageHeader(type)}<div class="collection-tools"><div class="filters" role="group" aria-label="${lang==='zh'?'分类':'Categories'}">${categories.map(key=>`<button class="filter-button ${key===filter?'active':''}" data-filter="${key}" aria-pressed="${key===filter}">${t(key)}</button>`).join('')}</div><span class="collection-count" role="status">${items.length} ${t(isJournal?'postUnit':'workUnit')}</span></div><div class="collection-body">${items.length?`<div class="${isJournal?'post-list':'work-grid'}">${items.map(isJournal?postCard:workCard).join('')}</div>`:`<div class="empty-page">${isJournal?writingMark:orbit}<h2>${t(title)}</h2><p>${t(description)}</p><a class="text-link" href="${filter==='all'?'#/':'#/'+type}" ${filter!=='all'?'data-reset-filter="true"':''}>${t(filter==='all'?'backHome':'viewAll')}${arrow}</a></div>`}</div><p class="page-footnote">${t(type+'Foot')}</p></div>`;
  }

  function about() {
    const p = content.profile;
    const email = p.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email) ? p.email : null;
    return `<div class="container page fade-in">${pageHeader('about')}<div class="about-layout"><figure class="about-portrait"><img src="./mountain-study.svg" alt="${t('artAlt')}" width="1200" height="800"><figcaption class="portrait-seal">${t('portraitLabel')}</figcaption></figure><div class="about-content"><h2>${t('aboutHello')}</h2><p class="about-intro">${esc(localized(p.introduction))}</p><dl class="about-details"><div class="about-detail"><dt>${t('nameLabel')}</dt><dd>${esc(p.name)}</dd></div><div class="about-detail"><dt>${t('room')}</dt><dd>${t('roomText')}</dd></div><div class="about-detail"><dt>${t('now')}</dt><dd>${t('nowText')}</dd></div></dl><section class="contact-block" id="contact"><h2>${t('contactTitle')}</h2><p>${t('contactText')}</p><div class="contact-actions">${email?`<a class="button primary" href="mailto:${esc(email)}">${t('emailMe')}${arrow}</a>`:`<span class="contact-status">${t('contactPending')}</span>`}${safeUrl(p.resumeUrl)?`<a class="button secondary" href="${safeUrl(p.resumeUrl)}" download>${t('resume')}${arrow}</a>`:`<button class="disabled-button" disabled title="${t('resumeHint')}">${t('resumePending')}<span aria-hidden="true">↓</span></button>`}</div>${p.socialLinks?.length?`<div class="social-links">${p.socialLinks.filter(s=>safeUrl(s.url)).map(s=>`<a href="${safeUrl(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.name)} ↗</a>`).join('')}</div>`:''}</section></div></div></div>`;
  }

  // Render a deliberately small, escaped Markdown subset. Raw HTML is never interpreted.
  function markdown(source) {
    const codeBlocks = [];
    let text = String(source || '').replace(/\r\n/g,'\n').replace(/```[^\n]*\n([\s\S]*?)```/g,(_,code) => {
      codeBlocks.push(`<pre><code>${esc(code.trimEnd())}</code></pre>`);
      return `\n\nGOODAYCODEBLOCK${codeBlocks.length-1}END\n\n`;
    });
    function inline(value) {
      const pattern = /(!?\[([^\]]*)\]\(([^)\s]+)\)|`([^`]+)`|\*\*([^*]+)\*\*|\*([^*]+)\*)/g;
      let result = '', end = 0;
      for (const match of value.matchAll(pattern)) {
        result += esc(value.slice(end, match.index));
        if (match[3]) {
          const url=safeUrl(match[3]), label=esc(match[2]);
          result += !url ? label : match[0].startsWith('!') ? `<img src="${url}" alt="${label}" loading="lazy">` : `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
        } else if (match[4]) result += `<code>${esc(match[4])}</code>`;
        else if (match[5]) result += `<strong>${esc(match[5])}</strong>`;
        else result += `<em>${esc(match[6])}</em>`;
        end = match.index + match[0].length;
      }
      return result + esc(value.slice(end));
    }
    return text.split(/\n\s*\n/).map(block => {
      block=block.trim();
      if(!block) return '';
      const code=block.match(/^GOODAYCODEBLOCK(\d+)END$/);
      if(code) return codeBlocks[Number(code[1])] || '';
      if(/^#{1,3} /.test(block)) return block.split('\n').map(line=>{const m=line.match(/^(#{1,3}) (.*)$/);return m?`<h${Math.max(2,m[1].length)}>${inline(m[2])}</h${Math.max(2,m[1].length)}>`:`<p>${inline(line)}</p>`;}).join('');
      if(/^> /.test(block)) return `<blockquote>${block.split('\n').map(l=>inline(l.replace(/^> ?/,''))).join('<br>')}</blockquote>`;
      if(block.split('\n').every(l=>/^[-*] /.test(l))) return `<ul>${block.split('\n').map(l=>`<li>${inline(l.slice(2))}</li>`).join('')}</ul>`;
      if(block.split('\n').every(l=>/^\d+\. /.test(l))) return `<ol>${block.split('\n').map(l=>`<li>${inline(l.replace(/^\d+\. /,''))}</li>`).join('')}</ol>`;
      return `<p>${inline(block).replace(/\n/g,'<br>')}</p>`;
    }).join('');
  }

  function detail(type,slug) {
    const isPost = type === 'post';
    const item = (isPost?content.posts:content.works).find(entry=>entry.slug===slug);
    if(!item) return missing();
    const title = localized(item.title);
    document.title=`${title} · 花飞雨追`;
    const body = localized(item.body);
    const reading = Math.max(1,Math.ceil(body.replace(/\s/g,'').length/(lang==='zh'?450:1000)));
    return `<div class="reading-progress" aria-hidden="true"></div><div class="container"><article class="article fade-in"><a class="back-link" href="#/${isPost?'journal':'works'}">← ${t(isPost?'backJournal':'backWorks')}</a><header class="article-header"><span class="post-category">${t(item.category || (isPost?'essay':'other'))}</span><h1>${esc(title)}</h1><div class="article-meta">${item.date?`<time datetime="${esc(item.date)}">${dateLabel(item.date)}</time>`:''}<span>花飞雨追</span>${isPost?`<span>${reading} ${t('readTime')}</span>`:''}</div></header>${!isPost&&safeUrl(item.cover)?`<img class="project-cover" src="${safeUrl(item.cover)}" alt="${esc(title)}">`:''}<div class="prose">${markdown(body)}</div>${!isPost&&safeUrl(item.url)?`<a class="button primary project-link" href="${safeUrl(item.url)}" target="_blank" rel="noopener noreferrer">${t('visitWork')}${arrow}</a>`:''}<footer class="article-end"><span>${t('articleEnd')}</span><button class="text-link copy-link">${t('copyLink')}${arrow}</button><span class="sr-only copy-status" role="status"></span></footer></article></div>`;
  }

  function missing() {
    return `<div class="container page fade-in"><div class="empty-page">${writingMark}<h1>${t('missingTitle')}</h1><p>${t('missingText')}</p><a class="button primary" href="#/">${t('backHome')}${arrow}</a></div></div>`;
  }

  function route({scroll=true,focus=false}={}) {
    let path;
    try { path=decodeURIComponent(location.hash.replace(/^#\/?/,'')); } catch { path='missing'; }
    const [view,slug] = path.split('/');
    if(previousRoute !== view) filter='all';
    previousRoute=view;
    navigation();
    const titleKey = ['journal','works','about'].includes(view) ? view : 'home';
    document.title=`${t(titleKey)} · 花飞雨追 · Gooday`;
    main.innerHTML = !view ? home() : view==='journal'||view==='works' ? collection(view) : view==='about' ? about() : (view==='post'||view==='work')&&slug ? detail(view,slug) : missing();
    if(scroll) window.scrollTo({top:0,behavior:'instant'});
    if(focus) main.focus({preventScroll:true});
    updateProgress();
  }

  const dialog=document.getElementById('search-dialog');
  const searchInput=document.getElementById('search-input');
  const searchResults=document.getElementById('search-results');

  function search() {
    const query=searchInput.value.trim().toLocaleLowerCase();
    const all=[...content.posts.map(item=>({item,type:'post',label:'journal'})),...content.works.map(item=>({item,type:'work',label:'works'}))];
    const empty=(title,text)=>`<div class="search-empty"><h3>${t(title)}</h3><p>${t(text)}</p></div>`;
    if(!all.length){searchResults.innerHTML=empty('searchEmpty','searchEmptyText');return;}
    if(!query){searchResults.innerHTML=empty('searchStart','searchStartText');return;}
    const matches=all.filter(({item})=>[localized(item.title),localized(item.excerpt),localized(item.body)].some(v=>v.toLocaleLowerCase().includes(query)));
    searchResults.innerHTML=matches.length?`<p class="small-label" style="margin-top:20px">${matches.length} ${t('searchResultUnit')}</p>${matches.map(({item,type,label})=>`<a class="search-result" href="${routeFor(item,type)}"><small>${t(label)} · ${dateLabel(item.date)}</small><h3>${esc(localized(item.title))}</h3></a>`).join('')}`:empty('noResults','noResultsText');
  }

  function openSearch() {
    closeMenu();
    document.getElementById('search-title').textContent=t('searchTitle');
    document.querySelector('.search-close').setAttribute('aria-label',t('close'));
    document.querySelector('.search-close').innerHTML=icons.close;
    document.querySelector('label[for="search-input"]').textContent=t('searchPlaceholder');
    searchInput.placeholder=t('searchPlaceholder');
    document.querySelector('.search-form button').textContent=t('search');
    document.querySelector('.search-hint').textContent=t('searchHint');
    searchInput.value='';
    search();
    dialog.showModal();
    document.body.style.overflow='hidden';
    searchInput.focus();
  }

  function closeMenu() {
    document.querySelector('.mobile-nav').hidden=true;
    const toggle=document.querySelector('.menu-toggle');
    toggle.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-label',t('menuOpen'));
    toggle.innerHTML=icons.menu;
  }

  function updateProgress() {
    const bar=document.querySelector('.reading-progress');
    if(bar){const range=document.documentElement.scrollHeight-innerHeight;bar.style.width=(range>0?Math.min(100,scrollY/range*100):100)+'%';}
  }
  window.addEventListener('scroll',updateProgress,{passive:true});
  window.addEventListener('hashchange',()=>{if(location.hash==='#main')return;if(dialog.open)dialog.close();route({focus:true});});
  document.querySelector('.search-open').addEventListener('click',openSearch);
  document.querySelector('.skip-link').addEventListener('click',event=>{event.preventDefault();main.focus({preventScroll:true});main.scrollIntoView({behavior:'instant'});});
  document.querySelector('.search-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>{document.body.style.overflow='';});
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  searchInput.addEventListener('input',search);
  document.querySelector('.search-form').addEventListener('submit',event=>{event.preventDefault();search();});
  searchResults.addEventListener('click',event=>{if(event.target.closest('a'))dialog.close();});
  document.querySelector('.language-button').addEventListener('click',()=>{lang=lang==='zh'?'en':'zh';try{localStorage.setItem('gooday-language',lang);}catch{}route({scroll:false});});
  document.querySelector('.menu-toggle').addEventListener('click',()=>{const nav=document.querySelector('.mobile-nav');const open=nav.hidden;nav.hidden=!open;const b=document.querySelector('.menu-toggle');b.setAttribute('aria-expanded',String(open));b.setAttribute('aria-label',t(open?'menuClose':'menuOpen'));b.innerHTML=open?icons.close:icons.menu;});
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
  document.addEventListener('click',async event=>{
    const filterButton=event.target.closest('[data-filter]');
    if(filterButton){filter=filterButton.dataset.filter;route({scroll:false});document.querySelector(`[data-filter="${filter}"]`)?.focus({preventScroll:true});}
    if(event.target.closest('[data-reset-filter]')){event.preventDefault();filter='all';route({scroll:false});}
    const copyButton=event.target.closest('.copy-link');
    if(copyButton){try{await navigator.clipboard.writeText(location.href);copyButton.textContent=t('copied');}catch{document.querySelector('.copy-status').textContent=t('copyFailed');}}
  });
  route();
})();
