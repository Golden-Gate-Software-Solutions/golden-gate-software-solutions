import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function CTAButton({ href, children, variant = 'primary' }: CTAButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md transition-all duration-200";
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl",
    secondary: "bg-white text-blue-600 hover:bg-gray-50 border-2 border-blue-600"
  };

  return (
    <Link 
      href={href}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {children}
    </Link>
  );
} 