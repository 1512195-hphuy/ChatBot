const verifyWebhook = (req, res) => {
    let VERIFY_TOKEN = 'abjjchndKSJNFKJABSKDASKLDNKLASNDKASKLD51613123ASDAsdfscxvbbSD1SA1rss61651wettyuyhngbAS65SA65D1sdfsdfsdfdS65D1AS5D1JNGJBJKDDVKCNVJKDNVJSDkndsijsdjdfs321D3ASDASDAS';

    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];

    if (mode && token === VERIFY_TOKEN) {
        res.status(200).send(challenge);
    } else {
        res.sendStatus(403);
    }
};

module.exports = verifyWebhook;