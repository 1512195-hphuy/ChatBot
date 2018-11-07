const processMessage = require('./process-message');

    module.exports = (req, res) => {
      if (req.body.object === 'page') {
        req.body.entry.forEach(entry => {
          entry.messaging.forEach(event => {
            if ((event.message && event.message.text) || (event.postback && event.postback.payload)) {
              processMessage(event);
            }
          });
        });

        res.status(200).end();
      }
    };