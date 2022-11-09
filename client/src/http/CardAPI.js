import { $host, $authHost } from './service/index';

export const addWords = async (original_word, translated_word) => {
    const {data} = await $authHost.post('api/card', {original_word, translated_word });
    console.log(data);
    return {data};
}

//
// export const getWords = async () => {
//     const {data} = await $host.get('api/card');
//     return data;
// }

// export const check = async () => {
//     const {data} = await $authHost.get('api/user/auth');
//     localStorage.setItem('token', data.token);
//     return jwt_decode(data.token);
// }