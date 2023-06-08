import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations...
          vocab: {
            with: "with",
            thanks: "Thank you !",
            soon: "Coming soon !",
            version: "Version",
          },
          nav: {
            home: "Home",
            day1: "Day 1",
            day2: "Day 2",
            day3: "Day 3",
            day4: "Day 4",
            day5: "Day 5",
            day6: "Day 6",
            day7: "Day 7",
          },
          cover: {
            tagBold: "Get",
            tagline: "the life you deserve",
            nav:
              "By merging spirituality and the latest scientific findings, LVQM invites you to explore the way your beliefs, emotions, thoughts and actions can be changed in order to reach internal peace and any of your dreams !",
            cta: "Let's go !",
            lvqmLife: "The life",
            lvqmI: " I deserve",
            lvqmYou: " you deserve",
            lvqmShe: " she deserves",
            lvqmHe: " he deserves",
          },
          books: {
            finally: "Finally",
            description: "A book about personal growth that is truly personal",
            priceCatch: "Starting at 2€",
            cheaperFree: "(Cheaper is Free)",
            title: "Here are the first 10 pages, we got you 🎁",
            firstPage: "../img/page1-fr.png",
            cta: "Read an extract",
            shopCTA: "🛒 Buy",
          },
          cards: {
            title: "All the cards are in your hand",
            subTitle:
              "LVQM gives you the tools you need to progress towards the life you deserve",
            peaceEmoji: "🧠",
            peaceTitle: "Internal Peace",
            peaceContent:
              "I understand the origin of my limiting beliefs, I tame my emotions and I become a master of my thoughts",
            bodyEmoji: "💪",
            bodyTitle: "Body",
            bodyContent:
              "I re-align my body and my mind through physical activity and I anchor self-confidence in my new way of being",
            healthEmoji: "❤️",
            healthTitle: "Health",
            healthContent:
              "I strengthen my immune system and increase my energy by taking control of stress factors",
            communityEmoji: "☀️",
            communityTitle: "Community",
            communityContent:
              "By embarking on the LVQM adventure, I join a close-knit community around the same goal: achieving the life we deserve.",
            manifestationEmoji: "🙏",
            manifestationTitle: "Manifestation",
            manifestationContent:
              "I learn to achieve my goals more easily by aligning them with my inner world",
            passionEmoji: "🚀",
            passionTitle: "Passion",
            passionContent:
              "I strengthen my immune system and increase my energy by taking control of stress factors",
          },
          pros: {
            titleMain: "The personal development that will truly",
            titleBold: "change your life",
            first: "+ Inner peace",
            second: "+ Freedom",
            third: "+ Opportunities",
            fourth: "+ Self confidence",
            fifth: "+ Love",
            sixth: "+ Energy",
          },
          cons: {
            first: "- stress",
            second: "- limiting beliefs",
            third: "- comfort zone",
            fourth: "- self-doubt",
            fifth: "- grudges",
            sixth: "- health issues",
          },
          faq: {
            how: "How ?",
            bookEmoji: "📚",
            book: "1. A comprehensive book",
            bookText:
              "To better understand how to use your body and your mind, the LVQM method is inspired by psychology, physics, neurosciences, medicine and philosophies from around the world",
            coachingEmoji: "🤝",
            coaching: "2. A personalized coaching",
            coachingText:
              "To better navigate your personal situation, define your objectives and set up a personalized action plan to achieve them all",
            expertsEmoji: "✅",
            experts: "3. Advice from experts",
            expertsText:
              "To benefit from the advice of specialists and world-class athletes. The cream of the crop at the service of the life you deserve",
            community: "4. The LVQM community",
            communityText:
              "To benefit from the power of unity and move forward together: let's give each other strength and good vibes!",

            communityEmoji: "🫶",
          },
          testimonials: {
            start: "They",
            bold: "trust us",
            marieTitle: "M.",
            marieSubtitle: "@Marie",
            marieDescription:
              "I followed the LVQM program to best prepare for my professional transition. The Ebook and Mateo's support allowed me to approach interviews with more calm and confidence. Snapchat recruiters even underlined my mindset when they told me I got the job! Thank you LVQM! ✨",
            dennisTitle: "Dennis",
            dennisSubtitle: "@Dennis",
            dennisDescription:
              "My well-being relies on an ideal balance between my spirit and my soul. I achieved this alignment thanks to the discussions and benevolent advice given by the friends and mentors that Simon and Mateo are. Today, I visualize my goals in accordance with my values ​​and am finding my 'why' in life thanks to the LVQM community",
            barbaraTitle: "Barbara",
            barbaraSubtitle: "@Barbara",
            barbaraDescription:
              "I had the chance to meet Mateo and follow the LVQM program. You know there is this kind of person with whom you spend an hour and they give you a boost of energy like never before! Thanks to LVQM, I found incredible strength and positivity to carry out my new projects and live life differently, full of love 🥰 I feel more fulfilled and life gives me so much in return. LVQM is part of my new way of life and I wish you all to feel this happiness 🤍",
            lionelTitle: "Lionel",
            lionelSubtitle: "@Lionel",
            lionelDescription:
              "LVQM allowed me to flourish in a career that really fits me. I had the chance to explore many areas in sport and law, including working with the Congolese national football team, being a Scout for the Manchester City academy or teaching Winsport School. Finding this balance between pedagogy with the next generation, sport and law makes me more happy everyday and I thank LVQM for the great advice that lead me closer to this path which has only just begun !",
            miraTitle: "Mira",
            miraSubtitle: "@mirasaadallah",
            miraDescription:
              "My ambition was to give up some bad habits to adopt those of a healthy morning routine, physical activity, and to take care of myself. At first it was not easy but I kept up the pace thanks to my LVQM follow-ups!",
            jeanneTitle: "jeanne",
            jeanneSubtitle: "@jeanne_lhx",
            jeanneDescription:
              "I had the chance to know Mateo and Simon several years ago during my professional career and to follow the evolution of LVQM. For my part, LVQM allowed me to ask myself the right questions about what I wanted and what I no longer wanted in my professional and personal life, to evacuate my frustrations and to be in agreement with my evolution and my choices. I advise anyone who wants to see more clearly and approach life in a more serene way to read the e-books and join the LVQM community 🙌🏻",
          },
          productDetails: {
            title: "LVQM, the adventure towards the life you deserve",
            language: "Language",
            format: "Format",
            ebook: "Ebook",
            paper: "Paperback - Matte finish",
            paperEbook: "Pre-order paperback + Ebook",
            currency: "€",
          },
          coaching: {
            motivationTitle: "You can do it too !",
            motivationText:
              "95% of participants have seen an impact during their first week of coaching and concrete results towards their goals after four weeks",
            lvqm: "LVQM",
            coaching: "COACHING",
            description:
              "LVQM's individual coaching program was created to help you achieve your personal goals, apply the concepts of the book “The adventure towards the life you deserve” and adapt them to your situation",
            tryout: "Activate my test session",
            timeline: {
              title: "Your personalised support",
              firstEmoji: "📖 ",
              firstTitle: "Preparation",
              firstDescription:
                "Dive into the LVQM book, it will be your guide throughout your journey",
              secondEmoji: "👌 ",
              secondTitle: "1st session",
              secondDescription:
                "We discuss your story, your current challenges and your life goals",
              thirdEmoji: "💪 ",
              thirdTitle: "Action plan",
              thirdDescription:
                "Your LVQM coach prepares a personalised program for you so that you can progress in a quick and healthy way",
              fourthEmoji: "🚀 ",
              fourthTitle: "Practice",
              fourthDescription:
                "Integrate the action plan into your daily routine with the help of your coach",
              tryout: "Activate my test session",
              impact1: "1 - Choose your ",
              impact2: "impact areas",
            },
            cta: "Let's start ! 🚀",
          },
          coaches: {
            title1: "2 - Choose ",
            title2: "your coach",
          },
          formulas: {
            title1: "3 - Choose ",
            title2: "your plan",
            ebook: "📖 Ebook LVQM",
            group: "🫶 Access to the LVQM private group",
            study: "✍️ 1 personalized assessment",
            plan: "💪 Your custom action plan",
            coaching1: "✨ 1 coaching session (30 minutes)",
            coaching2: "✨ 2 coaching sessions (30 minutes)",
            coaching10: "✨ 10 coaching sessions (30 minutes)",
            goodies: "🎁 1 pack of LVQM goodies",
            starterSubtitle: "Perfect to get started",
            regularSubtitle: "Let's pick things up",
            premiumSubtitle: "Shooting for the stars",
          },
          impacts: {
            impact1: "1 - Choose your ",
            impact2: "impact areas",
            trust: "Gain self confidence",
            forgive: "Forgiveness",
            career: "Change careers",
            passion: "Discover my passion",
            love: "Find love",
            health: "Improve my health",
            goal: "Reach my goals",
            sport: "Exercise more",
            mateoRating: "⭐ 5 (33 ratings)",
            mateoDescription:
              "Thanks to my experiences as an athlete in the French Track & Field team, as a Partnerships Manager at Facebook as well as my personal development journey, I've come to understand how everything is linked to our way of being. I have spent the past few years applying the LVQM concepts to my life and have seen it change for the better, whether it be in my friendships, work, love, family, financial situation or general happiness. Today, my goal is to help you get to the same point and more!",
            mayaRating: "⭐ 5 (26 ratings)",
            mayaDescription:
              "Professional coach for 2 years after 14 years in the corporate world, everything I do is focused on one ultimate goal: to help you break down the barriers that prevent you from fully expressing your potential and embodying your deep identity: unique, authentic and powerful. For this, I intend to pass on to you my contagious energy and all the tools that have allowed me to free myself from my own barriers (impostor syndrome, limiting beliefs... you know what I mean?) and to create a life on my terms. Ready to build the bridge that will lead you to the next stage of life you deserve ?",

            priceTag: "🏷️ Starting at 30 €",
          },
          checkout: {
            order: "💫 Your order is on the way ! 💫",
            info: "Your info",
            payment: "Your payment",
            firstname: "First name",
            lastname: "Last name",
            email: "Email",
            address: "Address",
            zip: "Postal code",
            city: "City",
            country: "Country",
            orderComing: "✉️ Your order is on the way ✨",
            error: "Please fill out all the fields",
            cardInvalid: "Please input valid card info",
          },
          footer: {
            cta: "Let's go ! 👉",
            emoji: "❤️",
            tagline: "Welcome to the LVQM community !",
            description:
              "Join a community of experts and caring souls. Sometimes a first step into the unknown is the only thing that separates you from the life you deserve",
            insta: "@lvqm_en",
            instaURL: "https://www.instagram.com/lvqm_en",
          },
        },
      },
      fr: {
        translation: {
          vocab: {
            with: "avec",
            thanks: "Merci !",
            soon: "Bientôt !",
            version: "Version",
          },
          nav: {
            home: "Accueil",
            day1: "Jour 1",
            day2: "Jour 2",
            day3: "Jour 3",
            day4: "Jour 4",
            day5: "Jour 5",
            day6: "Jour 6",
            day7: "Jour 7",
          },
          cover: {
            tagBold: "Atteins",
            tagline: "la vie que tu mérites",
            description:
              "En alliant la spiritualité et les dernières avancées scientifiques, LVQM t’invite à explorer comment tes croyances, émotions, pensées et actions peuvent êtres modifiées afin d’atteindre la paix intérieure et n’importe quel objectif !",
            cta: "C'est parti !",
            lvqmLife: "La vie",
            lvqmI: " que je mérite",
            lvqmYou: " que tu mérites",
            lvqmShe: " qu'elle mérite",
            lvqmHe: " qu'il mérite",
          },
          books: {
            finally: "Enfin",
            description: "Un livre de développement vraiment personnel",
            priceCatch: "Et à partir de 2€",
            cheaperFree: "(Moins cher c'est gratuit)",
            title: "Voici les 10 premières pages, c'est cadeau 🎁",
            cta: "Lire un extrait",
            shopCTA: "🛒 Acheter",
          },
          cards: {
            title: "Tu as toutes les cartes en main",
            subTitle:
              "LVQM te donne tous les outils nécessaires pour progresser  vers la vie que tu mérites",
            peaceEmoji: "🧠",
            peaceTitle: "Paix intérieure",
            peaceContent:
              "Je comprends l’origine de mes croyances limitantes, j’apprivoise mes émotions et je deviens maître de mes pensées",
            bodyEmoji: "💪",
            bodyTitle: "Corps",
            bodyContent:
              "Je ré-équilibre mon corps et mon esprit grâce à l’activité physique et j’ancre la confiance en moi dans ma nouvelle manière d’être",
            healthEmoji: "❤️",
            healthTitle: "Santé",
            healthContent:
              "Je renforce mon système immunitaire et j’accrois mon énergie en prenant le contrôle sur les facteurs de stress",
            communityEmoji: "☀️",
            communityTitle: "Communauté",
            communityContent:
              "En me lançant dans l’aventure LVQM, je rejoins une communauté soudée autour d’un même but : atteindre la vie qu'elle mérite",
            manifestationEmoji: "🙏",
            manifestationTitle: "Manifestation",
            manifestationContent:
              "J’apprends à atteindre plus facilement mes objectifs en les alignant avec mon univers intérieur",
            passionEmoji: "🚀",
            passionTitle: "Passion",
            passionContent:
              "Je m’épanouie davantage et donne un sens plus profond à ma vie en trouvant une activité qui me passionne vraiment",
          },
          pros: {
            titleMain: "Le développement personnel qui va vraiment",
            titleBold: "changer ta vie",
            first: "+ de Sérénité",
            second: "+ de Liberté",
            third: "+ d'Opportunités",
            fourth: "+ Confiance en soi",
            fifth: "+ d'Amour",
            sixth: "+ de Forme physique",
          },
          cons: {
            first: "- de stress",
            second: "- de croyances limitantes",
            third: "- de zone de comfort",
            fourth: "- de remise en question",
            fifth: "- de ressentiment",
            sixth: "- de problèmes de santé",
          },
          faq: {
            how: "Comment ?",
            bookEmoji: "📚",
            book: "1. Un livre complet",
            bookText:
              "Pour mieux comprendre comment utiliser ton corps et ton esprit, la méthode LVQM s’inspire de la psychologie, de la physique, des neurosciences, de la médecine et des philosophies du monde entier",
            coachingEmoji: "🤝",
            coaching: "2. Un coaching sur mesure",
            coachingText:
              "Pour mieux naviguer ta situation personnelle, définir tes objectifs et mettre en place un plan d’action personnalisé pour tous les atteindre",
            expertsEmoji: "✅",
            experts: "3. Des conseils d'experts",
            expertsText:
              "Pour bénéficier des conseils de spécialistes et sportifs de haut niveau. La crème de la crème au service de la vie que tu mérites",
            communityEmoji: "🫶",
            community: "4. La communauté LVQM",
            communityText:
              "Pour bénéficier du pouvoir de l’unité et avancer ensemble: donnons nous mutuellement de la force et de l'énergie positive !",
          },
          testimonials: {
            start: "Ils nous font",
            bold: "confiance",
            marieTitle: "M.",
            marieSubtitle: "@Marie",
            marieDescription:
              "J’ai suivi le programme LVQM pour préparer au mieux ma transition professionnelle. Le Ebook et l'accompagnement de Mateo m’ont permis d’approcher les entretiens avec plus de calme et de confiance. Les recruteurs de Snapchat ont même souligné mon état d’esprit lorsqu’ils m’ont annoncé que j’avais le job! Merci LVQM ! ✨",
            dennisTitle: "Dennis",
            dennisSubtitle: "@Dennis",
            dennisDescription:
              "Mon bien-être passe par un équilibre idéal entre mon esprit et mon âme. Cet alignement je l'ai atteint à travers des discussions et conseils bienveillants donnés par les amis et mentors que sont Simon et Mateo. Aujourd'hui, je visualise mes objectifs en accords avec mes valeurs et mon 'pourquoi' grâce à la communauté LVQM",
            barbaraTitle: "Barbara",
            barbaraSubtitle: "@barbaraopsomer",
            barbaraDescription:
              "J’ai eu la chance de rencontrer Mateo et de suivre le programme LVQM. Vous savez il y a ce genre de personne avec qui vous passez une heure et qui vous redonne un coup de boost comme jamais ! Grâce à LVQM, j’ai retrouvé une force et une positivité incroyable pour mener à bien mes nouveaux projets et vivre la vie différemment, remplie d'amour 🥰 Je me sens tellement plus épanouie et la vie me le rend bien. LVQM fait partie de ma nouvelle manière de vivre et je vous souhaite à tous ce bonheur 🤍",
            lionelTitle: "Lionel",
            lionelSubtitle: "@lionel.ingende",
            lionelDescription:
              "LVQM m’a permis de m’épanouir dans une carrière qui me ressemble vraiment. J’ai eu la chance d’explorer de nombreux domaines dans le sport et le droit, notamment en travaillant avec l’équipe nationale de football congolaise, en étant scoot pour l’académie de Manchester City ou en enseignant dans l’école de management du sport Winsport School. Trouver cet équilibre entre la pédagogie auprès des jeunes, le sport et le droit me rend de plus en plus heureux et je remercie LVQM pour les nombreux conseils m’ayant rapprochés de cette voie qui ne fait que commencer !",
            miraTitle: "Mira",
            miraSubtitle: "@mirasaadallah",
            miraDescription:
              "J’avais pour ambition d’abandonner quelques mauvaises habitudes pour adopter celles d’une routine matinale saine, sportive, et prendre soin de moi. Au départ ça n’a pas été évident mais j’ai tenu le rythme avec mon suivi LVQM !",
            jeanneTitle: "jeanne",
            jeanneSubtitle: "@jeanne_lhx",
            jeanneDescription:
              "J’ai eu la chance de connaître Mateo et Simon il y a maintenant plusieurs années lors de mon parcours professionnel et de suivre l’évolution d'LVQM. Pour ma part, LVQM m’a permis de me poser les bonnes questions sur ce que je voulais et ce que je ne voulais plus dans ma vie pro et perso, évacuer mes frustrations et être en accord avec mon évolution et mes choix. Je conseille à tous ceux qui souhaitent y voir plus clair et aborder la vie de manière plus sereine de lire le e-books et de rejoindre la communauté LVQM 🙌🏻",
          },
          productDetails: {
            title: "LVQM, l'aventure vers la vie que tu mérites",
            language: "Langue",
            format: "Format",
            ebook: "Ebook",
            paper: "Livre papier - Finition matte",
            paperEbook: "Pré-commande livre papier + Ebook",
            currency: "€",
          },
          coaching: {
            motivationTitle: "Tu peux y arriver aussi !",
            motivationText:
              "95% des participants ont constaté un impact dès leur première semaine de coaching et des résultats concrets dans l’accomplissement de leurs objectifs après quatres semaines d’accompagnement",
            lvqm: "LVQM",
            coaching: "COACHING",
            description:
              "Le programme de coaching individuel d’LVQM a été créé pour t’aider à atteindre tes objectifs personnels, à appliquer les concepts du livre “L’aventure vers la vie que tu mérites” et à les adapter à ta situation",
            tryout: "Activer ma séance d'essai",
            timeline: {
              title: "Ton accompagnement personnalisé",
              firstEmoji: "📖 ",
              firstTitle: "Préparation",
              firstDescription:
                "Plonge-toi dans le livre LVQM, ce sera ton guide durant ton accompagnement",
              secondEmoji: "👌 ",
              secondTitle: "1ère séance",
              secondDescription:
                "On discute ensemble de ton parcours, de tes challenges actuels et de tes objectifs de vie",
              thirdEmoji: "💪 ",
              thirdTitle: "Plan d'action",
              thirdDescription:
                "Ton coach LVQM te prépare un programme sur mesure afin de progresser sainement et rapidement",
              fourthEmoji: "🚀 ",
              fourthTitle: "Pratique",
              fourthDescription:
                "Incorpore les exercices et mises en situation de ton plan d’action dans ton quotidien avec l’aide de ton coach",
            },
            cta: "Je me lance ! 🚀",
          },
          coaches: {
            title1: "2 - Choisis ",
            title2: "ton coach",
          },
          formulas: {
            title1: "3 - Choisis ",
            title2: "ta formule",
            ebook: "📖 Ebook LVQM",
            group: "🫶 Accès au groupe privé LVQM",
            study: "✍️ 1 étude personnalisée du coach",
            plan: "💪 Ton plan d'action sur mesure",
            coaching1: "✨ 1 séance de coaching de 30 minutes",
            coaching2: "✨ 2 séances de coaching de 30 minutes",
            coaching10: "✨ 10 séances de coaching de 30 minutes",
            goodies: "🎁 1 pack de goodies LVQM",
            starterSubtitle: "Parfait pour commencer",
            regularSubtitle: "On accélère le rythme",
            premiumSubtitle: "Visons les étoiles",
          },
          impacts: {
            impact1: "1 - Choisis tes ",
            impact2: "zones de travail",
            trust: "Avoir confiance en moi",
            forgive: "Réussir à pardonner",
            career: "Changer de carrière",
            passion: "Découvrir ma passion",
            love: "Trouver l'amour",
            health: "Améliorer ma santé",
            goal: "Atteindre mes objectifs",
            sport: "Faire plus de sport",
            mateoRating: "⭐ 5 (33 avis)",
            mateoDescription:
              "Au fil de mes expériences en équipe de France d’athlétisme, en tant que manager des partenariats chez Facebook ainsi que mon parcours de développement personnel, j’ai compris à quel point tout était lié à notre manière d’être.  J’ai passé les dernières années à appliquer les concepts d'LVQM à ma vie et l’ai vue changer pour le meilleur que ce soit concernant mes relations amicales, professionnelles, amoureuses, familiales, ma situation financière ou mon bonheur en général.  Aujourd’hui, mon but est de t’aider à arriver au même point et plus encore !",
            mayaRating: "⭐ 5 (26 avis)",
            mayaDescription:
              "Coach professionnelle depuis 2 ans après 14 ans de carrière en entreprise, tout ce que je fais est tourné vers un but ultime : t’aider à briser les barrières qui t’empêchent d’exprimer pleinement ton potentiel et d’incarner ton identité profonde : unique, authentique et puissante. Pour cela, je compte bien te transmettre mon énergie contagieuse et tous les outils éprouvés et approuvés qui m’ont permis de me libérer de mes propres barrières (syndrome de l’imposteur, croyances limitantes… tu vois le truc?) et de créer une vie selon mes termes. Prêt(e) à construire la passerelle qui te mènera vers la prochaine étape de la vie que tu mérites ?",
            priceTag: "🏷️ À partir de 30 €",
          },
          checkout: {
            order: "Ta commande",
            info: "Tes informations",
            payment: "Ton paiement",
            firstname: "Prénom",
            lastname: "Nom",
            email: "Email",
            address: "Adresse",
            zip: "Code postal",
            city: "Ville",
            country: "Pays",
            orderComing: "✉️ Ta commande est partie ✨",
            error: "Merci de remplir tous les champs",
            cardInvalid: "Merci d'entrer des informations de cartes valides",
          },
          footer: {
            cta: "C'est parti ! 👉",
            emoji: "❤️",
            tagline: "Bienvenue dans la communauté LVQM !",
            description:
              "Une communauté d’experts et d’âmes bienveillantes t'attend. Parfois, un premier pas vers l’inconnu est la seule chose qui te sépare de la vie que tu mérites",
            insta: "@lvqm_fr",
            instaURL: "https://www.instagram.com/lvqm_fr",
          },
        },
      },
    },
  });

export default i18n;
