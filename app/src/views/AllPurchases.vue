"<template>
  <div class="marginTop drop-shadow-lg w-11/12 shadow-sm shadow-gray-400 p-4 rounded-md ">
    <div class="mb-2">
        <h1>Seus Pedidos</h1>
    </div>
    <hr class="mb-2 p-0">

    <div class="flex justify-between items-center  drop-shadow-lg w-11/12 shadow-sm shadow-gray-400 p-4 m-auto rounded-md max-sm:flex-col ">
        <div class=" w-1/8 max-sm:order-1">
            <img class="w-28 rounded-md" src="../../public/img/icons/cafe-torrado.jpeg" alt="">
        </div>

        <div class="flex flex-col gap-2 w-5/8 items-center max-sm:order-2" >
            <div>
                <div class="flex">
                    <legend>Produto: Café Torrado- 500G </legend>
                </div>
    
                <div>
                    Vendedor: Industria do café
                </div>
    
                <div>
                    Status: Em rota de entrega
                </div>
            </div>

            <div class="flex gap-2 justify-center items-center max-sm:hidden">
                <div>
                    <button>Rastrear</button>
                </div>
                
                <div>
                    <button>Cancelar Pedido</button>
                </div>
    
                <div>
                    <button> Marcar como Recebido</button>
                </div>
            </div>

        </div>

        <div class=" flex gap-28  w-2/8 max-sm:gap-8 max-sm:order-3">

            <div class="w-1/8 flex flex-col items-center">
                <p>Quantidade</p>
                <p>02</p>
            </div>
    
            <div>
                <p>Valor total</p>
                <p>R$ 450,00</p>
            </div>

        </div>

        <div class="hidden mt-4 gap-2 justify-center items-center max-sm:flex max-sm:order-4">
                <div>
                    <button>Rastrear</button>
                </div>
                
                <div>
                    <button>Cancelar Pedido</button>
                </div>
    
                <div>
                    <button> Marcar como Recebido</button>
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