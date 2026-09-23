# HC-TC Office — Project Overview

## 1. Thông tin dự án

| Thuộc tính      | Nội dung                                                               |
| --------------- | ---------------------------------------------------------------------- |
| Tên dự án       | HC-TC Office                                                           |
| Loại hệ thống   | Hệ thống quản lý công tác Phòng Hành chính - Tổ chức                   |
| Mục đích        | Quản lý lịch làm việc, công việc và các nghiệp vụ hành chính - tổ chức |
| Tiến độ dự án   | Xem [Project Progress](08-progress.md)                                 |
| Frontend        | React + TypeScript + Vite                                              |
| CSS             | Tailwind CSS                                                           |
| Version Control | Git + GitHub                                                           |

---

## 2. Bối cảnh

HC-TC Office được xây dựng nhằm hỗ trợ số hóa và quản lý tập trung các công việc thuộc phạm vi Phòng Hành chính - Tổ chức.

Trong giai đoạn đầu, dự án tập trung vào việc xây dựng hệ thống quản lý lịch làm việc của lãnh đạo cơ quan. Sau khi hoàn thành nền tảng ban đầu, hệ thống sẽ được mở rộng theo nhu cầu nghiệp vụ thực tế.

Dự án đồng thời được sử dụng làm môi trường thực hành React, TypeScript, Vite, Tailwind CSS, Git/GitHub và quy trình phát triển phần mềm có quản lý.

---

## 3. Mục tiêu

### 3.1. Mục tiêu nghiệp vụ

- Quản lý lịch làm việc của lãnh đạo.
- Theo dõi và quản lý công việc được giao.
- Hỗ trợ quản lý công việc cá nhân.
- Quản lý công lệnh.
- Quản lý lệnh điều xe.
- Quản lý thông tin nhân sự.
- Hỗ trợ đăng nhập và phân quyền người sử dụng.
- Từng bước số hóa các nghiệp vụ thuộc phạm vi Phòng Hành chính - Tổ chức.

### 3.2. Mục tiêu kỹ thuật

- Thực hành React.
- Thực hành TypeScript.
- Sử dụng Vite làm công cụ phát triển frontend.
- Sử dụng Tailwind CSS để xây dựng giao diện.
- Sử dụng Git và GitHub để quản lý phiên bản.
- Áp dụng cấu trúc project có tổ chức.
- Xây dựng quy trình phát triển theo từng TASK có kiểm thử và nghiệm thu.

---

## 4. Đối tượng sử dụng

Dự án hướng tới các nhóm người sử dụng dự kiến:

- Lãnh đạo cơ quan.
- Lãnh đạo Phòng Hành chính - Tổ chức.
- Cán bộ, công chức, viên chức và người lao động có liên quan.
- Nhân viên được phân công xử lý các nghiệp vụ hành chính - tổ chức.
- Quản trị viên hệ thống.

Danh sách và quyền cụ thể của từng nhóm sẽ được xác định trong giai đoạn xây dựng hệ thống xác thực và phân quyền.

---

## 5. Phạm vi dự án

### 5.1. Phạm vi giai đoạn đầu

Giai đoạn đầu tập trung vào:

- Giao diện ứng dụng.
- Cấu trúc frontend.
- Quản lý lịch làm việc của 7 lãnh đạo:
  - 01 Giám đốc.
  - 06 Phó Giám đốc.

- Hiển thị lịch theo tuần.
- Xem chi tiết lịch.
- Tạo lịch.
- Cập nhật lịch.
- Xóa lịch.
- Điều hướng giữa các tuần.

### 5.2. Phạm vi mở rộng dự kiến

Sau giai đoạn đầu, hệ thống có thể được mở rộng với:

- Đăng nhập.
- Người dùng.
- Vai trò.
- Phân quyền.
- Quản lý công việc.
- Todo cá nhân.
- Công lệnh.
- Lệnh điều xe.
- Quản lý nhân sự.
- Backend API.
- Cơ sở dữ liệu.
- Tích hợp frontend với backend.
- Kiểm thử.
- Triển khai hệ thống.

Các chức năng mở rộng sẽ được khảo sát và xác định lại theo yêu cầu nghiệp vụ thực tế trước khi triển khai.

---

## 6. Chức năng chính dự kiến

```text
HC-TC Office
│
├── Dashboard
│
├── Lịch lãnh đạo
│   ├── Danh sách lãnh đạo
│   ├── Lịch tuần
│   ├── Chi tiết lịch
│   ├── Thêm lịch
│   ├── Sửa lịch
│   └── Xóa lịch
│
├── Quản lý công việc
│
├── Todo cá nhân
│
├── Công lệnh
│
├── Điều xe
│
├── Nhân sự
│
├── Người dùng
│
└── Phân quyền
```

Đây là phạm vi chức năng dự kiến. Các chức năng sẽ được phân tích chi tiết trước khi phát triển.

---

## 7. Công nghệ sử dụng

### Frontend

- React.
- TypeScript.
- Vite.
- Tailwind CSS.

### Công cụ phát triển

- Visual Studio Code.
- Node.js.
- npm.
- ESLint.

### Quản lý phiên bản

- Git.
- GitHub.

### Backend và cơ sở dữ liệu

Backend và cơ sở dữ liệu chưa nằm trong phạm vi triển khai của giai đoạn Foundation hiện tại.

Kiến trúc backend và database sẽ được xác định trong các phase sau.

---

## 8. Kiến trúc dự kiến

Kiến trúc tổng thể dự kiến:

```text
┌───────────────────────────────┐
│           User                │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│     Frontend                  │
│ React + TypeScript + Vite     │
│ Tailwind CSS                  │
└───────────────┬───────────────┘
                │
                │ REST API
                ▼
┌───────────────────────────────┐
│          Backend              │
│      API / Business Logic     │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│          Database             │
└───────────────────────────────┘
```

Trong giai đoạn Foundation, trọng tâm là xây dựng và chuẩn hóa Frontend.

---

## 9. Nguyên tắc phát triển

Dự án áp dụng các nguyên tắc:

1. Phát triển theo từng TASK nhỏ.
2. Mỗi TASK phải có mục tiêu và phạm vi rõ ràng.
3. Không chuyển TASK khi TASK hiện tại chưa đạt điều kiện PASS.
4. Ưu tiên hiểu bản chất trước khi sử dụng code.
5. Code phải được kiểm tra trước khi commit.
6. Commit phải mô tả đúng nội dung thay đổi.
7. Tài liệu phải được cập nhật cùng tiến độ dự án.
8. Không đưa chức năng ngoài phạm vi TASK vào task đang thực hiện.
9. Ưu tiên code dễ đọc, dễ bảo trì và dễ mở rộng.
10. Các quyết định kỹ thuật quan trọng phải được ghi nhận trong documentation.

---

## 10. Tài liệu liên quan

Các tài liệu quản lý dự án nằm trong:

```text
docs/
└── 00-project/
```

Các tài liệu nghiệm thu TASK nằm trực tiếp trong:

```text
docs/
```

Mỗi TASK phải có tài liệu ghi nhận mục tiêu, quá trình thực hiện, kiểm thử, vấn đề gặp phải, bài học và kết quả nghiệm thu.
