module.exports = function warmup(temperature) {
  // current temperature in kelvin degrees
  var fahrenheit;
  // convering kelvin to celsius
  let kelvin = celsius + 273;
  // convering celsius to fahrenheit
  let celsius = fahrenheit -32 * (5/9);
  //round down fahrenheit variable
  fahrenheit = Math.floor(fahrenheit);
  console.log(`The temp ${fahrenheit} degrees Fahrenheit`)
};
