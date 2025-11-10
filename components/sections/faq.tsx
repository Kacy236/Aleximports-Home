"use client";
import Divider from "../divider";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

export default function Faq() {
  return (
    <div className="bg-background-gray py-4">
      <div className="pb-16 px-4">
        <h1 className="text-heading-0 font-bold max-w-[22ch]">
          Frequently Asked Questions
        </h1>

        <div className="mt-8 max-w-[700px] text-paragraph">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How do I start selling on Alex Imports?
              </AccordionTrigger>
              <AccordionContent>
                Signing up is simple! Create an account, set up your store profile,
                and start listing your products. Our platform guides you through 
                the process to ensure your shop is ready to attract customers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Are there any fees to sell on Alex Imports?
              </AccordionTrigger>
              <AccordionContent>
                We offer a fair commission-based system. You only pay a small
                percentage when you make a sale. There are no hidden subscription
                fees or upfront costs, making it easy to start selling right away.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                How do I get paid for my sales?
              </AccordionTrigger>
              <AccordionContent>
                Payments are processed securely through our integrated system. 
                You will receive payouts directly to your bank account or chosen 
                payment method, usually within a few business days after a sale.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                Can I sell products internationally?
              </AccordionTrigger>
              <AccordionContent>
                Yes! Alex Imports allows sellers to reach customers both locally 
                and internationally. You can set shipping options and prices 
                for different regions to expand your market reach.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                What types of products can I sell?
              </AccordionTrigger>
              <AccordionContent>
                You can sell a wide range of products, from electronics and fashion 
                to handmade goods and digital items. However, prohibited items 
                include illegal products, counterfeit goods, and items restricted 
                by law.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                How do I manage my store and inventory?
              </AccordionTrigger>
              <AccordionContent>
                Our seller dashboard makes it easy to manage your listings, track 
                orders, and monitor inventory. You can update product details, 
                track sales performance, and interact with customers all in one place.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
