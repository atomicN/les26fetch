const getData = data => {
    return fetch(data)
                .then(response => response.json());
};
const sendData = (address, data) => {
    return fetch(address, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    });
};
getData('db.json')
    .then( data => {
        sendData('https://jsonplaceholder.typicode.com/posts',data)
            .then(response => response.json())
            .then(data => console.log(data));
    });