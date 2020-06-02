const ftoc = function(temp) {
  let temp_c = Math.round(10*(temp - 32) * (5/9))/10;
  return temp_c
}

const ctof = function(temp) {
  let temp_f = Math.round(10*(temp * (9/5) + 32))/10;
  return temp_f
}

module.exports = {
  ftoc,
  ctof
}
