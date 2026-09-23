# TASK-04 — Xây dựng hệ thống tài liệu dự án

## 1. Thông tin TASK

| Nội dung                 | Thông tin                                                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| **TASK ID**              | TASK-04                                                                                                          |
| **Tên TASK**             | Documentation — Xây dựng hệ thống tài liệu dự án                                                                 |
| **Phase**                | Phase 0 — Foundation                                                                                             |
| **Trạng thái**           | 🟡 IN ROGRESS                                                                                                    |
| **Mục tiêu chính**       | Xây dựng hệ thống tài liệu chính thức, có cấu trúc và có khả năng theo dõi xuyên suốt quá trình phát triển dự án |
| **TASK trước**           | TASK-03 — Git/GitHub                                                                                             |
| **Dependency**           | TASK-01 → TASK-02 → TASK-03 → TASK-04                                                                            |
| **TASK tiếp theo**       | TASK-05 — Layout                                                                                                 |
| **Công nghệ liên quan**  | Markdown, Git, GitHub                                                                                            |
| **Người thực hiện**      | Developer + AI/Mentor                                                                                            |
| **Phạm vi**              | Project Documentation + Task Documentation + README                                                              |
| **Trạng thái cuối cùng** | Chưa xác lập — chỉ xác lập PASS sau khi hoàn thành đầy đủ quy trình đóng TASK                                    |

---

## 2. Mục tiêu

TASK-04 xây dựng hệ thống tài liệu chính thức cho dự án **HC-TC Office**, làm cơ sở để:

- Hiểu thống nhất mục tiêu và phạm vi dự án.
- Quản lý requirements.
- Quản lý roadmap.
- Quản lý TASK và dependency.
- Quy định cách phát triển phần mềm.
- Quy định Git/GitHub.
- Quy định cách xây dựng và cập nhật documentation.
- Theo dõi tiến độ dự án.
- Ghi nhận quá trình thực hiện từng TASK.
- Giảm tình trạng thông tin bị phân tán hoặc mâu thuẫn giữa các tài liệu.
- Tạo cơ sở để Developer và AI/Mentor làm việc theo cùng một quy trình.

Mục tiêu của TASK không chỉ là tạo các file Markdown, mà là thiết lập **một hệ thống documentation có quy tắc và có nguồn thông tin chính thức rõ ràng**.

---

## 3. Phạm vi

### 3.1. Trong phạm vi TASK

TASK-04 bao gồm:

1. Xây dựng thư mục tài liệu dự án.
2. Xây dựng Project Documentation.
3. Xây dựng Task Documentation.
4. Chuẩn hóa README.md.
5. Xây dựng Development Rules.
6. Xây dựng Git/GitHub Rules.
7. Xây dựng Documentation Rules.
8. Xây dựng Progress Documentation.
9. Xác định nguồn thông tin chính thức cho từng loại dữ liệu.
10. Xác định quy trình cập nhật documentation.
11. Review tính nhất quán giữa các tài liệu.
12. Commit documentation sau khi đạt điều kiện kiểm tra.

### 3.2. Ngoài phạm vi TASK

Không thực hiện trong TASK-04:

- Phát triển chức năng nghiệp vụ mới.
- Xây dựng UI của ứng dụng.
- Xây dựng backend.
- Xây dựng database.
- Xây dựng API.
- Authentication/Authorization.
- Triển khai production.
- Tự ý thay đổi roadmap đã được xác định.
- Tự ý bổ sung requirements nghiệp vụ chưa được khảo sát/xác nhận.

Nếu phát hiện nhu cầu ngoài phạm vi, nhu cầu đó phải được ghi nhận và xử lý theo quy trình quản lý requirement/scope của dự án.

---

## 4. Dependency

TASK-04 phụ thuộc vào các TASK đã hoàn thành:

```text
TASK-01
Khởi tạo dự án
    ↓
TASK-02
Chuẩn hóa cấu trúc
    ↓
TASK-03
Git/GitHub
    ↓
TASK-04
Documentation
```

TASK-04 chỉ được triển khai sau khi TASK-01, TASK-02 và TASK-03 đạt trạng thái PASS.

TASK tiếp theo:

```text
TASK-04
Documentation
    ↓
TASK-05
Layout
```

TASK-05 không được bắt đầu khi TASK-04 chưa đạt điều kiện PASS.

---

## 5. Cấu trúc Documentation

Hệ thống tài liệu được tổ chức theo hai cấp chính:

```text
docs/
│
├── TASK-01-khoi-tao-du-an.md
├── TASK-02-chuan-hoa-cau-truc.md
├── TASK-03-git-github.md
├── TASK-04-document.md
│
└── 00-project/
    ├── 01-project-overview.md
    ├── 02-requirements.md
    ├── 03-roadmap.md
    ├── 04-task-management.md
    ├── 05-development-rules.md
    ├── 06-git-github-rules.md
    ├── 07-documentation-rules.md
    └── 08-progress.md
```

### 5.1. Project Documentation

Thư mục:

```text
docs/00-project/
```

chứa các tài liệu có phạm vi toàn dự án.

### 5.2. Task Documentation

Các file:

```text
docs/TASK-XX-ten-task.md
```

ghi lại thông tin và quá trình thực hiện của từng TASK.

---

## 6. Hệ thống Project Documentation

### 6.1. `01-project-overview.md`

Nguồn chính thức về:

- Tổng quan dự án.
- Mục tiêu.
- Người dùng.
- Phạm vi tổng thể.
- Công nghệ.
- Định hướng phát triển.

### 6.2. `02-requirements.md`

Nguồn chính thức về:

- Requirements.
- Phạm vi nghiệp vụ.
- Functional requirements.
- Non-functional requirements.
- Các yêu cầu cần khảo sát/xác nhận.

Requirements chưa được xác nhận phải được đánh dấu phù hợp, ví dụ:

```text
Proposed
Pending Confirmation
```

Không tự ý coi requirement chưa xác nhận là requirement đã chốt.

### 6.3. `03-roadmap.md`

Nguồn chính thức về:

- Phase.
- Thứ tự phát triển.
- Nhóm TASK.
- Dependency ở cấp roadmap.

### 6.4. `04-task-management.md`

Nguồn chính thức về:

- Quy trình quản lý TASK.
- TASK lifecycle.
- Điều kiện chuyển trạng thái.
- Dependency.
- Acceptance Criteria.
- Self-Test.
- AI/Mentor Review.
- Documentation.
- Git Commit.
- Progress Update.
- TASK PASS.

### 6.5. `05-development-rules.md`

Nguồn chính thức về:

- Quy tắc TypeScript.
- React.
- State.
- Hooks.
- Naming.
- Services/API.
- Error handling.
- Tailwind CSS.
- Responsive UI.
- Accessibility.
- Forms.
- Performance.
- Security.
- Testing.
- Lint/build.
- AI-assisted development.
- Bug fixing.
- Refactoring.
- Scope discipline.

### 6.6. `06-git-github-rules.md`

Nguồn chính thức về:

- Git workflow.
- GitHub.
- Branch.
- Commit.
- Push.
- Diff.
- Status.
- Recovery.
- Commit message.
- Quy tắc quản lý repository.

### 6.7. `07-documentation-rules.md`

Nguồn chính thức về:

- Phân loại documentation.
- Cấu trúc thư mục.
- Quy tắc đặt tên.
- Markdown.
- Task Documentation.
- Documentation update.
- Single Source of Truth.
- Review.
- Quality Gate.
- Traceability.
- Documentation integrity.

### 6.8. `08-progress.md`

Nguồn chính thức duy nhất về **tiến độ động của dự án**:

- TASK hiện tại.
- Phase progress.
- TASK status.
- Current TASK.
- Last TASK.
- Next TASK.
- FAIL.
- BLOCKED.
- Status history.
- Progress update.

Các tài liệu khác **không được tạo một bản sao độc lập của thông tin tiến độ hiện tại**.

---

## 7. Nguyên tắc Single Source of Truth

Mỗi loại thông tin quan trọng phải có **một nguồn chính thức**.

Ví dụ:

```text
Project Overview
      ↓
01-project-overview.md

Requirements
      ↓
02-requirements.md

Roadmap
      ↓
03-roadmap.md

Task Rules
      ↓
04-task-management.md

Development Rules
      ↓
05-development-rules.md

Git Rules
      ↓
06-git-github-rules.md

Documentation Rules
      ↓
07-documentation-rules.md

Dynamic Progress
      ↓
08-progress.md
```

Các tài liệu khác có thể tham chiếu đến nguồn chính thức nhưng không tạo ra phiên bản thông tin cạnh tranh.

---

## 8. Quy tắc đối với README.md

`README.md` là **cổng vào của repository**, không phải nơi lưu toàn bộ documentation của dự án.

README cần giúp người đọc nhanh chóng hiểu:

- Dự án là gì.
- Dự án nhằm mục đích gì.
- Công nghệ chính.
- Cách cài đặt.
- Cách chạy.
- Cách kiểm tra.
- Cấu trúc repository.
- Hệ thống documentation.
- Nơi tìm thông tin chi tiết.

