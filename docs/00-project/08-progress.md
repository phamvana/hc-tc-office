# HC-TC Office — Project Progress

## 1. Mục đích

Tài liệu này dùng để theo dõi trạng thái và tiến độ thực tế của dự án **HC-TC Office**.

Mục tiêu:

- Theo dõi TASK hiện tại.
- Theo dõi TASK đã hoàn thành.
- Theo dõi TASK tiếp theo.
- Theo dõi tiến độ từng Phase.
- Theo dõi Dependency giữa các TASK.
- Ghi nhận TASK FAIL và BLOCKED.
- Liên kết Progress với Documentation và Git.
- Đảm bảo trạng thái dự án phản ánh đúng thực tế.

---

# 2. Single Source of Truth

File:

```text
docs/00-project/08-progress.md
```

là **Single Source of Truth cho:**

- TASK Status.
- Phase Progress.
- Current TASK.
- Last Completed TASK.
- Next TASK.
- Tiến độ thực tế của dự án.

Các tài liệu khác có thể mô tả quy trình hoặc kế hoạch, nhưng khi cần xác định **trạng thái hiện tại của TASK**, phải ưu tiên `08-progress.md`.

`08-progress.md` không phải Single Source of Truth cho toàn bộ thông tin của dự án.

Các nguồn chính khác:

| Nội dung            | Tài liệu chính              |
| ------------------- | --------------------------- |
| Tổng quan dự án     | `01-project-overview.md`    |
| Requirements        | `02-requirements.md`        |
| Roadmap             | `03-roadmap.md`             |
| TASK Workflow       | `04-task-management.md`     |
| Development Rules   | `05-development-rules.md`   |
| Git/GitHub Rules    | `06-git-github-rules.md`    |
| Documentation Rules | `07-documentation-rules.md` |
| TASK/Phase Progress | `08-progress.md`            |

---

# 3. Status Definition

Dự án sử dụng 5 trạng thái chính:

| Status         | Ý nghĩa                                      |
| -------------- | -------------------------------------------- |
| ⬜ TODO        | TASK chưa bắt đầu                            |
| 🟡 IN PROGRESS | TASK đang được thực hiện                     |
| 🔴 FAIL        | TASK chưa đạt Acceptance Criteria            |
| ⏸️ BLOCKED     | TASK bị chặn và chưa thể tiếp tục            |
| 🟢 PASS        | TASK đã hoàn thành đầy đủ và được nghiệm thu |

---

# 4. TASK State Transition

Workflow trạng thái:

```text
⬜ TODO
   ↓
🟡 IN PROGRESS
   ↓
Implementation
   ↓
Self-Test
   ↓
AI/Mentor Review
   ↓
Documentation
   ↓
Git Commit
   ↓
Progress Update
   ↓
🟢 PASS
```

Nếu Review không đạt:

```text
AI/Mentor Review
       ↓
 {Review đạt?}
    ↙      ↘
  Không      Có
   ↓          ↓
🔴 FAIL   Documentation
              ↓
          Git Commit
              ↓
        Progress Update
              ↓
          🟢 PASS
```

Nếu TASK bị chặn:

```text
🟡 IN PROGRESS
       ↓
⏸️ BLOCKED
       ↓
Giải quyết nguyên nhân
       ↓
🟡 IN PROGRESS
```

---

# 5. Điều kiện chuyển trạng thái

## 5.1. TODO → IN PROGRESS

TASK được chuyển sang `🟡 IN PROGRESS` khi:

- TASK đã được xác định trong Project Plan/Roadmap.
- Scope đã rõ.
- Acceptance Criteria đã được xác định.
- Dependency bắt buộc đã được kiểm tra.
- Dependency bắt buộc không ở trạng thái FAIL hoặc BLOCKED.
- TASK được phép triển khai theo Project Plan.

AI Assistant không được tự ý kích hoạt TASK chỉ vì nhận thấy đó là TASK tiếp theo.

