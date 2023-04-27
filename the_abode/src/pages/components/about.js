import Link from 'next/link';

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <Link href="/contact">
          <div className="bg-gray-800 text-white py-2 px-4 rounded-full inline-block hover:bg-gray-700">Get Started</div>
        </Link>
    </div>
  );
}

export default About;