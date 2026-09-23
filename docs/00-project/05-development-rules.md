# HC-TC Office — Development Rules

> **File:** `docs/00-project/05-development-rules.md`
> **Phạm vi:** Quy tắc phát triển và chất lượng mã nguồn
> **Đối tượng áp dụng:** Developer, AI Assistant và người thực hiện Code Review

---

## 1. Mục đích

Tài liệu này quy định các nguyên tắc, tiêu chuẩn và quy trình phát triển mã nguồn cho dự án **HC-TC Office**.

Mục tiêu:

- Code dễ đọc.
- Code dễ hiểu đối với người mới tham gia dự án.
- Code dễ bảo trì.
- Code dễ mở rộng.
- Hạn chế lỗi kỹ thuật.
- Hạn chế code trùng lặp.
- Dễ kiểm tra và review.
- Thống nhất cách phát triển giữa con người và AI Assistant.
- Đảm bảo code phù hợp với kiến trúc và phạm vi của từng TASK.

### Phạm vi áp dụng

Các quy tắc trong tài liệu này áp dụng cho mã nguồn của dự án, đặc biệt:

**Frontend**

- React.
- TypeScript.
- Vite.
- Tailwind CSS.
- Các thư viện frontend được phê duyệt bổ sung trong tương lai.

**Backend**

- API.
- Service.
- Business Logic.
- Database layer.
- Các thành phần backend được triển khai trong các phase sau.

---

# 2. Nguyên tắc phát triển cốt lõi

## 2.1. Hiểu trước khi code

Không bắt đầu viết code chỉ vì đã nhận được yêu cầu.

Trước khi triển khai phải xác định:

1. Mục tiêu của chức năng.
2. Dữ liệu đầu vào.
3. Dữ liệu đầu ra.
4. Luồng xử lý.
5. Thành phần liên quan.
6. Quy tắc nghiệp vụ.
7. Phạm vi TASK.
8. Acceptance Criteria (AC).

Nguyên tắc:

```text
Understand
    ↓
Design
    ↓
Implement
    ↓
Test
    ↓
Review
```

---

## 2.2. Code đơn giản trước — KISS

Ưu tiên:

- đơn giản;
- rõ ràng;
- dễ đọc;
- dễ kiểm tra;
- phù hợp với quy mô hiện tại.

Không triển khai kiến trúc phức tạp khi dự án chưa cần.

Không đưa abstraction hoặc pattern vào code chỉ vì có thể sử dụng.

> **Không tối ưu hóa kiến trúc cho một vấn đề chưa tồn tại.**

---

## 2.3. Không làm ngoài phạm vi TASK

Mỗi TASK có phạm vi và Acceptance Criteria riêng.

Developer và AI Assistant không tự ý:

- thêm chức năng;
- thay đổi chức năng khác;
- thay đổi kiến trúc tổng thể;
- thay đổi Database;
- thay đổi thư viện;
- thực hiện refactoring lớn;
- thay đổi Acceptance Criteria.

Nếu phát hiện nhu cầu mới:

```text
Phát hiện
   ↓
Ghi nhận
   ↓
Đánh giá ảnh hưởng
   ↓
Tạo/điều chỉnh TASK phù hợp
   ↓
Phê duyệt
   ↓
Triển khai
```

Không tự ý triển khai ngay.

---

# 3. Quy tắc TypeScript

## 3.1. Ưu tiên TypeScript

Các file logic frontend mới phải sử dụng:

```text
.ts
.tsx
```

Không chuyển sang JavaScript thuần nếu không có lý do kỹ thuật rõ ràng và được xem xét phù hợp.

---

## 3.2. Khai báo kiểu dữ liệu rõ ràng

Các cấu trúc dữ liệu quan trọng phải có `type` hoặc `interface`.

Ví dụ:

```typescript
interface Leader {
  id: number;
  name: string;
  position: string;
}
```

Không sử dụng kiểu quá chung chung khi có thể mô tả chính xác.

---

## 3.3. Hạn chế `any`

Không sử dụng:

```typescript
const data: any = ...;
```

khi có thể xác định kiểu dữ liệu.

`any` chỉ được sử dụng khi có rào cản kỹ thuật phù hợp và phải được giải thích trong Code Review.

---

## 3.4. Không lạm dụng Type Assertion

Hạn chế sử dụng:

```typescript
const data = value as SomeType;
```

Ưu tiên:

- Type Guard.
- Type Narrowing.
- Validation dữ liệu.
- Kiểm tra kiểu an toàn.

