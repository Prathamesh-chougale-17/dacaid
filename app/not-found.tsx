import Link from "next/link";

const funnyMessages = [
  "Looks like this page took a vacation without telling us! 🏖️",
  "Houston, we have a problem - this page is lost in space! 🚀",
  "This page is playing hide and seek... and it's winning! 🙈",
  "Oops! This page pulled a disappearing act! 🎩✨",
  "Page got caught in a digital traffic jam! 🚦",
];

export default function NotFound() {
  const randomMessage =
    funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

  return (
    <div className="h-[92vh] bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8 text-8xl animate-bounce">😢</div>
        <h1 className="text-9xl font-bold text-gray-800 dark:text-gray-100 hover:scale-105 transition-transform duration-300">
          404
        </h1>
        <div className="h-2 bg-indigo-500 dark:bg-indigo-400 w-24 mx-auto my-4 rounded-full"></div>
        <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
          {randomMessage}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          We&apos;re sorry, but we can&apos;t find the page you&apos;re looking
          for. It might have wandered off somewhere... 🤔
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-indigo-500 dark:bg-indigo-600 text-white rounded-lg hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-all duration-300 hover:scale-105 transform inline-flex items-center gap-2"
        >
          <span>Let&apos;s Go Home</span>
          <span className="text-xl">🏠</span>
        </Link>
      </div>
    </div>
  );
}
