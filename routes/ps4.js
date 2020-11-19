/*
    Spencer Vilicic
    PS5b - Redis Cache for APIs
    10/27/20
 */

/*
1. Refactor your Node app from PS4 to incorporate a simple redis cache on your
POST route. When the route in your app is called, first check your cache to
see if you have a valid response. If not, call the third-party API and then cache
the response before returning it to the client, otherwise return the cached
value. Use a 15-second timeout on the cache entry.
2. Refactor your response to send a JSON object back to the client instead of
rendering a template. The response should include a field that indicates
whether the data came from cache or not.
 */

const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const fetchConfig = require('../config/configs');

const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');

//promisify redis functions
const asyncSet = promisify(client.set).bind(client);
const asyncGet = promisify(client.get).bind(client);
const asyncExists = promisify(client.exists).bind(client);
const asyncExpire = promisify(client.expire).bind(client);

//flush cache when server starts
client.flushdb((error, success) => {
    if (error) {
        throw new Error('something bad happened when I flushed')
    }
});

router.post('/',
    async (req, res) => {
        try {
            if (await asyncExists(req.body.city)) {
                let _data = await asyncGet(req.body.city);
                let response = {
                    weather: await JSON.parse(_data),
                    cached: true
                }
                res.send(response)
            } else {
                const raw = await fetch(fetchConfig.url + fetchConfig.api_type + '?key=' + fetchConfig.key + '&q=' + req.body.city);
                const data = await raw.json();
                await asyncSet(req.body.city, JSON.stringify(data));
                let response = {
                    weather: data,
                    cached: false
                }
                await asyncExpire(req.body.city, 15);
                res.send(response)
            }
        } catch (err) {
            console.log(err)
        }
    });

//use GET to enter city directly in URL
router.get('/:city', async (req, res) => {
    try {
        if (await asyncExists(req.params.city)) {
            let _data = await asyncGet(req.params.city);
            let response = {
                weather: await JSON.parse(_data),
                cached: true
            }
            res.send(response)
        } else {
            const raw = await fetch(fetchConfig.url + fetchConfig.api_type + '?key=' + fetchConfig.key + '&q=' + req.body.city);
            const data = await raw.json();
            await asyncSet(req.params.city, JSON.stringify(data));
            let response = {
                weather: data,
                cached: false
            }
            await asyncExpire(req.params.city, 15);
            res.send(response)
        }
        // res.render('ps4',{title: 'Local Weather', city: data.location.name, temp_f: data.current.temp_f, isNotEmpty: true});
        // console.log(`Processed data: ${JSON.stringify(data)}`);
    } catch (err) {
        console.log(err)
    }
});

//empty ps4 route so 404 error doesn't throw
router.get('/', (req, res) => {
    res.render('ps4', {title: 'Local Weather'});
});

module.exports = router;