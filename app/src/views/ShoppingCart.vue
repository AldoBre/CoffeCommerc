"<template>
    <div class="marginTop drop-shadow-lg w-11/12 shadow-sm shadow-gray-400 p-4 rounded-md ">
      <div class="mb-2">
          <h1>Carrinho de Produtos</h1>
      </div>
      <hr class="mb-2 p-0">
  
      <div class="flex justify-between items-center  drop-shadow-lg w-11/12 shadow-sm shadow-gray-400 p-4 m-auto rounded-md max-sm:flex-col ">
          <div class=" w-1/8 max-sm:order-1 flex flex-col items-center gap-2">
              <img class="w-28 rounded-md" src="../../public/img/icons/cafe-torrado.jpeg" alt="">
              <div class="text-xs opacity-50">
                Vendedor: Industria do café
              </div>
          </div>
  
          <div class="flex flex-col gap-2 w-5/8 items-center max-sm:order-2" >
              <div class="flex flex-col items-center">
                  <div class="mb-2 text-lg flex items-center">
                      <legend>Produto: Café Torrado- 500G </legend>
                  </div>

                  <div class="flex gap-1">
                      <legend class="text-si">Status:</legend> Em rota de entrega
                  </div>
                  
              </div>
  
  
          </div>
  
          <div class=" flex gap-28  w-2/8 max-sm:gap-8 max-sm:order-3">
  
              <div class="w-1/8 flex flex-col items-center justify-center">
                  <p>Quantidade</p>
                  <div class=" flex gap-1">
                      <button>+</button>
                      <p>02</p>
                      <button>-</button>
                  </div>
              </div>
      
              <div class=" flex flex-col items-center">
                <div>
                    <p>Valor total</p>
                    <p>R$ 450,00</p>
                </div>
              </div>
              <button class="absolute top-1 right-3">
                X
              </button>
              
          </div>
      </div>
      <div class="flex justify-between mx-12">
        <div>           
            <div class="mt-1">
              <button> Continuar Comprando </button>
            </div>
        </div>   

        <div class="flex flex-col justify-end mt-1 gap-2">
            <div class="flex gap-1">
              Calcule o frete
              <input type="text">
            </div>
            <div class="flex flex-col items-end gap-1">
              <legend> Frete R$ XXXXX</legend>
              <legend>Valor Total: R$ XXXXXX</legend>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  </style>"