import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Document() {
  const router = usePathname();
  console.log(router);
  return (
    <Html lang="en">
      <Head />
      <body>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav w-100 d-flex justify-content-center ">
              <Link
                className={`nav-item nav-link ${
                  router === "/" ? "active" : ""
                }`}
                href="/"
              >
                Home
              </Link>
              <Link
                className={`nav-item nav-link ${
                  router === "/shop" ? "active" : ""
                }`}
                href="/shop"
              >
                Shop
              </Link>
              <Link className="nav-item nav-link" href="/sss">
                Error
              </Link>
            </div>
          </div>
        </nav>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
