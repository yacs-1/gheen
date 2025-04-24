/**
this script will inject the global page header into the #gheader div of each page
**/

const INJECTION= "<div id="global-header"><ul id="nav-list"><li> Home</li><li><a href="#"> Photos</a>           <ul><li><a href="#">album 1 </a></li><li><a href="#">album 2 </a></li><li><a href="#">album 3 </a></li></ul></li><li><a href="#"> My Music </a>
<ul>
<li><a href="#">album 1 </a></li>
<li><a href="#">album 2 </a></li>
<li><a href="#">album 3 </a></li>
</ul>
</li>
<li><a href="#"> Sports </a>
<ul>
<li><a href="#">album 1 </a></li>
<li><a href="#">album 2 </a></li>
<li><a href="#">album 3 </a></li>
</ul>
</li>
<li> <a href="#">Web Dev </a>
<ul>
<li><a href="#">Week 1 </a></li>
<li><a href="#">Week 2 </a></li>
<li><a href="#">Week 3 </a></li>
<li><a href="#">Week 4 </a></li>
<li><a href="#">Week 5 </a></li>
<li><a href="#">Week 6 </a></li>
<li><a href="#">Week 7 </a></li>
<li><a href="#">Week 8 </a></li>
<li><a href="#">Week 9 </a></li>
</ul>
</li>
</ul>
</div>
  ";
    let_div= document.getElementById("gheader");
_div.innerHTML =INJECTION;
