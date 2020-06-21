const REGEX_TOKEN = /(?<=accessToken\\":\\")(.*?)(?=\\",\\")/gmu;
const REGEX_FB_DTSG = /(?<=name=\\"fb_dtsg\\" value=\\")(.*?)(?=\\")/gmu;
const REGEX_REACTION = /(?<=primary" href=")(.*?)(?=")/gmu;
const REGEX_SHOWN_IDS = /(?<=shown_ids=)(.*?)(?=&)/gmu;
//get link
const REGEX_NEXT_PAGE = /(?<=<div><a href=")(.*?)(?=")/gmu;
//get user group web
const REGEX_LIST_ALL_USER_GROUP = /(?<=member_id=)(.*?)(?=&)/gmu;
const REGEX_LIST_USER_GROUP_WEB = /(?<=id="all_members_)(.*?)(?=")/gmu;
const REGEX_LIST_USER_GROUP_WEB_2 = /(?<=id=\\"all_members_)(.*?)(?=\\")/gmu;
const REGEX_LINK_NORMAL_JSON_WEB = /(?<=u_0_1n"><div><a href=")(.*?)(?=")/gmu;
const REGEX_LINK_NORMAL_JSON_WEB_2 = /(?<=a href=\\"\\)(.*?)(?=\\")/gmu;
const REGEX_ASYNC_GET_TOKEN = /(?<=async_get_token":")(.*?)(?=")/gmu;
const REGEX_GET_TOTAL_USER = /(?<=<span class="_grt _50f8">)(.*?)(?=<)/gmu;

const REGEX_ROLE_MEMBER = /(?<=id="recently_joined_)(.*?)(?=")/gmu;
const REGEX_ROLE_MEMBER_2 = /(?<=id=\\"recently_joined_)(.*?)(?=\\")/gmu;
const REGEX_ROLE_MEMBER_LINK = /(?<=1m"><div><a href=")(.*?)(?=")/gmu;
const REGEX_ROLE_MEMBER_LINK_2 = /(?<=a href=\\"\\)(.*?)(?=\\")/gmu;

const REGEX_ROLE_NOT_MEMBER_LINK = /(?<=1j"><div><a href=")(.*?)(?=")/gmu;

const BASE_FB_API = 'https://graph.facebook.com/';
const BASE_FB_M = 'https://m.facebook.com/';
const BASE_FB_M_REMOVE_SRC = 'https://m.facebook.com';
const BASE_FB = 'https://www.facebook.com/';
const BASE_GROUP_FB = 'https://www.facebook.com/groups';
const BASE_FB_REMOVE_SRC = 'https://www.facebook.com';
