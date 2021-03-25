const assert = require('chai').assert;
const app = require('../201612331');



describe('App', function(){

    describe('f1()', function(){
      it('Deveria devolver ok de un json array', function(){
          let mostrarSaludo = app.f1_201612331({respuesta: "OK"});
          assert.strictEqual(mostrarSaludo, 'OK');
        });
        
    });
    
  
    describe('f2()', function(){
      it('Deberia devolver {response:100}', function(){
          let resultado = app.f2_201612331(10,2);
          assert.strictEqual(resultado, `{"response": ${10**2}}`);
      });
  
      it('Deberia devolver {respose:16}', function(){
          let resultado = app.f2_201612331(10,5);
          assert.typeOf(resultado, 'String');
      });
    });
  
  
    describe('f3()', function(){
      it('deberia devolver 200', function(){
          let resultado = app.f3_201612331('OK');
          assert.strictEqual(resultado, 200);
      });
  
      it('deberia devolver 200', function(){
          let resultado = app.f3_201612331('OK');
          assert.typeOf(resultado, 'number');
      });
    });
  
    describe('f4()', function(){
      it('deberia devolver aloh', function(){
          let result = app.f4_201612331('hola')
          assert.strictEqual(result, "aloh");
      });
  
    });
  
    describe('f5()', function(){
      it('deberia devolver JOSE WANNAN', function(){
          let resultado = app.f5_201612331('jose wannan')
          assert.isString(resultado, "JOSE WANNAN");
      });
  
    });
  
  
  });
  
