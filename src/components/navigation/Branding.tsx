import Link from 'next/link';
import Image from 'next/image';

export default function Branding() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-10 h-10 relative">
        <Image
          src="/logo.png"
          alt="GGSS Logo"
          fill
          sizes="(max-width: 768px) 40px, 40px"
          className="object-contain"
          priority
        />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-[18px] ">Golden Gate</span>
        <span className="text-[18px] ">Software Solutions</span>
      </div>
    </Link>
  );
} 