---

# 6. IN PROGRESS → FAIL

TASK chuyển sang `🔴 FAIL` khi:

- Không đạt Acceptance Criteria.
- Có lỗi thuộc phạm vi TASK chưa được xử lý.
- Self-Test không đạt.
- AI/Mentor Review phát hiện vấn đề cần sửa.
- Code hoặc UI không đáp ứng yêu cầu đã xác định.

TASK FAIL phải có ghi nhận:

- Criterion không đạt.
- Evidence.
- Root Cause.
- Impact.
- Solution.
- Retest Result.

---

# 7. IN PROGRESS → BLOCKED

TASK chuyển sang `⏸️ BLOCKED` khi không thể tiếp tục vì nguyên nhân bên ngoài khả năng xử lý ngay.

Các nhóm BLOCKED:

### 7.1. Requirement

- Requirement chưa rõ.
- Acceptance Criteria chưa đủ.
- Có mâu thuẫn về yêu cầu.

### 7.2. Dependency

- TASK phụ thuộc chưa PASS.
- API chưa sẵn sàng.
- Module phụ thuộc chưa hoàn thành.

### 7.3. Technical / Infrastructure

Ví dụ:

- Server lỗi.
- Database chưa sẵn sàng.
- Environment lỗi.
- Công cụ phát triển gặp vấn đề.

### 7.4. Resource / Knowledge

Ví dụ:

- Thiếu dữ liệu.
- Thiếu quyền truy cập.
- Thiếu tài liệu.
- Thiếu kiến thức cần thiết.

BLOCKED phải ghi rõ:

```text
TASK
Nguyên nhân
Ảnh hưởng
Điều kiện để tiếp tục
Người cần xử lý
```

---

# 8. BLOCKED → IN PROGRESS

TASK được chuyển từ:

```text
⏸️ BLOCKED
```

sang:

```text
🟡 IN PROGRESS
```

khi nguyên nhân BLOCKED đã được giải quyết hoặc có quyết định cho phép tiếp tục theo quy định của Project.

Phải ghi nhận:

- Nguyên nhân BLOCKED đã được giải quyết.
- Điều kiện tiếp tục đã được đáp ứng.
- Nếu có ngoại lệ, phải có lý do và người có thẩm quyền phê duyệt.

---

# 9. IN PROGRESS → PASS

TASK chỉ được chuyển sang:

```text
🟢 PASS
```

sau khi hoàn thành đầy đủ:

- Acceptance Criteria đạt.
- Self-Test đạt.
- AI/Mentor Review đạt.
- Documentation hoàn thành.
- Git Commit hoàn thành.
- Progress Update hoàn thành.

Chuỗi bắt buộc:

```text
Review
  ↓
Documentation
  ↓
Git Commit
  ↓
Progress Update
  ↓
🟢 TASK PASS
```

**Progress Update phải hoàn tất trước khi TASK được xác lập PASS.** Trong bước Progress Update, trạng thái của TASK được cập nhật theo bằng chứng hoàn thành và các điều kiện đóng TASK. Sau khi Progress Update hoàn tất, TASK mới được xác lập trạng thái cuối cùng là 🟢 PASS.

Không được xác lập PASS ở giữa workflow.

---

# 10. Dependency Authorization

Trước khi bắt đầu một TASK có Dependency, phải kiểm tra:

### Điều kiện 1 — TASK đã được kích hoạt

TASK phải được xác định trong Project Plan/Roadmap hoặc được người quản lý dự án cho phép thực hiện.

### Điều kiện 2 — Dependency đã PASS

Tất cả Dependency bắt buộc phải:

```text
🟢 PASS
```

### Điều kiện 3 — Không có Dependency bắt buộc FAIL/BLOCKED

Không được bắt đầu TASK nếu Dependency bắt buộc đang:

```text
🔴 FAIL
```

hoặc:

```text
⏸️ BLOCKED
```

### Ngoại lệ

Nếu cần tiếp tục trong trường hợp Dependency đang BLOCKED, phải có:

- PM/Project Owner authorization.
- Lý do.
- Đánh giá ảnh hưởng.
- Ghi nhận thay đổi trong Documentation hoặc Change Log phù hợp.

AI Assistant không được tự ý bỏ qua Dependency.

---

# 11. Phase Progress

Các Phase hiện tại của dự án:

| Phase    | Nội dung                       | Trạng thái     |
| -------- | ------------------------------ | -------------- |
| Phase 0  | Project Foundation             | 🟡 IN PROGRESS |
| Phase 1  | Leadership Schedule            | ⬜ TODO        |
| Phase 2  | Authentication & Authorization | ⬜ TODO        |
| Phase 3  | Work Management                | ⬜ TODO        |
| Phase 4  | Personal Todo                  | ⬜ TODO        |
| Phase 5  | Work Orders                    | ⬜ TODO        |
| Phase 6  | Vehicle Dispatch               | ⬜ TODO        |
| Phase 7  | Human Resources                | ⬜ TODO        |
| Phase 8  | HC-TC Requirements Survey      | ⬜ TODO        |
| Phase 9  | Backend                        | ⬜ TODO        |
| Phase 10 | Frontend–Backend Integration   | ⬜ TODO        |
| Phase 11 | Testing                        | ⬜ TODO        |
| Phase 12 | Deployment                     | ⬜ TODO        |

---

# 12. TASK Progress

## Phase 0 — Project Foundation

| TASK    | Nội dung                           | Status         | Commit    |
| ------- | ---------------------------------- | -------------- | --------- |
| TASK-01 | Khởi tạo Vite + React + TypeScript | 🟢 PASS        | `456b943` |
| TASK-02 | Chuẩn hóa cấu trúc project         | 🟢 PASS        | `0e32ca5` |
| TASK-03 | Git + GitHub                       | 🟢 PASS        | `891dfdf` |
| TASK-04 | Documentation                      | 🟡 IN PROGRESS | —         |

### Trạng thái hiện tại

```text
TASK-01  🟢 PASS
TASK-02  🟢 PASS
TASK-03  🟢 PASS
TASK-04  🟡 IN PROGRESS
```

**Không sử dụng chỉ số tổng hợp không phản ánh chính xác số TASK thực tế.**

Tiến độ Phase 0 hiện được xác định trực tiếp từ bảng TASK ở trên.

---

# 13. TASK-04 Progress

TASK hiện tại:

```text
TASK-04 — Documentation
Status: 🟡 IN PROGRESS
```

Các công việc:

| Subtask | Nội dung                                   | Status         |
| ------- | ------------------------------------------ | -------------- |
| 04.1    | Tạo thư mục Documentation                  | 🟢 Done        |
| 04.2    | Tạo cấu trúc Project Documentation         | 🟢 Done        |
| 04.3    | Development Rules                          | 🟢 Done        |
| 04.4    | Git/GitHub Rules                           | 🟢 Done        |
| 04.5    | Documentation Rules                        | 🟢 Done        |
| 04.6    | Progress Documentation                     | 🟢 Done        |
| 04.7    | Review toàn bộ Documentation               | 🟡 In Progress |
| 04.8    | Commit TASK-04                             | ⬜ Pending     |
| 04.9    | Cập nhật Progress và hoàn tất đóng TASK-04 | ⬜ Pending     |

---

# 14. TASK-04 Dependency

TASK-04 phụ thuộc:

```text
TASK-01
   ↓
TASK-02
   ↓
TASK-03
   ↓
TASK-04
```

Hiện tại:

```text
TASK-01  🟢 PASS
TASK-02  🟢 PASS
TASK-03  🟢 PASS
TASK-04  🟡 IN PROGRESS
```

