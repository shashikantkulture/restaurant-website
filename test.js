const https = require('https');
https.get('https://image.pollinations.ai/prompt/Matar%20paneer%20Indian%20Food?width=800&height=600&nologo=true', (res) => {
    console.log('Status:', res.statusCode);
    if (res.statusCode === 301 || res.statusCode === 302) {
        console.log('Redirect:', res.headers.location);
    }
});
