const daysOfWeek = ["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy"];

// Lấy thời gian hiện tại
const now = new Date();
console.log(now);

const dayIndex = now.getDay();
console.log('Vị trí ngày trong mảng', dayIndex);

const today = daysOfWeek[dayIndex];
console.log(today); 