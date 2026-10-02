# TASK-06 — Components

## 1. Thông tin TASK

- **Tên:** Components
- **Phase:** Phase 1 — UI Foundation
- **Trạng thái:** PASS
- **Ngày bắt đầu:** 2026-09-28
- **TASK trước:** TASK-05 — Layout Foundation
- **Công nghệ:** React + TypeScript + Vite + Tailwind CSS

---

## 2. Mục tiêu

Xây dựng các UI Component có khả năng tái sử dụng trong `hc-tc-office`.

Sau TASK này, dự án có nền tảng Component rõ ràng để các Page và Layout sử dụng mà không phải viết lại cùng một UI nhiều lần.

Trọng tâm của TASK:

- Hiểu bản chất React Component.
- Hiểu Reusable Component.
- Hiểu Component API.
- Hiểu Props trong React.
- Hiểu cách khai báo Props bằng TypeScript.
- Xây dựng một số Component UI cơ bản.
- Tổ chức Component trong `src/components`.
- Kiểm tra Component trên trình duyệt.
- Kiểm tra TypeScript, ESLint và Build.

---

## 3. Phạm vi

### 3.1. Thực hiện

Các Component dự kiến:

- `Button`
- `Card`
- `SectionHeader`
- `Badge` nếu thực sự cần trong quá trình triển khai.

Component phải:

- Có thể tái sử dụng.
- Có Props được định nghĩa bằng TypeScript.
- Không phụ thuộc API/backend.
- Không chứa business logic.
- Có cấu trúc dễ mở rộng.
- Tuân thủ nguyên tắc readable và maintainable.

### 3.2. Cấu trúc dự kiến

```text
src/
├── components/
│   ├── Button/
│   │   └── Button.tsx
│   ├── Card/
│   │   └── Card.tsx
│   ├── SectionHeader/
│   │   └── SectionHeader.tsx
│   └── ...
├── hooks/
├── layouts/
├── pages/
├── services/
└── types/
```

---

## 4. Không thuộc phạm vi

TASK-06 chưa thực hiện:

- Routing.
- Authentication.
- Authorization.
- API.
- Backend.
- Database.
- Calendar business logic.
- Quản lý công việc.
- Công lệnh.
- Lệnh điều xe.
- Quản lý nhân sự.
- Complex state management.
- Storybook.
- Design System hoàn chỉnh.
- Animation phức tạp.

Nếu phát sinh nội dung thuộc các phạm vi trên, ghi nhận để thực hiện ở TASK phù hợp.

---

## 5. Nguyên tắc thực hiện

Quy trình:

```text
Hiểu
  ↓
Xác định phạm vi
  ↓
Thiết kế Component API
  ↓
Thiết kế Props
  ↓
Code
  ↓
Test
  ↓
Review
  ↓
Cập nhật tài liệu
  ↓
Git Review
  ↓
Commit
  ↓
Push
  ↓
Final Verification
  ↓
PASS
```

Không chuyển sang TASK tiếp theo khi TASK-06 chưa đạt điều kiện PASS.

---

## 6. Các công việc

### 06.1. Khởi động TASK-06

- Tạo tài liệu TASK-06.
- Xác nhận Git đang sạch trước khi bắt đầu.
- Cập nhật `docs/00-project/08-progress.md`.
- Đánh dấu TASK-06 là `IN PROGRESS`.

### 06.2. Hiểu bản chất React Component

Nắm được:

- Component là gì?
- Vì sao cần Component?
- Reusable Component là gì?
- Component khác Page như thế nào?
- Component khác Layout như thế nào?
- Component API là gì?

### 06.3. Hiểu Props và TypeScript

Nắm được:

- Props là gì?
- Props truyền dữ liệu như thế nào?
- Required Props.
- Optional Props.
- Type Props bằng TypeScript.
- `children`.
- Composition.

### 06.4. Thiết kế Button

Xác định:

- Props cần thiết.
- Text/children.
- Variant.
- Disabled.
- Click event.
- Cách sử dụng lại Button.

### 06.5. Implement Button

Tạo:

```text
src/components/Button/Button.tsx
```

Yêu cầu:

- TypeScript.
- Tailwind CSS.
- Không chứa business logic.
- Có thể sử dụng ở nhiều nơi.

