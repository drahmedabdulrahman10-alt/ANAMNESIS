/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Option {
  value: string;
  label_en: string;
  label_ar: string;
}

export interface MulticheckItem {
  id: string;
  label_en: string;
  label_ar: string;
  marked_if_negative?: boolean;
}

export interface Question {
  id: string;
  label_en: string;
  label_ar: string;
  type: "text" | "number" | "checkbox" | "textarea" | "radio" | "multicheck" | "select" | "heading";
  required?: boolean;
  unit_en?: string;
  unit_ar?: string;
  options?: Option[];
  items?: MulticheckItem[]; // For multicheck
  marked_if_negative?: boolean; // For checkbox: include in writeup if false (No)
  sentence_template_en?: string; // Optional sentence formatter template, eg: "The patient reports {value}."
  write_up_hint?: string; // Optional write-up hint for generation
  hint_en?: string; // Optional field hint for users
  hint_ar?: string; // Optional field hint in Arabic for users
}

export interface Section {
  id: string; // e.g. "personal_history", "presenting_complaint", "hopi", "past_medical_history", "drug_history", "family_history", "social_history", "systemic_review", "general_examination", "local_examination"
  title_en: string;
  title_ar: string;
  questions: Question[];
}

export interface Case {
  id: string;
  specialty: "surgery" | "internal";
  icon: string;
  name_en: string;
  name_ar: string;
  sections: Section[];
}

export interface SessionHeaderData {
  students: string[];
  sectionNumber: string;
  groupYear: string;
  date: string;
}

export interface SessionData {
  caseId: string;
  caseSpecialty?: "surgery" | "internal";
  currentStepIndex: number;
  header: SessionHeaderData;
  answers: Record<string, any>; // id mapping to value (string, boolean, or array for multicheck)
}
