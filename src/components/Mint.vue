<template>
<h1 class="text-6xl tracking-wide font-bold text-center dark:bg-black dark:text-white">Mint NFT</h1>
<div class="dark:bg-black dark:text-white dark:duration-300 flex justify-center lg:h-screen">
    
    <div class="grid lg:grid-cols-2 lg:w-3/4 gap-2 py-20">
        <div class="lg:w-3/4">
            
            <div class="grid place-items-center p-4 border-gray-900">
                <input type="text" placeholder="Name" class="text-4xl text-green-400 font-bold text-center tracking-wide uppercase border-4 border-green-600 rounded-lg dark:bg-black my-2 p-2 w-full"><br>
                <label for="">Image</label>
                <input type="file" class="text-2xl tracking-wide uppercase dark:bg-black w-full border border-blue-600 border-opacity-30 hover:border-opacity-100 duration-300 rounded-lg p-2 m-2 bg-gray-200"><br>
                <label for="">Track</label>
                <input type="file" class="text-2xl tracking-wide uppercase dark:bg-black w-full border border-blue-600 border-opacity-30 hover:border-opacity-100 duration-300 rounded-lg p-2 m-2 bg-gray-200"><br>
                <div class="flex justify-between my-4">
                    <input type="text" placeholder="Unit name" class="text-2xl tracking-wide uppercase dark:bg-black w-full border-b-4 p-2 m-2"><br>
                    <input type="text" placeholder="Total units" class="text-2xl tracking-wide uppercase dark:bg-black w-full border-b-4 p-2 m-2"><br>
                </div>
                <button type="button" class="w-full bg-red-600 p-2 text-white font-bold tracking-wide hover:bg-blue-600 duration-300 rounded-lg ">MINT</button>
            </div>
        </div>
        
        <form action="" class="">
            <input type="text" placeholder="Creator" class="text-2xl tracking-wide uppercase dark:bg-black my-2 border-b dark:border-white border-black p-2 w-full"><br>
            
            <input type="text" placeholder="Decimals" class="text-2xl tracking-wide uppercase dark:bg-black my-2 border-b dark:border-white border-black p-2 w-full"><br>
            <input type="text" placeholder="Frozen" class="text-2xl tracking-wide uppercase dark:bg-black my-2 border-b dark:border-white border-black p-2 w-full"><br>
            <input type="text" placeholder="Url" class="text-2xl tracking-wide uppercase dark:bg-black my-2 border-b dark:border-white border-black p-2 w-full"><br>
            <input type="text" placeholder="Metadata" class="text-2xl tracking-wide uppercase dark:bg-black my-2 border-b dark:border-white border-black p-2 w-full"><br>
            <input type="text" placeholder="Manager" class="text-2xl tracking-wide uppercase dark:bg-black my-2 border-b dark:border-white border-black p-2 w-full"><br>
            <input type="text" placeholder="Reserve" class="text-2xl tracking-wide uppercase dark:bg-black my-2 border-b dark:border-white border-black p-2 w-full"><br>
            <input type="text" placeholder="Freeze" class="text-2xl tracking-wide uppercase dark:bg-black my-2 border-b dark:border-white border-black p-2 w-full"><br>
            
        </form>
        
    </div>
</div>
</template>