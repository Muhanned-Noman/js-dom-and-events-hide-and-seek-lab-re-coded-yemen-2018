function getFirstSelector(selector){
  return document.querySelector(selector);
};
function nestedTarget(){
  return document.querySelector('#nested .target');
};
function increaseRankBy(n){
  const list = document.querySelectorAll('.ranked-list');

  for(let i = 0 ; i < list.length ; i++){
    parseInt(list[i].innerHTML) + n;
  }
};
