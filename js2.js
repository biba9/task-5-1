let currentInput = '';  // لحفظ الإدخال الحالي

function appendToDisplay(value) {
    currentInput += value;  // إضافة الزر الذي تم النقر عليه إلى الإدخال
    document.getElementById('display').value = currentInput;  // عرض السلسلة المحدثة في حقل العرض
}

function clearDisplay() {
    currentInput = '';  // مسح الإدخال الحالي
    document.getElementById('display').value = '';  // مسح حقل العرض
}

function calculateResult() {
    let operator; // متغير لحفظ العملية الحسابية
    let operands; // مصفوفة لحفظ الأرقام

    // التحقق من نوع العملية الحسابية وتجزئة الإدخال
    if (currentInput.includes('+')) {
        operator = '+';
        operands = currentInput.split('+');
    } else if (currentInput.includes('-')) {
        operator = '-';
        operands = currentInput.split('-');
    } else if (currentInput.includes('*')) {
        operator = '*';
        operands = currentInput.split('*');
    } else if (currentInput.includes('/')) {
        operator = '/';
        operands = currentInput.split('/');
    } else {
        document.getElementById('display').value = "خطأ: عملية غير صالحة"; // في حالة عدم وجود عملية
        return; // الخروج من الدالة
    }

    // تحويل الأرقام إلى نوع number
    const num1 = parseFloat(operands[0]);
    const num2 = parseFloat(operands[1]);
    let result;

    // استخدام switch لتحديد العملية الحسابية
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                document.getElementById('display').value = "خطأ: قسمة على صفر"; // منع القسمة على صفر
                return; // الخروج من الدالة
            }
            result = num1 / num2;
            break;
        default:
            document.getElementById('display').value = "خطأ: عملية غير صالحة"; // حالة افتراضية غير متوقعة
            return; // الخروج من الدالة
    }

    document.getElementById('display').value = result;  // عرض النتيجة
    currentInput = result.toString();  // تحديث currentInput بالنتيجة الجديدة
}
