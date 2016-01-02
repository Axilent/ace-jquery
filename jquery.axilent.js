// JQuery plugin used to introduce triggers and user events to ACE.

axilent_domain = 'https://www.axilent.net/pxl/'

function ax_build_identity(identity) {
    var modified_identity = new Object();
    
    for (var key in identity) {
        if (identity.hasOwnProperty(key)) {
            var new_key = 'identity_'+key;
            modified_identity[new_key] = identity[key];
        }
    }
    
    return modified_identity;
}

function ax_build_params(url,vars,identity) {
    if (vars || identity) {
        url = url + '?';
        if (vars) {
            url = url + $.param(vars);
        }
        if (identity) {
            url = url + $.param(ax_build_identity(identity));
        }
    }
    return url;
}

function ( $ ) {    
    $.fn.ax_trigger = function(token,category,action,vars,identity) {
        var url = axilent_domain + token + '/trigger/' + category + '/' + action + '/';
        url = ax_build_params(url,vars,identity);
        new Image().src = url;
    }
    
    $.fn.ax_event = function(token,event,vars,identity) {
        var url = axilent_domain + token + '/userevent/' + event + '/';
        url = ax_build_params(url,vars,identity);
        new Image().src = url;
    }
}