---

## 3.5. Type phải phản ánh dữ liệu thực tế

Type/interface phải phản ánh đúng dữ liệu từ:

- API;
- Database;
- business model;
- dữ liệu đầu vào thực tế.

Không tạo type chứa nhiều thuộc tính giả chỉ để phục vụ UI tạm thời.

---

# 4. Quy tắc React

## 4.1. Component có trách nhiệm rõ ràng

Mỗi component nên có một trách nhiệm chính.

Ví dụ:

```text
Button
Modal
LeaderCard
ScheduleItem
ScheduleForm
```

Không tạo một component khổng lồ xử lý toàn bộ ứng dụng.

---

## 4.2. Khả năng tái sử dụng

Các UI có cùng mục đích và được sử dụng nhiều nơi nên được đóng gói thành component dùng chung.

Ví dụ:

```text
src/components/
├── Button.tsx
├── Modal.tsx
├── Table.tsx
└── EmptyState.tsx
```

Không tạo component dùng chung chỉ vì hai đoạn code tình cờ giống nhau; cần xem xét mục đích và khả năng tái sử dụng thực tế.

---

## 4.3. Phân biệt Page và Component

### `pages/`

Chứa màn hình hoặc chức năng hoàn chỉnh.

Ví dụ:

```text
pages/
├── Dashboard.tsx
├── Schedule.tsx
├── Staff.tsx
└── Login.tsx
```

### `components/`

Chứa các thành phần UI có thể tái sử dụng.

---

## 4.4. Không biến `App.tsx` thành God File

`App.tsx` chủ yếu đóng vai trò điều phối ứng dụng, ví dụ:

- Routing.
- Provider.
- Application-level configuration.

Không biến `App.tsx` thành nơi chứa:

- toàn bộ UI;
- toàn bộ state;
- business logic;
- API calls;
- toàn bộ event handling.

---

# 5. Quy tắc State Management

## 5.1. Đặt State đúng phạm vi

Ưu tiên:

> **Keep state as local as possible.**

Không đưa mọi state lên Root hoặc Global Context.

Chỉ nâng state lên component cha khi nhiều component con thực sự cần dùng chung dữ liệu.

---

## 5.2. Không tạo Derived State dư thừa

Không lưu vào state những giá trị có thể tính toán từ state/props hiện có.

### Không nên

```typescript
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [fullName, setFullName] = useState("");
```

### Nên

```typescript
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");

const fullName = `${firstName} ${lastName}`;
```

---

# 6. Quy tắc Hooks

## 6.1. Tuân thủ Rules of Hooks

Hooks chỉ được gọi:

- ở top level của React Component;
- ở top level của Custom Hook.

Không gọi Hooks:

- trong `if`;
- trong `for`;
- trong `while`;
- trong callback;
- trong function lồng không phải Component/Custom Hook.

Ví dụ không hợp lệ:

```typescript
if (isLoggedIn) {
  useEffect(() => {
    // ...
  }, []);
}
```

---

## 6.2. Custom Hook

Khi một logic React có state/effect và được sử dụng lại ở nhiều nơi, có thể đóng gói thành Custom Hook.

Ví dụ:

```text
src/hooks/
└── useSchedule.ts
```

Custom Hook tập trung vào logic, không chịu trách nhiệm chính về UI/JSX.

---

# 7. Naming Convention

| Đối tượng   | Quy chuẩn           | Ví dụ                |
| ----------- | ------------------- | -------------------- |
| Component   | PascalCase          | `LeaderList.tsx`     |
| Function    | camelCase           | `getLeader()`        |
| Variable    | camelCase           | `selectedLeader`     |
| Boolean     | `is/has/can/should` | `isLoading`          |
| Interface   | PascalCase          | `Leader`             |
| Type        | PascalCase          | `UserRole`           |
| Custom Hook | `use + PascalCase`  | `useSchedule`        |
| Service     | camelCase           | `scheduleService.ts` |

### Boolean

Tên biến boolean phải thể hiện rõ trạng thái hoặc khả năng:

```typescript
isLoading;
isOpen;
isAuthenticated;
hasPermission;
canEdit;
shouldRefresh;
```

---

# 8. Services và API

## 8.1. Tách API khỏi UI

Component UI không nên chứa toàn bộ logic giao tiếp API.

Kiến trúc ưu tiên:

```text
Page
 ↓
Custom Hook / Logic
 ↓
Service
 ↓
API Backend
```

---

## 8.2. Service không chứa JSX

Các file trong:

