import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background/80 text-muted-foreground">
      <div className="container flex items-center justify-between mx-auto px-4 py-8">
        <div className="text-sm">
          <p>&copy; 2025 Dacaid. All rights reserved.</p>
        </div>
        <div className="text-sm">
          <p>
            Made with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            by{" "}
            <a
              href="https://x.com/Prathamesh_7717"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Prathamesh Chougale
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
