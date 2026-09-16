# TASK-01 — Khởi tạo dự án Vite + React + TypeScript

## 1. Thông tin Task

| Nội dung       | Thông tin                                |
| -------------- | ---------------------------------------- |
| Mã Task        | TASK-01                                  |
| Tên Task       | Khởi tạo dự án Vite + React + TypeScript |
| Dự án          | HC-TC Office                             |
| Ngày thực hiện | 16/09/2026                               |
| Môi trường     | Windows + PowerShell                     |
| Node.js        | v24.19.0                                 |
| npm            | 11.17.0                                  |
| Frontend       | React                                    |
| Ngôn ngữ       | TypeScript                               |
| Build tool     | Vite                                     |
| Linter         | ESLint                                   |
| Git branch     | `main`                                   |
| Commit         | `456b943`                                |
| Commit message | `feat(task-01): initialize project`      |
| GitHub         | Đã Push thành công                       |
| Trạng thái     | 🟢 PASS                                  |

---

# 2. Mục tiêu

TASK-01 có các mục tiêu:

1. Khởi tạo project HC-TC Office bằng Vite.
2. Sử dụng React.
3. Sử dụng TypeScript.
4. Cấu hình ESLint.
5. Hiểu cấu trúc cơ bản của một project React + TypeScript + Vite.
6. Hiểu vai trò của `package.json`.
7. Hiểu `scripts` trong `package.json`.
8. Phân biệt `dependencies` và `devDependencies`.
9. Hiểu quy trình `npm install`.
10. Hiểu quy trình `npm run dev`.
11. Kiểm tra project chạy thành công trên trình duyệt.
12. Khởi tạo và kiểm tra Git.
13. Kết nối project với GitHub.
14. Thực hiện commit đầu tiên.
15. Push project lên GitHub.
16. Tạo tài liệu cho TASK-01.

---

# 3. Môi trường thực hiện

Project được thực hiện trên:

- Hệ điều hành: Windows
- Terminal: PowerShell
- Node.js: `v24.19.0`
- npm: `11.17.0`
- Git: `2.53.0.windows.1`

Thư mục project:

```text
E:\IT\hc-tc-office
```

Repository GitHub:

```text
https://github.com/phamvana/hc-tc-office.git
```

Branch:

```text
main
```

---

# 4. Các lệnh đã thực hiện

## 4.1. Kiểm tra Node.js

```powershell
node -v
```

Kết quả:

```text
v24.19.0
```

## 4.2. Kiểm tra npm

```powershell
npm -v
```

Kết quả:

```text
11.17.0
```

## 4.3. Khởi tạo project bằng Vite

```powershell
npm create vite@latest hc-tc-office
```

Các lựa chọn:

```text
Framework: React
Variant: TypeScript
ESLint: Enabled
```

## 4.4. Di chuyển vào thư mục project

```powershell
cd hc-tc-office
```

## 4.5. Kiểm tra cấu trúc thư mục

```powershell
dir
```

## 4.6. Cài đặt package

```powershell
npm install
```

## 4.7. Kiểm tra package.json

```powershell
Get-Content package.json
```

## 4.8. Chạy project

```powershell
npm run dev
```

Project chạy thành công tại:

```text
http://localhost:5173
```

Trang React mặc định hiển thị thành công trên trình duyệt.

---

# 5. Cấu trúc project ban đầu

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

# 6. Kiến thức đã học

## 6.1. Node.js

Node.js cung cấp môi trường để chạy JavaScript/TypeScript tooling bên ngoài trình duyệt.

Trong project frontend, Node.js được sử dụng để chạy các công cụ như:

```text
npm
Vite
ESLint
TypeScript
```

---

## 6.2. npm

npm là package manager được sử dụng để:

- cài package;
- quản lý package;
- chạy các script;
- quản lý phiên bản package.

Ví dụ:

```powershell
npm install
```

và:

```powershell
npm run dev
```

---