Dependency của TASK-04 đã đáp ứng điều kiện để thực hiện.

---

# 15. FAIL Tracking

Các TASK FAIL phải được ghi nhận trong bảng:

| TASK | Criterion | Root Cause | Solution | Retest |
| ---- | --------- | ---------- | -------- | ------ |
| —    | —         | —          | —        | —      |

Nếu phát sinh FAIL mới, phải bổ sung vào bảng.

---

# 16. BLOCKED Tracking

Các TASK BLOCKED phải được ghi nhận:

| TASK | Category | Reason | Impact | Condition to Resume |
| ---- | -------- | ------ | ------ | ------------------- |
| —    | —        | —      | —      | —                   |

Hiện tại chưa có TASK BLOCKED.

---

# 17. Status Change History

Mọi thay đổi trạng thái quan trọng phải được ghi nhận.

| Date       | TASK    | From        | To          | Reason                                 |
| ---------- | ------- | ----------- | ----------- | -------------------------------------- |
| 2026-09-16 | TASK-01 | TODO        | IN PROGRESS | Khởi tạo project                       |
| 2026-09-16 | TASK-01 | IN PROGRESS | PASS        | Hoàn thành Acceptance Criteria         |
| 2026-09-16 | TASK-02 | TODO        | IN PROGRESS | Chuẩn hóa cấu trúc                     |
| 2026-09-16 | TASK-02 | IN PROGRESS | PASS        | Hoàn thành Acceptance Criteria         |
| 2026-09-16 | TASK-03 | TODO        | IN PROGRESS | Thiết lập Git/GitHub                   |
| 2026-09-16 | TASK-03 | IN PROGRESS | PASS        | Git/GitHub workflow đạt                |
| 2026-09-16 | TASK-04 | TODO        | IN PROGRESS | Bắt đầu xây dựng Project Documentation |

Khi có thay đổi trạng thái mới, bổ sung một dòng thay vì sửa mất lịch sử cũ.

---

# 18. Git và Progress

Progress phải liên kết với Git.

Một TASK không được xác lập PASS nếu:

```text
Documentation
```

chưa hoàn thành hoặc:

```text
Git Commit
```

chưa hoàn thành.

Quy trình:

```text
Implementation
      ↓
Self-Test
      ↓
AI/Mentor Review
      ↓
Documentation
      ↓
Git Commit
      ↓
Progress Update
      ↓
🟢 TASK PASS
```

Git Commit phải phản ánh đúng thay đổi của TASK.

Commit không được chứa:

- File tạm.
- Secret.
- Password.
- API key.
- Thay đổi ngoài Scope.
- File backup không cần thiết.
- ZIP trao đổi không phải Source of Truth.

---

# 19. Progress Update Moments

`08-progress.md` phải được cập nhật khi có một trong các sự kiện:

### 19.1. TASK bắt đầu

```text
TODO
  ↓
IN PROGRESS
```

### 19.2. TASK bị BLOCKED

```text
IN PROGRESS
  ↓
BLOCKED
```

### 19.3. TASK được giải quyết BLOCKED

```text
BLOCKED
  ↓
IN PROGRESS
```

### 19.4. TASK hoàn thành

Chỉ sau khi:

```text
Review
  ↓
Documentation
  ↓
Git Commit
  ↓
Progress Update
```

mới xác lập:

```text
🟢 PASS
```

---

# 20. Progress Review

Progress phải được review:

- Sau mỗi TASK.
- Khi thay đổi Roadmap.
- Khi thay đổi Requirement có ảnh hưởng đến tiến độ.
- Khi có TASK FAIL.
- Khi có TASK BLOCKED.
- Khi kết thúc một Phase.

Mục tiêu là đảm bảo Progress phản ánh đúng Project Reality.

---

# 21. Quy tắc không được làm sai lệch Progress

Không được:

