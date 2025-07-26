import Image from 'next/image';

export default function Location() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-6">
      <div className="text-center">
        <p className="text-lg md:text-xl text-gray-300 mb-4">
          Somewhere between San Francisco{' '}
          <Image
            src="/sfMap.png"
            alt="San Francisco Map"
            width={24}
            height={24}
            className="inline-block mx-1"
          />{' '}
          & Charlotte{' '}
          <Image
            src="/charlotteMap.png"
            alt="Charlotte Map"
            width={24}
            height={24}
            className="inline-block mx-1"
          />
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 max-w-4xl">
        <div className="flex-1">
          <Image
            src="/sfMap.png"
            alt="San Francisco Bay Area Map"
            width={400}
            height={300}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div className="flex-1">
          <Image
            src="/charlotteMap.png"
            alt="Charlotte Map"
            width={400}
            height={300}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
} 