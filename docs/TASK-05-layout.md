# TASK-05 — Layout

> Hồ sơ kỹ thuật, học tập và theo dõi quá trình thực hiện TASK-05 của dự án `hc-tc-office`.

---

## 1. Thông tin TASK

| Thuộc tính      | Nội dung                                         |
| --------------- | ------------------------------------------------ |
| TASK ID         | TASK-05                                          |
| Tên TASK        | Layout                                           |
| Phase           | Phase 1 — UI Foundation                          |
| Status          | 🟡 IN PROGRESS                                   |
| Ngày bắt đầu    | 2026-09-23                                       |
| Ngày hoàn thành | Chưa hoàn thành                                  |
| Phụ thuộc       | TASK-01, TASK-02, TASK-03, TASK-04               |
| Người thực hiện | Phạm Văn Á + AI Mentor                           |
| Branch          | `main`                                           |
| Commit          | Chưa có                                          |
| Scope           | Xây dựng nền tảng Layout dùng chung cho ứng dụng |

---

# 2. Bối cảnh

Các TASK-01 đến TASK-04 đã hoàn thành nền tảng ban đầu của dự án:

- Khởi tạo React + TypeScript + Vite.
- Chuẩn hóa cấu trúc thư mục.
- Thiết lập Git và GitHub.
- Xây dựng Project Documentation.
- Thiết lập quy trình quản lý TASK, Progress, Git và Documentation.

TASK-05 là bước chuyển từ **Project Foundation** sang **UI Foundation**.

TASK-05 bắt đầu xây dựng cấu trúc giao diện dùng chung cho ứng dụng.

---

# 3. Phân loại Phase

## Phase 0 — Project Foundation

Phase 0 tập trung vào việc thiết lập và quản lý nền tảng dự án.

Các TASK đã hoàn thành:

| TASK    | Nội dung                           | Status  |
| ------- | ---------------------------------- | ------- |
| TASK-01 | Khởi tạo Vite + React + TypeScript | 🟢 PASS |
| TASK-02 | Chuẩn hóa cấu trúc project         | 🟢 PASS |
| TASK-03 | Git + GitHub                       | 🟢 PASS |
| TASK-04 | Documentation                      | 🟢 PASS |

## Phase 1 — UI Foundation

TASK-05 thuộc Phase 1 vì bắt đầu xây dựng nền tảng giao diện ứng dụng.

### TASK-05 — Layout

Mục tiêu:

> Xây dựng Layout dùng chung và hiểu bản chất của Layout trong React trước khi phát triển các giao diện nghiệp vụ.

---

# 4. Mục tiêu

TASK-05 có hai mục tiêu song song.

## 4.1. Mục tiêu kỹ thuật

Xây dựng được một Layout cơ bản có khả năng:

- Cung cấp khung giao diện chung.
- Nhận nội dung từ bên ngoài thông qua `children`.
- Hiển thị nội dung bên trong vùng Main Content.
- Có cấu trúc rõ ràng để mở rộng trong các TASK sau.

## 4.2. Mục tiêu học tập

Sau TASK-05, người học phải hiểu:

- Layout là gì.
- Page là gì.
- Component là gì.
- Component cha và component con.
- Props là gì.
- `children` là gì.
- Vì sao Layout sử dụng `children`.
- Layout khác Page như thế nào.
- Vì sao không nên đưa toàn bộ giao diện vào một component duy nhất.

---

# 5. Phạm vi

## 5.1. Trong phạm vi

TASK-05 bao gồm:

1. Tìm hiểu khái niệm Layout.
2. Tìm hiểu `children`.
3. Xác định cấu trúc Layout của ứng dụng.
4. Tạo Layout component cơ bản.
5. Truyền nội dung vào Layout thông qua `children`.
6. Tạo Page/component thử nghiệm để kiểm tra Layout.
7. Kiểm tra TypeScript.
8. Kiểm tra ESLint.
9. Kiểm tra Build.
10. Cập nhật Documentation.
11. Ghi nhận Issues.
12. Ghi nhận Lessons.
13. Ghi nhận Decisions.
14. Cập nhật Progress.
15. Commit.
16. Push GitHub.
17. Kiểm tra Working Tree.

---

# 6. Ngoài phạm vi

Các nội dung sau **không thuộc TASK-05**:

- React Router.
- Routing hoàn chỉnh.
- Authentication.
- Authorization.
- Login.
- Role-based access control.
- API.
- Database.
- Backend.
- Dashboard nghiệp vụ.
- Quản lý nhân sự.
- Quản lý lịch công tác.
- Quản lý công việc.
- Sidebar nghiệp vụ hoàn chỉnh.
- Header nghiệp vụ hoàn chỉnh.
- Design System hoàn chỉnh.
- Responsive Design hoàn chỉnh.
- State Management.
- Global State.
- API State.
- Deployment.

Nếu phát sinh yêu cầu thuộc các nội dung trên, phải ghi nhận và đưa sang TASK/Phase phù hợp thay vì tự mở rộng TASK-05.

---

# 7. Kiến thức nền cần đạt

## 7.1. Component

Component là đơn vị xây dựng giao diện có thể được sử dụng và tổ chức độc lập.

Ví dụ:

```tsx
function Header() {
  return <header>Header</header>;
}
```

---

## 7.2. Props

Props là dữ liệu được truyền từ component cha xuống component con.

Ví dụ:

```tsx
function Greeting({ name }) {
  return <h1>Xin chào {name}</h1>;
}
```

Sử dụng:

```tsx
<Greeting name="Á" />
```

---

## 7.3. Children

`children` là nội dung được đặt bên trong component khi component đó được sử dụng.

Ví dụ:

```tsx
<MainLayout>
  <h1>Dashboard</h1>
</MainLayout>
```

Trong `MainLayout`, phần:

```tsx
{
  children;
}
```

sẽ nhận:

```tsx
<h1>Dashboard</h1>
```

Mô hình:

```text
MainLayout
    │
    └── children
           │
           └── Dashboard
```

---

# 8. Khái niệm Layout

Layout là cấu trúc giao diện dùng chung cho nhiều Page.

Ví dụ:

```text
                 MainLayout
                     │
          ┌──────────┼──────────┐
          │          │          │
        Header     Sidebar     Main
                                │
                         ┌──────┴──────┐
                         │             │
                    Dashboard     WorkCalendar
```

Layout quản lý phần khung chung.

Page quản lý nội dung riêng của từng màn hình.

---

# 9. Layout và Page

## Layout

Chịu trách nhiệm về:

- Khung giao diện.
- Vùng Header.
- Vùng Navigation/Sidebar.
- Vùng Main Content.
- Các thành phần dùng chung.

## Page

Chịu trách nhiệm về:

- Nội dung của một màn hình.
- Dữ liệu và UI của chức năng cụ thể.
- Nội dung được hiển thị trong Layout.

Mối quan hệ:

```text
Layout
   │
   └── Page
```

Không nên trộn hai trách nhiệm này thành một component duy nhất.

---

# 10. Thiết kế dự kiến

Cấu trúc dự kiến:

```text
src/
├── components/
├── hooks/
├── layouts/
│   └── MainLayout.tsx
├── pages/
├── services/
└── types/
```

Trong TASK-05, Layout chỉ cần đạt mức nền tảng.

Không cố gắng xây dựng toàn bộ giao diện ứng dụng ngay trong TASK này.

---

# 11. Cấu trúc Layout dự kiến

Mô hình khái niệm:

```text
MainLayout
│
├── Header
│
├── Sidebar
│
└── Main Content
       │
       └── children
```

Ở giai đoạn đầu, Header và Sidebar có thể chỉ là các vùng giao diện tối giản để chứng minh cấu trúc Layout hoạt động.

Các thành phần hoàn chỉnh sẽ được xem xét trong những TASK tiếp theo.

---

# 12. Subtask

| Subtask | Nội dung                               | Status         |
| ------- | -------------------------------------- | -------------- |
| 05.1    | Khởi động TASK-05 và cập nhật Progress | 🟡 In Progress |
| 05.2    | Học bản chất Layout và `children`      | ⬜ Pending     |
| 05.3    | Thiết kế cấu trúc `MainLayout`         | ⬜ Pending     |
| 05.4    | Implement `MainLayout` cơ bản          | ⬜ Pending     |
| 05.5    | Tạo Page/component thử nghiệm          | ⬜ Pending     |
| 05.6    | Review TypeScript và ESLint            | ⬜ Pending     |
| 05.7    | Build và kiểm thử                      | ⬜ Pending     |
| 05.8    | Documentation và Progress Update       | ⬜ Pending     |
| 05.9    | Commit TASK-05                         | ⬜ Pending     |
| 05.10   | Push GitHub và Final Review            | ⬜ Pending     |

> Chỉ thay đổi trạng thái Subtask sau khi công việc thực sự hoàn thành.

