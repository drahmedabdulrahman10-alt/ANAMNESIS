/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Case, SessionHeaderData, SessionData } from "./types";
import { CASE_BANK } from "./data/cases";
import { generateClinicalWriteUp } from "./utils/generator";
import SessionHeader from "./components/SessionHeader";
import CaseSelection from "./components/CaseSelection";
import HistoryForm from "./components/HistoryForm";
import WriteUpOutput from "./components/WriteUpOutput";
import { Globe, RefreshCw, AlertCircle, Sparkles, BookOpen, Github } from "lucide-react";

export default function App() {
  const getTodayFormatted = () => {
    const d = new Date();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${d.getFullYear()}-${month}-${day}`;
  };

  // State Declarations
  const [isArabic, setIsArabic] = useState<boolean>(false);
  const [activeCase, setActiveCase] = useState<Case | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [sessionHeader, setSessionHeader] = useState<SessionHeaderData>({
    students: [""],
    sectionNumber: "",
    groupYear: "",
    date: getTodayFormatted(),
  });
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [writeUpText, setWriteUpText] = useState<string>("");

  // Restore Session banner states
  const [showRestoreBanner, setShowRestoreBanner] = useState<boolean>(false);
  const [savedSessionTemp, setSavedSessionTemp] = useState<SessionData | null>(null);

  // 1. On Mount: Check for saved session
  useEffect(() => {
    try {
      const stored = localStorage.getItem("medcrux_last_session");
      if (stored) {
        const parsed = JSON.parse(stored) as SessionData;
        if (parsed && parsed.caseId) {
          setSavedSessionTemp(parsed);
          setShowRestoreBanner(true);
        }
      }
    } catch (e) {
      console.error("Failed to read last session from localStorage", e);
    }
  }, []);

  // 2. Real-time Auto-save on State Actions
  useEffect(() => {
    if (activeCase) {
      const sessionData: SessionData = {
        caseId: activeCase.id,
        currentStepIndex,
        header: sessionHeader,
        answers,
      };
      localStorage.setItem("medcrux_last_session", JSON.stringify(sessionData));
    }
  }, [activeCase, currentStepIndex, sessionHeader, answers]);

  // Handle Restore Click
  const handleRestoreSession = () => {
    if (savedSessionTemp) {
      const matchedCase = CASE_BANK.find((c) => c.id === savedSessionTemp.caseId);
      if (matchedCase) {
        setActiveCase(matchedCase);
        setCurrentStepIndex(savedSessionTemp.currentStepIndex || 0);
        setSessionHeader(savedSessionTemp.header || {
          students: [""],
          sectionNumber: "",
          groupYear: "",
          date: getTodayFormatted(),
        });
        setAnswers(savedSessionTemp.answers || {});
        setWriteUpText(""); // Clear output view
      }
    }
    setShowRestoreBanner(false);
  };

  // Handle Start Fresh
  const handleStartFresh = () => {
    localStorage.removeItem("medcrux_last_session");
    setSavedSessionTemp(null);
    setShowRestoreBanner(false);
    
    // Reset all form states
    setActiveCase(null);
    setCurrentStepIndex(0);
    setSessionHeader({
      students: [""],
      sectionNumber: "",
      groupYear: "",
      date: getTodayFormatted(),
    });
    setAnswers({});
    setWriteUpText("");
  };

  // Handle Select Case from Selection Grid
  const handleSelectCase = (selectedCase: Case) => {
    setActiveCase(selectedCase);
    setCurrentStepIndex(0);
    setAnswers({});
    setWriteUpText("");
  };

  const updateAnswer = (id: string, value: any) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Generate the report text
  const handleGenerateWriteUp = () => {
    if (!activeCase) return;
    const report = generateClinicalWriteUp(activeCase, sessionHeader, answers);
    setWriteUpText(report);
  };

  const handleStartNewCase = () => {
    // Clear and start fresh
    setActiveCase(null);
    setCurrentStepIndex(0);
    setAnswers({});
    setWriteUpText("");
  };

  // Arabic vs English general banner translations
  const bannerTranslations = {
    restoreMsg: isArabic 
      ? "توجد جلسة غير محفوظة لمريض سابق. هل تريد استئناف تفريغ الحالة؟" 
      : "You have an unsaved session in progress. Restore it?",
    restoreBtn: isArabic ? "استعادة" : "Restore",
    freshBtn: isArabic ? "بدء جديد" : "Start Fresh",
    brandInfo: isArabic ? "مساعد التاريخ المرضي المصرى" : "Egyptian Clinical History Guide",
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col transition-colors duration-200 selection:bg-gold/30 selection:text-navy">
      {/* ────────────────────────────────────────────────────────
          BRAND HEADER BAR
          ──────────────────────────────────────────────────────── */}
      <header className="bg-navy h-[64px] px-4 md:px-8 flex items-center justify-between shadow-lg z-30 print:hidden select-none">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gold/10 rounded flex items-center justify-center border border-gold/30 text-gold">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <span className="text-gold text-2xl font-semibold tracking-wide font-heading uppercase">
            Anamnesis
          </span>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <div className="bg-white/10 rounded-full p-1 flex items-center cursor-pointer border border-gold/30">
            <button
              onClick={() => setIsArabic(false)}
              className={`px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-bold transition-all ${
                !isArabic ? "bg-gold text-navy" : "text-white/70 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setIsArabic(true)}
              className={`px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-bold transition-all ${
                isArabic ? "bg-gold text-navy" : "text-white/70 hover:text-white"
              }`}
            >
              AR
            </button>
          </div>
          <div className="text-white/50 text-[10px] md:text-xs text-right hidden sm:block">
            <p>V1.2.0</p>
            <p>Egyptian Medical Edition</p>
          </div>
        </div>
      </header>

      {/* ────────────────────────────────────────────────────────
          SESSION RESTORE CORNER BANNER (Non-intrusive notification)
          ──────────────────────────────────────────────────────── */}
      {showRestoreBanner && (
        <div className="w-full bg-gold/15 border-b border-gold/30 print:hidden transition-all py-3 flex justify-center">
          <div 
            className="w-full max-w-6xl px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-stone-800"
            style={{ direction: isArabic ? "rtl" : "ltr" }}
          >
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-gold shrink-0" />
              <span className="font-medium">{bannerTranslations.restoreMsg}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleRestoreSession}
                className="px-4 py-1.5 bg-navy text-gold text-xs font-bold rounded-lg hover:opacity-95 transition-all shadow-xs cursor-pointer"
              >
                {bannerTranslations.restoreBtn}
              </button>
              <button
                onClick={handleStartFresh}
                className="px-3 py-1.5 bg-white text-stone-700 border border-stone-200 text-xs font-bold rounded-lg hover:bg-stone-50 transition-all cursor-pointer"
              >
                {bannerTranslations.freshBtn}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────
          MAIN WORKSPACE
          ──────────────────────────────────────────────────────── */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8 space-y-6">
        
        {/* VIEW 1: Static / Collapsible Header section for student audit details */}
        {/* Only hide during completed Write-up outputs */}
        {writeUpText === "" && (
          <SessionHeader 
            data={sessionHeader} 
            onChange={setSessionHeader} 
            isArabic={isArabic} 
          />
        )}

        {/* ────────────────────────────────────────────────────────
            CONDITIONAL ROUTING VIEW SYSTEM (4 major structural views)
            ──────────────────────────────────────────────────────── */}
        {activeCase === null ? (
          
          /* VIEW 2: CASE SELECTION TAB GRID */
          <CaseSelection 
            onSelectCase={handleSelectCase} 
            isArabic={isArabic} 
          />

        ) : writeUpText === "" ? (

          /* VIEW 3: DYNAMIC BILINGUAL FORM FOR CHOSEN CASE */
          <div className="space-y-4">
            
            {/* Quick mini-heading to change case easily */}
            <div 
              className="flex items-center justify-between px-2"
              style={{ direction: isArabic ? "rtl" : "ltr" }}
            >
              <div className="flex items-center gap-2 text-stone-500 text-xs">
                <BookOpen className="w-4 h-4 text-gold" />
                <span className="font-semibold uppercase tracking-wider font-mono">
                  {isArabic ? "الحالة المفتوحة:" : "Active Case:"}
                </span>
                <span className="font-bold text-navy">
                  {isArabic ? activeCase.name_ar : activeCase.name_en}
                </span>
              </div>
              <button
                onClick={handleStartNewCase}
                className="text-xs font-semibold text-gold hover:text-navy transition-colors flex items-center gap-1 cursor-pointer"
              >
                ← {isArabic ? "تغيير الحالة" : "Change Case"}
              </button>
            </div>

            <HistoryForm
              activeCase={activeCase}
              currentStepIndex={currentStepIndex}
              onSetStepIndex={setCurrentStepIndex}
              answers={answers}
              onUpdateAnswer={updateAnswer}
              isArabic={isArabic}
              onGenerateWriteUp={handleGenerateWriteUp}
            />
          </div>

        ) : (

          /* VIEW 4: CLINICAL DOCUMENT WRITE-UP PRINT/PDF DISPLAY */
          <WriteUpOutput
            writeUpText={writeUpText}
            onNewCase={handleStartNewCase}
            isArabic={isArabic}
          />

        )}

      </main>

      {/* Small subtle Egyptian hospital stamp footer */}
      <footer className="w-full bg-white border-t border-stone-200 py-6 text-center text-xs text-stone-400 font-mono print:hidden">
        Anamnesis — Egyptian Medical Edition © {new Date().getFullYear()}
        <span className="text-[#C4922A] mx-2">·</span>
        <a
          href="https://github.com/drahmedabdulrahman10-alt"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C4922A] no-underline hover:underline inline-flex items-center gap-1 align-middle"
        >
          <Github size={16} className="text-[#C4922A]" />
          Ahmed Abdulrahman
        </a>
        <span className="text-[#C4922A] mx-2">|</span>
        <a
          href="https://www.linkedin.com/in/ahmed-abdulrahman-shaban-abdulrahman"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C4922A] no-underline hover:underline inline-flex items-center gap-1 align-middle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-[#C4922A]"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
