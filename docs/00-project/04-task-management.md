# HC-TC Office — Quy trình Quản lý TASK

## 1. Mục đích

Tài liệu này quy định cách quản lý, thực hiện, kiểm tra, nghiệm thu và đóng một TASK trong dự án **HC-TC Office**.

Mục tiêu:

- Chia nhỏ dự án thành các TASK có phạm vi rõ ràng.
- Kiểm soát thứ tự và dependency giữa các TASK.
- Đảm bảo mỗi TASK được thực hiện, kiểm tra và ghi nhận đầy đủ.
- Ngăn việc AI hoặc người phát triển tự ý mở rộng phạm vi.
- Đảm bảo Code, Documentation, Git và Progress phản ánh cùng một trạng thái thực tế.
- Tạo quy trình có thể sử dụng lâu dài cho cả người phát triển và AI Assistant.

---

# 2. TASK là gì?

TASK là một đơn vị công việc có:

- ID duy nhất.
- Tên rõ ràng.
- Mục tiêu.
- Phạm vi.
- Dependency.
- Acceptance Criteria.
- Kết quả cần đạt.
- Phương pháp kiểm tra.
- Documentation.
- Git Commit.
- Progress Status.

Ví dụ:

```text
TASK-01 — Khởi tạo dự án Vite + React + TypeScript
TASK-02 — Chuẩn hóa cấu trúc project
TASK-03 — Git + GitHub
TASK-04 — Documentation
TASK-05 — Layout
```

Mỗi TASK phải đủ nhỏ để có thể:

```text
Thực hiện
→ Kiểm tra
→ Review
→ Documentation
→ Git
→ Progress
→ PASS
```

---

# 3. Nguyên tắc quản lý TASK

## 3.1. Một TASK phải có phạm vi rõ ràng

Mỗi TASK phải xác định:

- Làm gì?
- Không làm gì?
- Kết quả mong muốn là gì?
- Điều kiện nào để PASS?

Không được thực hiện các chức năng nằm ngoài phạm vi TASK.

---

## 3.2. Không tự ý mở rộng Scope

Trong quá trình phát triển có thể phát hiện các vấn đề hoặc ý tưởng mới.

Không đưa ngay vào TASK hiện tại nếu chúng không thuộc phạm vi.

Thay vào đó:

```text
Phát hiện yêu cầu mới
        ↓
Ghi nhận
        ↓
Phân tích
        ↓
Xác định TASK phù hợp
        ↓
Đưa vào Roadmap / Project Plan
```

---

## 3.3. Không bỏ qua TASK Dependency

TASK phụ thuộc TASK khác chỉ được bắt đầu khi dependency cần thiết đã được hoàn thành.

Ví dụ:

```text
TASK-01
   ↓
TASK-02
   ↓
TASK-03
   ↓
TASK-04
   ↓
TASK-05
```

Không được tự ý nhảy sang TASK-05 nếu các dependency bắt buộc chưa PASS.

---

# 4. Status của TASK

Dự án sử dụng các trạng thái:

| Status         | Ý nghĩa                          |
| -------------- | -------------------------------- |
| ⬜ TODO        | Chưa bắt đầu                     |
| 🟡 IN PROGRESS | Đang thực hiện                   |
| 🔴 FAIL        | Không đạt Acceptance Criteria    |
| ⏸️ BLOCKED     | Bị chặn, chưa thể tiếp tục       |
| 🟢 PASS        | Đã hoàn thành và được nghiệm thu |

---

# 5. Vòng đời của một TASK

Một TASK đi qua quy trình:

```text
TODO
  ↓
IN PROGRESS
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
🟢 TASK PASS
```

Nếu phát sinh lỗi:

```text
Implementation / Self-Test / Review
          ↓
       🔴 FAIL
          ↓
       Fix
          ↓
      Re-test
          ↓
       Review
```

Nếu bị chặn:

```text
IN PROGRESS
     ↓
⏸️ BLOCKED
     ↓
Giải quyết nguyên nhân
     ↓
IN PROGRESS
```

---

# 6. Workflow chuẩn của TASK

## 6.1. Workflow đầy đủ

