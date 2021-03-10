var chai = require('chai'),
    expect = chai.expect,
    modelEvent = require('../../events/mode-query'),
    handler = require('../../../src/topsecret/topsecretHandler');

describe('Test Topsecret', function() {
    this.timeout(0);
    beforeEach(function() {   
        
    });

    it('Success get Topsecret', async() => {
        const result = await handler.TopsecretHandler(modelEvent.eventQuery({
            "satellites": [
                {
                    "name": "kenobi",
                    "distance": 100,
                    "message": ["este", "", "", "mensaje", ""]
                },
                {
                    "name": "skywalker",
                    "distance": 350,
                    "message": ["", "es", "", "", "secreto"]
                },
                {
                    "name": "sato",
                    "distance": 950,
                    "message": ["este", "", "un", "", ""]
                }
            ]
          }, 'POST', {}, {}, {}), { 'awsRequestId': '3000' });
        expect(result.RESPONSE_CODE).to.equal(200);
        expect(result.body.message).to.equal("este es un mensaje secreto");
    });
    it('Error body empty', async() => {
        const result = await handler.TopsecretHandler(modelEvent.eventQuery({}, 'POST', {}, {}, {}), { 'awsRequestId': '3000' });
        expect(result.RESPONSE_CODE).to.equal(404);
    });
    it('Error empty', async() => {
        const result = await handler.TopsecretHandler( { 'awsRequestId': '3000' });
        expect(result.RESPONSE_CODE).to.equal(404);
    });
    it('Error data error', async() => {
        const result = await handler.TopsecretHandler(modelEvent.eventQuery({
            "satellites": [
                {
                    "name":"kenobi",
                    "distance":1220.66,
                    "message": ["este", "", "un", "", ""]
                }
            ],
          }, 'PATCH', {}, {}, {}), { 'awsRequestId': '3000' });
        expect(result.RESPONSE_CODE).to.equal(404);
    });
    after(function() {
    });
});