```text
src/services/
```

chỉ xử lý giao tiếp và dữ liệu.

Ví dụ:

```text
src/services/
└── scheduleService.ts
```

Service không:

- render UI;
- chứa JSX;
- quản lý giao diện.

---

# 9. Error Handling

## 9.1. Không nuốt lỗi

Không sử dụng:

```typescript
try {
  // ...
} catch {}
```

mà không có lý do.

Lỗi cần được:

- xử lý;
- ghi log khi phù hợp;
- chuyển tiếp;
- hoặc thông báo cho người dùng.

---

## 9.2. Thông báo lỗi thân thiện

Không hiển thị trực tiếp lỗi kỹ thuật khó hiểu cho người dùng cuối.

Ví dụ không nên:

```text
TypeError: Cannot read properties of undefined
```

Có thể chuyển thành:

```text
Không thể tải dữ liệu. Vui lòng thử lại.
```

Thông tin kỹ thuật vẫn cần được giữ trong log/debug khi cần.

---

# 10. UI/UX và Tailwind CSS

## 10.1. UI ưu tiên nghiệp vụ

Giao diện phải ưu tiên:

1. Dễ hiểu.
2. Dễ sử dụng.
3. Dễ tìm chức năng.
4. Phản hồi rõ ràng.
5. Nhất quán.

Không chạy theo hiệu ứng nếu hiệu ứng làm giảm khả năng sử dụng hoặc hiệu năng.

---

## 10.2. Quy tắc Tailwind CSS

Khi sử dụng Tailwind:

- ưu tiên utility classes;
- giữ class rõ ràng;
- tránh class trùng lặp không cần thiết;
- component dùng chung được ưu tiên khi pattern UI lặp lại;
- không trộn nhiều phương pháp styling tùy tiện.

---

## 10.3. Bốn trạng thái UI

Màn hình tải dữ liệu phải cân nhắc đầy đủ:

```text
Loading
Success
Empty
Error
```

Ví dụ:

```text
Đang tải dữ liệu...

Hiển thị dữ liệu...

Không có dữ liệu.

Không thể tải dữ liệu. [Thử lại]
```

---

# 11. Responsive và Accessibility

## 11.1. Responsive

Giao diện phải được thiết kế phù hợp với:

1. Desktop.
2. Tablet.
3. Mobile.

Không cố định giao diện chỉ cho một kích thước màn hình.

---

## 11.2. Accessibility cơ bản

Cần quan tâm:

- Semantic HTML.
- Label cho form.
- Keyboard navigation.
- Focus state.
- Nội dung button rõ ràng.
- `aria-label` khi cần.
- Độ tương phản phù hợp.
- Không chỉ dùng màu để truyền đạt trạng thái.

Ví dụ:

```tsx
<label htmlFor="fullName">
  Họ và tên
</label>

<input
  id="fullName"
  type="text"
/>
```

---

# 12. Quản lý Form

Form phải có:

1. Label rõ ràng.
2. Placeholder khi thực sự hữu ích.
3. Validation phù hợp.
4. Thông báo lỗi tại trường dữ liệu sai.
5. Trạng thái loading khi submit.
6. Ngăn submit lặp ngoài ý muốn.
7. Thông báo thành công/thất bại.

Không bắt buộc sử dụng Placeholder nếu Label đã đủ rõ ràng.

---

# 13. Performance

## 13.1. Không tối ưu hóa sớm

Ưu tiên:

- code đúng;
- code rõ ràng;
- kiến trúc hợp lý.

Không tối ưu khi chưa có vấn đề thực tế.

---

## 13.2. Kỹ thuật tối ưu

Các kỹ thuật như:

```text
useMemo
useCallback
React.memo
lazy loading
pagination
virtualization
```

chỉ sử dụng khi có lý do phù hợp.

Không sử dụng chỉ vì muốn code "trông tối ưu".

---

# 14. Security và Environment

## 14.1. Frontend không phải lớp bảo mật duy nhất

Không được coi frontend là nơi quyết định quyền truy cập cuối cùng.

Các kiểm tra quyền quan trọng phải được backend thực hiện khi backend được triển khai.

---

## 14.2. Không hard-code thông tin bí mật

Không đưa vào source code:

- password;
- private key;
- secret;
- API secret;
- token cố định;
- credential.

---

## 14.3. Environment Variables

Thông tin cấu hình theo môi trường có thể sử dụng:

```text
.env
.env.local
```

Các file chứa secret phải được đưa vào `.gitignore` phù hợp và không được commit lên Git.

