function renderProfile(id, name, url_avatar = '') {
    return '<div class="render-profile">\n' +
        '   <div class="render-profile-avatar">\n' +
        '       <img class="avatar" src="' + (url_avatar) + '">\n' +
        '   </div>\n' +
        '<div class="render-profile-id"><b>ID: </b><a href="#">' + id + '</a></div>\n' +
        '   <div class="render-profile-name">' + name + '</div>\n' +
        '</div>';
}

function renderFeed(id, date, content) {
    return '<div class="feed">\n' +
        '   <div class="header-feed"><span>' + date + '</span> - <a href="#" class="export-excel" data-id="' + id + '">Export excel</a></div>\n' +
        '   <div class="body-feed">' + content + '</div>\n' +
        '</div>';
}

function renderGroup(id, name) {
    return '<div class="group">\n' +
        '   <div class="group-name"><span>' + name + '</span> - <a href="#" class="render-feed" data-id="' + id + '">' + id + '</a></div>\n' +
        '</div>';
}


function renderNotifyLink(str) {
    return '<p style="color: #ff4c4a">' + str + '</p>';
}
