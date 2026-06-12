/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Plus, Trash2, Calendar, Clipboard, User, Users } from "lucide-react";
import { SessionHeaderData } from "../types";

interface SessionHeaderProps {
  data: SessionHeaderData;
  onChange: (newData: SessionHeaderData) => void;
  isArabic: boolean;
}

export default function SessionHeader({ data, onChange, isArabic }: SessionHeaderProps) {
  const [isOpen, setIsOpen] = useState(true);

  const handleStudentChange = (index: number, val: string) => {
    const updated = [...data.students];
    updated[index] = val;
    onChange({ ...data, students: updated });
  };

  const addStudent = () => {
    onChange({ ...data, students: [...data.students, ""] });
  };

  const removeStudent = (index: number) => {
    if (data.students.length <= 1) {
      onChange({ ...data, students: [""] });
      return;
    }
    const updated = data.students.filter((_, idx) => idx !== index);
    onChange({ ...data, students: updated });
  };

  const handleFieldChange = (key: keyof Omit<SessionHeaderData, "students">, val: string) => {
    onChange({ ...data, [key]: val });
  };

  // Translations
  const t = {
    title: isArabic ? "معلومات الجلسة (اختياري)" : "Session Info (Optional)",
    studentsLabel: isArabic ? "أعضاء الفريق / الأطباء" : "Student / Doctor Name(s)",
    addStudent: isArabic ? "+ إضافة اسم" : "+ Add Name",
    sectionLabel: isArabic ? "رقم السكشن" : "Section Number",
    sectionPlaceholder: isArabic ? "مثال: سكشن 3" : "e.g., Section 3",
    groupLabel: isArabic ? "المجموعة / السنة الدراسية" : "Group / Year",
    groupPlaceholder: isArabic ? "مثال: الفرقة الثالثة" : "e.g., 3rd Year",
    dateLabel: isArabic ? "التاريخ" : "Date",
    collapsedSummary: isArabic 
      ? `التاريخ: ${data.date || "-"} | السكشن: ${data.sectionNumber || "-"} | الطلاب: ${data.students.filter(Boolean).length}`
      : `Date: ${data.date || "-"} | Sec: ${data.sectionNumber || "-"} | Students: ${data.students.filter(Boolean).length}`,
  };

  return (
    <div id="session-header-card" className="w-full bg-white rounded-xl border border-[#0D1B3E]/10 shadow-sm overflow-hidden mb-6 transition-all duration-200">
      {/* Card Header Tap Target conforming to professional theme */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 bg-navy text-white text-left select-none cursor-pointer"
        style={{ direction: isArabic ? "rtl" : "ltr" }}
      >
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-gold" />
          <span className="font-heading text-lg md:text-xl font-bold tracking-tight text-white">
            {t.title}
          </span>
          {!isOpen && (
            <span className="hidden md:inline text-xs text-stone-300 font-serif pl-4 border-l border-white/20">
              {t.collapsedSummary}
            </span>
          )}
        </div>
        <div>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gold" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gold" />
          )}
        </div>
      </button>

      {/* Card Body */}
      {isOpen && (
        <div 
          className="p-6 bg-white space-y-6"
          style={{ direction: isArabic ? "rtl" : "ltr" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Students List — Left Column (Dynamic list of students/doctors) */}
            <div className="md:col-span-6 space-y-3">
              <label className="block text-sm font-semibold text-[#1A1A2E] font-heading">
                {t.studentsLabel}
              </label>
              
              <div className="space-y-2">
                {data.students.map((student, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <span className="absolute inset-y-0 left-3 flex items-center text-stone-400">
                        <User className="w-4 h-4" />
                      </span>
                      <input
                        type="text"
                        value={student}
                        onChange={(e) => handleStudentChange(index, e.target.value)}
                        placeholder={isArabic ? `الاسم #${index + 1}` : `Doctor/Student #${index + 1}`}
                        className="w-full pl-9 pr-3 py-2 bg-[#F8F6F1]/50 border border-[#0D1B3E]/20 rounded-lg text-text-primary text-sm focus:ring-1 focus:ring-gold outline-none transition-all"
                      />
                    </div>
                    {data.students.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeStudent(index)}
                        className="p-2 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors duration-150 cursor-pointer"
                        title={isArabic ? "حذف" : "Remove"}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={addStudent}
                className="inline-flex items-center gap-1 text-xs text-gold font-bold hover:text-navy transition-colors duration-150 mt-1 cursor-pointer hover:underline"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{t.addStudent}</span>
              </button>
            </div>

            {/* Other Metadata — Right Column */}
            <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Section number */}
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-[#1A1A2E] font-heading">
                  {t.sectionLabel}
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center text-stone-400">
                    <Clipboard className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    value={data.sectionNumber}
                    onChange={(e) => handleFieldChange("sectionNumber", e.target.value)}
                    placeholder={t.sectionPlaceholder}
                    className="w-full pl-9 pr-3 py-2 bg-[#F8F6F1]/50 border border-[#0D1B3E]/20 rounded-lg text-text-primary text-sm focus:ring-1 focus:ring-gold outline-none transition-all"
                  />
                </div>
              </div>

              {/* Group / Yr */}
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-[#1A1A2E] font-heading">
                  {t.groupLabel}
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center text-stone-400">
                    <Users className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    value={data.groupYear}
                    onChange={(e) => handleFieldChange("groupYear", e.target.value)}
                    placeholder={t.groupPlaceholder}
                    className="w-full pl-9 pr-3 py-2 bg-[#F8F6F1]/50 border border-[#0D1B3E]/20 rounded-lg text-text-primary text-sm focus:ring-1 focus:ring-gold outline-none transition-all"
                  />
                </div>
              </div>

              {/* Date picker */}
              <div className="sm:col-span-2 space-y-1.5">
                <label className="block text-sm font-semibold text-[#1A1A2E] font-heading">
                  {t.dateLabel}
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center text-stone-400">
                    <Calendar className="w-4 h-4" />
                  </span>
                  <input
                    type="date"
                    value={data.date}
                    onChange={(e) => handleFieldChange("date", e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-[#F8F6F1]/50 border border-[#0D1B3E]/20 rounded-lg text-text-primary text-sm focus:ring-1 focus:ring-gold outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