---

# 15. Quản lý Dependencies

Trước khi cài thêm thư viện:

```text
npm install <package>
```

cần trả lời:

1. Có thực sự cần không?
2. Có thể giải quyết bằng code hiện tại không?
3. Có ảnh hưởng bundle size không?
4. Thư viện có được bảo trì phù hợp không?
5. Việc thêm thư viện có thuộc phạm vi TASK không?

Dependency mới phải phù hợp với kiến trúc dự án.

---

# 16. Testing, Lint và Build

Trước khi yêu cầu Review hoặc đánh giá PASS, phải thực hiện các kiểm tra phù hợp với phạm vi TASK.

## 16.1. Lint

```powershell
npm run lint
```

Mục tiêu:

- phát hiện lỗi code;
- phát hiện vấn đề theo ESLint;
- duy trì chuẩn code.

---

## 16.2. Build

```powershell
npm run build
```

Mục tiêu:

- kiểm tra TypeScript;
- kiểm tra quá trình build;
- phát hiện lỗi compile;
- xác nhận ứng dụng có thể được đóng gói.

---

## 16.3. Chạy ứng dụng

Đối với TASK liên quan UI:

```powershell
npm run dev
```

Sau đó kiểm tra thực tế trên trình duyệt.

Cần kiểm tra:

- ứng dụng khởi động;
- chức năng hoạt động;
- giao diện đúng Acceptance Criteria;
- không có lỗi Console nghiêm trọng;
- các trạng thái Loading/Empty/Error hoạt động khi có yêu cầu.

> `npm run dev` là lệnh chạy Development Server và thường không tự kết thúc. Đây là kiểm tra thực tế, không phải lệnh kiểm tra tự động giống `lint` hoặc `build`.

---

# 17. AI-Assisted Development

AI Assistant là công cụ hỗ trợ phát triển, không thay thế trách nhiệm của Developer.

## 17.1. AI được phép hỗ trợ

AI có thể hỗ trợ:

- phân tích yêu cầu;
- giải thích kiến thức;
- đề xuất giải pháp;
- đề xuất kiến trúc;
- viết code;
- viết test;
- debug;
- review code;
- tạo tài liệu.

---

## 17.2. Developer phải hiểu code

Người thực hiện phải hiểu tối thiểu:

- code làm gì;
- tại sao làm như vậy;
- file nằm ở đâu;
- dữ liệu đi như thế nào;
- cách kiểm tra;
- cách sửa lỗi cơ bản.

---

## 17.3. AI không được tự quyết định

AI không được tự ý:

- mở rộng Scope;
- thay đổi Acceptance Criteria;
- bỏ qua lỗi;
- che giấu lỗi;
- thay đổi kiến trúc quan trọng;
- tự xác nhận TASK đạt `🟢 PASS`.

Quy trình TASK được quản lý theo:

```text
docs/00-project/04-task-management.md
```

---

# 18. Quy trình sửa lỗi

Khi phát hiện Bug:

```text
Bug
 ↓
Reproduce
 ↓
Identify Root Cause
 ↓
Fix
 ↓
Retest
 ↓
Review
```

Không sửa lỗi theo kiểu chỉ che giấu triệu chứng.

Ví dụ không nên:

```text
try/catch rỗng
default value tùy tiện
ẩn lỗi
bỏ qua warning
```

khi chưa xác định nguyên nhân phù hợp.

---

# 19. Refactoring và Technical Debt

## 19.1. Refactoring

Refactoring là cải thiện cấu trúc code nhưng không thay đổi hành vi chức năng đã được xác định.

Ví dụ:

- tách component quá lớn;
- loại bỏ code trùng lặp;
- cải thiện naming;
- sắp xếp lại logic.

Refactoring lớn ngoài phạm vi TASK cần được xem xét/phê duyệt trước.

---

## 19.2. Technical Debt

Technical Debt phải được ghi nhận thay vì âm thầm bỏ qua.

Có thể sử dụng:

```text
TODO
FIXME
Technical Debt
```

Technical Debt lớn nên được chuyển thành TASK riêng.

---

# 20. Scope Discipline

Trong quá trình phát triển có thể phát hiện:

```text
"Chức năng này nên có thêm..."
"Phần này nên làm khác..."
"Ta nên đổi kiến trúc..."
```

Không tự động triển khai.

Quy trình:

```text
Phát hiện
   ↓
Ghi nhận
   ↓
Đánh giá
   ↓
Xác định phạm vi
   ↓
Tạo/điều chỉnh TASK
   ↓
Phê duyệt
   ↓
Triển khai
```

