# TASK-08 — Weekly Schedule Display

## 1. Thông tin TASK

- **Tên tiếng Việt:** Hiển thị lịch công tác tuần của lãnh đạo
- **Tên:** Weekly Schedule Display
- **Trọng tâm:** Componentization (tách component hiển thị lịch tuần)
- **Phase:** Phase 2 — Leadership Schedule
- **Trạng thái:** IN PROGRESS — người dùng xác nhận bắt đầu ngày 2026-10-03
- **Ngày đề xuất:** 2026-10-02
- **Ngày duyệt mục tiêu/phạm vi/Acceptance Criteria:** 2026-10-03
- **Ngày bắt đầu:** 2026-10-03
- **TASK trước:** TASK-07 — Leadership Schedule Page Foundation (PASS)
- **Dependency:** TASK-07 — PASS
- **Công nghệ:** React + TypeScript + Vite + Tailwind CSS

## 2. Bối cảnh và mục tiêu

TASK-07 đã xây dựng trang lịch tuần với 7 lãnh đạo, dữ liệu sự kiện mẫu, ánh xạ qua `leaderId`, trạng thái ngày không có lịch và bố cục cuộn ngang. Vì vậy, TASK-08 không lặp lại việc xây dựng cùng một giao diện.

Mục tiêu đã duyệt của TASK-08 là tách vùng hiển thị lịch tuần khỏi `LeadershipSchedulePage` thành một component trình bày có Props TypeScript rõ ràng. Page tiếp tục điều phối dữ liệu và bố cục trang; `WeeklySchedule` nhận danh sách lãnh đạo, ngày trong tuần và sự kiện qua Props rồi hiển thị chúng.

Đây là công việc tổ chức component và hiểu luồng dữ liệu. Kết quả giao diện và hành vi hiện có phải được giữ nguyên.

## 3. Phạm vi

### 3.1. Trong phạm vi

- Đối chiếu `LeadershipSchedulePage`, `Leader`, `ScheduleEvent`, `leaders`, `weekDays` và `scheduleEvents` hiện có.
- Tạo component `WeeklySchedule` có trách nhiệm trình bày lưới lịch tuần.
- Khai báo Props TypeScript để nhận `leaders`, `weekDays` và `events` từ Page.
- Tiếp tục liên kết sự kiện với lãnh đạo bằng `leaderId` và ngày bằng trường `date`.
- Hiển thị giữ nguyên thông tin ngày, lãnh đạo, giờ, nội dung, địa điểm, loại sự kiện và trạng thái ô trống.
- Giữ khả năng cuộn ngang trên màn hình hẹp; kiểm tra bố cục ở desktop và viewport hẹp.
- Dùng lại `Card` và `SectionHeader` hoặc UI component hiện có khi phù hợp.
- Chỉ tách thêm `ScheduleEventCard` hoặc thành phần phụ nếu trách nhiệm trong code chứng minh việc tách đó hữu ích.
- Cập nhật tài liệu sau Knowledge Review, Implementation, Review và Git Review.

### 3.2. Ngoài phạm vi

- Điều hướng tuần tương tác hoặc tính toán tuần khác.
- Thêm, sửa, xóa, lưu hoặc đồng bộ lịch.
- Backend, API, Database, ORM, xác thực hoặc phân quyền.
- Lọc/tìm kiếm lãnh đạo hoặc sự kiện.
- Thay đổi mock data, thiết kế lại giao diện hoặc mở rộng sang nghiệp vụ lịch.
- Thêm thư viện hoặc abstraction không cần thiết.

## 4. Thiết kế kỹ thuật đề xuất

Cấu trúc đích tối thiểu:

```text
LeadershipSchedulePage
├── Page Header và Summary
└── WeeklySchedule
    ├── SectionHeader / Legend
    ├── Weekday columns
    ├── Leader rows
    └── Event presentation / empty cell
```

Vị trí đề xuất:

```text
src/pages/LeadershipSchedule/WeeklySchedule.tsx
```

`WeeklySchedule` không tự import mock data. Page truyền dữ liệu vào component qua Props. Props sử dụng các kiểu `Leader`, `ScheduleEvent` và `WeekDay` đã định nghĩa trong `src/types/schedule.ts`.

