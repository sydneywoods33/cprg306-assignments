import Link from 'next/link';

export default function Home() {
  let linkStyles = "hover:text-blue-800 text-white py-2 font-bold";
  return (
    <main style={{ backgroundColor: '#C5D5E4' }} className="min-h-screen p-8">
      <div style={{ backgroundColor: '#8896AB' }} className="max-w-4xl mx-auto p-6 rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">CPRG 306: Web Development 2 - Assignments</h1>
        
        <ul className="space-y-6">
          <li>
            <Link href="/week-2/">
              <span className={linkStyles}>Week 2 Assignment</span>
            </Link>
            <p>Introduction to React</p>
          </li>
          <li>
            <Link href="/week-3/">
              <span className={linkStyles}>Week 3 Assignment</span>
            </Link>
            <p>Components and Props</p>
          </li>
          <li>
            <Link href="/week-4/">
              <span className={linkStyles}>Week 4 Assignment</span> 
            </Link>
            <p>Basic Interactivity</p>
          </li>
          <li>
            <Link href="/week-5/">
              <span className={linkStyles}>Week 5 Assignment</span>
            </Link>
            <p>Basic Interactivity with Forms</p>
          </li>
          <li>
            <Link href="/week-6/">
              <span className={linkStyles}>Week 6 Assignment</span>
            </Link>
            <p>Handling Lists</p>
          </li>
        </ul>
      </div>
    </main>
  );
}