```text
Requirement
  ↓
Analysis
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
🟢 TASK PASS
```

Đây là workflow chuẩn của dự án.

---

## 6.2. Acceptance Review

Sau khi người phát triển hoàn thành phần Implementation và Self-Test, TASK được đưa vào Review.

Review kiểm tra:

1. Functional
2. Code Quality
3. UI/UX nếu có
4. Knowledge / Understanding
5. Documentation
6. Git
7. Scope
8. Acceptance Criteria

Review **không đồng nghĩa với TASK PASS**.

Sau Review đạt yêu cầu, vẫn phải hoàn thành:

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

---

# 7. Điều kiện để TASK được IN PROGRESS

TASK chỉ được chuyển sang `🟡 IN PROGRESS` khi:

- TASK đã được xác định trong Project Plan/Roadmap.
- Scope đã rõ ràng.
- Acceptance Criteria đã được xác định.
- Dependency bắt buộc đã được kiểm tra.
- Không có dependency bắt buộc đang FAIL hoặc BLOCKED.

Việc AI tự nhận thấy TASK tiếp theo cần làm **không đủ để tự động kích hoạt TASK**.

---

# 8. Dependency Authorization

Trước khi bắt đầu TASK có dependency, phải kiểm tra:

### Điều kiện 1 — TASK đã được kích hoạt

TASK phải nằm trong Project Plan/Roadmap hoặc được người quản lý dự án cho phép thực hiện.

### Điều kiện 2 — Dependency đã PASS

Tất cả dependency bắt buộc phải:

```text
🟢 PASS
```

### Điều kiện 3 — Không có dependency bắt buộc FAIL/BLOCKED

Không được bắt đầu TASK nếu dependency bắt buộc đang:

```text
🔴 FAIL
```

hoặc:

```text
⏸️ BLOCKED
```

### Ngoại lệ

Nếu cần tiếp tục mặc dù dependency đang BLOCKED, phải có:

- Quyết định của PM/Project Owner.
- Lý do.
- Đánh giá ảnh hưởng.
- Ghi nhận trong Change Log hoặc Documentation phù hợp.

AI Assistant không được tự ý quyết định bỏ qua dependency.

---

# 9. Acceptance Criteria

Mỗi TASK phải có Acceptance Criteria.

Ví dụ:

```text
## Acceptance Criteria

- [ ] Project chạy được.
- [ ] Không có lỗi TypeScript.
- [ ] npm run lint PASS.
- [ ] npm run build PASS.
- [ ] Cấu trúc thư mục đúng yêu cầu.
- [ ] Documentation đã cập nhật.
- [ ] Git commit đã thực hiện.
- [ ] Progress đã cập nhật.
```

Acceptance Criteria phải có khả năng kiểm chứng.

Không sử dụng các tiêu chí quá chung chung như:

```text
- [ ] Code tốt.
- [ ] Giao diện đẹp.
- [ ] Hoàn thành tốt.
```

nếu không có định nghĩa hoặc cách kiểm tra cụ thể.

---

# 10. Self-Test

Trước khi đưa TASK cho AI/Mentor Review, người phát triển phải tự kiểm tra.

Self-Test tùy TASK nhưng có thể bao gồm:

```text
npm run lint
npm run build
npm run dev
```

hoặc:

- Kiểm tra UI.
- Kiểm tra form.
- Kiểm tra responsive.
- Kiểm tra chức năng.
- Kiểm tra console.
- Kiểm tra network.
- Kiểm tra dữ liệu.

Kết quả Self-Test phải được ghi nhận trong TASK Documentation.

---

# 11. AI/Mentor Review

AI/Mentor Review nhằm kiểm tra TASK một cách độc lập với người thực hiện.

Review phải kiểm tra tối thiểu:

### 11.1. Functional

Chức năng có hoạt động đúng Acceptance Criteria không?

### 11.2. Code Quality

Kiểm tra:

- TypeScript.
- React.
- Naming.
- Structure.
- Duplication.
- Maintainability.
- Error handling.

### 11.3. UI/UX

Nếu TASK có giao diện:

