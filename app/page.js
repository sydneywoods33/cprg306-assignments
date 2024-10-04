import Link from 'next/link';

export default function Home() {
  let linkStyles = "hover:text-pink-400 text-black underline";
  return (
    <main className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-pink-100 p-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">CPRG 306: Web Development 2 - Assignments</h1>
        <ul className="space-y-4">
          <li>
            <Link href="/week-2/">
              <span className={linkStyles}>Week 2 Assignment</span>
            </Link>
          </li>
          <li>
            <Link href="/week-3/">
              <span className={linkStyles}>Week 3 Assignment</span>
            </Link>
          </li>
          <li>
            <Link href="/week-4/">
              <span className={linkStyles}>Week 4 Assignment</span>
            </Link>
          </li>
          <li>
            <Link href="/week-5/">
              <span className={linkStyles}>Week 5 Assignment</span>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