Không bắt buộc tách mọi nhánh thành file riêng. Component con chỉ được thêm khi trách nhiệm độc lập, dễ hiểu và kiểm tra được.

## 5. Acceptance Criteria

### 5.1. Knowledge

- [x] Page điều phối dữ liệu từ mock data; `WeeklySchedule` nhận dữ liệu qua Props và trình bày lưới.
- [x] `WeeklyScheduleProps` mô tả `leaders: Leader[]`, `weekDays: WeekDay[]`, `events: ScheduleEvent[]`; Page truyền cả ba danh sách vào component.
- [x] Lọc sự kiện theo cả `leaderId` và `date` để đặt sự kiện đúng hàng lãnh đạo và cột ngày.
- [x] Các danh sách được render bằng `map()` và ô không có sự kiện hiển thị `—`.

### 5.2. Implementation

- [x] Có component `WeeklySchedule` tách khỏi `LeadershipSchedulePage`.
- [x] Props có kiểu TypeScript rõ ràng cho leaders, days và events; component không phụ thuộc trực tiếp vào mock data module.
- [x] `LeadershipSchedulePage` truyền các dữ liệu TASK-07 hiện có vào component.
- [x] Browser Verification xác nhận 7 lãnh đạo, 7 ngày và 16 sự kiện mẫu.
- [x] Sự kiện hiển thị trong đúng hàng lãnh đạo và ngày theo data mapping hiện có.
- [x] Hiển thị giờ, tiêu đề, địa điểm và trạng thái `—` cho ô không có sự kiện.
- [x] Giữ nguyên thiết kế, nội dung mẫu, summary và không thêm chức năng ngoài scope.
- [x] Kiểm tra viewport hẹp 390×844: bảng có thể cuộn ngang, cột lãnh đạo cố định; desktop đọc được.
- [x] Không thêm Backend, API, Database, CRUD hoặc điều hướng tuần.

### 5.3. Quality và Review

- [x] Self-Test và Code Review cuối cùng đạt; dữ liệu hiển thị đã đối chiếu trong browser và thay đổi được review.
- [x] Browser Verification đạt ở desktop và viewport hẹp (390×844).
- [x] `npm run lint` đạt ngày 2026-10-03.
- [x] `npm run build` đạt ngày 2026-10-03.
- [x] Không phát hiện hồi quy trên trang đã tích hợp; TypeScript và production build đạt.

### 5.4. Documentation và Git

- [x] TASK-08 document và `08-progress.md` phản ánh đúng tiến độ hiện tại.
- [x] `git diff --check` và `git diff --cached --check` đạt; staged diff gồm đúng sáu file trong phạm vi TASK-08 và đã được review.
- [x] Commit `ea533a0` chỉ chứa sáu file thay đổi thuộc TASK-08.
- [x] Commit được push lên `origin/main` sau phê duyệt; remote xác nhận cùng hash `ea533a0a518ae1e3a17174e7ad5bee666b722c97`.
- [x] Acceptance Criteria và quy trình Git hoàn tất; TASK-08 đạt PASS.

## 6. Subtasks

| Mã | Nội dung | Kết quả cần đạt |
| --- | --- | --- |
| 08.1 | Knowledge Review | Hiểu Page/component, typed Props, list rendering và data mapping |
| 08.2 | Kiểm tra nền tảng TASK-07 | Chốt dữ liệu, types, UI hiện hữu và ranh giới component |
| 08.3 | Thiết kế Props | Xác định kiểu đầu vào của `WeeklySchedule` và trách nhiệm component |
| 08.4 | Tách component | Page truyền dữ liệu vào component; không đổi hành vi hiển thị |
| 08.5 | Kiểm tra data mapping | Xác nhận đúng leaderId, ngày, sự kiện và empty cells |
| 08.6 | Browser Verification | Kiểm tra desktop và màn hình hẹp |
| 08.7 | Quality checks | Lint, build, self-review và regression review |
| 08.8 | Documentation Review | Ghi kết quả, quyết định và vấn đề phát sinh |
| 08.9 | Git Review / Commit | Review diff và commit sau khi đạt tiêu chí |
| 08.10 | Push / Remote Verification | Chỉ sau phê duyệt rõ ràng; xác minh nhánh remote |

