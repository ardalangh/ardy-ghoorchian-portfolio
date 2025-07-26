import Image from "next/image";

export default function Location() {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 p-8">
      <div className="text-center text-lg md:text-xl text-gray-300 mb-8">
        Somewhere between San Francisco & Charlotte
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        <div className="relative">
          <Image
            src="/sfMap.png"
            alt="San Francisco Map"
            width={500}
            height={300}
            className="w-full h-auto rounded-lg"
            priority
            style={{
              maskImage: 'radial-gradient(ellipse at center, black 30%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.4) 70%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.4) 70%, transparent 100%)',
              filter: 'brightness(0.8) contrast(1.1)'
            }}
          />
        </div>
        
        <div className="relative">
          <Image
            src="/charlotteMap.png"
            alt="Charlotte Map"
            width={500}
            height={300}
            className="w-full h-auto rounded-lg"
            priority
            style={{
              maskImage: 'radial-gradient(ellipse at center, black 30%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.4) 70%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.4) 70%, transparent 100%)',
              filter: 'brightness(0.8) contrast(1.1)'
            }}
          />
        </div>
      </div>
    </div>
  );
} 