---

# 13. Quy trình thực hiện

TASK-05 tuân thủ workflow:

```text
Hiểu kiến thức
      ↓
Xác định phạm vi
      ↓
Thiết kế
      ↓
Implement
      ↓
Kiểm tra
      ↓
Review
      ↓
Documentation
      ↓
Git Review
      ↓
Commit
      ↓
Progress Update
      ↓
Xác lập PASS
      ↓
Push GitHub
      ↓
Final Verification
```

Không bỏ qua bước chỉ vì thay đổi nhỏ.

---

# 14. Acceptance Criteria

TASK-05 chỉ được xác lập `🟢 PASS` khi tất cả điều kiện sau đạt.

## AC-01 — Layout hoạt động

Có Layout component hoạt động thực tế.

## AC-02 — `children`

Layout nhận và hiển thị được nội dung thông qua `children`.

## AC-03 — Phân tách trách nhiệm

Có sự phân biệt rõ ràng giữa:

- Layout.
- Page/component nội dung.

## AC-04 — TypeScript

Code không có TypeScript error.

## AC-05 — ESLint

Lệnh:

```powershell
npm run lint
```

phải thành công.

## AC-06 — Build

Lệnh:

```powershell
npm run build
```

phải thành công.

## AC-07 — Scope

Không đưa các chức năng ngoài phạm vi vào TASK-05.

## AC-08 — Documentation

TASK document được cập nhật đầy đủ.

## AC-09 — Progress

`08-progress.md` phản ánh đúng trạng thái thực tế.

## AC-10 — Git

Có commit mô tả đúng nội dung thay đổi.

## AC-11 — GitHub

Commit được push thành công lên GitHub.

## AC-12 — Working Tree

Sau khi hoàn thành:

```text
nothing to commit, working tree clean
```

## AC-13 — Knowledge

Người học có thể tự giải thích:

1. Layout là gì?
2. Page là gì?
3. Layout khác Page như thế nào?
4. Props là gì?
5. `children` là gì?
6. Vì sao Layout sử dụng `children`?
7. Component cha và component con tương tác như thế nào?

---

# 15. Test / Verification

## 15.1. Development Test

Kiểm tra ứng dụng bằng development server:

```powershell
npm run dev
```

Kiểm tra:

- Layout hiển thị.
- Nội dung `children` hiển thị.
- Không có lỗi Runtime.

## 15.2. Lint Test

```powershell
npm run lint
```

Expected:

```text
No ESLint errors
```

## 15.3. Build Test

```powershell
npm run build
```

Expected:

```text
Build completed successfully
```

## 15.4. Git Test

```powershell
git status
```

Expected sau khi hoàn thành:

```text
nothing to commit, working tree clean
```

---

# 16. Issues — Các vấn đề phát sinh

> Chỉ ghi các vấn đề có giá trị kỹ thuật, học tập hoặc ảnh hưởng đến quy trình.

## ISSUE-001

**Status:** ⬜ Chưa ghi nhận

**Loại:** -

**Ngày:** -

**Hiện tượng:**

- **Nguyên nhân:**

- **Cách xử lý:**

- **Kết quả:**

- **Bài học:**

- ***

# 17. Lessons — Bài học rút ra

Phần này ghi lại các kiến thức quan trọng thu được trong quá trình thực hiện.

## LESSON-001 — Layout và Page

**Status:** 🟡 Đang học

Layout chịu trách nhiệm về khung giao diện dùng chung.

Page chịu trách nhiệm về nội dung của một màn hình cụ thể.

---

## LESSON-002 — `children`

**Status:** 🟡 Đang học

`children` cho phép component nhận nội dung được đặt bên trong component đó.

Ví dụ:

```tsx
<MainLayout>
  <Dashboard />
</MainLayout>
```

`Dashboard` được truyền vào `MainLayout` thông qua `children`.

---

## LESSON-003 — Component Composition

**Status:** ⬜ Pending

Ghi nhận sau khi thực hành.

---

# 18. Decisions — Quyết định kỹ thuật

## DECISION-001 — TASK-05 thuộc Phase 1

**Ngày:** 2026-09-23

**Quyết định:**

TASK-05 — Layout được xếp vào:

```text
Phase 1 — UI Foundation
```

**Lý do:**

TASK-01 đến TASK-04 tập trung vào Project Foundation.

TASK-05 bắt đầu xây dựng cấu trúc giao diện ứng dụng nên thuộc UI Foundation.

**Ảnh hưởng:**

