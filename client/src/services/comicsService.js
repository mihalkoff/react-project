import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/comics';

export const comicsServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc`);
        const comics = Object.values(result);
    
        return comics;
    };
    
    const getOne = async (comicsId) => {
        const result = await request.get(`${baseUrl}/${comicsId}`);
    
        return result;
    };
    
    const create = async (comicsData) => {
        const result = await request.post(baseUrl, comicsData);
    
        return result;
    };

    const edit = (comicsId, data) => request.put(`${baseUrl}/${comicsId}`, data);

    const deleteComics = (comicsId) => request.delete(`${baseUrl}/${comicsId}`);


    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteComics,
    };
}