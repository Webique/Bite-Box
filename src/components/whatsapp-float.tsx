import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import WhatsAppIcon from "@/assets/icons/whatsapp-2.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { siteConfig } from "@/config/site";

export default function WhatsAppFloat() {
  const t = useTranslations("IndexPage.WhatsAppFloat");

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <m.a
          href={siteConfig.links.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="z-999999 bg-whatsapp fixed bottom-6 end-6 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl lg:bottom-6"
          aria-label="Contact us on WhatsApp"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <WhatsAppIcon className="h-8 w-8 fill-white" />
        </m.a>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>{t("tooltip")}</p>
      </TooltipContent>
    </Tooltip>
  );
}
