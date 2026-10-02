import { Button } from "./components/Button/Button";
import Card from "./components/Card/Card";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8 text-left sm:px-8">
        <section>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            UI Foundation · TASK-06
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Thư viện Components
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Các thành phần giao diện dùng lại được, nhận dữ liệu qua Props đã
            định kiểu bằng TypeScript.
          </p>
        </section>

        <Card>
          <SectionHeader
            title="Button"
            description="Các biến thể trình bày và trạng thái disabled."
          />
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Button>Thêm mới</Button>
            <Button variant="secondary">Hủy</Button>
            <Button variant="danger">Xóa</Button>
            <Button variant="outline">Chi tiết</Button>
            <Button variant="ghost">Đóng</Button>
            <Button disabled>Không thể chọn</Button>
          </div>
        </Card>

        <Card>
          <SectionHeader
            title="Card và SectionHeader"
            description="Card nhận nội dung qua children; SectionHeader nhận tiêu đề, mô tả và action tùy chọn."
            action={<Button variant="outline">Tùy chọn</Button>}
          />
          <div className="mt-5 rounded-lg bg-slate-50 p-4 text-sm leading-6 text-slate-700">
            Nội dung minh họa bên trong Card. Cùng một component có thể bao bọc
            nội dung khác nhau mà không cần biết logic của phần bên trong.
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}

export default App;
