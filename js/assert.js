(function() {

	var
	Assert = function() {

	};

	Assert.prototype = {
		count: 0,
		pass_count: 0,
		fail_count: 0,
		do: function(id, input, output) {

			this.count ++;
			this.pass_count ++;

			if(!(input===output)) {
				
				console.warn("assert failure - " + id);
				this.fail_count ++;
				this.pass_count --;

			};

			return this;

		},
		logReport: function() {

			console.log([this.pass_count, this.count].join("/"));

		}
	};

	assert = new Assert();

	assert.do("example01", true, true);
	assert.do("example02", true, false);
	assert.do("example03", 0, 0);
	assert.do("example04", 1, 0);
	assert.do("example05", "bob", "bob");
	assert.do("example06", "bob1", "bob");
	assert.do("example07", "bob", "bob");
	assert.do("example08", "bob", "bob");
	assert.do("example09", "bob", "bob");
	assert.do("example10", "bob", "bob");

	assert.logReport();

})();