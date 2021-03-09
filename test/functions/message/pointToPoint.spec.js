var chai = require('chai'),
    expect = chai.expect,
    modelEvent = require('../../events/mode-query'),
    handler = require('../../../src/message/messageHandler');

describe('Test Message', function() {
    this.timeout(0);
    beforeEach(function() {   
        
    });

    it('Success get Message', async() => {
        const result = await handler.MessageHandler(modelEvent.eventQuery({
            "satellites": {
                "kenobi":["", "este", "es", "un", "mensaje"],
                "sato":  ["este", "", "un", "mensaje"],
                "skywalker":["", "", "", "","","","","de","","aiuda"]
            },
          }, 'POST', {}, {}, {}), { 'awsRequestId': '3000' });
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.equal("este es un mensaje de aiuda");
    });
    it('Error get message body empty', async() => {
        const result = await handler.MessageHandler(modelEvent.eventQuery({}, 'POST', {}, {}, {}), { 'awsRequestId': '3000' });
        expect(result.statusCode).to.equal(400);
    });
    it('Error get message empty', async() => {
        const result = await handler.MessageHandler( { 'awsRequestId': '3000' });
        expect(result.statusCode).to.equal(400);
    });
    it('Error get message data error', async() => {
        const result = await handler.MessageHandler(modelEvent.eventQuery({
            "satellites": {
                "kenobi":["", "este", "es", "un", "mensaje"],
            },
          }, 'PATCH', {}, {}, {}), { 'awsRequestId': '3000' });
        expect(result.statusCode).to.equal(500);
    });
    after(function() {
    });
});