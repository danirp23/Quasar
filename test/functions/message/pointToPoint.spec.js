var chai = require('chai'),
    expect = chai.expect,
    modelEvent = require('../../events/mode-query'),
    handler = require('../../../src/message/messageHandler');

describe('Test Message successfully', function() {
    this.timeout(0);
    beforeEach(function() {   
        
    });

    it.only('Success get Message', async() => {
        const result = await handler.MessageHandler(modelEvent.eventQuery({
            "satellites": {
                
                "kenobi":["", "este", "es", "un", "mensaje"],
                "sato":  ["", "", "es", "", "mensaje"],
                "skywalker":["", "", "", "","","","","","","secreto"]
            },
          }, 'POST', {}, {}, {}), { 'awsRequestId': '3000' });
        expect(result.statusCode).to.equal(200);
        //expect(result.body.message[0]).to.equal("");
        //expect(result.body.message[1]).to.equal("");
    });
    after(function() {
    });
});