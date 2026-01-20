import { SlideLayout, AccentLine, SlideTitle, SlideSubtitle } from "../SlideLayout";
import { motion } from "framer-motion";

interface SlideProps {
  isActive?: boolean;
}

interface QAItemProps {
  question: string;
  answer: string;
  delay: number;
  isActive: boolean;
}

function QAItem({ question, answer, delay, isActive }: QAItemProps) {
  const testId = question.toLowerCase().replace(/[^a-z]/g, "-").replace(/-+/g, "-").slice(0, 30);
  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      data-testid={`faq-${testId}`}
    >
      <p className="text-xl lg:text-2xl font-bold text-crimson mb-3">{question}</p>
      <p className="text-lg lg:text-xl text-slate-text leading-relaxed" dangerouslySetInnerHTML={{ __html: answer }} />
    </motion.div>
  );
}

export function Slide14FAQ({ isActive = true }: SlideProps) {
  const faqs = [
    {
      question: "Q: \"Isn't this outside your typical athlete vertical?\"",
      answer: "<strong>A:</strong> That's exactly why it works — it's an untapped market with massive potential. Your current roster proves you value media personalities (Desmond Howard, Charles Woodson, Brady Quinn, Joel Klatt). I'm simply extending that to political media. The brand name \"State & Liberty\" already carries political weight — we're just making it explicit.",
    },
    {
      question: "Q: \"Will this alienate existing customers?\"",
      answer: "<strong>A:</strong> No — this expands brand meaning without replacing anything. Athletes and political professionals share core values: discipline, performance, freedom, American quality. This isn't a pivot, it's an evolution. Your existing customers won't care that political professionals also wear your brand — if anything, it adds prestige and broadens appeal.",
    },
    {
      question: "Q: \"Is the political space too risky?\"",
      answer: "<strong>A:</strong> My content focuses on health sovereignty and personal freedom — universal values, not partisan politics. I advocate for purifying our food source and personal liberty. This aligns perfectly with your brand without alienating anyone. It's about principles (freedom, health, American values), not politics (left vs. right).",
    },
  ];

  return (
    <SlideLayout slideNumber={14} isActive={isActive}>
      <AccentLine />
      <SlideTitle>Anticipating Your Questions</SlideTitle>
      <SlideSubtitle>Addressing Potential Concerns</SlideSubtitle>

      <div className="mt-8 flex-1">
        {faqs.map((faq, index) => (
          <QAItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            delay={0.3 + index * 0.15}
            isActive={isActive}
          />
        ))}
      </div>
    </SlideLayout>
  );
}
