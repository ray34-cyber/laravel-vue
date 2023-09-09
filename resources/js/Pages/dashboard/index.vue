<template>
    <div class="container mx-auto mt-8">
        <div class="mb-8">
            <div class="flex items-center w-full">
                <h1
                    class="font-bold flex-grow text-base md:text-xl lg:text-2xl items-stretch"
                >
                    Welcome back, {{ user.name }}
                </h1>
                <form @submit.prevent="handleLogout">
                    <button
                        type="submit"
                        class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 text-base md:text-xl lg:text-xl items-baseline"
                    >
                        Logout
                    </button>
                </form>
            </div>
            <hr class="border-b-2 border-cyan-400" />
        </div>

        <Link
            href="/dashboard/products/create"
            class="relative inline-block font-bold text-sm text-center md:text-xl lg:text-2xl dark:text-white text-black py-2 px-1 uppercase transition duration-500 ease-in-out tracking-[4px] overflow-hidden hover:bg-[#03e9f4] hover:text-[#050801] hover:shadow-[0_0_5px_#03e9f4,0_0_25px_#03e9f4,0_0_50px_#03e9f4,0_0_200px_#03e9f4] hover:box-reflect"
        >
            <!-- ... (content) ... -->
        </Link>

        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table
                            class="min-w-full text-left text-sm md:text-xl font-light"
                        >
                            <thead
                                class="border-b font-medium dark:border-neutral-500"
                            >
                                <tr>
                                    <th scope="col" class="px-6 py-4">#</th>
                                    <th scope="col" class="px-6 py-4">
                                        Product Name
                                    </th>
                                    <th scope="col" class="px-6 py-4">Price</th>
                                    <th scope="col" class="px-6 py-4">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="product in products"
                                    class="border-b dark:border-neutral-500"
                                >
                                    <td class="px-6 py-4">{{ product.id }}</td>
                                    <td
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {{ product.nama_produk }}
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ product.price }}
                                    </td>
                                    <td class="px-6 py-4">
                                        <Link
                                            :href="
                                                '/dashboard/products/' +
                                                product.id +
                                                '/edit'
                                            "
                                            class="inline-block"
                                        >
                                            <i
                                                class="pi pi-pencil text-yellow-500"
                                            ></i>
                                        </Link>
                                        <form
                                            @submit.prevent="
                                                deleteProduct(product.id)
                                            "
                                            class="inline-block pl-2"
                                        >
                                            <button type="submit">
                                                <i
                                                    class="pi pi-trash text-red-500"
                                                ></i>
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Link } from "@inertiajs/vue3";
export default {
    setup() {},
    components: {
        Link,
    },
    computed: {
        user() {
            return this.$page.props.auth.user;
        },
    },
    props: {
        products: Array,
    },
    methods: {
        async deleteProduct(id) {
            try {
                this.$inertia.delete(`/dashboard/products/${id}`);
            } catch (error) {
                console.log(error);
            }
        },

        handleLogout() {
            axios.post("/logout").then(() => {
                window.location.href = "/login";
            });
        },
    },
};
</script>
