# HC-TC Office — Requirements

## 1. Mục đích

Tài liệu này xác định các yêu cầu nghiệp vụ, yêu cầu chức năng và yêu cầu kỹ thuật của hệ thống HC-TC Office.

Tài liệu được sử dụng làm cơ sở để:

- phân tích nghiệp vụ;
- thiết kế hệ thống;
- xây dựng các chức năng;
- kiểm thử;
- nghiệm thu;
- theo dõi phạm vi phát triển của dự án.

---

## 2. Phạm vi yêu cầu

### 2.1. Phạm vi hiện tại

Trong giai đoạn Foundation, hệ thống tập trung vào frontend và quản lý lịch làm việc của 7 lãnh đạo cơ quan, gồm:

- 01 Giám đốc.
- 06 Phó Giám đốc.

Các chức năng chính:

- Xem danh sách lãnh đạo.
- Xem lịch làm việc theo tuần.
- Xem chi tiết lịch.
- Tạo lịch.
- Cập nhật lịch.
- Xóa lịch.
- Điều hướng giữa các tuần.

### 2.2. Phạm vi dự kiến

Các giai đoạn tiếp theo có thể bao gồm:

- Đăng nhập.
- Quản lý người dùng.
- Phân quyền.
- Quản lý công việc.
- Todo cá nhân.
- Công lệnh.
- Lệnh điều xe.
- Quản lý nhân sự.
- Backend API.
- Cơ sở dữ liệu.
- Kiểm thử và triển khai.

Các yêu cầu mở rộng phải được khảo sát và xác nhận trước khi đưa vào phát triển.

## 3. Người sử dụng

Hệ thống dự kiến phục vụ các nhóm người sử dụng sau:

| Nhóm người dùng      | Mô tả                                                          |
| -------------------- | -------------------------------------------------------------- |
| Lãnh đạo cơ quan     | Theo dõi và quản lý lịch làm việc của bản thân                 |
| Lãnh đạo Phòng HC-TC | Quản lý và theo dõi các nghiệp vụ thuộc phạm vi được phân công |
| Cán bộ, nhân viên    | Theo dõi và thực hiện các công việc được giao                  |
| Quản trị viên        | Quản lý người dùng, vai trò và cấu hình hệ thống               |

Quyền truy cập cụ thể của từng nhóm sẽ được xác định trong giai đoạn phân tích chức năng xác thực và phân quyền.

## 4. Yêu cầu nghiệp vụ

### 4.1. Quản lý lịch lãnh đạo

Hệ thống phải hỗ trợ quản lý lịch làm việc của 7 lãnh đạo cơ quan.

Các yêu cầu chính:

- Hiển thị danh sách lãnh đạo.
- Hiển thị lịch làm việc theo tuần.
- Cho phép xem chi tiết một lịch làm việc.
- Cho phép tạo lịch làm việc.
- Cho phép cập nhật lịch làm việc.
- Cho phép xóa lịch làm việc.
- Cho phép chuyển đổi giữa các tuần.

### 4.2. Quản lý công việc

Hệ thống dự kiến hỗ trợ:

- Tạo công việc.
- Giao công việc.
- Theo dõi trạng thái công việc.
- Theo dõi thời hạn xử lý.
- Xem danh sách công việc.
- Cập nhật kết quả xử lý.

Các yêu cầu chi tiết sẽ được xác định trong giai đoạn phân tích module quản lý công việc.

### 4.3. Todo cá nhân

Hệ thống dự kiến hỗ trợ người dùng quản lý công việc cá nhân.

Các chức năng dự kiến:

- Tạo Todo.
- Cập nhật Todo.
- Đánh dấu hoàn thành.
- Xóa Todo.
- Theo dõi trạng thái Todo.

### 4.4. Công lệnh

Hệ thống dự kiến hỗ trợ:

- Tạo công lệnh.
- Quản lý thông tin công lệnh.
- Theo dõi trạng thái.
- In hoặc xuất công lệnh.

Yêu cầu chi tiết sẽ được xác định sau khi khảo sát nghiệp vụ thực tế.

### 4.5. Lệnh điều xe

Hệ thống dự kiến hỗ trợ:

- Tạo yêu cầu điều xe.
- Quản lý thông tin chuyến đi.
- Quản lý phương tiện.
- Theo dõi trạng thái điều xe.
- In hoặc xuất lệnh điều xe.

Yêu cầu chi tiết sẽ được xác định sau khi khảo sát nghiệp vụ thực tế.

### 4.6. Quản lý nhân sự

