<template>
 <div class="toggle-wrapper">
     <label for="toggle">
         <input type="checkbox" :checked="(mode === 'dark') ? 'checked' : false">
         <span class="toggler round"></span>
     </label>
 </div>
</template>

<script>
export default {
    props: ['mode']
}
</script>

<style>
.toggle {
    display: inline-block;
    width: 60px;
    height: 34px;
}
/*
.toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}

.toggler {
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #15202B;
    -webkit-transition: 0.4s;
    transition: 0.4s;

}*/
</style>