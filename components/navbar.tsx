"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Github, Twitter } from "lucide-react";
import Link from "next/link";
import { ComponentSearchBox } from "./search-box";

const NavItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b"
    >
      <div className="container flex items-center justify-between h-16 mx-auto px-4">
        {/* Logo and Main Navigation */}
        <div className="flex items-center space-x-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold"
          >
            Logo
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            {NavItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Search and Social Links */}
        <div className="hidden md:flex items-center space-x-4">
          <ComponentSearchBox />
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {NavItems.map((item) => (
                  <motion.div key={item.name} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <ComponentSearchBox />
                <div className="flex space-x-4">
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" size="icon">
                      <Twitter className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
