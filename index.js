function getFirstSelector(selector){
  return document.querySelector(selector);
};
function nestedTarget(){
  return document.querySelector('#nested .target');
};
function increaseRankBy(n){
  const list = document.querySelectorAll('.ranked-list');

  for(let i = 0 ; i < list.length ; i++){
    let listElement = list[i].children

    for(let x = 0; x < listElement.length ; x++){
      listElement[x].innerHTML = parseInt(listElement[x].innerHTML) + n;
    }
  }
};
