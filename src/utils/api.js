export const BASE_URL = "https://api.sbercloud.ru/content/v1/bootcamp/frontend";

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`)
}

export const register = (data) => {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(checkResponse)
};
