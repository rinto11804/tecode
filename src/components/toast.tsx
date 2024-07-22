type ToastProps = {
  data: string;
  status?: "success" | "error" | "info";
};

export default function Toast({ data, status = "info" }: ToastProps) {
  return (
    <div className="toast animate-bounce">
      <div className={`alert alert-${status}`}>
        <span>{data}</span>
      </div>
    </div>
  );
}
