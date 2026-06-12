/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// HOW TO ADD A NEW CASE: copy any case object from CASE_BANK, 
// change id/name/sections, add to the array.

import { Case } from "../types";

export const CASE_BANK: Case[] = [
  {
    id: "thyroid",
    specialty: "surgery",
    icon: "🦋",
    name_en: "Thyroid Swelling",
    name_ar: "تورم الغدة الدرقية",
    sections: [
      {
        id: "personal_history",
        title_en: "Personal History",
        title_ar: "التاريخ الشخصي",
        questions: [
          {
            id: "name",
            label_en: "Name",
            label_ar: "الاسم",
            type: "text",
            required: true,
            write_up_hint: "The patient is {value}."
          },
          {
            id: "age",
            label_en: "Age",
            label_ar: "العمر",
            type: "number",
            unit_en: "years",
            unit_ar: "سنة",
            required: true,
            write_up_hint: "The patient is {value} years old (15-20y physiological/papillary, 20-30y SNG/primary toxic, 30-40y secondary toxic goitre)."
          },
          {
            id: "sex",
            label_en: "Sex",
            label_ar: "الجنس",
            type: "radio",
            required: true,
            options: [
              { value: "male", label_en: "Male", label_ar: "ذكر" },
              { value: "female", label_en: "Female", label_ar: "أنثى" }
            ],
            write_up_hint: "The patient is a {value} (benign 9:1, malignant 3:1 more in females)."
          },
          {
            id: "marital_status",
            label_en: "Marital Status",
            label_ar: "الحالة الاجتماعية",
            type: "radio",
            required: false,
            options: [
              { value: "single", label_en: "Single", label_ar: "أعزب" },
              { value: "married", label_en: "Married", label_ar: "متزوج" }
            ]
          },
          {
            id: "special_habits",
            label_en: "Special Habits of Medical Importance",
            label_ar: "العادات الخاصة ذات الأهمية الطبية",
            type: "text",
            required: false
          },
          {
            id: "address",
            label_en: "Address",
            label_ar: "العنوان",
            type: "text",
            required: false
          },
          {
            id: "residence",
            label_en: "Residence",
            label_ar: "محل الإقامة",
            type: "text",
            required: false,
            write_up_hint: "Resides in {value} (oasis areas are endemic for goitre)."
          },
          {
            id: "occupation",
            label_en: "Occupation",
            label_ar: "المهنة",
            type: "text",
            required: false
          },
          {
            id: "menstrual_history",
            label_en: "Menstrual History",
            label_ar: "تاريخ الدورة الشهرية",
            type: "textarea",
            write_up_hint: "Menstrual history: {value} (2ry amenorrhea may be due to thyrotoxicosis or pregnancy)."
          }
        ]
      },
      {
        id: "presenting_complaint",
        title_en: "Presenting Complaint",
        title_ar: "الشكوى الرئيسية",
        questions: [
          {
            id: "complaint",
            label_en: "Presenting Complaint",
            label_ar: "الشكوى الرئيسية",
            type: "text",
            required: true,
            write_up_hint: "The patient presented with {value}."
          },
          {
            id: "complaint_duration",
            label_en: "Duration",
            label_ar: "المدة",
            type: "number",
            unit_en: "months",
            unit_ar: "شهر",
            required: true,
            write_up_hint: "Of {value} months duration."
          }
        ]
      },
      {
        id: "hopi",
        title_en: "History of Presenting Illness",
        title_ar: "تاريخ المرض الحالي",
        questions: [
          {
            id: "pain_heading",
            label_en: "Pain",
            label_ar: "الألم",
            type: "heading"
          },
          {
            id: "pain_present",
            label_en: "Pain Present",
            label_ar: "وجود ألم",
            type: "checkbox",
            marked_if_negative: true
          },
          {
            id: "pain_site",
            label_en: "Site of Pain",
            label_ar: "موضع الألم",
            type: "radio",
            required: false,
            options: [
              { value: "localized", label_en: "Localized to swelling", label_ar: "موضعي في التورم" },
              { value: "radiating_ear", label_en: "Radiating to the ear", label_ar: "ينتشر إلى الأذن" }
            ]
          },
          {
            id: "pain_character",
            label_en: "Character of Pain",
            label_ar: "طبيعة الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_radiation",
            label_en: "Radiation",
            label_ar: "انتشار الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_increase_decrease",
            label_en: "What Increases or Decreases It",
            label_ar: "ما يزيده أو ينقصه",
            type: "text",
            required: false
          },
          {
            id: "pain_onset",
            label_en: "Onset",
            label_ar: "بداية الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_course",
            label_en: "Course",
            label_ar: "مسار الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_duration",
            label_en: "Duration of Pain",
            label_ar: "مدة الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_associations",
            label_en: "What Associates",
            label_ar: "ما يصاحبه",
            type: "text",
            required: false
          },
          {
            id: "swelling_heading",
            label_en: "Swelling",
            label_ar: "التورم",
            type: "heading"
          },
          {
            id: "swelling_site",
            label_en: "Site of Swelling",
            label_ar: "موضع التورم",
            type: "text",
            required: false
          },
          {
            id: "swelling_size",
            label_en: "Size of Swelling",
            label_ar: "حجم التورم",
            type: "radio",
            required: false,
            options: [
              { value: "lemon", label_en: "Lemon size", label_ar: "بحجم الليمونة" },
              { value: "orange", label_en: "Orange size", label_ar: "بحجم البرتقالة" },
              { value: "other", label_en: "Other", label_ar: "آخر" }
            ]
          },
          {
            id: "swelling_onset",
            label_en: "Onset of Swelling",
            label_ar: "بداية التورم",
            type: "radio",
            required: false,
            options: [
              { value: "gradual", label_en: "Gradual", label_ar: "تدريجي" },
              { value: "accidental", label_en: "Accidental (e.g. SNG)", label_ar: "عرضي (مثل تضخم عقيدي بسيط)" },
              { value: "acute", label_en: "Acute (e.g. bacterial thyroiditis)", label_ar: "حاد (مثل التهاب درقي بكتيري)" }
            ]
          },
          {
            id: "swelling_course",
            label_en: "Course of Swelling",
            label_ar: "مسار التورم",
            type: "radio",
            required: false,
            options: [
              { value: "progressive", label_en: "Progressive", label_ar: "متزايد" },
              { value: "regressive", label_en: "Regressive", label_ar: "متراجع" },
              { value: "stationary", label_en: "Stationary", label_ar: "ثابت" },
              { value: "fluctuating", label_en: "Fluctuating", label_ar: "متذبذب" }
            ]
          },
          {
            id: "swelling_duration",
            label_en: "Duration of Swelling",
            label_ar: "مدة التورم",
            type: "radio",
            required: false,
            options: [
              { value: "short", label_en: "Short (days or weeks)", label_ar: "قصيرة (أيام أو أسابيع)" },
              { value: "long", label_en: "Long (months or years)", label_ar: "طويلة (شهور أو سنوات)" },
              { value: "since_birth", label_en: "Since birth (congenital)", label_ar: "منذ الولادة (خلقي)" }
            ]
          },
          {
            id: "other_swellings",
            label_en: "Other Swellings",
            label_ar: "تورمات أخرى",
            type: "multicheck",
            items: [
              {
                id: "lymph_nodes_inflammatory",
                label_en: "Lymph Nodes (inflammatory)",
                label_ar: "عقد ليمفاوية (التهابية)",
                marked_if_negative: false
              },
              {
                id: "metastasis_swellings",
                label_en: "Metastatic Swellings (malignancy)",
                label_ar: "تورمات نقيلية (خبيثة)",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "general_condition_effect",
            label_en: "Effect on General Condition",
            label_ar: "التأثير على الحالة العامة",
            type: "multicheck",
            items: [
              {
                id: "toxic_symptoms",
                label_en: "Toxic Symptoms",
                label_ar: "أعراض التسمم الدرقي",
                marked_if_negative: false
              },
              {
                id: "cachexia",
                label_en: "Cachexia (malignant symptoms)",
                label_ar: "هزال (أعراض خبيثة)",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "apparent_cause",
            label_en: "Apparent Cause (pregnancy, menstruation, lactation, emotional stress)",
            label_ar: "السبب الظاهر (الحمل، الحيض، الرضاعة، الضغط النفسي)",
            type: "text",
            required: false
          },
          {
            id: "pressure_manifestations",
            label_en: "Pressure Manifestations",
            label_ar: "أعراض الضغط",
            type: "multicheck",
            items: [
              {
                id: "positional_dyspnea",
                label_en: "Positional Dyspnea (trachea)",
                label_ar: "ضيق تنفس وضعي (القصبة الهوائية)",
                marked_if_negative: true
              },
              {
                id: "dysphagia",
                label_en: "Dysphagia (esophagus)",
                label_ar: "عسر البلع (المريء)",
                marked_if_negative: true
              },
              {
                id: "hoarseness",
                label_en: "Hoarseness of Voice (recurrent laryngeal nerve)",
                label_ar: "بحة الصوت (العصب الحنجري الراجع)",
                marked_if_negative: true
              },
              {
                id: "dizziness",
                label_en: "Dizziness (common carotid artery)",
                label_ar: "دوخة (الشريان السباتي المشترك)",
                marked_if_negative: false
              },
              {
                id: "ear_pain",
                label_en: "Ear Pain (vagus nerve)",
                label_ar: "ألم الأذن (العصب المبهم)",
                marked_if_negative: false
              },
              {
                id: "horners_syndrome",
                label_en: "Horner's Syndrome (sympathetic chain)",
                label_ar: "متلازمة هورنر (السلسلة الودية)",
                marked_if_negative: false
              },
              {
                id: "black_outs",
                label_en: "Black Outs Increasing on Bending Forward (IJV)",
                label_ar: "إغماءات تزداد عند الانحناء للأمام (الوريد الوداجي الباطن)",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "toxic_manifestations",
            label_en: "Toxic (Thyrotoxicosis) Manifestations",
            label_ar: "أعراض فرط نشاط الغدة الدرقية",
            type: "multicheck",
            items: [
              {
                id: "insomnia",
                label_en: "Insomnia",
                label_ar: "أرق",
                marked_if_negative: false
              },
              {
                id: "nightmares",
                label_en: "Nightmares",
                label_ar: "كوابيس",
                marked_if_negative: false
              },
              {
                id: "fine_tremors",
                label_en: "Fine Tremors",
                label_ar: "رعشة دقيقة",
                marked_if_negative: false
              },
              {
                id: "irritability",
                label_en: "Irritability",
                label_ar: "سرعة الانفعال",
                marked_if_negative: false
              },
              {
                id: "palpitation",
                label_en: "Palpitation",
                label_ar: "خفقان",
                marked_if_negative: true
              },
              {
                id: "high_output_hf",
                label_en: "High Cardiac Output Heart Failure",
                label_ar: "فشل قلبي بارتفاع النتاج القلبي",
                marked_if_negative: false
              },
              {
                id: "heat_intolerance",
                label_en: "Heat Intolerance",
                label_ar: "عدم تحمل الحرارة",
                marked_if_negative: true
              },
              {
                id: "exophthalmos",
                label_en: "Exophthalmos",
                label_ar: "جحوظ العين",
                marked_if_negative: false
              },
              {
                id: "diplopia",
                label_en: "Diplopia",
                label_ar: "ازدواج الرؤية",
                marked_if_negative: false
              },
              {
                id: "menorrhagia_amenorrhea",
                label_en: "Menorrhagia then Amenorrhea (female)",
                label_ar: "غزارة الطمث ثم انقطاعه (أنثى)",
                marked_if_negative: false
              },
              {
                id: "impotence",
                label_en: "Impotence (male)",
                label_ar: "ضعف الانتصاب (ذكر)",
                marked_if_negative: false
              },
              {
                id: "diarrhea",
                label_en: "Diarrhea (GIT)",
                label_ar: "إسهال (الجهاز الهضمي)",
                marked_if_negative: false
              },
              {
                id: "polyuria",
                label_en: "Polyuria (urinary)",
                label_ar: "كثرة التبول (البولي)",
                marked_if_negative: false
              },
              {
                id: "sweaty_warm_skin",
                label_en: "Sweaty, Warm Skin",
                label_ar: "جلد دافئ ومتعرق",
                marked_if_negative: false
              },
              {
                id: "myopathy",
                label_en: "Myopathy",
                label_ar: "اعتلال عضلي",
                marked_if_negative: false
              },
              {
                id: "osteoporosis",
                label_en: "Osteoporosis (bone)",
                label_ar: "هشاشة العظام",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "hypothyroid_manifestations",
            label_en: "Hypothyroid (Myxoedema) Manifestations",
            label_ar: "أعراض قصور الغدة الدرقية",
            type: "multicheck",
            items: [
              {
                id: "slow_thinking",
                label_en: "Slow Thinking",
                label_ar: "بطء التفكير",
                marked_if_negative: false
              },
              {
                id: "apathy",
                label_en: "Apathy",
                label_ar: "اللامبالاة",
                marked_if_negative: false
              },
              {
                id: "tendency_to_sleep",
                label_en: "Tendency to Sleep",
                label_ar: "الميل إلى النوم",
                marked_if_negative: false
              },
              {
                id: "loss_of_appetite",
                label_en: "Loss of Appetite",
                label_ar: "فقدان الشهية",
                marked_if_negative: false
              },
              {
                id: "weight_gain",
                label_en: "Increased Body Weight",
                label_ar: "زيادة وزن الجسم",
                marked_if_negative: false
              },
              {
                id: "oligomenorrhea",
                label_en: "Oligomenorrhea",
                label_ar: "قلة الطمث",
                marked_if_negative: false
              },
              {
                id: "constipation",
                label_en: "Constipation",
                label_ar: "إمساك",
                marked_if_negative: false
              },
              {
                id: "cold_intolerance",
                label_en: "Intolerance to Cold Weather",
                label_ar: "عدم تحمل الطقس البارد",
                marked_if_negative: true
              }
            ]
          }
        ]
      },
      {
        id: "past_medical_history",
        title_en: "Past Medical History",
        title_ar: "التاريخ المرضي السابق",
        questions: [
          {
            id: "similar_attacks",
            label_en: "Similar Attacks",
            label_ar: "نوبات مشابهة",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "common_diseases",
            label_en: "Common Diseases",
            label_ar: "أمراض شائعة",
            type: "multicheck",
            items: [
              {
                id: "diabetes",
                label_en: "Diabetes Mellitus",
                label_ar: "السكري",
                marked_if_negative: true
              },
              {
                id: "hypertension",
                label_en: "Hypertension",
                label_ar: "ارتفاع ضغط الدم",
                marked_if_negative: true
              },
              {
                id: "tuberculosis",
                label_en: "Tuberculosis (TB)",
                label_ar: "السل",
                marked_if_negative: false
              },
              {
                id: "bilharziasis",
                label_en: "Bilharziasis",
                label_ar: "البلهارسيا",
                marked_if_negative: false
              },
              {
                id: "hepatitis",
                label_en: "Hepatitis",
                label_ar: "التهاب الكبد",
                marked_if_negative: false
              },
              {
                id: "dvt",
                label_en: "Deep Venous Thrombosis (DVT)",
                label_ar: "تجلط الأوردة العميقة",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "blood_transfusion",
            label_en: "Blood Transfusion",
            label_ar: "نقل الدم",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "previous_neck_operations",
            label_en: "Previous Operations or Radiotherapy to the Neck",
            label_ar: "عمليات سابقة أو علاج إشعاعي للرقبة",
            type: "checkbox",
            marked_if_negative: true
          }
        ]
      },
      {
        id: "drug_history",
        title_en: "Drug History",
        title_ar: "تاريخ الأدوية",
        questions: [
          {
            id: "drug_intake",
            label_en: "Drug Intake",
            label_ar: "تناول الأدوية",
            type: "text",
            required: false
          },
          {
            id: "drug_allergy",
            label_en: "Drug Allergy",
            label_ar: "حساسية الأدوية",
            type: "checkbox",
            marked_if_negative: true
          }
        ]
      },
      {
        id: "family_history",
        title_en: "Family History",
        title_ar: "التاريخ العائلي",
        questions: [
          {
            id: "similar_condition_family",
            label_en: "Similar Condition in a Family Member",
            label_ar: "حالة مشابهة لدى أحد أفراد العائلة",
            type: "multicheck",
            items: [
              {
                id: "pendred_syndrome",
                label_en: "Pendred Syndrome",
                label_ar: "متلازمة بندريد",
                marked_if_negative: false
              },
              {
                id: "men_ii_sipple",
                label_en: "MEN-II (Sipple Syndrome)",
                label_ar: "متلازمة الأورام الصماء المتعددة II (سيبل)",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "consanguinity",
            label_en: "Consanguinity",
            label_ar: "زواج الأقارب",
            type: "checkbox",
            marked_if_negative: false
          }
        ]
      },
      {
        id: "systemic_review",
        title_en: "Systemic Review (Metastasis)",
        title_ar: "المراجعة الجهازية (النقائل)",
        questions: [
          {
            id: "lung_metastasis",
            label_en: "Lung Metastasis",
            label_ar: "نقائل الرئة",
            type: "multicheck",
            items: [
              {
                id: "cough",
                label_en: "Cough",
                label_ar: "سعال",
                marked_if_negative: false
              },
              {
                id: "hemoptysis",
                label_en: "Hemoptysis",
                label_ar: "نقث الدم",
                marked_if_negative: true
              },
              {
                id: "chest_pain",
                label_en: "Chest Pain",
                label_ar: "ألم الصدر",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "bone_metastasis",
            label_en: "Bone Metastasis",
            label_ar: "نقائل العظام",
            type: "multicheck",
            items: [
              {
                id: "bone_ache",
                label_en: "Bone Ache",
                label_ar: "ألم العظام",
                marked_if_negative: false
              },
              {
                id: "pathological_fracture",
                label_en: "Pathological Fracture",
                label_ar: "كسر مرضي",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "liver_metastasis",
            label_en: "Liver Metastasis",
            label_ar: "نقائل الكبد",
            type: "multicheck",
            items: [
              {
                id: "jaundice",
                label_en: "Jaundice",
                label_ar: "اليرقان",
                marked_if_negative: true
              },
              {
                id: "rt_hypochondrial_pain",
                label_en: "Right Hypochondrial Pain",
                label_ar: "ألم المراق الأيمن",
                marked_if_negative: false
              }
            ]
          }
        ]
      },
      {
        id: "general_examination",
        title_en: "General Examination",
        title_ar: "الفحص العام",
        questions: [
          {
            id: "general_appearance",
            label_en: "General Appearance (alert, conscious, oriented, built, facial expression, decubitus, intelligence, cooperation)",
            label_ar: "المظهر العام (واعٍ، متيقظ، مدرك، البنية، تعبير الوجه، الوضعية، الذكاء، التعاون)",
            type: "textarea"
          },
          {
            id: "body_build",
            label_en: "Body Build",
            label_ar: "بنية الجسم",
            type: "radio",
            required: false,
            options: [
              { value: "underweight", label_en: "Underweight (hyperthyroidism/malignancy)", label_ar: "نقص الوزن (فرط النشاط/الخباثة)" },
              { value: "average", label_en: "Average", label_ar: "متوسط" },
              { value: "overweight", label_en: "Overweight (hypothyroidism)", label_ar: "زيادة الوزن (قصور الغدة)" }
            ]
          },
          {
            id: "decubitus",
            label_en: "Decubitus (orthopnea in thyrotoxic HF)",
            label_ar: "الوضعية (تنفس انتصابي في الفشل القلبي السمي)",
            type: "text",
            required: false
          },
          {
            id: "facial_expression",
            label_en: "Facial Expression",
            label_ar: "تعبير الوجه",
            type: "radio",
            required: false,
            options: [
              { value: "irritable", label_en: "Irritable (thyrotoxicosis)", label_ar: "منفعل (تسمم درقي)" },
              { value: "lazy", label_en: "Lazy (myxoedema)", label_ar: "خامل (وذمة مخاطية)" },
              { value: "normal", label_en: "Normal", label_ar: "طبيعي" }
            ]
          },
          {
            id: "complexion_heading",
            label_en: "Complexion (3 colors)",
            label_ar: "لون البشرة (3 ألوان)",
            type: "heading"
          },
          {
            id: "complexion",
            label_en: "Complexion Findings",
            label_ar: "نتائج لون البشرة",
            type: "multicheck",
            items: [
              {
                id: "jaundice_complexion",
                label_en: "Jaundice (antithyroid drugs / liver metastasis)",
                label_ar: "يرقان (أدوية مضادة للدرقية / نقائل كبدية)",
                marked_if_negative: false
              },
              {
                id: "pallor",
                label_en: "Pallor (thyroid dysfunction / malignancy)",
                label_ar: "شحوب (خلل وظيفي درقي / خباثة)",
                marked_if_negative: false
              },
              {
                id: "cyanosis",
                label_en: "Cyanosis (retrosternal goitre)",
                label_ar: "زرقة (دراق خلف القص)",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "chest_exam",
            label_en: "Chest",
            label_ar: "الصدر",
            type: "text",
            required: false
          },
          {
            id: "abdomen_exam",
            label_en: "Abdomen (hepatosplenomegaly in Graves', Hashimoto)",
            label_ar: "البطن (تضخم الكبد والطحال في جريفز وهاشيموتو)",
            type: "text",
            required: false
          },
          {
            id: "extremities_heading",
            label_en: "Extremities",
            label_ar: "الأطراف",
            type: "heading"
          },
          {
            id: "extremities",
            label_en: "Extremities Findings",
            label_ar: "نتائج الأطراف",
            type: "multicheck",
            items: [
              {
                id: "tremors",
                label_en: "Tremors",
                label_ar: "رعشة",
                marked_if_negative: false
              },
              {
                id: "skin_temp_sweating",
                label_en: "Skin Temperature & Sweating",
                label_ar: "حرارة الجلد والتعرق",
                marked_if_negative: false
              },
              {
                id: "clubbing",
                label_en: "Clubbing",
                label_ar: "تعجر الأصابع",
                marked_if_negative: false
              },
              {
                id: "ll_muscles_edema",
                label_en: "Lower Limb: Muscles, Edema",
                label_ar: "الطرف السفلي: العضلات، الوذمة",
                marked_if_negative: false
              },
              {
                id: "pretibial_myxoedema",
                label_en: "Pretibial Myxoedema",
                label_ar: "وذمة مخاطية أمام الظنبوب",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "pulse",
            label_en: "Pulse",
            label_ar: "النبض",
            type: "number",
            unit_en: "bpm",
            unit_ar: "نبضة/دقيقة",
            required: false
          },
          {
            id: "blood_pressure",
            label_en: "Blood Pressure",
            label_ar: "ضغط الدم",
            type: "text",
            required: false
          },
          {
            id: "temperature",
            label_en: "Temperature",
            label_ar: "درجة الحرارة",
            type: "number",
            unit_en: "°C",
            unit_ar: "°م",
            required: false
          },
          {
            id: "head_heading",
            label_en: "Head",
            label_ar: "الرأس",
            type: "heading"
          },
          {
            id: "scalp_swellings",
            label_en: "Scalp: Multiple Swellings (metastasis)",
            label_ar: "فروة الرأس: تورمات متعددة (نقائل)",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "eyebrow_hair_loss",
            label_en: "Hair: Loss of Outer Eyebrow (myxoedema)",
            label_ar: "الشعر: فقدان الجزء الخارجي للحاجب (وذمة مخاطية)",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "tongue_tremors",
            label_en: "Tongue: Tremors",
            label_ar: "اللسان: رعشة",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "eye_signs_heading",
            label_en: "Eye Signs",
            label_ar: "علامات العين",
            type: "heading"
          },
          {
            id: "exophthalmos_type",
            label_en: "Exophthalmos (front view)",
            label_ar: "الجحوظ (الرؤية الأمامية)",
            type: "radio",
            required: false,
            options: [
              { value: "false", label_en: "False (sclera above cornea only)", label_ar: "كاذب (صلبة فوق القرنية فقط)" },
              { value: "true", label_en: "True (sclera above and below cornea)", label_ar: "حقيقي (صلبة فوق وتحت القرنية)" },
              { value: "none", label_en: "None", label_ar: "لا يوجد" }
            ]
          },
          {
            id: "exophthalmos_measure",
            label_en: "Ruler Test (lateral orbital margin to apex of cornea, normal 15-17mm)",
            label_ar: "اختبار المسطرة (من الحافة الحجاجية الجانبية إلى قمة القرنية، الطبيعي 15-17 ملم)",
            type: "number",
            unit_en: "mm",
            unit_ar: "ملم",
            required: false
          },
          {
            id: "eye_signs",
            label_en: "Eye Signs",
            label_ar: "علامات العين",
            type: "multicheck",
            items: [
              {
                id: "dalrymple",
                label_en: "Dalrymple Sign (sclera between cornea & upper lid)",
                label_ar: "علامة دالريمبل (صلبة بين القرنية والجفن العلوي)",
                marked_if_negative: false
              },
              {
                id: "stellwag",
                label_en: "Stellwag's Sign (infrequent blinking)",
                label_ar: "علامة ستيلواج (قلة الرمش)",
                marked_if_negative: false
              },
              {
                id: "joffroy",
                label_en: "Joffroy's Sign (absent forehead wrinkling on upward gaze)",
                label_ar: "علامة جوفروا (غياب تجعد الجبهة عند النظر لأعلى)",
                marked_if_negative: false
              },
              {
                id: "mobius",
                label_en: "Mobius Sign (failure of convergence)",
                label_ar: "علامة موبيوس (فشل التقارب)",
                marked_if_negative: false
              },
              {
                id: "von_graefe",
                label_en: "Von Graefe's Sign (lid lag)",
                label_ar: "علامة فون جريف (تأخر الجفن)",
                marked_if_negative: false
              },
              {
                id: "rosenbach",
                label_en: "Rosenbach's Sign (fine tremors of upper eyelid on gentle closure)",
                label_ar: "علامة روزنباخ (رعشة دقيقة بالجفن العلوي عند الإغماض الخفيف)",
                marked_if_negative: false
              },
              {
                id: "topolansky",
                label_en: "Topolansky's Sign (pericorneal congestion in Graves')",
                label_ar: "علامة توبولانسكي (احتقان حول القرنية في جريفز)",
                marked_if_negative: false
              },
              {
                id: "jellinek",
                label_en: "Jellinek's Sign (brownish pigmentation of the eyelid)",
                label_ar: "علامة جيلينك (تصبغ بني للجفن)",
                marked_if_negative: false
              },
              {
                id: "chemosis",
                label_en: "Chemosis / Jaundice (liver metastasis)",
                label_ar: "وذمة الملتحمة / يرقان (نقائل كبدية)",
                marked_if_negative: false
              },
              {
                id: "corneal_ulcers",
                label_en: "Corneal Ulcers or Ophthalmitis",
                label_ar: "تقرحات القرنية أو التهاب العين",
                marked_if_negative: false
              }
            ]
          }
        ]
      },
      {
        id: "local_examination",
        title_en: "Local Examination",
        title_ar: "الفحص الموضعي",
        questions: [
          {
            id: "inspection_heading",
            label_en: "Inspection",
            label_ar: "الفحص بالنظر",
            type: "heading"
          },
          {
            id: "swelling_inspect_site",
            label_en: "Site (front of lower part of the neck)",
            label_ar: "الموضع (أمام الجزء السفلي من الرقبة)",
            type: "text",
            required: false
          },
          {
            id: "swelling_inspect_size",
            label_en: "Size (measure)",
            label_ar: "الحجم (قياس)",
            type: "text",
            required: false
          },
          {
            id: "swelling_inspect_shape",
            label_en: "Shape",
            label_ar: "الشكل",
            type: "text",
            required: false
          },
          {
            id: "skin_overlying",
            label_en: "Overlying Skin",
            label_ar: "الجلد المغطي",
            type: "multicheck",
            items: [
              {
                id: "skin_normal",
                label_en: "Normal",
                label_ar: "طبيعي",
                marked_if_negative: false
              },
              {
                id: "skin_stretched",
                label_en: "Stretched",
                label_ar: "مشدود",
                marked_if_negative: false
              },
              {
                id: "skin_pigmented",
                label_en: "Pigmented",
                label_ar: "مصطبغ",
                marked_if_negative: false
              },
              {
                id: "skin_inflammation",
                label_en: "Signs of Inflammation (redness, edema)",
                label_ar: "علامات الالتهاب (احمرار، وذمة)",
                marked_if_negative: false
              },
              {
                id: "dilated_veins",
                label_en: "Dilated Veins Crossing Manubrium (retrosternal goitre)",
                label_ar: "أوردة متوسعة تعبر قبضة القص (دراق خلف القص)",
                marked_if_negative: false
              },
              {
                id: "scar_previous_op",
                label_en: "Scar of Previous Operation (recurrent goitre)",
                label_ar: "ندبة عملية سابقة (دراق ناكس)",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "special_signs",
            label_en: "Special Signs",
            label_ar: "علامات خاصة",
            type: "multicheck",
            items: [
              {
                id: "moves_with_deglutition_insp",
                label_en: "Moves Up with Deglutition",
                label_ar: "يتحرك لأعلى مع البلع",
                marked_if_negative: true
              },
              {
                id: "moves_with_tongue",
                label_en: "Moves Up with Tongue Protrusion (thyroglossal cyst)",
                label_ar: "يتحرك لأعلى مع إخراج اللسان (كيسة درقية لسانية)",
                marked_if_negative: false
              },
              {
                id: "pulsation_insp",
                label_en: "Pulsation (look tangentially)",
                label_ar: "نبض (يُفحص بشكل مماسي)",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "palpation_heading",
            label_en: "Palpation (Crile's method from front, Lahey's method from behind)",
            label_ar: "الجس (طريقة كرايل من الأمام، طريقة لاهي من الخلف)",
            type: "heading"
          },
          {
            id: "warmth",
            label_en: "Warmth",
            label_ar: "الدفء",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "tenderness",
            label_en: "Tenderness (inflammation tender, neoplasm not tender)",
            label_ar: "الإيلام (الالتهاب مؤلم، الورم غير مؤلم)",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "surface",
            label_en: "Surface",
            label_ar: "السطح",
            type: "radio",
            required: false,
            options: [
              { value: "smooth", label_en: "Smooth", label_ar: "أملس" },
              { value: "nodular", label_en: "Nodular", label_ar: "عقدي" }
            ]
          },
          {
            id: "edge",
            label_en: "Edge / Lower Border (ill-defined suggests retrosternal goitre)",
            label_ar: "الحافة / الحد السفلي (غير محدد يوحي بدراق خلف القص)",
            type: "text",
            required: false
          },
          {
            id: "consistency",
            label_en: "Consistency",
            label_ar: "القوام",
            type: "radio",
            required: false,
            options: [
              { value: "cystic", label_en: "Cystic", label_ar: "كيسي" },
              { value: "soft", label_en: "Soft", label_ar: "طري" },
              { value: "firm", label_en: "Firm", label_ar: "متماسك" },
              { value: "hard", label_en: "Hard", label_ar: "صلب" }
            ]
          },
          {
            id: "mobility_heading",
            label_en: "Relation / Mobility",
            label_ar: "العلاقة / الحركية",
            type: "heading"
          },
          {
            id: "mobility_relations",
            label_en: "Mobility & Relations",
            label_ar: "الحركية والعلاقات",
            type: "multicheck",
            items: [
              {
                id: "skin_fixation",
                label_en: "Skin Fixation (pinch skin over swelling)",
                label_ar: "التصاق الجلد (قرص الجلد فوق التورم)",
                marked_if_negative: false
              },
              {
                id: "sternomastoid_relation",
                label_en: "Sternomastoid Relation (superficial/deep, fixed or not)",
                label_ar: "العلاقة بالعضلة القصية الترقوية الخشائية (سطحي/عميق، ثابت أو لا)",
                marked_if_negative: false
              },
              {
                id: "trachea_attachment",
                label_en: "Trachea Attachment (rock gland vertically over trachea)",
                label_ar: "الالتصاق بالقصبة الهوائية (تحريك الغدة عموديًا فوق القصبة)",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "tubes_heading",
            label_en: "Tubes (Carotid, Lymph Nodes, Trachea)",
            label_ar: "الأنابيب (السباتي، العقد الليمفاوية، القصبة الهوائية)",
            type: "heading"
          },
          {
            id: "carotid_pulsation",
            label_en: "Carotid Artery Pulsation (site & volume)",
            label_ar: "نبض الشريان السباتي (الموضع والحجم)",
            type: "text",
            required: false
          },
          {
            id: "lymph_nodes_exam",
            label_en: "Lymph Nodes (upper & lower deep cervical, prelaryngeal & pretracheal)",
            label_ar: "العقد الليمفاوية (العنقية العميقة العلوية والسفلية، أمام الحنجرة وأمام القصبة)",
            type: "checkbox",
            marked_if_negative: true
          },
          {
            id: "trachea_position",
            label_en: "Trachea Position",
            label_ar: "موضع القصبة الهوائية",
            type: "radio",
            required: false,
            options: [
              { value: "central", label_en: "Central", label_ar: "مركزي" },
              { value: "deviated", label_en: "Deviated", label_ar: "منحرف" }
            ]
          },
          {
            id: "special_tests",
            label_en: "Special Tests",
            label_ar: "اختبارات خاصة",
            type: "multicheck",
            items: [
              {
                id: "kocher_test",
                label_en: "Kocher's Test (stridor on lateral lobe compression — tracheomalacia)",
                label_ar: "اختبار كوخر (صرير عند ضغط الفصوص الجانبية — تلين القصبة)",
                marked_if_negative: false
              },
              {
                id: "pemberton_sign",
                label_en: "Pemberton's Sign (SVC obstruction by retrosternal goitre)",
                label_ar: "علامة بمبرتون (انسداد الوريد الأجوف العلوي بدراق خلف القص)",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "percussion",
            label_en: "Percussion (direct over manubrium — retrosternal goitre)",
            label_ar: "القرع (مباشر فوق قبضة القص — دراق خلف القص)",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "auscultation",
            label_en: "Auscultation (machinery bruit over apex of lateral lobes — thyrotoxicosis)",
            label_ar: "الإصغاء (لغط آلي فوق قمة الفصوص الجانبية — تسمم درقي)",
            type: "checkbox",
            marked_if_negative: false
          }
        ]
      }
    ]
  },
  {
    id: "breast",
    specialty: "surgery",
    icon: "🩺",
    name_en: "Breast Lump",
    name_ar: "كتلة الثدي",
    sections: [
      {
        id: "personal_history",
        title_en: "Personal History",
        title_ar: "التاريخ الشخصي",
        questions: [
          {
            id: "name",
            label_en: "Name",
            label_ar: "الاسم",
            type: "text",
            required: true
          },
          {
            id: "age",
            label_en: "Age",
            label_ar: "العمر",
            type: "number",
            unit_en: "years",
            unit_ar: "سنة",
            required: true,
            write_up_hint: "The patient is {value} years old (fibroadenosis at puberty & menopause, hard fibroadenoma 20-30y, soft fibroadenoma 30-40y, carcinoma 40-60y)."
          },
          {
            id: "sex",
            label_en: "Sex",
            label_ar: "الجنس",
            type: "radio",
            required: true,
            options: [
              { value: "male", label_en: "Male", label_ar: "ذكر" },
              { value: "female", label_en: "Female", label_ar: "أنثى" }
            ]
          },
          {
            id: "marital_status",
            label_en: "Marital Status",
            label_ar: "الحالة الاجتماعية",
            type: "radio",
            required: false,
            options: [
              { value: "single", label_en: "Single", label_ar: "أعزب" },
              { value: "married", label_en: "Married", label_ar: "متزوج" }
            ]
          },
          {
            id: "special_habits",
            label_en: "Special Habits of Medical Importance",
            label_ar: "العادات الخاصة ذات الأهمية الطبية",
            type: "text",
            required: false
          },
          {
            id: "address",
            label_en: "Address",
            label_ar: "العنوان",
            type: "text",
            required: false
          },
          {
            id: "residence",
            label_en: "Residence",
            label_ar: "محل الإقامة",
            type: "text",
            required: false
          },
          {
            id: "occupation",
            label_en: "Occupation",
            label_ar: "المهنة",
            type: "text",
            required: false,
            write_up_hint: "Occupation: {value} (note exposure to radiation)."
          },
          {
            id: "menstrual_history",
            label_en: "Menstrual History",
            label_ar: "تاريخ الدورة الشهرية",
            type: "textarea",
            write_up_hint: "Menstrual history: {value} (age of menarche, age of menopause, regularity, amount, duration)."
          },
          {
            id: "lactation_status",
            label_en: "Lactation Status",
            label_ar: "حالة الرضاعة",
            type: "radio",
            required: false,
            options: [
              { value: "currently_lactating", label_en: "Currently Lactating", label_ar: "ترضع حالياً" },
              { value: "not_lactating", label_en: "Not Lactating", label_ar: "لا ترضع" }
            ]
          },
          {
            id: "last_lactation_date",
            label_en: "Date of Last Lactation",
            label_ar: "تاريخ آخر رضاعة",
            type: "text",
            required: false
          },
          {
            id: "contraception",
            label_en: "Contraception Use",
            label_ar: "استخدام وسائل منع الحمل",
            type: "text",
            required: false
          }
        ]
      },
      {
        id: "presenting_complaint",
        title_en: "Presenting Complaint",
        title_ar: "الشكوى الرئيسية",
        questions: [
          {
            id: "complaint",
            label_en: "Presenting Complaint",
            label_ar: "الشكوى الرئيسية",
            type: "text",
            required: true,
            write_up_hint: "The patient presented with {value}."
          },
          {
            id: "complaint_duration",
            label_en: "Duration",
            label_ar: "المدة",
            type: "number",
            unit_en: "months",
            unit_ar: "شهر",
            required: true,
            write_up_hint: "Of {value} months duration."
          }
        ]
      },
      {
        id: "hopi",
        title_en: "History of Presenting Illness",
        title_ar: "تاريخ المرض الحالي",
        questions: [
          {
            id: "pain_heading",
            label_en: "Pain",
            label_ar: "الألم",
            type: "heading"
          },
          {
            id: "pain_present",
            label_en: "Pain Present",
            label_ar: "وجود ألم",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "pain_site",
            label_en: "Site of Pain",
            label_ar: "موضع الألم",
            type: "radio",
            required: false,
            options: [
              { value: "localized", label_en: "Localized to swelling", label_ar: "موضعي في التورم" },
              { value: "shooting_distal", label_en: "Shooting distally (nerve compression/infiltration)", label_ar: "ينتشر بشكل حاد (ضغط/تسلل العصب)" }
            ]
          },
          {
            id: "pain_character",
            label_en: "Character of Pain",
            label_ar: "طبيعة الألم",
            type: "radio",
            required: false,
            options: [
              { value: "dull_aching", label_en: "Dull Aching (chronic conditions)", label_ar: "ألم باهت ناتر (أمراض مزمنة)" },
              { value: "throbbing", label_en: "Throbbing (pus formation)", label_ar: "نابض (تشكل القيح)" },
              { value: "other", label_en: "Other", label_ar: "آخر" }
            ]
          },
          {
            id: "pain_radiation",
            label_en: "Radiation",
            label_ar: "انتشار الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_increase_decrease",
            label_en: "What Increases or Decreases It",
            label_ar: "ما يزيده أو ينقصه",
            type: "text",
            required: false
          },
          {
            id: "pain_onset",
            label_en: "Onset",
            label_ar: "بداية الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_course",
            label_en: "Course",
            label_ar: "مسار الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_duration",
            label_en: "Duration of Pain",
            label_ar: "مدة الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_severity",
            label_en: "Severity",
            label_ar: "شدة الألم",
            type: "radio",
            required: false,
            options: [
              { value: "mild", label_en: "Mild", label_ar: "خفيف" },
              { value: "moderate", label_en: "Moderate", label_ar: "معتدل" },
              { value: "severe", label_en: "Severe", label_ar: "شديد" }
            ]
          },
          {
            id: "pain_associations",
            label_en: "What Associates",
            label_ar: "ما يصاحبه",
            type: "text",
            required: false
          },
          {
            id: "swelling_heading",
            label_en: "Swelling",
            label_ar: "التورم",
            type: "heading"
          },
          {
            id: "swelling_site",
            label_en: "Site of Swelling",
            label_ar: "موضع التورم",
            type: "text",
            required: false
          },
          {
            id: "swelling_size",
            label_en: "Size of Swelling",
            label_ar: "حجم التورم",
            type: "text",
            required: false,
            write_up_hint: "Swelling of {value} size."
          },
          {
            id: "swelling_onset",
            label_en: "Onset of Swelling",
            label_ar: "بداية التورم",
            type: "radio",
            required: false,
            options: [
              { value: "gradual", label_en: "Gradual", label_ar: "تدريجي" },
              { value: "accidental", label_en: "Accidental", label_ar: "عرضي" },
              { value: "acute", label_en: "Acute", label_ar: "حاد" }
            ]
          },
          {
            id: "swelling_course",
            label_en: "Course of Swelling",
            label_ar: "مسار التورم",
            type: "radio",
            required: false,
            options: [
              { value: "progressive", label_en: "Progressive", label_ar: "متزايد" },
              { value: "regressive", label_en: "Regressive", label_ar: "متراجع" },
              { value: "stationary", label_en: "Stationary", label_ar: "ثابت" },
              { value: "fluctuating", label_en: "Fluctuating", label_ar: "متذبذب" }
            ]
          },
          {
            id: "swelling_duration",
            label_en: "Duration of Swelling",
            label_ar: "مدة التورم",
            type: "text",
            required: false
          },
          {
            id: "discharge_heading",
            label_en: "Discharge",
            label_ar: "الإفرازات",
            type: "heading"
          },
          {
            id: "discharge_present",
            label_en: "Discharge Present",
            label_ar: "وجود إفرازات",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "discharge_character",
            label_en: "Character of Discharge",
            label_ar: "طبيعة الإفرازات",
            type: "radio",
            required: false,
            options: [
              { value: "blood", label_en: "Bloody", label_ar: "دموية" },
              { value: "milky", label_en: "Milky", label_ar: "لبنية" },
              { value: "pus", label_en: "Pus", label_ar: "قيح" },
              { value: "pasty", label_en: "Pasty", label_ar: "عجينية" },
              { value: "other", label_en: "Other", label_ar: "أخرى" }
            ]
          },
          {
            id: "discharge_location",
            label_en: "Location of Discharge",
            label_ar: "موضع الإفرازات",
            type: "text",
            required: false
          },
          {
            id: "toxic_manifestations_heading",
            label_en: "Toxic Symptoms (FAHM)",
            label_ar: "أعراض التسمم (حمى، فقدان الشهية، ثقل، عدم رفاهية)",
            type: "heading"
          },
          {
            id: "toxic_symptoms",
            label_en: "Toxic Manifestations",
            label_ar: "أعراض الالتهاب والتسمم",
            type: "multicheck",
            items: [
              {
                id: "fever",
                label_en: "Fever",
                label_ar: "حمى",
                marked_if_negative: false
              },
              {
                id: "anorexia",
                label_en: "Anorexia",
                label_ar: "فقدان الشهية",
                marked_if_negative: false
              },
              {
                id: "cachexia",
                label_en: "Cachexia (malignant symptoms)",
                label_ar: "هزال (أعراض خبيثة)",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "apparent_cause",
            label_en: "Apparent Cause",
            label_ar: "السبب الظاهر",
            type: "multicheck",
            items: [
              {
                id: "pregnancy_related",
                label_en: "Pregnancy",
                label_ar: "الحمل",
                marked_if_negative: false
              },
              {
                id: "menstruation_related",
                label_en: "Menstruation",
                label_ar: "الحيض",
                marked_if_negative: false
              },
              {
                id: "lactation_related",
                label_en: "Lactation",
                label_ar: "الرضاعة",
                marked_if_negative: false
              },
              {
                id: "emotional_stress",
                label_en: "Emotional Stress",
                label_ar: "الضغط النفسي",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "distant_metastasis_heading",
            label_en: "Distant Metastasis Symptoms",
            label_ar: "أعراض النقائل البعيدة",
            type: "heading"
          },
          {
            id: "lung_metastasis",
            label_en: "Lung Metastasis",
            label_ar: "نقائل الرئة",
            type: "multicheck",
            items: [
              {
                id: "chest_pain",
                label_en: "Chest Pain",
                label_ar: "ألم الصدر",
                marked_if_negative: false
              },
              {
                id: "dyspnea",
                label_en: "Dyspnea (Shortness of Breath)",
                label_ar: "ضيق التنفس",
                marked_if_negative: false
              },
              {
                id: "cough",
                label_en: "Cough",
                label_ar: "سعال",
                marked_if_negative: false
              },
              {
                id: "hemoptysis",
                label_en: "Hemoptysis",
                label_ar: "نفث الدم",
                marked_if_negative: true
              }
            ]
          },
          {
            id: "liver_metastasis",
            label_en: "Liver Metastasis",
            label_ar: "نقائل الكبد",
            type: "multicheck",
            items: [
              {
                id: "liver_swelling",
                label_en: "Liver Swelling",
                label_ar: "تضخم الكبد",
                marked_if_negative: false
              },
              {
                id: "rt_hypochondrial_pain",
                label_en: "Right Hypochondrial Pain",
                label_ar: "ألم المراق الأيمن",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "bone_metastasis",
            label_en: "Bone Metastasis",
            label_ar: "نقائل العظام",
            type: "multicheck",
            items: [
              {
                id: "bone_pain",
                label_en: "Bone Pain",
                label_ar: "ألم العظام",
                marked_if_negative: false
              },
              {
                id: "pathological_fracture",
                label_en: "Pathological Fracture",
                label_ar: "كسر مرضي",
                marked_if_negative: false
              }
            ]
          }
        ]
      },
      {
        id: "past_medical_history",
        title_en: "Past Medical History",
        title_ar: "التاريخ المرضي السابق",
        questions: [
          {
            id: "similar_attacks",
            label_en: "Similar Attacks or Lesions",
            label_ar: "نوبات أو آفات مشابهة",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "common_diseases",
            label_en: "Common Diseases",
            label_ar: "أمراض شائعة",
            type: "multicheck",
            items: [
              {
                id: "diabetes",
                label_en: "Diabetes Mellitus",
                label_ar: "السكري",
                marked_if_negative: true
              },
              {
                id: "hypertension",
                label_en: "Hypertension",
                label_ar: "ارتفاع ضغط الدم",
                marked_if_negative: true
              },
              {
                id: "tuberculosis",
                label_en: "Tuberculosis (TB)",
                label_ar: "السل",
                marked_if_negative: false
              },
              {
                id: "bilharziasis",
                label_en: "Bilharziasis",
                label_ar: "البلهارسيا",
                marked_if_negative: false
              },
              {
                id: "hepatitis",
                label_en: "Hepatitis",
                label_ar: "التهاب الكبد",
                marked_if_negative: false
              },
              {
                id: "dvt",
                label_en: "Deep Venous Thrombosis (DVT)",
                label_ar: "تجلط الأوردة العميقة",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "drug_allergy",
            label_en: "Drug Allergy",
            label_ar: "حساسية الأدوية",
            type: "checkbox",
            marked_if_negative: true
          },
          {
            id: "drug_intake",
            label_en: "Current Drug Intake",
            label_ar: "الأدوية الحالية",
            type: "textarea",
            required: false
          },
          {
            id: "blood_transfusion",
            label_en: "Blood Transfusion",
            label_ar: "نقل الدم",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "previous_operations",
            label_en: "Previous Operations",
            label_ar: "عمليات سابقة",
            type: "checkbox",
            marked_if_negative: true
          }
        ]
      },
      {
        id: "family_history",
        title_en: "Family History",
        title_ar: "التاريخ العائلي",
        questions: [
          {
            id: "similar_condition_family",
            label_en: "Similar Condition in Family Members",
            label_ar: "حالات مشابهة في العائلة",
            type: "multicheck",
            items: [
              {
                id: "breast_carcinoma_family",
                label_en: "Breast Carcinoma",
                label_ar: "سرطان الثدي",
                marked_if_negative: false
              },
              {
                id: "other_malignancy_family",
                label_en: "Other Malignancy",
                label_ar: "سرطان آخر",
                marked_if_negative: false
              }
            ]
          }
        ]
      },
      {
        id: "general_examination",
        title_en: "General Examination",
        title_ar: "الفحص العام",
        questions: [
          {
            id: "general_appearance",
            label_en: "General Appearance",
            label_ar: "المظهر العام",
            type: "textarea",
            write_up_hint: "Patient is {value}."
          },
          {
            id: "body_built",
            label_en: "Body Build",
            label_ar: "بنية الجسم",
            type: "radio",
            required: false,
            options: [
              { value: "underweight", label_en: "Underweight (suggests malignancy)", label_ar: "نقص الوزن (قد يوحي بخباثة)" },
              { value: "average", label_en: "Average", label_ar: "متوسط" },
              { value: "overweight", label_en: "Overweight", label_ar: "زيادة الوزن" }
            ]
          },
          {
            id: "decubitus",
            label_en: "Decubitus",
            label_ar: "الوضعية",
            type: "text",
            required: false
          },
          {
            id: "facial_expression",
            label_en: "Facial Expression",
            label_ar: "تعبير الوجه",
            type: "text",
            required: false
          },
          {
            id: "complexion_heading",
            label_en: "Complexion (3 colors)",
            label_ar: "لون البشرة (3 ألوان)",
            type: "heading"
          },
          {
            id: "complexion_findings",
            label_en: "Complexion Findings",
            label_ar: "نتائج لون البشرة",
            type: "multicheck",
            items: [
              {
                id: "jaundice",
                label_en: "Jaundice (liver metastasis)",
                label_ar: "يرقان (نقائل كبدية)",
                marked_if_negative: false
              },
              {
                id: "pallor",
                label_en: "Pallor (anemia/malignancy)",
                label_ar: "شحوب (فقر دم/خباثة)",
                marked_if_negative: false
              },
              {
                id: "cyanosis",
                label_en: "Cyanosis",
                label_ar: "زرقة",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "chest_heart",
            label_en: "Chest & Heart (lung metastasis, masses, tenderness)",
            label_ar: "الصدر والقلب (نقائل الرئة، كتل، إيلام)",
            type: "text",
            required: false
          },
          {
            id: "abdomen",
            label_en: "Abdomen (hepatosplenomegaly, ascites, Sister Joseph nodule)",
            label_ar: "البطن (تضخم الكبد والطحال، الاستسقاء، عقدة سيستر جوزيف)",
            type: "text",
            required: false
          },
          {
            id: "pr_pv_exam",
            label_en: "Per Rectum & Per Vaginum Examination",
            label_ar: "الفحص الشرجي والمهبلي",
            type: "text",
            required: false,
            write_up_hint: "Masses noted: {value}."
          },
          {
            id: "extremities_heading",
            label_en: "Extremities",
            label_ar: "الأطراف",
            type: "heading"
          },
          {
            id: "extremities_findings",
            label_en: "Extremities Findings",
            label_ar: "نتائج الأطراف",
            type: "multicheck",
            items: [
              {
                id: "brawny_edema",
                label_en: "Brawny Edema (lymphedema)",
                label_ar: "وذمة بنية (لمفية)",
                marked_if_negative: false
              },
              {
                id: "pathological_fractures",
                label_en: "Pathological Fractures (bone metastasis)",
                label_ar: "كسور مرضية (نقائل عظمية)",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "vital_signs_heading",
            label_en: "Vital Signs",
            label_ar: "العلامات الحيوية",
            type: "heading"
          },
          {
            id: "pulse",
            label_en: "Pulse",
            label_ar: "النبض",
            type: "number",
            unit_en: "bpm",
            unit_ar: "نبضة/دقيقة",
            required: false
          },
          {
            id: "blood_pressure",
            label_en: "Blood Pressure",
            label_ar: "ضغط الدم",
            type: "text",
            required: false
          },
          {
            id: "temperature",
            label_en: "Temperature",
            label_ar: "درجة الحرارة",
            type: "number",
            unit_en: "°C",
            unit_ar: "°م",
            required: false,
            write_up_hint: "Fever {value}°C present in breast abscess."
          },
          {
            id: "head_neck_spine_heading",
            label_en: "Head, Neck & Spine",
            label_ar: "الرأس والرقبة والعمود الفقري",
            type: "heading"
          },
          {
            id: "skull_exam",
            label_en: "Skull (metastasis)",
            label_ar: "الجمجمة (نقائل)",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "neck_exam",
            label_en: "Neck (lymph nodes)",
            label_ar: "الرقبة (عقد ليمفاوية)",
            type: "text",
            required: false
          },
          {
            id: "spine_exam",
            label_en: "Spine (metastasis)",
            label_ar: "العمود الفقري (نقائل)",
            type: "checkbox",
            marked_if_negative: false
          }
        ]
      },
      {
        id: "local_examination",
        title_en: "Local Examination of Breast",
        title_ar: "الفحص الموضعي للثدي",
        questions: [
          {
            id: "exposure_position",
            label_en: "Patient Position & Exposure",
            label_ar: "وضعية المريضة والكشف",
            type: "text",
            required: false,
            write_up_hint: "Patient examined while {value} (sitting, from umbilicus exposed; starting with normal side first)."
          },
          {
            id: "inspection_heading",
            label_en: "Inspection",
            label_ar: "الفحص بالنظر",
            type: "heading"
          },
          {
            id: "symmetry",
            label_en: "Symmetry of Breasts",
            label_ar: "تناسق الثديين",
            type: "radio",
            required: false,
            options: [
              { value: "symmetrical", label_en: "Symmetrical", label_ar: "متناسق" },
              { value: "asymmetrical", label_en: "Asymmetrical", label_ar: "غير متناسق" }
            ]
          },
          {
            id: "breast_appearance",
            label_en: "Breast Appearance",
            label_ar: "مظهر الثدي",
            type: "text",
            required: false,
            write_up_hint: "Both breasts are {value}."
          },
          {
            id: "overlying_skin",
            label_en: "Overlying Skin Findings",
            label_ar: "نتائج الجلد المغطي",
            type: "multicheck",
            items: [
              {
                id: "skin_normal",
                label_en: "Normal",
                label_ar: "طبيعي",
                marked_if_negative: false
              },
              {
                id: "skin_pigmented",
                label_en: "Pigmented",
                label_ar: "مصطبغ",
                marked_if_negative: false
              },
              {
                id: "dilated_veins",
                label_en: "Dilated Veins",
                label_ar: "أوردة متوسعة",
                marked_if_negative: false
              },
              {
                id: "scars",
                label_en: "Scars",
                label_ar: "ندبات",
                marked_if_negative: false
              },
              {
                id: "inflammation_signs",
                label_en: "Signs of Inflammation (redness, edema)",
                label_ar: "علامات التهاب (احمرار، وذمة)",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "swelling_inspection",
            label_en: "Swelling on Inspection",
            label_ar: "التورم عند الفحص بالنظر",
            type: "multicheck",
            items: [
              {
                id: "swelling_site_insp",
                label_en: "Site",
                label_ar: "الموضع",
                marked_if_negative: false
              },
              {
                id: "swelling_size_insp",
                label_en: "Size",
                label_ar: "الحجم",
                marked_if_negative: false
              },
              {
                id: "swelling_shape",
                label_en: "Shape",
                label_ar: "الشكل",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "nipple_areola_heading",
            label_en: "Nipple & Areola",
            label_ar: "الحلمة والهالة",
            type: "heading"
          },
          {
            id: "nipple_findings",
            label_en: "Nipple Findings",
            label_ar: "نتائج الحلمة",
            type: "multicheck",
            items: [
              {
                id: "nipple_direction",
                label_en: "Direction",
                label_ar: "الاتجاه",
                marked_if_negative: false
              },
              {
                id: "nipple_retraction",
                label_en: "Retraction",
                label_ar: "انسحاب",
                marked_if_negative: false
              },
              {
                id: "nipple_displacement",
                label_en: "Displacement",
                label_ar: "إزاحة",
                marked_if_negative: false
              },
              {
                id: "nipple_discoloration",
                label_en: "Discoloration",
                label_ar: "تلون",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "areola_exam",
            label_en: "Areola Examination",
            label_ar: "فحص الهالة",
            type: "multicheck",
            items: [
              {
                id: "areola_normal",
                label_en: "Normal",
                label_ar: "طبيعية",
                marked_if_negative: false
              },
              {
                id: "areola_eczema",
                label_en: "Eczema",
                label_ar: "أكزيما",
                marked_if_negative: false
              },
              {
                id: "areola_frorid",
                label_en: "Florid Red, Raised, Eroded (Paget's disease)",
                label_ar: "حمراء زاهية، مرتفعة، متآكلة (داء باجيت)",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "skin_changes_heading",
            label_en: "Skin Changes of Breast",
            label_ar: "تغيرات جلد الثدي",
            type: "heading"
          },
          {
            id: "skin_changes",
            label_en: "Skin Changes",
            label_ar: "تغيرات جلدية",
            type: "multicheck",
            items: [
              {
                id: "dimpling",
                label_en: "Dimpling",
                label_ar: "غمازات",
                marked_if_negative: false
              },
              {
                id: "peau_dorange",
                label_en: "Peau d'Orange (orange peel skin)",
                label_ar: "جلد برتقالي",
                marked_if_negative: false
              },
              {
                id: "skin_nodules",
                label_en: "Skin Nodules",
                label_ar: "عقيدات جلدية",
                marked_if_negative: false
              },
              {
                id: "fungation",
                label_en: "Fungation",
                label_ar: "فطر",
                marked_if_negative: false
              },
              {
                id: "brawny_edema_skin",
                label_en: "Brawny Edema",
                label_ar: "وذمة بنية",
                marked_if_negative: false
              },
              {
                id: "sister_joseph",
                label_en: "Sister Joseph Nodule (umbilical metastasis)",
                label_ar: "عقدة سيستر جوزيف (نقائل سرية)",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "ul_lymphedema",
            label_en: "Upper Limb & Lymphedema",
            label_ar: "الطرف العلوي والوذمة اللمفية",
            type: "multicheck",
            items: [
              {
                id: "ul_brawny_edema",
                label_en: "Brawny Edema",
                label_ar: "وذمة بنية",
                marked_if_negative: false
              },
              {
                id: "ul_pathological_fracture",
                label_en: "Pathological Fracture",
                label_ar: "كسر مرضي",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "palpation_heading",
            label_en: "Palpation",
            label_ar: "الجس",
            type: "heading"
          },
          {
            id: "palpation_method",
            label_en: "Palpation Method",
            label_ar: "طريقة الجس",
            type: "text",
            required: false,
            write_up_hint: "Palpated using {value} (tip of fingers for better localization, flat of hand for surface, patient sitting then lying)."
          },
          {
            id: "warmth",
            label_en: "Warmth",
            label_ar: "الدفء",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "tenderness",
            label_en: "Tenderness",
            label_ar: "الإيلام",
            type: "checkbox",
            marked_if_negative: false,
            write_up_hint: "Inflammatory swellings are mostly tender, neoplastic swellings are not tender."
          },
          {
            id: "tenderness_location",
            label_en: "Point of Maximum Tenderness",
            label_ar: "موضع أقصى إيلام",
            type: "text",
            required: false
          },
          {
            id: "surface",
            label_en: "Surface",
            label_ar: "السطح",
            type: "radio",
            required: false,
            options: [
              { value: "smooth", label_en: "Smooth", label_ar: "أملس" },
              { value: "nodular", label_en: "Nodular", label_ar: "عقدي" },
              { value: "irregular", label_en: "Irregular", label_ar: "غير منتظم" }
            ]
          },
          {
            id: "edge",
            label_en: "Edge / Definition",
            label_ar: "الحافة / التحديد",
            type: "radio",
            required: false,
            options: [
              { value: "well_defined", label_en: "Well-defined", label_ar: "محدد جيداً" },
              { value: "ill_defined", label_en: "Ill-defined", label_ar: "غير محدد جيداً" }
            ]
          },
          {
            id: "consistency",
            label_en: "Consistency",
            label_ar: "القوام",
            type: "radio",
            required: false,
            options: [
              { value: "cystic", label_en: "Cystic", label_ar: "كيسي" },
              { value: "soft", label_en: "Soft (like breast lobule)", label_ar: "طري (كفصيص الثدي)" },
              { value: "firm", label_en: "Firm (like cartilage/pinna)", label_ar: "متماسك (كالغضروف)" },
              { value: "hard", label_en: "Hard (like bone)", label_ar: "صلب (كالعظم)" }
            ]
          },
          {
            id: "fluctuation_test",
            label_en: "Fluctuation Test",
            label_ar: "اختبار التذبذب",
            type: "text",
            required: false,
            write_up_hint: "Fluctuation tested in {value} perpendicular planes with fixation."
          },
          {
            id: "paget_test",
            label_en: "Paget's Test (for swellings <2cm)",
            label_ar: "اختبار باجيت (للتورمات <2 سم)",
            type: "text",
            required: false,
            write_up_hint: "Solid swelling: {value}."
          },
          {
            id: "relation_heading",
            label_en: "Relation / Mobility",
            label_ar: "العلاقة / الحركية",
            type: "heading"
          },
          {
            id: "skin_relation",
            label_en: "Relation to Overlying Skin",
            label_ar: "العلاقة بالجلد المغطي",
            type: "radio",
            required: false,
            options: [
              { value: "not_related", label_en: "Not related (skin can be pinched)", label_ar: "غير متصل (يمكن قرص الجلد)" },
              { value: "infiltrates", label_en: "Infiltrates (moves with skin)", label_ar: "يتسلل (يتحرك مع الجلد)" }
            ]
          },
          {
            id: "breast_tissue_relation",
            label_en: "Relation to Breast Tissue",
            label_ar: "العلاقة بنسيج الثدي",
            type: "text",
            required: false,
            write_up_hint: "In relation to breast tissue: {value}."
          },
          {
            id: "pectoralis_relation",
            label_en: "Relation to Pectoralis Major",
            label_ar: "العلاقة بالعضلة الصدرية الكبرى",
            type: "radio",
            required: false,
            options: [
              { value: "mobile", label_en: "Mobile (not attached)", label_ar: "متحرك (غير متصل)" },
              { value: "limited_movement", label_en: "Limited Movement (attached to fascia)", label_ar: "حركة محدودة (متصل بالجافية)" },
              { value: "fixed", label_en: "Fixed (attached to muscle)", label_ar: "ثابت (متصل بالعضلة)" }
            ],
            write_up_hint: "Relation to pectoralis: {value} (tested by patient pressing hands against waist)."
          },
          {
            id: "serratus_relation",
            label_en: "Relation to Serratus Anterior",
            label_ar: "العلاقة بعضلة المنشار الأمامية",
            type: "radio",
            required: false,
            options: [
              { value: "mobile", label_en: "Mobile (not attached)", label_ar: "متحرك (غير متصل)" },
              { value: "limited_movement", label_en: "Limited Movement", label_ar: "حركة محدودة" },
              { value: "fixed", label_en: "Fixed (attached)", label_ar: "ثابت (متصل)" }
            ],
            write_up_hint: "Relation to serratus anterior: {value} (tested by patient pressing against examiner's shoulder)."
          },
          {
            id: "bone_relation",
            label_en: "Relation to Bone",
            label_ar: "العلاقة بالعظم",
            type: "text",
            required: false,
            write_up_hint: "In relation to bone: {value} (fixed and immobile from the start when patient is relaxed)."
          },
          {
            id: "lymph_nodes_heading",
            label_en: "Draining Lymph Nodes",
            label_ar: "العقد الليمفاوية المصرفة",
            type: "heading"
          },
          {
            id: "axillary_nodes_heading",
            label_en: "Axillary Lymph Node Groups",
            label_ar: "مجموعات العقد الليمفاوية الإبطية",
            type: "heading"
          },
          {
            id: "axillary_nodes",
            label_en: "Axillary Nodes Examination",
            label_ar: "فحص العقد الإبطية",
            type: "multicheck",
            items: [
              {
                id: "pectoral_group",
                label_en: "Pectoral Group (Anterior)",
                label_ar: "المجموعة الصدرية (أمامية)",
                marked_if_negative: false
              },
              {
                id: "humoral_group",
                label_en: "Humoral Group (Lateral)",
                label_ar: "المجموعة العضدية (جانبية)",
                marked_if_negative: false
              },
              {
                id: "subscapular_group",
                label_en: "Subscapular Group (Posterior)",
                label_ar: "المجموعة تحت الكتفية (خلفية)",
                marked_if_negative: false
              },
              {
                id: "central_group",
                label_en: "Central Group (Medial)",
                label_ar: "المجموعة المركزية (وسطية)",
                marked_if_negative: false
              },
              {
                id: "apical_group",
                label_en: "Apical/Infraclavicular Group",
                label_ar: "المجموعة القمية تحت الترقوية",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "special_tests_heading",
            label_en: "Special Tests",
            label_ar: "اختبارات خاصة",
            type: "heading"
          },
          {
            id: "special_tests",
            label_en: "Special Tests",
            label_ar: "الاختبارات الخاصة",
            type: "multicheck",
            items: [
              {
                id: "leaning_forward",
                label_en: "Lean Forward Test (observe protrusion, dimpling)",
                label_ar: "اختبار الانحناء للأمام (لاحظ البروز، الغمازات)",
                marked_if_negative: false
              },
              {
                id: "raise_arms",
                label_en: "Raise Arms Test (dimpling, lumps become prominent)",
                label_ar: "اختبار رفع الذراعين (غمازات وكتل تصبح بارزة)",
                marked_if_negative: false
              },
              {
                id: "squeeze_test",
                label_en: "Squeeze Test (for nipple discharge)",
                label_ar: "اختبار الضغط (لإفرازات الحلمة)",
                marked_if_negative: false
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "inguinoscrotal_hernia",
    specialty: "surgery",
    icon: "🩻",
    name_en: "Inguinoscrotal Swelling (Hernia)",
    name_ar: "التورم الأربي الصفني (الفتق)",
    sections: [
      {
        id: "personal_history",
        title_en: "Personal History",
        title_ar: "التاريخ الشخصي",
        questions: [
          {
            id: "name",
            label_en: "Name",
            label_ar: "الاسم",
            type: "text",
            required: true
          },
          {
            id: "age",
            label_en: "Age",
            label_ar: "العمر",
            type: "number",
            unit_en: "years",
            unit_ar: "سنة",
            required: true,
            write_up_hint: "The patient is {value} years old (indirect inguinal: any age, direct inguinal: old age, femoral: adult, congenital inguinal: at birth)."
          },
          {
            id: "sex",
            label_en: "Sex",
            label_ar: "الجنس",
            type: "radio",
            required: true,
            options: [
              { value: "male", label_en: "Male", label_ar: "ذكر" },
              { value: "female", label_en: "Female", label_ar: "أنثى" }
            ],
            write_up_hint: "The patient is a {value} (indirect inguinal: male>female, direct inguinal: male only, femoral: common in females)."
          },
          {
            id: "marital_status",
            label_en: "Marital Status",
            label_ar: "الحالة الاجتماعية",
            type: "radio",
            required: false,
            options: [
              { value: "single", label_en: "Single", label_ar: "أعزب" },
              { value: "married", label_en: "Married", label_ar: "متزوج" }
            ],
            write_up_hint: "Repeated pregnancies lead to weakened abdominal wall and increased intra-abdominal pressure."
          },
          {
            id: "address",
            label_en: "Address",
            label_ar: "العنوان",
            type: "text",
            required: false
          },
          {
            id: "residence",
            label_en: "Residence",
            label_ar: "محل الإقامة",
            type: "text",
            required: false
          },
          {
            id: "occupation",
            label_en: "Occupation",
            label_ar: "المهنة",
            type: "text",
            required: false,
            write_up_hint: "Occupation: {value} (jobs with straining or carrying heavy objects predispose to hernia)."
          },
          {
            id: "special_habits",
            label_en: "Special Habits of Medical Importance",
            label_ar: "العادات الخاصة ذات الأهمية الطبية",
            type: "text",
            required: false,
            write_up_hint: "Special habits: {value} (smokers with chronic cough are liable to herniation)."
          }
        ]
      },
      {
        id: "presenting_complaint",
        title_en: "Presenting Complaint",
        title_ar: "الشكوى الرئيسية",
        questions: [
          {
            id: "complaint",
            label_en: "Presenting Complaint (usually swelling in the groin or scrotum)",
            label_ar: "الشكوى الرئيسية (عادة تورم في الأربية أو كيس الصفن)",
            type: "text",
            required: true,
            write_up_hint: "The patient presented with {value}."
          },
          {
            id: "complaint_duration",
            label_en: "Duration",
            label_ar: "المدة",
            type: "number",
            unit_en: "months",
            unit_ar: "شهر",
            required: true,
            write_up_hint: "Of {value} months duration."
          }
        ]
      },
      {
        id: "hopi",
        title_en: "History of Presenting Illness",
        title_ar: "تاريخ المرض الحالي",
        questions: [
          {
            id: "pain_heading",
            label_en: "Pain",
            label_ar: "الألم",
            type: "heading"
          },
          {
            id: "pain_present",
            label_en: "Pain Present",
            label_ar: "وجود ألم",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "pain_site",
            label_en: "Site of Pain",
            label_ar: "موضع الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_character",
            label_en: "Character of Pain",
            label_ar: "طبيعة الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_radiation",
            label_en: "Radiation",
            label_ar: "انتشار الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_increase_decrease",
            label_en: "What Increases or Decreases It",
            label_ar: "ما يزيده أو ينقصه",
            type: "text",
            required: false
          },
          {
            id: "pain_onset",
            label_en: "Onset",
            label_ar: "بداية الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_course",
            label_en: "Course",
            label_ar: "مسار الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_duration",
            label_en: "Duration of Pain",
            label_ar: "مدة الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_severity",
            label_en: "Severity",
            label_ar: "شدة الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_associations",
            label_en: "What Associates",
            label_ar: "ما يصاحبه",
            type: "text",
            required: false
          },
          {
            id: "swelling_heading",
            label_en: "Swelling",
            label_ar: "التورم",
            type: "heading"
          },
          {
            id: "swelling_site",
            label_en: "Site of Swelling",
            label_ar: "موضع التورم",
            type: "text",
            required: false
          },
          {
            id: "swelling_size",
            label_en: "Size of Swelling",
            label_ar: "حجم التورم",
            type: "text",
            required: false,
            write_up_hint: "Swelling of {value} size (e.g., lemon size, orange size)."
          },
          {
            id: "swelling_onset",
            label_en: "Onset of Swelling",
            label_ar: "بداية التورم",
            type: "radio",
            required: false,
            options: [
              { value: "gradual", label_en: "Gradual", label_ar: "تدريجي" },
              { value: "accidental", label_en: "Accidental", label_ar: "عرضي" }
            ]
          },
          {
            id: "swelling_course",
            label_en: "Course of Swelling",
            label_ar: "مسار التورم",
            type: "radio",
            required: false,
            options: [
              { value: "progressive", label_en: "Progressive", label_ar: "متزايد" },
              { value: "regressive", label_en: "Regressive", label_ar: "متراجع" },
              { value: "stationary", label_en: "Stationary", label_ar: "ثابت" }
            ]
          },
          {
            id: "swelling_duration",
            label_en: "Duration of Swelling",
            label_ar: "مدة التورم",
            type: "radio",
            required: false,
            options: [
              { value: "short", label_en: "Short (days or weeks)", label_ar: "قصيرة (أيام أو أسابيع)" },
              { value: "long", label_en: "Long (months or years)", label_ar: "طويلة (شهور أو سنوات)" },
              { value: "since_birth", label_en: "Since birth (congenital)", label_ar: "منذ الولادة (خلقي)" }
            ]
          },
          {
            id: "other_swellings",
            label_en: "Other Swellings",
            label_ar: "تورمات أخرى",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "general_condition_effect",
            label_en: "Effect on General Condition",
            label_ar: "التأثير على الحالة العامة",
            type: "text",
            required: false
          },
          {
            id: "apparent_cause",
            label_en: "Apparent Cause",
            label_ar: "السبب الظاهر",
            type: "text",
            required: false
          },
          {
            id: "increase_strain_decrease_rest",
            label_en: "Increases with Strain, Decreases with Rest",
            label_ar: "يزداد مع الإجهاد وينقص مع الراحة",
            type: "checkbox",
            marked_if_negative: false,
            write_up_hint: "Swelling increases with straining and decreases with rest."
          },
          {
            id: "posture_strain_relation",
            label_en: "Relation of Posture & Straining to Size of Swelling",
            label_ar: "علاقة الوضعية والإجهاد بحجم التورم",
            type: "radio",
            required: false,
            options: [
              { value: "reduces_lying_reappears_standing", label_en: "Appears at lower abdomen, enlarges toward scrotum, reduces lying flat, reappears on standing/straining (hernia)", label_ar: "يظهر بأسفل البطن ويتجه نحو الصفن، يقل عند الاستلقاء ويعود عند الوقوف/الإجهاد (فتق)" },
              { value: "fixed_scrotal_unchanged", label_en: "Appears at bottom of scrotum, fills it completely, size never changes with posture/straining (hydrocele / non-reducible)", label_ar: "يظهر بأسفل الصفن ويملؤه، لا يتغير حجمه مع الوضعية/الإجهاد (قيلة مائية / غير قابل للارجاع)" }
            ],
            write_up_hint: "Posture/straining relation confirms diagnosis of hernia vs non-reducible swelling."
          },
          {
            id: "complications_heading",
            label_en: "Pressure Manifestations & Complications",
            label_ar: "مظاهر الضغط والمضاعفات",
            type: "heading"
          },
          {
            id: "complications",
            label_en: "Complications",
            label_ar: "المضاعفات",
            type: "multicheck",
            items: [
              {
                id: "irreducibility",
                label_en: "Irreducibility",
                label_ar: "عدم القابلية للارجاع",
                marked_if_negative: true
              },
              {
                id: "intestinal_obstruction",
                label_en: "Manifestations of Intestinal Obstruction (acute abdomen, vomiting, absolute constipation, distension)",
                label_ar: "مظاهر الانسداد المعوي (بطن حاد، قيء، إمساك مطلق، انتفاخ)",
                marked_if_negative: true
              }
            ]
          },
          {
            id: "precipitating_factors",
            label_en: "Precipitating Factors",
            label_ar: "العوامل المثيرة",
            type: "multicheck",
            items: [
              {
                id: "chronic_cough",
                label_en: "Chronic Cough",
                label_ar: "سعال مزمن",
                marked_if_negative: false
              },
              {
                id: "chronic_constipation",
                label_en: "Chronic Constipation",
                label_ar: "إمساك مزمن",
                marked_if_negative: false
              },
              {
                id: "straining_micturition",
                label_en: "Straining at Micturition",
                label_ar: "إجهاد عند التبول",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "sliding_hernia_features",
            label_en: "Sliding Hernia Suspected When",
            label_ar: "يُشتبه بالفتق المنزلق عند",
            type: "multicheck",
            items: [
              {
                id: "long_standing",
                label_en: "Long Standing",
                label_ar: "طويل الأمد",
                marked_if_negative: false
              },
              {
                id: "irreducible_sliding",
                label_en: "Irreducible",
                label_ar: "غير قابل للارجاع",
                marked_if_negative: false
              },
              {
                id: "double_micturition",
                label_en: "Double Micturition",
                label_ar: "تبول مزدوج",
                marked_if_negative: false
              },
              {
                id: "pressure_desire_micturate",
                label_en: "Pressure on Hernia Causes Desire to Micturate",
                label_ar: "الضغط على الفتق يسبب الرغبة في التبول",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "investigations_treatment",
            label_en: "History of Investigations and Treatment",
            label_ar: "تاريخ الفحوصات والعلاج",
            type: "textarea"
          }
        ]
      },
      {
        id: "past_medical_history",
        title_en: "Past Medical History",
        title_ar: "التاريخ المرضي السابق",
        questions: [
          {
            id: "similar_attacks",
            label_en: "Similar Attacks",
            label_ar: "نوبات مشابهة",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "common_diseases",
            label_en: "Common Diseases",
            label_ar: "أمراض شائعة",
            type: "multicheck",
            items: [
              {
                id: "diabetes",
                label_en: "Diabetes Mellitus (DM)",
                label_ar: "السكري",
                marked_if_negative: true
              },
              {
                id: "hypertension",
                label_en: "Hypertension",
                label_ar: "ارتفاع ضغط الدم",
                marked_if_negative: true
              },
              {
                id: "tuberculosis",
                label_en: "Tuberculosis (TB)",
                label_ar: "السل",
                marked_if_negative: false
              },
              {
                id: "bilharziasis",
                label_en: "Bilharziasis",
                label_ar: "البلهارسيا",
                marked_if_negative: false
              },
              {
                id: "hepatitis",
                label_en: "Hepatitis",
                label_ar: "التهاب الكبد",
                marked_if_negative: false
              },
              {
                id: "dvt",
                label_en: "Deep Venous Thrombosis (DVT)",
                label_ar: "تجلط الأوردة العميقة",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "drug_allergy",
            label_en: "Drug Allergy & Intake",
            label_ar: "حساسية وتناول الأدوية",
            type: "checkbox",
            marked_if_negative: true
          },
          {
            id: "blood_transfusion",
            label_en: "Blood Transfusion",
            label_ar: "نقل الدم",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "previous_operations",
            label_en: "Previous Operations",
            label_ar: "عمليات سابقة",
            type: "checkbox",
            marked_if_negative: true
          }
        ]
      },
      {
        id: "family_history",
        title_en: "Family History",
        title_ar: "التاريخ العائلي",
        questions: [
          {
            id: "similar_condition_family",
            label_en: "Similar Condition in a Family Member",
            label_ar: "حالة مشابهة لدى أحد أفراد العائلة",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "consanguinity",
            label_en: "Consanguinity",
            label_ar: "زواج الأقارب",
            type: "checkbox",
            marked_if_negative: false
          }
        ]
      },
      {
        id: "general_examination",
        title_en: "General Examination",
        title_ar: "الفحص العام",
        questions: [
          {
            id: "general_appearance",
            label_en: "General Appearance (alert, conscious, oriented, built, facial expression, decubitus, intelligence, cooperation)",
            label_ar: "المظهر العام (واعٍ، متيقظ، مدرك، البنية، تعبير الوجه، الوضعية، الذكاء، التعاون)",
            type: "textarea"
          },
          {
            id: "complexion_heading",
            label_en: "Complexion (3 colors)",
            label_ar: "لون البشرة (3 ألوان)",
            type: "heading"
          },
          {
            id: "complexion",
            label_en: "Complexion Findings",
            label_ar: "نتائج لون البشرة",
            type: "multicheck",
            items: [
              {
                id: "jaundice",
                label_en: "Jaundice",
                label_ar: "يرقان",
                marked_if_negative: false
              },
              {
                id: "pallor",
                label_en: "Pallor",
                label_ar: "شحوب",
                marked_if_negative: false
              },
              {
                id: "cyanosis",
                label_en: "Cyanosis",
                label_ar: "زرقة",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "chest_heart",
            label_en: "Chest & Heart (COPD like asthma or bronchitis)",
            label_ar: "الصدر والقلب (انسداد رئوي مزمن كالربو أو التهاب الشعب)",
            type: "text",
            required: false
          },
          {
            id: "abdomen_heading",
            label_en: "Abdomen",
            label_ar: "البطن",
            type: "heading"
          },
          {
            id: "abdomen_findings",
            label_en: "Abdomen Findings",
            label_ar: "نتائج البطن",
            type: "multicheck",
            items: [
              {
                id: "organomegaly",
                label_en: "Swelling (hepatosplenomegaly, ascites)",
                label_ar: "تورم (تضخم الكبد والطحال، استسقاء)",
                marked_if_negative: false
              },
              {
                id: "intestinal_obstruction_signs",
                label_en: "Intestinal Obstruction (distension, borborygmi)",
                label_ar: "انسداد معوي (انتفاخ، قراقر)",
                marked_if_negative: false
              },
              {
                id: "previous_scar",
                label_en: "Scar of Previous Operation",
                label_ar: "ندبة عملية سابقة",
                marked_if_negative: false
              },
              {
                id: "divarication_recti",
                label_en: "Muscular Weakness: Divarication of Recti",
                label_ar: "ضعف عضلي: تباعد العضلتين المستقيمتين",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "pr_sep",
            label_en: "Per Rectum for Senile Enlargement of Prostate (SEP)",
            label_ar: "الفحص الشرجي لتضخم البروستاتا الشيخوخي",
            type: "checkbox",
            marked_if_negative: true
          },
          {
            id: "extremities",
            label_en: "Extremities (lower limb flat foot, varicose veins or edema)",
            label_ar: "الأطراف (قدم مسطحة، دوالي أو وذمة)",
            type: "text",
            required: false
          },
          {
            id: "vital_signs_heading",
            label_en: "Vital Signs",
            label_ar: "العلامات الحيوية",
            type: "heading"
          },
          {
            id: "pulse",
            label_en: "Pulse",
            label_ar: "النبض",
            type: "number",
            unit_en: "bpm",
            unit_ar: "نبضة/دقيقة",
            required: false
          },
          {
            id: "blood_pressure",
            label_en: "Blood Pressure",
            label_ar: "ضغط الدم",
            type: "text",
            required: false
          },
          {
            id: "temperature",
            label_en: "Temperature",
            label_ar: "درجة الحرارة",
            type: "number",
            unit_en: "°C",
            unit_ar: "°م",
            required: false
          },
          {
            id: "head_neck_spine",
            label_en: "Head, Neck & Spine",
            label_ar: "الرأس والرقبة والعمود الفقري",
            type: "text",
            required: false
          },
          {
            id: "scrotum_varicocele",
            label_en: "Scrotum (if associated varicocele)",
            label_ar: "كيس الصفن (إذا صاحبه دوالي الخصية)",
            type: "checkbox",
            marked_if_negative: false
          }
        ]
      },
      {
        id: "local_examination",
        title_en: "Local Examination",
        title_ar: "الفحص الموضعي",
        questions: [
          {
            id: "exposure_position",
            label_en: "Exposure & Position (patient standing, exposed from nipple to knees)",
            label_ar: "الكشف والوضعية (المريض واقف، الكشف من الحلمة إلى الركبتين)",
            type: "text",
            required: false,
            write_up_hint: "Patient examined standing, exposed from nipple to knees, to know full extent of hernia sac and to inspect direct hernia and varicocele."
          },
          {
            id: "inspection_heading",
            label_en: "Inspection (while standing, from 2 planes)",
            label_ar: "الفحص بالنظر (وقوفاً، من مستويين)",
            type: "heading"
          },
          {
            id: "swelling_inspect_site",
            label_en: "Site",
            label_ar: "الموضع",
            type: "text",
            required: false
          },
          {
            id: "swelling_inspect_size",
            label_en: "Size (in cm, best)",
            label_ar: "الحجم (بالسنتيمتر)",
            type: "text",
            required: false
          },
          {
            id: "swelling_inspect_shape",
            label_en: "Shape",
            label_ar: "الشكل",
            type: "radio",
            required: false,
            options: [
              { value: "irregular", label_en: "Irregular", label_ar: "غير منتظم" },
              { value: "oval", label_en: "Oval", label_ar: "بيضاوي" },
              { value: "rounded", label_en: "Rounded", label_ar: "مستدير" },
              { value: "pyriform", label_en: "Pyriform (indirect inguinal hernia)", label_ar: "كمثري (فتق أربي غير مباشر)" }
            ]
          },
          {
            id: "overlying_skin",
            label_en: "Overlying Skin",
            label_ar: "الجلد المغطي",
            type: "multicheck",
            items: [
              {
                id: "skin_normal",
                label_en: "Normal",
                label_ar: "طبيعي",
                marked_if_negative: false
              },
              {
                id: "skin_stretched",
                label_en: "Stretched",
                label_ar: "مشدود",
                marked_if_negative: false
              },
              {
                id: "skin_pigmented",
                label_en: "Pigmented",
                label_ar: "مصطبغ",
                marked_if_negative: false
              },
              {
                id: "inflammation_signs",
                label_en: "Signs of Inflammation (redness, edema)",
                label_ar: "علامات التهاب (احمرار، وذمة)",
                marked_if_negative: false
              },
              {
                id: "dilated_veins",
                label_en: "Dilated Veins",
                label_ar: "أوردة متوسعة",
                marked_if_negative: false
              },
              {
                id: "ulcer",
                label_en: "Ulcer",
                label_ar: "تقرح",
                marked_if_negative: false
              },
              {
                id: "scar",
                label_en: "Scar",
                label_ar: "ندبة",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "expansile_impulse_inspect",
            label_en: "Expansile Impulse on Cough (increase in size in all directions)",
            label_ar: "نبضة انبساطية عند السعال (زيادة الحجم في كل الاتجاهات)",
            type: "checkbox",
            marked_if_negative: true
          },
          {
            id: "palpation_heading",
            label_en: "Palpation",
            label_ar: "الجس",
            type: "heading"
          },
          {
            id: "warmth",
            label_en: "Warmth",
            label_ar: "الدفء",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "tenderness",
            label_en: "Tenderness",
            label_ar: "الإيلام",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "surface",
            label_en: "Surface",
            label_ar: "السطح",
            type: "radio",
            required: false,
            options: [
              { value: "smooth", label_en: "Smooth", label_ar: "أملس" },
              { value: "nodular", label_en: "Nodular", label_ar: "عقدي" }
            ]
          },
          {
            id: "edge",
            label_en: "Edge",
            label_ar: "الحافة",
            type: "text",
            required: false
          },
          {
            id: "consistency",
            label_en: "Consistency",
            label_ar: "القوام",
            type: "radio",
            required: false,
            options: [
              { value: "soft", label_en: "Soft (intestine)", label_ar: "طري (أمعاء)" },
              { value: "doughy", label_en: "Doughy (omentum)", label_ar: "عجيني (ثرب)" }
            ]
          },
          {
            id: "expansile_cough_palpation",
            label_en: "Special Character: Grasp Swelling & Ask to Cough (expansile increase in size/tension = hernia)",
            label_ar: "صفة خاصة: إمساك التورم وطلب السعال (زيادة انبساطية بالحجم/الشد = فتق)",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "draining_lymph_nodes",
            label_en: "Draining Lymph Nodes (inguinal & para-aortic)",
            label_ar: "العقد الليمفاوية المصرفة (الأربية وحول الأبهر)",
            type: "checkbox",
            marked_if_negative: true
          },
          {
            id: "special_tests_heading",
            label_en: "Special Tests",
            label_ar: "الاختبارات الخاصة",
            type: "heading"
          },
          {
            id: "scrotal_neck_test",
            label_en: "Scrotal Neck Test (get above the swelling)",
            label_ar: "اختبار عنق الصفن (الوصول لأعلى التورم)",
            type: "radio",
            required: false,
            options: [
              { value: "inguinal", label_en: "Inguinal (hernia)", label_ar: "أربي (فتق)" },
              { value: "inguinoscrotal", label_en: "Inguinoscrotal (hernia or varicocele)", label_ar: "أربي صفني (فتق أو دوالي)" },
              { value: "scrotal", label_en: "Scrotal (varicocele)", label_ar: "صفني (دوالي)" }
            ]
          },
          {
            id: "internal_ring_test",
            label_en: "Internal Ring Test (occlude internal ring, ask to cough)",
            label_ar: "اختبار الحلقة الداخلية (إغلاق الحلقة الداخلية والطلب بالسعال)",
            type: "radio",
            required: false,
            options: [
              { value: "appears", label_en: "Hernia appears (direct hernia)", label_ar: "يظهر الفتق (فتق مباشر)" },
              { value: "not_appears", label_en: "Does not appear, appears on release (oblique/indirect hernia)", label_ar: "لا يظهر، يظهر عند الرفع (فتق غير مباشر)" }
            ]
          },
          {
            id: "external_ring_test",
            label_en: "External Ring Test (invaginate scrotal skin, ask to cough)",
            label_ar: "اختبار الحلقة الخارجية (دفع جلد الصفن وطلب السعال)",
            type: "radio",
            required: false,
            options: [
              { value: "finger_tip", label_en: "Impulse hits finger tip (oblique hernia)", label_ar: "النبضة تصطدم بطرف الإصبع (فتق غير مباشر)" },
              { value: "finger_back", "label_en": "Impulse hits back of finger (direct hernia)", "label_ar": "النبضة تصطدم بظهر الإصبع (فتق مباشر)" }
            ]
          },
          {
            id: "three_fingers_test",
            label_en: "Three Fingers Test (Ziemann's Test)",
            label_ar: "اختبار الأصابع الثلاثة (اختبار زيمان)",
            type: "radio",
            required: false,
            options: [
              { value: "first_finger", label_en: "Hits 1st finger / internal ring (oblique hernia)", label_ar: "يصطدم بالإصبع الأول / الحلقة الداخلية (فتق غير مباشر)" },
              { value: "second_finger", label_en: "Hits 2nd finger / inguinal canal (direct hernia)", label_ar: "يصطدم بالإصبع الثاني / القناة الأربية (فتق مباشر)" },
              { value: "third_finger", label_en: "Hits 3rd finger / femoral canal (femoral hernia)", label_ar: "يصطدم بالإصبع الثالث / القناة الفخذية (فتق فخذي)" }
            ]
          },
          {
            id: "pubic_tubercle_test",
            label_en: "Pubic Tubercle Test (inguinal vs femoral)",
            label_ar: "اختبار الحديبة العانية (أربي مقابل فخذي)",
            type: "radio",
            required: false,
            options: [
              { value: "above_medial", label_en: "Neck above & medial to pubic tubercle (inguinal)", label_ar: "العنق فوق وإنسي الحديبة العانية (أربي)" },
              { value: "below_lateral", label_en: "Neck below & lateral to pubic tubercle (femoral)", label_ar: "العنق تحت ووحشي الحديبة العانية (فخذي)" }
            ]
          },
          {
            id: "reducibility",
            label_en: "Reducibility (reduces on pressure, reappears on coughing/straining = hernia)",
            label_ar: "قابلية الارجاع (يقل بالضغط ويعود بالسعال/الإجهاد = فتق)",
            type: "checkbox",
            marked_if_negative: true
          },
          {
            id: "examine_testis_heading",
            label_en: "Examine Testis, Penis & Perineum",
            label_ar: "فحص الخصية والقضيب والعجان",
            type: "heading"
          },
          {
            id: "testis_exam",
            label_en: "Testis Examination",
            label_ar: "فحص الخصية",
            type: "multicheck",
            items: [
              {
                id: "testis_size",
                label_en: "Size",
                label_ar: "الحجم",
                marked_if_negative: false
              },
              {
                id: "testis_consistency",
                label_en: "Consistency",
                label_ar: "القوام",
                marked_if_negative: false
              },
              {
                id: "testicular_sensation",
                label_en: "Testicular Sensation",
                label_ar: "الإحساس الخصوي",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "penis_exam",
            label_en: "Penis (ulcer or scar of chancre, external meatus: site, discharge by pressing the glans)",
            label_ar: "القضيب (تقرح أو ندبة قرحة، الفتحة الخارجية: الموضع، إفرازات بالضغط على الحشفة)",
            type: "text",
            required: false
          },
          {
            id: "perineum_exam",
            label_en: "Perineum",
            label_ar: "العجان",
            type: "text",
            required: false
          },
          {
            id: "other_hernial_orifices",
            label_en: "Other Hernial Orifices",
            label_ar: "فتحات الفتق الأخرى",
            type: "checkbox",
            marked_if_negative: true
          },
          {
            id: "percussion",
            label_en: "Percussion (mainly in abdominal hernia)",
            label_ar: "القرع (خاصة في الفتق البطني)",
            type: "radio",
            required: false,
            options: [
              { value: "resonant", label_en: "Resonant - intestine (Enterocele)", label_ar: "رنين - أمعاء (قيلة معوية)" },
              { value: "dull", label_en: "Dull - omentum (Omentocele)", label_ar: "غير رنين - ثرب (قيلة ثربية)" }
            ]
          },
          {
            id: "auscultation",
            label_en: "Auscultation (intestinal sound heard in Enterocele)",
            label_ar: "الإصغاء (تُسمع أصوات معوية في القيلة المعوية)",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "transillumination",
            label_en: "Transillumination (hernia in infant only is translucent)",
            label_ar: "الإضاءة الخلفية (الفتق في الرضيع فقط يكون شفافاً)",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "spermatic_cord",
            label_en: "Spermatic Cord",
            label_ar: "الحبل المنوي",
            type: "radio",
            required: false,
            options: [
              { value: "beaded", label_en: "Beaded (Bilharziasis or T.B)", label_ar: "مُحبب (بلهارسيا أو سل)" },
              { value: "matted", label_en: "Matted (Filariasis)", label_ar: "متلبد (داء الفيلاريا)" }
            ]
          },
          {
            id: "scrotum_exam",
            label_en: "Scrotum (anterior & posterior aspect: shape, symmetry, swelling; back for TB sinus; palpate both sides; epididymis; tunica vaginalis pinching test for hydrocele)",
            label_ar: "كيس الصفن (الوجه الأمامي والخلفي: الشكل، التناظر، التورم؛ الخلف لناسور السل؛ جس الجانبين؛ البربخ؛ اختبار قرص الغلالة الغمدية للقيلة المائية)",
            type: "textarea"
          }
        ]
      }
    ]
  },



  {
    id: "salivary_gland_swelling",
    specialty: "surgery",
    icon: "👄",
    name_en: "Salivary Gland Swelling",
    name_ar: "حالة تورم الغدد اللعابية",
    sections: [
      {
        id: "personal_history",
        title_en: "Personal History",
        title_ar: "التاريخ الشخصي",
        questions: [
          {
            id: "patient_name",
            label_en: "Patient Name",
            label_ar: "اسم المريض",
            type: "text",
            required: true
          },
          {
            id: "age",
            label_en: "Age",
            label_ar: "العمر",
            type: "number",
            unit_en: "years",
            unit_ar: "سنة",
            required: true
          },
          {
            id: "sex",
            label_en: "Sex",
            label_ar: "الجنس",
            type: "radio",
            required: true,
            options: [
              { value: "male", label_en: "Male", label_ar: "ذكر" },
              { value: "female", label_en: "Female", label_ar: "أنثى" }
            ]
          },
          {
            id: "occupation",
            label_en: "Occupation",
            label_ar: "المهنة",
            type: "text",
            required: false
          },
          {
            id: "oral_hygiene",
            label_en: "Oral Hygiene",
            label_ar: "نظافة الفم",
            type: "radio",
            required: false,
            options: [
              { value: "good", label_en: "Good", label_ar: "جيدة" },
              { value: "fair", label_en: "Fair", label_ar: "مقبولة" },
              { value: "poor", label_en: "Poor", label_ar: "سيئة" }
            ]
          }
        ]
      },
      {
        id: "presenting_complaint",
        title_en: "Presenting Complaint",
        title_ar: "الشكوى الرئيسية",
        questions: [
          {
            id: "symptoms",
            label_en: "Main Symptoms",
            label_ar: "الأعراض الرئيسية",
            type: "multicheck",
            items: [
              { id: "symptom_swelling", label_en: "Swelling / Neck lump", label_ar: "تورم / كتلة", marked_if_negative: false },
              { id: "symptom_pain", label_en: "Pain", label_ar: "ألم", marked_if_negative: false },
              { id: "symptom_dry_mouth", label_en: "Dry mouth", label_ar: "جفاف الفم", marked_if_negative: false },
              { id: "symptom_facial_asymmetry", label_en: "Facial asymmetry", label_ar: "عدم تناسق الوجه", marked_if_negative: false },
              { id: "symptom_difficulty_chewing", label_en: "Difficulty chewing", label_ar: "صعوبة في المضغ", marked_if_negative: false },
              { id: "symptom_facial_weakness", label_en: "Facial muscle weakness", label_ar: "ضعف في عضلات الوجه", marked_if_negative: true }
            ]
          },
          {
            id: "duration_value",
            label_en: "Duration",
            label_ar: "مدة الشكوى",
            type: "number",
            required: true
          },
          {
            id: "duration_unit",
            label_en: "Duration Unit",
            label_ar: "وحدة المدة",
            type: "radio",
            required: true,
            options: [
              { value: "days", label_en: "Days", label_ar: "أيام" },
              { value: "weeks", label_en: "Weeks", label_ar: "أسابيع" },
              { value: "months", label_en: "Months", label_ar: "أشهر" },
              { value: "years", label_en: "Years", label_ar: "سنوات" }
            ]
          }
        ]
      },
      {
        id: "hopi",
        title_en: "History of Presenting Illness",
        title_ar: "تاريخ المرض الحالي",
        questions: [
          {
            id: "last_time_well",
            label_en: "When was the last time you felt completely well?",
            label_ar: "متى كانت آخر مرة شعرت فيها بصحة جيدة تامة؟",
            type: "text"
          },
          {
            id: "fever",
            label_en: "Fever",
            label_ar: "الحمى",
            type: "checkbox",
            marked_if_negative: true
          },
          {
            id: "previous_attacks",
            label_en: "Previous Similar Attacks",
            label_ar: "نوبات سابقة مماثلة",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "previous_attacks_number",
            label_en: "Number of Previous Attacks",
            label_ar: "عدد النوبات السابقة",
            type: "number",
            unit_en: "attacks",
            unit_ar: "نوبة"
          },
          {
            id: "pain_present",
            label_en: "Pain",
            label_ar: "الألم",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "pain_character",
            label_en: "Character of Pain",
            label_ar: "طبيعة الألم",
            type: "radio",
            options: [
              { value: "dull_aching", label_en: "Dull aching", label_ar: "ألم مبهم / ثقيل" },
              { value: "sharp", label_en: "Sharp", label_ar: "حاد" },
              { value: "colicky", label_en: "Colicky (Salivary colic)", label_ar: "مغص قنوات الغدة اللعابية" }
            ]
          },
          {
            id: "pain_radiation",
            label_en: "Radiation of Pain",
            label_ar: "انتشار الألم",
            type: "radio",
            options: [
              { value: "none", label_en: "No radiation", label_ar: "لا ينتشر" },
              { value: "ear", label_en: "To the ear", label_ar: "إلى الأذن" },
              { value: "tongue", label_en: "To the tongue", label_ar: "إلى اللسان" }
            ]
          },
          {
            id: "trismus",
            label_en: "Trismus (Difficulty / inability to open the mouth)",
            label_ar: "التشنج الفكي — صعوبة أو عدم القدرة على فتح الفم",
            type: "checkbox",
            marked_if_negative: true
          },
          {
            id: "swelling_present",
            label_en: "Swelling",
            label_ar: "التورم",
            type: "checkbox",
            marked_if_negative: true
          },
          {
            id: "swelling_site_patient",
            label_en: "Location of Swelling (as described by patient)",
            label_ar: "موقع التورم كما يصفه المريض",
            type: "radio",
            options: [
              { value: "side_of_face", label_en: "Side of the face (parotid region)", label_ar: "جانب الوجه — منطقة الغدة النكفية" },
              { value: "beneath_jaw", label_en: "Beneath the jaw (submandibular region)", label_ar: "تحت الفك السفلي — المنطقة تحت الفكية" },
              { value: "floor_of_mouth", label_en: "Floor of mouth (sublingual region)", label_ar: "أرضية الفم — المنطقة تحت اللسان" }
            ]
          },
          {
            id: "eating_effect",
            label_en: "Effect of Eating on Pain and Swelling Size",
            label_ar: "تأثير تناول الطعام على الألم وحجم التورم",
            type: "radio",
            options: [
              { value: "increases", label_en: "Increases / worsens after eating", label_ar: "يزداد / يسوء بعد تناول الطعام" },
              { value: "no_change", label_en: "Becomes prominent but does not increase in size", label_ar: "يصبح بارزاً ولكن لا يزداد في الحجم" },
              { value: "no_effect", label_en: "No effect", label_ar: "لا يوجد تأثير" }
            ]
          },
          {
            id: "swelling_growth",
            label_en: "Rate of Swelling Growth",
            label_ar: "معدل نمو التورم",
            type: "radio",
            options: [
              { value: "slow", label_en: "Slowly growing", label_ar: "نمو بطيء" },
              { value: "rapid", label_en: "Rapidly growing", label_ar: "نمو سريع" }
            ]
          },
          {
            id: "autoimmune_symptoms",
            label_en: "Manifestations of Autoimmune Sialoadenitis",
            label_ar: "مظاهر التهاب الغدة اللعابية المناعي الذاتي",
            type: "multicheck",
            items: [
              { id: "dry_mouth", label_en: "Dryness of the mouth", label_ar: "جفاف الفم", marked_if_negative: false },
              { id: "dry_eyes", label_en: "Dryness of the conjunctiva", label_ar: "جفاف الملتحمة", marked_if_negative: false },
              { id: "rheumatoid_arthritis", label_en: "Rheumatoid arthritis", label_ar: "التهاب المفاصل الروماتويدي", marked_if_negative: false }
            ]
          },
          {
            id: "facial_palsy_symptoms",
            label_en: "Local Manifestations of Facial Palsy / Functional Disturbance",
            label_ar: "المظاهر المحلية لشلل العصب الوجهي / اضطراب الوظيفة",
            type: "multicheck",
            items: [
              { id: "cannot_close_eyes", label_en: "Inability / difficulty to close the eyes", label_ar: "عدم القدرة أو صعوبة في إغلاق العينين", marked_if_negative: true },
              { id: "food_accumulation", label_en: "Accumulation of food between the gum and the cheek", label_ar: "تجمع الطعام بين اللثة والخد", marked_if_negative: false },
              { id: "saliva_dripping", label_en: "Dripping of saliva from the angle of the mouth", label_ar: "سيلان اللعاب من زاوية الفم", marked_if_negative: false },
              { id: "mouth_asymmetry", label_en: "Asymmetry of the mouth", label_ar: "عدم تناسق الفم", marked_if_negative: true }
            ]
          },
          {
            id: "metastasis_manifestations",
            label_en: "Manifestations of Metastasis",
            label_ar: "مظاهر الانتشار الورمي",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "investigation_treatment_history",
            label_en: "History of Investigations and Treatment",
            label_ar: "تاريخ الفحوصات والعلاجات السابقة",
            type: "textarea"
          }
        ]
      },
      {
        id: "past_medical_history",
        title_en: "Past Medical History",
        title_ar: "التاريخ المرضي السابق",
        questions: [
          { id: "past_mumps", label_en: "History of Mumps", label_ar: "تاريخ الإصابة بالنكاف", type: "checkbox" },
          { id: "oral_sepsis", label_en: "Oral Sepsis", label_ar: "إنتان الفم", type: "checkbox" },
          { id: "oral_breathing", label_en: "Mouth Breathing", label_ar: "التنفس الفموي", type: "checkbox" },
          { id: "hypertension", label_en: "Hypertension", label_ar: "ارتفاع ضغط الدم", type: "checkbox" },
          { id: "diabetes", label_en: "Diabetes Mellitus", label_ar: "داء السكري", type: "checkbox" },
          { id: "autoimmune_disease", label_en: "Known Autoimmune Disease (Sjögren's / RA / SLE)", label_ar: "مرض مناعي ذاتي معروف (سجوجرن / روماتويد / ذئبة)", type: "checkbox" },
          { id: "previous_head_neck_radiation", label_en: "Previous Radiation to Head or Neck", label_ar: "إشعاع سابق للرأس أو الرقبة", type: "checkbox", marked_if_negative: false },
          { id: "previous_surgery", label_en: "Previous Surgery (especially head / neck)", label_ar: "عمليات جراحية سابقة (خاصة الرأس والرقبة)", type: "checkbox" }
        ]
      },
      {
        id: "drug_history",
        title_en: "Drug History",
        title_ar: "تاريخ الأدوية",
        questions: [
          {
            id: "current_medications",
            label_en: "Current Medications",
            label_ar: "الأدوية الحالية",
            type: "textarea"
          },
          {
            id: "drug_allergy",
            label_en: "Drug Allergy",
            label_ar: "حساسية من أدوية",
            type: "checkbox"
          },
          {
            id: "drug_allergy_details",
            label_en: "Allergy Details",
            label_ar: "تفاصيل الحساسية",
            type: "text"
          },
          {
            id: "antihypertensives",
            label_en: "Antihypertensive Drugs (may cause salivary gland swelling)",
            label_ar: "أدوية ضغط الدم (قد تسبب تورم الغدد اللعابية)",
            type: "checkbox"
          },
          {
            id: "diuretics",
            label_en: "Diuretics (may cause dry mouth)",
            label_ar: "مدرات البول (قد تسبب جفاف الفم)",
            type: "checkbox"
          },
          {
            id: "phenothiazines",
            label_en: "Phenothiazines / Antipsychotics (may cause dry mouth)",
            label_ar: "الفينوثيازينات / مضادات الذهان (قد تسبب جفاف الفم)",
            type: "checkbox"
          }
        ]
      },
      {
        id: "family_history",
        title_en: "Family History",
        title_ar: "التاريخ العائلي",
        questions: [
          { id: "family_similar", label_en: "Family history of similar salivary gland conditions", label_ar: "تاريخ عائلي لحالات مماثلة في الغدد اللعابية", type: "checkbox" },
          { id: "family_autoimmune", label_en: "Family history of autoimmune diseases", label_ar: "تاريخ عائلي لأمراض مناعية ذاتية", type: "checkbox" },
          { id: "family_malignancy", label_en: "Family history of head / neck malignancy", label_ar: "تاريخ عائلي لأورام الرأس والرقبة", type: "checkbox" }
        ]
      },
      {
        id: "social_history",
        title_en: "Social History",
        title_ar: "التاريخ الاجتماعي",
        questions: [
          {
            id: "smoking",
            label_en: "Smoking",
            label_ar: "التدخين",
            type: "checkbox",
            marked_if_negative: true
          },
          {
            id: "smoking_pack_years",
            label_en: "Smoking Pack-Years",
            label_ar: "معدل التدخين (علبة/سنة)",
            type: "number",
            unit_en: "pack-years",
            unit_ar: "علبة/سنة"
          },
          {
            id: "alcohol",
            label_en: "Alcohol Consumption",
            label_ar: "تناول الكحول",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "marital_status",
            label_en: "Marital Status",
            label_ar: "الحالة الاجتماعية",
            type: "radio",
            options: [
              { value: "single", label_en: "Single", label_ar: "أعزب" },
              { value: "married", label_en: "Married", label_ar: "متزوج" },
              { value: "divorced", label_en: "Divorced", label_ar: "مطلق" },
              { value: "widowed", label_en: "Widowed", label_ar: "أرمل" }
            ]
          },
          {
            id: "residence",
            label_en: "Residence",
            label_ar: "مكان الإقامة",
            type: "text"
          }
        ]
      },
      {
        id: "general_examination",
        title_en: "General Examination",
        title_ar: "الفحص العام",
        questions: [
          { id: "vitals_heading", label_en: "Vital Signs", label_ar: "العلامات الحيوية", type: "heading" },
          {
            id: "temperature",
            label_en: "Temperature",
            label_ar: "درجة الحرارة",
            type: "number",
            unit_en: "°C",
            unit_ar: "°م"
          },
          {
            id: "pulse_rate",
            label_en: "Pulse Rate",
            label_ar: "معدل النبض",
            type: "number",
            unit_en: "bpm",
            unit_ar: "نبضة/دقيقة"
          },
          {
            id: "blood_pressure",
            label_en: "Blood Pressure",
            label_ar: "ضغط الدم",
            type: "text"
          },
          {
            id: "respiratory_rate",
            label_en: "Respiratory Rate",
            label_ar: "معدل التنفس",
            type: "number",
            unit_en: "breaths/min",
            unit_ar: "نفس/دقيقة"
          },
          {
            id: "general_condition",
            label_en: "General Condition",
            label_ar: "الحالة العامة",
            type: "radio",
            options: [
              { value: "good", label_en: "Good", label_ar: "جيدة" },
              { value: "fair", label_en: "Fair", label_ar: "مقبولة" },
              { value: "poor", label_en: "Poor", label_ar: "سيئة" }
            ]
          },
          { id: "findings_heading", label_en: "Relevant Clinical Findings", label_ar: "النتائج السريرية ذات الصلة", type: "heading" },
          { id: "gen_ln_enlargement", label_en: "Lymph Node Enlargement", label_ar: "تضخم العقد الليمفاوية", type: "checkbox" },
          { id: "gen_metastasis_signs", label_en: "Signs of Metastasis", label_ar: "علامات الانتشار الورمي", type: "checkbox" },
          { id: "gen_autoimmune_signs", label_en: "Signs of Autoimmune Disease", label_ar: "علامات مرض مناعي ذاتي", type: "checkbox" },
          { id: "gen_dehydration", label_en: "Signs of Dehydration", label_ar: "علامات الجفاف", type: "checkbox" }
        ]
      },
      {
        id: "local_examination",
        title_en: "Local Examination",
        title_ar: "الفحص الموضعي",
        questions: [
          { id: "features_heading", label_en: "Features of the Swelling", label_ar: "خصائص التورم", type: "heading" },
          {
            id: "swelling_site_exam",
            label_en: "Site of Swelling",
            label_ar: "موقع التورم بالفحص",
            type: "select",
            options: [
              { value: "parotid_site", label_en: "In the site of the parotid gland", label_ar: "في موقع الغدة النكفية" },
              { value: "mandibular_ramus", label_en: "Over the mandibular ramus", label_ar: "فوق فرع الفك السفلي" },
              { value: "mandibular_angle", label_en: "Over the angle of the jaw", label_ar: "فوق زاوية الفك السفلي" },
              { value: "digastric_triangle", label_en: "In the digastric triangle (submandibular)", label_ar: "في المثلث ذو البطنين — تحت الفك السفلي" }
            ]
          },
          {
            id: "swelling_number",
            label_en: "Number / Laterality",
            label_ar: "العدد / الجانبية",
            type: "radio",
            options: [
              { value: "solitary", label_en: "Solitary", label_ar: "منفرد" },
              { value: "bilateral", label_en: "Bilateral / Multiple", label_ar: "ثنائي / متعدد" }
            ]
          },
          {
            id: "elevating_ear_lobule",
            label_en: "Elevating the lobule of the ear",
            label_ar: "رفع شحمة الأذن",
            type: "checkbox",
            marked_if_negative: true
          },
          {
            id: "swelling_edge",
            label_en: "Definition of Edge",
            label_ar: "تحديد الحواف",
            type: "radio",
            options: [
              { value: "well_defined", label_en: "Well-defined", label_ar: "محددة بوضوح" },
              { value: "ill_defined", label_en: "Ill-defined", label_ar: "غير محددة بوضوح" }
            ]
          },
          {
            id: "swelling_surface",
            label_en: "Surface Texture",
            label_ar: "طبيعة السطح",
            type: "radio",
            options: [
              { value: "smooth", label_en: "Smooth", label_ar: "أملس" },
              { value: "lobulated", label_en: "Lobulated", label_ar: "مفصص" },
              { value: "nodular", label_en: "Nodular", label_ar: "عقدي" }
            ]
          },
          {
            id: "swelling_consistency",
            label_en: "Consistency",
            label_ar: "القوام",
            type: "radio",
            options: [
              { value: "cystic", label_en: "Cystic", label_ar: "كيسي" },
              { value: "firm", label_en: "Firm", label_ar: "متماسك / قاسٍ نسبياً" },
              { value: "hard", label_en: "Hard / Stony hard", label_ar: "صلب / صلب كالحجر" },
              { value: "variable", label_en: "Variable (firm or cystic, never hard)", label_ar: "قوام متغير — متماسك أو كيسي، وليس صلباً" }
            ]
          },
          {
            id: "transillumination",
            label_en: "Transillumination",
            label_ar: "الفحص بالإضاءة العابرة",
            type: "radio",
            options: [
              { value: "positive", label_en: "Positive (cystic lesion)", label_ar: "إيجابي — آفة كيسية" },
              { value: "negative", label_en: "Negative (solid lesion)", label_ar: "سلبي — آفة صصلبة" }
            ]
          },
          { id: "skin_warmth", label_en: "Overlying Skin is Warm", label_ar: "الجلد فوق التورم دافئ", type: "checkbox" },
          { id: "skin_tenderness", label_en: "Swelling is Tender on Palpation", label_ar: "التورم مؤلم عند الجس", type: "checkbox" },
          { id: "fluctuation", label_en: "Fluctuation (abscess or cyst)", label_ar: "التموج — يشير إلى خراج أو كيس", type: "checkbox" },
          {
            id: "skin_changes",
            label_en: "Overlying Skin Changes",
            label_ar: "تغيرات الجلد فوق التورم",
            type: "multicheck",
            items: [
              { id: "skin_red", label_en: "Redness", label_ar: "احمرار", marked_if_negative: false },
              { id: "skin_edematous", label_en: "Edematous", label_ar: "متوذم", marked_if_negative: false },
              { id: "skin_infiltration", label_en: "Infiltration of skin by tumour", label_ar: "ارتشاح الجلد بالورم", marked_if_negative: true }
            ]
          },
          { id: "surrounding_structures_heading", label_en: "Examination of Surrounding Structures", label_ar: "فحص التراكيب المحيطة", type: "heading" },
          {
            id: "facial_nerve_exam",
            label_en: "Facial Nerve Infiltration Findings",
            label_ar: "نتائج ارتشاح العصب الوجهي",
            type: "radio",
            options: [
              { value: "no_infiltration", label_en: "No facial nerve infiltration", label_ar: "لا يوجد ارتشاح بالعصب الوجهي" },
              { value: "mild_weakness", label_en: "Mild weakness of the lower lip", label_ar: "ضعف خفيف في الشفة السفلية" },
              { value: "complete_palsy", label_en: "Complete facial nerve palsy", label_ar: "شلل كامل في العصب الوجهي" }
            ]
          },
          { id: "masseter_prominence", label_en: "Swelling becomes more prominent on masseter contraction (clinch teeth)", label_ar: "يصبح التورم أكثر بروزاً عند انقباض عضلة الماضغة (إطباق الأسنان)", type: "checkbox" },
          { id: "fixed_to_masseter", label_en: "Fixed to masseter muscle", label_ar: "ملتصق بعضلة الماضغة", type: "checkbox" },
          { id: "fixed_to_sternomastoid", label_en: "Fixed to sternomastoid muscle (turn face against resistance)", label_ar: "ملتصق بالعضلة القصية الترقوية الخشائية (تحريك الوجه ضد المقاومة)", type: "checkbox" },
          { id: "roll_over_mandible", label_en: "Can be rolled over the angle of the mandible", label_ar: "يمكن دحرجته فوق زاوية الفك السفلي", type: "checkbox", marked_if_negative: true },
          { id: "auscultation_bruit", label_en: "Bruit on Auscultation (suggests vascular lesion)", label_ar: "نفخة عند التسمع — تشير إلى آفة وعائية", type: "checkbox", marked_if_negative: false },
          {
            id: "temporal_pulsation",
            label_en: "Superficial Temporal Pulsation (in front of tragus)",
            label_ar: "نبض الشريان الصدغي السطحي (أمام وتدة الأذن)",
            type: "radio",
            options: [
              { value: "normal", label_en: "Normal", label_ar: "طبيعي" },
              { value: "weak_absent", label_en: "Weak or absent (suggests malignancy)", label_ar: "ضعيف أو غائب — يشير إلى خباثة" }
            ]
          },
          {
            id: "relation_to_bone",
            label_en: "Relation to Bone",
            label_ar: "العلاقة بالعظم",
            type: "radio",
            options: [
              { value: "superficial", label_en: "Superficial to masseter / bone", label_ar: "سطحي لعضلة الماضغة / العظم" },
              { value: "deep", label_en: "Deep to masseter (e.g. ramus of mandible swelling)", label_ar: "عميق لعضلة الماضغة (مثل تورم فرع الفك السفلي)" }
            ]
          },
          { id: "oral_cavity_heading", label_en: "Oral Cavity Examination", label_ar: "فحص تجويف الفم", type: "heading" },
          {
            id: "tonsil_position",
            label_en: "Position of the Tonsil",
            label_ar: "موقع اللوزة",
            type: "radio",
            options: [
              { value: "normal", label_en: "Normal", label_ar: "طبيعي" },
              { value: "medially_displaced", label_en: "Displaced medially (deep lobe of parotid enlargement)", label_ar: "مزاحة نحو الداخل — تضخم الفص العميق للغدة النكفية" }
            ]
          },
          {
            id: "duct_orifice_exam",
            label_en: "Orifice of Parotid (Stenson's) or Submandibular (Wharton's) Duct",
            label_ar: "فتحة قناة الغدة النكفية (ستنسون) أو تحت الفك السفلي (وارتون)",
            type: "multicheck",
            items: [
              { id: "orifice_red", label_en: "Inflamed, red orifice", label_ar: "فتحة ملتهبة وحمراء", marked_if_negative: false },
              { id: "orifice_raised", label_en: "Raised / edematous orifice", label_ar: "فتحة مرتفعة / متوذمة", marked_if_negative: false },
              { id: "orifice_pus", label_en: "Pus discharged on compression of the swelling", label_ar: "خروج صديد عند الضغط على التورم", marked_if_negative: true }
            ]
          },
          {
            id: "bimanual_exam",
            label_en: "Bimanual Examination Findings",
            label_ar: "نتائج الفحص بكلتا اليدين",
            type: "multicheck",
            items: [
              { id: "stone_felt", label_en: "Stone palpable by bimanual examination", label_ar: "يمكن الإحساس بالحصوة بالفحص الثنائي", marked_if_negative: false },
              { id: "fills_floor", label_en: "Swelling fills the floor of the mouth", label_ar: "التورم يملأ أرضية الفم", marked_if_negative: false }
            ]
          },
          { id: "lymph_nodes_heading", label_en: "Lymph Nodes Examination", label_ar: "فحص العقد الليمفاوية", type: "heading" },
          {
            id: "cervical_ln_status",
            label_en: "Deep Cervical Lymph Nodes (Upper and Lower)",
            label_ar: "العقد الليمفاوية العنقية العميقة (العلوية والسفلية)",
            type: "radio",
            options: [
              { value: "not_enlarged", label_en: "Not enlarged", label_ar: "غير متضخمة" },
              { value: "enlarged_stony_hard_mobile", label_en: "Enlarged, stony hard, mobile", label_ar: "متضخمة، صلبة كالحجر، متحركة" },
              { value: "enlarged_stony_hard_fixed", label_en: "Enlarged, stony hard, fixed", label_ar: "متضخمة، صلبة كالحجر، ثابتة" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "swelling",
    specialty: "surgery",
    icon: "🩹",
    name_en: "General Swelling (Lump)",
    name_ar: "التورم العام (كتلة)",
    sections: [
      {
        id: "personal_history",
        title_en: "Personal History",
        title_ar: "التاريخ الشخصي",
        questions: [
          {
            id: "name",
            label_en: "Name",
            label_ar: "الاسم",
            type: "text",
            required: true
          },
          {
            id: "age",
            label_en: "Age",
            label_ar: "العمر",
            type: "number",
            unit_en: "years",
            unit_ar: "سنة",
            required: true
          },
          {
            id: "sex",
            label_en: "Sex",
            label_ar: "الجنس",
            type: "radio",
            required: true,
            options: [
              { value: "male", label_en: "Male", label_ar: "ذكر" },
              { value: "female", label_en: "Female", label_ar: "أنثى" }
            ]
          },
          {
            id: "marital_status",
            label_en: "Marital Status",
            label_ar: "الحالة الاجتماعية",
            type: "radio",
            required: false,
            options: [
              { value: "single", label_en: "Single", label_ar: "أعزب" },
              { value: "married", label_en: "Married", label_ar: "متزوج" },
              { value: "widow", label_en: "Widow/Widower", label_ar: "أرمل" },
              { value: "divorced", label_en: "Divorced", label_ar: "مطلق" }
            ]
          },
          {
            id: "address",
            label_en: "Address",
            label_ar: "العنوان",
            type: "text",
            required: false
          },
          {
            id: "residence",
            label_en: "Residence",
            label_ar: "محل الإقامة",
            type: "text",
            required: false
          },
          {
            id: "occupation",
            label_en: "Occupation",
            label_ar: "المهنة",
            type: "text",
            required: false
          },
          {
            id: "menstrual_history",
            label_en: "Menstrual History",
            label_ar: "تاريخ الدورة الشهرية",
            type: "textarea",
            required: false
          },
          {
            id: "special_habits",
            label_en: "Special Habits of Medical Importance",
            label_ar: "العادات الخاصة ذات الأهمية الطبية",
            type: "textarea",
            required: false
          }
        ]
      },
      {
        id: "presenting_complaint",
        title_en: "Presenting Complaint",
        title_ar: "الشكوى الرئيسية",
        questions: [
          {
            id: "complaint",
            label_en: "Presenting Complaint",
            label_ar: "الشكوى الرئيسية",
            type: "text",
            required: true,
            write_up_hint: "The patient presented with {value}."
          }
        ]
      },
      {
        id: "hopi",
        title_en: "History of Presenting Illness",
        title_ar: "تاريخ المرض الحالي",
        questions: [
          {
            id: "pain_heading",
            label_en: "Pain (SOCRATES)",
            label_ar: "الألم (سوكراتيس)",
            type: "heading"
          },
          {
            id: "pain_present",
            label_en: "Pain Present",
            label_ar: "وجود ألم",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "pain_site",
            label_en: "Site (S)",
            label_ar: "الموضع",
            type: "radio",
            required: false,
            options: [
              { value: "localized", label_en: "Localized to swelling", label_ar: "موضعي في التورم" },
              { value: "shooting_distally", label_en: "Shooting distally (tumor compressing/infiltrating nerve)", label_ar: "ينتشر بشكل حاد (الورم يضغط/يتسلل العصب)" }
            ]
          },
          {
            id: "pain_onset",
            label_en: "Onset (O)",
            label_ar: "بداية الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_character",
            label_en: "Character (C)",
            label_ar: "طبيعة الألم",
            type: "radio",
            required: false,
            options: [
              { value: "dull_aching", label_en: "Dull Aching", label_ar: "ألم باهت ناتر" },
              { value: "throbbing", label_en: "Throbbing", label_ar: "نابض" },
              { value: "stitching", label_en: "Stitching", label_ar: "وخز" },
              { value: "other", label_en: "Other", label_ar: "آخر" }
            ]
          },
          {
            id: "pain_radiation",
            label_en: "Radiation (R)",
            label_ar: "انتشار الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_alleviating",
            label_en: "Alleviating Factors (A)",
            label_ar: "العوامل المخففة",
            type: "text",
            required: false
          },
          {
            id: "pain_associated",
            label_en: "Associated Symptoms (A)",
            label_ar: "الأعراض المصاحبة",
            type: "text",
            required: false
          },
          {
            id: "pain_timing",
            label_en: "Timing (T)",
            label_ar: "التوقيت",
            type: "text",
            required: false
          },
          {
            id: "pain_exacerbating",
            label_en: "Exacerbating Factors (E)",
            label_ar: "العوامل المثيرة",
            type: "text",
            required: false,
            write_up_hint: "Increases with: {value} (lifting heavy weight, emotional stress, etc.)"
          },
          {
            id: "pain_course",
            label_en: "Course",
            label_ar: "مسار الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_duration",
            label_en: "Duration",
            label_ar: "مدة الألم",
            type: "text",
            required: false
          },
          {
            id: "swelling_heading",
            label_en: "Swelling Characteristics",
            label_ar: "خصائص التورم",
            type: "heading"
          },
          {
            id: "swelling_site",
            label_en: "Site of Swelling",
            label_ar: "موضع التورم",
            type: "text",
            required: false
          },
          {
            id: "swelling_size",
            label_en: "Size of Swelling",
            label_ar: "حجم التورم",
            type: "text",
            required: false,
            write_up_hint: "Swelling of {value} size (e.g., lemon size, orange size)."
          },
          {
            id: "swelling_onset",
            label_en: "Onset of Swelling",
            label_ar: "بداية التورم",
            type: "radio",
            required: false,
            options: [
              { value: "gradual", label_en: "Gradual (weeks or months)", label_ar: "تدريجي (أسابيع أو شهور)" },
              { value: "accidental", label_en: "Accidental (sudden discovery)", label_ar: "عرضي (اكتشاف مفاجئ)" },
              { value: "acute_rapid", label_en: "Acute - Rapid (hours or days)", label_ar: "حاد - سريع (ساعات أو أيام)" },
              { value: "acute_sudden", label_en: "Acute - Sudden (within minutes)", label_ar: "حاد - فجائي (دقائق)" }
            ]
          },
          {
            id: "swelling_course",
            label_en: "Course of Swelling",
            label_ar: "مسار التورم",
            type: "radio",
            required: false,
            options: [
              { value: "progressive", label_en: "Progressive (suggests neoplastic)", label_ar: "متزايد (يوحي بأورام)" },
              { value: "regressive", label_en: "Regressive (inflammatory conditions)", label_ar: "متراجع (التهاب)" },
              { value: "stationary", label_en: "Stationary (chronic inflammation)", label_ar: "ثابت (التهاب مزمن)" },
              { value: "fluctuating", label_en: "Fluctuating (chronic + acute exacerbation)", label_ar: "متذبذب (التهاب مزمن + تفاقم حاد)" }
            ]
          },
          {
            id: "swelling_duration",
            label_en: "Duration of Swelling",
            label_ar: "مدة التورم",
            type: "radio",
            required: false,
            options: [
              { value: "short", label_en: "Short (days or weeks) - Inflammatory", label_ar: "قصيرة (أيام أو أسابيع) - التهاب" },
              { value: "long", label_en: "Long (months or years) - Neoplastic", label_ar: "طويلة (شهور أو سنوات) - ورم" },
              { value: "since_birth", label_en: "Since Birth - Congenital", label_ar: "منذ الولادة - خلقي" }
            ]
          },
          {
            id: "duration_pain_correlation",
            label_en: "Duration + Pain Correlation",
            label_ar: "ارتباط المدة بالألم",
            type: "heading"
          },
          {
            id: "diagnostic_hint",
            label_en: "Clinical Correlation",
            label_ar: "الارتباط السريري",
            type: "text",
            required: false,
            write_up_hint: "Shorter duration + pain = acute inflammatory; Longer duration + slight pain = chronic inflammatory; Longer duration + no pain = benign tumor; Shorter duration +/- slight pain = malignant tumor."
          },
          {
            id: "other_swellings",
            label_en: "Other Swellings",
            label_ar: "تورمات أخرى",
            type: "multicheck",
            items: [
              {
                id: "multiple_lipoma",
                label_en: "Multiple Lipoma",
                label_ar: "شحميات متعددة",
                marked_if_negative: false
              },
              {
                id: "multiple_neurofibromas",
                label_en: "Multiple Neurofibromas",
                label_ar: "أورام عصبية ليفية متعددة",
                marked_if_negative: false
              },
              {
                id: "lymph_nodes",
                label_en: "Lymph Nodes (inflammatory)",
                label_ar: "عقد ليمفاوية (التهابية)",
                marked_if_negative: false
              },
              {
                id: "metastasis_swellings",
                label_en: "Metastatic Swellings",
                label_ar: "تورمات نقيلية",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "toxic_manifestations",
            label_en: "Toxic Symptoms (FAHM)",
            label_ar: "أعراض التسمم (حمى، فقدان شهية، ثقل، عدم رفاهية)",
            type: "multicheck",
            items: [
              {
                id: "fever",
                label_en: "Fever",
                label_ar: "حمى",
                marked_if_negative: false
              },
              {
                id: "anorexia",
                label_en: "Anorexia",
                label_ar: "فقدان الشهية",
                marked_if_negative: false
              },
              {
                id: "heaviness",
                label_en: "Heaviness/Malaise",
                label_ar: "ثقل/عدم رفاهية",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "malignant_tb_symptoms",
            label_en: "Malignancy & TB Symptoms",
            label_ar: "أعراض الخباثة والسل",
            type: "multicheck",
            items: [
              {
                id: "cachexia",
                label_en: "Cachexia (malignant)",
                label_ar: "هزال (خبيث)",
                marked_if_negative: false
              },
              {
                id: "night_sweating",
                label_en: "Night Sweating (TB)",
                label_ar: "عرق ليلي (السل)",
                marked_if_negative: false
              },
              {
                id: "night_fever",
                label_en: "Night Fever (TB)",
                label_ar: "حمى ليلية (السل)",
                marked_if_negative: false
              },
              {
                id: "weight_loss",
                label_en: "Loss of Weight (TB)",
                label_ar: "فقدان الوزن (السل)",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "apparent_cause",
            label_en: "Apparent Cause",
            label_ar: "السبب الظاهر",
            type: "text",
            required: false,
            write_up_hint: "Associated with {value} (trauma, lifting heavy weight, emotional stress)."
          },
          {
            id: "systemic_review_heading",
            label_en: "Review of Other Systems",
            label_ar: "مراجعة الأجهزة الأخرى",
            type: "heading"
          },
          {
            id: "systemic_review",
            label_en: "Systemic Review",
            label_ar: "المراجعة الجهازية",
            type: "multicheck",
            items: [
              {
                id: "git_symptoms",
                label_en: "GIT: nausea, vomiting, abdominal pain, bowel changes",
                label_ar: "الجهاز الهضمي: غثيان، قيء، ألم البطن، تغيرات الإخراج",
                marked_if_negative: false
              },
              {
                id: "respiratory_symptoms",
                label_en: "Respiratory: cough, hemoptysis, dyspnea",
                label_ar: "الجهاز التنفسي: سعال، نفث دم، ضيق تنفس",
                marked_if_negative: false
              },
              {
                id: "cvs_symptoms",
                label_en: "CVS: dyspnea, chest pain, palpitations",
                label_ar: "القلب والأوعية: ضيق تنفس، ألم الصدر، خفقان",
                marked_if_negative: false
              },
              {
                id: "urogenital_symptoms",
                label_en: "Urogenital: loin pain, dysuria",
                label_ar: "البولي التناسلي: ألم الجنب، عسر البول",
                marked_if_negative: false
              },
              {
                id: "nervous_symptoms",
                label_en: "Nervous: behavior changes, loss of consciousness",
                label_ar: "العصبي: تغيرات السلوك، فقدان الوعي",
                marked_if_negative: false
              },
              {
                id: "musculoskeletal_symptoms",
                label_en: "Musculoskeletal: bone/joint pain",
                label_ar: "العضلي الهيكلي: ألم العظام/المفاصل",
                marked_if_negative: false
              }
            ]
          }
        ]
      },
      {
        id: "past_medical_history",
        title_en: "Past Medical History",
        title_ar: "التاريخ المرضي السابق",
        questions: [
          {
            id: "similar_attacks",
            label_en: "Similar Attacks",
            label_ar: "نوبات مشابهة",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "common_diseases",
            label_en: "Common Diseases",
            label_ar: "أمراض شائعة",
            type: "multicheck",
            items: [
              {
                id: "diabetes",
                label_en: "Diabetes Mellitus (DM)",
                label_ar: "السكري",
                marked_if_negative: true
              },
              {
                id: "hypertension",
                label_en: "Hypertension",
                label_ar: "ارتفاع ضغط الدم",
                marked_if_negative: true
              },
              {
                id: "tuberculosis",
                label_en: "Tuberculosis (TB)",
                label_ar: "السل",
                marked_if_negative: false
              },
              {
                id: "bilharziasis",
                label_en: "Bilharziasis",
                label_ar: "البلهارسيا",
                marked_if_negative: false
              },
              {
                id: "hepatitis",
                label_en: "Hepatitis",
                label_ar: "التهاب الكبد",
                marked_if_negative: false
              },
              {
                id: "dvt",
                label_en: "Deep Venous Thrombosis (DVT)",
                label_ar: "تجلط الأوردة العميقة",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "drug_allergy",
            label_en: "Drug Allergy",
            label_ar: "حساسية الأدوية",
            type: "checkbox",
            marked_if_negative: true
          },
          {
            id: "drug_intake",
            label_en: "Current Drug Intake",
            label_ar: "الأدوية الحالية",
            type: "textarea",
            required: false
          },
          {
            id: "blood_transfusion",
            label_en: "Blood Transfusion",
            label_ar: "نقل الدم",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "previous_operations",
            label_en: "Previous Operations",
            label_ar: "عمليات سابقة",
            type: "checkbox",
            marked_if_negative: true
          }
        ]
      },
      {
        id: "family_history",
        title_en: "Family History",
        title_ar: "التاريخ العائلي",
        questions: [
          {
            id: "similar_condition_family",
            label_en: "Similar Condition in Family Members",
            label_ar: "حالات مشابهة في أفراد العائلة",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "consanguinity",
            label_en: "Consanguinity (Blood Relation)",
            label_ar: "زواج الأقارب",
            type: "checkbox",
            marked_if_negative: false
          }
        ]
      },
      {
        id: "general_examination",
        title_en: "General Examination",
        title_ar: "الفحص العام",
        questions: [
          {
            id: "general_appearance",
            label_en: "General Appearance",
            label_ar: "المظهر العام",
            type: "textarea",
            write_up_hint: "Patient is {value} (alert, conscious, oriented, build, facial expression)."
          },
          {
            id: "vital_signs_heading",
            label_en: "Vital Signs",
            label_ar: "العلامات الحيوية",
            type: "heading"
          },
          {
            id: "pulse",
            label_en: "Pulse",
            label_ar: "النبض",
            type: "number",
            unit_en: "bpm",
            unit_ar: "نبضة/دقيقة",
            required: false
          },
          {
            id: "blood_pressure",
            label_en: "Blood Pressure",
            label_ar: "ضغط الدم",
            type: "text",
            required: false
          },
          {
            id: "temperature",
            label_en: "Temperature",
            label_ar: "درجة الحرارة",
            type: "number",
            unit_en: "°C",
            unit_ar: "°م",
            required: false
          },
          {
            id: "complexion_heading",
            label_en: "Complexion (3 colors)",
            label_ar: "لون البشرة (3 ألوان)",
            type: "heading"
          },
          {
            id: "complexion",
            label_en: "Complexion Findings",
            label_ar: "نتائج لون البشرة",
            type: "multicheck",
            items: [
              {
                id: "jaundice",
                label_en: "Jaundice",
                label_ar: "يرقان",
                marked_if_negative: false
              },
              {
                id: "pallor",
                label_en: "Pallor",
                label_ar: "شحوب",
                marked_if_negative: false
              },
              {
                id: "cyanosis",
                label_en: "Cyanosis",
                label_ar: "زرقة",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "chest_exam",
            label_en: "Chest & Heart",
            label_ar: "الصدر والقلب",
            type: "text",
            required: false
          },
          {
            id: "abdomen_exam",
            label_en: "Abdomen",
            label_ar: "البطن",
            type: "text",
            required: false
          },
          {
            id: "extremities_exam",
            label_en: "Extremities",
            label_ar: "الأطراف",
            type: "text",
            required: false
          },
          {
            id: "head_neck_spine",
            label_en: "Head, Neck & Spine",
            label_ar: "الرأس والرقبة والعمود الفقري",
            type: "text",
            required: false
          }
        ]
      },
      {
        id: "local_examination",
        title_en: "Local Examination of Swelling",
        title_ar: "الفحص الموضعي للتورم",
        questions: [
          {
            id: "exposure_position",
            label_en: "Position & Exposure",
            label_ar: "الوضعية والكشف",
            type: "text",
            required: false,
            write_up_hint: "Patient examined in {value} position; area of lymph node drainage exposed."
          },
          {
            id: "inspection_heading",
            label_en: "Inspection",
            label_ar: "الفحص بالنظر",
            type: "heading"
          },
          {
            id: "number",
            label_en: "Number of Swellings",
            label_ar: "عدد التورمات",
            type: "radio",
            required: false,
            options: [
              { value: "single", label_en: "Single", label_ar: "واحد" },
              { value: "multiple", label_en: "Multiple (suggests lipomas, lymph nodes, etc.)", label_ar: "متعددة Wel (توحي بشحميات، عقد ليمفاوية، إلخ)" }
            ]
          },
          {
            id: "swelling_site_inspection",
            label_en: "Site",
            label_ar: "الموضع",
            type: "text",
            required: false,
            write_up_hint: "Located at {value}."
          },
          {
            id: "swelling_size_inspection",
            label_en: "Size (in cm, best)",
            label_ar: "الحجم (بالسنتيمتر)",
            type: "text",
            required: false
          },
          {
            id: "swelling_shape",
            label_en: "Shape",
            label_ar: "الشكل",
            type: "text",
            required: false,
            write_up_hint: "Shape: {value} (e.g., butterfly, oval)."
          },
          {
            id: "overlying_skin",
            label_en: "Overlying Skin",
            label_ar: "الجلد المغطي",
            type: "multicheck",
            items: [
              {
                id: "skin_normal",
                label_en: "Normal",
                label_ar: "طبيعي",
                marked_if_negative: false
              },
              {
                id: "skin_stretched",
                label_en: "Stretched",
                label_ar: "مشدود",
                marked_if_negative: false
              },
              {
                id: "skin_pigmented",
                label_en: "Pigmented",
                label_ar: "مصطبغ",
                marked_if_negative: false
              },
              {
                id: "inflammation_signs",
                label_en: "Signs of Inflammation (redness, edema)",
                label_ar: "علامات التهاب (احمرار، وذمة)",
                marked_if_negative: false
              },
              {
                id: "dilated_veins",
                label_en: "Dilated Veins",
                label_ar: "أوردة متوسعة",
                marked_if_negative: false
              },
              {
                id: "ulcer",
                label_en: "Ulcer",
                label_ar: "تقرح",
                marked_if_negative: false
              },
              {
                id: "scar",
                label_en: "Scar",
                label_ar: "ندبة",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "special_signs_inspection",
            label_en: "Special Signs",
            label_ar: "علامات خاصة",
            type: "multicheck",
            items: [
              {
                id: "expansile_impulse_cough",
                label_en: "Expansile Impulse on Cough (hernia)",
                label_ar: "نبضة انبساطية عند السعال (فتق)",
                marked_if_negative: false
              },
              {
                id: "pulsation",
                label_en: "Pulsation (aneurysm, vascular swelling)",
                label_ar: "نبض (تمدد الأوعية، تورم وعائي)",
                marked_if_negative: false
              },
              {
                id: "moves_with_deglutition",
                label_en: "Moves Up with Deglutition (thyroid)",
                label_ar: "يتحرك لأعلى مع البلع (درقي)",
                marked_if_negative: false
              },
              {
                id: "moves_with_tongue",
                label_en: "Moves Up with Tongue Protrusion (thyroglossal cyst)",
                label_ar: "يتحرك لأعلى مع إخراج اللسان (كيسة درقية لسانية)",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "palpation_heading",
            label_en: "Palpation",
            label_ar: "الجس",
            type: "heading"
          },
          {
            id: "warmth",
            label_en: "Warmth",
            label_ar: "الدفء",
            type: "checkbox",
            marked_if_negative: false,
            write_up_hint: "Present in inflammatory and vascular swellings."
          },
          {
            id: "tenderness",
            label_en: "Tenderness",
            label_ar: "الإيلام",
            type: "checkbox",
            marked_if_negative: false,
            write_up_hint: "Inflammatory swellings are mostly tender; neoplastic swellings are not tender."
          },
          {
            id: "tenderness_location",
            label_en: "Point of Maximum Tenderness",
            label_ar: "موضع أقصى إيلام",
            type: "text",
            required: false
          },
          {
            id: "surface",
            label_en: "Surface",
            label_ar: "السطح",
            type: "radio",
            required: false,
            options: [
              { value: "smooth", label_en: "Smooth", label_ar: "أملس" },
              { value: "nodular", label_en: "Nodular", label_ar: "عقدي" },
              { value: "lobulated", label_en: "Lobulated", label_ar: "فصيصي" },
              { value: "irregular", label_en: "Irregular", label_ar: "غير منتظم" }
            ]
          },
          {
            id: "edge",
            label_en: "Edge / Definition",
            label_ar: "الحافة / التحديد",
            type: "radio",
            required: false,
            options: [
              { value: "well_defined", label_en: "Well-defined (finding border all around)", label_ar: "محدد جيداً" },
              { value: "ill_defined", label_en: "Ill-defined (finding no border)", label_ar: "غير محدد جيداً" },
              { value: "pedunculated", label_en: "Pedunculated", label_ar: "متصل بساق" }
            ]
          },
          {
            id: "consistency",
            label_en: "Consistency",
            label_ar: "القوام",
            type: "radio",
            required: false,
            options: [
              { value: "cystic", label_en: "Cystic", label_ar: "كيسي" },
              { value: "soft", label_en: "Soft (like ear lobule)", label_ar: "طري (كفصيص الأذن)" },
              { value: "firm", label_en: "Firm (like cartilage/nose tip)", label_ar: "متماسك (كالغضروف)" },
              { value: "hard", label_en: "Hard (like bone/forehead)", label_ar: "صلب (كالعظم)" }
            ]
          },
          {
            id: "cystic_tests_heading",
            label_en: "Tests for Cystic Swellings",
            label_ar: "اختبارات التورمات الكيسية",
            type: "heading"
          },
          {
            id: "fluctuation_test",
            label_en: "Fluctuation Test",
            label_ar: "اختبار التذبذب",
            type: "text",
            required: false,
            write_up_hint: "Fluctuation: {value} (tested in 2 perpendicular planes); indicates fluid content."
          },
          {
            id: "pagets_test",
            label_en: "Paget's Test (swellings < 2cm)",
            label_ar: "اختبار باجيت (التورمات <2 سم)",
            type: "text",
            required: false,
            write_up_hint: "{value} (solid=harder at center; cystic=softer at center)."
          },
          {
            id: "trans_illumination",
            label_en: "Trans-illumination Test",
            label_ar: "اختبار الإضاءة الخلفية",
            type: "text",
            required: false,
            write_up_hint: "Trans-illumination: {value} (translucent=clear fluid; opaque=blood/pus)."
          },
          {
            id: "mobility_heading",
            label_en: "Relation / Mobility",
            label_ar: "العلاقة / الحركية",
            type: "heading"
          },
          {
            id: "skin_relation",
            label_en: "Relation to Overlying Skin",
            label_ar: "العلاقة بالجلد المغطي",
            type: "radio",
            required: false,
            options: [
              { value: "not_related", label_en: "Not related (skin can be pinched)", label_ar: "غير متصل (يمكن قرص الجلد)" },
              { value: "infiltrates", label_en: "Infiltrates (skin cannot be pinched)", label_ar: "يتسلل (لا يمكن قرص الجلد)" }
            ]
          },
          {
            id: "muscle_relation",
            label_en: "Relation to Muscle (on contraction)",
            label_ar: "العلاقة بالعضلة (عند الانقباض)",
            type: "radio",
            required: false,
            options: [
              { value: "mobile_both", label_en: "Mobile in both (superficial, not attached)", label_ar: "متحرك في كلا الحالتين (سطحي، غير متصل)" },
              { value: "fixed_on_contraction", label_en: "Fixed on contraction (of muscle)", label_ar: "ثابت عند الانقباض (عضلي)" },
              { value: "limited_on_contraction", label_en: "Limited on contraction (attached to fascia)", label_ar: "محدود الحركة عند الانقباض (متصل بالجافية)" }
            ]
          },
          {
            id: "nerve_attachment",
            label_en: "Nerve Attachment",
            label_ar: "الارتباط بالعصب",
            type: "multicheck",
            items: [
              {
                id: "moved_across_not_along",
                label_en: "Can be moved across but not along nerve axis",
                label_ar: "يمكن تحريكه عرضياً لكن ليس على محور العصب",
                marked_if_negative: false
              },
              {
                id: "may_be_tender",
                label_en: "May be tender",
                label_ar: "قد يكون مؤلماً",
                marked_if_negative: false
              },
              {
                id: "distal_signs",
                label_en: "Distal motor/sensory signs",
                label_ar: "علامات عصبية حركية/حسية بعيدة",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "bone_relation",
            label_en: "Relation to Bone",
            label_ar: "العلاقة بالعظم",
            type: "text",
            required: false,
            write_up_hint: "Relation to bone: {value} (fixed and immobile from start when patient relaxed)."
          },
          {
            id: "special_tests_heading",
            label_en: "Special Tests",
            label_ar: "اختبارات خاصة",
            type: "heading"
          },
          {
            id: "expansile_pulsation",
            label_en: "Expansile Pulsation (vs Transmitted)",
            label_ar: "نبض انبساطي (مقابل منقول)",
            type: "text",
            required: false,
            write_up_hint: "Pulsation: {value} (expansile=2 fingers separated with each beat; transmitted=only raised)."
          },
          {
            id: "thrill",
            label_en: "Thrill (aneurysm, A-V fistula)",
            label_ar: "رجفة (تمدد الأوعية، ناسور شرياني وريدي)",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "reducibility",
            label_en: "Reducibility (hernia)",
            label_ar: "قابلية الارجاع (فتق)",
            type: "checkbox",
            marked_if_negative: false,
            write_up_hint: "Swelling reduces on pressure and reappears on coughing/straining."
          },
          {
            id: "compressibility",
            label_en: "Compressibility (hemangioma, varix)",
            label_ar: "قابلية الضغط (وعائي، دوالي)",
            type: "checkbox",
            marked_if_negative: false,
            write_up_hint: "Flattens under pressure and regains size on release."
          },
          {
            id: "percussion_heading",
            label_en: "Percussion",
            label_ar: "القرع",
            type: "heading"
          },
          {
            id: "percussion_over",
            label_en: "Percussion Over Swelling",
            label_ar: "القرع فوق التورم",
            type: "radio",
            required: false,
            options: [
              { value: "resonant", label_en: "Resonant (gaseous - hernia, laryngeocele)", label_ar: "رنين (غازي - فتق)" },
              { value: "dull", label_en: "Dull (cystic & solid)", label_ar: "غير رنين (كيسي وصلب)" }
            ]
          },
          {
            id: "auscultation_heading",
            label_en: "Auscultation",
            label_ar: "الإصغاء",
            type: "heading"
          },
          {
            id: "auscultation_findings",
            label_en: "Auscultation Findings",
            label_ar: "نتائج الإصغاء",
            type: "multicheck",
            items: [
              {
                id: "systolic_murmur",
                label_en: "Systolic Murmur (aneurysm)",
                label_ar: "لغط انقباضي (تمدد الأوعية)",
                marked_if_negative: false
              },
              {
                id: "machinery_murmur",
                label_en: "Machinery Murmur (A-V fistula)",
                label_ar: "لغط آلي (ناسور)",
                marked_if_negative: false
              },
              {
                id: "venous_hum",
                label_en: "Venous Hum (portal HTN)",
                label_ar: "طنين وريدي (ارتفاع ضغط البابي)",
                marked_if_negative: false
              },
              {
                id: "intestinal_sound",
                label_en: "Intestinal Sound (hernia)",
                label_ar: "أصوات معوية (فتق)",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "lymph_nodes_heading",
            label_en: "Draining Lymph Nodes",
            label_ar: "العقد الليمفاوية المصرفة",
            type: "heading"
          },
          {
            id: "lymph_nodes_exam",
            label_en: "Lymph Nodes Examination",
            label_ar: "فحص العقد الليمفاوية",
            type: "checkbox",
            marked_if_negative: true,
            write_up_hint: "No examination of a swelling is complete without examination of draining lymph nodes."
          }
        ]
      }
    ]
  },
  {
    id: "cleft_lip_palate",
    specialty: "surgery",
    icon: "👶",
    name_en: "Cleft Lip & Palate",
    name_ar: "الشفة الأرنبية وشق الحنك",
    sections: [
      {
        id: "personal_history",
        title_en: "Personal History",
        title_ar: "التاريخ الشخصي",
        questions: [
          {
            id: "name",
            label_en: "Name (of the baby)",
            label_ar: "اسم الطفل",
            type: "text",
            required: true
          },
          {
            id: "age",
            label_en: "Age",
            label_ar: "العمر",
            type: "number",
            unit_en: "months",
            unit_ar: "شهر",
            required: true
          },
          {
            id: "sex",
            label_en: "Sex",
            label_ar: "الجنس",
            type: "radio",
            required: true,
            options: [
              { value: "male", label_en: "Male", label_ar: "ذكر" },
              { value: "female", label_en: "Female", label_ar: "أنثى" }
            ]
          },
          {
            id: "residence",
            label_en: "Residence",
            label_ar: "محل الإقامة",
            type: "text",
            required: false
          },
          {
            id: "birth_order",
            label_en: "Birth Order / Other Siblings",
            label_ar: "ترتيب الولادة / الإخوة",
            type: "text",
            required: false
          }
        ]
      },
      {
        id: "presenting_complaint",
        title_en: "Presenting Complaint",
        title_ar: "الشكوى الرئيسية",
        questions: [
          {
            id: "complaint",
            label_en: "Complaint (a mother complaining of disfigurement in her baby)",
            label_ar: "الشكوى (أم تشتكي من تشوه في طفلها)",
            type: "text",
            required: true,
            write_up_hint: "The mother presented complaining of {value}."
          },
          {
            id: "complaint_duration",
            label_en: "Duration (since birth)",
            label_ar: "المدة (منذ الولادة)",
            type: "text",
            required: true,
            write_up_hint: "Of {value} duration (discovered since birth)."
          }
        ]
      },
      {
        id: "hopi",
        title_en: "History of Presenting Illness (Present History)",
        title_ar: "تاريخ المرض الحالي",
        questions: [
          {
            id: "discovered_since_birth",
            label_en: "Cleft Lip Discovered Since Birth",
            label_ar: "اكتُشِفت الشفة الأرنبية منذ الولادة",
            type: "checkbox",
            marked_if_negative: false,
            write_up_hint: "The cleft lip was discovered since birth."
          },
          {
            id: "pregnancy_abnormalities",
            label_en: "Abnormalities During Pregnancy",
            label_ar: "تشوهات أثناء الحمل",
            type: "text",
            required: false
          },
          {
            id: "predisposing_factors_heading",
            label_en: "Predisposing Factors (for the Mother)",
            label_ar: "العوامل المهيئة (للأم)",
            type: "heading"
          },
          {
            id: "predisposing_factors",
            label_en: "Maternal Predisposing Factors",
            label_ar: "العوامل المهيئة للأم",
            type: "multicheck",
            items: [
              {
                id: "fever_skin_rashes",
                label_en: "Fever and Skin Rashes (German measles / Rubella)",
                label_ar: "حمى وطفح جلدي (الحصبة الألمانية)",
                marked_if_negative: false
              },
              {
                id: "drug_intake_first_trimester",
                label_en: "Drug Intake During 1st Trimester (salicylates, corticosteroids, cytotoxic drugs)",
                label_ar: "تناول أدوية في الثلث الأول (ساليسيلات، كورتيكوستيرويدات، أدوية سامة للخلايا)",
                marked_if_negative: false
              },
              {
                id: "irradiation_exposure",
                label_en: "Exposure to Irradiation",
                label_ar: "التعرض للإشعاع",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "complications_heading",
            label_en: "Complications (for the Baby)",
            label_ar: "المضاعفات (للطفل)",
            type: "heading"
          },
          {
            id: "complications",
            label_en: "Complications in the Baby",
            label_ar: "المضاعفات لدى الطفل",
            type: "multicheck",
            items: [
              {
                id: "difficult_feeding",
                label_en: "Difficult Suckling or Feeding",
                label_ar: "صعوبة الرضاعة أو التغذية",
                marked_if_negative: true
              },
              {
                id: "nasal_regurgitation",
                label_en: "Regurgitation of Fluid & Food from the Nose (cleft palate)",
                label_ar: "ارتجاع السوائل والطعام من الأنف (شق الحنك)",
                marked_if_negative: true
              },
              {
                id: "phonation_speech_impairment",
                label_en: "Impairment of Phonation and Speech",
                label_ar: "اضطراب النطق والكلام",
                marked_if_negative: false
              },
              {
                id: "dentition_impairment",
                label_en: "Impairment of Dentition with Maldirected Teeth",
                label_ar: "اضطراب التسنين مع أسنان غير منتظمة",
                marked_if_negative: false
              },
              {
                id: "hearing_otitis_media",
                label_en: "Impairment of Hearing with Repeated Otitis Media (cleft palate)",
                label_ar: "ضعف السمع مع التهاب الأذن الوسطى المتكرر (شق الحنك)",
                marked_if_negative: true
              }
            ]
          },
          {
            id: "investigations_treatment",
            label_en: "History of Investigations and Treatment",
            label_ar: "تاريخ الفحوصات والعلاج",
            type: "textarea"
          }
        ]
      },
      {
        id: "past_medical_history",
        title_en: "Past History",
        title_ar: "التاريخ المرضي السابق",
        questions: [
          {
            id: "similar_condition",
            label_en: "Similar Condition",
            label_ar: "حالة مشابهة",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "maternal_syphilis",
            label_en: "Syphilis (in mother)",
            label_ar: "الزهري (لدى الأم)",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "maternal_fever_disease",
            label_en: "Fever or Disease in Mother (during pregnancy)",
            label_ar: "حمى أو مرض لدى الأم (أثناء الحمل)",
            type: "checkbox",
            marked_if_negative: false
          }
        ]
      },
      {
        id: "family_history",
        title_en: "Family History",
        title_ar: "التاريخ العائلي",
        questions: [
          {
            id: "positive_family_history",
            label_en: "Positive Family History",
            label_ar: "تاريخ عائلي إيجابي",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "consanguinity",
            label_en: "Consanguinity (Blood Relation of Parents)",
            label_ar: "زواج الأقارب",
            type: "checkbox",
            marked_if_negative: false
          }
        ]
      },
      {
        id: "general_examination",
        title_en: "General Examination (Search for VACTERL Anomalies)",
        title_ar: "الفحص العام (البحث عن تشوهات VACTERL)",
        questions: [
          {
            id: "vacterl_note",
            label_en: "Search for Other Congenital Anomalies (VACTERL)",
            label_ar: "البحث عن تشوهات خلقية أخرى (VACTERL)",
            type: "heading"
          },
          {
            id: "head_neck_heading",
            label_en: "Head & Neck",
            label_ar: "الرأس والرقبة",
            type: "heading"
          },
          {
            id: "head_neck",
            label_en: "Head & Neck Findings",
            label_ar: "نتائج الرأس والرقبة",
            type: "multicheck",
            items: [
              {
                id: "cranium_bifidum",
                label_en: "Defect or Swelling Related to Skull (cranium bifidum)",
                label_ar: "عيب أو تورم في الجمجمة (شق القحف)",
                marked_if_negative: false
              },
              {
                id: "neck_swelling",
                label_en: "Neck Swelling (cystic hygroma, thyroglossal cyst, branchial cyst, sequestration dermoid cyst)",
                label_ar: "تورم الرقبة (ورم لمفي كيسي، كيسة درقية لسانية، كيسة خيشومية، كيسة جلدانية)",
                marked_if_negative: false
              },
              {
                id: "branchial_fistula",
                label_en: "Fistula (branchial fistula)",
                label_ar: "ناسور (ناسور خيشومي)",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "chest_heart",
            label_en: "Chest and Heart (for congenital heart diseases)",
            label_ar: "الصدر والقلب (أمراض القلب الخلقية)",
            type: "checkbox",
            marked_if_negative: true
          },
          {
            id: "back_spina_bifida",
            label_en: "Back (spina bifida)",
            label_ar: "الظهر (السنسنة المشقوقة)",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "abdomen_inguinoscrotal_heading",
            label_en: "Abdomen and Inguino-scrotal Region",
            label_ar: "البطن والمنطقة الأربية الصفنية",
            type: "heading"
          },
          {
            id: "abdomen_inguinoscrotal",
            label_en: "Abdomen & Inguino-scrotal Findings",
            label_ar: "نتائج البطن والمنطقة الأربية الصفنية",
            type: "multicheck",
            items: [
              {
                id: "renal_swelling",
                label_en: "Renal Swelling (polycystic or ectopic kidney)",
                label_ar: "تورم كلوي (كلية متعددة الكيسات أو منتبذة)",
                marked_if_negative: false
              },
              {
                id: "umbilical_hernia",
                label_en: "Congenital Umbilical Hernia",
                label_ar: "فتق سري خلقي",
                marked_if_negative: false
              },
              {
                id: "absent_testis",
                label_en: "Absent Testis (undescended or ectopic)",
                label_ar: "غياب الخصية (غير نازلة أو منتبذة)",
                marked_if_negative: false
              },
              {
                id: "urethral_meatus_site",
                label_en: "Site of External Urethral Meatus (epispadias or hypospadias)",
                label_ar: "موضع فتحة الإحليل الخارجية (المبال الفوقاني أو التحتاني)",
                marked_if_negative: false
              },
              {
                id: "ectopia_vesicae",
                label_en: "Ectopia Vesicae",
                label_ar: "انتباذ المثانة",
                marked_if_negative: false
              },
              {
                id: "imperforate_anus",
                label_en: "Imperforate Anus (if newly born)",
                label_ar: "رتق الشرج (إذا كان حديث الولادة)",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "limb_heading",
            label_en: "Limb",
            label_ar: "الأطراف",
            type: "heading"
          },
          {
            id: "limb",
            label_en: "Limb Findings",
            label_ar: "نتائج الأطراف",
            type: "multicheck",
            items: [
              {
                id: "polydactyly_syndactyly",
                label_en: "Polydactyly or Syndactyly",
                label_ar: "كثرة الأصابع أو التحام الأصابع",
                marked_if_negative: false
              },
              {
                id: "congenital_av_fistula",
                label_en: "Congenital A-V Fistula",
                label_ar: "ناسور شرياني وريدي خلقي",
                marked_if_negative: false
              },
              {
                id: "congenital_lymphedema",
                label_en: "Congenital Lymphedema",
                label_ar: "وذمة لمفية خلقية",
                marked_if_negative: false
              }
            ]
          }
        ]
      },
      {
        id: "local_examination",
        title_en: "Local Examination",
        title_ar: "الفحص الموضعي",
        questions: [
          {
            id: "cleft_lip_heading",
            label_en: "Examination for Cleft Lip",
            label_ar: "فحص الشفة الأرنبية",
            type: "heading"
          },
          {
            id: "lip_location",
            label_en: "Upper or Lower Lip",
            label_ar: "الشفة العلوية أو السفلية",
            type: "radio",
            required: false,
            options: [
              { value: "upper", label_en: "Upper Lip", label_ar: "الشفة العلوية" },
              { value: "lower", label_en: "Lower Lip", label_ar: "الشفة السفلية" }
            ]
          },
          {
            id: "lip_lateral_median",
            label_en: "Lateral or Median",
            label_ar: "جانبي أو متوسط",
            type: "radio",
            required: false,
            options: [
              { value: "lateral", label_en: "Lateral", label_ar: "جانبي" },
              { value: "median", label_en: "Median", label_ar: "متوسط" }
            ]
          },
          {
            id: "lip_unilateral_bilateral",
            label_en: "Unilateral or Bilateral",
            label_ar: "أحادي أو ثنائي الجانب",
            type: "radio",
            required: false,
            options: [
              { value: "unilateral", label_en: "Unilateral", label_ar: "أحادي الجانب" },
              { value: "bilateral", label_en: "Bilateral", label_ar: "ثنائي الجانب" }
            ]
          },
          {
            id: "lip_complete_incomplete",
            label_en: "Complete or Incomplete",
            label_ar: "كامل أو غير كامل",
            type: "radio",
            required: false,
            options: [
              { value: "complete", label_en: "Complete", label_ar: "كامل" },
              { value: "incomplete", label_en: "Incomplete", label_ar: "غير كامل" }
            ]
          },
          {
            id: "lip_simple_alveolar",
            label_en: "Simple or Alveolar",
            label_ar: "بسيط أو سنخي",
            type: "radio",
            required: false,
            options: [
              { value: "simple", label_en: "Simple", label_ar: "بسيط" },
              { value: "alveolar", label_en: "Alveolar", label_ar: "سنخي" }
            ]
          },
          {
            id: "cleft_palate_heading",
            label_en: "Examination for Cleft Palate",
            label_ar: "فحص شق الحنك",
            type: "heading"
          },
          {
            id: "palate_type",
            label_en: "Type",
            label_ar: "النوع",
            type: "radio",
            required: false,
            options: [
              { value: "cleft_uvula", label_en: "Cleft Uvula", label_ar: "شق اللهاة" },
              { value: "cleft_soft_palate", label_en: "Cleft Soft Palate", label_ar: "شق الحنك الرخو" }
            ]
          },
          {
            id: "palate_extent",
            label_en: "Extent of Cleft",
            label_ar: "امتداد الشق",
            type: "radio",
            required: false,
            options: [
              { value: "intermaxillary", label_en: "Intermaxillary Cleft", label_ar: "شق بين فكي" },
              { value: "bipartite", label_en: "Bipartite Cleft", label_ar: "شق ثنائي" },
              { value: "tripartite", label_en: "Tripartite Cleft", label_ar: "شق ثلاثي" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "varicocele",
    specialty: "surgery",
    icon: "🩻",
    name_en: "Inguinoscrotal Swelling (Varicocele)",
    name_ar: "التورم الأربي الصفني (دوالي الخصية)",
    sections: [
      {
        id: "personal_history",
        title_en: "Personal History",
        title_ar: "التاريخ الشخصي",
        questions: [
          {
            id: "name",
            label_en: "Name",
            label_ar: "الاسم",
            type: "text",
            required: true
          },
          {
            id: "age",
            label_en: "Age",
            label_ar: "العمر",
            type: "number",
            unit_en: "years",
            unit_ar: "سنة",
            required: true,
            write_up_hint: "The patient is {value} years old (primary varicocele: between puberty and 35 years; secondary varicocele: 35-40 years)."
          },
          {
            id: "sex",
            label_en: "Sex",
            label_ar: "الجنس",
            type: "radio",
            required: true,
            options: [
              { value: "male", label_en: "Male", label_ar: "ذكر" }
            ]
          },
          {
            id: "marital_status",
            label_en: "Marital Status",
            label_ar: "الحالة الاجتماعية",
            type: "radio",
            required: false,
            options: [
              { value: "single", label_en: "Single", label_ar: "أعزب" },
              { value: "married", label_en: "Married", label_ar: "متزوج" }
            ],
            write_up_hint: "Sub-fertility may complicate varicocele."
          },
          {
            id: "address",
            label_en: "Address",
            label_ar: "العنوان",
            type: "text",
            required: false
          },
          {
            id: "residence",
            label_en: "Residence",
            label_ar: "محل الإقامة",
            type: "text",
            required: false
          },
          {
            id: "occupation",
            label_en: "Occupation",
            label_ar: "المهنة",
            type: "text",
            required: false,
            write_up_hint: "Occupation: {value} (prolonged standing may predispose to varicocele)."
          },
          {
            id: "special_habits",
            label_en: "Special Habits of Medical Importance",
            label_ar: "العادات الخاصة ذات الأهمية الطبية",
            type: "text",
            required: false
          }
        ]
      },
      {
        id: "presenting_complaint",
        title_en: "Presenting Complaint",
        title_ar: "الشكوى الرئيسية",
        questions: [
          {
            id: "complaint",
            label_en: "Presenting Complaint (usually swelling in the groin or scrotum)",
            label_ar: "الشكوى الرئيسية (عادة تورم في الأربية أو كيس الصفن)",
            type: "text",
            required: true,
            write_up_hint: "The patient presented with {value}."
          },
          {
            id: "complaint_duration",
            label_en: "Duration",
            label_ar: "المدة",
            type: "number",
            unit_en: "months",
            unit_ar: "شهر",
            required: true,
            write_up_hint: "Of {value} months duration."
          }
        ]
      },
      {
        id: "hopi",
        title_en: "History of Presenting Illness",
        title_ar: "تاريخ المرض الحالي",
        questions: [
          {
            id: "pain_heading",
            label_en: "Pain",
            label_ar: "الألم",
            type: "heading"
          },
          {
            id: "pain_present",
            label_en: "Pain Present",
            label_ar: "وجود ألم",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "pain_character",
            label_en: "Character of Pain",
            label_ar: "طبيعة الألم",
            type: "radio",
            required: false,
            options: [
              { value: "dragging", label_en: "Dragging Pain (relaxation of dartos and cremaster muscle)", label_ar: "ألم ساحب (ارتخاء عضلتي الدارتوس والمشمرة)" },
              { value: "other", label_en: "Other", label_ar: "آخر" }
            ]
          },
          {
            id: "pain_site",
            label_en: "Site of Pain",
            label_ar: "موضع الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_radiation",
            label_en: "Radiation",
            label_ar: "انتشار الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_increase_decrease",
            label_en: "What Increases or Decreases It",
            label_ar: "ما يزيده أو ينقصه",
            type: "text",
            required: false
          },
          {
            id: "pain_onset",
            label_en: "Onset",
            label_ar: "بداية الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_course",
            label_en: "Course",
            label_ar: "مسار الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_duration",
            label_en: "Duration of Pain",
            label_ar: "مدة الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_severity",
            label_en: "Severity",
            label_ar: "شدة الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_associations",
            label_en: "What Associates",
            label_ar: "ما يصاحبه",
            type: "text",
            required: false
          },
          {
            id: "swelling_heading",
            label_en: "Swelling",
            label_ar: "التورم",
            type: "heading"
          },
          {
            id: "swelling_onset",
            label_en: "Onset of Swelling",
            label_ar: "بداية التورم",
            type: "radio",
            required: false,
            options: [
              { value: "gradual", label_en: "Gradual (primary)", label_ar: "تدريجي (أولي)" },
              { value: "sudden", label_en: "Sudden (secondary)", label_ar: "فجائي (ثانوي)" },
              { value: "accidental", label_en: "Accidental", label_ar: "عرضي" },
              { value: "acute", label_en: "Acute", label_ar: "حاد" }
            ]
          },
          {
            id: "swelling_course",
            label_en: "Course of Swelling",
            label_ar: "مسار التورم",
            type: "radio",
            required: false,
            options: [
              { value: "progressive", label_en: "Progressive", label_ar: "متزايد" },
              { value: "stationary", label_en: "Stationary", label_ar: "ثابت" },
              { value: "regressive", label_en: "Regressive", label_ar: "متراجع" },
              { value: "fluctuating", label_en: "Fluctuating", label_ar: "متذبذب" }
            ]
          },
          {
            id: "swelling_duration",
            label_en: "Duration of Swelling",
            label_ar: "مدة التورم",
            type: "radio",
            required: false,
            options: [
              { value: "short", label_en: "Short (days or weeks) - secondary", label_ar: "قصيرة (أيام أو أسابيع) - ثانوي" },
              { value: "long", label_en: "Long (months or years) - primary", label_ar: "طويلة (شهور أو سنوات) - أولي" },
              { value: "since_birth", label_en: "Since Birth (congenital)", label_ar: "منذ الولادة (خلقي)" }
            ]
          },
          {
            id: "swelling_site",
            label_en: "Site of Swelling",
            label_ar: "موضع التورم",
            type: "text",
            required: false
          },
          {
            id: "swelling_size",
            label_en: "Size of Swelling",
            label_ar: "حجم التورم",
            type: "text",
            required: false,
            write_up_hint: "Swelling of {value} size (e.g., lemon size, orange size)."
          },
          {
            id: "swelling_increase_decrease",
            label_en: "What Increases & What Decreases It",
            label_ar: "ما يزيده وما ينقصه",
            type: "text",
            required: false,
            write_up_hint: "Decreases when lying down and on elevation of the scrotum (primary varicocele)."
          },
          {
            id: "general_condition_effect",
            label_en: "Effect on General Condition",
            label_ar: "التأثير على الحالة العامة",
            type: "text",
            required: false
          },
          {
            id: "apparent_cause",
            label_en: "Apparent Cause",
            label_ar: "السبب الظاهر",
            type: "text",
            required: false
          },
          {
            id: "other_swellings",
            label_en: "Other Swellings",
            label_ar: "تورمات أخرى",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "complications_heading",
            label_en: "Complications",
            label_ar: "المضاعفات",
            type: "heading"
          },
          {
            id: "sexual_affection",
            label_en: "Sexual Affection (e.g., infertility / sub-fertility)",
            label_ar: "التأثير الجنسي (مثل العقم / نقص الخصوبة)",
            type: "checkbox",
            marked_if_negative: true
          },
          {
            id: "increased_intraabdominal_pressure",
            label_en: "Causes of Increased Intra-abdominal Pressure",
            label_ar: "أسباب زيادة الضغط داخل البطن",
            type: "multicheck",
            items: [
              {
                id: "chronic_cough",
                label_en: "Chronic Cough",
                label_ar: "سعال مزمن",
                marked_if_negative: false
              },
              {
                id: "constipation",
                label_en: "Constipation",
                label_ar: "إمساك",
                marked_if_negative: false
              },
              {
                id: "straining_micturition",
                label_en: "Straining at Micturition",
                label_ar: "إجهاد عند التبول",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "investigations_treatment",
            label_en: "History of Investigations and Treatment",
            label_ar: "تاريخ الفحوصات والعلاج",
            type: "textarea"
          }
        ]
      },
      {
        id: "past_medical_history",
        title_en: "Past Medical History",
        title_ar: "التاريخ المرضي السابق",
        questions: [
          {
            id: "similar_attacks",
            label_en: "Similar Attacks",
            label_ar: "نوبات مشابهة",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "common_diseases",
            label_en: "Common Diseases",
            label_ar: "أمراض شائعة",
            type: "multicheck",
            items: [
              {
                id: "diabetes",
                label_en: "Diabetes Mellitus (DM)",
                label_ar: "السكري",
                marked_if_negative: true
              },
              {
                id: "hypertension",
                label_en: "Hypertension",
                label_ar: "ارتفاع ضغط الدم",
                marked_if_negative: true
              },
              {
                id: "tuberculosis",
                label_en: "Tuberculosis (TB)",
                label_ar: "السل",
                marked_if_negative: false
              },
              {
                id: "bilharziasis",
                label_en: "Bilharziasis",
                label_ar: "البلهارسيا",
                marked_if_negative: false
              },
              {
                id: "hepatitis",
                label_en: "Hepatitis",
                label_ar: "التهاب الكبد",
                marked_if_negative: false
              },
              {
                id: "dvt",
                label_en: "Deep Venous Thrombosis (DVT)",
                label_ar: "تجلط الأوردة العميقة",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "drug_allergy",
            label_en: "Drug Allergy & Intake",
            label_ar: "حساسية وتناول الأدوية",
            type: "checkbox",
            marked_if_negative: true
          },
          {
            id: "blood_transfusion",
            label_en: "Blood Transfusion",
            label_ar: "نقل الدم",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "previous_operations",
            label_en: "Previous Operations",
            label_ar: "عمليات سابقة",
            type: "checkbox",
            marked_if_negative: true
          },
          {
            id: "special_conditions",
            label_en: "Special Conditions",
            label_ar: "حالات خاصة",
            type: "multicheck",
            items: [
              {
                id: "gonorrhea",
                label_en: "Gonorrhea",
                label_ar: "السيلان",
                marked_if_negative: false
              },
              {
                id: "filariasis",
                label_en: "Filariasis",
                label_ar: "داء الفيلاريا",
                marked_if_negative: false
              },
              {
                id: "urinary_troubles",
                label_en: "Urinary Troubles",
                label_ar: "مشاكل بولية",
                marked_if_negative: false
              },
              {
                id: "past_trauma",
                label_en: "Past History of Trauma",
                label_ar: "تاريخ سابق للصدمات",
                marked_if_negative: false
              }
            ]
          }
        ]
      },
      {
        id: "family_history",
        title_en: "Family History",
        title_ar: "التاريخ العائلي",
        questions: [
          {
            id: "similar_condition_family",
            label_en: "Similar Condition in a Family Member",
            label_ar: "حالة مشابهة لدى أحد أفراد العائلة",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "consanguinity",
            label_en: "Consanguinity (Blood Relation of Parents)",
            label_ar: "زواج الأقارب",
            type: "checkbox",
            marked_if_negative: false
          }
        ]
      },
      {
        id: "general_examination",
        title_en: "General Examination",
        title_ar: "الفحص العام",
        questions: [
          {
            id: "general_appearance",
            label_en: "General Appearance (alert, conscious, oriented, build [tall and thin], facial expression, decubitus, intelligence, cooperation)",
            label_ar: "المظهر العام (واعٍ، متيقظ، مدرك، البنية [طويل ونحيف]، تعبير الوجه، الوضعية، الذكاء، التعاون)",
            type: "textarea"
          },
          {
            id: "complexion_heading",
            label_en: "Complexion (3 colors)",
            label_ar: "لون البشرة (3 ألوان)",
            type: "heading"
          },
          {
            id: "complexion",
            label_en: "Complexion Findings",
            label_ar: "نتائج لون البشرة",
            type: "multicheck",
            items: [
              {
                id: "jaundice",
                label_en: "Jaundice",
                label_ar: "يرقان",
                marked_if_negative: false
              },
              {
                id: "pallor",
                label_en: "Pallor",
                label_ar: "شحوب",
                marked_if_negative: false
              },
              {
                id: "cyanosis",
                label_en: "Cyanosis",
                label_ar: "زرقة",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "chest_heart",
            label_en: "Chest & Heart (COPD like asthma or bronchitis)",
            label_ar: "الصدر والقلب (انسداد رئوي مزمن كالربو أو التهاب الشعب)",
            type: "text",
            required: false
          },
          {
            id: "abdomen",
            label_en: "Abdomen (hepatosplenomegaly, ascites; usually reveals hypernephroma in secondary varicocele)",
            label_ar: "البطن (تضخم الكبد والطحال، استسقاء؛ يكشف عادة عن سرطان الكلية في الدوالي الثانوية)",
            type: "text",
            required: false
          },
          {
            id: "extremities",
            label_en: "Extremities (lower limb flat foot, varicose veins or edema)",
            label_ar: "الأطراف (قدم مسطحة، دوالي أو وذمة)",
            type: "text",
            required: false
          },
          {
            id: "vital_signs_heading",
            label_en: "Vital Signs",
            label_ar: "العلامات الحيوية",
            type: "heading"
          },
          {
            id: "pulse",
            label_en: "Pulse",
            label_ar: "النبض",
            type: "number",
            unit_en: "bpm",
            unit_ar: "نبضة/دقيقة",
            required: false
          },
          {
            id: "blood_pressure",
            label_en: "Blood Pressure",
            label_ar: "ضغط الدم",
            type: "text",
            required: false
          },
          {
            id: "temperature",
            label_en: "Temperature",
            label_ar: "درجة الحرارة",
            type: "number",
            unit_en: "°C",
            unit_ar: "°م",
            required: false
          },
          {
            id: "head_neck_spine",
            label_en: "Head, Neck & Spine",
            label_ar: "الرأس والرقبة والعمود الفقري",
            type: "text",
            required: false
          },
          {
            id: "pr_sep",
            label_en: "Per Rectum for Senile Enlargement of Prostate (SEP)",
            label_ar: "الفحص الشرجي لتضخم البروستاتا الشيخوخي",
            type: "checkbox",
            marked_if_negative: true
          }
        ]
      },
      {
        id: "local_examination",
        title_en: "Local Examination",
        title_ar: "الفحص الموضعي",
        questions: [
          {
            id: "exposure_position",
            label_en: "Exposure & Position (patient standing, exposed from nipple to knees)",
            label_ar: "الكشف والوضعية (المريض واقف، الكشف من الحلمة إلى الركبتين)",
            type: "text",
            required: false,
            write_up_hint: "Patient examined standing, exposed from nipple to knees."
          },
          {
            id: "inspection_heading",
            label_en: "Inspection (while standing, from 2 planes)",
            label_ar: "الفحص بالنظر (وقوفاً، من مستويين)",
            type: "heading"
          },
          {
            id: "inspection_findings",
            label_en: "Inspection Findings",
            label_ar: "نتائج الفحص بالنظر",
            type: "multicheck",
            items: [
              {
                id: "scrotal_fullness",
                label_en: "Fullness in RT or LT Scrotal Compartment",
                label_ar: "امتلاء في الحجرة الصفنية اليمنى أو اليسرى",
                marked_if_negative: false
              },
              {
                id: "testis_lower",
                label_en: "The Testis Hangs Lower Down",
                label_ar: "الخصية تتدلى لأسفل",
                marked_if_negative: false
              },
              {
                id: "dilated_skin_veins",
                label_en: "Dilated Veins Over the Skin of the Scrotum",
                label_ar: "أوردة متوسعة فوق جلد كيس الصفن",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "overlying_skin",
            label_en: "Overlying Skin",
            label_ar: "الجلد المغطي",
            type: "multicheck",
            items: [
              {
                id: "skin_normal",
                label_en: "Normal",
                label_ar: "طبيعي",
                marked_if_negative: false
              },
              {
                id: "skin_stretched",
                label_en: "Stretched",
                label_ar: "مشدود",
                marked_if_negative: false
              },
              {
                id: "skin_pigmented",
                label_en: "Pigmented",
                label_ar: "مصطبغ",
                marked_if_negative: false
              },
              {
                id: "inflammation_signs",
                label_en: "Signs of Inflammation (redness, edema)",
                label_ar: "علامات التهاب (احمرار، وذمة)",
                marked_if_negative: false
              },
              {
                id: "dilated_veins",
                label_en: "Dilated Veins",
                label_ar: "أوردة متوسعة",
                marked_if_negative: false
              },
              {
                id: "ulcer",
                label_en: "Ulcer",
                label_ar: "تقرح",
                marked_if_negative: false
              },
              {
                id: "scar",
                label_en: "Scar",
                label_ar: "ندبة",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "expansile_impulse_inspect",
            label_en: "Expansile Impulse on Cough (increase in size in all directions)",
            label_ar: "نبضة انبساطية عند السعال (زيادة الحجم في كل الاتجاهات)",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "palpation_heading",
            label_en: "Palpation",
            label_ar: "الجس",
            type: "heading"
          },
          {
            id: "warmth",
            label_en: "Warmth",
            label_ar: "الدفء",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "tenderness",
            label_en: "Tenderness",
            label_ar: "الإيلام",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "surface",
            label_en: "Surface",
            label_ar: "السطح",
            type: "radio",
            required: false,
            options: [
              { value: "smooth", label_en: "Smooth", label_ar: "أملس" },
              { value: "granular", label_en: "Granular", label_ar: "حبيبي" },
              { value: "nodular", label_en: "Nodular", label_ar: "عقدي" },
              { value: "lobulated", label_en: "Lobulated", label_ar: "فصيصي" }
            ]
          },
          {
            id: "edge",
            label_en: "Edge",
            label_ar: "الحافة",
            type: "radio",
            required: false,
            options: [
              { value: "ill_defined", label_en: "Ill-defined", label_ar: "غير محدد" },
              { value: "well_defined", label_en: "Well-defined", label_ar: "محدد جيداً" },
              { value: "pedunculated", label_en: "Pedunculated", label_ar: "متصل بساق" }
            ]
          },
          {
            id: "varicosities_feel",
            label_en: "Varicosities Felt as Bag of Worms",
            label_ar: "الدوالي تُحس ككيس من الديدان",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "scrotal_neck_test",
            label_en: "Scrotal Neck Test (bilaterally at same time)",
            label_ar: "اختبار عنق الصفن (على الجانبين في آنٍ واحد)",
            type: "radio",
            required: false,
            options: [
              { value: "inguinal", label_en: "Inguinal", label_ar: "أربي" },
              { value: "scrotal", label_en: "Scrotal", label_ar: "صفني" },
              { value: "inguinoscrotal", label_en: "Inguinoscrotal (varicocele)", label_ar: "أربي صفني (دوالي)" }
            ]
          },
          {
            id: "thrill_on_cough",
            label_en: "Thrill on Cough (lie down, elevate scrotum, ask to cough)",
            label_ar: "رجفة عند السعال (الاستلقاء، رفع الصفن، طلب السعال)",
            type: "checkbox",
            marked_if_negative: false,
            write_up_hint: "Thrill present in primary varicocele (turbulence of blood flow); absent in secondary."
          },
          {
            id: "bow_sign",
            label_en: "Bow's Sign (tension decreases on bending forward = positive)",
            label_ar: "علامة باو (يقل الشد عند الانحناء للأمام = إيجابية)",
            type: "checkbox",
            marked_if_negative: false,
            write_up_hint: "Positive Bow's sign indicates the patient is likely to benefit from operation."
          },
          {
            id: "disappears_lying_elevation",
            label_en: "Swelling Disappears on Lying Down & Elevation of Scrotum",
            label_ar: "يختفي التورم عند الاستلقاء ورفع الصفن",
            type: "checkbox",
            marked_if_negative: false,
            write_up_hint: "Empties on lying down and elevation (primary); does not empty (secondary)."
          },
          {
            id: "examine_genitalia_heading",
            label_en: "Examine Penis, Scrotum, Testis & Cord",
            label_ar: "فحص القضيب وكيس الصفن والخصية والحبل المنوي",
            type: "heading"
          },
          {
            id: "penis_exam",
            label_en: "Penis (for ulcer or scar of chancre)",
            label_ar: "القضيب (لتقرح أو ندبة قرحة)",
            type: "text",
            required: false
          },
          {
            id: "scrotum_exam",
            label_en: "Scrotum (palpate both sides, start with healthy side, standing then recumbent)",
            label_ar: "كيس الصفن (جس الجانبين، البدء بالجانب السليم، وقوفاً ثم استلقاءً)",
            type: "textarea"
          },
          {
            id: "epididymis_exam",
            label_en: "Epididymis (size, consistency, presence of sulcus between it and testis)",
            label_ar: "البربخ (الحجم، القوام، وجود ثلم بينه وبين الخصية)",
            type: "text",
            required: false
          },
          {
            id: "tunica_vaginalis",
            label_en: "Tunica Vaginalis (early hydrocele detected by pinching test)",
            label_ar: "الغلالة الغمدية (القيلة المائية المبكرة تُكتشف باختبار القرص)",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "testis_exam",
            label_en: "Testis Examination",
            label_ar: "فحص الخصية",
            type: "multicheck",
            items: [
              {
                id: "testis_size",
                label_en: "Size (may be atrophied/smaller in late cases)",
                label_ar: "الحجم (قد يكون ضامراً/أصغر في الحالات المتأخرة)",
                marked_if_negative: false
              },
              {
                id: "testis_consistency",
                label_en: "Consistency (may be softer)",
                label_ar: "القوام (قد يكون أكثر طراوة)",
                marked_if_negative: false
              },
              {
                id: "testicular_sensation",
                label_en: "Testicular Sensation",
                label_ar: "الإحساس الخصوي",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "spermatic_cord_exam",
            label_en: "Spermatic Cord",
            label_ar: "الحبل المنوي",
            type: "radio",
            required: false,
            options: [
              { value: "beaded", label_en: "Beaded (Bilharziasis or TB)", label_ar: "محبب (بلهارسيا أو سل)" },
              { value: "matted", label_en: "Matted (Filariasis)", label_ar: "متلبد (داء الفيلاريا)" },
              { value: "lower_swelling", label_en: "Swelling in Lower Part or Thickening", label_ar: "تورم في الجزء السفلي أو ثخانة" }
            ]
          },
          {
            id: "draining_lymph_nodes",
            label_en: "Draining Lymph Nodes (inguinal & para-aortic)",
            label_ar: "العقد الليمفاوية المصرفة (الأربية وحول الأبهر)",
            type: "checkbox",
            marked_if_negative: true
          },
          {
            id: "varicocele_grade",
            label_en: "Grade of Varicocele",
            label_ar: "درجة الدوالي",
            type: "radio",
            required: false,
            options: [
              { value: "subclinical", label_en: "Subclinical (not palpable, detected by Doppler reflux on Valsalva)", label_ar: "تحت سريري (غير محسوس، يُكتشف بالدوبلر مع مناورة فالسالفا)" },
              { value: "grade1", label_en: "Grade I (present only with Valsalva)", label_ar: "الدرجة الأولى (يظهر فقط مع فالسالفا)" },
              { value: "grade2", label_en: "Grade II (present without Valsalva)", label_ar: "الدرجة الثانية (يظهر بدون فالسالفا)" },
              { value: "grade3", label_en: "Grade III (visible through skin - bag of worms)", label_ar: "الدرجة الثالثة (مرئي عبر الجلد - كيس من الديدان)" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "hydrocele",
    specialty: "surgery",
    icon: "🩻",
    name_en: "Inguinoscrotal Swelling (Hydrocele)",
    name_ar: "التورم الأربي الصفني (القيلة المائية)",
    sections: [
      {
        id: "personal_history",
        title_en: "Personal History",
        title_ar: "التاريخ الشخصي",
        questions: [
          {
            id: "name",
            label_en: "Name",
            label_ar: "الاسم",
            type: "text",
            required: true
          },
          {
            id: "age",
            label_en: "Age",
            label_ar: "العمر",
            type: "number",
            unit_en: "years",
            unit_ar: "سنة",
            required: true
          },
          {
            id: "sex",
            label_en: "Sex",
            label_ar: "الجنس",
            type: "radio",
            required: true,
            options: [
              { value: "male", label_en: "Male", label_ar: "ذكر" }
            ]
          },
          {
            id: "marital_status",
            label_en: "Marital Status",
            label_ar: "الحالة الاجتماعية",
            type: "radio",
            required: false,
            options: [
              { value: "single", label_en: "Single", label_ar: "أعزّب" }, // We use user request: label_ar status options
              { value: "married", label_en: "Married", label_ar: "متزوج" }
            ]
          },
          {
            id: "address",
            label_en: "Address (important for Filariasis)",
            label_ar: "العنوان (مهم لداء الفيلاريا)",
            type: "text",
            required: false
          },
          {
            id: "residence",
            label_en: "Residence",
            label_ar: "محل الإقامة",
            type: "text",
            required: false
          },
          {
            id: "occupation",
            label_en: "Occupation",
            label_ar: "المهنة",
            type: "text",
            required: false
          },
          {
            id: "special_habits",
            label_en: "Special Habits of Medical Importance",
            label_ar: "العادات الخاصة ذات الأهمية الطبية",
            type: "text",
            required: false
          }
        ]
      },
      {
        id: "presenting_complaint",
        title_en: "Presenting Complaint",
        title_ar: "الشكوى الرئيسية",
        questions: [
          {
            id: "complaint",
            label_en: "Presenting Complaint (usually swelling in the groin or scrotum)",
            label_ar: "الشكوى الرئيسية (عادة تورم في الأربية أو كيس الصفن)",
            type: "text",
            required: true,
            write_up_hint: "The patient presented with {value}."
          },
          {
            id: "complaint_duration",
            label_en: "Duration",
            label_ar: "المدة",
            type: "number",
            unit_en: "months",
            unit_ar: "شهر",
            required: true,
            write_up_hint: "Of {value} months duration."
          }
        ]
      },
      {
        id: "hopi",
        title_en: "History of Presenting Illness",
        title_ar: "تاريخ المرض الحالي",
        questions: [
          {
            id: "pain_heading",
            label_en: "Pain",
            label_ar: "الألم",
            type: "heading"
          },
          {
            id: "pain_present",
            label_en: "Pain Present (hydrocele is usually painless)",
            label_ar: "وجود ألم (القيلة المائية عادة غير مؤلمة)",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "pain_site",
            label_en: "Site of Pain",
            label_ar: "موضع الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_character",
            label_en: "Character of Pain",
            label_ar: "طبيعة الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_radiation",
            label_en: "Radiation",
            label_ar: "انتشار الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_increase_decrease",
            label_en: "What Increases or Decreases It",
            label_ar: "ما يزيده أو ينقصه",
            type: "text",
            required: false
          },
          {
            id: "pain_onset",
            label_en: "Onset",
            label_ar: "بداية الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_course",
            label_en: "Course",
            label_ar: "مسار الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_duration",
            label_en: "Duration of Pain",
            label_ar: "مدة الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_severity",
            label_en: "Severity",
            label_ar: "شدة الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_associations",
            label_en: "What Associates",
            label_ar: "ما يصاحبه",
            type: "text",
            required: false
          },
          {
            id: "swelling_heading",
            label_en: "Swelling",
            label_ar: "التورم",
            type: "heading"
          },
          {
            id: "swelling_site",
            label_en: "Site of Swelling",
            label_ar: "موضع التورم",
            type: "text",
            required: false
          },
          {
            id: "swelling_size",
            label_en: "Size of Swelling",
            label_ar: "حجم التورم",
            type: "text",
            required: false,
            write_up_hint: "Swelling of {value} size (e.g., lemon size, orange size)."
          },
          {
            id: "swelling_onset",
            label_en: "Onset of Swelling",
            label_ar: "بداية التورم",
            type: "radio",
            required: false,
            options: [
              { value: "gradual", label_en: "Gradual (primary)", label_ar: "تدريجي (أولي)" },
              { value: "accidental", label_en: "Accidental", label_ar: "عرضي" }
            ]
          },
          {
            id: "swelling_course",
            label_en: "Course of Swelling",
            label_ar: "مسار التورم",
            type: "radio",
            required: false,
            options: [
              { value: "progressive", label_en: "Progressive", label_ar: "متزايد" },
              { value: "stationary", label_en: "Stationary", label_ar: "ثابت" },
              { value: "regressive", label_en: "Regressive", label_ar: "متراجع" }
            ]
          },
          {
            id: "swelling_duration",
            label_en: "Duration of Swelling",
            label_ar: "مدة التورم",
            type: "radio",
            required: false,
            options: [
              { value: "short", label_en: "Short (days or weeks)", label_ar: "قصيرة (أيام أو أسابيع)" },
              { value: "long", label_en: "Long (months or years)", label_ar: "طويلة (شهور أو سنوات)" },
              { value: "since_birth", label_en: "Since birth (congenital)", label_ar: "منذ الولادة (خلقي)" }
            ]
          },
          {
            id: "other_swellings",
            label_en: "Other Swellings",
            label_ar: "تورمات أخرى",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "general_condition_effect",
            label_en: "Effect on General Condition",
            label_ar: "التأثير على الحالة العامة",
            type: "text",
            required: false
          },
          {
            id: "apparent_cause",
            label_en: "Apparent Cause",
            label_ar: "السبب الظاهر",
            type: "text",
            required: false
          },
          {
            id: "increase_decrease_diurnal",
            label_en: "What Increases & What Decreases It (diurnal variation)",
            label_ar: "ما يزيده وما ينقصه (التغير اليومي)",
            type: "radio",
            required: false,
            options: [
              { value: "diurnal", label_en: "Increases at end of day, decreases in early morning (congenital - communicating)", label_ar: "يزداد بنهاية اليوم ويقل في الصباح الباكر (خلقي - متصل)" },
              { value: "stationary", label_en: "Stationary (no fluctuation - infantile/vaginal)", label_ar: "ثابت (لا تذبذب - طفولي/غمدي)" }
            ]
          },
          {
            id: "pressure_manifestations",
            label_en: "Pressure Manifestations of Affection",
            label_ar: "مظاهر الضغط الناتجة عن الإصابة",
            type: "text",
            required: false
          },
          {
            id: "investigations_treatment",
            label_en: "History of Investigations and Treatment",
            label_ar: "تاريخ الفحوصات والعلاج",
            type: "textarea"
          }
        ]
      },
      {
        id: "past_medical_history",
        title_en: "Past Medical History",
        title_ar: "التاريخ المرضي السابق",
        questions: [
          {
            id: "similar_attacks",
            label_en: "Similar Attacks",
            label_ar: "نوبات مشابهة",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "common_diseases",
            label_en: "Common Diseases",
            label_ar: "أمراض شائعة",
            type: "multicheck",
            items: [
              {
                id: "diabetes",
                label_en: "Diabetes Mellitus (DM)",
                label_ar: "السكري",
                marked_if_negative: true
              },
              {
                id: "hypertension",
                label_en: "Hypertension",
                label_ar: "ارتفاع ضغط الدم",
                marked_if_negative: true
              },
              {
                id: "tuberculosis",
                label_en: "Tuberculosis (TB)",
                label_ar: "السل",
                marked_if_negative: false
              },
              {
                id: "bilharziasis",
                label_en: "Bilharziasis",
                label_ar: "البلهارسيا",
                marked_if_negative: false
              },
              {
                id: "hepatitis",
                label_en: "Hepatitis",
                label_ar: "التهاب الكبد",
                marked_if_negative: false
              },
              {
                id: "dvt",
                label_en: "Deep Venous Thrombosis (DVT)",
                label_ar: "تجلط الأوردة العميقة",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "drug_allergy",
            label_en: "Drug Allergy & Intake",
            label_ar: "حساسية وتناول الأدوية",
            type: "checkbox",
            marked_if_negative: true
          },
          {
            id: "blood_transfusion",
            label_en: "Blood Transfusion",
            label_ar: "نقل الدم",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "previous_operations",
            label_en: "Previous Operations (post-herniorrhaphy hydrocele)",
            label_ar: "عمليات سابقة (قيلة مائية بعد رأب الفتق)",
            type: "checkbox",
            marked_if_negative: true
          },
          {
            id: "special_conditions",
            label_en: "Special Conditions",
            label_ar: "حالات خاصة",
            type: "multicheck",
            items: [
              {
                id: "gonorrhea",
                label_en: "Gonorrhea",
                label_ar: "السيلان",
                marked_if_negative: false
              },
              {
                id: "filariasis",
                label_en: "Filariasis",
                label_ar: "داء الفيلاريا",
                marked_if_negative: false
              },
              {
                id: "urinary_troubles",
                label_en: "Urinary Troubles",
                label_ar: "مشاكل بولية",
                marked_if_negative: false
              },
              {
                id: "past_trauma",
                label_en: "Past History of Trauma",
                label_ar: "تاريخ سابق للصدمات",
                marked_if_negative: false
              }
            ]
          }
        ]
      },
      {
        id: "family_history",
        title_en: "Family History",
        title_ar: "التاريخ العائلي",
        questions: [
          {
            id: "similar_condition_family",
            label_en: "Similar Condition in a Family Member",
            label_ar: "حالة مشابهة لدى أحد أفراد العائلة",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "consanguinity",
            label_en: "Consanguinity",
            label_ar: "زواج الأقارب",
            type: "checkbox",
            marked_if_negative: false
          }
        ]
      },
      {
        id: "general_examination",
        title_en: "General Examination",
        title_ar: "الفحص العام",
        questions: [
          {
            id: "general_appearance",
            label_en: "General Appearance (alert, conscious, oriented, average built, quiet facial expression, normal decubitus, average intelligence, cooperative)",
            label_ar: "المظهر العام (واعٍ، متيقظ، مدرك، بنية متوسطة، تعبير وجه هادئ، وضعية طبيعية، ذكاء متوسط، متعاون)",
            type: "textarea"
          },
          {
            id: "complexion_heading",
            label_en: "Complexion (3 colors)",
            label_ar: "لون البشرة (3 ألوان)",
            type: "heading"
          },
          {
            id: "complexion",
            label_en: "Complexion Findings",
            label_ar: "نتائج لون البشرة",
            type: "multicheck",
            items: [
              {
                id: "jaundice",
                label_en: "Jaundice",
                label_ar: "يرقان",
                marked_if_negative: false
              },
              {
                id: "pallor",
                label_en: "Pallor",
                label_ar: "شحوب",
                marked_if_negative: false
              },
              {
                id: "cyanosis",
                label_en: "Cyanosis",
                label_ar: "زرقة",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "chest_heart",
            label_en: "Chest & Heart (COPD like asthma or bronchitis)",
            label_ar: "الصدر والقلب (انسداد رئوي مزمن كالربو أو التهاب الشعب)",
            type: "text",
            required: false
          },
          {
            id: "abdomen",
            label_en: "Abdomen (hepatosplenomegaly, ascites)",
            label_ar: "البطن (تضخم الكبد والطحال، استسقاء)",
            type: "text",
            required: false
          },
          {
            id: "extremities",
            label_en: "Extremities (lower limb varicose veins or edema)",
            label_ar: "الأطراف (دوالي أو وذمة بالطرف السفلي)",
            type: "text",
            required: false
          },
          {
            id: "vital_signs_heading",
            label_en: "Vital Signs",
            label_ar: "العلامات الحيوية",
            type: "heading"
          },
          {
            id: "pulse",
            label_en: "Pulse",
            label_ar: "النبض",
            type: "number",
            unit_en: "bpm",
            unit_ar: "نبضة/دقيقة",
            required: false
          },
          {
            id: "blood_pressure",
            label_en: "Blood Pressure",
            label_ar: "ضغط الدم",
            type: "text",
            required: false
          },
          {
            id: "temperature",
            label_en: "Temperature",
            label_ar: "درجة الحرارة",
            type: "number",
            unit_en: "°C",
            unit_ar: "°م",
            required: false
          },
          {
            id: "head_neck_spine",
            label_en: "Head, Neck & Spine",
            label_ar: "الرأس والرقبة والعمود الفقري",
            type: "text",
            required: false
          },
          {
            id: "scrotum_varicocele",
            label_en: "Scrotum (if associated varicocele)",
            label_ar: "كيس الصفن (إذا صاحبه دوالي الخصية)",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "pr_sep",
            label_en: "Per Rectum for Senile Enlargement of Prostate (SEP)",
            label_ar: "الفحص الشرجي لتضخم البروستاتا الشيخوخي",
            type: "checkbox",
            marked_if_negative: true
          }
        ]
      },
      {
        id: "local_examination",
        title_en: "Local Examination",
        title_ar: "الفحص الموضعي",
        questions: [
          {
            id: "exposure_position",
            label_en: "Exposure & Position (patient standing, exposed from nipple to knees)",
            label_ar: "الكشف والوضعية (المريض واقف، الكشف من الحلمة إلى الركبتين)",
            type: "text",
            required: false,
            write_up_hint: "Patient examined standing, exposed from nipple to knees."
          },
          {
            id: "inspection_heading",
            label_en: "Inspection (first standing then sitting, from 2 planes)",
            label_ar: "الفحص بالنظر (وقوفاً ثم جلوساً، من مستويين)",
            type: "heading"
          },
          {
            id: "swelling_inspect_site",
            label_en: "Site (scrotum - which side RT/LT)",
            label_ar: "الموضع (كيس الصفن - أي جانب يمين/يسار)",
            type: "text",
            required: false
          },
          {
            id: "swelling_inspect_size",
            label_en: "Size (in cm, best)",
            label_ar: "الحجم (بالسنتيمتر)",
            type: "text",
            required: false
          },
          {
            id: "swelling_inspect_shape",
            label_en: "Shape",
            label_ar: "الشكل",
            type: "radio",
            required: false,
            options: [
              { value: "globular", label_en: "Globular", label_ar: "كروي" },
              { value: "oval", label_en: "Oval", label_ar: "بيضاوي" },
              { value: "irregular", label_en: "Irregular", label_ar: "غير منتظم" }
            ]
          },
          {
            id: "overlying_skin",
            label_en: "Overlying Skin",
            label_ar: "الجلد المغطي",
            type: "multicheck",
            items: [
              {
                id: "skin_normal",
                label_en: "Normal",
                label_ar: "طبيعي",
                marked_if_negative: false
              },
              {
                id: "skin_stretched",
                label_en: "Stretched",
                label_ar: "مشدود",
                marked_if_negative: false
              },
              {
                id: "skin_pigmented",
                label_en: "Pigmented",
                label_ar: "مصطبغ",
                marked_if_negative: false
              },
              {
                id: "inflammation_signs",
                label_en: "Signs of Inflammation (redness, edema)",
                label_ar: "علامات التهاب (احمرار، وذمة)",
                marked_if_negative: false
              },
              {
                id: "dilated_veins",
                label_en: "Dilated Veins",
                label_ar: "أوردة متوسعة",
                marked_if_negative: false
              },
              {
                id: "ulcer",
                label_en: "Ulcer",
                label_ar: "تقرح",
                marked_if_negative: false
              },
              {
                id: "scar",
                label_en: "Scar",
                label_ar: "ندبة",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "expansile_impulse_inspect",
            label_en: "Expansile Impulse on Cough (no expansile impulse in hydrocele)",
            label_ar: "نبضة انبساطية عند السعال (لا توجد في القيلة المائية)",
            type: "checkbox",
            marked_if_negative: true
          },
          {
            id: "palpation_heading",
            label_en: "Palpation",
            label_ar: "الجس",
            type: "heading"
          },
          {
            id: "warmth",
            label_en: "Warmth",
            label_ar: "الدفء",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "tenderness",
            label_en: "Tenderness",
            label_ar: "الإيلام",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "surface",
            label_en: "Surface",
            label_ar: "السطح",
            type: "radio",
            required: false,
            options: [
              { value: "smooth", label_en: "Smooth", label_ar: "أملس" },
              { value: "nodular", label_en: "Nodular", label_ar: "عقدي" }
            ]
          },
          {
            id: "edge",
            label_en: "Edge (pedunculated)",
            label_ar: "الحافة (متصلة بساق)",
            type: "text",
            required: false
          },
          {
            id: "consistency",
            label_en: "Consistency (cystic)",
            label_ar: "القوام (كيسي)",
            type: "radio",
            required: false,
            options: [
              { value: "cystic", label_en: "Cystic", label_ar: "كيسي" },
              { value: "tense_cystic", label_en: "Tense Cystic", label_ar: "كيسي مشدود" },
              { value: "lax_cystic", label_en: "Lax Cystic", label_ar: "كيسي مرتخٍ" }
            ]
          },
          {
            id: "special_tests_heading",
            label_en: "Special Tests",
            label_ar: "الاختبارات الخاصة",
            type: "heading"
          },
          {
            id: "scrotal_neck_test",
            label_en: "Scrotal Neck Test (bilaterally, get above the swelling)",
            label_ar: "اختبار عنق الصفن (على الجانبين، الوصول لأعلى التورم)",
            type: "radio",
            required: false,
            options: [
              { value: "inguinal", label_en: "Inguinal", label_ar: "أربي" },
              { value: "inguinoscrotal", label_en: "Inguinoscrotal", label_ar: "أربي صفني" },
              { value: "scrotal", label_en: "Purely Scrotal (varicocele or hydrocele) - able to get above it", label_ar: "صفني محض (دوالي أو قيلة مائية) - يمكن الوصول لأعلاه" }
            ],
            write_up_hint: "Grasping the neck of the scrotum, the swelling was found to be completely below the fingers (purely scrotal)."
          },
          {
            id: "fluctuation_test",
            label_en: "Bipolar Fluctuation Test (cystic swelling - fix and make it tense)",
            label_ar: "اختبار التموج ثنائي القطب (تورم كيسي - تثبيته وجعله مشدوداً)",
            type: "checkbox",
            marked_if_negative: false,
            write_up_hint: "Positive bipolar fluctuation test confirms a cystic swelling."
          },
          {
            id: "transillumination_test",
            label_en: "Transillumination Test",
            label_ar: "اختبار الإضاءة الخلفية",
            type: "radio",
            required: false,
            options: [
              { value: "translucent", label_en: "Translucent - clear fluid (hydrocele)", label_ar: "شفاف - سائل صافٍ (قيلة مائية)" },
              { value: "opalescent", label_en: "Opalescent (spermatocele)", label_ar: "لُؤلؤي (قيلة منوية)" },
              { value: "opaque", label_en: "Opaque - blood/pus (haematocele/pyocele)", label_ar: "معتم - دم/صديد (قيلة دموية/قيحية)" }
            ],
            write_up_hint: "Transillumination differentiates translucent hydrocele from opaque cysts and localizes the testis."
          },
          {
            id: "draining_lymph_nodes",
            label_en: "Draining Lymph Nodes (inguinal & para-aortic)",
            label_ar: "العقد الليمفاوية المصرفة (الأربية وحول الأبهر)",
            type: "checkbox",
            marked_if_negative: true
          },
          {
            id: "examine_genitalia_heading",
            label_en: "Examine Penis, Perineum, Scrotum, Testis & Cord",
            label_ar: "فحص القضيب والعجان وكيس الصفن والخصية والحبل المنوي",
            type: "heading"
          },
          {
            id: "penis_exam",
            label_en: "Penis (ulcer or scar of chancre; external meatus: site, discharge by milking the urethra)",
            label_ar: "القضيب (تقرح أو ندبة قرحة؛ الفتحة الخارجية: الموضع، إفرازات بحلب الإحليل)",
            type: "text",
            required: false
          },
          {
            id: "perineum_exam",
            label_en: "Perineum",
            label_ar: "العجان",
            type: "text",
            required: false
          },
          {
            id: "other_hernial_orifices",
            label_en: "Other Hernial Orifices",
            label_ar: "فتحات الفتق الأخرى",
            type: "checkbox",
            marked_if_negative: true
          },
          {
            id: "scrotum_exam",
            label_en: "Scrotum (ant & post aspect, shape, symmetry, swelling; both sides palpated; back for TB sinus; start with healthy side, standing then recumbent)",
            label_ar: "كيس الصفن (الوجه الأمامي والخلفي، الشكل، التناظر، التورم؛ جس الجانبين؛ الخلف لناسور السل؛ البدء بالجانب السليم، وقوفاً ثم استلقاءً)",
            type: "textarea"
          },
          {
            id: "epididymis_exam",
            label_en: "Epididymis (size, consistency, presence of sulcus between it and testis)",
            label_ar: "البربخ (الحجم، القوام، وجود ثلم بينه وبين الخصية)",
            type: "text",
            required: false
          },
          {
            id: "tunica_vaginalis",
            label_en: "Tunica Vaginalis (early hydrocele detected by pinching test)",
            label_ar: "الغلالة الغمدية (القيلة المائية المبكرة تُكتشف باختبار القرص)",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "testis_exam",
            label_en: "Testis Examination",
            label_ar: "فحص الخصية",
            type: "multicheck",
            items: [
              {
                id: "testis_size",
                label_en: "Size",
                label_ar: "الحجم",
                marked_if_negative: false
              },
              {
                id: "testis_consistency",
                label_en: "Consistency",
                label_ar: "القوام",
                marked_if_negative: false
              },
              {
                id: "testicular_sensation",
                label_en: "Testicular Sensation",
                label_ar: "الإحساس الخصوي",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "spermatic_cord_exam",
            label_en: "Spermatic Cord",
            label_ar: "الحبل المنوي",
            type: "radio",
            required: false,
            options: [
              { value: "beaded", label_en: "Beaded (Bilharziasis or TB)", label_ar: "محبب (بلهارسيا أو سل)" },
              { value: "matted", label_en: "Matted (Filariasis)", label_ar: "متلبد (داء الفيلاريا)" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "lymphadenopathy",
    specialty: "surgery",
    icon: "🟢",
    name_en: "Lymphadenopathy (Lymph Node Swelling)",
    name_ar: "اعتلال العقد الليمفاوية (تورم العقدة الليمفاوية)",
    sections: [
      {
        id: "personal_history",
        title_en: "Personal History",
        title_ar: "التاريخ الشخصي",
        questions: [
          {
            id: "name",
            label_en: "Name",
            label_ar: "الاسم",
            type: "text",
            required: true
          },
          {
            id: "age",
            label_en: "Age",
            label_ar: "العمر",
            type: "number",
            unit_en: "years",
            unit_ar: "سنة",
            required: true,
            write_up_hint: "The patient is {value} years old (young age: TB; adult: acute leukemia & Hodgkin; elderly: secondaries, other lymphomata & chronic leukemia)."
          },
          {
            id: "sex",
            label_en: "Sex",
            label_ar: "الجنس",
            type: "radio",
            required: true,
            options: [
              { value: "male", label_en: "Male", label_ar: "ذكر" },
              { value: "female", label_en: "Female", label_ar: "أنثى" }
            ],
            write_up_hint: "The patient is a {value} (malignancy more common in males)."
          },
          {
            id: "marital_status",
            label_en: "Marital Status",
            label_ar: "الحالة الاجتماعية",
            type: "radio",
            required: false,
            options: [
              { value: "single", label_en: "Single", label_ar: "أعزب" },
              { value: "married", label_en: "Married", label_ar: "متزوج" }
            ]
          },
          {
            id: "address",
            label_en: "Address & Residence",
            label_ar: "العنوان ومحل الإقامة",
            type: "text",
            required: false,
            write_up_hint: "Area of bad hygienic conditions predisposes to TB; brucellosis in those with contact with animals."
          },
          {
            id: "occupation",
            label_en: "Occupation (contact with animals → Brucellosis)",
            label_ar: "المهنة (التعامل مع الحيوانات ← البروسيلا)",
            type: "text",
            required: false
          },
          {
            id: "special_habits",
            label_en: "Special Habits of Medical Importance (e.g., alcohol)",
            label_ar: "العادات الخاصة ذات الأهمية الطبية (مثل الكحول)",
            type: "text",
            required: false,
            write_up_hint: "Alcohol induces pain in Hodgkin disease."
          },
          {
            id: "menstrual_history",
            label_en: "Menstrual History (if female)",
            label_ar: "التاريخ الطمثي (إذا كانت أنثى)",
            type: "text",
            required: false
          }
        ]
      },
      {
        id: "presenting_complaint",
        title_en: "Presenting Complaint",
        title_ar: "الشكوى الرئيسية",
        questions: [
          {
            id: "complaint",
            label_en: "Presenting Complaint (usually swelling)",
            label_ar: "الشكوى الرئيسية (عادة تورم)",
            type: "text",
            required: true,
            write_up_hint: "The patient presented with {value}."
          },
          {
            id: "complaint_duration",
            label_en: "Duration",
            label_ar: "المدة",
            type: "number",
            unit_en: "months",
            unit_ar: "شهر",
            required: true,
            write_up_hint: "Of {value} months duration."
          }
        ]
      },
      {
        id: "hopi",
        title_en: "History of Presenting Illness",
        title_ar: "تاريخ المرض الحالي",
        questions: [
          {
            id: "pain_heading",
            label_en: "Pain",
            label_ar: "الألم",
            type: "heading"
          },
          {
            id: "pain_present",
            label_en: "Pain Present",
            label_ar: "وجود ألم",
            type: "checkbox",
            marked_if_negative: false,
            write_up_hint: "Alcohol induces pain in Hodgkin disease."
          },
          {
            id: "pain_site",
            label_en: "Site of Pain",
            label_ar: "موضع الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_character",
            label_en: "Character of Pain",
            label_ar: "طبيعة الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_radiation",
            label_en: "Radiation",
            label_ar: "انتشار الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_increase_decrease",
            label_en: "What Increases or Decreases It",
            label_ar: "ما يزيده أو ينقصه",
            type: "text",
            required: false
          },
          {
            id: "pain_onset",
            label_en: "Onset",
            label_ar: "بداية الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_course",
            label_en: "Course",
            label_ar: "مسار الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_duration",
            label_en: "Duration of Pain",
            label_ar: "مدة الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_severity",
            label_en: "Severity",
            label_ar: "شدة الألم",
            type: "text",
            required: false
          },
          {
            id: "pain_associations",
            label_en: "What Associates",
            label_ar: "ما يصاحبه",
            type: "text",
            required: false
          },
          {
            id: "swelling_heading",
            label_en: "Swelling",
            label_ar: "التورم",
            type: "heading"
          },
          {
            id: "swelling_site",
            label_en: "Site of Swelling",
            label_ar: "موضع التورم",
            type: "text",
            required: false
          },
          {
            id: "swelling_size",
            label_en: "Size of Swelling",
            label_ar: "حجم التورم",
            type: "text",
            required: false,
            write_up_hint: "Swelling of {value} size (e.g., lemon size, orange size)."
          },
          {
            id: "swelling_onset",
            label_en: "Onset of Swelling",
            label_ar: "بداية التورم",
            type: "radio",
            required: false,
            options: [
              { value: "accidental", label_en: "Accidental", label_ar: "عرضي" },
              { value: "acute", label_en: "Acute", label_ar: "حاد" },
              { value: "gradual", label_en: "Gradual", label_ar: "تدريجي" }
            ]
          },
          {
            id: "swelling_course",
            label_en: "Course of Swelling",
            label_ar: "مسار التورم",
            type: "radio",
            required: false,
            options: [
              { value: "progressive", label_en: "Progressive", label_ar: "متزايد" },
              { value: "regressive", label_en: "Regressive", label_ar: "متراجع" },
              { value: "stationary", label_en: "Stationary", label_ar: "ثابت" },
              { value: "fluctuating", label_en: "Fluctuating", label_ar: "متذبذب" }
            ]
          },
          {
            id: "swelling_duration",
            label_en: "Duration of Swelling",
            label_ar: "مدة التورم",
            type: "radio",
            required: false,
            options: [
              { value: "short", label_en: "Short (days or weeks)", label_ar: "قصيرة (أيام أو أسابيع)" },
              { value: "long", label_en: "Long (months or years)", label_ar: "طويلة (شهور أو سنوات)" }
            ]
          },
          {
            id: "other_swellings",
            label_en: "Other Swellings",
            label_ar: "تورمات أخرى",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "general_condition_effect",
            label_en: "Effect on General Condition",
            label_ar: "التأثير على الحالة العامة",
            type: "multicheck",
            items: [
              {
                id: "tb_symptoms",
                label_en: "Symptoms of TB (night sweat, night fever, anorexia, loss of weight) & chest troubles",
                label_ar: "أعراض السل (تعرق ليلي، حمى ليلية، فقدان شهية، نقص وزن) ومشاكل صدرية",
                marked_if_negative: false
              },
              {
                id: "septic_malignant_focus",
                label_en: "Primary Septic or Malignant Focus in the Draining Area",
                label_ar: "بؤرة إنتانية أو خبيثة أولية في منطقة التصريف",
                marked_if_negative: false
              },
              {
                id: "cachexia",
                label_en: "Cachexia (in malignancy)",
                label_ar: "الدنف (في الأورام الخبيثة)",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "apparent_cause",
            label_en: "Apparent Cause",
            label_ar: "السبب الظاهر",
            type: "text",
            required: false
          },
          {
            id: "increase_decrease",
            label_en: "What Increases & What Decreases It",
            label_ar: "ما يزيده وما ينقصه",
            type: "text",
            required: false
          },
          {
            id: "disturbance_function_heading",
            label_en: "Disturbance of Function (by site)",
            label_ar: "اضطراب الوظيفة (حسب الموضع)",
            type: "heading"
          },
          {
            id: "cervical_manifestations",
            label_en: "Cervical Manifestations",
            label_ar: "المظاهر العنقية",
            type: "multicheck",
            items: [
              {
                id: "brachial_plexus",
                label_en: "Brachial Plexus Infiltration (paralysis or sensory loss in upper limb)",
                label_ar: "ارتشاح الضفيرة العضدية (شلل أو فقدان حس بالطرف العلوي)",
                marked_if_negative: false
              },
              {
                id: "accessory_nerve",
                label_en: "Accessory Nerve (stiffness of neck movements)",
                label_ar: "العصب الإضافي (تيبس حركات الرقبة)",
                marked_if_negative: false
              },
              {
                id: "rln",
                label_en: "Recurrent Laryngeal Nerve (hoarseness of voice)",
                label_ar: "العصب الحنجري الراجع (بحة الصوت)",
                marked_if_negative: false
              },
              {
                id: "compression_cervical",
                label_en: "Dyspnea, Dysphagia, Arm Ischemia or Edema",
                label_ar: "ضيق نفس، عسر بلع، نقص تروية أو وذمة بالذراع",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "mediastinal_manifestations",
            label_en: "Mediastinal Syndrome (dyspnea, cough)",
            label_ar: "المتلازمة المنصفية (ضيق نفس، سعال)",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "abdominal_manifestations",
            label_en: "Abdominal Manifestations",
            label_ar: "المظاهر البطنية",
            type: "multicheck",
            items: [
              {
                id: "abdominal_swelling",
                label_en: "Swelling, Back Pain, Edema, Dilated Veins",
                label_ar: "تورم، ألم بالظهر، وذمة، أوردة متوسعة",
                marked_if_negative: false
              },
              {
                id: "arterial_obstruction",
                label_en: "Arterial Obstruction (ischemia of lower limb)",
                label_ar: "انسداد شرياني (نقص تروية الطرف السفلي)",
                marked_if_negative: false
              },
              {
                id: "venous_obstruction",
                label_en: "Venous Obstruction (edema, DVT)",
                label_ar: "انسداد وريدي (وذمة، تجلط الأوردة العميقة)",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "inguinal_axillary_manifestations",
            label_en: "Inguinal or Axillary (lymphedema, dilated veins, pain, ischemia)",
            label_ar: "أربي أو إبطي (وذمة ليمفاوية، أوردة متوسعة، ألم، نقص تروية)",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "other_systems_heading",
            label_en: "Other Systems (metastasis)",
            label_ar: "أجهزة أخرى (الانتشار)",
            type: "heading"
          },
          {
            id: "other_systems",
            label_en: "Other Systems Affection",
            label_ar: "إصابة الأجهزة الأخرى",
            type: "multicheck",
            items: [
              {
                id: "liver",
                label_en: "Liver (pain & swelling in Rt hypochondrium & jaundice)",
                label_ar: "الكبد (ألم وتورم بالمراق الأيمن ويرقان)",
                marked_if_negative: false
              },
              {
                id: "bone",
                label_en: "Bone (bony pain, swelling or pathological fracture)",
                label_ar: "العظام (ألم عظمي، تورم أو كسر مرضي)",
                marked_if_negative: false
              },
              {
                id: "lung",
                label_en: "Lung (chest pain, dyspnea, cough & haemoptysis)",
                label_ar: "الرئة (ألم صدري، ضيق نفس، سعال ونفث دموي)",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "fever_pattern",
            label_en: "Fever Pattern",
            label_ar: "نمط الحمى",
            type: "radio",
            required: false,
            options: [
              { value: "hectic", label_en: "Hectic Fever (acute lymphadenitis)", label_ar: "حمى متموجة (التهاب عقد ليمفاوية حاد)" },
              { value: "night", label_en: "Night Fever (TB)", label_ar: "حمى ليلية (سل)" },
              { value: "glandular", label_en: "Glandular Fever - fever + rash (infectious mononucleosis)", label_ar: "حمى غدية - حمى + طفح (كثرة الوحيدات العدائية)" },
              { value: "pel_ebstein", label_en: "Pel-Ebstein Fever (Brucellosis, lymphoma)", label_ar: "حمى بل-إبشتاين (بروسيلا، لمفوما)" }
            ]
          },
          {
            id: "investigations_treatment",
            label_en: "History of Investigations and Treatment",
            label_ar: "تاريخ الفحوصات والعلاج",
            type: "textarea"
          }
        ]
      },
      {
        id: "past_medical_history",
        title_en: "Past Medical History",
        title_ar: "التاريخ المرضي السابق",
        questions: [
          {
            id: "similar_attacks",
            label_en: "Similar Attacks",
            label_ar: "نوبات مشابهة",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "common_diseases",
            label_en: "Common Diseases",
            label_ar: "أمراض شائعة",
            type: "multicheck",
            items: [
              {
                id: "diabetes",
                label_en: "Diabetes Mellitus (DM)",
                label_ar: "السكري",
                marked_if_negative: true
              },
              {
                id: "hypertension",
                label_en: "Hypertension",
                label_ar: "ارتفاع ضغط الدم",
                marked_if_negative: true
              },
              {
                id: "tuberculosis",
                label_en: "Tuberculosis (TB)",
                label_ar: "السل",
                marked_if_negative: false
              },
              {
                id: "bilharziasis",
                label_en: "Bilharziasis",
                label_ar: "البلهارسيا",
                marked_if_negative: false
              },
              {
                id: "hepatitis",
                label_en: "Hepatitis",
                label_ar: "التهاب الكبد",
                marked_if_negative: false
              },
              {
                id: "dvt",
                label_en: "Deep Venous Thrombosis (DVT)",
                label_ar: "تجلط الأوردة العميقة",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "drug_allergy",
            label_en: "Drug Allergy & Intake",
            label_ar: "حساسية وتناول الأدوية",
            type: "checkbox",
            marked_if_negative: true
          },
          {
            id: "blood_transfusion",
            label_en: "Blood Transfusion",
            label_ar: "نقل الدم",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "previous_operations",
            label_en: "Previous Operations",
            label_ar: "عمليات سابقة",
            type: "checkbox",
            marked_if_negative: true
          }
        ]
      },
      {
        id: "family_history",
        title_en: "Family History",
        title_ar: "التاريخ العائلي",
        questions: [
          {
            id: "similar_condition_family",
            label_en: "Similar Condition in a Family Member",
            label_ar: "حالة مشابهة لدى أحد أفراد العائلة",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "consanguinity",
            label_en: "Consanguinity",
            label_ar: "زواج الأقارب",
            type: "checkbox",
            marked_if_negative: false
          }
        ]
      },
      {
        id: "general_examination",
        title_en: "General Examination",
        title_ar: "الفحص العام",
        questions: [
          {
            id: "general_appearance",
            label_en: "General Appearance (alert, conscious, oriented, body built, decubitus, facial expression, intelligence, cooperation)",
            label_ar: "المظهر العام (واعٍ، متيقظ، مدرك، البنية، الوضعية، تعبير الوجه، الذكاء، التعاون)",
            type: "textarea"
          },
          {
            id: "complexion_heading",
            label_en: "Complexion (3 colors)",
            label_ar: "لون البشرة (3 ألوان)",
            type: "heading"
          },
          {
            id: "complexion",
            label_en: "Complexion Findings",
            label_ar: "نتائج لون البشرة",
            type: "multicheck",
            items: [
              {
                id: "jaundice",
                label_en: "Jaundice (Hodgkin lymphoma - LNs in porta hepatis)",
                label_ar: "يرقان (لمفوما هودجكن - عقد ببوابة الكبد)",
                marked_if_negative: false
              },
              {
                id: "pallor",
                label_en: "Pallor (anemia)",
                label_ar: "شحوب (فقر دم)",
                marked_if_negative: false
              },
              {
                id: "cyanosis",
                label_en: "Cyanosis (mediastinal LNs)",
                label_ar: "زرقة (عقد منصفية)",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "head_exam",
            label_en: "Head (eye for jaundice, lip for pallor/cyanosis, tongue for hypoglossal palsy, parotid for Mikulicz swelling)",
            label_ar: "الرأس (العين لليرقان، الشفة للشحوب/الزرقة، اللسان لشلل تحت اللسان، النكفية لتورم ميكوليتش)",
            type: "text",
            required: false
          },
          {
            id: "neck_exam",
            label_en: "Neck (thyroid enlargement, engorged neck veins → mediastinal syndrome)",
            label_ar: "الرقبة (تضخم الغدة الدرقية، احتقان أوردة الرقبة ← متلازمة منصفية)",
            type: "text",
            required: false
          },
          {
            id: "spine_exam",
            label_en: "Spine (for metastasis & tenderness - Brucellosis)",
            label_ar: "العمود الفقري (للانتشار والإيلام - بروسيلا)",
            type: "text",
            required: false
          },
          {
            id: "chest_heart",
            label_en: "Chest & Heart (sternal tenderness in leukemia; Despine's sign - bronchial breathing below T4 in mediastinal LN enlargement)",
            label_ar: "الصدر والقلب (إيلام القص في اللوكيميا؛ علامة ديسبين - تنفس قصبي تحت T4 في تضخم العقد المنصفية)",
            type: "text",
            required: false
          },
          {
            id: "abdomen",
            label_en: "Abdomen (hepatosplenomegaly in leukemia, testis for testicular tumor, PR/PV, ascites, aortic & iliac LNs)",
            label_ar: "البطن (تضخم الكبد والطحال باللوكيميا، الخصية لورم خصوي، الفحص الشرجي/المهبلي، استسقاء، عقد أبهرية وحرقفية)",
            type: "text",
            required: false
          },
          {
            id: "extremities",
            label_en: "Extremities (tender bone → lymphoma, leukemia)",
            label_ar: "الأطراف (عظم مؤلم ← لمفوما، لوكيميا)",
            type: "text",
            required: false
          },
          {
            id: "vital_signs_heading",
            label_en: "Vital Signs",
            label_ar: "العلامات الحيوية",
            type: "heading"
          },
          {
            id: "pulse",
            label_en: "Pulse (inequality if LN compresses vessels)",
            label_ar: "النبض (عدم تساوٍ إذا ضغطت العقدة على الأوعية)",
            type: "number",
            unit_en: "bpm",
            unit_ar: "نبضة/دقيقة",
            required: false
          },
          {
            id: "blood_pressure",
            label_en: "Blood Pressure",
            label_ar: "ضغط الدم",
            type: "text",
            required: false
          },
          {
            id: "temperature",
            label_en: "Temperature (fever → Hodgkin lymphoma)",
            label_ar: "درجة الحرارة (حمى ← لمفوما هودجكن)",
            type: "number",
            unit_en: "°C",
            unit_ar: "°م",
            required: false
          }
        ]
      },
      {
        id: "local_examination",
        title_en: "Local Examination",
        title_ar: "الفحص الموضعي",
        questions: [
          {
            id: "inspection_heading",
            label_en: "Inspection (from 2 different planes)",
            label_ar: "الفحص بالنظر (من مستويين مختلفين)",
            type: "heading"
          },
          {
            id: "swelling_inspect_site",
            label_en: "Site (anatomical region of the swelling)",
            label_ar: "الموضع (المنطقة التشريحية للتورم)",
            type: "text",
            required: false,
            write_up_hint: "TB: upper deep cervical LNs; Hodgkin: lower deep cervical LNs; secondaries: epitrochlear LNs."
          },
          {
            id: "swelling_inspect_size",
            label_en: "Size (in cm, best)",
            label_ar: "الحجم (بالسنتيمتر)",
            type: "text",
            required: false
          },
          {
            id: "swelling_inspect_shape",
            label_en: "Shape",
            label_ar: "الشكل",
            type: "text",
            required: false
          },
          {
            id: "swelling_number",
            label_en: "Number",
            label_ar: "العدد",
            type: "radio",
            required: false,
            options: [
              { value: "single", label_en: "Single (localized)", label_ar: "مفرد (موضعي)" },
              { value: "multiple", label_en: "Multiple (localized or generalized) - describe the largest", label_ar: "متعدد (موضعي أو معمم) - يوصف الأكبر" }
            ]
          },
          {
            id: "overlying_skin",
            label_en: "Overlying Skin",
            label_ar: "الجلد المغطي",
            type: "multicheck",
            items: [
              {
                id: "skin_normal",
                label_en: "Normal",
                label_ar: "طبيعي",
                marked_if_negative: false
              },
              {
                id: "skin_stretched",
                label_en: "Stretched",
                label_ar: "مشدود",
                marked_if_negative: false
              },
              {
                id: "skin_pigmented",
                label_en: "Pigmented",
                label_ar: "مصطبغ",
                marked_if_negative: false
              },
              {
                id: "inflammation_signs",
                label_en: "Signs of Inflammation (redness, edema)",
                label_ar: "علامات التهاب (احمرار، وذمة)",
                marked_if_negative: false
              },
              {
                id: "dilated_veins",
                label_en: "Dilated Veins",
                label_ar: "أوردة متوسعة",
                marked_if_negative: false
              },
              {
                id: "ulcer",
                label_en: "Ulcer",
                label_ar: "تقرح",
                marked_if_negative: false
              },
              {
                id: "scar",
                label_en: "Scar",
                label_ar: "ندبة",
                marked_if_negative: false
              },
              {
                id: "red_lines",
                label_en: "Red Lines of Inflamed Lymph Vessels",
                label_ar: "خطوط حمراء لأوعية ليمفاوية ملتهبة",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "other_lymph_nodes_inspect",
            label_en: "Other Lymph Nodes in the Body (if generalized look for others; if localized look for focus in draining area)",
            label_ar: "عقد ليمفاوية أخرى بالجسم (إذا معمم ابحث عن أخرى؛ إذا موضعي ابحث عن بؤرة بمنطقة التصريف)",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "palpation_heading",
            label_en: "Palpation",
            label_ar: "الجس",
            type: "heading"
          },
          {
            id: "warmth",
            label_en: "Temperature/Warmth (increased in inflammation)",
            label_ar: "الحرارة/الدفء (تزداد في الالتهاب)",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "tenderness",
            label_en: "Tenderness (inflammatory mostly tender; neoplastic not tender)",
            label_ar: "الإيلام (الالتهابي غالباً مؤلم؛ الورمي غير مؤلم)",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "edge",
            label_en: "Edge",
            label_ar: "الحافة",
            type: "radio",
            required: false,
            options: [
              { value: "ill_defined", label_en: "Ill-defined", label_ar: "غير محدد" },
              { value: "well_defined", label_en: "Well-defined", label_ar: "محدد جيداً" }
            ]
          },
          {
            id: "surface",
            label_en: "Surface",
            label_ar: "السطح",
            type: "radio",
            required: false,
            options: [
              { value: "smooth", label_en: "Smooth", label_ar: "أملس" },
              { value: "nodular", label_en: "Nodular", label_ar: "عقدي" }
            ]
          },
          {
            id: "consistency",
            label_en: "Consistency",
            label_ar: "القوام",
            type: "radio",
            required: false,
            options: [
              { value: "cystic", label_en: "Cystic (cold abscess)", label_ar: "كيسي (خراج بارد)" },
              { value: "solid", label_en: "Solid (calcified primary TB or non-Hodgkin)", label_ar: "صلب (سل أولي متكلس أو لا هودجكن)" },
              { value: "soft", label_en: "Soft (degenerated non-Hodgkin)", label_ar: "طري (لا هودجكن متنكس)" },
              { value: "firm", label_en: "Firm (acute lymphadenitis, primary/secondary TB and lymphoma)", label_ar: "ثابت (التهاب حاد، سل أولي/ثانوي ولمفوما)" }
            ]
          },
          {
            id: "relation_to_each_other",
            label_en: "Relation of Nodes to Each Other (if multiple)",
            label_ar: "علاقة العقد ببعضها (إذا متعددة)",
            type: "radio",
            required: false,
            options: [
              { value: "discrete", label_en: "Discrete (secondary TB, early Hodgkin)", label_ar: "منفصلة (سل ثانوي، هودجكن مبكر)" },
              { value: "matted", label_en: "Matted (primary TB) - fused but can be counted", label_ar: "متلبدة (سل أولي) - ملتحمة لكن يمكن عدها" },
              { value: "chain", label_en: "Chain (TB)", label_ar: "سلسلة (سل)" },
              { value: "amalgamated", label_en: "Amalgamated (non-Hodgkin) - fused and can't be counted", label_ar: "مندمجة (لا هودجكن) - ملتحمة ولا يمكن عدها" }
            ]
          },
          {
            id: "relation_to_structures",
            label_en: "Relation to Surrounding Structures (mobility/fixity)",
            label_ar: "العلاقة بالتراكيب المحيطة (الحركة/التثبت)",
            type: "text",
            required: false
          },
          {
            id: "draining_area_exam",
            label_en: "Examination of Draining Area / Other Sites",
            label_ar: "فحص منطقة التصريف / المواقع الأخرى",
            type: "multicheck",
            items: [
              {
                id: "cervical_drainage",
                label_en: "Cervical: oral cavity, thyroid, face, scalp, parotid, pharynx & larynx",
                label_ar: "العنقية: الفم، الدرقية، الوجه، فروة الرأس، النكفية، البلعوم والحنجرة",
                marked_if_negative: false
              },
              {
                id: "axillary_drainage",
                label_en: "Axillary: breast, upper limbs, ant & post wall of trunk to umbilicus",
                label_ar: "الإبطية: الثدي، الأطراف العلوية، جدار الجذع الأمامي والخلفي حتى السرة",
                marked_if_negative: false
              },
              {
                id: "supraclavicular_drainage",
                label_en: "Supraclavicular: Virchow's gland",
                label_ar: "فوق الترقوة: عقدة فيرشو",
                marked_if_negative: false
              },
              {
                id: "inguinal_drainage",
                label_en: "Inguinal: lower limbs, genitalia, perineum, anal canal, gluteal region, ant abdominal wall below umbilicus",
                label_ar: "الأربية: الأطراف السفلية، الأعضاء التناسلية، العجان، القناة الشرجية، المنطقة الإليوية، جدار البطن الأمامي تحت السرة",
                marked_if_negative: false
              }
            ]
          },
          {
            id: "percussion",
            label_en: "Percussion (sternum for mediastinal mass; tenderness in leukemia)",
            label_ar: "القرع (القص لكتلة منصفية؛ إيلام في اللوكيميا)",
            type: "checkbox",
            marked_if_negative: false
          },
          {
            id: "auscultation",
            label_en: "Auscultation (Despine's sign: bronchial breathing below T4 on back)",
            label_ar: "الإصغاء (علامة ديسبين: تنفس قصبي تحت T4 من الخلف)",
            type: "checkbox",
            marked_if_negative: false
          }
        ]
      }
    ]
  },
  {
    id: "cardiovascular",
    specialty: "internal",
    icon: "🫀",
    name_en: "Cardiovascular",
    name_ar: "القلب والأوعية",
    sections: [
      {
        id: "personal_history",
        title_en: "Personal History",
        title_ar: "التاريخ الشخصي",
        questions: [
          {
            id: "patient_name",
            type: "text",
            label_en: "Patient Name",
            label_ar: "اسم المريض",
            required: true
          },
          {
            id: "age",
            type: "number",
            label_en: "Age",
            label_ar: "العمر",
            unit_en: "years",
            unit_ar: "سنة",
            required: true,
            hint_en: "Congenital heart disease in infants/children; coronary disease in middle-aged and elderly",
            hint_ar: "أمراض القلب الخلقية في الأطفال؛ أمراض القلب التاجية في متوسطي العمر وكبار السن"
          },
          {
            id: "sex",
            type: "radio",
            label_en: "Sex",
            label_ar: "الجنس",
            required: true,
            options: [
              { value: "male", label_en: "Male", label_ar: "ذكر" },
              { value: "female", label_en: "Female", label_ar: "أنثى" }
            ]
          },
          {
            id: "occupation",
            type: "text",
            label_en: "Occupation",
            label_ar: "المهنة"
          },
          {
            id: "marital_state",
            type: "radio",
            label_en: "Marital Status",
            label_ar: "الحالة الاجتماعية",
            options: [
              { value: "single", label_en: "Single", label_ar: "أعزب" },
              { value: "married", label_en: "Married", label_ar: "متزوج" },
              { value: "divorced", label_en: "Divorced", label_ar: "مطلق" },
              { value: "widowed", label_en: "Widowed", label_ar: "أرمل" }
            ]
          },
          {
            id: "residence",
            type: "radio",
            label_en: "Residence",
            label_ar: "محل الإقامة",
            options: [
              { value: "urban", label_en: "Urban", label_ar: "حضر" },
              { value: "rural", label_en: "Rural", label_ar: "ريف" }
            ]
          },
          {
            id: "menstrual_history",
            type: "radio",
            label_en: "Menstrual History (females)",
            label_ar: "التاريخ الطمثي (للإناث)",
            options: [
              { value: "regular", label_en: "Regular", label_ar: "طبيعية" },
              { value: "irregular", label_en: "Irregular", label_ar: "غير منتظمة" },
              { value: "amenorrhea", label_en: "Amenorrhea", label_ar: "انقطاع الطمث" },
              { value: "menorrhagia", label_en: "Menorrhagia", label_ar: "غزارة الطمث" }
            ]
          }
        ]
      },
      {
        id: "presenting_complaint",
        title_en: "Presenting Complaint",
        title_ar: "الشكوى الرئيسية",
        questions: [
          {
            id: "symptoms",
            type: "multicheck",
            label_en: "Main Symptoms",
            label_ar: "الأعراض الرئيسية",
            items: [
              { id: "symptom_chest_pain", label_en: "Chest pain / tightness", label_ar: "ألم / ضيق في الصدر", marked_if_negative: false },
              { id: "symptom_dyspnea", label_en: "Shortness of breath / dyspnea", label_ar: "ضيق التنفس", marked_if_negative: false },
              { id: "symptom_palpitations", label_en: "Palpitations", label_ar: "خفقان", marked_if_negative: false },
              { id: "symptom_leg_oedema", label_en: "Leg swelling (oedema)", label_ar: "تورم الساقين", marked_if_negative: false },
              { id: "symptom_syncope", label_en: "Syncope / fainting", label_ar: "إغماء", marked_if_negative: false },
              { id: "symptom_fatigue", label_en: "Fatigue / easy fatigability", label_ar: "إرهاق سريع", marked_if_negative: false },
              { id: "symptom_distension", label_en: "Abdominal distension", label_ar: "انتفاخ البطن", marked_if_negative: false },
              { id: "symptom_cyanosis", label_en: "Cyanosis", label_ar: "زرقة", marked_if_negative: false }
            ]
          },
          {
            id: "duration_value",
            type: "number",
            label_en: "Duration",
            label_ar: "مدة الشكوى",
            required: true
          },
          {
            id: "duration_unit",
            type: "radio",
            label_en: "Duration Unit",
            label_ar: "وحدة المدة",
            required: true,
            options: [
              { value: "days", label_en: "Days", label_ar: "أيام" },
              { value: "weeks", label_en: "Weeks", label_ar: "أسابيع" },
              { value: "months", label_en: "Months", label_ar: "أشهر" },
              { value: "years", label_en: "Years", label_ar: "سنوات" }
            ]
          }
        ]
      },
      {
        id: "hopi",
        title_en: "History of Presenting Illness",
        title_ar: "تاريخ المرض الحالي",
        questions: [
          {
            id: "onset",
            type: "radio",
            label_en: "Onset",
            label_ar: "البداية",
            options: [
              { value: "sudden", label_en: "Sudden", label_ar: "مفاجئة" },
              { value: "gradual", label_en: "Gradual", label_ar: "تدريجية" }
            ]
          },
          {
            id: "course",
            type: "radio",
            label_en: "Course",
            label_ar: "السير",
            options: [
              { value: "progressive", label_en: "Progressive", label_ar: "تقدمي" },
              { value: "intermittent", label_en: "Intermittent / Episodic", label_ar: "متقطع / نوبي" },
              { value: "stationary", label_en: "Stationary", label_ar: "ثابت" },
              { value: "regressive", label_en: "Regressive", label_ar: "متراجع" }
            ]
          },
          {
            id: "aggravating_factors",
            type: "textarea",
            label_en: "Aggravating Factors",
            label_ar: "العوامل المهيجة",
            hint_en: "Exercise, sexual intercourse, heavy meal, smoking, high altitude, stress, cold",
            hint_ar: "المجهود، الجماع، الوجبة الدسمة، التدخين، الارتفاع، التوتر، البرودة"
          },
          {
            id: "relieving_factors",
            type: "textarea",
            label_en: "Relieving Factors",
            label_ar: "العوامل المخففة",
            hint_en: "Rest, sublingual nitrate",
            hint_ar: "الراحة، النترات تحت اللسان"
          },
          {
            id: "effect_of_treatment",
            type: "textarea",
            label_en: "Effect of Treatment",
            label_ar: "أثر العلاج"
          },
          {
            id: "date_last_attack",
            type: "text",
            label_en: "Date / Description of Last Attack",
            label_ar: "تاريخ / وصف آخر نوبة"
          },
          { id: "pulmonary_congestion_heading", type: "heading", label_en: "Pulmonary Congestion Symptoms", label_ar: "أعراض الاحتقان الرئوي" },
          {
            id: "pulmonary_congestion",
            type: "multicheck",
            label_en: "Pulmonary Congestion (MS / LVF)",
            label_ar: "الاحتقان الرئوي (تضيق الميترالي / فشل البطين الأيسر)",
            items: [
              { id: "dyspnea", label_en: "Dyspnea / shortness of breath", label_ar: "ضيق التنفس", marked_if_negative: true },
              { id: "exertional_dyspnea", label_en: "Exertional dyspnea", label_ar: "ضيق نفس عند المجهود", marked_if_negative: false },
              { id: "orthopnea", label_en: "Orthopnea (dyspnea on lying flat)", label_ar: "ضيق نفس عند الاستلقاء", marked_if_negative: true },
              { id: "pnd", label_en: "Paroxysmal nocturnal dyspnea (cardiac asthma)", label_ar: "ضيق نفس انتيابي ليلي (الربو القلبي)", marked_if_negative: true },
              { id: "cough", label_en: "Cough", label_ar: "السعال", marked_if_negative: false },
              { id: "haemoptysis", label_en: "Haemoptysis", label_ar: "نفث الدم", marked_if_negative: true },
              { id: "recurrent_chest_infection", label_en: "Recurrent chest infection", label_ar: "التهابات صدرية متكررة", marked_if_negative: false }
            ]
          },
          {
            id: "nyha_class",
            type: "radio",
            label_en: "NYHA Class of Dyspnea",
            label_ar: "تصنيف NYHA لضيق التنفس",
            options: [
              { value: "class_i", label_en: "I — on more than ordinary effort", label_ar: "الأولى — عند مجهود أكثر من العادي" },
              { value: "class_ii", label_en: "II — on ordinary effort", label_ar: "الثانية — عند المجهود العادي" },
              { value: "class_iii", label_en: "III — on sub-ordinary effort", label_ar: "الثالثة — عند مجهود أقل من العادي" },
              { value: "class_iv", label_en: "IV — at rest", label_ar: "الرابعة — عند الراحة" }
            ]
          },
          { id: "systemic_congestion_heading", type: "heading", label_en: "Systemic Venous Congestion Symptoms", label_ar: "أعراض الاحتقان الوريدي الجهازي" },
          {
            id: "systemic_congestion",
            type: "multicheck",
            label_en: "Systemic Congestion (RVF)",
            label_ar: "الاحتقان الجهازي (فشل البطين الأيمن)",
            items: [
              { id: "ll_oedema", label_en: "Lower limb oedema (bilateral, pitting, painless)", label_ar: "وذمة الطرفين السفليين", marked_if_negative: true },
              { id: "ascites", label_en: "Abdominal distension / ascites", label_ar: "انتفاخ البطن / الاستسقاء", marked_if_negative: false },
              { id: "right_hypochondrial_pain", label_en: "Right hypochondrial pain (hepatic congestion)", label_ar: "ألم بالمراق الأيمن (احتقان كبدي)", marked_if_negative: false },
              { id: "jaundice", label_en: "Jaundice", label_ar: "اليرقان", marked_if_negative: false },
              { id: "dyspepsia", label_en: "Dyspepsia (GIT congestion)", label_ar: "عسر الهضم (احتقان الجهاز الهضمي)", marked_if_negative: false }
            ]
          },
          { id: "low_cop_heading", type: "heading", label_en: "Low Cardiac Output Symptoms", label_ar: "أعراض انخفاض النتاج القلبي" },
          {
            id: "low_cardiac_output",
            type: "multicheck",
            label_en: "Low Cardiac Output",
            label_ar: "انخفاض النتاج القلبي",
            items: [
              { id: "syncope", label_en: "Syncope / fainting / blackout", label_ar: "الإغماء", marked_if_negative: true },
              { id: "headache", label_en: "Headache", label_ar: "الصداع", marked_if_negative: false },
              { id: "blurred_vision", label_en: "Blurring of vision", label_ar: "تشوش الرؤية", marked_if_negative: false },
              { id: "dizziness", label_en: "Dizziness", label_ar: "الدوخة", marked_if_negative: false },
              { id: "anginal_pain", label_en: "Anginal pain", label_ar: "ألم ذبحي", marked_if_negative: true },
              { id: "oliguria", label_en: "Oliguria", label_ar: "قلة البول", marked_if_negative: false },
              { id: "easy_fatigability", label_en: "Easy fatigability", label_ar: "سهولة الإرهاق", marked_if_negative: false },
              { id: "pallor_cold", label_en: "Pallor / cold skin", label_ar: "شحوب / برودة الجلد", marked_if_negative: false }
            ]
          },
          {
            id: "cyanosis_history",
            type: "checkbox",
            label_en: "Cyanosis (note age of onset: since birth vs few years after birth)",
            label_ar: "الزرقة (حدد عمر البداية: منذ الولادة أو بعد سنوات)",
            marked_if_negative: true
          },
          { id: "chest_pain_heading", type: "heading", label_en: "Chest Pain Analysis", label_ar: "تحليل ألم الصدر" },
          {
            id: "chest_pain",
            type: "checkbox",
            label_en: "Chest pain present",
            label_ar: "وجود ألم بالصدر",
            marked_if_negative: true
          },
          {
            id: "pain_site",
            type: "text",
            label_en: "Pain Site",
            label_ar: "موقع الألم",
            hint_en: "Anginal pain is typically retrosternal",
            hint_ar: "الألم الذبحي عادةً خلف القص"
          },
          {
            id: "pain_character",
            type: "radio",
            label_en: "Pain Character",
            label_ar: "صفة الألم",
            options: [
              { value: "compressing", label_en: "Compressing / heaviness", label_ar: "ضاغط / ثقل" },
              { value: "burning", label_en: "Burning", label_ar: "حارق" },
              { value: "stitching", label_en: "Stitching (not anginal)", label_ar: "وخزي (ليس ذبحياً)" },
              { value: "other", label_en: "Other", label_ar: "أخرى" }
            ]
          },
          {
            id: "pain_radiation",
            type: "multicheck",
            label_en: "Pain Radiation",
            label_ar: "انتشار الألم",
            items: [
              { id: "left_shoulder_arm", label_en: "Left shoulder / arm", label_ar: "الكتف / الذراع الأيسر", marked_if_negative: false },
              { id: "jaw_neck", label_en: "Jaw / neck", label_ar: "الفك / الرقبة", marked_if_negative: false },
              { id: "epigastric", label_en: "Epigastric", label_ar: "فوق المعدة (الشرسوفي)", marked_if_negative: false },
              { id: "back", label_en: "Back / interscapular", label_ar: "الظهر / بين الكتفين", marked_if_negative: false },
              { id: "no_radiation", label_en: "No radiation", label_ar: "لا ينتشر", marked_if_negative: false }
            ]
          },
          { id: "palpitation_heading", type: "heading", label_en: "Palpitation", label_ar: "الخفقان" },
          {
            id: "palpitation",
            type: "checkbox",
            label_en: "Palpitation (awareness of heart beats)",
            label_ar: "الخفقان (الإحساس بضربات القلب)",
            marked_if_negative: true
          },
          {
            id: "palpitation_rhythm",
            type: "radio",
            label_en: "Palpitation Rhythm",
            label_ar: "انتظام الخفقان",
            options: [
              { value: "regular", label_en: "Regular", label_ar: "منتظم" },
              { value: "irregular", label_en: "Irregular (AF)", label_ar: "غير منتظم (رجفان أذيني)" }
            ]
          },
          {
            id: "hypertension_manifestations",
            type: "multicheck",
            label_en: "Hypertension Manifestations",
            label_ar: "أعراض ارتفاع ضغط الدم",
            items: [
              { id: "asymptomatic", label_en: "Asymptomatic", label_ar: "بدون أعراض", marked_if_negative: false },
              { id: "fatigue", label_en: "Fatigue (most common)", label_ar: "إرهاق (الأكثر شيوعاً)", marked_if_negative: false },
              { id: "headache", label_en: "Headache", label_ar: "الصداع", marked_if_negative: false },
              { id: "blurred_vision", label_en: "Blurring of vision", label_ar: "تشوش الرؤية", marked_if_negative: false },
              { id: "tinnitus", label_en: "Tinnitus", label_ar: "طنين الأذن", marked_if_negative: false },
              { id: "epistaxis", label_en: "Epistaxis", label_ar: "الرعاف", marked_if_negative: false }
            ]
          },
          {
            id: "pressure_manifestations",
            type: "multicheck",
            label_en: "Pressure Manifestations (enlarged left atrium)",
            label_ar: "أعراض الضغط (تضخم الأذين الأيسر)",
            items: [
              { id: "brassy_cough", label_en: "Brassy cough (trachea)", label_ar: "سعال نحاسي (القصبة الهوائية)", marked_if_negative: false },
              { id: "dysphagia", label_en: "Dysphagia (oesophagus)", label_ar: "عسر البلع (المريء)", marked_if_negative: true },
              { id: "hoarseness", label_en: "Hoarseness of voice — Ortner's syndrome", label_ar: "بحة الصوت — متلازمة أورتنر", marked_if_negative: true },
              { id: "face_ul_oedema", label_en: "Face / upper limb oedema or cyanosis (SVC)", label_ar: "وذمة / زرقة الوجه والطرف العلوي (الوريد الأجوف العلوي)", marked_if_negative: false }
            ]
          },
          {
            id: "embolic_manifestations",
            type: "multicheck",
            label_en: "Thrombo-embolic Manifestations",
            label_ar: "الأعراض الانصمامية الخثارية",
            items: [
              { id: "paraesthesia", label_en: "Paraesthesia / numbness", label_ar: "تنميل", marked_if_negative: false },
              { id: "paralysis", label_en: "Paralysis / limb weakness", label_ar: "شلل / ضعف طرف", marked_if_negative: false },
              { id: "haematuria", label_en: "Haematuria", label_ar: "بيلة دموية", marked_if_negative: false },
              { id: "abdominal_pain", label_en: "Abdominal pain (intestinal ischaemia)", label_ar: "ألم بطني (نقص تروية معوي)", marked_if_negative: false }
            ]
          },
          {
            id: "fever",
            type: "checkbox",
            label_en: "Fever (rheumatic fever / infective endocarditis / myocarditis / pericarditis)",
            label_ar: "الحمى (روماتيزمية / التهاب الشغاف / العضلة / التامور)",
            marked_if_negative: true
          }
        ]
      },
      {
        id: "past_medical_history",
        title_en: "Past Medical History",
        title_ar: "التاريخ المرضي السابق",
        questions: [
          { id: "rheumatic_fever", type: "checkbox", label_en: "Rheumatic fever", label_ar: "الحمى الروماتيزمية", marked_if_negative: true },
          { id: "diabetes_mellitus", type: "checkbox", label_en: "Diabetes mellitus", label_ar: "داء السكري", marked_if_negative: true },
          { id: "hypertension", type: "checkbox", label_en: "Hypertension", label_ar: "ارتفاع ضغط الدم", marked_if_negative: true },
          { id: "dyslipidemia", type: "checkbox", label_en: "Dyslipidemia (high cholesterol / TG)", label_ar: "اضطراب شحوم الدم (كوليسترول / ثلاثي)", marked_if_negative: true },
          { id: "previous_mi_angina", type: "checkbox", label_en: "Previous MI or angina", label_ar: "احتشاء عضلة قلب أو ذبحة صدرية سابقة", marked_if_negative: false },
          { id: "renal_disease", type: "checkbox", label_en: "Renal disease", label_ar: "مرض كلوي", marked_if_negative: false },
          {
            id: "previous_operations",
            type: "textarea",
            label_en: "Previous Cardiac Operations (valve replacement / valvotomy / bypass)",
            label_ar: "العمليات الجراحية القلبية السابقة (استبدال صمام / توسيع / مجازة)"
          },
          {
            id: "previous_admissions",
            type: "textarea",
            label_en: "Previous Hospital Admissions / Illnesses",
            label_ar: "حالات دخول المستشفى / الأمراض السابقة"
          }
        ]
      },
      {
        id: "drug_history",
        title_en: "Drug History",
        title_ar: "تاريخ الأدوية",
        questions: [
          { id: "current_medications", type: "textarea", label_en: "Current Medications", label_ar: "الأدوية الحالية" },
          { id: "antihypertensives", type: "checkbox", label_en: "Antihypertensives", label_ar: "أدوية الضغط" },
          { id: "antiplatelets_anticoagulants", type: "checkbox", label_en: "Antiplatelets / Anticoagulants", label_ar: "مضادات الصفائح / مضادات التجلط" },
          { id: "statins", type: "checkbox", label_en: "Statins / lipid-lowering drugs", label_ar: "أدوية خفض الدهون (ستاتينات)" },
          { id: "diuretics", type: "checkbox", label_en: "Diuretics", label_ar: "مدرات البول" },
          { id: "nitrates", type: "checkbox", label_en: "Nitrates", label_ar: "النترات" },
          {
            id: "hypertension_inducing_drugs",
            type: "multicheck",
            label_en: "Drugs That May Cause Hypertension (6 Cs)",
            label_ar: "أدوية قد تسبب ارتفاع الضغط",
            items: [
              { id: "corticosteroids", label_en: "Corticosteroids", label_ar: "الكورتيكوستيرويدات", marked_if_negative: false },
              { id: "contraceptives", label_en: "Contraceptives", label_ar: "موانع الحمل", marked_if_negative: false },
              { id: "licorice", label_en: "Licorice", label_ar: "عرق السوس", marked_if_negative: false },
              { id: "amphetamine_thyroxine", label_en: "Amphetamine / thyroxine", label_ar: "الأمفيتامين / الثيروكسين", marked_if_negative: false },
              { id: "carbenoxolone", label_en: "Carbenoxolone", label_ar: "كاربينوكسولون", marked_if_negative: false },
              { id: "cold_drugs", label_en: "Anti-cold drugs", label_ar: "أدوية البرد", marked_if_negative: false },
              { id: "cyclosporine", label_en: "Cyclosporine", label_ar: "سيكلوسبورين", marked_if_negative: false }
            ]
          },
          { id: "drug_allergy", type: "checkbox", label_en: "Drug Allergy", label_ar: "حساسية دوائية", marked_if_negative: true },
          {
            id: "compliance",
            type: "radio",
            label_en: "Compliance with Medications",
            label_ar: "الالتزام بالدواء",
            options: [
              { value: "regular", label_en: "Regular", label_ar: "منتظم" },
              { value: "irregular", label_en: "Irregular", label_ar: "غير منتظم" },
              { value: "stopped", label_en: "Stopped", label_ar: "متوقف" }
            ]
          }
        ]
      },
      {
        id: "family_history",
        title_en: "Family History",
        title_ar: "التاريخ العائلي",
        questions: [
          {
            id: "family_cardiac_disease",
            type: "checkbox",
            label_en: "Family history of cardiac disease / hypertension / DM",
            label_ar: "تاريخ عائلي لأمراض القلوب / الضغط / السكري",
            marked_if_negative: true
          },
          {
            id: "family_thromboembolic",
            type: "multicheck",
            label_en: "Family History of Thrombo-embolic Disease",
            label_ar: "تاريخ عائلي للأمراض الخثارية الانصمامية",
            items: [
              { id: "thrombophlebitis", label_en: "Thrombophlebitis", label_ar: "التهاب وريدي خثاري", marked_if_negative: false },
              { id: "pulmonary_embolism", label_en: "Pulmonary embolism", label_ar: "انصمام رئوي", marked_if_negative: false },
              { id: "dvt", label_en: "Deep venous thrombosis", label_ar: "خثار وريدي عميق", marked_if_negative: false }
            ]
          },
          { id: "family_sudden_death", type: "checkbox", label_en: "Family history of sudden cardiac death", label_ar: "تاريخ عائلي للموت القلبي المفاجئ", marked_if_negative: false }
        ]
      },
      {
        id: "social_history",
        title_en: "Social History",
        title_ar: "التاريخ الاجتماعي",
        questions: [
          { id: "smoking", type: "checkbox", label_en: "Smoking", label_ar: "التدخين", marked_if_negative: true },
          { id: "smoking_pack_years", type: "number", label_en: "Smoking pack-years", label_ar: "مؤشر التدخين (عبوة-سنة)", unit_en: "pack-years", unit_ar: "عبوة-سنة" },
          { id: "alcohol", type: "checkbox", label_en: "Alcohol consumption", label_ar: "تناول الكحول", marked_if_negative: false },
          { id: "occupation_exposure", type: "text", label_en: "Occupation (relevant stress / exposure)", label_ar: "المهنة (الإجهاد / التعرض ذو الصلة)" },
          { id: "socioeconomic_state", type: "textarea", label_en: "Socioeconomic State", label_ar: "الحالة الاجتماعية والاقتصادية" }
        ]
      },
      {
        id: "systemic_review",
        title_en: "Systemic Review",
        title_ar: "المراجعة الجهازية",
        questions: [
          {
            id: "cardiovascular_symptoms",
            type: "multicheck",
            label_en: "Cardiovascular Symptoms",
            label_ar: "أعراض القلب والأوعية",
            items: [
              { id: "chest_pain", label_en: "Chest pain", label_ar: "ألم الصدر", marked_if_negative: true },
              { id: "palpitation", label_en: "Palpitation", label_ar: "الخفقان", marked_if_negative: false },
              { id: "syncope", label_en: "Syncope", label_ar: "الإغماء", marked_if_negative: false },
              { id: "claudication", label_en: "Intermittent claudication", label_ar: "العرج المتقطع", marked_if_negative: false }
            ]
          },
          {
            id: "respiratory_symptoms",
            type: "multicheck",
            label_en: "Respiratory Symptoms",
            label_ar: "أعراض الجهاز التنفسي",
            items: [
              { id: "dyspnea", label_en: "Dyspnea", label_ar: "ضيق التنفس", marked_if_negative: true },
              { id: "cough", label_en: "Cough", label_ar: "السعال", marked_if_negative: false },
              { id: "haemoptysis", label_en: "Haemoptysis", label_ar: "نفث الدم", marked_if_negative: true },
              { id: "wheeze", label_en: "Wheeze", label_ar: "أزيز", marked_if_negative: false }
            ]
          },
          {
            id: "git_symptoms",
            type: "multicheck",
            label_en: "GIT Symptoms",
            label_ar: "أعراض الجهاز الهضمي",
            items: [
              { id: "dyspepsia", label_en: "Dyspepsia", label_ar: "عسر الهضم", marked_if_negative: false },
              { id: "nausea_vomiting", label_en: "Nausea / vomiting", label_ar: "غثيان / قيء", marked_if_negative: false },
              { id: "abdominal_pain", label_en: "Abdominal pain", label_ar: "ألم بطني", marked_if_negative: false },
              { id: "jaundice", label_en: "Jaundice", label_ar: "اليرقان", marked_if_negative: false }
            ]
          },
          {
            id: "urinary_symptoms",
            type: "multicheck",
            label_en: "Urinary Symptoms",
            label_ar: "الأعراض البولية",
            items: [
              { id: "oliguria", label_en: "Oliguria", label_ar: "قلة البول", marked_if_negative: false },
              { id: "nocturia", label_en: "Nocturia", label_ar: "التبول الليلي", marked_if_negative: false },
              { id: "haematuria", label_en: "Haematuria", label_ar: "بيلة دموية", marked_if_negative: false }
            ]
          },
          {
            id: "neurological_symptoms",
            type: "multicheck",
            label_en: "Neurological Symptoms",
            label_ar: "الأعراض العصبية",
            items: [
              { id: "headache", label_en: "Headache", label_ar: "الصداع", marked_if_negative: false },
              { id: "dizziness", label_en: "Dizziness", label_ar: "الدوخة", marked_if_negative: false },
              { id: "limb_weakness", label_en: "Limb weakness (embolic)", label_ar: "ضعف الأطراف (انصمامي)", marked_if_negative: false },
              { id: "paraesthesia", label_en: "Paraesthesia", label_ar: "تنميل", marked_if_negative: false }
            ]
          },
          {
            id: "musculoskeletal_symptoms",
            type: "multicheck",
            label_en: "Musculoskeletal Symptoms",
            label_ar: "أعراض العضلات والمفاصل",
            items: [
              { id: "joint_pain", label_en: "Joint pain (rheumatic)", label_ar: "ألم المفاصل (روماتيزمي)", marked_if_negative: false },
              { id: "joint_swelling", label_en: "Joint swelling", label_ar: "تورم المفاصل", marked_if_negative: false },
              { id: "easy_fatigability", label_en: "Easy fatigability", label_ar: "سهولة الإرهاق", marked_if_negative: false }
            ]
          }
        ]
      },
      {
        id: "general_examination",
        title_en: "General Examination",
        title_ar: "الفحص العام",
        questions: [
          { id: "vital_signs_heading", type: "heading", label_en: "Vital Signs", label_ar: "العلامات الحيوية" },
          { id: "pulse_rate", type: "number", label_en: "Pulse Rate", label_ar: "معدل النبض", unit_en: "beats/min", unit_ar: "نبضة/دقيقة" },
          {
            id: "pulse_rhythm",
            type: "radio",
            label_en: "Pulse Rhythm",
            label_ar: "انتظام النبض",
            options: [
              { value: "regular", label_en: "Regular", label_ar: "منتظم" },
              { value: "irregularly_irregular", label_en: "Irregularly irregular (AF)", label_ar: "غير منتظم بشكل تام (رجفان أذيني)" },
              { value: "regularly_irregular", label_en: "Regularly irregular", label_ar: "غير منتظم بانتظام" }
            ]
          },
          {
            id: "pulse_volume",
            type: "radio",
            label_en: "Pulse Volume",
            label_ar: "حجم النبض",
            options: [
              { value: "normal", label_en: "Normal", label_ar: "طبيعي" },
              { value: "large", label_en: "Large (AR / hyperdynamic)", label_ar: "كبير (قلس أبهري / فرط ديناميكي)" },
              { value: "small", label_en: "Small (AS / heart failure)", label_ar: "صغير (تضيق أبهري / فشل قلبي)" }
            ]
          },
          {
            id: "pulse_special_character",
            type: "text",
            label_en: "Pulse Special Character",
            label_ar: "الصفة الخاصة للنبض",
            hint_en: "e.g. water-hammer (AR), pulsus deficit > 10/min (AF), plateau (AS)",
            hint_ar: "مثل: نبض المطرقة المائية، عجز النبض، النبض المرتفع البطيء"
          },
          { id: "blood_pressure_systolic", type: "number", label_en: "Blood Pressure — Systolic", label_ar: "ضغط الدم — الانقباضي", unit_en: "mmHg", unit_ar: "ملم زئبق" },
          { id: "blood_pressure_diastolic", type: "number", label_en: "Blood Pressure — Diastolic", label_ar: "ضغط الدم — الانبساطي", unit_en: "mmHg", unit_ar: "ملم زئبق" },
          { id: "temperature", type: "number", label_en: "Temperature", label_ar: "الدرجة الحرارة", unit_en: "°C", unit_ar: "°م" },
          { id: "respiratory_rate", type: "number", label_en: "Respiratory Rate", label_ar: "معدل التنفس", unit_en: "breaths/min", unit_ar: "نفس/دقيقة" },
          { id: "oxygen_saturation", type: "number", label_en: "O₂ Saturation", label_ar: "تشبع الأكسجين", unit_en: "%", unit_ar: "%" },
          {
            id: "general_condition",
            type: "radio",
            label_en: "General Condition",
            label_ar: "الحالة العامة",
            options: [
              { value: "good", label_en: "Good", label_ar: "جيدة" },
              { value: "fair", label_en: "Fair", label_ar: "متوسطة" },
              { value: "poor", label_en: "Poor", label_ar: "سيئة" }
            ]
          },
          { id: "general_overview_heading", type: "heading", label_en: "General Overview", label_ar: "النظرة العامة" },
          {
            id: "consciousness",
            type: "radio",
            label_en: "Consciousness / Mentality",
            label_ar: "الوعي / الحالة العقلية",
            options: [
              { value: "conscious", label_en: "Conscious and oriented", label_ar: "واعٍ ومدرك" },
              { value: "confused", label_en: "Confused", label_ar: "مشوش" },
              { value: "unconscious", label_en: "Unconscious", label_ar: "فاقد للوعي" }
            ]
          },
          {
            id: "built",
            type: "radio",
            label_en: "Built",
            label_ar: "البنية",
            options: [
              { value: "average", label_en: "Average", label_ar: "متوسطة" },
              { value: "overweight", label_en: "Overweight", label_ar: "زائدة" },
              { value: "underweight", label_en: "Underweight", label_ar: "ضعيفة" }
            ]
          },
          {
            id: "decubitus",
            type: "text",
            label_en: "Decubitus / Position",
            label_ar: "وضع الاستلقاء",
            hint_en: "Orthopnea, squatting, praying position",
            hint_ar: "وضع الجلوس، القرفصاء، وضع السجود"
          },
          {
            id: "general_appearance",
            type: "multicheck",
            label_en: "General Appearance Findings",
            label_ar: "علامات الفحص العام",
            items: [
              { id: "pallor", label_en: "Pallor", label_ar: "الشحوب", marked_if_negative: true },
              { id: "jaundice", label_en: "Jaundice", label_ar: "اليرقان", marked_if_negative: true },
              { id: "cyanosis", label_en: "Cyanosis (central / peripheral / differential)", label_ar: "الزرقة (مركزية / طرفية / تفاضلية)", marked_if_negative: true },
              { id: "clubbing", label_en: "Clubbing", label_ar: "تعجر الأصابع", marked_if_negative: true },
              { id: "oedema", label_en: "Lower limb oedema", label_ar: "وذمة الطرفين السفليين", marked_if_negative: true },
              { id: "lymphadenopathy", label_en: "Lymphadenopathy", label_ar: "اعتلال العقد اللمفية", marked_if_negative: true },
              { id: "dehydration", label_en: "Dehydration", label_ar: "الجفاف", marked_if_negative: true }
            ]
          },
          {
            id: "neck_veins",
            type: "radio",
            label_en: "Neck Veins (JVP)",
            label_ar: "أوردة الرقبة (الضغط الوريدي الوداجي)",
            options: [
              { value: "normal", label_en: "Non-congested, pulsating with systolic collapse", label_ar: "غير محتقنة، نابضة مع انهيار انقباضي" },
              { value: "congested_pulsating", label_en: "Congested and pulsating (RVF / pericardial disease)", label_ar: "محتقنة ونابضة (فشل بطين أيمن / مرض تاموري)" },
              { value: "congested_non_pulsating", label_en: "Congested and non-pulsating (SVC obstruction)", label_ar: "محتقنة وغير نابضة (انسداد الوريد الأجوف العلوي)" }
            ]
          }
        ]
      },
      {
        id: "cardiovascular_examination",
        title_en: "Cardiovascular Examination",
        title_ar: "فحص القلب والأوعية",
        questions: [
          { id: "inspection_heading", type: "heading", label_en: "Inspection", label_ar: "الفحص بالنظر" },
          {
            id: "inspection_findings",
            type: "multicheck",
            label_en: "Inspection Findings",
            label_ar: "نتائج الفحص بالنظر",
            items: [
              { id: "precordial_bulge", label_en: "Precordial bulge", label_ar: "بروز ما قبل القلب", marked_if_negative: false },
              { id: "operation_scar", label_en: "Scar of previous operation (sternotomy)", label_ar: "ندبة عملية سابقة", marked_if_negative: false },
              { id: "dilated_veins", label_en: "Dilated veins (SVC obstruction)", label_ar: "أوردة متمددة", marked_if_negative: false },
              { id: "pigmentation", label_en: "Pigmentation", label_ar: "تصبغ", marked_if_negative: false },
              { id: "visible_pulsations", label_en: "Visible pulsations", label_ar: "نبضات مرئية", marked_if_negative: false }
            ]
          },
          { id: "palpation_heading", type: "heading", label_en: "Palpation", label_ar: "الفحص بالجس" },
          {
            id: "apex_beat_site",
            type: "text",
            label_en: "Apex Beat Site",
            label_ar: "موقع نبضة القمة",
            hint_en: "Normally: 5th intercostal space, midclavicular line",
            hint_ar: "طبيعياً: المسافة الوربية الخامسة، الخط الترقوي المتوسط"
          },
          {
            id: "apex_beat_character",
            type: "radio",
            label_en: "Apex Beat Character",
            label_ar: "صفة نبضة القمة",
            options: [
              { value: "normal", label_en: "Normal (gentle, non-sustained tap)", label_ar: "طبيعية" },
              { value: "heaving", label_en: "Heaving (forcible, sustained — pressure overload)", label_ar: "رافعة (ضغط زائد)" },
              { value: "hyperdynamic", label_en: "Hyperdynamic (forcible, non-sustained — volume overload)", label_ar: "مفرطة الحركة (حجم زائد)" },
              { value: "hypodynamic", label_en: "Hypodynamic (weak — myocardial disease)", label_ar: "ضعيفة (مرض عضلة القلب)" }
            ]
          },
          {
            id: "palpable_pulsations",
            type: "multicheck",
            label_en: "Other Pulsations and Palpable Findings",
            label_ar: "نبضات أخرى ونتائج الجس",
            items: [
              { id: "left_parasternal_heave", label_en: "Left parasternal heave (RV hypertrophy / PH)", label_ar: "رفعة جانب القص الأيسر (تضخم بطين أيمن)", marked_if_negative: true },
              { id: "epigastric_pulsation", label_en: "Epigastric pulsation", label_ar: "نبض شرسوفي", marked_if_negative: false },
              { id: "suprasternal_pulsation", label_en: "Suprasternal pulsation", label_ar: "نبض فوق القص", marked_if_negative: false },
              { id: "thrill", label_en: "Thrill (palpable murmur)", label_ar: "رجفة (لغط ملموس)", marked_if_negative: true },
              { id: "palpable_sounds", label_en: "Palpable heart sounds", label_ar: "أصوات قلبية ملموسة", marked_if_negative: false }
            ]
          },
          { id: "percussion_heading", type: "heading", label_en: "Percussion", label_ar: "الفحص بالقرع" },
          {
            id: "percussion_findings",
            type: "textarea",
            label_en: "Percussion Findings",
            label_ar: "نتائج القرع",
            hint_en: "Dullness: lower sternum (RV), 2nd left space (pulmonary artery), 2nd right space (aorta)",
            hint_ar: "البلادة على القص السفلي والمسافات الوربية (البطين الأيمن، الشريان الرئوي، الأبهر)"
          },
          { id: "auscultation_heading", type: "heading", label_en: "Auscultation", label_ar: "الفحص بالسماع" },
          { id: "heart_sounds", type: "textarea", label_en: "Heart Sounds (S1, S2, added sounds S3 / S4)", label_ar: "أصوات القلب (الأول، الثاني، أصوات إضافية S3 / S4)" },
          { id: "murmurs", type: "textarea", label_en: "Murmurs (timing, site, radiation, character, grade)", label_ar: "اللغط القلبي (التوقيت، الموقع، الانتشار، الصفة، الدرجة)" },
          { id: "pericardial_rub", type: "checkbox", label_en: "Pericardial friction rub", label_ar: "احتكاك التامور", marked_if_negative: true },
          { id: "other_systems_heading", type: "heading", label_en: "Examination of Other Systems", label_ar: "فحص الأجهزة الأخرى" },
          {
            id: "chest_examination",
            type: "multicheck",
            label_en: "Chest Findings",
            label_ar: "نتائج فحص الصدر",
            items: [
              { id: "basal_crepitations", label_en: "Basal crepitations", label_ar: "خراخر قاعدية", marked_if_negative: true },
              { id: "pleural_effusion", label_en: "Pleural effusion", label_ar: "انصباب جنبي", marked_if_negative: true },
              { id: "chest_infection", label_en: "Chest infection signs", label_ar: "علامات التهاب صدري", marked_if_negative: false }
            ]
          },
          {
            id: "abdominal_examination",
            type: "multicheck",
            label_en: "Abdominal Findings",
            label_ar: "نتائج فحص البطن",
            items: [
              { id: "tender_hepatomegaly", label_en: "Tender hepatomegaly (congested liver)", label_ar: "تضخم كبدي مؤلم (احتقان)", marked_if_negative: true },
              { id: "pulsating_liver", label_en: "Pulsating liver (tricuspid regurgitation)", label_ar: "كبد نابض (قلس ثلاثي الشرفات)", marked_if_negative: false },
              { id: "splenomegaly", label_en: "Splenomegaly (infective endocarditis)", label_ar: "تضخم الطحال (التهاب الشغاف)", marked_if_negative: false },
              { id: "ascites", label_en: "Ascites", label_ar: "الاستسقاء", marked_if_negative: true }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "chest_respiratory",
    "specialty": "internal",
    "icon": "🫁",
    "name_en": "Chest & Respiratory",
    "name_ar": "الجهاز التنفسي",
    "sections": [
      {
        "id": "personal_history",
        "title_en": "Personal History",
        "title_ar": "التاريخ الشخصي",
        "questions": [
          { "id": "patient_name", "type": "text", "label_en": "Name", "label_ar": "الاسم", "required": true },
          {
            "id": "age", "type": "number", "label_en": "Age", "label_ar": "العمر",
            "unit_en": "years", "unit_ar": "سنة", "required": true,
            "hint_en": "TB common in children & young adults; cor-pulmonale & bronchogenic carcinoma in old age",
            "hint_ar": "السل شائع في الأطفال والشباب؛ القلب الرئوي وسرطان القصبات في كبار السن"
          },
          {
            "id": "sex", "type": "radio", "label_en": "Sex", "label_ar": "الجنس", "required": true,
            "options": [
              { "value": "male", "label_en": "Male", "label_ar": "ذكر" },
              { "value": "female", "label_en": "Female", "label_ar": "أنثى" }
            ],
            "hint_en": "Bronchogenic carcinoma commoner in males; adenocarcinoma in females",
            "hint_ar": "سرطان القصبات أكثر في الذكور؛ الغدي في الإناث"
          },
          {
            "id": "occupation", "type": "text", "label_en": "Occupation", "label_ar": "المهنة",
            "hint_en": "Asbestosis (IPF, carcinoma, mesothelioma); farmers (bilharziasis, farmer's lung)",
            "hint_ar": "الأسبستوس؛ المزارعون (البلهارسيا، رئة المزارع)"
          },
          {
            "id": "marital_state", "type": "radio", "label_en": "Marital State", "label_ar": "الحالة الاجتماعية",
            "options": [
              { "value": "single", "label_en": "Single", "label_ar": "أعزل" },
              { "value": "married", "label_en": "Married", "label_ar": "متزوج" },
              { "value": "divorced", "label_en": "Divorced", "label_ar": "مطلق" },
              { "value": "widowed", "label_en": "Widowed", "label_ar": "أرمل" }
            ]
          },
          {
            "id": "residence", "type": "radio", "label_en": "Residence", "label_ar": "محل الإقامة",
            "options": [
              { "value": "urban", "label_en": "Urban", "label_ar": "حضر" },
              { "value": "rural", "label_en": "Rural", "label_ar": "ريف" }
            ],
            "hint_en": "May reflect socioeconomic condition (e.g. Helwan → interstitial pulmonary fibrosis)",
            "hint_ar": "قد يعكس الحالة الاجتماعية الاقتصادية"
          },
          {
            "id": "special_habits", "type": "textarea", "label_en": "Special Habits (smoking index, etc.)", "label_ar": "العادات الخاصة (مؤشر التدخين)",
            "hint_en": "COPD, bronchial asthma, cancer lip/tongue, post-operative pneumonia",
            "hint_ar": "مرض الانسداد الرئوي المزمن، الربو، سرطان الشفة واللسان"
          },
          { "id": "menstrual_history", "type": "textarea", "label_en": "Menstrual History (if female)", "label_ar": "التاريخ الطمثي (إن وجد)" }
        ]
      },
      {
        "id": "presenting_complaint",
        "title_en": "Presenting Complaint",
        "title_ar": "الشكوى الرئيسية",
        "questions": [
          {
            "id": "complaint", "type": "textarea",
            "label_en": "Complaint (in patient's own words) + duration",
            "label_ar": "الشكوى (بكلمات المريض) + المدة",
            "required": true,
            "hint_en": "Most recent and most important complaint, brief (e.g. shortness of breath of 1 week duration)",
            "hint_ar": "أحدث وأهم شكوى، بإيجاز (مثل: ضيق نفس منذ أسبوع)"
          }
        ]
      },
      {
        "id": "hopi",
        "title_en": "History of Presenting Illness",
        "title_ar": "تاريخ المرض الحالي",
        "questions": [
          {
            "id": "onset", "type": "radio", "label_en": "Onset", "label_ar": "البداية",
            "options": [
              { "value": "sudden", "label_en": "Sudden", "label_ar": "مفاجئة" },
              { "value": "gradual", "label_en": "Gradual", "label_ar": "تدريجية" }
            ]
          },
          {
            "id": "course", "type": "radio", "label_en": "Course", "label_ar": "السير",
            "options": [
              { "value": "progressive", "label_en": "Progressive", "label_ar": "تقدمي" },
              { "value": "paroxysmal", "label_en": "Paroxysmal / Episodic", "label_ar": "نوبي / متقطع" },
              { "value": "stationary", "label_en": "Stationary", "label_ar": "ثابت" },
              { "value": "regressive", "label_en": "Regressive", "label_ar": "متراجع" }
            ]
          },
          { "id": "duration_value", "type": "number", "label_en": "Duration", "label_ar": "المدة", "unit_en": "duration", "unit_ar": "مدة", "required": true },
          {
            "id": "duration_unit", "type": "radio", "label_en": "Duration Unit", "label_ar": "وحدة المدة", "required": true,
            "options": [
              { "value": "days", "label_en": "Days", "label_ar": "أيام" },
              { "value": "weeks", "label_en": "Weeks", "label_ar": "أسابيع" },
              { "value": "months", "label_en": "Months", "label_ar": "أشهر" },
              { "value": "years", "label_en": "Years", "label_ar": "سنوات" }
            ]
          },
          { "id": "aggravating_factors", "type": "textarea", "label_en": "Aggravating Factors (what increases)", "label_ar": "العوامل المهيجة (ما يزيد)" },
          { "id": "relieving_factors", "type": "textarea", "label_en": "Relieving Factors (what decreases)", "label_ar": "العوامل المخففة (ما يقلل)" },
          { "id": "effect_of_treatment", "type": "textarea", "label_en": "Effect of Treatment", "label_ar": "أثر العلاج" },
          { "id": "date_last_attack", "type": "text", "label_en": "Date / Description of Last Attack", "label_ar": "تاريخ / وصف آخر نوبة" },
          { "id": "cough_heading", "type": "heading", "label_en": "Cough Analysis", "label_ar": "تحليل السعال" },
          {
            "id": "cough", "type": "checkbox", "label_en": "Cough present", "label_ar": "وجود سعال", "marked_if_negative": true
          },
          {
            "id": "cough_diurnal", "type": "radio", "label_en": "Cough Diurnal Variation", "label_ar": "التغير اليومي للسعال",
            "options": [
              { "value": "early_morning", "label_en": "Early morning (bronchiectasis & BA)", "label_ar": "الصباح الباكر (توسع القصبات والربو)" },
              { "value": "nocturnal", "label_en": "Nocturnal (cardiac)", "label_ar": "ليلي (قلبي)" },
              { "value": "all_day", "label_en": "All over the day (chest infection)", "label_ar": "طوال اليوم (التهاب صدري)" },
              { "value": "seasonal", "label_en": "Seasonal (allergy)", "label_ar": "موسمي (تحسسي)" }
            ]
          },
          {
            "id": "cough_character", "type": "radio", "label_en": "Cough Character", "label_ar": "صفة السعال",
            "options": [
              { "value": "brassy", "label_en": "Brassy (tracheal/mediastinal)", "label_ar": "نحاسي (قصبي/منصفي)" },
              { "value": "bovine", "label_en": "Bovine (Lt recurrent laryngeal nerve palsy)", "label_ar": "بقري (شلل العصب الحنجري الراجع)" },
              { "value": "barking", "label_en": "Barking (hysterical)", "label_ar": "نباحي (هستيري)" },
              { "value": "paroxysmal", "label_en": "Paroxysmal (whooping/cavity/BA)", "label_ar": "نوبي (سعال ديكي/تجويف/ربو)" }
            ]
          },
          {
            "id": "cough_productive", "type": "radio", "label_en": "Productive vs Dry", "label_ar": "منتج أو جاف",
            "options": [
              { "value": "productive", "label_en": "Productive", "label_ar": "منتج" },
              { "value": "dry", "label_en": "Dry", "label_ar": "جاف" }
            ]
          },
          { "id": "expectoration_heading", "type": "heading", "label_en": "Expectoration Analysis", "label_ar": "تحليل القشع" },
          { "id": "expectoration", "type": "checkbox", "label_en": "Expectoration present", "label_ar": "وجود قشع", "marked_if_negative": true },
          { "id": "expectoration_amount", "type": "number", "label_en": "Amount per day", "label_ar": "الكمية يومياً", "unit_en": "cc (>250 = profuse)", "unit_ar": "سم3 (>250 غزير)" },
          {
            "id": "expectoration_postural", "type": "radio", "label_en": "Postural Variation", "label_ar": "التغير الوضعي",
            "options": [
              { "value": "positive", "label_en": "Positive (SLS)", "label_ar": "موجب (metlaزمة الرئة القيحية)" },
              { "value": "negative", "label_en": "Negative", "label_ar": "سالب" }
            ]
          },
          {
            "id": "expectoration_type", "type": "select", "label_en": "Type / Color of Sputum", "label_ar": "نوع / لون القشع",
            "options": [
              { "value": "frothy", "label_en": "Frothy/serous (pulmonary oedema)", "label_ar": "رغوي/مصلي (وذمة رئوية)" },
              { "value": "mucoid", "label_en": "Mucoid (chronic bronchitis, BA)", "label_ar": "مخاطي (التهاب قصبي مزمن، ربو)" },
              { "value": "mucopurulent", "label_en": "Purulent / mucopurulent (abscess, bronchiectasis)", "label_ar": "قيحي / مخاطي قيحي (خراج، توسع قصبات)" },
              { "value": "rusty", "label_en": "Rusty / golden brown (pneumonia)", "label_ar": "صدئ / بني ذهبي (التهاب رئوي)" },
              { "value": "chocolate", "label_en": "Chocolate (amebic abscess)", "label_ar": "شوكولاتي (خراج أميبي)" },
              { "value": "red_currant", "label_en": "Red-current jelly (Klebsiella / carcinoma)", "label_ar": "هلام الكشمش (كليبسيلا / سرطان)" },
              { "value": "caseous", "label_en": "Caseous / nummular (TB)", "label_ar": "جبني / نقدي (سل)" },
              { "value": "black", "label_en": "Black (carbon inhalation)", "label_ar": "أسود (استنشاق الكربون)" }
            ]
          },
          { "id": "expectoration_odour", "type": "checkbox", "label_en": "Foetid (bad) odour (anaerobic/fungal)", "label_ar": "رائحة كريهة (لاهوائي/فطري)" },
          { "id": "haemoptysis_heading", "type": "heading", "label_en": "Haemoptysis", "label_ar": "نفث الدم" },
          { "id": "haemoptysis", "type": "checkbox", "label_en": "Haemoptysis (coughing of blood)", "label_ar": "نفث الدم", "marked_if_negative": true },
          {
            "id": "haemoptysis_type", "type": "select", "label_en": "Type of Haemoptysis", "label_ar": "نوع نفث الدم",
            "options": [
              { "value": "frothy_blood_tinged", "label_en": "Frothy blood-tinged (acute pulmonary oedema)", "label_ar": "رغوي مدمى (وذمة رئوية حادة)" },
              { "value": "blood_streaked", "label_en": "Blood streaked/stained (acute infection, carcinoma)", "label_ar": "مخطط بالدم (عدوى حادة، سرطان)" },
              { "value": "red_currant_jelly", "label_en": "Red-current jelly (Klebsiella)", "label_ar": "هلام الكشمش (كليبسيلا)" },
              { "value": "rusty", "label_en": "Rusty/golden brown (lobar pneumonia)", "label_ar": "صدئ (التهاب رئوي فصي)" },
              { "value": "frank", "label_en": "Frank blood (TB, PE, MS, bronchiectasis sicca)", "label_ar": "دم صريح (سل، انصمام رئوي)" }
            ]
          },
          { "id": "haemoptysis_blood_transfusion", "type": "checkbox", "label_en": "History of blood transfusion (severe haemoptysis)", "label_ar": "تاريخ نقل دم (نفث دم شديد)" },
          { "id": "dyspnea_heading", "type": "heading", "label_en": "Dyspnea (Shortness of Breath)", "label_ar": "ضيق النفس" },
          { "id": "dyspnea", "type": "checkbox", "label_en": "Dyspnea present", "label_ar": "وجود ضيق نفس", "marked_if_negative": true },
          {
            "id": "dyspnea_type", "type": "radio", "label_en": "Dyspnea Type", "label_ar": "نوع ضيق النفس",
            "options": [
              { "value": "obstructive", "label_en": "Obstructive (COPD)", "label_ar": "انسدادي (مرض الانسداد الرئوي)" },
              { "value": "restrictive", "label_en": "Restrictive (fibrosis)", "label_ar": "تقييدي (تليف)" }
            ]
          },
          {
            "id": "dyspnea_pattern", "type": "radio", "label_en": "Dyspnea Pattern", "label_ar": "نمط ضيق النفس",
            "options": [
              { "value": "exertional", "label_en": "Exertional", "label_ar": "عند المجهود" },
              { "value": "paroxysmal", "label_en": "Paroxysmal", "label_ar": "نوبي" },
              { "value": "acute", "label_en": "Acute", "label_ar": "حاد" },
              { "value": "orthopnea", "label_en": "Orthopnea (cardiac)", "label_ar": "ضيق نفس عند الاستلقاء (قلبي)" }
            ]
          },
          { "id": "wheeze_heading", "type": "heading", "label_en": "Wheeze", "label_ar": "الأزيز" },
          { "id": "wheeze", "type": "checkbox", "label_en": "Wheeze present", "label_ar": "وجود أزيز", "marked_if_negative": true },
          {
            "id": "wheeze_pattern", "type": "radio", "label_en": "Wheeze Pattern", "label_ar": "نمط الأزيز",
            "options": [
              { "value": "continuous", "label_en": "Continuous (asthmatic bronchitis - irreversible)", "label_ar": "مستمر (التهاب قصبي ربوي - غير عكوس)" },
              { "value": "paroxysmal", "label_en": "Paroxysmal (bronchial asthma - reversible)", "label_ar": "نوبي (ربو قصبي - عكوس)" }
            ]
          },
          { "id": "chest_pain_heading", "type": "heading", "label_en": "Chest Pain", "label_ar": "ألم الصدر" },
          { "id": "chest_pain", "type": "checkbox", "label_en": "Chest pain present", "label_ar": "وجود ألم بالصدر", "marked_if_negative": true },
          {
            "id": "chest_pain_character", "type": "radio", "label_en": "Pain Character", "label_ar": "صفة الألم",
            "options": [
              { "value": "stitching", "label_en": "Stitching (pleurisy)", "label_ar": "وخزي (التهاب الجنبة)" },
              { "value": "dull_aching", "label_en": "Dull aching (pleural effusion)", "label_ar": "ألم خفيف (انصباب جنبي)" },
              { "value": "throbbing", "label_en": "Throbbing (empyema)", "label_ar": "نابض (دبيلة)" },
              { "value": "tearing", "label_en": "Tearing (pneumothorax)", "label_ar": "ممزق (استرواح الصدر)" }
            ]
          },
          {
            "id": "pleuritic_features", "type": "multicheck", "label_en": "Pleuritic Pain Features", "label_ar": "صفات الألم الجنبي",
            "items": [
              { "id": "increase_breathing", "label_en": "Increased with breathing/cough/straining", "label_ar": "يزداد مع التنفس/السعال/الإجهاد" },
              { "id": "relieved_lying_diseased", "label_en": "Relieved by lying on diseased side", "label_ar": "يخف بالاستلقاء على الجانب المريض" },
              { "id": "localized", "label_en": "Localized", "label_ar": "موضعي" }
            ]
          },
          { "id": "constitutional_heading", "type": "heading", "label_en": "Constitutional (Toxic) Symptoms", "label_ar": "الأعراض العامة (السمية)" },
          {
            "id": "constitutional_symptoms", "type": "multicheck", "label_en": "Constitutional Symptoms", "label_ar": "الأعراض العامة",
            "items": [
              { "id": "anorexia", "label_en": "Anorexia", "label_ar": "فقدان الشهية" },
              { "id": "weight_loss", "label_en": "Loss of weight (SLS & TB)", "label_ar": "نقص الوزن (السل/الرئة القيحية)" },
              { "id": "fever", "label_en": "Fever", "label_ar": "الحمى", "marked_if_negative": true },
              { "id": "sweating", "label_en": "Night sweating", "label_ar": "تعرق ليلي" }
            ]
          },
          { "id": "cyanosis_history", "type": "checkbox", "label_en": "Cyanosis", "label_ar": "الزرقة", "marked_if_negative": true },
          {
            "id": "systemic_venous_congestion", "type": "multicheck", "label_en": "Systemic Venous Congestion (Cor-pulmonale)", "label_ar": "الاحتقان الوريدي الجهازي (القلب الرئوي)",
            "items": [
              { "id": "ll_oedema", "label_en": "Lower limb oedema", "label_ar": "وذمة الطرفين السفليين", "marked_if_negative": true },
              { "id": "jaundice", "label_en": "Jaundice", "label_ar": "اليرقان" }
            ]
          },
          {
            "id": "pressure_manifestations", "type": "multicheck", "label_en": "Pressure Manifestations (Mediastinal Syndrome)", "label_ar": "أعراض الضغط (متلازمة المنصف)",
            "items": [
              { "id": "brassy_cough", "label_en": "Brassy cough", "label_ar": "سعال نحاسي" },
              { "id": "hoarseness", "label_en": "Hoarseness of voice", "label_ar": "بحة الصوت" },
              { "id": "dysphagia", "label_en": "Dysphagia", "label_ar": "عسر البلع" },
              { "id": "svc_obstruction", "label_en": "SVC obstruction (face/UL congestion)", "label_ar": "انسداد الوريد الأجوف العلوي" }
            ]
          }
        ]
      },
      {
        "id": "past_medical_history",
        "title_en": "Past Medical History",
        "title_ar": "التاريخ المرضي السابق",
        "questions": [
          { "id": "tuberculosis", "type": "checkbox", "label_en": "Tuberculosis / chest infection", "label_ar": "السل / التهاب صدري", "marked_if_negative": true },
          { "id": "asthma_allergy", "type": "checkbox", "label_en": "Asthma / allergy", "label_ar": "الربو / التحسس", "marked_if_negative": true },
          { "id": "diabetes_mellitus", "type": "checkbox", "label_en": "Diabetes mellitus (TB follows DM as its shadow)", "label_ar": "داء السكري", "marked_if_negative": true },
          { "id": "hypertension", "type": "checkbox", "label_en": "Hypertension", "label_ar": "ارتفاع ضغط الدم", "marked_if_negative": true },
          { "id": "bilharziasis", "type": "checkbox", "label_en": "Bilharziasis", "label_ar": "البلهارسيا" },
          { "id": "chest_trauma", "type": "checkbox", "label_en": "Chest trauma", "label_ar": "إصابة الصدر" },
          { "id": "anaesthesia_coma", "type": "checkbox", "label_en": "History of anaesthesia or coma (aspiration)", "label_ar": "تخدير أو غيبوبة (شفط)" },
          { "id": "previous_operations", "type": "textarea", "label_en": "Previous operations / admissions", "label_ar": "العمليات / حالات الدخول السابقة" }
        ]
      },
      {
        "id": "drug_history",
        "title_en": "Drug History",
        "title_ar": "تاريخ الأدوية",
        "questions": [
          { "id": "current_medications", "type": "textarea", "label_en": "Current Medications", "label_ar": "الأدوية الحالية" },
          { "id": "bronchodilators", "type": "checkbox", "label_en": "Bronchodilators", "label_ar": "موسعات القصبات" },
          { "id": "steroids", "type": "checkbox", "label_en": "Steroids (inhaled / systemic)", "label_ar": "الكورتيزون (استنشاقي / جهازي)" },
          { "id": "ace_inhibitors", "type": "checkbox", "label_en": "ACE inhibitors (drug-induced cough)", "label_ar": "مثبطات الإنزيم المحول (سعال دوائي)" },
          { "id": "antibiotics", "type": "checkbox", "label_en": "Antibiotics", "label_ar": "مضادات حيوية" },
          { "id": "anti_tb_drugs", "type": "checkbox", "label_en": "Anti-TB drugs (prolonged multiple drugs)", "label_ar": "أدوية السل (متعددة طويلة الأمد)" },
          { "id": "drug_allergy", "type": "checkbox", "label_en": "Drug allergy", "label_ar": "حساسية دوائية", "marked_if_negative": true },
          {
            "id": "compliance", "type": "radio", "label_en": "Compliance", "label_ar": "اللتزام بالدواء",
            "options": [
              { "value": "regular", "label_en": "Regular", "label_ar": "منتظم" },
              { "value": "irregular", "label_en": "Irregular", "label_ar": "غير منتظم" },
              { "value": "stopped", "label_en": "Stopped", "label_ar": "متوقف" }
            ]
          }
        ]
      },
      {
        "id": "family_history",
        "title_en": "Family History",
        "title_ar": "التاريخ العائلي",
        "questions": [
          { "id": "family_tuberculosis", "type": "checkbox", "label_en": "Family history of TB / similar attack", "label_ar": "تاريخ عائلي للسل / نوبة مشابهة", "marked_if_negative": true },
          { "id": "family_asthma_allergy", "type": "checkbox", "label_en": "Family history of asthma / allergy", "label_ar": "تاريخ عائلي للربو / التحسس" },
          { "id": "family_diabetes", "type": "checkbox", "label_en": "Family history of DM", "label_ar": "تاريخ عائلي للسكري" }
        ]
      },
      {
        "id": "social_history",
        "title_en": "Social History",
        "title_ar": "التاريخ الاجتماعي",
        "questions": [
          { "id": "smoking", "type": "checkbox", "label_en": "Smoking", "label_ar": "التدخين", "marked_if_negative": true },
          { "id": "smoking_pack_years", "type": "number", "label_en": "Smoking pack-years", "label_ar": "مؤشر التدخين (عبوة-سنة)", "unit_en": "pack-years", "unit_ar": "عبوة-سنة" },
          { "id": "alcohol", "type": "checkbox", "label_en": "Alcohol consumption", "label_ar": "تناول الكحول" },
          {
            "id": "occupation_exposure", "type": "text", "label_en": "Occupation (relevant exposure)", "label_ar": "المهنة (التعرض ذو الصلة)",
            "hint_en": "Asbestos, farming, dust, mining",
            "hint_ar": "الأسبستوس، الزراعة، الغبار، التعدين"
          },
          {
            "id": "residence_type", "type": "radio", "label_en": "Residence", "label_ar": "محل الإقامة",
            "options": [
              { "value": "urban", "label_en": "Urban", "label_ar": "حضر" },
              { "value": "rural", "label_en": "Rural", "label_ar": "ريف" }
            ]
          },
          { "id": "socioeconomic_state", "type": "textarea", "label_en": "Socioeconomic state", "label_ar": "الحالة الاجتماعية والاقتصادية" }
        ]
      },
      {
        "id": "systemic_review",
        "title_en": "Systemic Review",
        "title_ar": "المراجعة الجهازية",
        "questions": [
          {
            "id": "cardiovascular_symptoms", "type": "multicheck", "label_en": "Cardiovascular Symptoms", "label_ar": "أعراض القلب والأوعية",
            "items": [
              { "id": "chest_pain", "label_en": "Chest pain", "label_ar": "ألم الصدر", "marked_if_negative": true },
              { "id": "palpitation", "label_en": "Palpitation", "label_ar": "الخفقان" },
              { "id": "ll_oedema", "label_en": "Lower limb oedema", "label_ar": "وذمة الطرفين السفليين" },
              { "id": "syncope", "label_en": "Syncope (low cardiac output)", "label_ar": "الإغماء" }
            ]
          },
          {
            "id": "respiratory_symptoms", "type": "multicheck", "label_en": "Respiratory Symptoms", "label_ar": "أعراض الجهاز التنفسي",
            "items": [
              { "id": "cough", "label_en": "Cough", "label_ar": "السعال" },
              { "id": "expectoration", "label_en": "Expectoration", "label_ar": "القشع" },
              { "id": "haemoptysis", "label_en": "Haemoptysis", "label_ar": "نفث الدم", "marked_if_negative": true },
              { "id": "dyspnea", "label_en": "Dyspnea", "label_ar": "ضيق النفس", "marked_if_negative": true },
              { "id": "wheeze", "label_en": "Wheeze", "label_ar": "الأزيز" }
            ]
          },
          {
            "id": "git_symptoms", "type": "multicheck", "label_en": "GIT Symptoms", "label_ar": "أعراض الجهاز الهضمي",
            "items": [
              { "id": "anorexia", "label_en": "Anorexia", "label_ar": "فقدان الشهية" },
              { "id": "nausea_vomiting", "label_en": "Nausea / vomiting", "label_ar": "غثيان / قيء" },
              { "id": "jaundice", "label_en": "Jaundice", "label_ar": "اليرقان" },
              { "id": "abdominal_pain", "label_en": "Abdominal pain", "label_ar": "ألم بطني" }
            ]
          },
          {
            "id": "urinary_symptoms", "type": "multicheck", "label_en": "Urinary Symptoms", "label_ar": "الأعراض البولية",
            "items": [
              { "id": "oliguria", "label_en": "Oliguria", "label_ar": "قلة البول" },
              { "id": "frothy_urine", "label_en": "Frothy urine (nephrotic/amyloidosis)", "label_ar": "بول رغوي (نفروزي/نشواني)" }
            ]
          },
          {
            "id": "neurological_symptoms", "type": "multicheck", "label_en": "Neurological Symptoms", "label_ar": "الأعراض العصبية",
            "items": [
              { "id": "headache", "label_en": "Headache (CO2 retention)", "label_ar": "الصداع (احتباس CO2)" },
              { "id": "drowsiness", "label_en": "Drowsiness / disturbed conscious level", "label_ar": "النعاس / اضطراب الوعي" },
              { "id": "motor_sensory", "label_en": "Motor / sensory affection", "label_ar": "اضطراب حركي / حسي" }
            ]
          },
          {
            "id": "musculoskeletal_symptoms", "type": "multicheck", "label_en": "Musculoskeletal Symptoms", "label_ar": "أعراض العضلات والمفاصل",
            "items": [
              { "id": "muscle_pain", "label_en": "Chest muscle pain (cough complication)", "label_ar": "ألم عضلي صدري" },
              { "id": "joint_pain", "label_en": "Joint pain", "label_ar": "ألم المفاصل" },
              { "id": "easy_fatigability", "label_en": "Easy fatigability", "label_ar": "سهولة الإرهاق" }
            ]
          }
        ]
      },
      {
        "id": "general_examination",
        "title_en": "General Examination",
        "title_ar": "الفحص العام",
        "questions": [
          { "id": "vital_signs_heading", "type": "heading", "label_en": "Vital Signs", "label_ar": "العلامات الحيوية" },
          { "id": "pulse_rate", "type": "number", "label_en": "Pulse Rate", "label_ar": "معدل النبض", "unit_en": "beats/min", "unit_ar": "نبضة/دقيقة" },
          {
            "id": "pulse_special", "type": "text", "label_en": "Pulse Special Character", "label_ar": "صفة النبض الخاصة",
            "hint_en": "Big volume (hypoxia), small (cor-pulmonale), pulsus paradoxus, unequal (Pancoast), AF (COPD)",
            "hint_ar": "حجم كبير (نقص أكسجين)، صغير (القلب الرئوي)، نبض متناقض، غير متساوٍ"
          },
          { "id": "blood_pressure_systolic", "type": "number", "label_en": "Blood Pressure - Systolic", "label_ar": "ضغط الدم - الانقباضي", "unit_en": "mmHg", "unit_ar": "ملم زئبق" },
          { "id": "blood_pressure_diastolic", "type": "number", "label_en": "Blood Pressure - Diastolic", "label_ar": "ضغط الدم - الانبساط في الشريان", "unit_en": "mmHg", "unit_ar": "ملم زئبق" },
          {
            "id": "temperature", "type": "number", "label_en": "Temperature", "label_ar": "درجة الحرارة", "unit_en": "°C", "unit_ar": "°م",
            "hint_en": "Low grade (TB & carcinoma); high grade (pneumonia & abscess)",
            "hint_ar": "منخفضة (سل وسرطان)؛ مرتفعة (التهاب رئوي وخراج)"
          },
          { "id": "respiratory_rate", "type": "number", "label_en": "Respiratory Rate", "label_ar": "معدل التنفس", "unit_en": "breaths/min (12-20)", "unit_ar": "نفس/دقيقة" },
          { "id": "oxygen_saturation", "type": "number", "label_en": "O2 Saturation", "label_ar": "تشبع الأكسجين", "unit_en": "%", "unit_ar": "%" },
          {
            "id": "general_condition", "type": "radio", "label_en": "General Condition", "label_ar": "الحالة العامة",
            "options": [
              { "value": "good", "label_en": "Good", "label_ar": "جيدة" },
              { "value": "fair", "label_en": "Fair", "label_ar": "متوسطة" },
              { "value": "poor", "label_en": "Poor", "label_ar": "سيئة" }
            ]
          },
          { "id": "general_overview_heading", "type": "heading", "label_en": "General Overview", "label_ar": "النظرة العامة" },
          {
            "id": "built", "type": "radio", "label_en": "Built", "label_ar": "البنية",
            "options": [
              { "value": "average", "label_en": "Average built", "label_ar": "متوسطة" },
              { "value": "over", "label_en": "Over built (Pickwickian / cor-pulmonale)", "label_ar": "زائدة (بيكويك / قلب رئوي)" },
              { "value": "under", "label_en": "Under built (TB / cachexia in carcinoma)", "label_ar": "ضعيفة (سل / دنف بالسرطان)" }
            ]
          },
          {
            "id": "consciousness", "type": "radio", "label_en": "Consciousness / Mentality", "label_ar": "الوعي / الحالة العقلية",
            "options": [
              { "value": "conscious", "label_en": "Conscious & oriented", "label_ar": "واعٍ ومدرك" },
              { "value": "disturbed", "label_en": "Disturbed (CO2 narcosis)", "label_ar": "مضطرب (تخدير CO2)" },
              { "value": "unconscious", "label_en": "Unconscious", "label_ar": "فاقد للوعي" }
            ]
          },
          {
            "id": "decubitus", "type": "text", "label_en": "Decubitus / Position", "label_ar": "وضع الاستلقاء",
            "hint_en": "Lateral decubitus (unilateral disease), orthopnea (emphysema), platypnea, leaning forward (effusion)",
            "hint_ar": "اضطجاع جانبي، ضيق نفس استلقائي، ميل للأمام"
          },
          {
            "id": "general_appearance", "type": "multicheck", "label_en": "General Appearance Findings", "label_ar": "علامات الفحص العام",
            "items": [
              { "id": "pallor", "label_en": "Pallor (TB, pneumonia, carcinoma)", "label_ar": "الشحوب", "marked_if_negative": true },
              { "id": "jaundice", "label_en": "Jaundice", "label_ar": "اليرقان", "marked_if_negative": true },
              { "id": "cyanosis", "label_en": "Cyanosis (central/peripheral)", "label_ar": "الزرقة (مركزية/طرفية)", "marked_if_negative": true },
              { "id": "clubbing", "label_en": "Clubbing", "label_ar": "تعجر الأصابع", "marked_if_negative": true },
              { "id": "oedema", "label_en": "Lower limb oedema", "label_ar": "وذمة الطرفين السفليين", "marked_if_negative": true },
              { "id": "lymphadenopathy", "label_en": "Lymphadenopathy (scalene LN, TB, sarcoidosis)", "label_ar": "اعتلال العقد اللمفية", "marked_if_negative": true },
              { "id": "flapping_tremors", "label_en": "Flapping tremors (CO2 retention)", "label_ar": "رعشة خفقانية (احتباس CO2)" },
              { "id": "fine_tremors", "label_en": "Fine tremors (beta stimulation - bronchodilators)", "label_ar": "رعشة دقيقة (موسعات قصبات)" },
              { "id": "dehydration", "label_en": "Dehydration", "label_ar": "الجفاف", "marked_if_negative": true }
            ]
          },
          {
            "id": "neck_veins", "type": "radio", "label_en": "Neck Veins (JVP)", "label_ar": "أوردة الرقبة",
            "options": [
              { "value": "normal", "label_en": "Non-congested", "label_ar": "غير محتقنة" },
              { "value": "congested", "label_en": "Congested (cor-pulmonale / mediastinal syndrome)", "label_ar": "محتقنة (قلب رئوي / متلازمة المنصف)" }
            ]
          }
        ]
      },
      {
        "id": "chest_examination",
        "title_en": "Chest Examination",
        "title_ar": "فحص الصدر",
        "questions": [
          {
            "id": "positioning", "type": "textarea", "label_en": "Patient Positioning & Exposure", "label_ar": "وضعية المريض والكشف",
            "hint_en": "Examine front then back, comparing right & left area by area",
            "hint_ar": "افحص الأمام ثم الخلف بمقارنة الجانبين منطقة بمنطقة"
          },
          { "id": "inspection_heading", "type": "heading", "label_en": "Inspection", "label_ar": "الفحص بالنظر" },
          {
            "id": "chest_shape", "type": "select", "label_en": "Shape of the Chest", "label_ar": "شكل الصدر",
            "options": [
              { "value": "normal", "label_en": "Normal (elliptical, 7:5)", "label_ar": "طبيعي (بيضوي)" },
              { "value": "barrel", "label_en": "Barrel shaped (emphysematous/COPD)", "label_ar": "برميلي (نفاخي/COPD)" },
              { "value": "funnel", "label_en": "Funnel chest (pectus excavatum)", "label_ar": "صدر قمعي" },
              { "value": "pigeon", "label_en": "Pigeon chest (pectus carinatum)", "label_ar": "صدر حمامي" },
              { "value": "unilateral_retraction", "label_en": "Unilateral retraction (fibrosis/collapse)", "label_ar": "انكماش أحادي (تليف/انخماص)" },
              { "value": "unilateral_bulge", "label_en": "Unilateral bulge (effusion/pneumothorax)", "label_ar": "انتفاخ أحادي (انصباب/استرواح)" }
            ]
          },
          {
            "id": "respiratory_movement", "type": "textarea", "label_en": "Respiratory Movement (rate, rhythm, depth, expansion)", "label_ar": "الحركة التنفسية (المعدل، النظم، العمق، التمدد)",
            "hint_en": "Tachypnea, bradypnea, Cheyne-Stokes, Biot's; limitation unilateral (fibrosis/collapse) or bilateral (COPD)",
            "hint_ar": "تسرع/تباطؤ النفس، تنفس شاين-ستوكس، تنفس بيوت"
          },
          {
            "id": "inspection_findings", "type": "multicheck", "label_en": "Other Inspection Findings", "label_ar": "نتائج النظر الأخرى",
            "items": [
              { "id": "skin_lesions", "label_en": "Scars / dilated veins / pigmentation", "label_ar": "ندبات / أوردة متمددة / تصبغ" },
              { "id": "trills_sign", "label_en": "Trill's sign (tracheal shift)", "label_ar": "علامة ترِل (انزياح القصبة)" },
              { "id": "pulsations", "label_en": "Pulsations (apex / epigastric / left parasternal)", "label_ar": "نبضات (القمة / شرسوفية / جانب القص)" },
              { "id": "littens_sign", "label_en": "Litten's sign", "label_ar": "علامة ليتن" },
              { "id": "respiratory_distress", "label_en": "Signs of respiratory distress (Hoover's, tracheal tug, ala nasi, accessory muscles, tripod)", "label_ar": "علامات الضائقة التنفسية" }
            ]
          },
          { "id": "palpation_heading", "type": "heading", "label_en": "Palpation", "label_ar": "الفحص بالجس" },
          {
            "id": "trachea_position", "type": "radio", "label_en": "Trachea Position", "label_ar": "موضع القصبة الهوائية",
            "options": [
              { "value": "central", "label_en": "Central", "label_ar": "مركزية" },
              { "value": "shifted", "label_en": "Shifted (fibrosis/collapse/effusion/pneumothorax)", "label_ar": "منزاحة" }
            ]
          },
          { "id": "cricosternal_distance", "type": "number", "label_en": "Cricosternal Distance", "label_ar": "المسافة الحلقية القصية", "unit_en": "finger breadths (<3 = barrel)", "unit_ar": "أصابع (<3 برميلي)" },
          {
            "id": "palpation_findings", "type": "multicheck", "label_en": "Palpation Findings", "label_ar": "نتائج الجس",
            "items": [
              { "id": "tenderness", "label_en": "Tenderness", "label_ar": "الإيلام", "marked_if_negative": true },
              { "id": "tvf_increased", "label_en": "Increased TVF (consolidation/collapse/cavity)", "label_ar": "زيادة الاهتزاز الصوتي اللمسي" },
              { "id": "tvf_decreased", "label_en": "Decreased TVF (other chest diseases)", "label_ar": "نقص الاهتزاز الصوتي اللمسي" },
              { "id": "palpable_wheeze", "label_en": "Palpable wheeze (COPD)", "label_ar": "أزيز ملموس" },
              { "id": "palpable_rub", "label_en": "Palpable rub (pleurisy)", "label_ar": "احتكاك ملموس" },
              { "id": "palpable_crepitations", "label_en": "Palpable crepitations", "label_ar": "خراخر ملموسة" }
            ]
          },
          { "id": "chest_expansion", "type": "number", "label_en": "Chest Expansion", "label_ar": "تمدد الصدر", "unit_en": "cm (normal 5-7)", "unit_ar": "سم (طبيعي 5-7)" },
          { "id": "percussion_heading", "type": "heading", "label_en": "Percussion", "label_ar": "الفحص بالقرع" },
          {
            "id": "percussion_note", "type": "select", "label_en": "Percussion Note (lung proper)", "label_ar": "نغمة القرع (الرئة)",
            "options": [
              { "value": "resonant", "label_en": "Resonant (normal lung)", "label_ar": "رنان (رئة طبيعية)" },
              { "value": "hyper_resonant", "label_en": "Hyper-resonant (emphysema/pneumothorax)", "label_ar": "فرط الرنين (نفاخ/استرواح)" },
              { "value": "impaired", "label_en": "Impaired (consolidation/fibrosis)", "label_ar": "متضائل (تكثف/تليف)" },
              { "value": "dull", "label_en": "Dull (consolidation/collapse/fibrosis)", "label_ar": "أصم (تكثف/انخماص/تليف)" },
              { "value": "stony_dull", "label_en": "Stony dull (pleural effusion)", "label_ar": "أصم حجري (انصباب جنبي)" }
            ]
          },
          {
            "id": "special_percussion_areas", "type": "textarea", "label_en": "Special Percussion Areas (bare area, Traub's area, Kronig's isthmus, hepatic dullness)", "label_ar": "مناطق القرع الخاصة (المنطقة العارية، منطقة تراوب، برزخ كرونيغ، البلادة الكبدية)"
          },
          { "id": "auscultation_heading", "type": "heading", "label_en": "Auscultation", "label_ar": "الفحص بالسماع" },
          {
            "id": "breath_sounds", "type": "select", "label_en": "Breath Sounds", "label_ar": "أصوات التنفس",
            "options": [
              { "value": "vesicular", "label_en": "Vesicular (normal)", "label_ar": "حويصلي (طبيعي)" },
              { "value": "bronchial", "label_en": "Bronchial (consolidation)", "label_ar": "قصبي (تكثف)" },
              { "value": "diminished", "label_en": "Diminished / absent (effusion, pneumothorax, collapse)", "label_ar": "ضعيف / غائب (انصباب، استرواح، انخماص)" }
            ]
          },
          {
            "id": "adventitious_sounds", "type": "multicheck", "label_en": "Adventitious Sounds", "label_ar": "الأصوات الإضافية",
            "items": [
              { "id": "crepitations", "label_en": "Crepitations (fine / coarse)", "label_ar": "خراخر (دقيقة / خشنة)" },
              { "id": "rhonchi", "label_en": "Rhonchi / wheezes", "label_ar": "أزيز / صفير" },
              { "id": "pleural_rub", "label_en": "Pleural rub", "label_ar": "احتكاك جنبي", "marked_if_negative": true }
            ]
          },
          {
            "id": "vocal_resonance", "type": "radio", "label_en": "Vocal Resonance", "label_ar": "الرنين الصوتي",
            "options": [
              { "value": "normal", "label_en": "Normal", "label_ar": "طبيعي" },
              { "value": "increased", "label_en": "Increased (consolidation)", "label_ar": "زائد (تكثف)" },
              { "value": "decreased", "label_en": "Decreased (effusion/pneumothorax)", "label_ar": "ناقص (انصباب/استرواح)" }
            ]
          },
          { "id": "other_systems_heading", "type": "heading", "label_en": "Examination of Other Systems", "label_ar": "فحص الأجهزة الأخرى" },
          {
            "id": "cardiovascular_exam", "type": "multicheck", "label_en": "Cardiovascular", "label_ar": "القلب والأوعية",
            "items": [
              { "id": "loud_p2", "label_en": "Loud P2 / RV heave (cor-pulmonale)", "label_ar": "صوت رئوي عالٍ / رفعة بطين أيمن (قلب رئوي)" },
              { "id": "pulmonary_congestion", "label_en": "Pulmonary congestion signs", "label_ar": "علامات احتقان رئوي" }
            ]
          },
          {
            "id": "abdominal_exam", "type": "multicheck", "label_en": "Abdomen", "label_ar": "البطن",
            "items": [
              { "id": "hepatomegaly", "label_en": "Hepatomegaly (cor-pulmonale, ptosed liver, metastasis)", "label_ar": "تضخم الكبد" },
              { "id": "splenomegaly", "label_en": "Splenomegaly (miliary TB, sarcoidosis)", "label_ar": "تضخم الطحال" },
              { "id": "ascites", "label_en": "Ascites", "label_ar": "الاستسقاء" }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "abdomen",
    "specialty": "internal",
    "icon": "🩺",
    "name_en": "Abdomen & GIT",
    "name_ar": "البطن والجهاز الهضمي",
    "sections": [
      {
        "id": "personal_history",
        "title_en": "Personal History",
        "title_ar": "التاريخ الشخصي",
        "questions": [
          { "id": "patient_name", "type": "text", "label_en": "Name", "label_ar": "الاسم", "required": true },
          {
            "id": "age", "type": "number", "label_en": "Age", "label_ar": "العمر",
            "unit_en": "years", "unit_ar": "سنة", "required": true,
            "hint_en": "Calcular obstructive jaundice (middle-aged females); malignant obstructive jaundice (old males); cirrhosis (adults)",
            "hint_ar": "اليرقان الانسدادي الحصوي (إناث متوسطات العمر)؛ الانسدادي الخبيث (ذكور كبار)؛ التشمع (البالغين)"
          },
          {
            "id": "sex", "type": "radio", "label_en": "Sex", "label_ar": "الجنس", "required": true,
            "options": [
              { "value": "male", "label_en": "Male", "label_ar": "ذكر" },
              { "value": "female", "label_en": "Female", "label_ar": "أنثى" }
            ],
            "hint_en": "Gallbladder stones (females); cancer head of pancreas (males)",
            "hint_ar": "حصوات المرارة (الإناث)؛ سرطان رأس البنكرياس (الذكور)"
          },
          {
            "id": "occupation", "type": "text", "label_en": "Occupation", "label_ar": "المهنة",
            "hint_en": "Farmers → bilharziasis",
            "hint_ar": "المزارعون ← البلهارسيا"
          },
          {
            "id": "marital_state", "type": "radio", "label_en": "Marital State", "label_ar": "الحالة الاجتماعية",
            "options": [
              { "value": "single", "label_en": "Single", "label_ar": "أعزل" },
              { "value": "married", "label_en": "Married", "label_ar": "متزوج" },
              { "value": "divorced", "label_en": "Divorced", "label_ar": "مطلق" },
              { "value": "widowed", "label_en": "Widowed", "label_ar": "أرمل" }
            ]
          },
          {
            "id": "residence", "type": "radio", "label_en": "Residence", "label_ar": "محل الإقامة",
            "options": [
              { "value": "urban", "label_en": "Urban", "label_ar": "حضر" },
              { "value": "rural", "label_en": "Rural (bilharziasis)", "label_ar": "ريف (البلهارسيا)" }
            ]
          },
          {
            "id": "special_habits", "type": "textarea", "label_en": "Special Habits", "label_ar": "العادات الخاصة",
            "hint_en": "Alcoholism in cirrhosis",
            "hint_ar": "إدمان الكحول في التشمع"
          },
          { "id": "menstrual_history", "type": "textarea", "label_en": "Menstrual / Obstetric History (if female)", "label_ar": "التاريخ الطمثي / التوليدي (إن وجد)" }
        ]
      },
      {
        "id": "presenting_complaint",
        "title_en": "Presenting Complaint",
        "title_ar": "الشكوى الرئيسية",
        "questions": [
          {
            "id": "complaint", "type": "textarea",
            "label_en": "Complaint (in patient's own words) + duration",
            "label_ar": "الشكوى (بكلمات المريض) + المدة",
            "required": true,
            "hint_en": "Most recent & most important, brief (e.g. abdominal swelling of 3 weeks, or vomiting of blood of 2 days)",
            "hint_ar": "أحدث وأهم شكوى بإيجاز (مثل: انتفاخ بطني منذ 3 أسابيع، أو قيء دموي منذ يومين)"
          }
        ]
      },
      {
        "id": "hopi",
        "title_en": "History of Presenting Illness",
        "title_ar": "تاريخ المرض الحالي",
        "questions": [
          {
            "id": "onset", "type": "radio", "label_en": "Onset", "label_ar": "البداية",
            "options": [
              { "value": "spontaneous", "label_en": "Spontaneous", "label_ar": "تلقائية" },
              { "value": "induced", "label_en": "Induced / psychic", "label_ar": "محرضة / نفسية" },
              { "value": "sudden", "label_en": "Sudden", "label_ar": "مفاجئة" },
              { "value": "gradual", "label_en": "Gradual", "label_ar": "تدريجية" }
            ]
          },
          {
            "id": "course", "type": "radio", "label_en": "Course", "label_ar": "السير",
            "options": [
              { "value": "progressive", "label_en": "Progressive", "label_ar": "تقدمي" },
              { "value": "regressive", "label_en": "Regressive", "label_ar": "متراجع" },
              { "value": "intermittent", "label_en": "Intermittent", "label_ar": "متقطع" },
              { "value": "stationary", "label_en": "Stationary", "label_ar": "ثابت" }
            ]
          },
          { "id": "duration_value", "type": "number", "label_en": "Duration", "label_ar": "المدة", "unit_en": "duration", "unit_ar": "مدة", "required": true },
          {
            "id": "duration_unit", "type": "radio", "label_en": "Duration Unit", "label_ar": "وحدة المدة", "required": true,
            "options": [
              { "value": "days", "label_en": "Days", "label_ar": "أيام" },
              { "value": "weeks", "label_en": "Weeks", "label_ar": "أسابيع" },
              { "value": "months", "label_en": "Months", "label_ar": "أشهر" },
              { "value": "years", "label_en": "Years", "label_ar": "سنوات" }
            ]
          },
          { "id": "association", "type": "textarea", "label_en": "Associated Symptoms", "label_ar": "الأعراض المصاحبة" },
          { "id": "aggravating_factors", "type": "textarea", "label_en": "Aggravating Factors (what increases)", "label_ar": "العوامل المهيجة (ما يزيد)" },
          { "id": "relieving_factors", "type": "textarea", "label_en": "Relieving Factors (what decreases)", "label_ar": "العوامل المخففة (ما يقلل)" },
          { "id": "effect_of_treatment", "type": "textarea", "label_en": "Effect of Treatment", "label_ar": "أثر العلاج" },
          { "id": "date_last_attack", "type": "text", "label_en": "Date of Last Attack", "label_ar": "تاريخ آخر نوبة" },

          { "id": "upper_git_heading", "type": "heading", "label_en": "Upper GIT Symptoms", "label_ar": "أعراض الجهاز الهضمي العلوي" },
          {
            "id": "upper_git_symptoms", "type": "multicheck", "label_en": "Upper GIT Symptoms", "label_ar": "أعراض الجهاز الهضمي العلوي",
            "items": [
              { "id": "appetite_change", "label_en": "Appetite change (anorexia / polyphagia / parorexia)", "label_ar": "تغير الشهية (فقدان / شره / شهوة غريبة)" },
              { "id": "dysphagia", "label_en": "Dysphagia / odynophagia", "label_ar": "عسر البلع / ألم البلع" },
              { "id": "vomiting", "label_en": "Vomiting", "label_ar": "القيء" },
              { "id": "haematemesis", "label_en": "Haematemesis (vomiting of blood)", "label_ar": "القيء الدموي", "marked_if_negative": true },
              { "id": "water_brush", "label_en": "Water brush", "label_ar": "القلس المائي" },
              { "id": "halitosis", "label_en": "Halitosis (bad oral odour)", "label_ar": "رائحة الفم الكريهة" },
              { "id": "heart_burn", "label_en": "Heart burn (GERD)", "label_ar": "حرقة الفؤاد (ارتجاع)" },
              { "id": "eructation", "label_en": "Eructation (belching)", "label_ar": "التجشؤ" },
              { "id": "hiccough", "label_en": "Hiccough", "label_ar": "الفواق (الزغطة)" }
            ]
          },
          { "id": "lower_git_heading", "type": "heading", "label_en": "Lower GIT Symptoms", "label_ar": "أعراض الجهاز الهضمي السفلي" },
          {
            "id": "lower_git_symptoms", "type": "multicheck", "label_en": "Lower GIT Symptoms", "label_ar": "أعراض الجهاز الهضمي السفلي",
            "items": [
              { "id": "flatulence", "label_en": "Flatulence", "label_ar": "انتفاخ الغازات" },
              { "id": "borborygmi", "label_en": "Audible borborygmi", "label_ar": "قرقرة مسموعة" },
              { "id": "bowel_habit_change", "label_en": "Change in bowel habit (diarrhea / constipation)", "label_ar": "تغير عادة التبرز (إسهال / إمساك)" },
              { "id": "haematochezia", "label_en": "Haematochezia (fresh blood per rectum)", "label_ar": "بيلة دموية برازية", "marked_if_negative": true },
              { "id": "melena", "label_en": "Melena (black tarry stool)", "label_ar": "ميلينا (براز أسود قطراني)", "marked_if_negative": true },
              { "id": "tenesmus", "label_en": "Tenesmus", "label_ar": "زحير" },
              { "id": "dysentery", "label_en": "Dysentery (blood & mucus)", "label_ar": "زحار (دم ومخاط)" }
            ]
          },
          { "id": "general_toxic_heading", "type": "heading", "label_en": "General (Toxic) Symptoms", "label_ar": "الأعراض العامة (السمية)" },
          {
            "id": "general_toxic_symptoms", "type": "multicheck", "label_en": "General Toxic Symptoms (FAHM)", "label_ar": "الأعراض العامة السمية",
            "items": [
              { "id": "fever", "label_en": "Fever", "label_ar": "الحمى", "marked_if_negative": true },
              { "id": "anorexia", "label_en": "Anorexia", "label_ar": "فقدان الشهية" },
              { "id": "headache", "label_en": "Headache", "label_ar": "الصداع" },
              { "id": "malaise", "label_en": "Malaise", "label_ar": "التوعك" },
              { "id": "weight_loss", "label_en": "Weight loss", "label_ar": "نقص الوزن" }
            ]
          },
          { "id": "gynecological_heading", "type": "heading", "label_en": "Gynecological Symptoms (female)", "label_ar": "الأعراض النسائية (للإناث)" },
          {
            "id": "gynecological_symptoms", "type": "multicheck", "label_en": "Gynecological Symptoms", "label_ar": "الأعراض النسائية",
            "items": [
              { "id": "bleeding", "label_en": "Abnormal bleeding", "label_ar": "نزيف غير طبيعي" },
              { "id": "discharge", "label_en": "Discharge", "label_ar": "إفرازات" },
              { "id": "mass", "label_en": "Mass", "label_ar": "كتلة" },
              { "id": "hirsutism", "label_en": "Hirsutism", "label_ar": "الشعرانية" },
              { "id": "hot_flushes", "label_en": "Hot flushes", "label_ar": "هبات ساخنة" }
            ]
          },
          { "id": "pain_heading", "type": "heading", "label_en": "Abdominal Pain Analysis", "label_ar": "تحليل الألم البطني" },
          { "id": "abdominal_pain", "type": "checkbox", "label_en": "Abdominal pain present", "label_ar": "وجود ألم بطني", "marked_if_negative": true },
          { "id": "pain_site", "type": "text", "label_en": "Pain Site", "label_ar": "موقع الألم" },
          { "id": "pain_radiation", "type": "text", "label_en": "Pain Radiation", "label_ar": "انتشار الألم" },
          {
            "id": "pain_character", "type": "radio", "label_en": "Pain Character", "label_ar": "صفة الألم",
            "options": [
              { "value": "colic", "label_en": "Colic (hollow organ obstruction)", "label_ar": "مغص (انسداد عضو مجوف)" },
              { "value": "dull_ache", "label_en": "Dull ache (distension)", "label_ar": "ألم خفيف (تمدد)" },
              { "value": "sharp_localized", "label_en": "Sharp & localized (parietal/peritoneal)", "label_ar": "حاد وموضعي (جداري/بريتوني)" },
              { "value": "referred", "label_en": "Referred pain", "label_ar": "ألم رجيع" }
            ]
          },

          { "id": "biliary_heading", "type": "heading", "label_en": "Biliary (Hepatobiliary) Symptoms", "label_ar": "الأعراض الكبدية الصفراوية" },
          { "id": "jaundice", "type": "checkbox", "label_en": "Jaundice", "label_ar": "اليرقان", "marked_if_negative": true },
          {
            "id": "jaundice_onset", "type": "radio", "label_en": "Jaundice Onset", "label_ar": "بداية اليرقان",
            "options": [
              { "value": "acute", "label_en": "Acute (viral hepatitis, calcular obstruction)", "label_ar": "حاد (التهاب كبدي فيروسي، انسداد حصوي)" },
              { "value": "gradual", "label_en": "Gradual (malignant obstruction, cirrhosis)", "label_ar": "تدريجي (انسداد خبيث، تشمع)" }
            ]
          },
          {
            "id": "urine_color", "type": "radio", "label_en": "Urine Color", "label_ar": "لون البول",
            "options": [
              { "value": "dark", "label_en": "Dark (hepatocellular & obstructive)", "label_ar": "داكن (خلوي كبدي وانسدادي)" },
              { "value": "pale", "label_en": "Pale (hemolytic)", "label_ar": "فاتح (انحلالي)" }
            ]
          },
          {
            "id": "stool_color", "type": "radio", "label_en": "Stool Color", "label_ar": "لون البراز",
            "options": [
              { "value": "pale_clay", "label_en": "Pale clay (obstructive)", "label_ar": "طيني فاتح (انسدادي)" },
              { "value": "dark", "label_en": "Dark (hemolytic)", "label_ar": "داكن (انحلالي)" },
              { "value": "slightly_pale", "label_en": "Slightly pale (hepatocellular)", "label_ar": "فاتح قليلاً (خلوي كبدي)" }
            ]
          },
          { "id": "pruritis", "type": "checkbox", "label_en": "Pruritis (itching - obstructive)", "label_ar": "الحكة (انسدادي)" },
          { "id": "bleeding_tendency", "type": "checkbox", "label_en": "Bleeding tendency (LCF / obstructive)", "label_ar": "ميل للنزف (فشل خلوي كبدي / انسدادي)", "marked_if_negative": true },

          { "id": "urogenital_heading", "type": "heading", "label_en": "Urinary System Symptoms", "label_ar": "أعراض الجهاز البولي" },
          {
            "id": "urinary_symptoms_hopi", "type": "multicheck", "label_en": "Urinary / Uraemic Symptoms", "label_ar": "الأعراض البولية / البولينية",
            "items": [
              { "id": "dysuria", "label_en": "Micturition difficulties (dysuria)", "label_ar": "صعوبة التبول (عسر البول)" },
              { "id": "urine_abnormalities", "label_en": "Urine abnormalities (volume / colour / frothy)", "label_ar": "شذوذ البول (الكمية / اللون / رغوي)" },
              { "id": "sexual_troubles", "label_en": "Sexual / erection troubles", "label_ar": "مشاكل جنسية / الانتصاب" },
              { "id": "uraemic", "label_en": "Uraemic symptoms", "label_ar": "أعراض بولينية" }
            ]
          },

          { "id": "swelling_heading", "type": "heading", "label_en": "Abdominal & Lower Limb Swelling", "label_ar": "انتفاخ البطن والطرفين السفليين" },
          {
            "id": "abdominal_swelling", "type": "radio", "label_en": "Abdominal Swelling", "label_ar": "انتفاخ البطن",
            "options": [
              { "value": "none", "label_en": "None", "label_ar": "لا يوجد" },
              { "value": "localized", "label_en": "Localized (spleen / liver / mass)", "label_ar": "موضعي (طحال / كبد / كتلة)" },
              { "value": "generalized", "label_en": "Generalized (ascites)", "label_ar": "معمم (استسقاء)" }
            ]
          },
          { "id": "ascites_aspiration", "type": "textarea", "label_en": "History of Aspiration (amount, aspect, colour, complications)", "label_ar": "تاريخ البزل (الكمية، المظهر، اللون، المضاعفات)" },
          { "id": "lower_limb_swelling", "type": "checkbox", "label_en": "Lower limb swelling (LCF / cor-pulmonale)", "label_ar": "انتفاخ الطرفين السفليين", "marked_if_negative": true }
        ]
      },
      {
        "id": "past_medical_history",
        "title_en": "Past Medical History",
        "title_ar": "التاريخ المرضي السابق",
        "questions": [
          { "id": "bilharziasis", "type": "checkbox", "label_en": "Bilharziasis (history of contact to canals)", "label_ar": "البلهارسيا (تاريخ تعرض للترع)", "marked_if_negative": true },
          { "id": "hepatitis", "type": "checkbox", "label_en": "Hepatitis (B / C)", "label_ar": "التهاب الكبد (ب / ج)", "marked_if_negative": true },
          { "id": "tuberculosis", "type": "checkbox", "label_en": "Tuberculosis", "label_ar": "السل", "marked_if_negative": true },
          { "id": "diabetes_mellitus", "type": "checkbox", "label_en": "Diabetes mellitus", "label_ar": "داء السكري", "marked_if_negative": true },
          { "id": "hypertension", "type": "checkbox", "label_en": "Hypertension", "label_ar": "ارتفاع ضغط الدم", "marked_if_negative": true },
          { "id": "blood_transfusion", "type": "checkbox", "label_en": "History of blood transfusion", "label_ar": "تاريخ نقل دم" },
          { "id": "previous_operations", "type": "textarea", "label_en": "Previous operations / admissions", "label_ar": "العمليات / حالات الدخول السابقة" }
        ]
      },
      {
        "id": "drug_history",
        "title_en": "Drug History",
        "title_ar": "تاريخ الأدوية",
        "questions": [
          { "id": "current_medications", "type": "textarea", "label_en": "Current Medications", "label_ar": "الأدوية الحالية" },
          { "id": "nsaids", "type": "checkbox", "label_en": "NSAIDs (peptic ulcer / bleeding)", "label_ar": "مضادات الالتهاب اللاستيرويدية (قرحة / نزف)" },
          { "id": "ppis", "type": "checkbox", "label_en": "PPIs / antacids", "label_ar": "مثبطات مضخة البروتون / مضادات الحموضة" },
          { "id": "steroids", "type": "checkbox", "label_en": "Steroids", "label_ar": "الكورتيزون" },
          {
            "id": "hepatotoxic_drugs", "type": "multicheck", "label_en": "Hepatotoxic Drugs", "label_ar": "أدوية سامة للكبد",
            "items": [
              { "id": "paracetamol", "label_en": "Paracetamol (dose dependent)", "label_ar": "الباراسيتامول (معتمد على الجرعة)" },
              { "id": "inh_pas", "label_en": "INH / PAS (acute necrosis)", "label_ar": "آيزونيازيد / PAS (نخر حاد)" },
              { "id": "aldomet", "label_en": "Aldomet (cholestasis)", "label_ar": "ألدوميت (ركود صفراوي)" },
              { "id": "contraceptive_pills", "label_en": "Contraceptive pills (tumors)", "label_ar": "أقراص منع الحمل (أورام)" }
            ]
          },
          { "id": "drug_allergy", "type": "checkbox", "label_en": "Drug allergy", "label_ar": "حساسية دوائية", "marked_if_negative": true },
          {
            "id": "compliance", "type": "radio", "label_en": "Compliance", "label_ar": "الالتزام بالدواء",
            "options": [
              { "value": "regular", "label_en": "Regular", "label_ar": "منتظم" },
              { "value": "irregular", "label_en": "Irregular", "label_ar": "غير منتظم" },
              { "value": "stopped", "label_en": "Stopped", "label_ar": "متوقف" }
            ]
          }
        ]
      },
      {
        "id": "family_history",
        "title_en": "Family History",
        "title_ar": "التاريخ العائلي",
        "questions": [
          { "id": "family_liver_disease", "type": "checkbox", "label_en": "Family history of liver disease / bilharziasis / hepatitis", "label_ar": "تاريخ عائلي لأمراض الكبد / البلهارسيا / التهاب الكبد", "marked_if_negative": true },
          { "id": "family_git_malignancy", "type": "checkbox", "label_en": "Family history of GIT malignancy", "label_ar": "تاريخ عائلي لأورام الجهاز الهضمي" },
          { "id": "family_diabetes", "type": "checkbox", "label_en": "Family history of DM / hypertension", "label_ar": "تاريخ عائلي للسكري / الضغط" }
        ]
      },
      {
        "id": "social_history",
        "title_en": "Social History",
        "title_ar": "التاريخ الاجتماعي",
        "questions": [
          { "id": "smoking", "type": "checkbox", "label_en": "Smoking", "label_ar": "التدخين", "marked_if_negative": true },
          { "id": "smoking_pack_years", "type": "number", "label_en": "Smoking pack-years", "label_ar": "مؤشر التدخين (عبوة-سنة)", "unit_en": "pack-years", "unit_ar": "عبوة-سنة" },
          { "id": "alcohol", "type": "checkbox", "label_en": "Alcohol consumption (cirrhosis)", "label_ar": "تناول الكحول (التشمع)" },
          {
            "id": "occupation_exposure", "type": "text", "label_en": "Occupation (relevant exposure)", "label_ar": "المهنة (التعرض ذو الصلة)",
            "hint_en": "Farming / canal contact → bilharziasis",
            "hint_ar": "الزراعة / التعرض للترع ← البلهارسيا"
          },
          {
            "id": "residence_type", "type": "radio", "label_en": "Residence", "label_ar": "محل الإقامة",
            "options": [
              { "value": "urban", "label_en": "Urban", "label_ar": "حضر" },
              { "value": "rural", "label_en": "Rural", "label_ar": "ريف" }
            ]
          },
          { "id": "socioeconomic_state", "type": "textarea", "label_en": "Socioeconomic state", "label_ar": "الحالة الاجتماعية والاقتصادية" }
        ]
      },
      {
        "id": "systemic_review",
        "title_en": "Systemic Review",
        "title_ar": "المراجعة الجهازية",
        "questions": [
          {
            "id": "cardiovascular_symptoms", "type": "multicheck", "label_en": "Cardiovascular Symptoms", "label_ar": "أعراض القلب والأوعية",
            "items": [
              { "id": "syncope", "label_en": "Syncope (low cardiac output)", "label_ar": "الإغماء" },
              { "id": "palpitation", "label_en": "Palpitation", "label_ar": "الخفقان" },
              { "id": "ll_oedema", "label_en": "Lower limb oedema", "label_ar": "وذمة الطرفين السفليين", "marked_if_negative": true }
            ]
          },
          {
            "id": "respiratory_symptoms", "type": "multicheck", "label_en": "Respiratory Symptoms", "label_ar": "أعراض الجهاز التنفسي",
            "items": [
              { "id": "dyspnea", "label_en": "Dyspnea (tense ascites / hepatopulmonary)", "label_ar": "ضيق النفس", "marked_if_negative": true },
              { "id": "platypnea", "label_en": "Platypnea (hepatopulmonary syndrome)", "label_ar": "ضيق نفس انتصابي" },
              { "id": "cough", "label_en": "Cough", "label_ar": "السعال" }
            ]
          },
          {
            "id": "git_symptoms", "type": "multicheck", "label_en": "GIT Symptoms", "label_ar": "أعراض الجهاز الهضمي",
            "items": [
              { "id": "anorexia", "label_en": "Anorexia", "label_ar": "فقدان الشهية" },
              { "id": "vomiting", "label_en": "Vomiting", "label_ar": "القيء" },
              { "id": "haematemesis", "label_en": "Haematemesis", "label_ar": "القيء الدموي", "marked_if_negative": true },
              { "id": "melena", "label_en": "Melena", "label_ar": "الميلينا", "marked_if_negative": true }
            ]
          },
          {
            "id": "urinary_symptoms", "type": "multicheck", "label_en": "Urinary Symptoms", "label_ar": "الأعراض البولية",
            "items": [
              { "id": "oliguria", "label_en": "Oliguria (hepatorenal)", "label_ar": "قلة البول (كبدي كلوي)" },
              { "id": "dark_urine", "label_en": "Dark urine", "label_ar": "بول داكن" },
              { "id": "frothy_urine", "label_en": "Frothy urine", "label_ar": "بول رغوي" }
            ]
          },
          {
            "id": "neurological_symptoms", "type": "multicheck", "label_en": "Neurological Symptoms", "label_ar": "الأعراض العصبية",
            "items": [
              { "id": "disturbed_consciousness", "label_en": "Disturbed conscious level (encephalopathy)", "label_ar": "اضطراب الوعي (اعتلال دماغي)" },
              { "id": "motor_sensory", "label_en": "Motor / sensory affection", "label_ar": "اضطراب حركي / حسي" },
              { "id": "disturbed_concentration", "label_en": "Disturbed concentration", "label_ar": "اضطراب التركيز" }
            ]
          },
          {
            "id": "musculoskeletal_symptoms", "type": "multicheck", "label_en": "Musculoskeletal Symptoms", "label_ar": "أعراض العضلات والمفاصل",
            "items": [
              { "id": "muscle_wasting", "label_en": "Muscle wasting (LCF / carcinoma)", "label_ar": "ضمور عضلي" },
              { "id": "bone_pain", "label_en": "Bone pain (hemolytic)", "label_ar": "ألم عظمي (انحلالي)" },
              { "id": "easy_fatigability", "label_en": "Easy fatigability", "label_ar": "سهولة الإرهاق" }
            ]
          }
        ]
      },
      {
        "id": "general_examination",
        "title_en": "General Examination",
        "title_ar": "الفحص العام",
        "questions": [
          { "id": "vital_signs_heading", "type": "heading", "label_en": "Vital Signs", "label_ar": "العلامات الحيوية" },
          {
            "id": "pulse_rate", "type": "number", "label_en": "Pulse Rate", "label_ar": "معدل النبض", "unit_en": "beats/min", "unit_ar": "نبضة/دقيقة",
            "hint_en": "Tachycardia (hyperdynamic circulation/VDMs); bradycardia (obstructive jaundice)",
            "hint_ar": "تسرع القلب (دوران مفرط)؛ بطء القلب (يرقان انسدادي)"
          },
          { "id": "blood_pressure_systolic", "type": "number", "label_en": "Blood Pressure - Systolic", "label_ar": "ضغط الدم - الانقباضي", "unit_en": "mmHg", "unit_ar": "ملم زئبق" },
          { "id": "blood_pressure_diastolic", "type": "number", "label_en": "Blood Pressure - Diastolic", "label_ar": "ضغط الدم - الانبساطي", "unit_en": "mmHg", "unit_ar": "ملم زئبق" },
          { "id": "temperature", "type": "number", "label_en": "Temperature", "label_ar": "درجة الحرارة", "unit_en": "°C (low grade)", "unit_ar": "°م (منخفضة)" },
          {
            "id": "respiratory_rate", "type": "number", "label_en": "Respiratory Rate", "label_ar": "معدل التنفس", "unit_en": "breaths/min", "unit_ar": "نفس/دقيقة",
            "hint_en": "Tachypnea & distress in tense ascites / pleural effusion",
            "hint_ar": "تسرع النفس في الاستسقاء المتوتر / الانصباب الجنبي"
          },
          { "id": "oxygen_saturation", "type": "number", "label_en": "O2 Saturation", "label_ar": "تشبع الأكسجين", "unit_en": "%", "unit_ar": "%" },
          {
            "id": "general_condition", "type": "radio", "label_en": "General Condition", "label_ar": "الحالة العامة",
            "options": [
              { "value": "good", "label_en": "Good", "label_ar": "جيدة" },
              { "value": "fair", "label_en": "Fair", "label_ar": "متوسطة" },
              { "value": "poor", "label_en": "Poor", "label_ar": "سيئة" }
            ]
          },
          { "id": "general_overview_heading", "type": "heading", "label_en": "General Overview", "label_ar": "النظرة العامة" },
          {
            "id": "built", "type": "radio", "label_en": "Built", "label_ar": "البنية",
            "options": [
              { "value": "average", "label_en": "Average built", "label_ar": "متوسطة" },
              { "value": "over", "label_en": "Over built (ascites/oedema, cortisone)", "label_ar": "زائدة (استسقاء/وذمة، كورتيزون)" },
              { "value": "under", "label_en": "Under built (LCF / carcinoma wasting)", "label_ar": "ضعيفة (فشل خلوي كبدي / دنف بالسرطان)" }
            ]
          },
          {
            "id": "mentality", "type": "radio", "label_en": "Mentality / Consciousness", "label_ar": "الحالة العقلية / الوعي",
            "options": [
              { "value": "conscious", "label_en": "Conscious & oriented", "label_ar": "واعٍ ومدرك" },
              { "value": "disturbed", "label_en": "Disturbed (hepatic encephalopathy)", "label_ar": "مضطرب (اعتلال دماغي كبدي)" },
              { "value": "unconscious", "label_en": "Unconscious (hepatic coma)", "label_ar": "فاقد للوعي (غيبوبة كبدية)" }
            ]
          },
          {
            "id": "decubitus", "type": "text", "label_en": "Decubitus / Position", "label_ar": "وضع الاستلقاء",
            "hint_en": "Orthopnea (tense ascites/effusion); platypnea (hepatopulmonary syndrome)",
            "hint_ar": "ضيق نفس استلقائي (استسقاء متوتر)؛ ضيق نفس انتصابي"
          },
          {
            "id": "complexion", "type": "multicheck", "label_en": "Complexion", "label_ar": "لون البشرة",
            "items": [
              { "id": "pallor", "label_en": "Pallor (anemia)", "label_ar": "الشحوب (فقر دم)", "marked_if_negative": true },
              { "id": "jaundice", "label_en": "Jaundice", "label_ar": "اليرقان", "marked_if_negative": true },
              { "id": "hyperpigmented", "label_en": "Hyperpigmentation (hemochromatosis / LCF)", "label_ar": "فرط التصبغ (داء ترسب الأصبغة / فشل كبدي)" },
              { "id": "cyanosis", "label_en": "Cyanosis (tense ascites / hepatopulmonary / AV shunt)", "label_ar": "الزرقة", "marked_if_negative": true }
            ]
          },
          {
            "id": "general_appearance", "type": "multicheck", "label_en": "General Appearance Findings", "label_ar": "علامات الفحص العام",
            "items": [
              { "id": "clubbing", "label_en": "Clubbing (biliary cirrhosis / IBD)", "label_ar": "تعجر الأصابع", "marked_if_negative": true },
              { "id": "oedema", "label_en": "Lower limb oedema", "label_ar": "وذمة الطرفين السفليين", "marked_if_negative": true },
              { "id": "lymphadenopathy", "label_en": "Lymphadenopathy (Virchow's node)", "label_ar": "اعتلال العقد اللمفية (عقدة فيرشو)", "marked_if_negative": true },
              { "id": "flapping_tremors", "label_en": "Flapping tremors (hepatic pre-coma)", "label_ar": "رعشة خفقانية (ما قبل الغيبوبة الكبدية)" },
              { "id": "spider_naevi", "label_en": "Spider naevi (LCF, >5 significant)", "label_ar": "أورام عنكبوتية (فشل كبدي)" },
              { "id": "palmar_erythema", "label_en": "Palmar erythema", "label_ar": "حُمامى راحية" },
              { "id": "leuconychia", "label_en": "Leuconychia / koilonychia / Muehrcke's lines", "label_ar": "بياض الأظافر / تقعر / خطوط موركه" },
              { "id": "gynecomastia", "label_en": "Gynecomastia / testicular atrophy", "label_ar": "تثدي / ضمور الخصية" },
              { "id": "dehydration", "label_en": "Dehydration", "label_ar": "الجفاف", "marked_if_negative": true }
            ]
          },
          {
            "id": "head_neck_findings", "type": "multicheck", "label_en": "Head & Neck Findings", "label_ar": "علامات الرأس والرقبة",
            "items": [
              { "id": "kayser_fleischer", "label_en": "Corneal rings (Wilson's)", "label_ar": "حلقات قرنية (ويلسون)" },
              { "id": "scleral_jaundice", "label_en": "Scleral jaundice", "label_ar": "يرقان الصلبة" },
              { "id": "xanthelasma", "label_en": "Xanthelasma", "label_ar": "صفرومة" },
              { "id": "fetor_hepaticus", "label_en": "Fetor hepaticus", "label_ar": "نَفَس كبدي" },
              { "id": "parotid_enlargement", "label_en": "Parotid enlargement + temporalis wasting", "label_ar": "تضخم النكفة + ضمور الصدغية" },
              { "id": "glossitis", "label_en": "Atrophic glossitis / macroglossia", "label_ar": "التهاب اللسان الضموري / تضخم اللسان" }
            ]
          },
          {
            "id": "neck_veins", "type": "radio", "label_en": "Neck Veins (JVP)", "label_ar": "أوردة الرقبة",
            "options": [
              { "value": "normal", "label_en": "Non-congested", "label_ar": "غير محتقنة" },
              { "value": "congested", "label_en": "Congested (tense ascites / pleural or pericardial effusion)", "label_ar": "محتقنة (استسقاء متوتر / انصباب)" }
            ]
          }
        ]
      },
      {
        "id": "abdominal_examination",
        "title_en": "Abdominal Examination",
        "title_ar": "فحص البطن",
        "questions": [
          {
            "id": "positioning", "type": "textarea", "label_en": "Patient Positioning & Exposure", "label_ar": "وضعية المريض والكشف",
            "hint_en": "Expose nipple to symphysis pubis, supine with knees flexed, empty bladder, warm room",
            "hint_ar": "الكشف من الحلمة حتى الارتفاق العاني، الاستلقاء مع ثني الركبتين، إفراغ المثانة"
          },

          { "id": "inspection_heading", "type": "heading", "label_en": "Inspection", "label_ar": "الفحص بالنظر" },
          {
            "id": "abdominal_contour", "type": "select", "label_en": "Abdominal Contour", "label_ar": "محيط البطن",
            "options": [
              { "value": "flat", "label_en": "Flat / normal (slightly scaphoid)", "label_ar": "مسطح / طبيعي" },
              { "value": "scaphoid", "label_en": "Scaphoid (cachectic)", "label_ar": "زورقي (دنف)" },
              { "value": "distended_symmetrical", "label_en": "Symmetrically distended (5 Fs)", "label_ar": "منتفخ متناظر" },
              { "value": "distended_asymmetrical", "label_en": "Asymmetrically distended (organomegaly / mass)", "label_ar": "منتفخ غير متناظر (تضخم عضو / كتلة)" }
            ]
          },
          {
            "id": "inspection_midline", "type": "multicheck", "label_en": "Midline Inspection", "label_ar": "فحص الخط الأوسط",
            "items": [
              { "id": "subcostal_angle", "label_en": "Subcostal angle (obtuse in HSM/ascites)", "label_ar": "الزاوية تحت الضلعية" },
              { "id": "epigastric_pulsation", "label_en": "Epigastric pulsation", "label_ar": "نبض شرسوفي" },
              { "id": "visible_peristalsis", "label_en": "Visible peristalsis (pyloric/intestinal obstruction)", "label_ar": "تمعج مرئي (انسداد بوابي/معوي)" },
              { "id": "divarication_recti", "label_en": "Divarication of recti", "label_ar": "تباعد العضلتين المستقيمتين" },
              { "id": "umbilicus", "label_en": "Umbilicus (site, shape, swelling, discharge)", "label_ar": "السرة (الموقع، الشكل، التورم، الإفراز)" },
              { "id": "hair_distribution", "label_en": "Suprapubic hair distribution", "label_ar": "توزع شعر العانة" }
            ]
          },
          {
            "id": "inspection_sides", "type": "multicheck", "label_en": "Sides & Skin Inspection", "label_ar": "فحص الجوانب والجلد",
            "items": [
              { "id": "respiratory_movement", "label_en": "Respiratory movement", "label_ar": "الحركة التنفسية" },
              { "id": "breast", "label_en": "Breast (gynaecomastia / atrophy)", "label_ar": "الثدي (تثدي / ضمور)" },
              { "id": "hernial_orifices", "label_en": "Hernial orifices (expansile cough impulse)", "label_ar": "فتحات الفتق (نبض سعالي ممدد)" },
              { "id": "dilated_veins", "label_en": "Dilated veins (caput medusae / IVC obstruction)", "label_ar": "أوردة متمددة (رأس الميدوسا / انسداد الأجوف السفلي)" },
              { "id": "cullens_sign", "label_en": "Cullen's sign (peri-umbilical bruising)", "label_ar": "علامة كولن (كدمة حول السرة)" },
              { "id": "grey_turner", "label_en": "Grey Turner's sign (flank bruising)", "label_ar": "علامة غراي تيرنر (كدمة الخاصرة)" },
              { "id": "scratch_marks", "label_en": "Scratch marks (pruritus)", "label_ar": "آثار الحك (الحكة)" },
              { "id": "scars", "label_en": "Scars / striae", "label_ar": "ندبات / تشققات" }
            ]
          },

          { "id": "palpation_heading", "type": "heading", "label_en": "Palpation", "label_ar": "الفحص بالجس" },
          {
            "id": "superficial_palpation", "type": "multicheck", "label_en": "Superficial Palpation", "label_ar": "الجس السطحي",
            "items": [
              { "id": "tenderness", "label_en": "Tenderness / hyperesthesia", "label_ar": "الإيلام / فرط الحس", "marked_if_negative": true },
              { "id": "guarding", "label_en": "Guarding", "label_ar": "التحارس" },
              { "id": "rigidity", "label_en": "Rigidity (peritoneal inflammation)", "label_ar": "التصلب (التهاب بريتوني)" },
              { "id": "rebound_tenderness", "label_en": "Rebound tenderness", "label_ar": "إيلام ارتدادي" },
              { "id": "superficial_swellings", "label_en": "Superficial swellings (lipoma, hernia, varicosities)", "label_ar": "تورمات سطحية (شحموم، فتق، دوالي)" }
            ]
          },
          {
            "id": "liver_palpation", "type": "textarea", "label_en": "Liver (site, size below costal margin, edge, surface, consistency, tenderness, pulsation)", "label_ar": "الكبد (الموقع، الحجم تحت الحافة الضلعية، الحافة، السطح، القوام، الإيلام، النبض)",
            "hint_en": "Sharp edge & firm (cirrhosis/bilharzial fibrosis); hard nodular (malignancy); tender (congestion/inflammation)",
            "hint_ar": "حافة حادة وصلبة (تشمع/تليف بلهارسي)؛ صلب عقدي (خباثة)؛ مؤلم (احتقان/التهاب)"
          },
          {
            "id": "spleen_palpation", "type": "textarea", "label_en": "Spleen (enlargement, notch, moves with respiration)", "label_ar": "الطحال (التضخم، الثلمة، يتحرك مع التنفس)",
            "hint_en": "Splenomegaly is the single most important sign of portal hypertension",
            "hint_ar": "تضخم الطحال أهم علامة مفردة لفرط ضغط الوريد البابي"
          },
          {
            "id": "kidney_palpation", "type": "textarea", "label_en": "Kidneys (bimanual / ballotable)", "label_ar": "الكليتان (ثنائي اليد / قابل للارتداد)"
          },
          {
            "id": "abdominal_masses", "type": "textarea", "label_en": "Other Masses (site, size, shape, edge, consistency, mobility, pulsation, tenderness, intra/extra-abdominal)", "label_ar": "الكتل الأخرى (الموقع، الحجم، الشكل، الحافة، القوام، الحركة، النبض، الإيلام، داخل/خارج البطن)"
          },

          { "id": "percussion_heading", "type": "heading", "label_en": "Percussion", "label_ar": "الفحص بالقرع" },
          {
            "id": "liver_dullness", "type": "textarea", "label_en": "Liver Dullness / Upper Border (tidal percussion)", "label_ar": "البلادة الكبدية / الحد العلوي (القرع المدّي)"
          },
          {
            "id": "ascites_percussion", "type": "multicheck", "label_en": "Ascites Percussion", "label_ar": "قرع الاستسقاء",
            "items": [
              { "id": "shifting_dullness", "label_en": "Shifting dullness", "label_ar": "بلادة متنقلة" },
              { "id": "fluid_thrill", "label_en": "Fluid thrill (tense ascites)", "label_ar": "رجفة سائلية (استسقاء متوتر)" },
              { "id": "horseshoe_dullness", "label_en": "Horseshoe-shaped dullness", "label_ar": "بلادة على شكل حدوة حصان" }
            ]
          },
          {
            "id": "traubes_space", "type": "radio", "label_en": "Traube's Space", "label_ar": "منطقة تراوب",
            "options": [
              { "value": "resonant", "label_en": "Resonant (normal)", "label_ar": "رنان (طبيعي)" },
              { "value": "dull", "label_en": "Dull (splenomegaly / effusion)", "label_ar": "أصم (تضخم طحال / انصباب)" }
            ]
          },

          { "id": "auscultation_heading", "type": "heading", "label_en": "Auscultation", "label_ar": "الفحص بالسماع" },
          {
            "id": "bowel_sounds", "type": "radio", "label_en": "Bowel Sounds", "label_ar": "أصوات الأمعاء",
            "options": [
              { "value": "normal", "label_en": "Normal", "label_ar": "طبيعية" },
              { "value": "exaggerated", "label_en": "Exaggerated (obstruction / diarrhea)", "label_ar": "مفرطة (انسداد / إسهال)" },
              { "value": "absent", "label_en": "Absent (paralytic ileus / peritonitis)", "label_ar": "غائبة (علوص شللي / التهاب بريتوني)" }
            ]
          },
          {
            "id": "auscultation_findings", "type": "multicheck", "label_en": "Other Auscultation Findings", "label_ar": "نتائج السماع الأخرى",
            "items": [
              { "id": "succussion_splash", "label_en": "Succussion splash (pyloric obstruction)", "label_ar": "خضخضة (انسداد بوابي)" },
              { "id": "bruit", "label_en": "Bruit (hepatic / renal artery / aortic aneurysm)", "label_ar": "نفخة وعائية" },
              { "id": "venous_hum", "label_en": "Venous hum (portal hypertension)", "label_ar": "طنين وريدي (فرط ضغط بابي)" },
              { "id": "friction_rub", "label_en": "Friction rub (hepatic/splenic)", "label_ar": "احتكاك (كبدي/طحالي)" }
            ]
          },
          {
            "id": "per_rectal_exam", "type": "textarea", "label_en": "Per Rectal / Per Vaginal Examination", "label_ar": "الفحص الشرجي / المهبلي"
          }
        ]
      }
    ]
  }
];
