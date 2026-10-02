# TASK-07 — Leadership Schedule Page Foundation

## 1. Thông tin TASK

- **Tên:** Leadership Schedule Page Foundation
- **Phase:** Phase 2 — Leadership Schedule
- **Trạng thái:** PASS
- **Ngày bắt đầu:** 2026-10-02
- **TASK trước:** TASK-06 — Components (PASS)
- **Dependency:** TASK-01 đến TASK-06 (PASS)
- **Công nghệ:** React + TypeScript + Vite + Tailwind CSS

## 2. Mục tiêu

Xây dựng trang nền tảng Lịch công tác lãnh đạo để hiển thị mock data theo tuần. TASK này chuyển từ UI Foundation sang một Page có cấu trúc dữ liệu riêng, chưa triển khai nghiệp vụ lịch.

## 3. Phạm vi

### 3.1. Thực hiện

- Tạo Leadership Schedule Page và tích hợp vào `MainLayout`.
- Hiển thị tuần mẫu 05/10–11/10/2026 dưới dạng lịch bảng: hàng là lãnh đạo, cột là ngày trong tuần.
- Hiển thị 7 lãnh đạo giả lập: 1 Giám đốc và 6 Phó Giám đốc.
- Hiển thị các sự kiện giả lập theo ngày, gồm giờ bắt đầu/kết thúc, nội dung và địa điểm.
- Định nghĩa Leader và ScheduleEvent bằng TypeScript; đặt mock data ngoài JSX.
- Tái sử dụng Button, Card và SectionHeader của TASK-06 ở nơi phù hợp.
- Có trạng thái ngày không có sự kiện; bảng có thể cuộn ngang trên màn hình hẹp.
- Cập nhật tài liệu, kiểm tra lint/build và xác minh giao diện trên trình duyệt.

### 3.2. Quyết định giao diện

Chọn **lịch dạng bảng (Phương án A)**. Bảy hàng lãnh đạo giao với các cột ngày trong tuần giúp người xem so sánh nhanh lịch của nhiều người. Bảng giữ kích thước cột đủ đọc được và cho cuộn ngang trên màn hình nhỏ.

Tuần 05/10–11/10/2026 và toàn bộ tên/sự kiện/địa điểm trong trang là dữ liệu minh họa, không phải lịch thật. Thông tin tuần chỉ để trình bày; không điều hướng hoặc thay đổi dữ liệu.

### 3.3. Không thuộc phạm vi

- Backend, API, database, xác thực và phân quyền.
- CRUD, lưu hoặc đồng bộ lịch thật.
- Điều hướng tuần có tương tác, lọc lãnh đạo, tìm kiếm.
- Drag and drop, realtime, xuất/in PDF hoặc Excel.
- Routing và nghiệp vụ của module khác.

## 4. Acceptance Criteria

### Knowledge

- [x] Giải thích được Page khác Component và Layout như thế nào.
- [x] Giải thích được cách Page sử dụng composition và UI components dùng lại.
- [x] Giải thích được kiểu Leader, ScheduleEvent và mối liên hệ qua leader ID.

### Implementation

- [x] Có Leadership Schedule Page được render bên trong MainLayout.
- [x] Có đủ 7 lãnh đạo giả lập (1 Giám đốc, 6 Phó Giám đốc).
- [x] Bảng thể hiện tuần 05/10–11/10/2026 với một hàng cho mỗi lãnh đạo và cột theo ngày.
- [x] Sự kiện có giờ, nội dung và địa điểm; ngày không có sự kiện có trạng thái rõ ràng.
- [x] Dữ liệu có kiểu TypeScript và được tách khỏi JSX.
- [x] Dùng lại Card và SectionHeader của TASK-06; không gọi backend/API hoặc triển khai nghiệp vụ ngoài scope. Button không được dùng vì TASK không có thao tác tương tác.
- [x] Có thể đọc lịch trên màn hình desktop và cuộn bảng ngang ở viewport hẹp.

### Quality và Documentation

- [x] Self-review và Browser Verification đạt.
- [x] `npm run lint` đạt.
- [x] `npm run build` đạt.
- [x] Tài liệu TASK-07, Lessons Learned, Design Decisions và Progress phản ánh kết quả thực tế.

### Git / Final

- [x] `git diff --check` đạt; staged diff được review.
- [x] Commit phản ánh đúng scope TASK-07: `2679612` (`feat(task-07): build leadership schedule page foundation`).
- [x] Push toàn bộ commit TASK-07 lên `origin/main` sau khi được người dùng phê duyệt.
- [x] Xác minh remote; Final Verification đạt.

## 5. Kế hoạch thực hiện

1. Khởi động TASK-07, xác nhận dependency và ghi trạng thái Progress.
2. Thiết kế Page và data model.
3. Tạo mock data hư cấu cho 7 lãnh đạo và các sự kiện.
4. Implement lịch tuần dạng bảng và tích hợp `MainLayout`.
5. Self-review, lint, build và kiểm tra trình duyệt.
6. Hoàn thiện tài liệu và review Git.
7. Commit; push sau khi được phê duyệt; cập nhật trạng thái cuối theo bằng chứng.

