import Container from "@/app/_components/container";
import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-10 text-center">
          <p className="text-neutral-600 dark:text-neutral-300">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
