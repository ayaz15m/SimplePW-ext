var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
var string_length = 10;
var randomstring = '';
for (var i=0; i<string_length; i++) {
  var rnum = Math.floor(Math.random() * chars.length);
  randomstring += chars.substring(rnum,rnum+1);
}
// console.log("random", randomstring)
$("#random").val(randomstring)