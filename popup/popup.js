let render = $('#render');
let id_amount = $('#amount');
let id_group = $('#group');

let action_click = 'click';

let access_token;
let blob;

function hideData() {
    $('#loading').show();
    $('#content').hide();
}

function showData() {
    $('#loading').hide();
    $('#content').show();
}

function disable() {
    id_group.prop("disabled", true);
    id_amount.prop("disabled", true);
}

function enable() {
    id_group.prop("disabled", false);
    id_amount.prop("disabled", false);
}

document.addEventListener('DOMContentLoaded', function () {
    $('#get-started').on(action_click, async function () {
        // await $('#loading-str').empty();
        await render.empty();
        await hideData();
        await disable();
        let key = -1;
        let clear_render = true;
        let id = id_group.val();
        let amount = parseInt(id_amount.val());

        if (amount >= 1) {
            key = Math.ceil(amount / 15);
        }

        await accessToken().then(async token => {
            access_token = token;

            if (!access_token) {
                render.append(renderNotifyLink('Bạn chưa đăng nhập FB!!!'));
                clear_render = false;
            }
            if (clear_render) {
                await htmlGetUserGroup(id, true, [], key).then(response => {
                    console.log('response.length', response.length);
                    if (response.length) {
                        blob = new Blob([response.join('\r\n')], {type: 'text/plain'});
                    } else {
                        render.append(renderNotifyLink('Data chưa có dữ liệu!!! Hoặc có thể bạn chưa tham gia nhóm'));
                        clear_render = false;
                    }
                }).catch(error => {
                    render.append(renderNotifyLink('Err: Data chưa có dữ liệu!!! Hoặc có thể bạn chưa tham gia nhóm'));
                    console.log(error);
                    clear_render = false;
                });
            }
        })
        if (blob) {
            let a = document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.download = id + '_' + amount;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click(); //this is probably the key - simulating a click on a download link
            delete a;// we don't need this anymore
        }
        if (clear_render) {
            await render.empty();
        }
        await enable();
        await showData();
    });

});
