# TASK-05 — Layout Foundation

> Xây dựng nền tảng Layout cho ứng dụng `hc-tc-office`.

---

## 1. Thông tin TASK

| Thuộc tính      | Nội dung                                     |
| --------------- | -------------------------------------------- |
| TASK ID         | TASK-05                                      |
| Tên TASK        | Layout Foundation                            |
| Phase           | Phase 1 — UI Foundation                      |
| Trạng thái      | 🟢 PASS                                      |
| Ngày bắt đầu    | 2026-09-23                                   |
| Ngày hoàn thành | 2026-09-27                                   |
| Mục tiêu chính  | Xây dựng cấu trúc Layout cơ bản cho ứng dụng |
| Công nghệ       | React + TypeScript + Vite + Tailwind CSS     |

---

## 2. Context

Sau khi hoàn thành:

- TASK-01 — Khởi tạo project
- TASK-02 — Chuẩn hóa cấu trúc project
- TASK-03 — Git + GitHub
- TASK-04 — Documentation

Dự án chuyển sang Phase 1 — UI Foundation.

TASK-05 tập trung xây dựng nền tảng giao diện bằng Layout và Component.

---

## 3. Phase 0 đã hoàn thành

| TASK    | Nội dung                           | Status  |
| ------- | ---------------------------------- | ------- |
| TASK-01 | Khởi tạo Vite + React + TypeScript | 🟢 PASS |
| TASK-02 | Chuẩn hóa cấu trúc project         | 🟢 PASS |
| TASK-03 | Git + GitHub                       | 🟢 PASS |
| TASK-04 | Documentation                      | 🟢 PASS |

---

## 4. Mục tiêu TASK-05

Sau khi hoàn thành TASK-05, người học phải:

1. Hiểu Layout là gì.
2. Phân biệt Layout và Page.
3. Hiểu Component Composition.
4. Hiểu `children` trong React.
5. Biết sử dụng `ReactNode`.
6. Xây dựng được `MainLayout`.
7. Tách `Header`, `Sidebar`, `MainContent`.
8. Biết tích hợp Layout vào `App`.
9. Kiểm tra bằng ESLint.
10. Kiểm tra bằng production build.
11. Cập nhật documentation.
12. Commit và push lên GitHub.

---

## 5. Phạm vi

### In Scope

- Học Component.
- Học Props.
- Học `children`.
- Học Layout.
- Học Page.
- Thiết kế Component Tree.
- Tạo `Header`.
- Tạo `Sidebar`.
- Tạo `MainContent`.
- Tạo `MainLayout`.
- Tích hợp Layout vào `App`.
- Kiểm tra ESLint.
- Kiểm tra build.
- Browser verification.
- Cập nhật documentation.
- Commit.
- Push GitHub.

### Out of Scope

TASK-05 chưa thực hiện:

- Routing.
- Authentication.
- Authorization.
- Database.
- API.
- Calendar.
- Todo.
- Công lệnh.
- Điều xe.
- Quản lý nhân sự.
- Responsive hoàn chỉnh.
- Design System hoàn chỉnh.
- State management.

---

## 6. Kiến thức cần nắm

### 6.1. Component

Component là một đơn vị giao diện có thể tái sử dụng.

Ví dụ:

```tsx
function Header() {
  return <header>Header</header>;
}
```

---

### 6.2. Props

Props là dữ liệu được truyền từ component cha xuống component con.

Ví dụ:

```tsx
type HeaderProps = {
  title: string;
};
```

TASK-05 chưa cần truyền Props cho `Header` và `Sidebar` vì chưa có nhu cầu thực tế.

---

### 6.3. children

`children` là nội dung được truyền vào bên trong component.

Ví dụ:

```tsx
<MainContent>
  <Dashboard />
</MainContent>
```

Trong component:

```tsx
type MainContentProps = {
  children: ReactNode;
};
```

---

### 6.4. ReactNode

`ReactNode` biểu diễn nội dung mà React có thể render.

Ví dụ:

```tsx
import type { ReactNode } from "react";
```

---

## 7. Layout là gì?

Layout là cấu trúc khung giao diện dùng chung cho nhiều Page.

Ví dụ:

```text
┌──────────────────────────────┐
│            Header            │
├──────────┬───────────────────┤
│          │                   │
│ Sidebar  │    MainContent    │
│          │                   │
│          │                   │
└──────────┴───────────────────┘
```

Layout không phải là nội dung nghiệp vụ cụ thể.

---

## 8. Layout và Page

### Layout

Chịu trách nhiệm về cấu trúc chung:

- Header
- Sidebar
- MainContent
- Footer nếu có

### Page

Chịu trách nhiệm về nội dung của một màn hình cụ thể.

Ví dụ:

```text
MainLayout
│
├── Header
├── Sidebar
└── MainContent
    ├── DashboardPage
    ├── CalendarPage
    └── TodoPage
```

---

## 9. Component Composition

React cho phép xây dựng component lớn từ nhiều component nhỏ.

Ví dụ:

```text
MainLayout
├── Header
├── Sidebar
└── MainContent
```

