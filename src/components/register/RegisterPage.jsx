import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <div className="relative top-0 h-screen">
      <div className="absolute z-[3] w-full h-full top-0 bg-black/10"></div>
      <div className="absolute z-[2] w-full h-full top-0 bg-primary/10"></div>
      <div className="absolute z-[4] w-full top-1/2 -translate-y-1/2">
        <RegisterForm/>
      </div>
    </div>
  );
}
