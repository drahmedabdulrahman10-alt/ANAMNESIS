/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { RefreshCw, FileText } from "lucide-react";

interface WriteUpOutputProps {
  writeUpText: string;
  onNewCase: () => void;
  isArabic: boolean;
}

export default function WriteUpOutput({ writeUpText, onNewCase, isArabic }: WriteUpOutputProps) {
  


  // Active status query for toolbar
  const updateToolbarStates = () => {
    try {
      const isBold = document.queryCommandState("bold");
      const isItalic = document.queryCommandState("italic");
      const isUnderline = document.queryCommandState("underline");
      const isBulletList = document.queryCommandState("insertUnorderedList");
      
      const formatBlock = document.queryCommandValue("formatBlock");
      const isHeading = formatBlock === "h2" || formatBlock === "H2" || formatBlock === "h1" || formatBlock === "H1";

      const btnBold = document.getElementById("format-btn-bold");
      const btnItalic = document.getElementById("format-btn-italic");
      const btnUnderline = document.getElementById("format-btn-underline");
      const btnUnderline2 = document.getElementById("format-btn-underline-alias");
      const btnBullet = document.getElementById("format-btn-bullet");
      const btnHeading = document.getElementById("format-btn-heading");

      const activeBg = "bg-[#C4922A]";
      const normalBg = "bg-[#0D1B3E]";

      if (btnBold) {
        if (isBold) {
          btnBold.classList.remove(normalBg);
          btnBold.classList.add(activeBg);
        } else {
          btnBold.classList.remove(activeBg);
          btnBold.classList.add(normalBg);
        }
      }
      if (btnItalic) {
        if (isItalic) {
          btnItalic.classList.remove(normalBg);
          btnItalic.classList.add(activeBg);
        } else {
          btnItalic.classList.remove(activeBg);
          btnItalic.classList.add(normalBg);
        }
      }
      if (btnUnderline) {
        if (isUnderline) {
          btnUnderline.classList.remove(normalBg);
          btnUnderline.classList.add(activeBg);
        } else {
          btnUnderline.classList.remove(activeBg);
          btnUnderline.classList.add(normalBg);
        }
      }
      if (btnUnderline2) {
        if (isUnderline) {
          btnUnderline2.classList.remove(normalBg);
          btnUnderline2.classList.add(activeBg);
        } else {
          btnUnderline2.classList.remove(activeBg);
          btnUnderline2.classList.add(normalBg);
        }
      }
      if (btnBullet) {
        if (isBulletList) {
          btnBullet.classList.remove(normalBg);
          btnBullet.classList.add(activeBg);
        } else {
          btnBullet.classList.remove(activeBg);
          btnBullet.classList.add(normalBg);
        }
      }
      if (btnHeading) {
        if (isHeading) {
          btnHeading.classList.remove(normalBg);
          btnHeading.classList.add(activeBg);
        } else {
          btnHeading.classList.remove(activeBg);
          btnHeading.classList.add(normalBg);
        }
      }
    } catch (e) {
      // ignore silently
    }
  };

  useEffect(() => {
    const handleSelectionChange = () => {
      updateToolbarStates();
    };
    document.addEventListener("selectionchange", handleSelectionChange);
    updateToolbarStates();
    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, []);

  const execFormat = (cmd: string, val: string = "") => {
    try {
      document.execCommand(cmd, false, val);
      updateToolbarStates();
    } catch (e) {
      console.error("Failed to execute format style command", e);
    }
  };

  const toggleHeading = () => {
    try {
      const block = document.queryCommandValue("formatBlock");
      if (block === "h2" || block === "H2" || block === "h1" || block === "H1") {
        document.execCommand("formatBlock", false, "<p>");
      } else {
        document.execCommand("formatBlock", false, "<h2>");
      }
      updateToolbarStates();
    } catch (e) {
      console.error("Failed to toggle heading format style", e);
    }
  };

  // Translations
  const t = {
    newCase: isArabic ? "+ حالة جديدة" : "+ New Case",
    title: isArabic ? "تقرير الحالة الإكلينيكية المكتمل" : "Completed Case Write-Up",
    sub: isArabic 
      ? "التقرير مصمم ليتوافق مع السرد الإكلينيكي المعتمد للتقارير الطبية."
      : "Formatted to match the standard clinical narrative representation.",
  };

  // Pre-formatter to dynamically style report segments for Professional Polish look
  const renderPolishedText = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (trimmed === "") {
        return <div key={idx} className="h-2" />;
      }
      
      if (trimmed.startsWith("═")) {
        return <div key={idx} className="h-[2px] bg-gold/40 my-3 print:my-2" />;
      }

      if (trimmed.endsWith(":") && trimmed === trimmed.toUpperCase()) {
        return (
          <h4 
            key={idx} 
            className="text-[#0D1B3E] text-xs font-black uppercase mt-5 mb-2 underline decoration-gold underline-offset-4 tracking-tighter block"
          >
            {trimmed.replace(":", "")}
          </h4>
        );
      }
      
      if (trimmed.startsWith("Anamnesis")) {
         return (
           <div key={idx} className="text-[#0D1B3E] font-bold text-base tracking-tight font-heading">
             {trimmed}
           </div>
         );
      }
      
      return (
        <p key={idx} className="text-sm text-[#1A1A2E] leading-relaxed mb-2 font-serif">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="w-full space-y-6 pt-4 max-w-4xl mx-auto">
      {/* Inline styles for editor elements */}
      <style>{`
        #output-card h2, #output-card h1 {
          font-family: 'DM Serif Display', serif;
          font-size: 1.35rem;
          color: #0D1B3E;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
          font-weight: bold;
          line-height: 1.3;
        }
        #output-card ul {
          list-style-type: disc;
          margin-left: 1.5rem;
          margin-bottom: 0.5rem;
        }
        #output-card blockquote {
          border-left: 3px solid #C4922A;
          padding-left: 1rem;
          color: #555;
          margin-left: 0;
        }
        @media print {
          .print-hidden {
            display: none !important;
          }
        }
      `}</style>

      {/* Upper Control Ribbon */}
      <div 
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-white border border-[#0D1B3E]/10 rounded-xl shadow-xs print:hidden"
        style={{ direction: isArabic ? "rtl" : "ltr" }}
      >
        <div className="space-y-1">
          <h3 className="text-lg font-bold font-heading text-navy flex items-center gap-2">
            <FileText className="w-5 h-5 text-gold shrink-0" />
            <span>{t.title}</span>
          </h3>
          <p className="text-xs text-stone-500">
            {t.sub}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2 shrink-0">
          <button
            onClick={onNewCase}
            className="px-4 py-2 bg-[#0D1B3E] hover:opacity-90 border border-transparent text-[#C4922A] font-bold text-xs rounded-lg transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{t.newCase}</span>
          </button>
        </div>
      </div>

      {/* FIX 3 - COMPACT FORMATTING TOOLBAR ABOVE OUTPUT CARD */}
      <div 
        onMouseDown={(e) => e.stopPropagation()}
        style={{ pointerEvents: "none" }}
        className="w-full flex flex-col gap-2 p-3 bg-stone-50 border border-stone-200 rounded-xl print:hidden shadow-xs select-none"
      >
        <div className="flex flex-wrap items-center gap-2">
          {/* Logical Group 1: Bold, Italic, Underline, Underline Alias */}
          <div className="flex items-center gap-1 bg-stone-150 p-1 rounded-lg">
            <button
              id="format-btn-bold"
              style={{ pointerEvents: "auto" }}
              title="Bold"
              onClick={() => execFormat("bold")}
              className="h-8 px-2 md:px-3 flex items-center justify-center rounded-full text-xs font-bold bg-[#0D1B3E] text-white cursor-pointer transition-colors duration-150 active:scale-95 shadow-xs"
            >
              B
            </button>
            <button
              id="format-btn-italic"
              style={{ pointerEvents: "auto" }}
              title="Italic"
              onClick={() => execFormat("italic")}
              className="h-8 px-2 md:px-3 italic flex items-center justify-center rounded-full text-xs font-bold bg-[#0D1B3E] text-white cursor-pointer transition-colors duration-150 active:scale-95 shadow-xs"
            >
              I
            </button>
            <button
              id="format-btn-underline"
              style={{ pointerEvents: "auto" }}
              title="Underline"
              onClick={() => execFormat("underline")}
              className="h-8 px-2 md:px-3 underline flex items-center justify-center rounded-full text-xs font-bold bg-[#0D1B3E] text-white cursor-pointer transition-colors duration-150 active:scale-95 shadow-xs"
            >
              U
            </button>
            <button
              id="format-btn-underline-alias"
              style={{ pointerEvents: "auto" }}
              title="Underline (alias)"
              onClick={() => execFormat("underline")}
              className="h-8 px-2 md:px-3 flex items-center justify-center rounded-full text-xs font-bold bg-[#0D1B3E] text-white cursor-pointer transition-colors duration-150 active:scale-95 shadow-xs"
            >
              T̲
            </button>
          </div>

          {/* Logical Group 2: Heading Style & Bullet List */}
          <div className="flex items-center gap-1 bg-stone-150 p-1 rounded-lg">
            <button
              id="format-btn-heading"
              style={{ pointerEvents: "auto" }}
              title="Toggle Heading"
              onClick={toggleHeading}
              className="h-8 px-2 md:px-3 flex items-center justify-center rounded-full text-xs font-bold bg-[#0D1B3E] text-white cursor-pointer transition-colors duration-150 active:scale-95 shadow-xs"
            >
              H
            </button>
            <button
              id="format-btn-bullet"
              style={{ pointerEvents: "auto" }}
              title="Bullet list"
              onClick={() => execFormat("insertUnorderedList")}
              className="h-8 px-2 md:px-3 flex items-center justify-center rounded-full text-xs font-bold bg-[#0D1B3E] text-white cursor-pointer transition-colors duration-150 active:scale-95 shadow-xs"
            >
              •
            </button>
          </div>

          {/* Logical Group 3: Indent & Outdent */}
          <div className="flex items-center gap-1 bg-stone-150 p-1 rounded-lg">
            <button
              id="format-btn-outdent"
              style={{ pointerEvents: "auto" }}
              title="Outdent"
              onClick={() => execFormat("outdent")}
              className="h-8 px-2 md:px-3 flex items-center justify-center rounded-full text-xs font-bold bg-[#0D1B3E] text-white cursor-pointer transition-colors duration-150 active:scale-95 shadow-xs"
            >
              ←
            </button>
            <button
              id="format-btn-indent"
              style={{ pointerEvents: "auto" }}
              title="Indent"
              onClick={() => execFormat("indent")}
              className="h-8 px-2 md:px-3 flex items-center justify-center rounded-full text-xs font-bold bg-[#0D1B3E] text-white cursor-pointer transition-colors duration-150 active:scale-95 shadow-xs"
            >
              →
            </button>
          </div>

          {/* Logical Group 4: Undo & Redo */}
          <div className="flex items-center gap-1 bg-stone-150 p-1 rounded-lg">
            <button
              id="format-btn-undo"
              style={{ pointerEvents: "auto" }}
              title="Undo"
              onClick={() => execFormat("undo")}
              className="h-8 px-2 md:px-3 flex items-center justify-center rounded-full text-xs font-bold bg-[#0D1B3E] text-white cursor-pointer transition-colors duration-150 active:scale-95 shadow-xs"
            >
              ↺
            </button>
            <button
              id="format-btn-redo"
              style={{ pointerEvents: "auto" }}
              title="Redo"
              onClick={() => execFormat("redo")}
              className="h-8 px-2 md:px-3 flex items-center justify-center rounded-full text-xs font-bold bg-[#0D1B3E] text-white cursor-pointer transition-colors duration-150 active:scale-95 shadow-xs"
            >
              ↻
            </button>
          </div>
        </div>

        {/* Small Info Label */}
        <p className="text-xs italic text-[#C4922A] font-semibold mt-1">
          {isArabic ? "✏️ انقر في أي مكان داخل المستند للتعديل والكتابة مباشرة" : "✏️ Click anywhere in the document to edit or refine the text directly"}
        </p>
      </div>

      {/* A4 Format Document Container */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-[794px]">
          {/* Top border water-marks corner gold/navy line details for Anamnesis branding overlay */}
          <div className="absolute top-0 left-0 w-full h-[6px] bg-[#0D1B3E] z-10 pointer-events-none print:hidden" />
          <div className="absolute top-[6px] left-0 w-full h-[2px] bg-[#C4922A] z-10 pointer-events-none print:hidden" />

          {/* Print container wrapper for exact A4 print sizing */}
          <div id="print-wrapper">
            {/* Output card (Fully Editable Rich-Text Document Container in A4 style) */}
            <div 
              id="output-card" 
              className="w-full min-h-[1123px] bg-white text-[#1A1A2E] border border-stone-300 shadow-2xl p-10 md:p-12 font-serif relative leading-relaxed outline-none text-sm flex flex-col justify-between"
              style={{ 
                direction: "ltr", // History output is ALWAYS in English!
              }}
            >
              {/* Editable region wrapped inside nested div */}
              <div
                contentEditable={true}
                suppressContentEditableWarning={true}
                className="outline-none w-full flex-1"
              >
                {/* Render Polished Report */}
                <div className="antialiased selection:bg-gold/30">
                  {renderPolishedText(writeUpText)}
                </div>
              </div>

              {/* Fixed PDF Footer outside contenteditable */}
              <div 
                id="pdf-fixed-footer" 
                contentEditable={false}
                style={{
                  marginTop: "40px",
                  paddingTop: "12px",
                  borderTop: "1px solid #C4922A",
                  textAlign: "center",
                  fontSize: "9pt",
                  color: "#0D1B3E",
                  fontFamily: "'Source Serif 4', serif",
                  userSelect: "none",
                  WebkitUserModify: "read-only",
                }}
              >
                <a 
                  href="https://ais-pre-3xykxmzzcx2etq5ri6chy2-289134670550.europe-west2.run.app" 
                  style={{
                    color: "#C4922A", 
                    textDecoration: "none", 
                    fontStyle: "italic", 
                    pointerEvents: "auto"
                  }}
                >
                  🔗 Click here to visit Anamnesis — Egyptian Medical Edition
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
