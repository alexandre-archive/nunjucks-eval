var nunjucks = require('nunjucks'),
    njeval = require('../index.js'),
    assert = require("assert");

var env = nunjucks.configure({ autoescape: true });

njeval.install(env);

describe('#eval', function () {
    it('should return current year', function () {
        var year = nunjucks.renderString('{% eval year="new Date().getFullYear().toString()" %}{{ year }}');
        assert.equal(new Date().getFullYear().toString(), year);
    });
});

describe('#eval', function () {
    it('1 - 1 should return 0', function () {
        var value = nunjucks.renderString('{% eval i="1 - 1" %}{{ i }}');
        assert.equal(0, value);
    });
});

describe('#eval', function () {
    it('5 * 5 should return 25', function () {
        var value = nunjucks.renderString('{% eval i="5 * 5" %}{{ i }}');
        assert.equal(25, value);
    });
});

describe('#eval', function () {
    it('should return -1 when the value is not present in the list', function () {
        var value = nunjucks.renderString('{% eval i="[1, 2, 3].indexOf(0)" %}{{ i }}');
        assert.equal(-1, value);
    });
});

describe('#eval', function () {
    it('should eval multiple variables', function () {
        var value = nunjucks.renderString('{% eval i="[1, 2, 3].indexOf(0)", j="[1, 2, 3].indexOf(1)"  %}{{ i }} / {{j}}');
        assert.equal('-1 / 0', value);
    });
});
