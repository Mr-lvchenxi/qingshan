export const  isAbsoluteURL = (url) => {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}


export const combineURLs = (baseURL, relativeURL) => {
  return relativeURL
    ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}


export const buildFullPath = (baseURL, requestedURL) => {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}