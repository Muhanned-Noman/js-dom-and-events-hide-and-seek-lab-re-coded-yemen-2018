function getFirstSelector(selector){
  return document.querySelector(selector);
};
function nestedTarget(){
  return document.querySelector('#nested .target');
};
function increaseRankBy(n){
  return parseInt(document.getElementsByClassName('.ranked-list').inerHTML(),n);
};
