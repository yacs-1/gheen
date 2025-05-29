/**
this script will inject the global page header into the #header into the #gheader div of each page
**/

const INJECTION = '<div id="global-preheader"> <h1 class="header"> Laura Gheen</h1></div><div id="global-header"><ul id="nav-list"><li><a href="gheen/home.html"> Home</li><li><a href="/gheen/photo-albums/index.html">Photos</a><ul><li><a href="#">album 1 </a></li><li><a href="#">album 2 </a></li><li><a href="#">album 3 </a></li></ul></li><li><a href="/gheen/my-music">My Games</a><ul><li><a href="/gheen/wd-sub/ttt.html">Tic-Tac-Toe</a></li><li><a href="#">album 2 </a></li><li><a href="#">album 3 </a></li></ul></li><li><a href="/gheen/sports"> Sports </a><ul><li><a href="#">album 1 </a></li><li><a href="#">album 2 </a></li><li><a href="#">album 3 </a></li></ul></li><li><a href="/gheen/web-dev">Web Dev</a><ul><li><a href="/gheen/wd-sub/week1.html">Basic coding</a></li><li><a href="/gheen/wd-sub/recipe.html"> Brownie Recipie</a></li><li><a href="/gheen/wdsub/anchors.html">Lorem Ipsum Anchors</a></li><li><a href="/gheen/wd-sub/poem.html">A Poem</a></li><li><a href="/gheen/wd-sub/reviews.html">Reviews on Literature</a></li><li><a href="/gheen/wd-sub/journal.html">Weekly News</a></li><li><a href="/gheen/wd-sub/band-page.html">band page</a></li><li><a href="/gheen/wd-sub/list-maker.html">List Maker</a></li><li><a href="/gheen/wd-sub/quadratic-formula.html">Quadratic Formula Claculator</a></li><li><a href="/gheen/wd-sub/ttt.html">Tic-Tac-Toe</a></li><li><a href="/gheen/wd-sub/time-keeper">Time-keeper</a></li></ul></li></ul></div>';

let _div = document.getElementById("gheader");

_div.innerHTML = INJECTION;