## 6. Lessons Learned

- Page chịu trách nhiệm ghép dữ liệu mẫu với các UI Component; model dữ liệu được tách thành kiểu `Leader` và `ScheduleEvent` để JSX hiển thị có kiểu rõ ràng.
- Bảng lịch phù hợp cho việc đối chiếu song song 7 lãnh đạo, nhưng cần giữ chiều rộng cột tối thiểu và cuộn ngang trên màn hình hẹp.
- Không nên tạo nút chỉ để trang trí khi chức năng điều hướng tuần chưa thuộc phạm vi.

## 7. Design Decisions

| Quyết định | Lý do |
| --- | --- |
| Dùng bảng với lãnh đạo theo hàng và ngày theo cột | So sánh lịch nhiều lãnh đạo trong cùng một tuần nhanh hơn. |
| Dùng tuần mẫu cố định và dữ liệu hoàn toàn hư cấu | Giữ TASK ở mức giao diện, không ngụ ý có dữ liệu nghiệp vụ thật. |
| Không thêm nút điều hướng tuần | Tương tác lịch nằm ngoài phạm vi đã thống nhất. |
| Dùng màu riêng cho cuộc họp, công tác và nội bộ | Giúp quét nhanh loại sự kiện; nhãn và nội dung vẫn hiển thị bằng chữ. |

## 8. Issues

| Vấn đề | Xử lý | Kết quả |
| --- | --- | --- |
| Màn hình hẹp không đủ chỗ cho 7 cột ngày và cột lãnh đạo. | Đặt chiều rộng tối thiểu cho bảng bên trong vùng `overflow-x-auto`; giữ cột lãnh đạo cố định khi cuộn. | Browser Verification trên viewport hẹp cho thấy trang không bị ép cột; người xem có thể cuộn ngang qua các ngày. |
| Auto-review từ chối lần push đầu do chưa có phê duyệt rõ cho payload và đích. | Người dùng chấp nhận push toàn bộ; tiếp tục push và xác minh remote. | Các commit TASK-07 đã được push thành công lên `origin/main`. |

## 9. Progress Log

| Ngày | Nội dung | Trạng thái |
| --- | --- | --- |
| 2026-10-02 | Khởi động TASK-07 sau khi TASK-06 PASS; chốt phạm vi Page nền tảng và lịch dạng bảng. | IN PROGRESS |
| 2026-10-02 | Hoàn thành Page, mock data, TypeScript types và tích hợp MainLayout. | IN PROGRESS |
| 2026-10-02 | Lint, build và Browser Verification đạt; rà soát diff. | IN PROGRESS |
| 2026-10-02 | Knowledge Review đạt: phân biệt Page/Layout/Component và giải thích quan hệ ScheduleEvent–Leader qua leaderId. | IN PROGRESS |
| 2026-10-02 | Auto-review từ chối lần push đầu; người dùng chấp nhận push toàn bộ commit local; push và xác minh remote thành công. | IN PROGRESS |
| 2026-10-02 | Hoàn tất Acceptance Criteria, Knowledge Review, Documentation, Git và remote verification. | PASS |

## 10. Git History

| Commit | Nội dung | Trạng thái |
| --- | --- | --- |
| `2679612` | `feat(task-07): build leadership schedule page foundation` | Pushed to `origin/main` |
| `648e03a` | `docs(task-07): record implementation and verification` | Pushed to `origin/main` |
| `0a987c9` | `docs(task-07): record knowledge review` | Pushed to `origin/main` |
| `d38a20c` | `docs(task-07): clarify pending push status` | Pushed to `origin/main` |
| `f61e6d8` | `docs(task-07): keep local push status accurate` | Pushed to `origin/main` |
| `227b057` | `docs(task-07): record blocked push approval` | Pushed to `origin/main` |

Các commit TASK-07 đã được push lên `origin/main`. Lần push đầu bị auto-review từ chối; người dùng sau đó chấp nhận push toàn bộ.

## 11. Final Review

- [x] Code Review: Page tách biệt khỏi App; dữ liệu mock nằm ngoài JSX; không có API hoặc nghiệp vụ lịch.
- [x] Browser Verification: xác nhận đủ 7 lãnh đạo, 16 sự kiện, bảng ngày trong tuần, các ô trống và cách cuộn ngang ở viewport hẹp.
- [x] `npm run lint` và `npm run build` đạt.
- [x] Documentation Review: nội dung TASK-07 và trạng thái trong `08-progress.md` khớp với phạm vi/tiến độ thực tế.
- [x] Knowledge Review: người phát triển giải thích đúng vai trò Page/Layout/Component và quan hệ một-nhiều qua `leaderId`; `leaderId` là tham chiếu logic, chưa phải ràng buộc database.
- [x] Git Commit: implementation và các cập nhật tài liệu đã commit.
- [x] Push toàn bộ commit TASK-07 lên `origin/main`.
- [x] Xác minh remote: `HEAD` trùng `origin/main`, working tree clean.

## 12. Final Status

**PASS** — Acceptance Criteria, Knowledge Review, Code Review, Browser Verification, lint, build, Documentation, Git commit/push và remote verification đạt.
