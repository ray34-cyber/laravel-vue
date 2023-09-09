<template>
    <div class="container mx-auto flex flex-col lg:px-72 mt-10">
        <h1 class="text-center flex-auto text-4xl font-bold">
            Add new product
        </h1>
        <div class="flex-auto md:flex-none">
            <form
                class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                @submit.prevent="addProduct"
            >
                <div class="mb-3">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="nama_produk"
                    >
                        Nama Produk
                    </label>
                    <input
                        class="shadow appearance-none border border-teal-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none input-success focus:shadow-outline"
                        id="nama_produk"
                        type="text"
                        placeholder="Nama Produk"
                        name="nama_produk"
                        v-model="formValues.nama_produk"
                    />
                </div>

                <div class="mb-3">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="slug"
                    >
                        Slug
                    </label>
                    <input
                        class="shadow appearance-none border border-teal-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight input-success focus:outline-none focus:shadow-outline"
                        id="slug"
                        type="text"
                        name="slug"
                        placeholder="Slug"
                        v-model="formValues.slug"
                    />
                </div>

                <div class="mb-3">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="body"
                    >
                        Description
                    </label>
                    <textarea
                        name="body"
                        id="body"
                        cols="70"
                        rows="5"
                        class="shadow appearance-none border border-teal-500 rounded w-full py-2 px-3 text-gray-700 mb-3 input-success leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Description your product"
                        v-model="formValues.body"
                    ></textarea>
                </div>

                <div class="mb-6">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="price"
                    >
                        Price
                    </label>
                    <input
                        class="shadow appearance-none border border-teal-500 rounded w-full py-2 px-3 text-gray-700 mb-3 input-success leading-tight focus:outline-none focus:shadow-outline"
                        id="price"
                        type="number"
                        name="price"
                        placeholder="Price Product"
                        v-model="formValues.price"
                    />
                </div>

                <div class="flex items-center justify-center">
                    <Button type="submit" title="Add new product" />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { router } from "@inertiajs/vue3";
import Button from "@/Components/Button.vue";
export default {
    name: "CreateProduct",
    components: {
        Button,
    },
    data() {
        return {
            formValues: {
                nama_produk: "",
                slug: "",
                body: "",
                price: 0,
            },
        };
    },
    methods: {
        addProduct() {
            router.post("/dashboard/products", this.formValues);
            window.location.href = "/dashboard";
        },
    },
};
</script>
