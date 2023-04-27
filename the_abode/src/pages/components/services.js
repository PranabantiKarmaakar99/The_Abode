import Link from 'next/link';
import Image from 'next/image';




const ServiceCard = ({ title, description, imageUrl }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <Image src={imageUrl} alt={title} className="mb-4 rounded-lg w-full" />
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="mb-4">{description}</p>
        <Link href="/contact">
          <div className="bg-gray-800 text-white py-2 px-4 rounded-full inline-block hover:bg-gray-700">Get Started</div>
        </Link>
      </div>
    )
  }
  
  export default ServiceCard;