"use client";
import CellCapitalPrimaryButton from "../cell-capital-button";

export default function CallToActionVendorSection() {
  return (
    <div className="bg-background-gray">
      <div className="px-4 grid py-16">
        <h1 className="text-heading-0 font-bold text-center max-w-[30ch]">
          Need a custom store setup or special feature for your shop?
        </h1>

        <CellCapitalPrimaryButton
          size="lg"
          color="white"
          className="mt-4 mx-auto border-primary border text-[18px]"
        >
          Request a custom setup
        </CellCapitalPrimaryButton>
      </div>
    </div>
  );
}
