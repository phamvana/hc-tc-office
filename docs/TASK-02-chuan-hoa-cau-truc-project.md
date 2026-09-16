# TASK-02 — Chuẩn hóa cấu trúc project

## 1. Mục tiêu

Chuẩn hóa cấu trúc thư mục `src` theo mô hình phân tách trách nhiệm (Separation of Concerns), chuẩn bị nền móng quản lý mã nguồn bài bản trước khi triển khai các cấu phần giao diện nghiệp vụ.

## 2. Cấu trúc trước khi thực hiện

```text
src/
├── assets/
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## 3. Cấu trúc sau khi thực hiện

```text
src/
├── assets/
├── components/     # Chứa file .gitkeep
├── hooks/          # Chứa file .gitkeep
├── layouts/        # Chứa file .gitkeep
├── pages/          # Chứa file .gitkeep
├── services/       # Chứa file .gitkeep
├── types/          # Chứa file .gitkeep
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## 4. Ý nghĩa các thư mục

- `components/`: Chứa các UI component nhỏ, độc lập và có khả năng tái sử dụng cao trong hệ thống (`Button`, `Modal`).
- `layouts/`: Chứa các khung bố cục tổng thể của ứng dụng (`AdminLayout` gồm Sidebar, Header) để tránh lặp code boilerplate UI.
- `pages/`: Chứa các màn hình chức năng lớn tương ứng với các tuyến URL định tuyến (`Dashboard`, `SchedulePage`).
- `services/`: Tầng xử lý logic dữ liệu thuần túy, gọi API và định dạng dữ liệu (Data Layer), tuyệt đối không chứa mã JSX/HTML.
- `types/`: Định nghĩa kiểu dữ liệu nâng cao và các Interface/Data Model dùng chung trong hệ sinh thái TypeScript của dự án.
- `hooks/`: Đóng gói logic trạng thái tái sử dụng (Custom Hooks) bằng cách tận dụng các React hooks nguyên bản (`useState`, `useEffect`).

## 5. Kiến thức đã học

- Nắm rõ mô hình cấu trúc phân lớp trong React và cách phối hợp: `Page` dùng `Layout` và lắp ráp các `Component`, gọi dữ liệu từ `Service`, ép kiểu qua `Types` và tối ưu logic thông qua `Hooks`.
- Hiểu bản chất cơ chế của Git: Git chỉ theo dõi tập tin (files) chứ không theo dõi thư mục rỗng.
- Kỹ thuật sử dụng file ẩn `.gitkeep` làm điểm neo giữ chỗ (placeholder) giúp đồng bộ cấu trúc thư mục rỗng lên Git repository từ giai đoạn khởi lập dự án.

## 6. Các bước thực hiện

1.  Truy cập vào thư mục `src/`.
2.  Lần lượt tạo các thư mục mới: `components`, `hooks`, `layouts`, `pages`, `services`, `types`.
3.  Tạo tập tin `.gitkeep` bên trong từng thư mục trống vừa tạo để kích hoạt tính năng theo dõi của Git.

## 7. Kiểm thử

Chạy các lệnh kiểm tra hệ thống:

- `npm run build`: Kết quả **PASS** (Biên dịch dự án không phát sinh lỗi cấu trúc).
- `npm run lint`: Kết quả **PASS** (ESLint kiểm tra mã nguồn và không phát hiện lỗi theo các rule hiện tại của dự án).
- `npm run dev`: Kết quả **PASS** (Ứng dụng khởi động bình thường trên môi trường local).
- `git status`: Kết quả xác nhận nhánh `main` đang đồng bộ với `origin/main` và Git đã nhận diện chính xác 6 thư mục mới dưới dạng `Untracked files`.

## 8. Kết quả

Cấu trúc dự án `hc-tc-office` đã được phân tầng chuẩn hóa đúng thiết kế mà không làm ảnh hưởng đến luồng vận hành hiện tại của ứng dụng.

## 9. Vấn đề gặp phải

Ban đầu khi tạo các thư mục rỗng, hệ thống quản lý phiên bản Git hoàn toàn bỏ qua và không ghi nhận sự thay đổi của các cấu trúc thư mục mới này trên Terminal.

## 10. Bài học

Giải quyết vấn đề thư mục trống bằng cách áp dụng giải pháp tạo file `.gitkeep`. Cần duy trì thói quen sử dụng kỹ thuật này khi muốn quy hoạch hoặc chia sẻ một khung kiến trúc thư mục dự án cho đội ngũ lập trình mà chưa có mã nguồn phân tách cụ thể bên trong.

## 11. Tự đánh giá

Hoàn thành **Xuất sắc**. Tuân thủ nghiêm ngặt phạm vi ranh giới của TASK-02: Chỉ xây dựng nền móng thư mục và tệp giữ chỗ cấu trúc, tuyệt đối không viết trước code nghiệp vụ hay cài đặt cài đặt Tailwind CSS sai phân đoạn quy trình.

## 12. Kết luận

TASK-02 đã đủ điều kiện kỹ thuật để nghiệm thu đóng gói (Commit/Push). Hệ thống sẵn sàng chuyển giao sang các giai đoạn tích hợp UI cấu phần tiếp theo.
