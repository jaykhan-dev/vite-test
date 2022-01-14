<template>
<h1 class="text-6xl tracking-wide font-bold text-center dark:bg-black dark:text-white">Create Asset</h1>
<div class="dark:bg-black dark:text-white dark:duration-300 flex justify-center">
    
    <div class="grid lg:grid-cols-2 lg:w-3/4 gap-2 py-20">
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
        <div class="lg:w-3/4">
            
            <div class="grid place-items-center p-4 border-gray-900">
                <input type="text" placeholder="Name" class="text-4xl font-bold text-center tracking-wide uppercase dark:bg-black my-2 p-2 w-full"><br>
                <h1>Upload image</h1>
                <img src="../assets/blue-painting.jpg" alt="" class="bg-gray-100">
                <div class="flex justify-between">
                    <input type="text" placeholder="Unit" class="text-2xl tracking-wide uppercase dark:bg-black w-full border p-2 m-2"><br>
                    <input type="text" placeholder="Total" class="text-2xl tracking-wide uppercase dark:bg-black w-full border p-2 m-2"><br>
                </div>
                <button type="button" class="w-full bg-green-600 p-2 text-white font-bold tracking-wide hover:bg-blue-600 duration-300">MINT</button>
            </div>
        </div>
    </div>
</div>
</template>