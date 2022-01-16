<template>
<div class="grid lg:grid-cols-2">
    <div class="flex justify-center dark:bg-black dark:text-white dark:duration-300" id="hero-cta">
        <div class="mt-20">
            <p class="uppercase my-4">NFT Project</p>
            <h1 class="lg:text-8xl text-6xl font-bold" id="main-title">Eternal Blue</h1>
            <p class="mt-4 text-4xl">On the Algorand blockchain</p>
            <div>
                <p class="py-2">Buy NFT Music packages</p>
                <p class="py-2">No middle men</p>
                <p class="py-2">Invest directly in the artist</p>
            </div>

            <button class="p-2 bg-blue-800 text-sm uppercase font-mono font-bold tracking-wide text-white rounded-lg">Browse Catalogue</button>
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