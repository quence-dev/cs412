/*
    Spencer Vilicic
    PS4 - Node Express APIs
    10/27/20
 */

/*
A route using the POST method that retrieves data from an external API.
For example, you might hit the Weather Channel API to retrieve the current
weather conditions. ProgrammableWeb.com is a good spot to find APIs
offering data you are interested in. The route must use Promises to
manage the async http call.
c. A back-end rendered page to display the results of your call. This can be
EJS, Pug, or any other templating language that you’d like to use.
d. An HTML form to send a search string into your route. For example, if you
are hitting a weather API, you might have a form that asks for a city. It’s
fine to write the form in HTML; my advice is to place it in public/index.html
so that it will be the default page for the app. A more advanced technique
would be to write the form in Pug
 */

const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const fetchConfig = require('../config/configs');

router.post('/',
    async (req, res) => {
        try {
            const raw = await fetch(fetchConfig.url + fetchConfig.api_type + '?key=' + fetchConfig.key + '&q=' + req.body.city,
                {method: fetchConfig.method});
            const data = await raw.json();

            res.render('ps4',{title: 'Local Weather', city: data.location.name, temp_f: data.current.temp_f, isNotEmpty: true});
            console.log(`Processed data: ${JSON.stringify(data)}`);
        }
        catch (err){
            console.log(err)
        }
    });

//empty ps4 route so 404 error doesn't throw
router.get('/',(req, res) => {
            res.render('ps4',{title: 'Local Weather'});
    });

//use GET to enter city directly in URL
router.get('/:city', async (req, res, next) => {
    try {
        const raw = await fetch(fetchConfig.url + fetchConfig.api_type + '?key=' + fetchConfig.key + '&q=' + req.params.city,
            {method: fetchConfig.method});
        const data = await raw.json();

        res.render('ps4',{title: 'Local Weather', city: data.location.name, temp_f: data.current.temp_f, isNotEmpty: true});
        console.log(`Processed data: ${JSON.stringify(data)}`);
    }
    catch (err){
        console.log(err)
    }
})

module.exports = router;