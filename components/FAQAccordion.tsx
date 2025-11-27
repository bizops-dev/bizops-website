import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Card from './Card';

interface FAQ {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First item open by default

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => (
        <Card key={idx} padding="none" className="overflow-hidden">
          <button
            onClick={() => toggleFAQ(idx)}
            className="w-full flex items-start justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
          >
            <h3 className="font-bold text-slate-900 dark:text-white pr-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {faq.q}
            </h3>
            <div className="flex-shrink-0">
              {expandedIndex === idx ? (
                <ChevronUp className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </div>
          </button>

          {expandedIndex === idx && (
            <div className="px-6 pb-6 pt-0">
              <div className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                {faq.a}
              </div>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default FAQAccordion;

