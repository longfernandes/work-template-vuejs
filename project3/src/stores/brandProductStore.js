import { defineStore } from 'pinia'
import { ref } from 'vue'
import { adidasProducts } from '../data/brands/adidas'
import { nikeProducts } from '../data/brands/nike'
import { kamitoProducts } from '../data/brands/kamito'
import { wikaProducts } from '../data/brands/wika'
import { mitreProducts } from '../data/brands/mitre'
import { mizunoProducts } from '../data/brands/mizuno'
import { akkaProducts } from '../data/brands/akka'

export const useBrandProductStore = defineStore('brandProduct', () => {
  const brandMap = ref({})

  const loadProductsByBrand = (brand) => {
    if (brandMap.value[brand]) return

    switch (brand) {
      case 'adidas':
        brandMap.value[brand] = adidasProducts
        break
      case 'nike':
        brandMap.value[brand] = nikeProducts
        break
      case 'kamito':
        brandMap.value[brand] = kamitoProducts
        break
      case 'wika':
        brandMap.value[brand] = wikaProducts
        break
      case 'mitre':
        brandMap.value[brand] = mitreProducts
        break
      case 'mizuno':
        brandMap.value[brand] = mizunoProducts
        break
      case 'akka':
        brandMap.value[brand] = akkaProducts
        break
      
      default:
        brandMap.value[brand] = []
    }
  }

  const getProducts = (brand) => brandMap.value[brand] || []

  const getProductById = (brand, id) => {
    const list = brandMap.value[brand] || []
    return list.find(p => p.id === Number(id))
  }

  return { loadProductsByBrand, getProducts, getProductById }
})
