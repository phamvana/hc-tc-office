# TASK-03 — Git & GitHub Workflow

## 1. Mục tiêu

Xây dựng và làm chủ quy trình làm việc (workflow) với Git và GitHub để quản lý phiên bản mã nguồn cho dự án HC-TC Office, đảm bảo khả năng theo dõi lịch sử thay đổi và đồng bộ mã nguồn giữa Local Repository và Remote Repository.

---

## 2. Cấu trúc trước khi thực hiện

Dự án đã có cấu trúc thư mục nền tảng từ TASK-02. TASK-03 tập trung vào việc thực hành quy trình kiểm soát phiên bản bằng Git và đồng bộ repository với GitHub.

---

## 3. Cấu trúc liên quan đến TASK-03 sau khi thực hiện

```text
hc-tc-office/
├── docs/
│   ├── TASK-01-khoi-tao-du-an.md
│   ├── TASK-02-chuan-hoa-cau-truc-project.md
│   └── TASK-03-git-github.md
├── src/
│   └── App.tsx
└── package.json
```

Trong TASK-03, `src/App.tsx` được chỉnh sửa định dạng code và thay đổi này được ghi nhận bằng một Git commit riêng.

---

## 4. Ý nghĩa các thư mục và khái niệm cốt lõi

### Git

Git là hệ thống quản lý phiên bản phân tán (Distributed Version Control System), chạy trên máy tính cục bộ và cho phép theo dõi lịch sử thay đổi của mã nguồn.

### GitHub

GitHub là nền tảng hosting và cộng tác phát triển phần mềm dựa trên Git. GitHub cung cấp Remote Repository và các chức năng như Pull Request, Issue, Code Review, phân quyền và CI/CD.

### Local Repository

Local Repository là repository Git trên máy tính cá nhân, trong đó lịch sử commit được lưu cục bộ. Dữ liệu Git được quản lý trong thư mục `.git`.

### Remote Repository

Remote Repository là repository Git ở một hệ thống từ xa, thường được lưu trữ trên các dịch vụ như GitHub.

### Working Tree

Working Tree là trạng thái các file thực tế trong thư mục dự án mà lập trình viên đang trực tiếp chỉnh sửa.

### Staging Area

Staging Area là vùng trung gian chứa trạng thái của những thay đổi đã được chọn để đưa vào commit tiếp theo.

### origin

`origin` là tên định danh thường được Git sử dụng làm alias cho Remote Repository mặc định.

### main

`main` là tên của một branch trong repository. Việc `main` được sử dụng làm branch chính là quy ước của dự án, không phải quy định bắt buộc của Git.

---

## 5. Kiến thức đã học

### 5.1. Phân biệt `git commit` và `git push`

- `git commit`: tạo một snapshot của các thay đổi đã được đưa vào Staging Area và lưu vào Local Repository.
- `git push`: gửi các commit từ Local Repository lên Remote Repository.

### 5.2. Luồng làm việc cơ bản của Git

```text
Working Tree
     │
     │ git add
     ▼
Staging Area
     │
     │ git commit
     ▼
Local Repository
     │
     │ git push
     ▼
Remote Repository
```

### 5.3. Kiểm tra thay đổi trước khi commit

Sử dụng:

```bash
git diff --staged
```

Đây là bước kiểm tra được khuyến nghị trước khi commit để xem chính xác những thay đổi đang nằm trong Staging Area.

---

## 6. Quy trình Git chuẩn của HC-TC Office

### Bước 1 — Chỉnh sửa mã nguồn

Chỉnh sửa:

```text
src/App.tsx
```

### Bước 2 — Kiểm tra trạng thái

```bash
git status
```

### Bước 3 — Đưa thay đổi vào Staging Area

```bash
git add src/App.tsx
```

### Bước 4 — Kiểm tra thay đổi đã staged

```bash
git diff --staged
```

### Bước 5 — Tạo commit

```bash
git commit -m "style(task-03): format App component"
```

### Bước 6 — Đẩy commit lên GitHub

```bash
git push origin main
```

