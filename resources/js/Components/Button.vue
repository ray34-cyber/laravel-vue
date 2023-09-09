<template>
    <button
        class="relative inline-block font-bold text-lg md:text-xl lg:text-2xl dark:text-white text-black py-2 px-7 uppercase transition duration-500 ease-in-out tracking-[4px] overflow-hidden hover:bg-[#03e9f4] hover:text-[#050801] hover:shadow-[0_0_5px_#03e9f4,0_0_25px_#03e9f4,0_0_50px_#03e9f4,0_0_200px_#03e9f4] hover:box-reflect"
        :type="type"
    >
        <span
            class="hue-rotate-[90deg] absolute block top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent to-[#03e9f4] animate-animate1"
        ></span>
        <span
            class="hue-rotate-[180deg] absolute block -top-full right-0 w-[2px] h-full bg-gradient-to-b from-transparent to-[#03e9f4] animate-animate2"
        ></span>
        <span
            class="hue-rotate-[270deg] absolute block bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-transparent to-[#03e9f4] animate-animate3"
        ></span>
        <span
            class="absolute block bottom-full left-0 w-[2px] h-full bg-gradient-to-t from-transparent to-[#03e9f4] animate-animate4"
        ></span>
        {{ title }}
    </button>
</template>

<script>
export default {
    name: "Button",
    props: ["title", "type"],
};
</script>
