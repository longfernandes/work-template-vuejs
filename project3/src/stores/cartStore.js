import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  // Thêm sản phẩm mới hoặc tăng số lượng nếu đã tồn tại
  const addToCart = (product) => {
    const existing = items.value.find(
      (item) => item.id.toString() === product.id.toString()
    )
    if (existing) {
      existing.quantity += 1
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }

  // Xóa sản phẩm khỏi giỏ
  const removeFromCart = (id) => {
    items.value = items.value.filter(
      (item) => item.id.toString() !== id.toString()
    )
  }

  // Tăng số lượng
  const increaseQty = (id) => {
    const item = items.value.find(
      (item) => item.id.toString() === id.toString()
    )
    if (item) {
      item.quantity += 1
    }
  }


  const decreaseQty = (id) => {
    const item = items.value.find(
      (item) => item.id.toString() === id.toString()
    )
    if (item) {
      if (item.quantity > 0) {
        item.quantity -= 1
      } else {
        removeFromCart(id)
      }
    }
  }

  return {
    items,
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty
  }
})