### Bước 7 — Kiểm tra trạng thái cuối cùng

```bash
git status
```

Kết quả mong muốn:

```text
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

---

## 7. Kiểm thử

Commit thực tế được tạo:

```text
c027db3
```

Sau khi commit nhưng chưa push, Git hiển thị:

```text
Your branch is ahead of 'origin/main' by 1 commit.
```

Điều này xác nhận Local Repository có một commit mới mà Remote Repository chưa có.

Sau khi thực hiện:

```bash
git push origin main
```

Git hiển thị:

```text
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

Điều này xác nhận Local Repository và Remote Repository đang đồng bộ và Working Tree không còn thay đổi chưa commit.

---

## 8. Kết quả

Thay đổi định dạng của `src/App.tsx` đã được ghi nhận bằng commit:

```text
c027db3
```

Commit đã được push thành công lên Remote Repository của dự án:

```text
phamvana/hc-tc-office
```

Quy trình từ chỉnh sửa mã nguồn → kiểm tra → staging → commit → push đã được thực hành thành công.

---

## 9. Vấn đề và cảnh báo

Trong quá trình thực hiện:

```bash
git add src/App.tsx
```

Git hiển thị cảnh báo:

```text
warning: LF will be replaced by CRLF
```

Đây là **cảnh báo về ký tự xuống dòng**, không phải lỗi Git.

---

## 10. Bài học về LF và CRLF

- `LF` thường được sử dụng trên Linux/macOS và nhiều công cụ phát triển hiện đại.
- `CRLF` thường được sử dụng trên Windows.
- Git có thể thực hiện chuyển đổi line ending theo cấu hình của môi trường.
- Khi làm việc nhóm đa nền tảng, có thể sử dụng `.gitattributes` để quy định cách Git xử lý line ending một cách nhất quán.

Trong phạm vi TASK-03, cảnh báo này không ảnh hưởng đến việc commit và push mã nguồn.

---

## 11. Tự đánh giá

### Kiến thức

- [x] Hiểu Git là gì.
- [x] Hiểu GitHub là gì.
- [x] Phân biệt Local Repository và Remote Repository.
- [x] Hiểu Working Tree.
- [x] Hiểu Staging Area.
- [x] Hiểu `git add`.
- [x] Hiểu `git commit`.
- [x] Hiểu `git push`.
- [x] Hiểu `origin` và `main`.
- [x] Hiểu `git diff --staged`.

### Thực hành

- [x] Kiểm tra trạng thái repository.
- [x] Stage thay đổi.
- [x] Kiểm tra staged changes.
- [x] Tạo commit.
- [x] Kiểm tra trạng thái sau commit.
- [x] Push lên GitHub.
- [x] Kiểm tra trạng thái sau push.

---

## 12. AI Review / PASS Checklist

| Tiêu chí               | Kết quả |
| ---------------------- | ------- |
| Functional             | 🟢 PASS |
| Code Quality           | 🟢 PASS |
| Git Workflow           | 🟢 PASS |
| Understanding          | 🟢 PASS |
| Documentation          | 🟢 PASS |
| GitHub Synchronization | 🟢 PASS |

### Điều kiện xác nhận

- Commit `c027db3` tồn tại.
- Commit đã được push lên `origin/main`.
- Local branch đồng bộ với `origin/main`.
- Working Tree sạch.
- Người học giải thích được Working Tree → Staging Area → Local Repository → Remote Repository.
- Người học giải thích được sự khác nhau giữa `commit` và `push`.

---

## 13. Kết luận

TASK-03 đã hoàn thành các mục tiêu về:

1. Kiến thức Git và GitHub.
2. Quy trình quản lý phiên bản.
3. Thực hành staging, commit và push.
4. Kiểm tra thay đổi trước khi commit.
5. Đồng bộ Local Repository với GitHub.
6. Tài liệu hóa quy trình thực hiện.

**Trạng thái TASK-03: 🟢 PASS**

**Commit thực hành:** `c027db3`

**Remote:** `origin/main`

**Working Tree:** Clean
