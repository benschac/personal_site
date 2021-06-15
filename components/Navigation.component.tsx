import styled, { x } from "@xstyled/styled-components";
import Link from "next/link";

const NavItem = styled.liBox({
  padding: "2",
});

export const Navigation: React.FC = () => {
  return (
    <x.nav>
      <x.ul display="flex">
        <NavItem flexGrow={1}>
          <Link href="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link href="/blog">Blog</Link>
        </NavItem>
        <NavItem>
          <Link href="/about">About</Link>
        </NavItem>
        <NavItem>
          <Link href="/contact">Contact</Link>
        </NavItem>
      </x.ul>
    </x.nav>
  );
};
