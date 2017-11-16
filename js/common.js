/**
 * @return {[type]}
 */
function getQueryString(name) {
  var reg = new RegExp('(^|&)'+ name + '=([^&]*)(&|$)', 'i');
  var result = window.location.search.substr(1).match(reg);
  if(result != null) {
    return unescape(result[2]);
  }
  return null;
}