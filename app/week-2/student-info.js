import Link from "next/link";
export default function StudentInfo() {
  return (
    <main>
      <h3>Name: Sydney Woods</h3>
      <Link href="https://github.com/sydneywoods33" className=" hover:text-blue-400"> link to my GitHub</Link>
    </main>
  );
}