### 06.6. Thiết kế và implement Card

Tạo:

```text
src/components/Card/Card.tsx
```

Card cần hỗ trợ nội dung thông qua `children`.

### 06.7. Thiết kế và implement SectionHeader

Tạo:

```text
src/components/SectionHeader/SectionHeader.tsx
```

Component phục vụ tiêu đề các khu vực trong giao diện.

### 06.8. Tích hợp thử nghiệm

Sử dụng các Component trên một màn hình thử nghiệm.

Kiểm tra:

- Component hiển thị.
- Props hoạt động.
- Có thể sử dụng Component nhiều lần.
- Thay đổi Props tạo ra UI tương ứng.

### 06.9. Code Review

Kiểm tra:

- TypeScript.
- Props.
- Component API.
- Naming.
- Cấu trúc thư mục.
- Tailwind classes.
- Không có business logic trong UI Component.
- Không có code trùng lặp không cần thiết.

### 06.10. Browser Verification

Mở ứng dụng trên trình duyệt và kiểm tra thực tế.

### 06.11. Lint

Chạy:

```powershell
npm run lint
```

Kết quả yêu cầu:

```text
PASS
```

### 06.12. Build

Chạy:

```powershell
npm run build
```

Kết quả yêu cầu:

```text
PASS
```

### 06.13. Cập nhật tài liệu

Cập nhật:

- `docs/TASK-06-Components.md`
- `docs/00-project/08-progress.md`

Ghi nhận:

- Kiến thức đã học.
- Quyết định thiết kế.
- Vấn đề gặp phải.
- Kết quả kiểm tra.
- Kết quả Browser Verification.

### 06.14. Git Review

Kiểm tra:

```powershell
git diff --check
git status
git diff
```

Sau khi stage:

```powershell
git add .
git diff --cached --check
git diff --cached
```

### 06.15. Commit

Commit chỉ được thực hiện khi TASK-06 đạt đầy đủ điều kiện.

Commit message dự kiến:

```text
feat(task-06): build reusable components
```

### 06.16. Push và Final Verification

```powershell
git push origin main
```

Sau đó:

```powershell
git status
```

Yêu cầu:

