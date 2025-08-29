<template>
    <button
        type="button"
        :class="[
            'rounded-lg font-medium transition duration-200',
            sizeClasses,
            variantClasses,
            { 'opacity-50 cursor-not-allowed': disabled },
        ]"
        :disabled="disabled"
        @click="$emit('click', $event)"
    >
        <slot />
    </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    variant: { type: String, default: "primary" }, // primary, secondary, danger...
    size: { type: String, default: "md" }, // sm, md, lg
    disabled: { type: Boolean, default: false },
});

// Style cho từng loại nút
const variantClasses = computed(() => {
    switch (props.variant) {
        case "secondary":
            return "px-3 py-1 text-xl bg-gray-200 rounded hover:bg-gray-300";
        case "danger":
            return "bg-red-500 text-white hover:bg-red-600";
        case "add":
            return "px-6 py-2 bg-orange-500 text-xl font-bold text-white rounded hover:bg-orange-600";
        default: // primary
            return "bg-blue-900 text-white px-4 py-2 font-bold rounded hover:bg-green-800 transition cursor-pointer";
    }
});

// Style cho kích thước
const sizeClasses = computed(() => {
    switch (props.size) {
        case "sm":
            return "px-3 py-1 text-sm";
        case "lg":
            return "px-6 py-3 text-lg";
        default:
            return "px-4 py-2 text-base";
    }
});
</script>
