import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const imageSize = size === "sm" ? 48 : size === "lg" ? 36 : 48

  return (
    <Link href="/" className={`flex items-center hover:opacity-90 ${className}`}>
      <div className="relative flex flex-row items-center gap-3">
        <Image src="/favicon.ico" alt="Logo" width={imageSize} height={imageSize} className="rounded-lg" />
      </div>
    </Link>
  )
}
