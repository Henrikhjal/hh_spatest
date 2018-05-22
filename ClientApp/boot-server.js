const prerendering = require('aspnet-prerendering');

module.exports = prerendering.createServerRenderer(function(params)
{
    return new Promise(function (resolve, reject) 
    {
        var result  = "<h1>Hej från js</h1>" 
        + '<p>Klockan är ' + new Date() + '</p>'
        + '<p>URL: ' + params.location.path + '</p>'
        + '<p>data (IsAdministrator): ' + params.data.isAdmin + '</p>'
        + '<p>Number of cookies: ' + params.data.kakor.length + '</p>';

        resolve({html: result});
    })
});


    



