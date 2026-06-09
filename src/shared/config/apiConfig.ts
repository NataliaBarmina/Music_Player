export const API_KEY = import.meta.env.VITE_API_KEY;

export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const CALLBACK_URL = import.meta.env.VITE_CALLBACK_URL;

console.log('API key exists:', Boolean(API_KEY));
console.log('API key start:', API_KEY?.slice(0, 4));
console.log('API key end:', API_KEY?.slice(-4));
