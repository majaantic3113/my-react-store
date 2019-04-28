export const SET_USERNAME = 'SET_USERNAME';
export const IS_LOGGED_IN = 'IS_LOGGED_IN';

export const setUsername = (username) => ({ type: SET_USERNAME, value: username });
export const setIsLoggedIn = (loggedIn) => ({ type: IS_LOGGED_IN, value: loggedIn });