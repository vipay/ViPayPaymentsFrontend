export const API_BASE_URL = "http://54.69.15.93:8001";
export const API_BASE_URL_v = "http://54.69.15.93:8000";



export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;
export const getApiUrll = (endpoint) => API_BASE_URL_v + endpoint;

export const LOGIN_API = getApiUrl("/login");
export const SIGNUP_API = getApiUrl("/register");
export const SOCIAL_LOGIN = getApiUrl("/social_login");
export const FORGOT_PASSWORD = getApiUrl("/forgot_password");
export const TUTORIALS_LIST= getApiUrl('/User/list_tutorials');
export const LOGIN_WITH_MOBILE= getApiUrl('/User/login_with_mobile');
export const OTP_VERIFICTION=getApiUrl('/User/otp_verification');
export const RESEND_OTP=getApiUrl('/User/resend_otp');
export const SET_LOGIN_PIN=getApiUrl('/User/set_login_pin');
export const ADDCONTACTS=getApiUrl('/User/add_contacts');
export const LISTCONTACTS=getApiUrl('/User/list_contacts');
export const LIST_MESSAGE=getApiUrl('/User/list_messages');
export const LIST_CHATS= getApiUrl('/User/list_chats');
export const SEND_MESSAGE= getApiUrl('/User/send_messages');
export const EDIT_PROFILE= getApiUrl('/User/edit_profile');
export const LOGOUT= getApiUrl('/User/log_out');
export const CONTACT= getApiUrll('/user/v1/sync-contacts');
export const LOGIN= getApiUrll('/session/v1/login');
export const SET_PIN= getApiUrll('/user/v1/set-pin');
export const EDIT_PROFILE_= getApiUrll('/user/v1/edit-profile');
export const IMAGEUPLOAD= getApiUrll('/user/v1/update-profile-pic');
export const CHANGEPASSWORD= getApiUrll('/user/v1/change-pin');
export const PINCHECK=getApiUrll('/user/v1/verify-pin')









