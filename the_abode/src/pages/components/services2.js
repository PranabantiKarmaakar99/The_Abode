import ServiceCard from './services.js'

const Services = () => {
  const services = [
    {
      title: 'Residential Design',
      description: 'Create the home of your dreams with our custom interior design services for residential spaces.',
      imageUrl: '/images/residential.jpg',
    },
    {
      title: 'Commercial Design',
      description: 'Transform your office or retail space into a functional and stylish environment that reflects your brand.',
      imageUrl: '/images/commercial.jpg',
    },
    {
      title: 'Remodeling',
      description: 'Update your existing space with a custom remodeling plan that meets your needs and budget.',
      imageUrl: '/images/remodeling.jpg',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.title} title={service.title} description={service.description} imageUrl={service.imageUrl} />
        ))}
      </div>
    </div>
  )
}

export default Services;