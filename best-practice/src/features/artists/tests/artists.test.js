const app = require('../../../app')

const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiLike = require('chai-like');
const chaiThings = require('chai-things');

agent = chai.request.agent(app);

const artistsOptions = [
    {name: "michael"},
    {name: "dani"}
]

describe('artists', () => {
      for (const option of artistsOptions) {
          describe(`case: ${option.name}`, () => {
              before(async () => {
                  // somthing
              })

              after(async() => {
                  await artistsModel.deleteMany({})
              })

              const res = await agent
                  .post('/artists/add')
                  .send({ name: option.name });

              res.status.should.equal(200);
              res.body.Success.should.equal(true);
          })
      }
})


