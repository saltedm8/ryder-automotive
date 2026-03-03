import Link from "next/link";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <FileQuestion size={64} className="text-gold-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-white mb-2">404</h1>
        <p className="text-charcoal-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-gold">
          Back to home
        </Link>
      </div>
    </div>
  );
}