### 8.1. Thông tin không nên lưu cứng trong README

README không nên chứa các thông tin thay đổi thường xuyên như:

```text
❌ Phase hiện tại
❌ TASK hiện tại
❌ TASK hiện tại đang IN PROGRESS
❌ TASK tiếp theo
❌ Số lượng TASK đã PASS
❌ Tiến độ dự án theo thời điểm
```

Các thông tin này thuộc:

```text
docs/00-project/08-progress.md
```

README chỉ tham chiếu:

```text
Project Progress
→ docs/00-project/08-progress.md
```

### 8.2. Lý do

Việc tách thông tin ổn định và thông tin động giúp tránh:

```text
08-progress.md
    ↓
TASK-05

README.md
    ↓
TASK-04
```

từ đó giảm nguy cơ documentation không đồng bộ.

Nguyên tắc:

> **README = Stable Information**
> **08-progress.md = Dynamic Project Information**

---

## 9. Task Document

Mỗi TASK quan trọng phải có Task Document riêng.

Ví dụ:

```text
docs/TASK-04-document.md
```

Task Document phải giúp người đọc hiểu được:

- TASK là gì.
- TASK thuộc Phase nào.
- Dependency.
- Mục tiêu.
- Phạm vi.
- Subtasks.
- Acceptance Criteria.
- Kết quả thực hiện.
- Self-Test.
- AI/Mentor Review.
- Documentation.
- Git Commit.
- Progress Update.
- Điều kiện PASS.

### Cấu trúc chuẩn

Task Document sử dụng cấu trúc:

```text
1. Thông tin TASK
2. Mục tiêu
3. Phạm vi
4. Dependency
5. Subtasks
6. Acceptance Criteria
7. Kết quả thực hiện
8. Self-Test
9. AI/Mentor Review
10. Documentation
11. Git Commit
12. Progress Update
13. Kết luận TASK
```

Trong đó **“Thông tin TASK” phải đứng đầu** để người đọc có thể nắm tổng quan trước khi đọc chi tiết.

---

## 10. Subtasks của TASK-04

### 04.1. Tạo Documentation folder

**Mục tiêu:** Tạo cấu trúc thư mục tài liệu.

**Kết quả dự kiến:**

```text
docs/
```

**Trạng thái:** DONE

---

### 04.2. Tạo Project Documentation Structure

**Mục tiêu:** Tạo hệ thống tài liệu dự án.

**Kết quả:**

```text
docs/00-project/
├── 01-project-overview.md
├── 02-requirements.md
├── 03-roadmap.md
├── 04-task-management.md
├── 05-development-rules.md
├── 06-git-github-rules.md
├── 07-documentation-rules.md
└── 08-progress.md
```

**Trạng thái:** DONE

---

### 04.3. Development Rules

**Mục tiêu:** Xây dựng quy tắc phát triển phần mềm.

**File:**

```text
docs/00-project/05-development-rules.md
```

**Trạng thái:** DONE

---

### 04.4. Git/GitHub Rules

**Mục tiêu:** Xây dựng quy tắc quản lý source code bằng Git/GitHub.

**File:**

```text
docs/00-project/06-git-github-rules.md
```

**Trạng thái:** DONE

---

### 04.5. Documentation Rules

**Mục tiêu:** Xây dựng quy tắc quản lý documentation.

**File:**

```text
docs/00-project/07-documentation-rules.md
```

**Trạng thái:** DONE

---

### 04.6. Progress Documentation

**Mục tiêu:** Xây dựng nguồn chính thức để quản lý tiến độ.

**File:**

```text
docs/00-project/08-progress.md
```

**Trạng thái:** IN PROGRESS

---

### 04.7. Review toàn bộ Documentation

**Mục tiêu:** Kiểm tra tính nhất quán và đầy đủ của hệ thống documentation.

Phạm vi review:

- 8 Project Documentation files.
- Task Documentation.
- README.md.
- Cross-document consistency.
- Single Source of Truth.
- Dependency.
- Workflow.
- Progress integrity.
- Markdown integrity.

**Trạng thái:** PENDING

---

### 04.8. Commit TASK-04

**Mục tiêu:** Commit toàn bộ thay đổi thuộc phạm vi TASK-04 sau khi đạt điều kiện kiểm tra.

Các bước:

```text
git status
    ↓
git diff
    ↓
git diff --cached
    ↓
git commit
```

Commit message phải phản ánh đúng nội dung thay đổi.

**Trạng thái:** PENDING

---

### 04.9. Cập nhật Progress và hoàn tất đóng TASK-04