Hệ thống dự kiến hỗ trợ quản lý thông tin nhân sự phục vụ các nghiệp vụ thuộc phạm vi Phòng Hành chính - Tổ chức.

Chi tiết dữ liệu và chức năng sẽ được xác định sau khi khảo sát nghiệp vụ.

## 5. Yêu cầu xác thực và phân quyền

Hệ thống dự kiến phải hỗ trợ:

- Đăng nhập người dùng.
- Xác thực tài khoản.
- Quản lý phiên đăng nhập.
- Quản lý vai trò.
- Quản lý quyền.
- Kiểm soát quyền truy cập chức năng.
- Kiểm soát quyền thực hiện thao tác trên dữ liệu.

Nguyên tắc:

> Người dùng chỉ được truy cập và thực hiện các chức năng phù hợp với quyền được cấp.

Chi tiết mô hình người dùng, vai trò và quyền sẽ được xác định trong phase Authentication & Authorization.

## 6. Yêu cầu giao diện

Giao diện hệ thống phải:

- Dễ sử dụng.
- Có cấu trúc rõ ràng.
- Có điều hướng nhất quán.
- Hiển thị tốt trên màn hình máy tính.
- Có khả năng mở rộng cho thiết bị có kích thước màn hình khác.
- Sử dụng thiết kế thống nhất giữa các module.
- Có trạng thái rõ ràng cho thao tác thành công và lỗi.
- Có thông báo phù hợp khi người dùng thực hiện thao tác.

Frontend sử dụng:

- React.
- TypeScript.
- Vite.
- Tailwind CSS.

---

## 7. Yêu cầu kỹ thuật

### 7.1. Frontend

Frontend sử dụng:

- React.
- TypeScript.
- Vite.
- Tailwind CSS.

### 7.2. Code

Code phải:

- Có cấu trúc rõ ràng.
- Dễ đọc.
- Dễ bảo trì.
- Có khả năng mở rộng.
- Hạn chế lặp code không cần thiết.
- Sử dụng TypeScript phù hợp.
- Được kiểm tra bằng ESLint.

### 7.3. Version Control

Dự án sử dụng:

- Git.
- GitHub.

Mỗi thay đổi quan trọng phải được commit với nội dung mô tả phù hợp.

## 8. Yêu cầu dữ liệu

Các nhóm dữ liệu dự kiến gồm:

- Người dùng.
- Vai trò.
- Quyền.
- Lãnh đạo.
- Lịch làm việc.
- Công việc.
- Todo.
- Công lệnh.
- Phương tiện.
- Lệnh điều xe.
- Nhân sự.

Mô hình dữ liệu chi tiết chưa được xác định trong giai đoạn Foundation.

Việc thiết kế database sẽ được thực hiện sau khi hoàn thành phân tích nghiệp vụ và xác định kiến trúc backend.

## 9. Yêu cầu bảo mật

Hệ thống phải hướng tới các nguyên tắc:

- Xác thực người dùng.
- Phân quyền truy cập.
- Không cho phép người dùng thực hiện chức năng vượt quá quyền được cấp.
- Bảo vệ thông tin tài khoản.
- Kiểm soát dữ liệu theo quyền.
- Ghi nhận các thao tác quan trọng khi cần thiết.

Các yêu cầu bảo mật chi tiết sẽ được xác định trong giai đoạn thiết kế Authentication, Authorization và Backend.

## 10. Yêu cầu mở rộng

Kiến trúc hệ thống phải cho phép mở rộng thêm các module trong tương lai mà không làm ảnh hưởng không cần thiết đến các module đã hoàn thành.

Các module dự kiến mở rộng:

- Quản lý công việc.
- Todo cá nhân.
- Công lệnh.
- Điều xe.
- Nhân sự.
- Báo cáo.
- Thông báo.
- Backend API.
- Cơ sở dữ liệu.

Việc mở rộng phải được thực hiện theo TASK riêng và phải được cập nhật vào documentation.

## 11. Nguyên tắc quản lý yêu cầu

1. Yêu cầu phải được mô tả rõ ràng.
2. Yêu cầu phải xác định được phạm vi.
3. Yêu cầu chưa khảo sát phải được đánh dấu là dự kiến.
4. Không tự ý thêm yêu cầu ngoài phạm vi TASK.
5. Thay đổi yêu cầu phải được ghi nhận trong documentation.
6. Yêu cầu phải có khả năng kiểm tra hoặc nghiệm thu.
7. Các yêu cầu nghiệp vụ quan trọng phải được xác nhận trước khi triển khai.
8. Khi yêu cầu thay đổi, phải đánh giá ảnh hưởng đến thiết kế, code, kiểm thử và tiến độ.
