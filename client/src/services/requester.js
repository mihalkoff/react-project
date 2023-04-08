export const request = async (method = 'GET', token, url, data) => {

    const options = {
        method,
        headers: {},
    }

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    if (token) {
        options.headers['X-Authorization'] = token;
    }

    try {
        const response = await fetch(url, options);

        if (response.ok === false) {
            if (response.status === 204 || response.status === 404) {
                return [];
            } else {
                const error = await response.json();
                throw new Error(error.message);
            }
        }

        if (response.status === 204 || response.status === 404) {
            return response;
        } else {
            return response.json();
        }

    } catch (err) {
        alert(err.message);
        throw err;
    }
};

export const requestFactory = (token) => {
    return {
        get: request.bind(null, 'GET', token),
        post: request.bind(null, 'POST', token),
        put: request.bind(null, 'PUT', token),
        patch: request.bind(null, 'PATCH', token),
        delete: request.bind(null, 'DELETE', token),
    }
};