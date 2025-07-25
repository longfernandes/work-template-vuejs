// store/orderStore.js
import { defineStore } from 'pinia';

export const useOrderStore = defineStore('order', {
    state: () => ({
        orders: [],
    }),
    actions: {
        addOrder(order) {
            this.orders.push(order); // Thêm đơn hàng vào store
        },
        updateOrderStatus(id, status) {
            const order = this.orders.find((order) => order.id === id);
            if (order) {
                order.status = status; // Cập nhật trạng thái đơn hàng
            }
        },
        removeOrder(id) {
            this.orders = this.orders.filter((order) => order.id !== id); // Xóa đơn hàng
        },
        clearOrders() {
            this.orders = []; // Xóa tất cả đơn hàng
        },
    },
    getters: {
        orders: (state) => state.orders, // Lấy danh sách đơn hàng
    },
});
