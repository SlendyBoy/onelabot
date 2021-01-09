/* The chat const defines the bot conversation.
 * 
 * It should be an object with numerical property names, and each property is an entry
 * in the conversation.
 * 
 * A conversation entry should have:
 *  - A "text" property that is what the chatbot says at this point in the conversation
 *  - Either:
 *     - A "next" property, which defines the next chat entry by stating a numerical key
 *       of the chat object and is used when the chatbot needs to say several things
 *       without input from the user
 *    OR
 *     - An "options" property that defines the choices a user can take this is an
 *       array of option objects
 * 
 * An options object should have:
 *  - a "text" property that is the label for the user's choice
 *  AND EITHER
 *  - a "next" property that defines the next chat entry by stating a numerical key of
 *    the chat object and is used when the user selects this option
 *  OR
 *  - a "url" property that defines a link for the user to be taken to
 * 
 * A simple example chat object is:
 * const chat = {
 *     1: {
 *         text: 'Good morning sir',
 *         next: 2
 *     },
 *     2: {
 *         text: 'Would you like tea or coffee with your breakfast?',
 *         options: [
 *             {
 *                 text: 'Tea',
 *                 next: 3
 *             },
 *             {
 *                 text: 'Coffee',
 *                 next: 4
 *             }
 *         ]
 *     },
 *     3: {
 *         text: 'Splendid - a fine drink if I do say so myself.'
 *     },
 *     4: {
 *         text: 'As you wish, sir'
 *     }
 * }
 */
const chat = {
    1: {
        text: 'Salut je suis le bot d\'Onela !',
        options: [
            {
                text: 'Salut ! 👋',
                next: 2
            }
        ]
    },
    2: {
        text: 'Savais-tu que je suis codé en vanilla Javascript ?',
        next: 3
    },
    3: {
        text: 'Enfin bref, as-tu besoin d\'aide ?',
        options: [
            {
                text: "<strong>Oui</strong>, j\'ai besoin d' aide !",
                next: 4
            },
            {
                text: "<strong>Nope</strong>, je voulais juste parler",
                next: 5
            }
        ]
    },
    4: {
        text: 'Oof ! Dans quel domaine ?',
        options: [
            {
                text: "Alimentation",
                next: 7
            },
            {
                text: "Logement",
                next: 8
            },
            {
                text: "Finance",
                next: 9
            },
            {
                text: "Santé",
                next: 10
            },
            {
                text: "Social",
                next: 11
            },
        ]
    },
    5: {
        text: 'Pas de soucis ! 😉',
        next: 6
    },
    6: {
        text: 'Bonne visite du site !'
    },
    7: {
        text: 'Voici quelques aides pour subvenir à vos besoins en alimentation',
        options: [
            {
                text: "Les AGORAé",
                url: "https://www.fage.org/innovation-sociale/solidarite-etudiante/agorae-fage/"
            },
            {
                text: "Restos du coeur",
                url: "https://www.restosducoeur.org/associations-departementales/"
            }
        ]
        
    },
    8: {
        text: 'Voici quelques aides pour se loger',
        options: [
            {
                text: "logement1",
                url: "https://www.fage.org/innovation-sociale/solidarite-etudiante/agorae-fage/"
            },
            {
                text: "logement2",
                url: "https://www.fage.org/innovation-sociale/solidarite-etudiante/agorae-fage/"
            }
        ]
    },
    9: {
        text: 'Voici quelques aides pour subvenir à vos besoins financiers',
        options: [
            {
                text: "argent1",
                url: "https://www.fage.org/innovation-sociale/solidarite-etudiante/agorae-fage/"
            },
            {
                text: "argent2",
                url: "https://www.fage.org/innovation-sociale/solidarite-etudiante/agorae-fage/"
            }
        ]
    },
    10: {
        text: 'Voici quelques aides pour rester en bonne santé',
        options: [
            {
                text: "health1",
                url: "https://www.fage.org/innovation-sociale/solidarite-etudiante/agorae-fage/"
            },
            {
                text: "health2",
                url: "https://www.fage.org/innovation-sociale/solidarite-etudiante/agorae-fage/"
            }
        ]
    },
    11: {
        text: 'Voici quelques aides pour le social',
        options: [
            {
                text: "social1",
                url: "https://www.fage.org/innovation-sociale/solidarite-etudiante/agorae-fage/"
            },
            {
                text: "social2",
                url: "https://www.fage.org/innovation-sociale/solidarite-etudiante/agorae-fage/"
            }
        ]
    }
};
