import request from 'superagent';

export const getFloss = (flossId, user) => request.get(`https://mighty-mesa-93390.herokuapp.com/api/detail/${flossId}`).set('Authorization', user.token);


