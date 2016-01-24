//This is a namesspace, it prevents collisions...
window.JS = window.JS || {};

//then I can make a module
JS.tictactoe = (function(){

  function bindListeners(){
    
  }


  function init(){
    bindListeners();
  }

  return {
    init: init
  };

}());

window.onload = tictactoe.init;
