# Quy Nhơn Landing Page (Static)

Landing page tĩnh để list địa điểm **ăn uống** và **check-in** tại Quy Nhơn/Bình Định.
Không dùng database ngoài.

## Chạy nhanh

- Cách 1: mở trực tiếp file `index.html` bằng trình duyệt.
- Cách 2: dùng VS Code **Go Live** extension.
- Cách 3: chạy local server bằng Node:

```bash
npx serve .
```

Sau đó truy cập: `http://localhost:8080`

## Chỉnh dữ liệu thủ công

Mở file `script.js`, sửa mảng `PLACES`:

```js
{
  id: 9,
  name: "Tên địa điểm",
  type: "food", // hoặc "checkin"
  area: "Khu vực",
  note: "Mô tả ngắn",
  bestTime: "Khung giờ gợi ý",
  budget: "Mức chi phí"
}
```

Lưu file và refresh trang để thấy dữ liệu mới.

## Đánh dấu "đã đi"

- Mỗi card có nút `Đánh dấu đã đi` / `Đã đi ✓`.
- Trạng thái được lưu trên trình duyệt bằng `localStorage` (key: `quyNhonVisitedPlaceIds`).
- Muốn reset toàn bộ trạng thái đã đi: mở DevTools Console và chạy:

```js
localStorage.removeItem("quyNhonVisitedPlaceIds");
```
