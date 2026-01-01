import ExportedImage from "next-image-export-optimizer";

import { Link as I18nLink } from "@/i18n/navigation.public";
import { cn } from "@/lib/utils";

type indexProps = {
  src?: string;
  width?: number;
  height?: number;
  href?: string;
  className?: string;
  imgClassName?: string;
};

export default function Logo({
  src = "/images/logo.png",
  width = 745,
  height = 504,
  className,
  imgClassName,
  href = "/"
}: indexProps) {
  return (
    <I18nLink
      href={href}
      aria-label="Logo"
      className={cn("flex items-center gap-2.5", className)}
    >
      <ExportedImage
        className={cn(
          "h-auto w-20 max-w-full overflow-hidden sm:w-24",
          imgClassName
        )}
        src={src}
        width={width}
        height={height}
        placeholder="empty"
        priority
        alt="Logo"
      />
    </I18nLink>
  );
}
