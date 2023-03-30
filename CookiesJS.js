$(document).ready(function() {
    var cookiesAlert = $('#cookies-alert');
    var cookiesAccept = $('#cookies-accept');
    var cookiesDeny = $('#cookies-deny');
    var cookiesReapear = $('#cookies-reapear');
  
    console.log(localStorage);
  
    cookiesAccept.on('click', function () {
      cookiesAlert.hide();
      localStorage.setItem('cookies_accepted', 'true');
    });
  
    cookiesDeny.on('click', function () {
      cookiesAlert.hide();
      cookiesReapear.hide();
      localStorage.setItem('cookies_accepted', 'false');
    });
  
    cookiesReapear.on('click', function () {
      cookiesAlert.show();
      cookiesReapear.hide();
    });
  
    if (localStorage.getItem('cookies_accepted') == 'true') {
      cookiesAlert.hide();
      cookiesReapear.show();
    }
  });
  