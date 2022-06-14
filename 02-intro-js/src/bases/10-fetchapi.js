//APIKEYS

const apiKey = 'RfEq9tVXhXbFidg1gpV1Z0H4rCw6jZkX';

const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// request.then(resp => {
//     console.log(resp)
// })

//Promesas en cadena                

request
    .then(resp => resp.json())  //Cada "then" pasa la promesa al siguiente y sucesivamente
    .then(({data}) => {         //Desestructuracion de data
        const { url } = data.images.original;  //Desestructuracion de url

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
    .catch(console.warn)
