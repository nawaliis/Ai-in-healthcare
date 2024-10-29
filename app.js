// مصفوفة الأعراض تحتوي على الكلمات المفتاحية لكل عرض والنصيحة المقابلة له
const symptomsDatabase = {
    'حمى': {
        keywords: ['حمى', 'حرارة', 'سخونة'],
        message: 'قد تشير الأعراض إلى عدوى. يُنصح بزيارة الطبيب.'
    },
    'صداع': {
        keywords: ['صداع', 'دوخة', 'وجع رأس'],
        message: 'قد تكون تعاني من إجهاد أو صداع نصفي. تأكد من الراحة والترطيب.'
    },
    'كحة': {
        keywords: ['كحة', 'سعال', 'كحه', 'كحة جافة'],
        message: 'قد يكون لديك أعراض برد. حاول شرب السوائل الدافئة.'
    },
    'آلام في الجسم': {
        keywords: ['آلام في الجسم', 'تعب', 'ألم عام'],
        message: 'يمكن أن تكون نتيجة لعدوى أو إرهاق. حاول الاسترخاء.'
    },
    'غثيان': {
        keywords: ['غثيان', 'دوار', 'ميل للقيء'],
        message: 'قد يكون لديك مشكلة في المعدة. اشرب سوائل وارتاح.'
    },
    'إسهال': {
        keywords: ['إسهال', 'تلبك معوي', 'إسهال مستمر'],
        message: 'تأكد من شرب السوائل. إذا استمر، عليك مراجعة طبيب.'
    },
    'ألم في الصدر': {
        keywords: ['ألم في الصدر', 'ضيق في الصدر', 'حرقة'],
        message: 'قد يكون علامة على حالة طبية خطيرة. اتصل بالطبيب أو توجه إلى الطوارئ.'
    },
    // أضف المزيد من الأعراض حسب الحاجة
};

// دالة تحليل الأعراض
function analyzeSymptoms() {
    const symptomsInput = document.getElementById("symptoms-input").value.toLowerCase();
    const diagnosisResult = document.getElementById("diagnosis-result");

    // تقسيم الأعراض المدخلة إلى مصفوفة
    const symptomsArray = symptomsInput.split(',').map(symptom => symptom.trim());
    let results = [];

    // مقارنة كل عرض مدخل بالكلمات المفتاحية لكل عرض في مصفوفة الأعراض
    symptomsArray.forEach(inputSymptom => {
        let foundMatch = false;

        for (let symptom in symptomsDatabase) {
            const { keywords, message } = symptomsDatabase[symptom];

            // البحث عن أي كلمة مفتاحية تتشابه مع المدخل
            if (keywords.some(keyword => inputSymptom.includes(keyword))) {
                results.push(message);
                foundMatch = true;
                break;
            }
        }

        // إذا لم يتم العثور على تطابق
        if (!foundMatch) {
            results.push('لا توجد معلومات متاحة.');
        }
    });

    // إظهار النتائج
    diagnosisResult.textContent = results.join('\n');
}

// دالة لإعادة ضبط الحقول
function resetFields() {
    document.getElementById("symptoms-input").value = "";
    document.getElementById("diagnosis-result").textContent = "";
}