- Đánh dấu PASS để tạo cảm giác dự án đã hoàn thành.
- Ghi TASK PASS khi chưa có Git Commit.
- Ghi TASK PASS khi Documentation chưa hoàn thành.
- Ghi TASK PASS khi Progress chưa được cập nhật.
- Ghi số liệu tổng hợp không khớp bảng TASK.
- Đánh dấu TASK tiếp theo là IN PROGRESS khi TASK hiện tại chưa đáp ứng điều kiện chuyển tiếp.
- Che giấu TASK FAIL/BLOCKED.

Progress phải phản ánh:

```text
Project Reality
```

không phải:

```text
Desired Progress
```

---

# 22. Current Project Status

## Phase hiện tại

```text
Phase 0 — Project Foundation
Status: 🟡 IN PROGRESS
```

## Current TASK

```text
TASK-04 — Documentation
Status: 🟡 IN PROGRESS
```

## Last Completed TASK

```text
TASK-03 — Git + GitHub
Status: 🟢 PASS
Commit: 891dfdf
```

## Next TASK

```text
TASK-05 — Layout
Status: ⬜ TODO
```

TASK-05 chỉ được bắt đầu sau khi TASK-04 đáp ứng đầy đủ điều kiện PASS và được phép chuyển tiếp theo Project Plan.

---

# 23. Immediate Next Actions

Thứ tự công việc hiện tại:

```text
1. Review toàn bộ 8 Project Documentation files
        ↓
2. Kiểm tra Cross-document Consistency
        ↓
3. Hoàn thiện TASK-04 Documentation
        ↓
4. Self-Test / Documentation Review
        ↓
5. Git status / diff / staged review
        ↓
6. Commit TASK-04
        ↓
7. Push GitHub
        ↓
8. Update 08-progress.md
        ↓
9. Xác lập 🟢 TASK-04 PASS
        ↓
10. Cho phép chuyển sang TASK-05
```

---

# 24. Checklist đóng TASK-04

```text
## Documentation
- [ ] 01-project-overview.md hoàn chỉnh
- [ ] 02-requirements.md hoàn chỉnh
- [ ] 03-roadmap.md hoàn chỉnh
- [ ] 04-task-management.md hoàn chỉnh
- [ ] 05-development-rules.md hoàn chỉnh
- [ ] 06-git-github-rules.md hoàn chỉnh
- [ ] 07-documentation-rules.md hoàn chỉnh
- [ ] 08-progress.md hoàn chỉnh

## Cross-document
- [ ] Không mâu thuẫn Workflow
- [ ] Không mâu thuẫn PASS condition
- [ ] Dependency nhất quán
- [ ] Scope nhất quán
- [ ] Documentation rules nhất quán
- [ ] Git rules nhất quán
- [ ] Progress phản ánh đúng thực tế

## Review
- [ ] AI/Mentor Review đạt
- [ ] Không còn lỗi BLOCKER
- [ ] Không còn lỗi Documentation Integrity

## Git
- [ ] git status
- [ ] git diff
- [ ] git diff --staged
- [ ] Git Commit
- [ ] Git Push

## Progress
- [ ] 08-progress.md cập nhật
- [ ] TASK-04 được xác lập PASS sau Progress Update

## Final
- [ ] 🟢 TASK-04 PASS
```

---

# 25. Quy tắc cuối cùng

Trạng thái của dự án phải phản ánh thực tế.

Không được xác lập:

```text
🟢 TASK PASS
```

chỉ vì:

- Code đã chạy.
- Review đã xong.
- Documentation đã xong.

Mà phải hoàn thành toàn bộ chuỗi:

```text
Review
  ↓
Documentation
  ↓
Git Commit
  ↓
Progress Update
  ↓
🟢 TASK PASS
```

Đây là quy tắc cuối cùng để đóng một TASK trong HC-TC Office.

> **Progress không phải là mục tiêu để đạt cho đẹp; Progress là bản ghi trung thực về trạng thái thực tế của dự án.**
