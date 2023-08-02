/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numToIndexMap = new Map(); // Buat Map untuk menyimpan angka-angka dan indeksnya

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Hitung angka pelengkap yang dibutuhkan untuk mencapai target

        if (numToIndexMap.has(complement)) {
            return [numToIndexMap.get(complement), i]; // Kembalikan indeks dari kedua angka yang berjumlah target dalam bentuk array
        }

        numToIndexMap.set(nums[i], i); // Tambahkan angka saat ini beserta indeksnya ke dalam Map
    }

    return []; // Jika tidak ditemukan solusi yang valid, kembalikan array kosong sesuai dengan batasan masalah
};
