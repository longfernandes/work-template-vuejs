// src/utils/formatData.js
import dayjs from 'dayjs';

/**
 * Hàm format lại ngày tháng
 * @param {Date} date - Ngày cần format
 * @returns {string} - Ngày đã format dưới dạng 'DD/MM'
 */
export const useUtils = (date) => {
  return dayjs(date).format('DD/MM');  // Trả về ngày đã được format
};
