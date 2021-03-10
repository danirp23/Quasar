var chai = require('chai'),
    expect = chai.expect,
    modelEvent = require('../../events/mode-query'),
    handler = require('../../../src/topsecret/topsecretHandler');

describe('Test Topsecret', function() {
    this.timeout(0);
    beforeEach(function() {   
        
    });

    it.only('Success get Topsecret', async() => {
        const result = await handler.TopsecretHandler(modelEvent.eventQuery({
            "satellites": [
                {
                    "name": "kenobi",
                    "distance": 1063.01,
                    "message": ["este", "", "", "mensaje", ""]
                },
                {
                    "name": "skywalker",
                    "distance": 632.46,
                    "message": ["", "es", "", "", "secreto"]
                },
                {
                    "name": "sato",
                    "distance": 447.21,
                    "message": ["este", "", "un", "", ""]
                }
            ]
          }, 'POST', {}, {}, {}), { 'awsRequestId': '3000' });
        //expect(result.statusCode).to.equal(200);
        //expect(result.body).to.equal("este es un mensaje de aiuda");
    });
    after(function() {
    });
});