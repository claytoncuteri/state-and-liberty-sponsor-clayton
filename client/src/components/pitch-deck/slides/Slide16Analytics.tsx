import { SlideLayout, AccentLine, SlideTitle, SlideSubtitle } from "../SlideLayout";
import { motion } from "framer-motion";
import instagramViews from "@assets/Instagram_Last_90_days_views_1768871993794.png";
import instagramInteractions from "@assets/Instagram_last_90_days_interactions_1768871993794.png";
import instagramFollowers from "@assets/instagram_new_followers_last_90_days_1768871993794.jpeg";
import instagramDemographics from "@assets/Instagram_demographics_1768871993793.jpeg";
import facebookViews from "@assets/Facebook_last_60_days_views_1768871985943.png";
import facebookInteractions from "@assets/Facebook_last_60_days_interactions_1768871985942.png";
import youtubeViews from "@assets/YouTube_last_90_days_views_1768871997533.png";

interface SlideProps {
  isActive?: boolean;
}

export function Slide16Analytics({ isActive = true }: SlideProps) {
  return (
    <SlideLayout slideNumber={8} isActive={isActive}>
      <AccentLine />
      <SlideTitle>Platform Analytics Proof</SlideTitle>
      <SlideSubtitle>Verified Social Media Performance Data</SlideSubtitle>

      <div className="grid grid-cols-3 gap-4 mt-2 flex-1 min-h-0">
        <motion.div
          className="flex flex-col gap-2 min-h-0"
          initial={{ opacity: 0, x: -30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="text-sm font-bold text-crimson flex-shrink-0">Instagram</h4>
          <div className="flex-1 min-h-0 flex flex-col gap-2">
            <div className="flex-1 min-h-[120px] rounded overflow-hidden border border-white/20 bg-navy-light/30" data-testid="img-instagram-views">
              <img src={instagramViews} alt="Instagram Views - 65.5M views last 90 days" className="w-full h-full object-contain" />
            </div>
            <div className="flex-1 min-h-[120px] rounded overflow-hidden border border-white/20 bg-navy-light/30" data-testid="img-instagram-interactions">
              <img src={instagramInteractions} alt="Instagram Interactions - 11.6M interactions" className="w-full h-full object-contain" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-2 min-h-0"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="text-sm font-bold text-crimson flex-shrink-0">Demographics & Growth</h4>
          <div className="flex-1 min-h-0 flex flex-col gap-2">
            <div className="flex-1 min-h-[120px] rounded overflow-hidden border border-white/20 bg-navy-light/30" data-testid="img-instagram-followers">
              <img src={instagramFollowers} alt="Instagram Followers Growth - 329K followers" className="w-full h-full object-contain" />
            </div>
            <div className="flex-1 min-h-[120px] rounded overflow-hidden border border-white/20 bg-navy-light/30" data-testid="img-instagram-demographics">
              <img src={instagramDemographics} alt="Instagram Demographics - 74.8% male audience" className="w-full h-full object-contain" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-2 min-h-0"
          initial={{ opacity: 0, x: 30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h4 className="text-sm font-bold text-crimson flex-shrink-0">Facebook & YouTube</h4>
          <div className="flex-1 min-h-0 flex flex-col gap-2">
            <div className="flex-1 min-h-[80px] rounded overflow-hidden border border-white/20 bg-navy-light/30" data-testid="img-facebook-views">
              <img src={facebookViews} alt="Facebook Views - 17M views" className="w-full h-full object-contain" />
            </div>
            <div className="flex-1 min-h-[80px] rounded overflow-hidden border border-white/20 bg-navy-light/30" data-testid="img-facebook-interactions">
              <img src={facebookInteractions} alt="Facebook Interactions - 1M+ interactions" className="w-full h-full object-contain" />
            </div>
            <div className="flex-1 min-h-[80px] rounded overflow-hidden border border-white/20 bg-navy-light/30" data-testid="img-youtube-views">
              <img src={youtubeViews} alt="YouTube Views - 4.1M views" className="w-full h-full object-contain" />
            </div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
