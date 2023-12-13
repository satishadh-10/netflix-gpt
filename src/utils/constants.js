export const LOGO_URL = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const USER_AVATAR = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
export const O_K = process.env.REACT_APP_O_K;
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY,
    }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"

  export const BODY_IMG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/fe56ae28-562a-4ce1-9ad6-f86b4fd1911e/NP-en-20231204-popsignuptwoweeks-perspective_alpha_website_medium.jpg"

  export const SUPPORTED_LANGUAGES = [{identifier:"en", name:"English"},{identifier:"np", name:"Nepali"},{identifier:"ch", name:"Chinese"}]
