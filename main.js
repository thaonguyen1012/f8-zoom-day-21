// push2: thêm phần tử vào cuối mảng
Array.prototype.push2 = function(item) {
  this[this.length] = item;
  return this.length;
};

// vd1: thêm món ăn vào menu
let menu = ['phở', 'bún chả'];
console.log('menu ban đầu:', menu);
let newLength = menu.push2('bánh mì');
console.log('sau khi thêm:', menu);
console.log('độ dài mới:', newLength);
// menu ban đầu: ['phở', 'bún chả']
// sau khi thêm: ['phở', 'bún chả', 'bánh mì']
// độ dài mới: 3

// vd2: thêm điểm số
let scores = [8, 7];
scores.push2(9);
scores.push2(6);
console.log('điểm các môn:', scores);
// điểm các môn: [8, 7, 9, 6]

console.log('-------------------');

// reduce2: gom tất cả thành 1 giá trị
Array.prototype.reduce2 = function(callback, startValue) {
  let result = startValue;
  for (let i = 0; i < this.length; i++) {
      result = callback(result, this[i], i, this);
  }
  return result;
};

// vd1: tính tổng tiền
let menuPrices = [15000, 25000, 30000];
let total = menuPrices.reduce2(function(sum, price) {
  return sum + price;
}, 0);
console.log('giá từng món:', menuPrices);
console.log('tổng tiền:', total);
// giá từng món: [15000, 25000, 30000]
// tổng tiền: 70000

// vd2: tìm số lớn nhất
let numbers = [3, 8, 1, 9, 2];
let max = numbers.reduce2(function(biggest, current) {
  return current > biggest ? current : biggest;
}, numbers[0]);
console.log('các số:', numbers);
console.log('số lớn nhất:', max);
// các số: [3, 8, 1, 9, 2]
// số lớn nhất: 9

console.log('-------------------');

// join2: nối các phần tử thành chuỗi
Array.prototype.join2 = function(separator = ',') {
  let result = '';
  for (let i = 0; i < this.length; i++) {
      result += this[i];
      if (i < this.length - 1) {
          result += separator;
      }
  }
  return result;
};

// vd1: tạo địa chỉ
let address1 = ['Hà Nội', 'Hoàn Kiếm', 'Hai Bà Trưng'];
let fullAddress1 = address1.join2(', ');
console.log('các phần địa chỉ:', address1);
console.log('địa chỉ đầy đủ:', fullAddress1);
// các phần địa chỉ: ['Hà Nội', 'Hoàn Kiếm', 'Hai Bà Trưng']
// địa chỉ đầy đủ: Hà Nội, Hoàn Kiếm, Hai Bà Trưng

// vd2: tạo câu
let words = ['Hôm', 'nay', 'trời', 'đẹp'];
let sentence = words.join2(' ');
console.log('từng từ:', words);
console.log('câu hoàn chỉnh:', sentence);
// từng từ: ['Hôm', 'nay', 'trời', 'đẹp']
// câu hoàn chỉnh: Hôm nay trời đẹp

console.log('-------------------');

Array.prototype.forEach2 = function (callback, thisArg) {
  const length = this.length;
  
  for (let i = 0; i < length; i++) {
      if (i in this) {
          callback.call(thisArg, this[i], i, this);
      }
  }
};

// vd1: in tên
const students = ['Nam', 'Linh', 'Duc'];
students.forEach2((name, index) => {
  console.log(`hs ${index}: ${name}`);
});
// hs 0: Nam
// hs 1: Linh  
// hs 2: Duc

// vd2: tính tổng
const orderPrices = [15000, 25000, 8000];
let money = 0;
orderPrices.forEach2((price) => {
  money += price;
  console.log('thêm ' + price + ', tổng: ' + money);
});
// thêm 15000, tổng: 15000
// thêm 25000, tổng: 40000  
// thêm 8000, tổng: 48000

// vd3: gửi email cho khách hàng
const emails = ['nam@gmail.com', 'linh@yahoo.com', 'duc@hotmail.com'];
emails.forEach2((email, index) => {
  console.log(`gửi thông báo đến ${email} (khách ${index + 1})`);
});
// gửi thông báo đến nam@gmail.com (khách 1)
// gửi thông báo đến linh@yahoo.com (khách 2)
// gửi thông báo đến duc@hotmail.com (khách 3)