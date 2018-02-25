var apikey = '98x4hzej9EauYAZPyTFUNlvPT55GPc9ibEh3oeYXUBY_pewhTIAh5LhKUV_AkrVDIenMbkPJvBAyeAe8PA89OC6UBUCF9jgwYp0Z3p0wwP9GcrWukKAGTneW48aRWnYx';
export const getBusinesses = (params = {}, categories = []) => {
    params.latitude = params.latitude || 37;
    params.longitude = params.longitude || -122;
    var esc = encodeURIComponent;
    var query = Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
    var uri = 'https://api.yelp.com/v3/businesses/search?' + query + '&categories=' + categories.join(',');
    console.log(uri);
    return new Promise((resolve, reject) => {
        fetch(uri, {
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + apikey
            }
        }).then((response) => {
            response.json().then((response) => {
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        }).catch((err) => {
            reject(err);
        })
    })
}