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
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav w-100 d-flex justify-content-center ">
              <Link
                className={`nav-item nav-link ${
                  router === "/" ? "text-danger" : ""
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
              <Link
                className={`nav-item nav-link ${
                  router === "/news" ? "active" : ""
                }`}
                href="/news"
              >
                News
              </Link>
              <Link
                className={`nav-item nav-link ${
                  router === "/swr" ? "active" : ""
                }`}
                href="/swr"
              >
                SWR
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
