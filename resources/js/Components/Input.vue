<template>
    <div class="w-56 md:w-72 lg:w-80 relative group">
        <input
            :type="type"
            :name="name"
            :id="id"
            required
            class="w-full h-10 px-4 text-lg peer dark:text-white dark:bg-transparent outline-none border-none focus:outline-none focus:ring-0 focus:border-transparent"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
        <label
            :for="id"
            class="transform dark:text-white transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-lg lg:text-lg group-focus-within:text-lg peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
            >{{ title }}</label
        >
    </div>
</template>

<script>
export default {
    name: "Input",
    props: {
        title: String,
        id: String,
        type: String,
        name: String,
        modelValue: String,
    },
};
</script>