## 7. Quy trình thực hiện

1. Mục tiêu, phạm vi và Acceptance Criteria đã được duyệt; ngày 2026-10-03 người dùng xác nhận bắt đầu và TASK chuyển IN PROGRESS.
2. Thực hiện Knowledge Review và kiểm tra cấu trúc TASK-07.
3. Chốt Props và component boundary trước khi code.
4. Tách `WeeklySchedule` và tích hợp lại vào Page, giữ nguyên giao diện.
5. Tự kiểm tra data mapping, empty cells, desktop/mobile; chạy lint và build.
6. Cập nhật tài liệu, review diff và chờ phê duyệt Git trước khi commit.
7. Xin/nhận phê duyệt push rõ ràng, push và xác minh remote.
8. Cập nhật Progress và chỉ xác lập PASS khi đủ bằng chứng.

## 8. Lessons Learned

- Ranh giới Page/component rõ hơn khi Page sở hữu nguồn dữ liệu còn component nhận typed Props và chỉ lo trình bày.
- Khai báo riêng `WeekDay` giúp hợp đồng Props dễ đọc và kiểm tra TypeScript thay vì để kiểu ngày suy luận ngầm từ mảng mock.
- Browser Verification ở viewport 390×844 xác nhận cuộn ngang và cột lãnh đạo cố định giúp giữ ngữ cảnh khi xem các ngày ở ngoài màn hình.

## 9. Design Decisions

| Quyết định | Trạng thái | Lý do |
| --- | --- | --- |
| Tách vùng lưới tuần thành `WeeklySchedule` nhận typed Props | Đã thực hiện | Tạo ranh giới rõ giữa Page điều phối và component trình bày; đây là phần khác biệt so với TASK-07. |
| Dùng kiểu `WeekDay` rõ ràng cho ngày tuần | Đã thực hiện | Props và mock data dùng chung một hợp đồng TypeScript dễ đọc. |
| Không thêm điều hướng tuần | Đã giữ đúng phạm vi | Điều hướng là hành vi mới, nằm ngoài phạm vi componentization. |
| Không thay đổi mock data hoặc UI | Đã giữ đúng phạm vi | TASK tập trung luồng Props và tổ chức component; giao diện nhìn thấy được giữ nguyên. |

## 10. Issues

Không phát sinh lỗi lint, build hoặc browser trong quá trình kiểm tra. Không có issue ngoài phạm vi.

## 11. Progress Log

| Ngày | Nội dung | Trạng thái |
| --- | --- | --- |
| 2026-10-02 | Hoàn thiện đề xuất TASK-08 theo hướng component hóa lưới lịch đã có ở TASK-07; chưa kích hoạt. | TODO |
| 2026-10-03 | Người dùng duyệt mục tiêu, phạm vi và Acceptance Criteria. | TODO |
| 2026-10-03 | Người dùng xác nhận bắt đầu; TASK-08 chuyển sang IN PROGRESS. | IN PROGRESS |
| 2026-10-03 | Thực hiện `WeeklySchedule` typed Props và kiểu `WeekDay`; page truyền dữ liệu hiện có. | IN PROGRESS |
| 2026-10-03 | Lint, build, browser desktop/390×844 và diff checks đạt; sáu file TASK-08 đã stage và staged diff được review. | IN PROGRESS |
| 2026-10-03 | Commit `ea533a0` được push lên `origin/main`; remote xác nhận trùng HEAD và working tree sạch. | PASS |

## 12. Git History

| Commit | Message | Remote |
| --- | --- | --- |
| `ea533a0a518ae1e3a17174e7ad5bee666b722c97` | `feat(task-08): extract weekly schedule component` | Đã push lên `origin/main`; xác minh cùng hash |

## 13. Final Review

Implementation, Knowledge Review, code review, Browser Verification (desktop và 390×844), lint, build, documentation review, staged diff review và remote verification đạt. Commit `ea533a0a518ae1e3a17174e7ad5bee666b722c97` đã được xác minh trên `origin/main`; working tree sạch.

## 14. Final Status

**PASS — Acceptance Criteria đạt; commit đã push và remote đã xác minh ngày 2026-10-03.**
