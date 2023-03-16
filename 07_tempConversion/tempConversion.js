const ftoc = function(F) {
  let C = (F - 32) * (5/9)
  const result = Math.round(C * 10) / 10;
  return result;

};

const ctof = function(C) {
  let F = C * (9/5) + 32
  const result = Math.round(F * 10) / 10;
  return result;
  
};

// TOP Solution Analysis:
/* const ftoc = function(f) {
  return Math.round((f - 32) * (5/9) * 10) / 10;  
 };
 
 const ctof = function(c) {
   return Math.round(((c * 9/5) + 32) * 10) / 10;
 }; */
 
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
