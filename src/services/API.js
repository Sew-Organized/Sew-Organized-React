import request from 'superagent';

// check the pathing from the backend for floss data

export const getFloss = (flossId) => request.get(`/detail/${flossId}`)

// have to pass flossId at the end of the request
