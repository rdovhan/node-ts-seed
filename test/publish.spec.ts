import * as chai from 'chai';
import * as sinonchai from 'sinon-chai';
chai.use(sinonchai);
import 'mocha';

const expect = chai.expect;

describe('Test cases for ', () => {
  it('returns 1 expects 1', async () => {
    expect(1).equals(1);
  });
});
