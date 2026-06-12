/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Case, Section, Question, Option, MulticheckItem } from "../types";
import { ChevronLeft, ChevronRight, CheckCircle, HelpCircle, ArrowLeftRight } from "lucide-react";

interface HistoryFormProps {
  activeCase: Case;
  currentStepIndex: number;
  onSetStepIndex: (index: number) => void;
  answers: Record<string, any>;
  onUpdateAnswer: (id: string, value: any) => void;
  isArabic: boolean;
  onGenerateWriteUp: () => void;
}

export default function HistoryForm({
  activeCase,
  currentStepIndex,
  onSetStepIndex,
  answers,
  onUpdateAnswer,
  isArabic,
  onGenerateWriteUp,
}: HistoryFormProps) {
  const sections = activeCase.sections;
  const currentSection = sections[currentStepIndex];

  if (!currentSection) return null;

  // Navigation handlers
  const handleNext = () => {
    if (currentStepIndex < sections.length - 1) {
      onSetStepIndex(currentStepIndex + 1);
      // Scroll to top of form
      document.getElementById("history-form-root")?.scrollIntoView({ behavior: "smooth" });
    } else {
      onGenerateWriteUp();
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      onSetStepIndex(currentStepIndex - 1);
      document.getElementById("history-form-root")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Label translations
  const t = {
    step: isArabic ? "الخطوة" : "Step",
    of: isArabic ? "من" : "of",
    back: isArabic ? "السابق" : "Back",
    next: isArabic ? "التالي" : "Next",
    generate: isArabic ? "توليد التقرير النهائي ✦" : "Generate Write-Up ✦",
    yes: isArabic ? "نعم" : "Yes",
    no: isArabic ? "لا" : "No",
    requiredWarn: isArabic ? "هذا الحقل مطلوب" : "Required field",
    selectPlaceholder: isArabic ? "اختر من الخصائص..." : "Select description...",
  };

  // Check if all required questions in current section are answered
  const isSectionStepValid = () => {
    const requiredQs = currentSection.questions.filter((q) => q.required);
    for (const q of requiredQs) {
      const val = answers[q.id];
      if (val === undefined || val === null || val === "") {
        return false;
      }
    }
    return true;
  };

  const renderHint = (q: Question) => {
    const hint = isArabic ? q.hint_ar : q.hint_en;
    if (!hint) return null;
    return (
      <p className="text-xs text-stone-500 italic mt-0.5 flex items-center gap-1">
        <span className="text-gold/80 font-mono">ℹ</span> {hint}
      </p>
    );
  };

  // Render questions inside current step
  const renderField = (q: Question) => {
    const value = answers[q.id];

    switch (q.type) {
      case "heading":
        return (
          <div key={q.id} className="pt-4 pb-2 border-b border-gold/20">
            <h4 className="text-md font-bold font-heading text-gold flex items-center gap-2">
              <span>✦</span>
              <span>{isArabic ? q.label_ar : q.label_en}</span>
            </h4>
          </div>
        );

      case "text":
        return (
          <div key={q.id} className="space-y-1.5">
            <label className="block text-sm font-semibold text-[#1A1A2E] font-heading">
              {isArabic ? q.label_ar : q.label_en}
              {q.required && <span className="text-rose-600 ml-1 font-sans">*</span>}
            </label>
            {renderHint(q)}
            <input
              type="text"
              value={value || ""}
              onChange={(e) => onUpdateAnswer(q.id, e.target.value)}
              placeholder={isArabic ? "ادخل النص هنا..." : "Type description..."}
              className="w-full p-2.5 bg-[#F8F6F1]/50 border border-[#0D1B3E]/20 rounded-lg text-text-primary text-sm focus:ring-1 focus:ring-gold outline-none transition-all"
            />
          </div>
        );

      case "number":
        return (
          <div key={q.id} className="space-y-1.5">
            <label className="block text-sm font-semibold text-[#1A1A2E] font-heading">
              {isArabic ? q.label_ar : q.label_en}
              {q.required && <span className="text-rose-600 ml-1 font-sans">*</span>}
            </label>
            {renderHint(q)}
            <div className="relative flex items-center">
              <input
                type="number"
                value={value !== undefined ? value : ""}
                onChange={(e) => onUpdateAnswer(q.id, e.target.value === "" ? "" : Number(e.target.value))}
                placeholder="---"
                className="w-full p-2.5 pr-20 bg-[#F8F6F1]/50 border border-[#0D1B3E]/20 rounded-lg text-text-primary text-sm focus:ring-1 focus:ring-gold outline-none transition-all"
              />
              <span className="absolute right-4 text-xs font-semibold text-[#0D1B3E]/60 select-none">
                {isArabic ? (q.unit_ar || "") : (q.unit_en || "")}
              </span>
            </div>
          </div>
        );

      case "textarea":
        return (
          <div key={q.id} className="space-y-1.5">
            <label className="block text-sm font-semibold text-[#1A1A2E] font-heading">
              {isArabic ? q.label_ar : q.label_en}
              {q.required && <span className="text-rose-600 ml-1 font-sans">*</span>}
            </label>
            {renderHint(q)}
            <textarea
              rows={4}
              value={value || ""}
              onChange={(e) => onUpdateAnswer(q.id, e.target.value)}
              placeholder={isArabic ? "اكتب السرد الإكلينيكي بالتفصيل..." : "Describe clinical findings in detail..."}
              className="w-full p-2.5 bg-[#F8F6F1]/50 border border-[#0D1B3E]/20 rounded-lg text-text-primary text-sm focus:ring-1 focus:ring-gold outline-none transition-all"
            />
          </div>
        );

      case "radio":
        return (
          <div key={q.id} className="space-y-1.5">
            <label className="block text-sm font-semibold text-[#1A1A2E] font-heading">
              {isArabic ? q.label_ar : q.label_en}
              {q.required && <span className="text-rose-600 ml-1 font-sans">*</span>}
            </label>
            {renderHint(q)}
            <div className="flex flex-wrap gap-2">
              {q.options?.map((opt) => {
                const isSelected = value === opt.value;
                return (
                  <button
                    type="button"
                    key={opt.value}
                    onClick={() => onUpdateAnswer(q.id, opt.value)}
                    className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? "bg-[#0D1B3E] text-white border-[#0D1B3E] shadow-sm"
                        : "bg-white text-[#0D1B3E]/60 border-[#0D1B3E]/10 hover:border-[#0D1B3E]/30"
                    }`}
                  >
                    {isArabic ? opt.label_ar : opt.label_en}
                  </button>
                );
              })}
            </div>
          </div>
        );

      case "select":
        return (
          <div key={q.id} className="space-y-1.5">
            <label className="block text-sm font-semibold text-[#1A1A2E] font-heading">
              {isArabic ? q.label_ar : q.label_en}
              {q.required && <span className="text-rose-600 ml-1 font-sans">*</span>}
            </label>
            {renderHint(q)}
            <select
              value={value || ""}
              onChange={(e) => onUpdateAnswer(q.id, e.target.value)}
              className="w-full p-2.5 bg-[#F8F6F1]/50 border border-[#0D1B3E]/20 rounded-lg text-text-primary text-sm focus:ring-1 focus:ring-gold outline-none transition-all"
            >
              <option value="">{t.selectPlaceholder}</option>
              {q.options?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {isArabic ? opt.label_ar : opt.label_en}
                </option>
              ))}
            </select>
          </div>
        );

      case "checkbox":
        return (
          <div key={q.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white rounded-lg border border-[#0D1B3E]/10 gap-3">
            <div className="space-y-0.5 max-w-lg">
              <span className="block text-sm font-semibold text-[#1A1A2E] font-heading">
                {isArabic ? q.label_ar : q.label_en}
                {q.required && <span className="text-rose-600 ml-1 font-sans">*</span>}
              </span>
              {renderHint(q)}
            </div>
            
            {/* Split Toggle matching Professional Polish design */}
            <div className="flex gap-0 border border-[#0D1B3E]/10 rounded-lg overflow-hidden shrink-0">
              <button
                type="button"
                onClick={() => onUpdateAnswer(q.id, true)}
                className={`px-4 py-2 text-xs font-bold transition-all duration-150 flex items-center justify-center gap-1.5 min-w-[80px] cursor-pointer ${
                  value === true
                    ? "bg-[#0D1B3E] text-white"
                    : "bg-gray-100 text-[#0D1B3E]/50 hover:bg-gray-200"
                }`}
              >
                <span>✔</span>
                <span>{isArabic ? "نعم" : "YES"}</span>
              </button>
              <button
                type="button"
                onClick={() => onUpdateAnswer(q.id, false)}
                className={`px-4 py-2 text-xs font-bold transition-all duration-150 flex items-center justify-center gap-1.5 min-w-[80px] cursor-pointer ${
                  value === false
                    ? "bg-[#0D1B3E] text-white"
                    : "bg-gray-100 text-[#0D1B3E]/50 hover:bg-gray-200"
                }`}
              >
                <span>✘</span>
                <span>{isArabic ? "لا" : "NO"}</span>
              </button>
            </div>
          </div>
        );

      case "multicheck":
        return (
          <div key={q.id} className="space-y-3">
            <label className="block text-sm font-semibold text-[#1A1A2E] font-heading">
              {isArabic ? q.label_ar : q.label_en}
              {q.required && <span className="text-rose-600 ml-1 font-sans">*</span>}
            </label>
            {renderHint(q)}
            
            {/* Labeled grid of symptom items, 2 cols on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {q.items?.map((item) => {
                const subValueMap = value || {};
                const itemStatus = subValueMap[item.id];

                const handleToggle = (status: boolean) => {
                  onUpdateAnswer(q.id, {
                    ...subValueMap,
                    [item.id]: status,
                  });
                };

                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 bg-white border border-[#0D1B3E]/10 rounded-lg shadow-sm gap-2"
                  >
                    <span className="text-xs font-semibold text-[#1A1A2E]">
                      {isArabic ? item.label_ar : item.label_en}
                    </span>
                    
                    <div className="flex gap-0 border border-[#0D1B3E]/10 rounded-lg overflow-hidden shrink-0 scale-95 origin-right">
                      <button
                        type="button"
                        onClick={() => handleToggle(true)}
                        className={`px-3 py-1.5 text-[10px] font-bold transition-all duration-150 ${
                          itemStatus === true
                            ? "bg-[#0D1B3E] text-white"
                            : "bg-gray-100 text-[#0D1B3E]/50 hover:bg-[#F8F6F1]"
                        }`}
                      >
                        {isArabic ? "نعم" : "YES"}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleToggle(false)}
                        className={`px-3 py-1.5 text-[10px] font-bold transition-all duration-150 ${
                          itemStatus === false
                            ? "bg-[#0D1B3E] text-white"
                            : "bg-gray-100 text-[#0D1B3E]/50 hover:bg-[#F8F6F1]"
                        }`}
                      >
                        {isArabic ? "لا" : "NO"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div 
      id="history-form-root" 
      className="w-full bg-white rounded-xl border border-navy/10 shadow-sm overflow-hidden"
    >
      {/* Current Step Title & Navigation Guide */}
      <div className="p-6 bg-stone-50 border-b border-stone-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div 
          className="space-y-1"
          style={{ direction: isArabic ? "rtl" : "ltr" }}
        >
          <div className="text-xs font-mono font-bold text-gold tracking-wider uppercase">
            {t.step} {currentStepIndex + 1} {t.of} {sections.length}
          </div>
          <h3 className="text-xl font-bold font-heading text-navy">
            {isArabic ? currentSection.title_ar : currentSection.title_en}
          </h3>
        </div>

        {/* Step dots with numbers with connector lines */}
        <div className="flex items-center gap-1 max-w-full overflow-x-auto py-1">
          {sections.map((sec, idx) => {
            const isActive = idx === currentStepIndex;
            const isCompleted = idx < currentStepIndex;
            
            return (
              <React.Fragment key={sec.id}>
                {idx > 0 && (
                  <div className={`w-3 sm:w-5 h-[2px] shrink-0 ${isCompleted || isActive ? "bg-gold/40" : "bg-navy/10"}`} />
                )}
                <button
                  type="button"
                  onClick={() => onSetStepIndex(idx)}
                  className="relative group focus:outline-none shrink-0 cursor-pointer"
                  title={isArabic ? sec.title_ar : sec.title_en}
                >
                  {isActive ? (
                    <div className="w-8 h-8 rounded-full border-2 border-gold flex items-center justify-center text-gold font-bold text-sm bg-white shadow-sm">
                      {idx + 1}
                    </div>
                  ) : isCompleted ? (
                    <div className="w-8 h-8 rounded-full border-2 border-gold/50 flex items-center justify-center text-gold/80 font-bold text-sm bg-gold/5">
                      {idx + 1}
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full border border-navy/20 flex items-center justify-center text-[#0D1B3E]/30 hover:text-gold hover:border-gold font-bold text-sm bg-white transition-all">
                      {idx + 1}
                    </div>
                  )}
                </button>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Golden progress bar */}
      <div className="w-full h-1 bg-stone-100 relative">
        <div 
          className="h-full bg-gold transition-all duration-300"
          style={{ 
            width: `${((currentStepIndex + 1) / sections.length) * 100}%`,
            left: isArabic ? "auto" : 0,
            right: isArabic ? 0 : "auto",
          }}
        />
      </div>

      {/* Dynamic Form Content */}
      <div 
        className="p-6 md:p-8 space-y-6"
        style={{ direction: isArabic ? "rtl" : "ltr" }}
      >
        <div className="space-y-6">
          {currentSection.questions.map((q) => {
            // Apply gold left border highlighting if it is a heading
            if (q.type === "heading") {
              return renderField(q);
            }
            
            return (
              <div 
                key={q.id} 
                className="border-r-0 border-l border-l-gold/20 hover:border-l-gold/70 pl-4 py-1 transition-colors duration-200"
                style={{
                  borderLeftWidth: isArabic ? "0px" : "2px",
                  borderRightWidth: isArabic ? "2px" : "0px",
                  borderRightColor: isArabic ? "#C4922A" : "transparent",
                  paddingLeft: isArabic ? "0px" : "1rem",
                  paddingRight: isArabic ? "1rem" : "0px",
                }}
              >
                {renderField(q)}
              </div>
            );
          })}
        </div>

        {/* Action Bottom Nav Buttons */}
        <div className="pt-6 border-t border-[#0D1B3E]/10 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStepIndex === 0}
            className={`py-3 px-6 border rounded-lg text-sm font-bold transition-all ${
              currentStepIndex === 0
                ? "bg-gray-50 border-gray-200 text-gray-350 cursor-not-allowed"
                : "border-[#0D1B3E]/20 text-[#0D1B3E] hover:bg-gray-50 cursor-pointer"
            }`}
          >
            <span className="flex items-center gap-1.5">
              {isArabic ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
              <span>{t.back}</span>
            </span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={!isSectionStepValid()}
            className={`py-3 px-6 rounded-lg text-sm font-bold shadow-md transition-all cursor-pointer ${
              !isSectionStepValid()
                ? "bg-[#0D1B3E]/10 border border-[#0D1B3E]/10 text-[#0D1B3E]/30 cursor-not-allowed"
                : "bg-[#0D1B3E] text-white hover:bg-[#1A1A2E]"
            }`}
          >
            <span className="flex items-center gap-1.5">
              <span>
                {currentStepIndex === sections.length - 1 ? t.generate : t.next}
              </span>
              {currentStepIndex !== sections.length - 1 && (
                isArabic ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
