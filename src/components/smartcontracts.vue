<template>
    <div class="flex justify-center dark:bg-black text-white dark:duration-300 py-20 p-2">
        <div class="border border-gray-700 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 p-4 shadow-2xl">
            <div class="grid lg:grid-cols-2 sm:grid-cols-1 p-4">
                <div>
                    <p class="uppercase">Smart contracts</p>
                    <h1 class="font-bold lg:text-6xl text-4xl mt-8">Transparent trade<br />
                    without intermediaries</h1>
                    <p class="text-2xl mt-8">Smart contracts have changed the game <br />
                    when it comes to business and banking without the<br />
                    the need to go through a third party.  This gives the <br />
                    owners full control over how they conduct business.</p>
                </div>
                <div class="grid place-items-center" id="smart-contract-bg">
                    <img 
                        src="../assets/smart-contract.png" 
                        alt=""
                        width="400"
                        height="400">
                </div>
            </div>
            <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-center uppercase py-12 text-center">
                <a href="" class="border border-gray-600 shadow-2xl rounded-lg p-2 w-1/2 grid place-items-center">
                    <img 
                        src="../assets/icons_ethereum.png" 
                        alt=""
                        width="75"
                        height=""
                        class="my-2">
                     Ethereum
                </a>
                <a href="" class="border border-gray-600 shadow-2xl rounded-lg p-2 w-1/2 grid place-items-center">
                    <img 
                        src="../assets/algo.png" 
                        alt=""
                        width="75"
                        height=""
                        class="my-2">
                    Algorand
                </a>
                <a href="" class="border border-gray-600 shadow-2xl rounded-lg p-2 w-1/2 grid place-items-center">
                    <img 
                        src="../assets/icons_ada.png" 
                        alt=""
                        width="75"
                        height=""
                        class="my-2">
                    Cardano
                </a>
                <a href="" class="border border-gray-600 shadow-2xl rounded-lg p-2 w-1/2 grid place-items-center">
                    <img 
                        src="../assets/cosmos.png" 
                        alt=""
                        width="75"
                        height=""
                        class="my-2">
                    Cosmos
                </a>
            </div>
        </div>        
    </div>

    <div id="dark-bg" class="h-96 9y-20">
        
    </div>

</template>

<script>

</script>

<style>
#dark-bg {
    background-image: url('../assets/night-landscape-wide-01.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
}
</style>