Mỗi component có trách nhiệm riêng.

Lợi ích:

- Dễ đọc.
- Dễ bảo trì.
- Dễ tái sử dụng.
- Dễ mở rộng.
- Giảm component quá lớn.

---

## 10. Cấu trúc component

Cấu trúc được thống nhất cho TASK-05:

```text
App
└── MainLayout
    ├── Header
    ├── Sidebar
    └── MainContent
        └── children
            └── Page/component content
```

---

## 11. File structure

Các file chính:

```text
src/
├── components/
│   ├── Header.tsx
│   └── Sidebar.tsx
│
├── layouts/
│   ├── MainContent.tsx
│   └── MainLayout.tsx
│
└── App.tsx
```

---

## 12. Subtasks

| Subtask | Nội dung                                            | Status  |
| ------- | --------------------------------------------------- | ------- |
| 05.1    | Khởi động TASK-05 và cập nhật Progress              | 🟢 PASS |
| 05.2    | Học bản chất Component, Props, Layout và `children` | 🟢 PASS |
| 05.3    | Thiết kế cấu trúc `MainLayout`                      | 🟢 PASS |
| 05.4    | Implement `MainLayout` cơ bản                       | 🟢 PASS |
| 05.5    | Tạo Page/component thử nghiệm                       | 🟢 PASS |
| 05.6    | Review TypeScript và ESLint                         | 🟢 PASS |
| 05.7    | Build và kiểm thử                                   | 🟢 PASS |
| 05.8    | Documentation và Progress Update                    | 🟢 PASS |
| 05.9    | Commit TASK-05                                      | 🟢 PASS |
| 05.10   | Push GitHub và Final Review                         | 🟢 PASS |

---

## 13. Quy trình thực hiện

TASK-05 được thực hiện theo nguyên tắc:

```text
Hiểu
  ↓
Thiết kế
  ↓
Implement
  ↓
Review code
  ↓
Lint
  ↓
Build
  ↓
Browser verification
  ↓
Documentation
  ↓
Commit
  ↓
Progress Update
  ↓
Push
  ↓
Final Review
  ↓
PASS
```

Không chuyển sang TASK tiếp theo khi TASK-05 chưa đạt điều kiện PASS.

---

## 14. Acceptance Criteria

### Knowledge

- [x] Hiểu Component.
- [x] Hiểu Props.
- [x] Hiểu `children`.
- [x] Hiểu `ReactNode`.
- [x] Hiểu Layout.
- [x] Phân biệt Layout và Page.
- [x] Hiểu Component Composition.

### Implementation

- [x] Có `Header`.
- [x] Có `Sidebar`.
- [x] Có `MainContent`.
- [x] Có `MainLayout`.
- [x] `MainLayout` sử dụng `children`.
- [x] `MainContent` sử dụng `children`.
- [x] `App` sử dụng `MainLayout`.

### Quality

- [x] ESLint đạt.
- [x] Production build đạt.
- [x] Browser verification đạt.
- [x] Không có lỗi TypeScript liên quan đến TASK-05.

### Documentation

- [x] TASK-05 document được cập nhật.
- [x] Lessons được ghi nhận.
- [x] Decisions được ghi nhận.
- [x] Progress được cập nhật.
- [x] Review Log được cập nhật.

### Git

- [x] Git review đạt.
- [x] Commit đạt.
- [x] Push GitHub đạt.
- [x] Working Tree clean.

---

## 15. Kiểm thử

### 15.1. ESLint

Lệnh:

```powershell
npm run lint
```

Kết quả:

```text
PASS
```

---

### 15.2. Production Build

Lệnh:

```powershell
npm run build
```

Kết quả:

```text
PASS
```

---

### 15.3. Browser Verification

Đã kiểm tra trên trình duyệt:

- Header hiển thị.
- Sidebar hiển thị.
- MainContent hiển thị.
- MainLayout hoạt động.
- Component Tree hoạt động.
- `children` hoạt động.

Kết quả:

```text
PASS
```

---

## 16. Issues

### ISSUE-001 — PowerShell hiển thị tiếng Việt không chính xác

**Mô tả:**

Một số nội dung tiếng Việt hiển thị không chính xác khi xem trực tiếp bằng PowerShell.

**Nguyên nhân:**

Vấn đề nằm ở cách PowerShell hiển thị encoding, không phải lỗi TypeScript hoặc lỗi UTF-8 của file.

**Cách xác minh:**

File được kiểm tra bằng VS Code/Python và nội dung UTF-8 vẫn đúng.

**Status:**

🟢 Resolved

**Bài học:**

Không nên kết luận file bị lỗi encoding chỉ dựa trên việc PowerShell hiển thị tiếng Việt không đúng.

---

## 17. Lessons Learned

### Lesson 01 — Layout và Page khác nhau

Layout cung cấp cấu trúc dùng chung.

Page cung cấp nội dung nghiệp vụ cụ thể.

---

### Lesson 02 — `children`

`children` cho phép component cha chứa nội dung linh hoạt từ component bên ngoài.

Ví dụ:

