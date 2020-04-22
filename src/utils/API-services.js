import request from 'superagent';

const URL = 'https://mighty-mesa-93390.herokuapp.com';

// Local Storage Functions
const getUserFromLocalStorage = () => JSON.parse(localStorage.getItem('user'));

export const setUserInLocalStorage = response => localStorage.setItem('user', JSON.stringify(response.body));


// Auth Routes
export const logInUser = (email, password, displayName) => request.post(`${URL}/api/auth/login`, {
  email,
  password,
  displayName
});

export const signUpUser = (email, password, displayName) => request.post(`${URL}/api/auth/signup`, {
  email,
  password,
  displayName
});


// Floss Routes
export const getFloss = flossId => {
  const user = getUserFromLocalStorage();
  return request
    .get(`${URL}/api/detail/${flossId}`)
    .set('Authorization', user.token)
};

export const getColors = () => {
  const user = getUserFromLocalStorage();
  return request
    .get(`${URL}/api/colors`)
    .set('Authorization', user.token)
};

export const getColorById = query => request.get(`${URL}/api/colors/search?id=${query}`);

export const getColorsByName = query => request.get(`${URL}/api/colors/namesearch?name=${query}`);


// User Stash Routes
export const getUserStash = () => {
  const user = getUserFromLocalStorage();
  return request
    .get(`${URL}/api/username/stash`)
    .set('Authorization', user.token)
};

export const addFlossToStash = (quantity, dmcId) => {
  const user = getUserFromLocalStorage();
  return request
    .post(`${URL}/api/username/stash`, {
      dmcId, 
      quantity
    })
    .set('Authorization', user.token);   
};

export const updateFlossInStash = (quantity, dmcId) => {
  const user = getUserFromLocalStorage();
  return request
    .put(`${URL}/api/username/stash/${dmcId}`, { quantity })
    .set('Authorization', user.token);   
};

export const removeFromStash = dmcId => {
  const user = getUserFromLocalStorage();
  return request
    .delete(`${URL}/api/username/stash/${dmcId}`)
    .set('Authorization', user.token);   
};

// Scheme Routes
export const getColorScheme = colorId => request.get(`${URL}/api/scheme`);

export const getColorSchemeFromId = colorId => request.get(`${URL}/api/scheme/${colorId}`);


// User Palette Routes
export const createPalette = (paletteName, dmcOne, dmcTwo, dmcThree, dmcFour, dmcFive) => {
  const user = getUserFromLocalStorage();
  return request
    .post(`${URL}/api/username/palettes`, {
      paletteName,
      dmcOne,
      dmcTwo,
      dmcThree,
      dmcFour,
      dmcFive
    })
  .set('Authorization', user.token);   
};

export const getPalettes = () => {
  const user = getUserFromLocalStorage();
  return request
    .get(`${URL}/api/username/palettes`)
  .set('Authorization', user.token);   
};

