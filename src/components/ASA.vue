<template>
<div class="lg:h-screen dark:bg-black dark:text-white text-black flex justify-center">
    <div class="lg:w-3/4">
        <!--SECTION HEADER-->
        <h1 class="text-6xl font-bold text-center">Create an Algorand Asset</h1>
        <div class="flex justify-between p-2 w-full">
            <div>
                <input type="text" placeholder="search track" class="text-center rounded-lg bg-gray-100 mx-2 h-full">
                <button type="button" class="p-2 border bg-green-600 rounded-lg hover:bg-blue-600 font-bold tracking-wide text-white uppercase h-full">
                    Mint track
                </button>    
            </div>
            
            <div class="flex font-bold tracking-wide">                
                <button class="p-2 m-2 bg-gray-200 rounded-lg hover:bg-black duration-300 text-black text-sm uppercase tracking-wide font-bold" type="button">TestNet</button>
                <button class="p-2 m-2 bg-gray-200 rounded-lg hover:bg-black duration-300 text-black text-sm uppercase tracking-wide font-bold" type="button">BetaNet</button>
                <button class="p-2 m-2 bg-gray-200 rounded-lg hover:bg-black duration-300 text-black text-sm uppercase tracking-wide font-bold" type="button">MainNet</button>
                <div class="bg-blue-500 p-8 rounded-full"></div>               
            </div>
            
        </div>
    <div class="dark:bg-black dark:text-white">
        <div class="flex justify-between p-2">
            
            <div class="flex items-center">
                <p class="p-2 text-2xl font-bold">AXXM6HKUG55HZYNCGGXZFML63J6OQU57XWVE7TEWDNJIRIUIR5NR3Q64O4</p>
                <p class="p-2">copy</p>
                <p class="p-2">QR</p>
            </div>
            <div class="dark:bg-black border dark:border-gray-800 dark:text-blue-400 text-white bg-gray-500 p-2 rounded-lg flex items-center">
                <h1 class="font-bold text-sm uppercase mx-2">Account Balance: </h1>
                <h1 class="font-bold tracking-wide">10 Algos</h1>
            </div>
        </div>
        <div class="flex justify-between">
            <div>
                
            </div>
            
        </div>
        <!--ASSET GRID 4x4-->
        <div class="grid lg:grid-cols-4 gap-2 p-2">
            <!--GRID 1-->
            <div class="p-2 border dark:border-gray-800 dark:bg-black bg-gray-300 rounded-lg">
                <div class="flex justify-between items-center">
                    <h1 class="text-2xl font-bold tracking-wide">ID:132464875</h1>
                    <h2 class="text-sm uppercase font-mono bg-blue-500 p-2 m-2 rounded-lg">Options</h2>
                </div>
                <div class="bg-gray-200">
                    <img src="../assets/vision-gray.png" alt="" width="300" height="300" class="">
                </div>
                <div>
                    <h1 class="text-center w-full text-2xl font-bold tracking-wide my-2">Asset title</h1>
                    <h1 class="text-center w-full my-2 font-bold">UNIT COUNT: 1000</h1>
                    <div class="grid grid-cols-2 gap-2">
                        <!--GRID 1-->
                        <div>
                            <h2 class="text-sm font-bold font-mono uppercase">Manager</h2>
                            <div class="p-2 bg-gray-700 rounded-lg text-white overflow-hidden">
                                AXXM6HKUG55HZYNCGGXZFML63J6OQU57XWVE7TEWDNJIRIUIR5NR3Q64O4
                            </div>
                        </div>
                        <!--GRID 2-->
                        <div>
                            <h2 class="text-sm font-bold font-mono uppercase">Reserve</h2>
                            <div class="p-2 bg-gray-700 rounded-lg text-white overflow-hidden">
                                AXXM6HKUG55HZYNCGGXZFML63J6OQU57XWVE7TEWDNJIRIUIR5NR3Q64O4
                            </div>
                        </div>
                        <!--GRID 3-->
                        <div>
                            <h2 class="text-sm font-bold font-mono uppercase">Freeze</h2>
                            <div class="p-2 bg-gray-700 rounded-lg text-white overflow-hidden">
                                AXXM6HKUG55HZYNCGGXZFML63J6OQU57XWVE7TEWDNJIRIUIR5NR3Q64O4
                            </div>
                        </div>
                        <!--GRID 4-->
                        <div>
                            <h2 class="text-sm font-bold font-mono uppercase">Clawback</h2>
                            <div class="p-2 bg-gray-700 rounded-lg text-white overflow-hidden">
                                AXXM6HKUG55HZYNCGGXZFML63J6OQU57XWVE7TEWDNJIRIUIR5NR3Q64O4
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
   
</div>
</template>