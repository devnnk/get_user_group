/*! Requirement import js-cookie v3.0.0-rc.0 first MIT */
const EXPIRES = 1 / 43200;

async function accessToken() {
    let accessToken = Cookies.get('__accessToken');
    if (!accessToken) {
        let getComposerOcelot = await __getComposerOcelot();
        Cookies.set('__accessToken', getComposerOcelot.accessToken, {expires: EXPIRES});
        Cookies.set('__fbDstg', getComposerOcelot.fbDstg, {expires: EXPIRES});
        accessToken = Cookies.get('__accessToken');
    }
    return accessToken;
}

function testCookies() {
    let test = Cookies.get('foo');
    if (!test) {
        Cookies.set('foo', 'bar', {expires: EXPIRES});
        test = Cookies.get('foo');
    }
    return test;
}