- Layout.
- Spacing.
- Typography.
- Responsive.
- Accessibility.
- Consistency.

### 11.4. Understanding

Người phát triển phải hiểu:

- Code làm gì?
- Tại sao viết như vậy?
- File nào chịu trách nhiệm?
- Luồng hoạt động như thế nào?
- Có thể thay đổi ở đâu?

AI không nên chỉ đánh giá việc code chạy được.

### 11.5. Documentation

Documentation phải phản ánh đúng trạng thái thực tế của TASK.

### 11.6. Git

Kiểm tra:

```text
git status
git diff
git diff --staged
```

và commit phù hợp.

### 11.7. Scope

Không có chức năng ngoài phạm vi TASK.

---

# 12. Quy trình khi TASK FAIL

Nếu TASK không đạt:

```text
Review
  ↓
🔴 FAIL
  ↓
Xác định lỗi
  ↓
Phân tích nguyên nhân
  ↓
Fix
  ↓
Self-Test
  ↓
Review lại
```

Không được chuyển trực tiếp từ:

```text
FAIL → PASS
```

mà không có bằng chứng sửa lỗi và kiểm tra lại.

---

# 13. FAIL Log

Mỗi lỗi quan trọng phải có thể ghi nhận:

| Nội dung      | Mô tả                         |
| ------------- | ----------------------------- |
| TASK ID       | TASK bị lỗi                   |
| Criterion     | Acceptance Criteria không đạt |
| Evidence      | Bằng chứng                    |
| Root Cause    | Nguyên nhân gốc               |
| Impact        | Ảnh hưởng                     |
| Solution      | Giải pháp                     |
| Retest Result | Kết quả kiểm tra lại          |

Ví dụ:

```text
TASK ID:
TASK-05

Criterion:
Layout hiển thị đúng trên desktop.

Evidence:
Sidebar bị tràn chiều ngang.

Root Cause:
Container chưa giới hạn width.

Impact:
Giao diện desktop bị overflow.

Solution:
Điều chỉnh layout container.

Retest Result:
PASS.
```

---

# 14. Quy trình khi TASK BLOCKED

TASK chuyển sang:

```text
⏸️ BLOCKED
```

khi không thể tiếp tục vì nguyên nhân bên ngoài khả năng thực hiện ngay.

Các nhóm BLOCKED:

### 14.1. Requirement

Thiếu hoặc chưa rõ yêu cầu.

### 14.2. Dependency

TASK phụ thuộc chưa hoàn thành.

### 14.3. Technical / Infrastructure

Ví dụ:

- Server lỗi.
- Database chưa có.
- API chưa sẵn sàng.
- Environment lỗi.
- Công cụ không hoạt động.

### 14.4. Resource / Knowledge

Thiếu:

- Tài liệu.
- Quyền truy cập.
- Dữ liệu.
- Kiến thức cần thiết.

BLOCKED phải ghi rõ:

```text
TASK
Nguyên nhân
Ảnh hưởng
Điều kiện để tiếp tục
Người cần xử lý
```

---

# 15. Documentation

Documentation là một phần bắt buộc của Definition of Done.

Mỗi TASK phải có tài liệu tương ứng.

Ví dụ:

```text
docs/
├── TASK-01-khoi-tao-du-an.md
├── TASK-02-chuan-hoa-cau-truc-project.md
├── TASK-03-git-github.md
└── TASK-04-documentation.md
```

Documentation cần ghi nhận:

- Mục tiêu.
- Scope.
- Acceptance Criteria.
- Phân tích.
- Implementation.
- Code quan trọng.
- Test.
- Lỗi.
- Cách xử lý.
- Kiến thức đã học.
- Self-Evaluation.
- AI/Mentor Review.
- Git Commit.
- Kết quả cuối cùng.

---

# 16. Git và TASK

Mỗi TASK hoàn thành phải có Git Commit phù hợp.

Workflow:

```text
Code
  ↓
Self-Test
  ↓
Review
  ↓
Documentation
  ↓
git status
  ↓
git diff
  ↓
git diff --staged
  ↓
git add
  ↓
git commit
  ↓
git push
```

Commit message phải mô tả đúng thay đổi.

