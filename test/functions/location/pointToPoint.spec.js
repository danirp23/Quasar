var chai = require('chai'),
    expect = chai.expect,
    modelEvent = require('../../events/mode-query'),
    handler = require('../../../src/location/locationHandler');

describe('Test location successfully', function() {
    this.timeout(0);
    beforeEach(function() {   
        
    });

    it('Success get location', async() => {
        const result = await handler.LocationHandler(modelEvent.eventQuery({
            "satellites": {
                "kenobi": [1000,-300],
                "skywalker": [400,-400],
                "sato": [0,-600]
            },
          }, 'POST', {}, {}, {}), { 'awsRequestId': '3000' });
        expect(result.statusCode).to.equal(200);
        expect(result.body.location[0]).to.equal("500.00");
        expect(result.body.location[1]).to.equal("-500.00");
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
            "satellites": {
                "kenobi": [1000,-300]
            },
          }, 'PATCH', {}, {}, {}), { 'awsRequestId': '3000' });
        expect(result.statusCode).to.equal(500);
    });
    after(function() {
    });
});