/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Case, SessionHeaderData } from "../types";

/**
 * Builds a beautifully formatted clinical write-up in English from form answers
 * and session headers, strictly conforming to Egyptian clinical conventions.
 */
export function generateClinicalWriteUp(
  activeCase: Case,
  header: SessionHeaderData,
  answers: Record<string, any>
): string {
  // 1. Title / Header Block
  let output = "";
  
  // Format Date beautifully
  const dateStr = header.date ? new Date(header.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }) : new Date().toLocaleDateString("en-US");

  output += `Anamnesis\n`;
  output += `Date: ${dateStr}`;
  if (header.students && header.students.filter(s => s.trim().length > 0).length > 0) {
    output += `  |  Student(s): ${header.students.filter(s => s.trim()).join(", ")}`;
  }
  if (header.sectionNumber) {
    output += `  |  Section: ${header.sectionNumber}`;
  }
  if (header.groupYear) {
    output += `  |  Group: ${header.groupYear}`;
  }
  output += `\n`;
  output += `═`.repeat(60) + `\n`;
  output += `${activeCase.name_en.toUpperCase()} — ${activeCase.specialty.toUpperCase()} CASE REPORT\n`;
  output += `═`.repeat(60) + `\n\n`;

  // Helper to safely fetch answer
  const getVal = (id: string) => answers[id];

  // Helper to format option or string value
  const formatValue = (id: string, q: any): string => {
    const val = getVal(id);
    if (val === undefined || val === null || val === "") return "";
    if (q.type === "radio" || q.type === "select") {
      const option = q.options?.find((o: any) => o.value === val);
      return option ? option.label_en : String(val);
    }
    if (q.type === "checkbox") {
      return val ? "Yes" : "No";
    }
    return String(val);
  };

  // We should render each section in the medical-record order
  // personal_history → presenting_complaint → hopi → past_medical_history → drug_history → family_history → social_history → systemic_review → general_examination → local_examination
  const sectionOrder = [
    "personal_history",
    "presenting_complaint",
    "hopi",
    "past_medical_history",
    "drug_history",
    "family_history",
    "social_history",
    "systemic_review",
    "general_examination",
    "local_examination",
  ];

  sectionOrder.forEach((sectionId) => {
    const section = activeCase.sections.find((s) => s.id === sectionId);
    if (!section) return;

    // Check if there are any answers in this section
    const sectionQuestions = section.questions;
    const hasAnyAnswers = sectionQuestions.some((q) => {
      const val = getVal(q.id);
      return val !== undefined && val !== null && val !== "";
    });

    if (!hasAnyAnswers) return; // Skip completely empty sections

    output += `${section.title_en.toUpperCase()}:\n`;

    // Special logic for Personal History:
    // "[Name], a [age]-year-old [sex], [occupation], presented with..."
    if (sectionId === "personal_history") {
      const pName = getVal("patient_name") || getVal("name") || "The patient";
      const pAge = getVal("age");
      const pSexVal = getVal("sex");
      const pSex = pSexVal === "female" ? "female" : pSexVal === "male" ? "male" : "patient";
      const pOccupation = getVal("occupation") || "unemployed";
      const pResidence = getVal("residence");
      const pMaritalRaw = getVal("marital_status");
      const pMarital = pMaritalRaw === "single" ? "single" : pMaritalRaw === "married" ? "married" : pMaritalRaw === "widowed" ? "widowed/divorced" : "";

      // If we have custom write_up_hints on any personal history fields, construct dynamically
      const hasHints = sectionQuestions.some(q => q.write_up_hint);
      if (hasHints) {
        let sentences: string[] = [];
        sectionQuestions.forEach((q) => {
          const val = getVal(q.id);
          if (val === undefined || val === null || val === "") return;
          const formatted = formatValue(q.id, q);
          if (q.write_up_hint) {
            sentences.push(q.write_up_hint.replace("{value}", formatted));
          } else {
            sentences.push(`${q.label_en}: ${formatted}`);
          }
        });
        output += `${sentences.join(" ")}\n\n`;
        return;
      }

      let sentence = `${pName}`;
      if (pAge) sentence += `, a ${pAge}-year-old ${pSex}`;
      else sentence += `, a ${pSex}`;
      
      if (pOccupation) sentence += ` who works as a ${pOccupation.toLowerCase()}`;
      if (pMarital) sentence += `, currently ${pMarital}`;
      if (pResidence) sentence += `, residing in ${pResidence}`;
      
      // Let's add other text inputs in personal history if any
      const otherPHParts: string[] = [];
      sectionQuestions.forEach((q) => {
        if (["patient_name", "name", "age", "sex", "occupation", "residence", "marital_status"].includes(q.id)) return;
        const v = formatValue(q.id, q);
        if (v) {
          otherPHParts.push(`${q.label_en}: ${v}`);
        }
      });
      if (otherPHParts.length > 0) {
        sentence += `. (${otherPHParts.join(", ")})`;
      }
      
      sentence += ".";
      output += `${sentence}\n\n`;
      return;
    }

    // Special logic for Presenting Complaint:
    if (sectionId === "presenting_complaint") {
      const hasHints = sectionQuestions.some(q => q.write_up_hint);
      if (hasHints) {
        let sentences: string[] = [];
        sectionQuestions.forEach((q) => {
          const val = getVal(q.id);
          if (val === undefined || val === null || val === "") return;
          const formatted = formatValue(q.id, q);
          if (q.write_up_hint) {
            sentences.push(q.write_up_hint.replace("{value}", formatted));
          } else {
            sentences.push(`${q.label_en}: ${formatted}`);
          }
        });
        output += `${sentences.join(" ")}\n\n`;
        return;
      }

      let cc = "";
      let dur = "";
      
      if (activeCase.id === "salivary_gland_swelling") {
        const symptomsVal = getVal("symptoms") || {};
        const qSymptoms = sectionQuestions.find(q => q.id === "symptoms");
        const positives: string[] = [];
        if (qSymptoms && qSymptoms.items) {
          qSymptoms.items.forEach(item => {
            if (symptomsVal[item.id] === true) {
              positives.push(item.label_en);
            }
          });
        }
        cc = positives.length > 0 ? positives.join(" and ") : "salivary gland symptoms";
        
        const durVal = getVal("duration_value");
        const durUnitRaw = getVal("duration_unit");
        const qDurUnit = sectionQuestions.find(q => q.id === "duration_unit");
        const durUnitOption = qDurUnit?.options?.find((o: any) => o.value === durUnitRaw);
        const durUnit = durUnitOption ? durUnitOption.label_en.toLowerCase() : "";
        if (durVal !== undefined && durVal !== "") {
          dur = `${durVal} ${durUnit || "days"}`;
        }
      } else {
        cc = getVal("complaint") || getVal("chief_complaint") || getVal("breast_complaint") || getVal("groin_swelling") || getVal("resp_complaint") || getVal("cardio_complaint") || getVal("abdominal_complaint") || "symptoms";
        dur = getVal("duration_complaint") || getVal("breast_complaint_dur") || getVal("groin_swelling_dur") || getVal("resp_dur") || getVal("cardio_dur") || getVal("abdominal_dur") || "";
      }

      let sentence = "";
      if (getVal("complaint")) {
        sentence = `Presented with a chief complaint of: ${cc}`;
      } else {
        sentence = `Presented with a chief complaint of "${cc}"`;
        if (dur) sentence += ` for ${dur}`;
      }
      sentence += ".";
      
      output += `${sentence}\n\n`;
      return;
    }

    // Normal paragraph building for other sections
    let paragraphs: string[] = [];
    let currentParagraphSentence: string[] = [];

    sectionQuestions.forEach((q) => {
      const id = q.id;
      const val = getVal(id);

      // Skip heading types
      if (q.type === "heading") return;

      if (val === undefined || val === null || val === "") return;

      // Checkbox type yes/no toggle
      if (q.type === "checkbox") {
        if (val === true) {
          currentParagraphSentence.push(`Positive for ${q.label_en.toLowerCase()}`);
        } else if (val === false && q.marked_if_negative) {
          currentParagraphSentence.push(`Denies ${q.label_en.toLowerCase()}`);
        }
        return;
      }

      // Multicheck type
      if (q.type === "multicheck" && q.items) {
        const positives: string[] = [];
        const negatives: string[] = [];

        q.items.forEach((item) => {
          // Multicheck answers are stored in `answers` as a dictionary { [itemId]: boolean }
          const itemVal = val[item.id];
          if (itemVal === true) {
            positives.push(item.label_en.toLowerCase());
          } else if (itemVal === false) {
            negatives.push(item.label_en.toLowerCase());
          }
        });

        if (positives.length > 0) {
          currentParagraphSentence.push(
            `Reports the following symptoms: ${positives.join(", ")}`
          );
        }
        if (negatives.length > 0) {
          currentParagraphSentence.push(
            `Denies the presence of: ${negatives.join(", ")}`
          );
        }
        return;
      }

      // Dropdown, text, textarea, number, radio
      const formatted = formatValue(id, q);
      if (formatted) {
        if (q.write_up_hint) {
          const formattedWithUnit = `${formatted}${q.unit_en ? ` ${q.unit_en}` : ""}`;
          currentParagraphSentence.push(q.write_up_hint.replace("{value}", formattedWithUnit));
        } else {
          const unit = q.unit_en ? ` ${q.unit_en}` : "";
          currentParagraphSentence.push(`${q.label_en}: ${formatted}${unit}`);
        }
      }
    });

    if (currentParagraphSentence.length > 0) {
      paragraphs.push(currentParagraphSentence.join(". ") + ".");
    }

    output += paragraphs.join("\n\n") + "\n\n";
  });

  return output;
}
