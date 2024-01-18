type HindiQuestion = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}
const hindiquestions : HindiQuestion[] =   [
      {
        "id": 1,
        "question": "मेरे पास ___ किताबें हैं।",
        "options": ["एक", "दो", "तीन"],
        "correctAnswer": "तीन"
      },
      {
        "id": 2,
        "question": "वह ___ बड़ी किताब पढ़ रहा है।",
        "options": ["एक", "दो"],
        "correctAnswer": "एक"
      },
      {
        "id": 3,
        "question": "तुम ___ कहाँ से हो?",
        "options": ["क्यों", "कहाँ", "कैसे"],
        "correctAnswer": "कहाँ"
      },
      {
        "id": 4,
        "question": "वह रोज़ ___ पाँच बजे उठता है।",
        "options": ["को", "पर", "में"],
        "correctAnswer": "को"
      },
      {
        "id": 5,
        "question": "तुम रोज़ ___ जाते हो?",
        "options": ["स्कूल", "बाजार"],
        "correctAnswer": "स्कूल"
      },
      {
        "id": 6,
        "question": "आज ___ बहुत ठंडी है।",
        "options": ["हवा", "पानी"],
        "correctAnswer": "हवा"
      },
      {
        "id": 7,
        "question": "मैंने उसे ___ कहा।",
        "options": ["नमस्ते", "अलविदा"],
        "correctAnswer": "नमस्ते"
      },
      {
        "id": 8,
        "question": "वह ___ गाड़ी से आया।",
        "options": ["ट्रेन", "बस"],
        "correctAnswer": "ट्रेन"
      },
      {
        "id": 9,
        "question": "हम ___ खाना बना रहे हैं।",
        "options": ["बहुत", "अब"],
        "correctAnswer": "अब"
      },
      {
        "id": 10,
        "question": "तुम यहाँ ___ क्यों आए हो?",
        "options": ["क्यों", "कैसे"],
        "correctAnswer": "कैसे"
      },
      // {
      //   "id": 11,
      //   "question": "उसने ___ किताब पढ़ी है।",
      //   "options": ["एक", "दो", "तीन"],
      //   "correctAnswer": "एक"
      // },
      // {
      //   "id": 12,
      //   "question": "मैंने उसे ___ देखा है।",
      //   "options": ["कहा", "सुना"],
      //   "correctAnswer": "सुना"
      // },
      // {
      //   "id": 13,
      //   "question": "उसने मुझसे ___ कहा।",
      //   "options": ["नमस्ते", "अलविदा"],
      //   "correctAnswer": "अलविदा"
      // },
      // {
      //   "id": 14,
      //   "question": "हम रोज़ ___ खाते हैं।",
      //   "options": ["सुबह", "रात"],
      //   "correctAnswer": "रात"
      // },
      // {
      //   "id": 15,
      //   "question": "मेरे पास ___ दोस्त हैं।",
      //   "options": ["बहुत", "कुछ"],
      //   "correctAnswer": "कुछ"
      // },
      // {
      //   "id": 16,
      //   "question": "तुम ___ कहाँ जा रहे हो?",
      //   "options": ["कहाँ", "कैसे"],
      //   "correctAnswer": "कहाँ"
      // },
      // {
      //   "id": 17,
      //   "question": "___ एक बड़ा शहर है।",
      //   "options": ["वहाँ", "यहाँ"],
      //   "correctAnswer": "वहाँ"
      // },
      // {
      //   "id": 18,
      //   "question": "मैंने ___ कहा।",
      //   "options": ["हाँ", "नहीं"],
      //   "correctAnswer": "नहीं"
      // },
      // {
      //   "id": 19,
      //   "question": "तुम्हारे पास ___ किताबें हैं।",
      //   "options": ["बहुत", "कुछ"],
      //   "correctAnswer": "कुछ"
      // },
      // {
      //   "id": 20,
      //   "question": "तुम ___ क्यों रो रहे हो?",
      //   "options": ["क्यों", "कैसे"],
      //   "correctAnswer": "कैसे"
      // },
      // {
      //   "id": 21,
      //   "question": "मैंने ___ उसे मिला है।",
      //   "options": ["हाल", "कभी"],
      //   "correctAnswer": "कभी"
      // },
      // {
      //   "id": 22,
      //   "question": "वह ___ रोज़ स्कूल जाता है।",
      //   "options": ["हमेशा", "कभी"],
      //   "correctAnswer": "हमेशा"
      // },
      // {
      //   "id": 23,
      //   "question": "तुम यह ___ क्यों पहन रहे हो?",
      //   "options": ["कपड़ा", "सोने"],
      //   "correctAnswer": "कपड़ा"
      // },
      // {
      //   "id": 24,
      //   "question": "वह ___ गाड़ी से आया।",
      //   "options": ["ट्रेन", "बस"],
      //   "correctAnswer": "ट्रेन"
      // },
      // {
      //   "id": 25,
      //   "question": "तुम ___ खाना बना रहे हो?",
      //   "options": ["बहुत", "अब"],
      //   "correctAnswer": "अब"
      // },
      // {
      //   "id": 26,
      //   "question": "आप ___ से हैं?",
      //   "options": ["कहाँ", "कैसे"],
      //   "correctAnswer": "कहाँ"
      // },
      // {
      //   "id": 27,
      //   "question": "आप ___ क्यों हंस रहे हैं?",
      //   "options": ["क्यों", "कैसे"],
      //   "correctAnswer": "कैसे"
      // },
      // {
      //   "id": 28,
      //   "question": "तुम ___ कहाँ जा रहे हो?",
      //   "options": ["कहाँ", "कैसे"],
      //   "correctAnswer": "कहाँ"
      // },
      // {
      //   "id": 29,
      //   "question": "हम ___ खेत में काम कर रहे हैं।",
      //   "options": ["सबसे", "समय"],
      //   "correctAnswer": "सबसे"
      // },
      // {
      //   "id": 30,
      //   "question": "तुम ___ बच्चों को सिखा रहे हो?",
      //   "options": ["क्या", "कैसे"],
      //   "correctAnswer": "कैसे"
      // },
      // {
      //   "id": 31,
      //   "question": "उसने ___ कहा।",
      //   "options": ["हाँ", "नहीं"],
      //   "correctAnswer": "नहीं"
      // },
      // {
      //   "id": 32,
      //   "question": "हम ___ रोज़ स्कूल जाते हैं।",
      //   "options": ["हमेशा", "कभी"],
      //   "correctAnswer": "हमेशा"
      // },
      // {
      //   "id": 33,
      //   "question": "मैंने ___ उसे मिला है।",
      //   "options": ["हाल", "कभी"],
      //   "correctAnswer": "कभी"
      // },
      // {
      //   "id": 34,
      //   "question": "वह ___ रोज़ स्कूल जाता है।",
      //   "options": ["हमेशा", "कभी"],
      //   "correctAnswer": "हमेशा"
      // },
      // {
      //   "id": 35,
      //   "question": "तुम यह ___ क्यों पहन रहे हो?",
      //   "options": ["कपड़ा", "सोने"],
      //   "correctAnswer": "कपड़ा"
      // },
      // {
      //   "id": 36,
      //   "question": "हम ___ रात को सोते हैं।",
      //   "options": ["सबसे", "समय"],
      //   "correctAnswer": "समय"
      // },
      // {
      //   "id": 37,
      //   "question": "तुम ___ क्यों हंस रहे हैं?",
      //   "options": ["क्यों", "कैसे"],
      //   "correctAnswer": "कैसे"
      // },
      // {
      //   "id": 38,
      //   "question": "आप ___ से हैं?",
      //   "options": ["कहाँ", "कैसे"],
      //   "correctAnswer": "कहाँ"
      // },
      // {
      //   "id": 39,
      //   "question": "तुम ___ बच्चों को सिखा रहे हो?",
      //   "options": ["क्या", "कैसे"],
      //   "correctAnswer": "कैसे"
      // },
      // {
      //   "id": 40,
      //   "question": "हम ___ खेत में काम कर रहे हैं।",
      //   "options": ["सबसे", "समय"],
      //   "correctAnswer": "सबसे"
      // },
      // {
      //   "id": 41,
      //   "question": "तुम ___ कहाँ जा रहे हो?",
      //   "options": ["कहाँ", "कैसे"],
      //   "correctAnswer": "कहाँ"
      // },
      // {
      //   "id": 42,
      //   "question": "मैंने ___ उसे मिला है।",
      //   "options": ["हाल", "कभी"],
      //   "correctAnswer": "कभी"
      // },
      // {
      //   "id": 43,
      //   "question": "वह ___ रोज़ स्कूल जाता है।",
      //   "options": ["हमेशा", "कभी"],
      //   "correctAnswer": "हमेशा"
      // },
      // {
      //   "id": 44,
      //   "question": "तुम यह ___ क्यों पहन रहे हो?",
      //   "options": ["कपड़ा", "सोने"],
      //   "correctAnswer": "कपड़ा"
      // },
      // {
      //   "id": 45,
      //   "question": "हम ___ रात को सोते हैं।",
      //   "options": ["सबसे", "समय"],
      //   "correctAnswer": "समय"
      // },
      // {
      //   "id": 46,
      //   "question": "मैंने ___ उसे मिला है।",
      //   "options": ["हाल", "कभी"],
      //   "correctAnswer": "कभी"
      // },
      // {
      //   "id": 47,
      //   "question": "वह ___ रोज़ स्कूल जाता है।",
      //   "options": ["हमेशा", "कभी"],
      //   "correctAnswer": "हमेशा"
      // },
      // {
      //   "id": 48,
      //   "question": "तुम यह ___ क्यों पहन रहे हो?",
      //   "options": ["कपड़ा", "सोने"],
      //   "correctAnswer": "कपड़ा"
      // },
      // {
      //   "id": 49,
      //   "question": "हम ___ रात को सोते हैं।",
      //   "options": ["सबसे", "समय"],
      //   "correctAnswer": "समय"
      // }
    ]

export default hindiquestions

