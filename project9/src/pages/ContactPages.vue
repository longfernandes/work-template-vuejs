<template>
    <section class="py-16">
        <h2 class="text-2xl font-bold mb-6">Contact</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Form bên trái -->
            <form
                @submit.prevent="saveContact"
                class="flex flex-col gap-4 max-w-md"
            >
                <input
                    v-model="form.name"
                    type="text"
                    placeholder="Your Name"
                    class="border p-2 rounded"
                />
                <input
                    v-model="form.email"
                    type="email"
                    placeholder="Your Email"
                    class="border p-2 rounded"
                />
                <textarea
                    v-model="form.message"
                    placeholder="Message"
                    rows="4"
                    class="border p-2 rounded"
                ></textarea>
                <button
                    type="submit"
                    class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                >
                    Save
                </button>
            </form>

            <!-- Danh sách bên phải -->
            <div>
                <h3 class="text-xl font-bold mb-4">Saved Contacts</h3>
                <ul class="space-y-3">
                    <li
                        v-for="(contact, index) in contacts"
                        :key="index"
                        class="p-3 border rounded bg-blue-200 flex justify-between items-start"
                    >
                        <div>
                            <p><strong>Name:</strong> {{ contact.name }}</p>
                            <p><strong>Email:</strong> {{ contact.email }}</p>
                            <p>
                                <strong>Message:</strong> {{ contact.message }}
                            </p>
                        </div>
                        <!-- nút xóa -->
                        <button
                            @click="deleteContact(index)"
                            class="text-red-600 hover:text-red-800 ml-4 cursor-pointer"
                            title="Xóa liên hệ"
                        >
                            🗑️
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const form = ref({
    name: "",
    email: "",
    message: "",
});

const contacts = ref([]);

// Lấy từ localStorage khi load trang
onMounted(() => {
    const stored = localStorage.getItem("contacts");
    if (stored) {
        contacts.value = JSON.parse(stored);
    }
});

// Lưu vào localStorage
function saveContact() {
    if (!form.value.name || !form.value.email || !form.value.message) return;

    contacts.value.push({ ...form.value });
    localStorage.setItem("contacts", JSON.stringify(contacts.value));

    // reset form
    form.value = { name: "", email: "", message: "" };
}

// Xóa contact
function deleteContact(index) {
    contacts.value.splice(index, 1);
    localStorage.setItem("contacts", JSON.stringify(contacts.value));
}
</script>
