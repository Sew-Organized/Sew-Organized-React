import request from 'superagent';

// check the pathing from the backend for floss data

export const getFloss = (flossId, user) => request.get(`https://mighty-mesa-93390.herokuapp.com/api/detail/${flossId}`).set('Authorization', user.token);

// have to pass flossId at the end of the request