Cần bảo đảm các tài liệu sau thống nhất:

- `03-roadmap.md`
- `08-progress.md`
- TASK-05 document

---

## DECISION-002 — Tách hồ sơ riêng cho từng TASK

**Ngày:** 2026-09-23

**Quyết định:**

Mỗi TASK có một file:

```text
TASK-XX-*.md
```

**Lý do:**

- Dễ tra cứu.
- Theo dõi được quá trình thực hiện.
- Ghi lại Issues.
- Ghi lại Lessons.
- Ghi lại Decisions.
- Ghi lại Git History.
- Có thể dùng làm tài liệu học tập lâu dài.

`08-progress.md` chỉ giữ vai trò Dashboard tổng quan.

---

# 19. Scope Change Log

Mọi thay đổi phạm vi phải được ghi nhận.

## CHANGE-001 — TASK-05 chuyển sang Phase 1

**Ngày:** 2026-09-23

**Trạng thái:** 🟢 Accepted

**Nội dung:**

Ban đầu TASK-05 được dự kiến tiếp nối trong Phase 0.

Sau khi review lại mục tiêu của Phase 0, xác định TASK-05 bắt đầu xây dựng UI Foundation nên chuyển sang Phase 1.

**Lý do:**

Phase 0 tập trung vào Project Foundation.

Phase 1 tập trung vào UI Foundation.

**Ảnh hưởng:**

Cần cập nhật:

- Roadmap.
- Progress.
- TASK documentation.

---

# 20. Git History

Ghi lại các commit quan trọng liên quan đến TASK.

| Commit  | Nội dung         | Trạng thái     |
| ------- | ---------------- | -------------- |
| Chưa có | Khởi tạo TASK-05 | 🟡 In Progress |

Sau khi commit, cập nhật bảng này.

---

# 21. Progress History

| Ngày       | Nội dung                       | Trạng thái  |
| ---------- | ------------------------------ | ----------- |
| 2026-09-23 | Bắt đầu TASK-05                | 🟢 Recorded |
| 2026-09-23 | Xác định TASK-05 thuộc Phase 1 | 🟢 Recorded |

Các thay đổi trạng thái tiếp theo phải được bổ sung, không xóa lịch sử cũ.

---

# 22. Review Log

## Initial Review

**Ngày:** 2026-09-23

**Kết quả:**

- Scope được xác định.
- Acceptance Criteria được xác định.
- TASK được phân loại vào Phase 1.
- Chưa triển khai code.
- Chưa có commit TASK-05.

**Status:** 🟢 Ready for implementation

---

## Final Review

> Chỉ hoàn thành phần này khi TASK-05 thực sự kết thúc.

### Knowledge

- [ ] Hiểu Layout
- [ ] Hiểu Page
- [ ] Hiểu Props
- [ ] Hiểu `children`
- [ ] Hiểu Component Composition

### Implementation

- [ ] MainLayout hoạt động
- [ ] `children` hoạt động
- [ ] Page/component thử nghiệm hoạt động
- [ ] Không có code ngoài scope

### Quality

- [ ] TypeScript đạt
- [ ] ESLint đạt
- [ ] Build đạt
- [ ] Runtime test đạt

### Documentation

- [ ] TASK document hoàn chỉnh
- [ ] Issues được ghi nhận
- [ ] Lessons được ghi nhận
- [ ] Decisions được ghi nhận
- [ ] Scope changes được ghi nhận
- [ ] Progress được cập nhật

### Git

- [ ] Git review đạt
- [ ] Commit đạt
- [ ] Push GitHub đạt
- [ ] Working Tree clean

### Final Status

```text
TASK-05 — Layout
Status: ⬜ PENDING
```

Chỉ đổi thành:

```text
TASK-05 — Layout
Status: 🟢 PASS
```

khi toàn bộ Acceptance Criteria đã đạt.

---

# 23. Ghi chú quan trọng

TASK-05 ưu tiên **hiểu bản chất trước khi code**.

Không đánh giá TASK chỉ dựa trên việc:

```text
"Code chạy được"
```

Một TASK được coi là hoàn thành khi đồng thời đạt:

```text
Kiến thức
    +
Thiết kế
    +
Code
    +
Kiểm thử
    +
Documentation
    +
Git
    +
Progress
```

Mục tiêu của dự án không chỉ là tạo ra một ứng dụng chạy được mà còn xây dựng được **quy trình phát triển có thể giải thích, kiểm tra, truy vết và học lại về sau**.
