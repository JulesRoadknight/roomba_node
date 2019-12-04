describe("roomba", function() {
  var Roomba = require('../../lib/roomba');

  it("runs without an error", function() {
    expect(() => {Roomba.Roomba()}).not.toThrow()
  });

  it("Doesn't crash with empty input", function() {
    expect(() => {Roomba.Roomba('./spec/input_files/input_empty.txt')}).not.toThrow()
  });

  it("Doesn't crash without directions", function() {
    expect(() => {Roomba.Roomba('./spec/input_files/input_no_directions.txt')}).not.toThrow()
  });

});
