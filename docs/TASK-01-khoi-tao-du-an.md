# TASK-01 — Khởi tạo dự án Vite + React + TypeScript

## 1. Thông tin Task

- **Mã Task:** TASK-01
- **Tên:** Khởi tạo dự án Vite + React + TypeScript
- **Phase:** PHASE 0 — PROJECT FOUNDATION
- **Trạng thái:** 🟡 IN PROGRESS
- **Ngày thực hiện:** 16/09/2026

---

## 2. Mục tiêu

- Khởi tạo project `hc-tc-office`.
- Sử dụng React + TypeScript + Vite.
- Làm quen với quy trình khởi tạo một frontend project.
- Hiểu `package.json` lưu những thông tin gì.
- Hiểu vai trò của `scripts`.
- Phân biệt `dependencies` và `devDependencies`.
- Hiểu sơ bộ vai trò của Vite.
- Chạy thành công project trên development server.
- Tạo tài liệu ghi lại quá trình thực hiện TASK-01.

> Git/GitHub sẽ được thực hiện và kiểm tra ở bước riêng trước khi TASK-01 được đánh dấu PASS.

---

## 3. Môi trường

### Hệ điều hành

Windows

### Terminal

PowerShell

### Node.js

```text
v24.19.0
```

### npm

```text
11.17.0
```

### Công nghệ

- React
- TypeScript
- Vite
- ESLint
- npm

---

## 4. Các lệnh đã thực hiện

Kiểm tra Node.js:

```powershell
node -v
```

Kết quả:

```text
v24.19.0
```

Kiểm tra npm:

```powershell
npm -v
```

Kết quả:

```text
11.17.0
```

Khởi tạo project:

```powershell
npm create vite@latest hc-tc-office
```

Lựa chọn:

```text
Framework: React
Variant: TypeScript
Linter: ESLint
```

Di chuyển vào project:

```powershell
cd hc-tc-office
```

Kiểm tra cấu trúc:

```powershell
dir
```

Cài dependencies:

```powershell
npm install
```

Đọc `package.json`:

```powershell
Get-Content package.json
```

Chạy development server:

```powershell
npm run dev
```

---

## 5. Cấu trúc project sau khi khởi tạo

```text
hc-tc-office/
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
│
├── docs/
│   └── TASK-01-khoi-tao-du-an.md
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
└── src/
    ├── App.css
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    │
    └── assets/
        ├── hero.png
        ├── react.svg
        └── vite.svg
```

---

## 6. Kiến thức đã học

### 6.1. package.json

`package.json` là file JSON chứa thông tin và cấu hình quan trọng của project.

Các phần đã tìm hiểu:

```text
name
version
private
type
scripts
dependencies
devDependencies
```

### 6.2. scripts

Trong project:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

Ví dụ:

```powershell
npm run dev
```

thực chất gọi script:

```text
dev
 ↓
vite
```

### 6.3. dependencies

Là các thư viện ứng dụng cần sử dụng trong quá trình chạy ứng dụng.

Project hiện có:

```text
react
react-dom
```

### 6.4. devDependencies

Là các package chủ yếu phục vụ quá trình phát triển, kiểm tra và build project.

Ví dụ:

```text
typescript
vite
eslint
@vitejs/plugin-react
typescript-eslint
```

### 6.5. Vite

Vite là build tool và development server dành cho frontend hiện đại.

Trong quá trình phát triển, Vite cung cấp development server để chạy ứng dụng.

### 6.6. TypeScript

TypeScript là một ngôn ngữ lập trình được xây dựng mở rộng từ JavaScript, bổ sung hệ thống kiểu tĩnh và nhiều tính năng hỗ trợ phát triển ứng dụng lớn.

TypeScript không phải framework frontend.

---

## 7. Chuỗi hoạt động đã hiểu

```text
package.json
      ↓
Khai báo dependencies và scripts
      ↓
npm install
      ↓
node_modules
      ↓
npm run dev
      ↓
script "dev"
      ↓
vite
      ↓
Development Server
      ↓
React Application
      ↓
Browser
```

---

## 8. Kiểm tra kết quả

### Kiểm tra project

- [x] Project được tạo thành công.
- [x] React được cài đặt.
- [x] TypeScript được cấu hình.
- [x] ESLint được cấu hình.
- [x] Dependencies đã được cài đặt.

### Kiểm tra chạy ứng dụng

Đã chạy:

```powershell
npm run dev
```

Ứng dụng hiển thị thành công trên trình duyệt:

```text
http://localhost:5173
```

### Kiểm tra lỗi

- [x] Terminal không báo lỗi.
- [x] Trang React hiển thị.
- [x] Có thể đọc `package.json`.
- [x] Có thể xem cấu trúc project bằng `dir` / `tree /F`.

---

## 9. Các vấn đề gặp phải

Trong quá trình thực hiện TASK-01:

```text
Chưa gặp lỗi kỹ thuật.
```

npm có thông báo phiên bản mới:

```text
11.17.0 → 12.0.2
```

Chưa nâng cấp npm vì project hiện tại hoạt động bình thường và việc nâng major version không nằm trong phạm vi TASK-01.

---

## 10. Bài học

### Bài học 1

Biết cách khởi tạo một project React + TypeScript bằng Vite.

### Bài học 2

Hiểu vai trò cơ bản của `package.json`.

### Bài học 3

Biết `npm run dev` thực chất gọi script `dev`, và script này gọi Vite.

### Bài học 4

Phân biệt được:

```text
dependencies
```

và:

```text
devDependencies
```

### Bài học 5

Phân biệt được:

```text
React
TypeScript
Vite
ESLint
```

và vai trò của từng công cụ trong project.

---

## 11. Tự đánh giá

Tôi có thể giải thích bằng lời của mình:

- [x] Project được khởi tạo như thế nào.
- [x] `package.json` dùng để làm gì.
- [x] `scripts` dùng để làm gì.
- [x] `dependencies` là gì.
- [x] `devDependencies` là gì.
- [x] `npm run dev` hoạt động như thế nào.
- [x] Vite khác React như thế nào.
- [x] TypeScript khác framework frontend như thế nào.

---

## 12. AI Review

### Functional

🟢 Project chạy thành công.

### Code

🟢 Sử dụng cấu trúc mặc định của Vite, chưa phát sinh thay đổi ngoài phạm vi TASK-01.

### UI

🟢 Trang React mặc định hiển thị thành công.

### Understanding

🟢 Có thể giải thích các khái niệm nền tảng của project.

### Documentation

🟢 Đã tạo tài liệu TASK-01.

### Git

⏳ Chưa thực hiện kiểm tra Git/commit.

---

## 13. Kết quả

TASK-01 đã hoàn thành phần:

```text
Khởi tạo project
+ Kiểm tra môi trường
+ Cài dependencies
+ Chạy project
+ Kiểm tra
+ Học kiến thức nền tảng
+ Documentation
```

Còn lại:

```text
Git
GitHub
Commit
AI Review cuối
```

Sau khi hoàn thành các bước trên, TASK-01 mới được chuyển sang:

```text
🟢 PASS
```
