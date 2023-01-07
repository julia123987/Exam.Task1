
M.AutoInit();
var elem = document.querySelector('.sidenav');
var instance = M.Sidenav.init(elem);
var elem = document.querySelector('.sidenav');
var instance = M.Sidenav.init(elem, {
  inDuration: 350,
  outDuration: 350,
  edge: 'left',
});
function openNav() {
    document.querySelector('.sidenav').style.width = "300";
  }
  
  function closeNav() {
    document.querySelector('.sidenav').style.width = "0";
  }

  $('.sidenav-trigger').sideNav({
    menuWidth: 300, 
    edge: 'left', 
    closeOnClick: true, 
    draggable: true ,
  }
);