Format:

```text
<type>(<scope>): <short summary>
```

Ví dụ:

```text
feat(task-05): create application layout
docs(task-04): add project documentation rules
fix(task-06): fix sidebar responsive behavior
```

Không sử dụng commit message không phản ánh nội dung thực tế.

---

# 17. Không commit các nội dung không phù hợp

Không commit:

- `node_modules/`
- `dist/` nếu project không yêu cầu.
- Secret.
- API key.
- Password.
- `.env` chứa thông tin nhạy cảm.
- File tạm.
- File backup.
- File ZIP trao đổi không phải source of truth.
- Các thay đổi ngoài Scope.

---

# 18. Progress Update

Sau khi Git Commit hoàn tất, phải cập nhật Progress.

File trung tâm:

```text
docs/00-project/08-progress.md
```

File này là **Single Source of Truth cho TASK Status và Phase Progress**.

Progress cần phản ánh:

- TASK hiện tại.
- TASK đã hoàn thành.
- TASK tiếp theo.
- Phase hiện tại.
- Commit liên quan.
- Các TASK FAIL/BLOCKED nếu có.

---

# 19. TASK PASS

`🟢 PASS` chỉ được xác lập khi **tất cả điều kiện bắt buộc đã hoàn thành**.

Chuẩn duy nhất:

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

Không được ghi:

```text
Review
  ↓
🟢 PASS
  ↓
Documentation
```

Không được ghi:

```text
Review
  ↓
Documentation
  ↓
🟢 PASS
  ↓
Git Commit
```

Không được ghi:

```text
Review
  ↓
Documentation
  ↓
Git Commit
  ↓
🟢 PASS
  ↓
Progress Update
```

**Progress Update phải hoàn tất trước khi TASK được xác lập PASS.**

---

# 20. Definition of Done

Một TASK được xem là Done khi:

### Functional

- [ ] Chức năng đạt Acceptance Criteria.
- [ ] Không còn lỗi blocker trong phạm vi TASK.

### Code

- [ ] Code đúng Scope.
- [ ] Code dễ đọc.
- [ ] Naming phù hợp.
- [ ] TypeScript đúng.
- [ ] Không có code thừa nghiêm trọng.

### UI

Nếu có giao diện:

- [ ] UI hoạt động.
- [ ] Responsive phù hợp.
- [ ] Không có lỗi hiển thị nghiêm trọng.

### Knowledge

- [ ] Người phát triển hiểu code.
- [ ] Có thể giải thích luồng hoạt động.
- [ ] Có thể xác định nơi cần thay đổi khi yêu cầu thay đổi.

### Documentation

- [ ] TASK Documentation hoàn chỉnh.
- [ ] Documentation phản ánh đúng trạng thái thực tế.
- [ ] Các quyết định kỹ thuật quan trọng đã được ghi nhận.

### Git

- [ ] `git status` được kiểm tra.
- [ ] Không có thay đổi ngoài Scope.
- [ ] Commit đã tạo.
- [ ] Commit message phù hợp.
- [ ] Push đã thực hiện nếu workflow yêu cầu.

### Progress

- [ ] `08-progress.md` đã cập nhật.
- [ ] Status TASK được cập nhật đúng.

Chỉ sau khi tất cả điều kiện trên hoàn tất:

```text
🟢 TASK PASS
```

---

# 21. AI Assistant Rules

AI Assistant phải tuân thủ:

1. Không tự ý mở rộng Scope.
2. Không tự ý thay đổi Acceptance Criteria.
3. Không tự ý thay đổi Roadmap.
4. Không tự ý kích hoạt TASK tiếp theo.
5. Không tự ý bỏ qua Dependency.
6. Không tự ý xác nhận PASS khi chưa đủ điều kiện.
7. Phải phân biệt Requirement, Implementation, Review và Acceptance.
8. Phải chỉ ra lỗi thay vì che giấu lỗi.
9. Phải giải thích nguyên nhân và giải pháp.
10. Phải ưu tiên người phát triển hiểu vấn đề.
11. Phải cập nhật Documentation khi thay đổi có ảnh hưởng đến tài liệu.
12. Phải đối chiếu `08-progress.md` trước khi xác định trạng thái TASK nếu thông tin hiện tại chưa đầy đủ.