# 7. Hiểu package.json

`package.json` là file quan trọng của project Node.js/frontend.

Nó chứa các thông tin như:

- tên project;
- phiên bản;
- loại module;
- scripts;
- dependencies;
- devDependencies.

Ví dụ:

```json
{
  "name": "hc-tc-office",
  "private": true,
  "version": "0.0.0"
}
```

---

# 8. Hiểu scripts

Trong `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

Khi chạy:

```powershell
npm run dev
```

npm tìm script:

```text
"dev": "vite"
```

sau đó thực thi:

```text
vite
```

Vì vậy:

```text
npm run dev
      ↓
script "dev"
      ↓
vite
      ↓
Development Server
```

---

# 9. Dependencies và devDependencies

## dependencies

Là các package mà ứng dụng cần sử dụng trong quá trình chạy ứng dụng.

Ví dụ:

```json
"dependencies": {
  "react": "^19.2.8",
  "react-dom": "^19.2.8"
}
```

## devDependencies

Chủ yếu là các công cụ phục vụ quá trình phát triển, kiểm tra, build và lint.

Ví dụ:

```json
"devDependencies": {
  "typescript": "~6.0.2",
  "vite": "^8.3.0",
  "eslint": "^10.10.0"
}
```

Có thể ghi nhớ:

```text
dependencies
    ↓
thư viện ứng dụng sử dụng

devDependencies
    ↓
công cụ phục vụ phát triển / kiểm tra / build
```

---

# 10. Vite là gì?

Vite không phải React.

Có thể hiểu đơn giản:

```text
React
↓
Thư viện xây dựng giao diện

Vite
↓
Build tool + Development Server
```

Vite hỗ trợ:

- chạy development server;
- xử lý module;
- hỗ trợ TypeScript trong quá trình phát triển;
- build ứng dụng production.

---

# 11. TypeScript là gì?

TypeScript là một ngôn ngữ mở rộng JavaScript, bổ sung hệ thống kiểu dữ liệu tĩnh.

Có thể hiểu:

```text
JavaScript
    ↑
TypeScript mở rộng thêm
    ↓
Static Type System
```

TypeScript không phải framework frontend.

Trong project này:

```text
React + TypeScript
```

được sử dụng để xây dựng giao diện.

Trình duyệt thông thường không thực thi trực tiếp mã TypeScript như một file `.ts`/`.tsx`; quá trình phát triển và build sẽ xử lý mã TypeScript thành JavaScript phù hợp để trình duyệt chạy.

---

# 12. Chuỗi hoạt động của project

Sau TASK-01 đã hiểu được chuỗi:

```text
Node.js
   ↓
npm
   ↓
Vite
   ↓
React + TypeScript
   ↓
npm install
   ↓
node_modules
   ↓
npm run dev
   ↓
Vite Development Server
   ↓
Browser
```

---

# 13. Git — Kiểm tra ban đầu

Kiểm tra phiên bản Git:

```powershell
git --version
```

Kết quả:

```text
git version 2.53.0.windows.1
```

Kiểm tra trạng thái:

```powershell
git status
```

Project đang sử dụng branch:

```text
main
```

và đã kết nối với remote:

```text
origin
```

Kiểm tra remote:

```powershell
git remote -v
```

Kết quả:

```text
origin  https://github.com/phamvana/hc-tc-office.git (fetch)
origin  https://github.com/phamvana/hc-tc-office.git (push)
```

---

# 14. Kiểm tra .gitignore

Project có `.gitignore`.

Các thành phần quan trọng được bỏ qua gồm:

```text
node_modules
dist
dist-ssr
*.local
```

Điều này giúp tránh đưa các file/thư mục không cần thiết vào Git.

Đặc biệt:

```text
node_modules/
```

không được commit.

---

# 15. Git Add

Thực hiện:

```powershell
git add .
```

Git xuất hiện cảnh báo:

```text
warning: in the working copy ... LF will be replaced by CRLF
```

Đây là cảnh báo liên quan đến kiểu xuống dòng:

```text
LF
CRLF
```

Không phải lỗi của project.

Sau đó kiểm tra:

```powershell
git status
```

Các file của project đã được đưa vào Staging Area.

Không thấy:

```text
node_modules/
```

và:

```text
dist/
```

---

# 16. Git Commit

Thực hiện:

```powershell
git commit -m "feat(task-01): initialize project"
```

Kết quả:

```text
[main 456b943] feat(task-01): initialize project
19 files changed, 3841 insertions(+)
```

Commit đầu tiên:

```text
456b943
```

Commit message:

```text
feat(task-01): initialize project
```

---

# 17. Kiểm tra sau Commit

Thực hiện:

```powershell
git status
```

Kết quả:

```text
On branch main
Your branch is ahead of 'origin/main' by 1 commit.

