<template>
<div class="flex justify-center dark:bg-black dark:text-white dark:duration-300">
    <div class="lg:w-3/4 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1">
        <div>
            <h1 class="font-bold uppercase mb-4 text-sky-600">DApps</h1>
            <ul class="text-sm uppercase">
                <li class="my-4 hover:text-sky-500">Finance</li>
                <li class="my-4 hover:text-sky-500">Digital Art</li>
                <li class="my-4 hover:text-sky-500">Games</li>
                <li class="my-4 hover:text-sky-500">Technology</li>
            </ul>
        </div>
        <div>
            <h1 class="font-bold uppercase mb-4 text-sky-600">Smart Contracts</h1>
            <ul class="text-sm uppercase">
                <li class="my-4 hover:text-sky-500">Ethereum</li>
                <li class="my-4 hover:text-sky-500">Algorand</li>
                <li class="my-4 hover:text-sky-500">Cardano</li>
                <li class="my-4 hover:text-sky-500">Cosmos</li>
            </ul>
        </div>
        <div>
            <h1 class="font-bold uppercase mb-4 text-sky-600">Developers</h1>
            <ul class="text-sm uppercase">
                <li class="my-4 hover:text-sky-500">JavaScript</li>
                <li class="my-4 hover:text-sky-500">Python</li>
                <li class="my-4 hover:text-sky-500">GO</li>                
            </ul>
        </div>
        <div>
            <h1 class="font-bold uppercase mb-4 text-sky-600">Company</h1>
            <ul class="text-sm uppercase">
                <li class="my-4 hover:text-sky-500">About</li>
                <li class="my-4 hover:text-sky-500">Hire</li>
                <li class="my-4 hover:text-sky-500">Contact</li>                
            </ul>
        </div>
        <div>
            <div class="flex">
                <input type="text"
                class="border border-gray-200 p-4 rounded-l-full"
                placeholder="Newsletter">
                <div class="p-4 grid place-items-center border border-gray-500"><i class="fas fa-arrow-right"></i></div>
            </div>
            <div class="mt-4">
                <i class="fab fa-twitter mx-2 text-4xl hover:text-sky-500"></i>
                <i class="fab fa-github mx-2 text-4xl hover:text-sky-500"></i>
                <i class="fab fa-discord mx-2 text-4xl hover:text-sky-500"></i>
                <i class="fab fa-youtube mx-2 text-4xl hover:text-red-600"></i>
            </div>
            
        </div>
        
    </div>
    
</div>

<div class="grid place-items-center text-center p-4 dark:bg-black dark:text-white dark:duration-300">
    <p>©2021 Melange Labs, All rights reserved | Personal Data and Privacy Policies</p>
    <h1 class="p-2 my-8 border border-gray-200 rounded-full lg:w-1/5 md:w-1/2 w-full">We use cookies in accordance with GDPR</h1>
</div>
    
</template>

<style>
li {
    cursor: pointer;
}
</style>