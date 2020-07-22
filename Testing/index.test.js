const { expect } = require("chai")

log = console.log
expct = require('chai').expect
should = require('chai').should()
_ = require('lodash')

describe("#mocha basic tests",()=>{

    //write unit tests here

    it("first test",()=>{
        true.should.be.true;
    });
    it("second test",()=>{
        (1).should.be.within(0,10);
    });
    it("third test",()=>{
        expct(true).to.be.true;
    });
});