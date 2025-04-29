/**
this script will inject the global page header into the #header into the #gheader div of each page
**/

const INJECTION = '<div id="global-preheader"> <h1 class="header"> laura gheen</h1></div><div id="global-header"><ul id="nav-list"><li><a href="/gheen/"> Home</li><li><a href="/gheen/photo-albums/index.html">Photos</a><ul><li><a href="#">album 1 </a></li><li><a href="#">album 2 </a></li><li><a href="#">album 3 </a></li></ul></li><li><a href="/gheen/music">My Music</a><ul><li><a href="#">album 1 </a></li><li><a href="#">album 2 </a></li><li><a href="#">album 3 </a></li></ul></li><li><a href="/gheen/sports"> Sports </a><ul><li><a href="#">album 1 </a></li><li><a href="#">album 2 </a></li><li><a href="#">album 3 </a></li></ul></li><li> <a href="/gheen/web-dev">Web Dev </a><ul><li><a href="/gheen/wd-sub/week1.html">Week 1 </a></li><li><a href="/gheen/wd-sub/recipe.html">Week 2 </a></li><li><a href="wd-sub/anchors.html/grainger/">Week 3 </a></li><li><a href="/gheen/wd-sub/poem.html">Week 4 </a></li><li><a href="/gheen/wd-sub/reviews.html">Week 5 </a></li><li><a href="/gheen/wd-sub/journal.html">Week 6 </a></li><li><a href="/gheen/wd-sub/band-page.html">Week 7 </a></li><li><a href="/gheen/wd-sub/list-maker.html">Week 8 </a></li><li><a href="#">Week 9 </a></li></ul></li></ul></div>';

let _div = document.getElementById("gheader");

_div.innerHTML = INJECTION;
