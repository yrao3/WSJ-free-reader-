

// FreeWSJ: Written by Andrew Kim

var articleURL = window.location.href;

// Add ?mod=djemalertNEWS to end of URL to bypass protections

var list = articleURL.split("?");

if (list.length == 2) {
    newURL = list[0] + "?mod=djemalertNEWS";
} else {
    newURL = articleURL + "?mod=djemalertNEWS";
}

window.location.href = newURL;