Mục tiêu:

> Một TASK phải có phạm vi rõ ràng, kiểm soát được và nghiệm thu được.

---

# 21. Definition of Done về Code

Code của TASK phải đáp ứng:

- [ ] Đúng Acceptance Criteria.
- [ ] Đúng cấu trúc thư mục.
- [ ] Code sạch, rõ ràng.
- [ ] Naming đúng quy chuẩn.
- [ ] Không có code ngoài phạm vi TASK.
- [ ] Không có secret.
- [ ] `npm run lint` thành công.
- [ ] `npm run build` thành công.
- [ ] Đã tự kiểm tra chức năng.
- [ ] Đã qua AI/Mentor Review.
- [ ] Đã xử lý các góp ý cần thiết.
- [ ] Documentation liên quan đã được cập nhật.
- [ ] Git đã được kiểm tra theo quy định.
- [ ] Đã đối chiếu `docs/00-project/04-task-management.md`.

> Definition of Done tổng thể của TASK được quy định tại `04-task-management.md`. File này chỉ quy định tiêu chuẩn đối với **mã nguồn**.

---

# 22. Thứ tự ưu tiên khi có xung đột

Khi có nhiều mục tiêu kỹ thuật xung đột, ưu tiên:

1. **Đúng yêu cầu và đúng nghiệp vụ.**
2. **An toàn và bảo mật.**
3. **Đúng kiến trúc dự án.**
4. **Dễ bảo trì và dễ đọc hiểu.**
5. **Hiệu năng.**
6. **Tính thẩm mỹ và hiệu ứng.**

Không hy sinh tính đúng đắn, bảo mật hoặc khả năng bảo trì chỉ để hoàn thành nhanh.

---

# 23. Quan hệ với các tài liệu khác

| Tài liệu                    | Vai trò                                               |
| --------------------------- | ----------------------------------------------------- |
| `01-project-overview.md`    | Tổng quan và định hướng dự án                         |
| `02-requirements.md`        | Yêu cầu và phạm vi nghiệp vụ                          |
| `03-roadmap.md`             | Lộ trình phát triển                                   |
| `04-task-management.md`     | Vòng đời TASK, Acceptance Criteria, DoD và trạng thái |
| `05-development-rules.md`   | Tiêu chuẩn phát triển mã nguồn                        |
| `06-git-github-rules.md`    | Git, GitHub, commit, branch và remote                 |
| `07-documentation-rules.md` | Tiêu chuẩn tài liệu và Markdown                       |
| `08-progress.md`            | Nguồn sự thật về tiến độ và trạng thái TASK           |

Mỗi tài liệu có phạm vi riêng và không nên thay thế vai trò của tài liệu khác.

---

# 24. Checklist Review `05-development-rules.md`

Trước khi xác nhận tài liệu này hoàn thành:

- [ ] Có mục đích và phạm vi.
- [ ] Có nguyên tắc phát triển.
- [ ] Có TypeScript Rules.
- [ ] Có React Rules.
- [ ] Có State Management.
- [ ] Có Hooks.
- [ ] Có Naming Convention.
- [ ] Có Services/API.
- [ ] Có Error Handling.
- [ ] Có UI/UX.
- [ ] Có Tailwind CSS.
- [ ] Có Responsive.
- [ ] Có Accessibility.
- [ ] Có Form.
- [ ] Có Performance.
- [ ] Có Security.
- [ ] Có Environment Variables.
- [ ] Có Dependency Management.
- [ ] Có Testing/Lint/Build.
- [ ] Có AI-Assisted Development.
- [ ] Có Bug Fixing.
- [ ] Có Refactoring.
- [ ] Có Technical Debt.
- [ ] Có Scope Discipline.
- [ ] Có Definition of Done.
- [ ] Có Priority Rules.
- [ ] Có liên kết logic với các tài liệu project khác.
- [ ] Không trùng vai trò với Git/Documentation/Progress.
- [ ] Phù hợp với quy mô hiện tại của HC-TC Office.

---

# 25. Nguyên tắc cốt lõi cuối cùng

> **Code để con người có thể hiểu, máy tính có thể chạy và dự án có thể tiếp tục phát triển.**

Không ưu tiên:

```text
Code nhanh
```

hơn:

```text
Code đúng
Code hiểu được
Code kiểm tra được
Code bảo trì được
```

Đây là nguyên tắc xuyên suốt trong quá trình phát triển HC-TC Office.