nothing to commit, working tree clean
```

Điều này xác nhận:

- Local Repository có 1 commit mới.
- Working Directory sạch.
- Không còn thay đổi chưa commit.

---

# 18. Git Push

Thực hiện:

```powershell
git push origin main
```

Kết quả:

```text
To https://github.com/phamvana/hc-tc-office.git

7de7b8e..456b943  main -> main
```

Điều này xác nhận commit:

```text
456b943
```

đã được Push thành công lên GitHub.

---

# 19. Chuỗi Git đã thực hành

TASK-01 đã thực hành đầy đủ:

```text
Working Directory
        │
        │ git add .
        ▼
Staging Area
        │
        │ git commit
        ▼
Local Repository
        │
        │ git push
        ▼
GitHub
```

Quy tắc ghi nhớ:

> **Add = chọn thay đổi**

> **Commit = ghi nhận thay đổi**

> **Push = đồng bộ lên GitHub**

---

# 20. Kết quả kiểm tra

## Functional

🟢 PASS

- Project khởi tạo thành công.
- Vite chạy thành công.
- React hiển thị thành công.
- Browser truy cập được project.

## Code

🟢 PASS

- Sử dụng cấu trúc mặc định của Vite.
- Chưa thực hiện thay đổi code ngoài phạm vi TASK-01.

## UI

🟢 PASS

- Trang React mặc định hiển thị bình thường.

## Understanding

🟢 PASS

Đã hiểu các khái niệm:

- Node.js
- npm
- React
- Vite
- TypeScript
- package.json
- scripts
- dependencies
- devDependencies
- `npm install`
- `npm run dev`
- Git
- GitHub
- staging
- commit
- push

## Documentation

🟢 PASS

Đã tạo:

```text
docs/TASK-01-khoi-tao-du-an.md
```

## Git

🟢 PASS

- Git hoạt động.
- Remote GitHub hoạt động.
- Commit thành công.
- Push thành công.
- Working Directory sạch.

---

# 21. Các vấn đề gặp phải

## Vấn đề 1 — LF và CRLF

Khi thực hiện:

```powershell
git add .
```

Git xuất hiện cảnh báo:

```text
LF will be replaced by CRLF
```

### Nguyên nhân

Khác biệt về kiểu xuống dòng giữa môi trường Unix/Linux và Windows.

### Xử lý

Không cần thay đổi cấu hình trong phạm vi TASK-01.

Đây là warning, không phải error.

### Bài học

Cần phân biệt:

```text
warning ≠ error
```

Không phải warning nào cũng cần xử lý ngay.

---

# 22. npm có thông báo phiên bản mới

npm thông báo có phiên bản mới hơn.

Phiên bản hiện tại:

```text
11.17.0
```

Không thực hiện nâng cấp trong TASK-01 vì việc nâng cấp npm không nằm trong phạm vi Task và môi trường hiện tại đang hoạt động bình thường.

### Bài học

Không nên tùy tiện nâng cấp dependency hoặc công cụ khi Task hiện tại không yêu cầu.

---

# 23. Bài học quan trọng nhất

TASK-01 giúp hình thành mô hình tư duy ban đầu về một frontend project:

```text
Project
│
├── Source Code
│
├── Dependencies
│
├── Configuration
│
├── Build Tool
│
├── Documentation
│
└── Version Control
```

Đồng thời hiểu được:

```text
package.json
     ↓
