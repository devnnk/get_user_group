let dataComposerOcelot = {
    accessToken: '',
    fbDstg: ''
};

function getComposerOcelot(response) {
    let find_access_token = response.indexOf('"accessToken');
    if (find_access_token >= 0) {
        dataComposerOcelot.accessToken = response.match(REGEX_TOKEN)[0];
        dataComposerOcelot.fbDstg = response.match(REGEX_FB_DTSG)[0];
    }
}

async function __getComposerOcelot() {
    await $.get(BASE_FB_M + 'composer/ocelot/async_loader/?publisher=feed', getComposerOcelot);
    return dataComposerOcelot;
}

let loading_str = $('#loading-str');
let is_amount = true;
let amount = 0;
let arr_regex_data = [1, 2];
let arr_regex_link = [1, 2, 3];

function defineCallRegex(data) {
    let first_item = data[0];
    data.shift();
    data.push(first_item)
    return data;
}

function regexData(response, is_url, type = 'data', i = 0) {
    if (i >= 5) {
        return [];
    }
    i++;
    return response.match(REGEX_LIST_ALL_USER_GROUP);
}

function regexNextPage(response, is_url) {
    let data;
    if (is_url) {
        data = response.match(REGEX_NEXT_PAGE).reverse();
        for (let i = 0; i < data.length; i++) {
            if (data[i].indexOf('?gid') >= 0) {
                return data[i].split("&amp;").join("&");
            }
        }
    } else {
        return '/' + ((response.match(REGEX_LINK_NORMAL_JSON_WEB_2)[0]).split("\/").join("")).split("&amp;").join("&");
    }

    return '';
}

//&amp;
async function htmlGetUserGroup(url, is_url = true, data = [], key = -1, i = 0) {
    if (i === 0) {
        loading_str.empty();
        loading_str.append(data.length + '/' + amount);
    }
    i++;
    let val_amount = parseInt($('#amount').val());

    if (data.length >= val_amount && val_amount >= 1) {
        return data;
    }

    url = (is_url ? (BASE_FB_REMOVE_SRC + '/groups/' + url + '/members/') : BASE_FB_REMOVE_SRC + url);
    let response = await $.get(url, function (response) {
        return response;
    });
    //loading
    if (is_amount && val_amount === '-1' || is_amount && val_amount === -1) {
        is_amount = false;
        let regex_total_user = response.match(REGEX_GET_TOTAL_USER);
        amount = regex_total_user ? regex_total_user[0] : 'all';
    } else {
        if (is_amount) {
            is_amount = false;
            amount = val_amount;
        }
    }
    loading_str.empty();
    loading_str.append(data.length + '/' + amount);
    //end loading
    let async_get_token = response.match(REGEX_ASYNC_GET_TOKEN)[0];
    data = data.concat(regexData(response, is_url));
    url = regexNextPage(response, is_url);
    if (url) {
        if (key === -1) {
            return htmlGetUserGroup(url + '&fb_dtsg_ag=' + async_get_token + '&__a=1', false, data, key);
        } else {
            if (key <= i || i <= -1) {
                return data;
            } else {
                return htmlGetUserGroup(url + '&fb_dtsg_ag=' + async_get_token + '&__a=1', false, data, key, i);
            }
        }
    }

    return data;
}
