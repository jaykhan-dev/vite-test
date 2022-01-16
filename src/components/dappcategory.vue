<template>
    <div class="flex justify-center dark:bg-black dark:text-white dark:duration-300 py-20 p-4">
        <div class="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 place-items-center">
            <div class="grid place-items-center -translate-y-64">
                <img 
                src="../assets/dragon-gray-fix.png" 
                alt=""
                class=""
                width="300"
                height="250">
            </div>
            <div class="col-span-2">
                <p class="uppercase my-8">Packages</p>
                <h1 class="font-bold text-6xl my-8">Music NFT's</h1>
                <p class="lg:text-4xl my-8 lg:w-1/2 w-full">Each NFT contains a collection of items that are considered valuable</p>
                <div class="grid lg:grid-cols-2 sm:grid-cols-1">
                    <div class="lg:w-2/4 w-full py-8">
                        <div class="w-1/4 flex justify-center p-4">
                            <!--ICON FOR Contract-->
                        </div>
                        <i class="fas fa-file-signature text-4xl text-black shadow-2xl p-4 bg-purple-100"></i>
                        <h1 class="font-bold text-2xl mt-4">Royalties embedded into the contract</h1>
                        <p class="mt-4">Each smart contract can be modified to state how many copies and how royalties should be paid for reselling or streaming</p>
                    </div>
                    <div class="lg:w-2/4 w-full  py-8">
                        <div class="w-1/4 flex justify-center p-4">
                            <!--ICON FOR Streaming-->
                        </div>
                        <i class="fas fa-podcast text-4xl p-4 text-black shadow-2xl bg-green-100"></i>
                        <h1 class="font-bold text-2xl mt-4">Streaming music and earning crypto</h1>
                        <p class="mt-4">Attention Based Tokens like BAT are a great idea and incentive to earn passive income</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>