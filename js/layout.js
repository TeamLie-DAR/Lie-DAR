document.getElementById("nav-top").innerHTML = `<div class="nav-bar ">
<div class="logo">RajGo.com</div>

<div class="right-nav right-nav-hidden">
<!-- right-nav-resp -->
  <div class="nav-list ">
    <div class="nav-list-li" onclick="location.href='/index.html'">Home</div>
    <div class="nav-list-li" onclick="location.href='/about.html'">about</div>
    <div class="nav-list-li" onclick="location.href='/contact.html'">contact</div>
    <div class="nav-list-li" onclick="location.href='/services.html'">login</div>
  </div>


  <div class="nav-search ">
      <input type="text" placeholder="search" class="search-box" />
      <button class="btn btn-white">Search</button>
  </div>


</div>


<div class="burger">
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
</div>
</div>


`;

document.querySelector(".footer-bottom").innerHTML = `
<div class="footer">
    <p>copyright &copy all right reserved 2022</p>
  </div>

`;