```text
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

---

## 7. Điều kiện PASS

### Kiến thức

- [x] Người phát triển xác nhận hiểu React Component và Reusable Component.
- [x] Người phát triển giải thích được Component API và TypeScript Props.
- [x] Người phát triển xác nhận đã hiểu Props của `Button` và `Card`.
- [x] Người phát triển xác nhận hiểu Props của `SectionHeader`, `children`, Composition và khác biệt Component / Page / Layout.
- [x] UI Components không chứa business logic.

### Implementation

- [x] Có `Button`.
- [x] Có `Card`.
- [x] Có `SectionHeader`.
- [x] Component nằm trong `src/components`.
- [x] Props được type bằng TypeScript.
- [x] Component có khả năng tái sử dụng.
- [x] Component không phụ thuộc backend/API.
- [x] Component được tích hợp thử nghiệm trong `App.tsx`.

### Quality

- [x] Browser Verification PASS: các component và biến thể hiển thị trên ứng dụng local.
- [x] `npm run lint` PASS.
- [x] `npm run build` PASS.
- [x] Không có lỗi TypeScript/ESLint trong các bước kiểm tra.

### Documentation

- [x] TASK-06 document được cập nhật.
- [x] `08-progress.md` được cập nhật.
- [x] Lessons Learned được ghi nhận.
- [x] Decisions được ghi nhận.
- [x] Review được ghi nhận.

### Git

- [x] `git diff --check` PASS.
- [x] Staged diff được review; các file staged đều thuộc phạm vi TASK-06.
- [x] Commit đúng nội dung: `ae698e7`.
- [x] Push thành công lên `origin/main`.
- [x] Working tree clean sau local commit.

---

## 8. Lessons Learned

### 8.1. React Component

Component đóng gói một phần giao diện và hành vi trình bày với API Props rõ ràng. UI component trong TASK-06 nhận dữ liệu qua Props và không tự xử lý nghiệp vụ.

### 8.2. Props

Props truyền cấu hình từ component cha xuống component con. `Button` nhận `variant` và các thuộc tính button chuẩn; `SectionHeader` nhận `title`, `description` và `action` tùy chọn.

### 8.3. TypeScript Props

Props được khai báo bằng type của React như `ButtonHTMLAttributes` và `HTMLAttributes`, giúp component giữ lại hành vi HTML gốc mà vẫn giới hạn các lựa chọn riêng như `variant`.

### 8.4. Reusable Component

`Card` nhận `children` để bao bọc nhiều dạng nội dung. `SectionHeader` tách tiêu đề khu vực khỏi nội dung. Có thể dùng lại các component mà không gắn chúng với API hoặc logic nghiệp vụ cụ thể.

---

## 9. Design Decisions

1. `Button` mở rộng `ButtonHTMLAttributes<HTMLButtonElement>` để hỗ trợ các thuộc tính HTML và event handler chuẩn; `variant` giới hạn thành năm lựa chọn trình bày.
2. `Button` mặc định có `type="button"` để tránh submit form ngoài ý muốn.
3. `Card` là wrapper `div` nhận thuộc tính HTML cùng `children` và `className`.
4. `SectionHeader` dùng `title` bắt buộc, `description` và `action` tùy chọn để hỗ trợ composition.
5. Repository chưa có Tailwind dù dự án và TASK xác định công nghệ này. Đã thêm Tailwind CSS v4 qua plugin Vite chính thức để utility classes được biên dịch thực tế.
6. `App.tsx` hiện đóng vai trò màn hình thử nghiệm cho TASK-06; chưa thêm routing hay logic nghiệp vụ.

---

## 10. Issues

| Vấn đề | Xử lý | Kết quả |
| --- | --- | --- |
| Tailwind chưa có trong dependencies và cấu hình Vite, nên utility classes không có hiệu lực. | Cài `tailwindcss` và `@tailwindcss/vite`, thêm plugin vào `vite.config.ts`, import Tailwind trong `src/index.css`. | Build và trình duyệt xác nhận CSS được áp dụng. |
| Auto-review ban đầu từ chối `git push origin main` do chưa có ủy quyền rõ. | Người dùng đã phê duyệt push hai commit; push sau đó thành công. | Cả hai commit đã có trên `origin/main`; không còn bị chặn. |

---

## 11. Progress Log

| Ngày       | Nội dung                      | Trạng thái  |
| ---------- | ----------------------------- | ----------- |
| 2026-09-28 | Khởi tạo TASK-06 — Components | IN PROGRESS |
| 2026-10-02 | Implement Button, Card, SectionHeader và cấu hình Tailwind CSS | IN PROGRESS |
| 2026-10-02 | Lint, build và browser verification đạt | IN PROGRESS |
| 2026-10-02 | Người phát triển xác nhận Knowledge Review: Button, Card, SectionHeader, children, Composition, Component/Page/Layout | PASS |
| 2026-10-02 | Tạo commit `ae698e7` và `21111d7`; người dùng phê duyệt, push thành công lên `origin/main` | PASS |
| 2026-10-02 | Xác minh remote, Working Tree và hoàn tất Acceptance Criteria | PASS |

---

## 12. Git History

| Commit | Nội dung | Trạng thái |
| --- | --- | --- |
| `ae698e7` | `feat(task-06): build reusable components` | Pushed |
| `21111d7` | `docs(task-06): record pending remote approval` | Pushed |

---

## 13. Final Review

Chỉ thực hiện khi toàn bộ công việc hoàn thành.

- [x] Knowledge Review với người phát triển
- [x] Code Review: API Props rõ ràng, component không chứa nghiệp vụ, không phát hiện lỗi trong phạm vi đã review
- [x] Browser Verification: trang demo và disabled state hiển thị đúng
- [x] Lint
- [x] Build
- [x] Documentation Review
- [x] Git Review: `git status`, staged diff và whitespace đã được rà soát.
- [x] Push các commit TASK-06 thành công lên `origin/main`
- [x] Working Tree Clean sau push

---

## 14. Final Status

**PASS**

Implementation, Knowledge Review, Code Review, Browser Verification, lint, build, documentation, Git Review, commits, push và Working Tree đã được xác nhận.
