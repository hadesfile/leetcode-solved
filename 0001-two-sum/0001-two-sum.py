class Solution:
    def twoSum(self, nums, target):
        numToIndexMap = {}  # Buat dictionary untuk menyimpan angka-angka dan indeksnya

        for i, num in enumerate(nums):
            complement = target - num  # Hitung angka pelengkap yang dibutuhkan untuk mencapai target

            if complement in numToIndexMap:
                return [numToIndexMap[complement], i]  # Kembalikan indeks dari kedua angka yang berjumlah target dalam bentuk list

            numToIndexMap[num] = i  # Tambahkan angka saat ini beserta indeksnya ke dalam dictionary

        return []  # Jika tidak ditemukan solusi yang valid, kembalikan list kosong sesuai dengan batasan masalah
