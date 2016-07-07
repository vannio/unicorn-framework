'use strict';

(function(exports) {
  function ExampleModel(){
    this.unicornList = ['Andrea','Merve','Jonathan','Van'];
  };

  ExampleModel.prototype = {
    printHello: function(){
      console.log('Hello');
    }
  };

  exports.ExampleModel = ExampleModel;

})(this);