```tsx
<MainContent>
  <Dashboard />
</MainContent>
```

---

### Lesson 03 — Component Composition

Một giao diện lớn nên được chia thành các component có trách nhiệm rõ ràng.

Ví dụ:

```text
MainLayout
├── Header
├── Sidebar
└── MainContent
```

---

## 18. Decisions

### DECISION-001

TASK-05 thuộc Phase 1 — UI Foundation.

### DECISION-002

Mỗi TASK có một file documentation riêng.

### DECISION-003

Tách riêng:

```text
components/
layouts/
```

để phân biệt component giao diện và component cấu trúc Layout.

### DECISION-004

`MainLayout` và `MainContent` sử dụng:

```tsx
children: ReactNode;
```

### DECISION-005

`Header` và `Sidebar` chưa sử dụng Props vì hiện tại chưa có nhu cầu truyền dữ liệu.

Không over-engineering ở giai đoạn này.

---

## 19. Scope Change Log

| Nội dung    | Thay đổi         | Lý do                                 |
| ----------- | ---------------- | ------------------------------------- |
| Header      | Không dùng Props | Chưa có nhu cầu                       |
| Sidebar     | Không dùng Props | Chưa có nhu cầu                       |
| MainLayout  | Dùng `children`  | Cho phép chứa nội dung Page linh hoạt |
| MainContent | Dùng `children`  | Tách vùng nội dung khỏi Layout        |

Không có scope change lớn.

---

## 20. Git History

| Commit    | Nội dung                                     | Trạng thái |
| --------- | -------------------------------------------- | ---------- |
| `605af03` | `docs(task-05): start layout foundation`     | 🟢 Pushed  |
| `62df7d3` | `feat(task-05): implement layout foundation` | 🟢 Pushed  |

---

## 21. Progress History

| Ngày       | Nội dung                                                                             | Trạng thái  |
| ---------- | ------------------------------------------------------------------------------------ | ----------- |
| 2026-09-23 | Bắt đầu TASK-05                                                                      | 🟢 Recorded |
| 2026-09-23 | Xác định TASK-05 thuộc Phase 1                                                       | 🟢 Recorded |
| 2026-09-23 | Hoàn thành TASK-05.1 — khởi động TASK và cập nhật Progress                           | 🟢 PASS     |
| 2026-09-25 | Hoàn thành phần học Component, Props, `children`, Layout và Page                     | 🟢 PASS     |
| 2026-09-25 | Hoàn thành thiết kế Component Tree: `MainLayout`, `Header`, `Sidebar`, `MainContent` | 🟢 PASS     |
| 2026-09-26 | Implement `Header`, `Sidebar`, `MainContent`, `MainLayout` và tích hợp vào `App`     | 🟢 PASS     |
| 2026-09-26 | `npm run lint` đạt                                                                   | 🟢 PASS     |
| 2026-09-26 | `npm run build` đạt                                                                  | 🟢 PASS     |
| 2026-09-26 | Browser verification xác nhận Component Tree và `children` hoạt động                 | 🟢 PASS     |
| 2026-09-27 | Hoàn thiện hồ sơ TASK-05: Lessons, Decisions, Progress và Review Log                 | 🟢 PASS     |
| 2026-09-27 | Commit `62df7d3` — `feat(task-05): implement layout foundation`                      | 🟢 PASS     |
| 2026-09-27 | Push GitHub thành công và Working Tree clean                                         | 🟢 PASS     |
| 2026-09-27 | Final Review TASK-05                                                                 | 🟢 PASS     |

---

## 22. Review Log

### Review 01 — Knowledge

Đã kiểm tra:

- Component.
- Props.
- `children`.
- `ReactNode`.
- Layout.
- Page.
- Component Composition.

**Kết quả:** 🟢 PASS

---

### Review 02 — Implementation

Đã kiểm tra:

```text
App
└── MainLayout
    ├── Header
    ├── Sidebar
    └── MainContent
```

**Kết quả:** 🟢 PASS

---

### Review 03 — Quality

Đã thực hiện:

```powershell
npm run lint
npm run build
```

Cả hai đều đạt.

**Kết quả:** 🟢 PASS

---

### Review 04 — Browser

Đã xác nhận giao diện hiển thị đúng và `children` hoạt động.

**Kết quả:** 🟢 PASS

---

### Review 05 — Git

Commit:

```text
62df7d3 feat(task-05): implement layout foundation
```

Push:

```text
605af03..62df7d3 main -> main
```

Working Tree:

```text
nothing to commit, working tree clean
```

**Kết quả:** 🟢 PASS

---

## 23. Final Status

### TASK-05 — Layout Foundation

```text
Knowledge        🟢 PASS
Implementation   🟢 PASS
Quality          🟢 PASS
Documentation    🟢 PASS
Git              🟢 PASS
Push             🟢 PASS
Final Review     🟢 PASS
```

**Overall Status:**

🟢 PASS

**Commit:**

```text
62df7d3 feat(task-05): implement layout foundation
```

**GitHub:**

```text
main -> origin/main
```

**Working Tree:**

```text
CLEAN
```
