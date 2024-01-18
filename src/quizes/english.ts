type EnglishQuestion = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}
const englishquestions: EnglishQuestion[] = [
      {
        "id": 1,
        "question": "I spoke to ____.",
        "options": ["she", "her"],
        "correctAnswer": "her"
      },
      {
        "id": 2,
        "question": "Where ____ you come from?",
        "options": ["do", "are"],
        "correctAnswer": "do"
      },
      {
        "id": 3,
        "question": "What time does she ___ up?",
        "options": ["get", "gets"],
        "correctAnswer": "get"
      },
      {
        "id": 4,
        "question": "Where ___ he live?",
        "options": ["do", "does"],
        "correctAnswer": "does"
      },
      {
        "id": 5,
        "question": "'I am not ____ this film.'",
        "options": ["liking", "enjoying"],
        "correctAnswer": "enjoying"
      },
      {
        "id": 6,
        "question": "I am seeing her ____ three o'clock.",
        "options": ["in", "at", "on"],
        "correctAnswer": "at"
      },
      {
        "id": 7,
        "question": "Easter is ___ March this year.",
        "options": ["on", "at", "in"],
        "correctAnswer": "in"
      },
      {
        "id": 8,
        "question": "She's ____ work all day today.",
        "options": ["at", "on"],
        "correctAnswer": "at"
      },
      {
        "id": 9,
        "question": "I go ___ by bus.",
        "options": ["home", "to home"],
        "correctAnswer": "home"
      },
      {
        "id": 10,
        "question": "'Do you like it?' 'Yes, I like.'",
        "options": ["'Yes, I like.'", "'Yes, I do.'"],
        "correctAnswer": "'Yes, I do.'"
      },
      // {
      //   "id": 11,
      //   "question": "It's the second road ___ the left.",
      //   "options": ["in", "at", "on"],
      //   "correctAnswer": "on"
      // },
      // {
      //   "id": 12,
      //   "question": "He's arriving ___ the station at six.",
      //   "options": ["at", "on", "to"],
      //   "correctAnswer": "at"
      // },
      // {
      //   "id": 13,
      //   "question": "I ___ what she's saying.",
      //   "options": ["can't understand", "am not understanding"],
      //   "correctAnswer": "can't understand"
      // },
      // {
      //   "id": 14,
      //   "question": "She lives ___ London.",
      //   "options": ["on", "at", "in"],
      //   "correctAnswer": "in"
      // },
      // {
      //   "id": 15,
      //   "question": "I'm going ___ the bank to get some cash.",
      //   "options": ["at", "to"],
      //   "correctAnswer": "to"
      // },
      // {
      //   "id": 16,
      //   "question": "I went there ____ foot.",
      //   "options": ["in", "by", "at", "on", "to"],
      //   "correctAnswer": "on"
      // },
      // {
      //   "id": 17,
      //   "question": "____ is a cinema in the shopping centre.",
      //   "options": ["There", "It"],
      //   "correctAnswer": "There"
      // },
      // {
      //   "id": 18,
      //   "question": "I went ____ with my sister.",
      //   "options": ["their", "there"],
      //   "correctAnswer": "there"
      // },
      // {
      //   "id": 19,
      //   "question": "She ____ as a doctor.",
      //   "options": ["is", "works"],
      //   "correctAnswer": "works"
      // },
      // {
      //   "id": 20,
      //   "question": "She ___ a doctor.",
      //   "options": ["is", "works"],
      //   "correctAnswer": "is"
      // },
      // {
      //   "id": 21,
      //   "question": "How ___ did your journey take?",
      //   "options": ["long", "long time"],
      //   "correctAnswer": "long"
      // },
      // {
      //   "id": 22,
      //   "question": "He comes ____ the north of the country.",
      //   "options": ["to", "from"],
      //   "correctAnswer": "from"
      // },
      // {
      //   "id": 23,
      //   "question": "She ____ goodbye.",
      //   "options": ["said", "told", "spoke"],
      //   "correctAnswer": "said"
      // },
      // {
      //   "id": 24,
      //   "question": "They are ___ love.",
      //   "options": ["in", "on", "at", "to", "by"],
      //   "correctAnswer": "in"
      // },
      // {
      //   "id": 25,
      //   "question": "You _____ drink and drive.",
      //   "options": ["may", "must", "may not", "must not"],
      //   "correctAnswer": "must not"
      // },
      // {
      //   "id": 26,
      //   "question": "She's studying law ____ university.",
      //   "options": ["in", "at"],
      //   "correctAnswer": "at"
      // },
      // {
      //   "id": 27,
      //   "question": "The bus stopped ___ the traffic lights.",
      //   "options": ["in", "on", "at"],
      //   "correctAnswer": "at"
      // },
      // {
      //   "id": 28,
      //   "question": "She ____ English twice a week.",
      //   "options": ["study", "studys", "studeis", "studies"],
      //   "correctAnswer": "studies"
      // },
      // {
      //   "id": 29,
      //   "question": "____ is it?",
      //   "options": ["Who's", "Whose"],
      //   "correctAnswer": "Who's"
      // },
      // {
      //   "id": 30,
      //   "question": "___ you afford it?",
      //   "options": ["Do", "Can"],
      //   "correctAnswer": "Can"
      // },
      // {
      //   "id": 31,
      //   "question": "They aren't selling ____ tickets.",
      //   "options": ["much", "many"],
      //   "correctAnswer": "many"
      // },
      // {
      //   "id": 32,
      //   "question": "There isn't ______ for all of us to get in.",
      //   "options": ["room enough", "enough room"],
      //   "correctAnswer": "enough room"
      // },
      // {
      //   "id": 33,
      //   "question": "The police ___ called.",
      //   "options": ["was", "were"],
      //   "correctAnswer": "were"
      // },
      // {
      //   "id": 34,
      //   "question": "In a shop, you are a ____.",
      //   "options": ["client", "customer"],
      //   "correctAnswer": "customer"
      // },
      // {
      //   "id": 35,
      //   "question": "It's bigger ____ the old one.",
      //   "options": ["as", "than", "then"],
      //   "correctAnswer": "than"
      // },
      // {
      //   "id": 36,
      //   "question": "'___ did she do it?' 'Yesterday.'",
      //   "options": ["Why", "Where", "When", "How"],
      //   "correctAnswer": "How"
      // },
      // {
      //   "id": 37,
      //   "question": "How ___ you spell it?",
      //   "options": ["do", "can"],
      //   "correctAnswer": "do"
      // },
      // {
      //   "id": 38,
      //   "question": "How much did you ___ in the shop?",
      //   "options": ["cost", "spend"],
      //   "correctAnswer": "spend"
      // },
      // {
      //   "id": 39,
      //   "question": "'How ___ did you buy?' 'Three kilos.'",
      //   "options": ["much", "many"],
      //   "correctAnswer": "much"
      // },
      // {
      //   "id": 40,
      //   "question": "I don't work ____ the morning.",
      //   "options": ["on", "in", "at"],
      //   "correctAnswer": "in"
      // },
      // {
      //   "id": 41,
      //   "question": "I saw her ___.",
      //   "options": ["last week", "the last week"],
      //   "correctAnswer": "last week"
      // },
      // {
      //   "id": 42,
      //   "question": "It costs ____ dollars.",
      //   "options": ["forty", "fourty"],
      //   "correctAnswer": "forty"
      // },
      // {
      //   "id": 43,
      //   "question": "I heard it ___ the radio.",
      //   "options": ["in", "at", "on"],
      //   "correctAnswer": "on"
      // },
      // {
      //   "id": 44,
      //   "question": "There ____ a lot of complaints.",
      //   "options": ["was", "were"],
      //   "correctAnswer": "were"
      // },
      // {
      //   "id": 45,
      //   "question": "There ____ a lot of sugar in the coffee.",
      //   "options": ["was", "were"],
      //   "correctAnswer": "was"
      // },
      // {
      //   "id": 46,
      //   "question": "He didn't work ____.",
      //   "options": ["enough hard", "hard enough"],
      //   "correctAnswer": "hard enough"
      // },
      // {
      //   "id": 47,
      //   "question": "I ____ her.",
      //   "options": ["am not knowing", "don't know", "doesn't know"],
      //   "correctAnswer": "don't know"
      // },
      // {
      //   "id": 48,
      //   "question": "___ girlfriend left him.",
      //   "options": ["He", "Him", "His"],
      //   "correctAnswer": "His"
      // },
      // {
      //   "id": 49,
      //   "question": "There are too ____ questions in this test.",
      //   "options": ["much", "many"],
      //   "correctAnswer": "many"
      // },
      // {
      //   "id": 50,
      //   "question": "I hope you do ___ in this test.",
      //   "options": ["good", "well"],
      //   "correctAnswer": "well"
      // }
    ]
export default englishquestions;