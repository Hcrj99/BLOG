export const Ajax = async(url, method, dataSave = " ") => {
    let charge = true;

    let options = {
        method: 'GET'
    };

    if (method === "GET" || method === "DELETE") {
        let options = {
            method: 'GET'
        };
    }

    if (method === "POST" || method === "PUT") {
        let options = {
            method: method,
            body: JSON.stringify(dataSave),
            headers: {
                "Content-type": "application/json"
            }
        };
    }

    const request = await fetch(url, options);
    const data = await request.json();

    charge = false;


    return {
        data,
        charge,
    };
}