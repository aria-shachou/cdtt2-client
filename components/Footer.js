import React from "react";

function Footer() {
  return (
    <footer
      className="bg-neutral-200 text-center dark:bg-sky-700 lg:text-left"
      style={{ marginTop: 30 }}
    >
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        © 2023 Copyright:
        <a
          className="text-neutral-800 dark:text-neutral-400 ml-3"
          href="https://tailwind-elements.com/"
        >
          Praise The Fool
        </a>
      </div>
    </footer>
  );
}

export default Footer;
