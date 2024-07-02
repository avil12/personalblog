// /src/utils/token.js
export const setToken = (token) => {
    localStorage.setItem('token', token);
    setTimeout(() => {
        localStorage.removeItem('token');
        window.location.href = '/';
    }, 60000); // 1 minutes in milliseconds
};

export const getToken = () => {
    return localStorage.getItem('token');
};