**Mục tiêu:** Cập nhật trạng thái dự án sau khi commit và hoàn tất điều kiện đóng TASK.

Quy trình:

```text
Review
   ↓
Documentation
   ↓
Git Commit
   ↓
Progress Update
   ↓
TASK PASS
```

**Trạng thái:** PENDING

---

## 11. Acceptance Criteria

TASK-04 chỉ đạt điều kiện nghiệm thu khi:

### Documentation

- [ ] Có thư mục `docs/`.
- [ ] Có đầy đủ 8 Project Documentation files.
- [ ] Có `TASK-04-document.md`.
- [ ] README.md được chuẩn hóa.
- [ ] Không còn README mặc định không phù hợp với dự án.
- [ ] Documentation có cấu trúc rõ ràng.

### Consistency

- [ ] Project Overview nhất quán với Requirements.
- [ ] Requirements nhất quán với Roadmap.
- [ ] Roadmap nhất quán với Task Management.
- [ ] Development Rules không mâu thuẫn với Task Management.
- [ ] Git Rules không mâu thuẫn với Task Management.
- [ ] Documentation Rules phù hợp với cấu trúc thực tế.
- [ ] Progress phù hợp với trạng thái TASK thực tế.
- [ ] README không tạo nguồn thông tin tiến độ cạnh tranh với `08-progress.md`.

### Single Source of Truth

- [ ] Mỗi loại thông tin quan trọng có nguồn chính thức.
- [ ] `08-progress.md` là nguồn chính thức cho thông tin tiến độ động.
- [ ] Không có bản sao độc lập của TASK hiện tại ở README.
- [ ] Không có thông tin tiến độ mâu thuẫn giữa các tài liệu.

### Quality

- [ ] Markdown hợp lệ.
- [ ] Code fence đúng.
- [ ] Mermaid hợp lệ nếu có.
- [ ] Không có nội dung bị cắt/truncated.
- [ ] Không có nội dung tạm thời được coi là nguồn chính thức.
- [ ] Không có file backup/duplicate làm nguồn tài liệu chính thức.
- [ ] Nội dung phản ánh đúng trạng thái thực tế trong phạm vi TASK.

---

## 12. Self-Test

Trước khi yêu cầu AI/Mentor Review, Developer phải tự kiểm tra:

### File System

```powershell
Get-ChildItem docs
Get-ChildItem docs/00-project
```

### Git

```powershell
git status
git diff
git diff --cached
```

### Documentation

Kiểm tra:

- Tên file.
- Cấu trúc.
- Nội dung.
- Link nội bộ.
- Code fence.
- Mermaid.
- Không có nội dung trùng hoặc mâu thuẫn.

### Project

Kiểm tra:

```powershell
npm run lint
npm run build
```

Lưu ý:

`npm run dev` là lệnh chạy development server để kiểm tra runtime/UI thủ công; không được coi là automated test.

---

## 13. AI/Mentor Review

AI/Mentor Review phải đánh giá tối thiểu:

1. Accuracy.
2. Consistency.
3. Completeness.
4. Maintainability.
5. Traceability.
6. Workflow Integrity.
7. Dependency Integrity.
8. Documentation Integrity.
9. Progress Integrity.
10. AI Usability.

Kết quả review phải được ghi nhận trong Task Document.

### Quy tắc

AI/Mentor Review **không đồng nghĩa với TASK PASS**.

Ví dụ:

```text
AI/Mentor Review
       ↓
   REVIEW PASS
       ↓
Documentation
       ↓
Git Commit
       ↓
Progress Update
       ↓
TASK PASS
```

---

## 14. Documentation Update

Documentation của TASK phải được cập nhật theo kết quả thực tế.

Không ghi nhận:

- TASK PASS khi chưa đủ điều kiện.
- Commit khi chưa commit.
- Review PASS khi review chưa thực hiện.
- Progress hoàn thành khi chưa cập nhật.

Documentation phải phản ánh đúng trạng thái thực tế.

---

## 15. Git Commit

Commit TASK-04 chỉ được thực hiện sau khi:

- Acceptance Criteria được kiểm tra.
- Self-Test hoàn thành.
- Documentation được review.
- Các thay đổi đúng phạm vi TASK.
- Git status được kiểm tra.
- Git diff được kiểm tra.
- Staged diff được kiểm tra.

Commit dự kiến:

```bash
git add docs/ README.md
```

Sau khi kiểm tra:

```bash
git diff --cached
```

Commit message dự kiến:

```bash
git commit -m "docs(task-04): complete project documentation"
```

