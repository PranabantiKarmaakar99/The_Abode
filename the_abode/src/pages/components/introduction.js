import Link from 'next/link';

const Home = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-4">Interior Design Services</h1>
        <p className="mb-8">We create beautiful and functional spaces that inspire and delight.</p>
        <Link href="/components/services2">
          <div className="bg-white text-gray-800 py-2 px-4 rounded-full inline-block hover:bg-gray-100">View Our Services</div>
        </Link>
      </div>
    </div>
  )
}

export default Home
