/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Case } from "../types";
import { CASE_BANK } from "../data/cases";
import { HeartPulse, ShieldAlert } from "lucide-react";

interface CaseSelectionProps {
  onSelectCase: (selectedCase: Case) => void;
  isArabic: boolean;
}

export default function CaseSelection({ onSelectCase, isArabic }: CaseSelectionProps) {
  // Mode selection: default is "internal" (or the user can switch)
  const [activeTab, setActiveTab] = useState<"internal" | "surgery">("internal");

  // Filters the cases by active specialty Tab
  const filteredCases = CASE_BANK.filter((c) => c.specialty === activeTab);

  // Translations
  const t = {
    internalTab: isArabic ? "الباطنة العامة" : "Internal Medicine",
    surgeryTab: isArabic ? "الجراحة العامة" : "General Surgery",
    startBtn: isArabic ? "ابدأ ←" : "Start →",
    selectCasePrompt: isArabic ? "اختر الحالات الإكلينيكية للبدء" : "Choose a Clinical Case to Begin",
    selectCaseSub: isArabic
      ? "أدوات مخصصة لتنظيم التاريخ الطبي وفق المنهج الطبي المصري"
      : "Standard structured history structures aligned with Egyptian clinical guides.",
  };

  return (
    <div className="w-full space-y-6">
      {/* Visual Header Prompt */}
      <div 
        className="text-center py-4 space-y-2"
        style={{ direction: isArabic ? "rtl" : "ltr" }}
      >
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-navy tracking-tight">
          {t.selectCasePrompt}
        </h2>
        <p className="text-sm text-stone-500 max-w-lg mx-auto">
          {t.selectCaseSub}
        </p>
      </div>

      {/* Two Large Tabs Side-By-Side */}
      <div 
        className="flex border-b border-navy/10 max-w-xl mx-auto rounded-lg overflow-hidden p-1 bg-navy/5"
        style={{ direction: isArabic ? "rtl" : "ltr" }}
      >
        <button
          onClick={() => setActiveTab("internal")}
          className={`flex-1 py-3 text-center text-sm font-semibold font-heading transition-all duration-200 rounded-md flex items-center justify-center gap-2 ${
            activeTab === "internal"
              ? "bg-navy text-gold shadow-sm"
              : "text-navy/70 hover:text-navy hover:bg-navy/5"
          }`}
        >
          <HeartPulse className="w-4 h-4" />
          <span>{t.internalTab}</span>
        </button>
        <button
          onClick={() => setActiveTab("surgery")}
          className={`flex-1 py-3 text-center text-sm font-semibold font-heading transition-all duration-200 rounded-md flex items-center justify-center gap-2 ${
            activeTab === "surgery"
              ? "bg-navy text-gold shadow-sm"
              : "text-navy/70 hover:text-navy hover:bg-navy/5"
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          <span>{t.surgeryTab}</span>
        </button>
      </div>

      {/* Cases Grid */}
      <div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-4 px-2"
        style={{ direction: isArabic ? "rtl" : "ltr" }}
      >
        {filteredCases.map((c) => {
          const caseName = isArabic ? c.name_ar : c.name_en;

          return (
            <div
              key={c.id}
              onClick={() => onSelectCase(c)}
              className="bg-white rounded-xl shadow-sm border border-navy/10 p-6 flex flex-col justify-between cursor-pointer group hover:-translate-y-1 hover:shadow-md hover:border-l-4 hover:border-l-gold border-l-4 border-l-transparent transition-all duration-200 h-44"
            >
              {/* Icon and Title */}
              <div className="flex items-start gap-4">
                <span className="text-4xl select-none" role="img" aria-label="case-emoji">
                  {c.icon}
                </span>
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-lg text-navy group-hover:text-gold transition-colors duration-200">
                    {caseName}
                  </h3>
                  <p className="text-xs text-stone-400 font-mono capitalize">
                    {c.specialty === "surgery" ? (isArabic ? "جراحة" : "Surgery") : (isArabic ? "باطنة" : "Internal Medicine")}
                  </p>
                </div>
              </div>

              {/* Start Button */}
              <div className={`flex ${isSearchingOrArabic(isArabic) ? "justify-start" : "justify-end"} mt-4`}>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-medium bg-navy/5 text-navy group-hover:bg-navy group-hover:text-gold transition-all duration-200">
                  {t.startBtn}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Quick helper to determine direction alignment
function isSearchingOrArabic(ar: boolean) {
  return ar;
}
