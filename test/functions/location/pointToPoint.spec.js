var chai = require('chai'),
    expect = chai.expect,
    modelEvent = require('../../events/mode-query'),
    handler = require('../../../src/location/locationHandler');

describe('Test location', function() {
    this.timeout(0);
    beforeEach(function() {   
        
    });

    it('Success get location', async() => {
        const result = await handler.LocationHandler(modelEvent.eventQuery({
            "satellites": [
                {
                    "name":"kenobi", 
                    "distance":1220.66
                },
                {
                    "name":"skywalker",
                    "distance":721.11
                },
                {   
                    "name":"sato",
                    "distance":400.00
                }
            ],
          }, 'POST', {}, {}, {}), { 'awsRequestId': '3000' });
        expect(result.statusCode).to.equal(200);
        expect(result.body.x).to.equal("500.01");
        expect(result.body.y).to.equal("499.97");
    });
    it('Error get location body empty', async() => {
        const result = await handler.LocationHandler(modelEvent.eventQuery({}, 'POST', {}, {}, {}), { 'awsRequestId': '3000' });
        expect(result.statusCode).to.equal(400);
    });
    it('Error get location empty', async() => {
        const result = await handler.LocationHandler( { 'awsRequestId': '3000' });
        expect(result.statusCode).to.equal(400);
    });
    it('Error get location data error', async() => {
        const result = await handler.LocationHandler(modelEvent.eventQuery({
            "satellites": [
                {
                    "name":"kenobi",
                    "distance":1220.66
                }
            ],
          }, 'PATCH', {}, {}, {}), { 'awsRequestId': '3000' });
        expect(result.statusCode).to.equal(500);
    });
    after(function() {
    });
});