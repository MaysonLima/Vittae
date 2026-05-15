import { Header } from "./Header.jsx";

export function PageShell({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
