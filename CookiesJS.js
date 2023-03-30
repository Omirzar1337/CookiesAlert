window.onload = function () {

    var cookiesAlert = document.getElementById('cookies-alert');
    var cookiesAccept = document.getElementById('cookies-accept');
    var cookiesDeny = document.getElementById('cookies-deny');
    var cookiesReapear = document.getElementById('cookies-reapear');

    console.log(localStorage);

    cookiesAccept.onclick = function () {
        cookiesAlert.style.display = 'none';
        localStorage.setItem('cookies_accepted', 'true');
    }

    cookiesDeny.onclick = function () {
        cookiesAlert.style.display = 'none';
        cookiesReapear.style.display = 'none';
        localStorage.setItem('cookies_accepted', 'false');
    }

    cookiesReapear.onclick = function () {
        cookiesAlert.style.display = 'block';
        cookiesReapear.style.display = 'none';
    }

    if (localStorage.getItem('cookies_accepted') == 'true') {
        cookiesAlert.style.display = 'none';
        cookiesReapear.style.display = 'block';
    }

}