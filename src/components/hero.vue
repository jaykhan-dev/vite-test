<template>
<div class="grid lg:grid-cols-2">
    <div class="flex justify-center dark:bg-black dark:text-white dark:duration-300" id="hero-cta">
        <div class="mt-20">
            <p class="uppercase my-4">NFT Project</p>
            <h1 class="lg:text-8xl text-6xl font-bold" id="main-title">BlueAlgo</h1>
            <p class="mt-4 text-4xl">On the Algorand blockchain</p>
            <div class="my-2">
                <p class="">Buy NFT Music packages</p>
                <p class="">No middle men</p>
                <p class="">Invest directly with the artist</p>
            </div>

            <div>
                <router-link to="/mint">                    
                    <button class="my-4 p-2 bg-green-600 text-sm uppercase font-mono font-bold tracking-wide text-white rounded-lg mx-2 hover:bg-blue-600">Mint NFT</button>
                </router-link>
                <router-link to="/marketplace">
                    <button class="my-4 p-2 bg-blue-800 text-sm uppercase font-mono font-bold tracking-wide text-white rounded-lg hover:bg-green-600">Catalogue</button>
                </router-link>
                
            </div>
            
        </div>
        
    </div>
    <div class="">
        <Featured />
    </div>    
</div>
    
</template>

<script>
import Featured from '../components/Featured.vue'

export default {
    name: 'Hero',
    components: {
        Featured,
    }
}
</script>

<style>

</style>