---

# 22. AI không được tự xác lập TASK PASS

AI có thể:

- Phân tích.
- Kiểm tra.
- Review.
- Đề xuất sửa lỗi.
- Đánh giá Acceptance Criteria.
- Đề xuất trạng thái.

Nhưng không được tự ý:

```text
Thay đổi Scope
Thay đổi Requirement
Bỏ qua Dependency
Kích hoạt TASK mới
```

Việc xác lập `🟢 PASS` phải dựa trên đầy đủ bằng chứng:

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

# 23. Relation với Project Documentation

TASK Documentation phải phù hợp với các tài liệu cấp Project:

```text
01-project-overview.md
02-requirements.md
03-roadmap.md
04-task-management.md
05-development-rules.md
06-git-github-rules.md
07-documentation-rules.md
08-progress.md
```

Trong đó:

- `01` — Project Overview.
- `02` — Requirements.
- `03` — Roadmap.
- `04` — TASK Management.
- `05` — Development Rules.
- `06` — Git/GitHub Rules.
- `07` — Documentation Rules.
- `08` — Progress.

Nếu có mâu thuẫn giữa tài liệu, phải dừng việc kết luận và thực hiện Documentation Review để xác định tài liệu chính thức cần được cập nhật.

---

# 24. TASK Review Checklist

Trước khi đóng TASK:

```text
## Functional
- [ ] Acceptance Criteria đạt
- [ ] Chức năng hoạt động
- [ ] Không có blocker

## Code
- [ ] Code đúng Scope
- [ ] TypeScript đúng
- [ ] Naming đúng
- [ ] Không có code thừa nghiêm trọng

## UI
- [ ] UI đạt yêu cầu
- [ ] Responsive
- [ ] Không có lỗi hiển thị

## Knowledge
- [ ] Hiểu Component
- [ ] Hiểu State
- [ ] Hiểu Props
- [ ] Hiểu Logic
- [ ] Hiểu File Structure

## Documentation
- [ ] TASK documentation hoàn chỉnh
- [ ] Technical decisions được ghi nhận
- [ ] Documentation khớp Code

## Git
- [ ] git status
- [ ] git diff
- [ ] git diff --staged
- [ ] git commit
- [ ] git push

## Progress
- [ ] 08-progress.md đã cập nhật

## Final
- [ ] Review PASS
- [ ] Documentation PASS
- [ ] Git Commit PASS
- [ ] Progress Update PASS
- [ ] 🟢 TASK PASS
```

---

# 25. Quy trình tổng thể của dự án

Toàn bộ dự án HC-TC Office áp dụng chuỗi:

```text
Project Requirement
        ↓
Project Planning
        ↓
Roadmap
        ↓
TASK Authorization
        ↓
Requirement
        ↓
Analysis
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
🟢 TASK PASS
        ↓
TASK tiếp theo
```

Nếu FAIL:

```text
Review
  ↓
🔴 FAIL
  ↓
Fix
  ↓
Self-Test
  ↓
Review lại
```

Nếu BLOCKED:

```text
IN PROGRESS
     ↓
⏸️ BLOCKED
     ↓
Resolve
     ↓
IN PROGRESS
```

---

# 26. Nguyên tắc cuối cùng

Một TASK không được xem là hoàn thành chỉ vì:

```text
Code chạy được
```

Một TASK chỉ được xem là hoàn thành khi:

```text
Code
+
Test
+
Review
+
Documentation
+
Git
+
Progress
```

đều phản ánh cùng một trạng thái thực tế.

Chuẩn cuối cùng:

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

**Không PASS trước Documentation.**

**Không PASS trước Git Commit.**

**Không PASS trước Progress Update.**

**Không PASS khi chưa đủ Acceptance Criteria.**

**Không PASS nếu còn lỗi thuộc phạm vi TASK chưa được xử lý.**

> **TASK PASS phải là kết quả cuối cùng của một quy trình hoàn chỉnh, không phải là một bước trung gian.**