Commit message phải được xác nhận lại theo nội dung thực tế ngay trước khi commit.

---

## 16. Progress Update

Sau khi Git Commit hoàn thành, `08-progress.md` phải được cập nhật.

Progress Update phải phản ánh:

- Trạng thái TASK-04.
- Subtask status.
- Current TASK.
- Last TASK.
- Next TASK.
- Status history.
- Dependency.

Không cập nhật trạng thái theo cảm tính.

Chỉ cập nhật dựa trên bằng chứng thực tế:

```text
Review
+
Documentation
+
Git Commit
+
Progress Update
```

---

## 17. Quy trình đóng TASK-04

TASK-04 được đóng theo đúng thứ tự:

```text
┌─────────────────────┐
│ Acceptance Criteria │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│     Self-Test       │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│  AI/Mentor Review   │
└──────────┬──────────┘
           ↓
      Review đạt?
       ↙       ↘
     Không       Có
      ↓           ↓
    FAIL    Documentation
                  ↓
             Git Commit
                  ↓
           Progress Update
                  ↓
                PASS
```

### Quy tắc quan trọng

**Không xác lập PASS ở giữa workflow.**

Đặc biệt:

```text
Review PASS
≠
TASK PASS
```

Và:

```text
Git Commit
≠
TASK PASS
```

Chỉ sau khi hoàn thành:

```text
Review
→ Documentation
→ Git Commit
→ Progress Update
```

mới được xác lập:

```text
🟢 TASK-04 PASS
```

---

## 18. Kết quả thực hiện

Phần này được cập nhật sau khi thực hiện thực tế.

### Documentation

- [ ] Documentation folder
- [ ] Project Documentation
- [ ] Task Documentation
- [ ] README.md

### Review

- [ ] Self-Test
- [ ] AI/Mentor Review
- [ ] Cross-document Review

### Git

- [ ] Commit
- [ ] Push
- [ ] Working tree clean

### Progress

- [ ] `08-progress.md` updated
- [ ] TASK-04 status updated
- [ ] Next TASK authorized

---

## 19. Git Commit Record

Phần này chỉ được điền sau khi commit thực tế.

| Nội dung       | Kết quả        |
| -------------- | -------------- |
| Commit Hash    | Chưa thực hiện |
| Commit Message | Chưa thực hiện |
| Branch         | `main`         |
| Push           | Chưa thực hiện |
| Working Tree   | Chưa xác nhận  |

Không ghi Commit Hash hoặc Push = Done trước khi có bằng chứng thực tế.

---

## 20. Review Record

Phần này được cập nhật sau mỗi lần review chính thức.

| Nội dung              | Trạng thái |
| --------------------- | ---------- |
| Documentation Review  | PENDING    |
| Cross-document Review | PENDING    |
| Acceptance Criteria   | PENDING    |
| Self-Test             | PENDING    |
| AI/Mentor Review      | PENDING    |

Các vấn đề phát hiện trong review phải được ghi nhận và xử lý trước khi đóng TASK.

---

## 21. Change Log

| Ngày          | Thay đổi               | Người thực hiện       |
| ------------- | ---------------------- | --------------------- |
| Chưa cập nhật | Khởi tạo Task Document | Developer + AI/Mentor |

Các thay đổi tiếp theo phải được bổ sung theo tiến trình thực tế.

---

## 22. Kết luận TASK

### Trạng thái hiện tại

```text
🟡 IN PROGRESS
```

TASK-04 chưa được xác lập PASS.

### Điều kiện để PASS

TASK-04 chỉ được xác lập:

```text
🟢 PASS
```

khi tất cả điều kiện sau đã hoàn thành:

```text
Acceptance Criteria
        +
Self-Test
        +
AI/Mentor Review
        +
Documentation
        +
Git Commit
        +
Progress Update
        =
TASK-04 PASS
```

Sau khi TASK-04 PASS, TASK-05 mới được phép chuyển sang trạng thái phù hợp theo `08-progress.md`.

---

## 23. Nguyên tắc cuối cùng

> **Code, Documentation, Git, Progress và Project Reality phải phản ánh cùng một sự thật.**

Không để xảy ra tình trạng:

```text
Code        ≠ Documentation
Documentation ≠ Git
Git         ≠ Progress
Progress    ≠ Project Reality
```

TASK-04 không chỉ hoàn thành việc tạo các file Markdown.

**TASK-04 hoàn thành khi dự án có một hệ thống documentation có cấu trúc, có nguồn thông tin chính thức, có quy tắc cập nhật, có khả năng theo dõi tiến độ và phản ánh đúng trạng thái thực tế của dự án.**
