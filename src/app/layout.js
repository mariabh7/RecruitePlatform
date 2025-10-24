import "./globals.css";
import Wrapper from "./wrapper";

export const metadata = {
  title: "Recruiting Platform",
  description: "recruite and apply in one platform",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