npm install
     ↓
node_modules
     ↓
npm run dev
     ↓
Vite
     ↓
React Application
     ↓
Browser
```

Và:

```text
Code
 ↓
Git Add
 ↓
Staging
 ↓
Git Commit
 ↓
Local Repository
 ↓
Git Push
 ↓
GitHub
```

---

# 24. Tự đánh giá

| Nội dung        | Mức độ               |
| --------------- | -------------------- |
| Khởi tạo Vite   | 🟢 Đã hiểu           |
| React           | 🟢 Đã hiểu khái niệm |
| TypeScript      | 🟢 Đã hiểu khái niệm |
| Vite            | 🟢 Đã hiểu khái niệm |
| npm             | 🟢 Đã hiểu cơ bản    |
| package.json    | 🟢 Đã hiểu           |
| dependencies    | 🟢 Đã hiểu           |
| devDependencies | 🟢 Đã hiểu           |
| Git status      | 🟢 Đã thực hành      |
| git add         | 🟢 Đã thực hành      |
| git commit      | 🟢 Đã thực hành      |
| git push        | 🟢 Đã thực hành      |
| GitHub          | 🟢 Đã kết nối        |

---

# 25. AI Review

## Functional

🟢 PASS

Project chạy được bằng:

```powershell
npm run dev
```

## Code Quality

🟢 PASS

Chưa phát sinh thay đổi code ngoài phạm vi TASK-01.

## UI

🟢 PASS

React application hiển thị thành công.

## Understanding

🟢 PASS

Đã nắm được các khái niệm nền tảng và đã thực hành trực tiếp bằng PowerShell.

## Documentation

🟢 PASS

Có tài liệu:

```text
docs/TASK-01-khoi-tao-du-an.md
```

Tài liệu ghi nhận quá trình thực hiện, kiến thức, Git và kết quả kiểm tra.

## Git

🟢 PASS

Commit:

```text
456b943
```

Message:

```text
feat(task-01): initialize project
```

Đã Push thành công lên:

```text
origin/main
```

---

# 26. Kết luận Task

# 🟢 TASK-01 — PASS

Các yêu cầu của TASK-01 đã hoàn thành.

Commit:

```text
456b943 feat(task-01): initialize project
```

GitHub:

```text
main
```

Working Directory:

```text
clean
```

---

# 27. Trạng thái Roadmap

```text
PHASE 0 — PROJECT FOUNDATION

TASK-01  Khởi tạo Vite + React + TypeScript    🟢 PASS
TASK-02  Chuẩn hóa cấu trúc project            ⬜ TODO
TASK-03  Git + GitHub                           ⬜ TODO
TASK-04  Documentation                          ⬜ TODO
```

> Lưu ý: Một phần Git/GitHub đã được thực hành trong TASK-01. TASK-03 sau này sẽ tập trung vào việc xây dựng **quy tắc Git/GitHub chuẩn cho toàn bộ dự án**, không lặp lại nội dung đã làm.

---

# 28. Bước tiếp theo

Không thực hiện code của TASK-02 trong tài liệu TASK-01.

Sau khi tài liệu này được cập nhật và commit lại, dự án mới chuyển sang:

**TASK-02 — Chuẩn hóa cấu trúc project**

Mục tiêu của TASK-02:

```text
src/
├── assets/
├── components/
├── layouts/
├── pages/
├── types/
├── services/
├── hooks/
└── ...
```

Việc lựa chọn thư mục nào thực sự cần thiết sẽ được phân tích trước khi tạo, không tạo thư mục chỉ để "cho đủ".
