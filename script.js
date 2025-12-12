const VERSION = 5;

const button = document.getElementById('yesNoButton');
const answerDiv = document.getElementById('answer');
const versionDiv = document.getElementById('version');

// Set version number from constant
if (versionDiv) {
    versionDiv.textContent = `Version: ${VERSION}`;
}

button.addEventListener('click', async () => {
    try {
        const answers = [
            "Certainly",
            "I don't think so",
            "Without a doubt",
            "Absolutely",
            "Definitely not",
            "Yes but I'd like something to eat first",
            "No, and never ask me that again",
            "Fuck that, I want to watch Friends instead",
            "Beer me: yes",
            "Yes but give me an Orange Gin to go with it",
            "No (unless it's Christmas, then yes)",
            "Yes (but reluctant)",
            "Yes, but first I need to put pyjamas on",
            "Yes, and I'd like to give it a score out of 10 after",
            "Noooooooo",
            "Yes, but I'd like to watch Friends first",
            "No (unless it's Christmas, then extra no)",
            "Is it nighttime? If so, yes. If not, no.",
            "Is there Boursin in the fridge? If so, yes. If not, no.",
            "*Dutiful nod in the affirmative*",
            "Absolutely yes, as long as it doesn't involve standing",
            "No, but you can ask again in ten minutes",
            "Yes, but I reserve the right to change my mind halfway through.",
            "Yes, but don't rush me!",
            "No, because Mercury is in retrograde and I refuse.",
            "No, and I want some chocolate even for asking",
            "Yes, but only if you give me chocolate first",
            "I'll do it if you give me £10",
            "No, unless I have a hat on",
            "Nullo modo in terra (it's latin for no)",
            "Noooooooooooooooooooooooo",
            "Oh go on then",
            "Yarp",
            "Narp",
            "Affirmative",
            "Negative",
            "Roger that",
            "Errrrrrrrr..... No",
            "I'm sure",
            "I'm sure....... that it's a no",
            "Whaaaat? (Yes)",
            "Yes but only once and then if you ever ask me again",
            "Ask again later",
            "Hmmm... I think it's a no",
            "You're in luck! No!",
            "Woof (yes)",
            "Yes Yes Yes",
            "Yeee",
            "Yay",
            "Nay",
            "Nah",
            "Yes 😘",
            "Cowabunga (no)",
            "Yepepe",
            "Yes, but only if you give me a hug first",
            "No, unless you give me a hug first",
            "No way, Jose",
            "No No No No",
            "No (unless it's Tuesday, then yes)",
            "Yes (now play 'Don't Stop Believin')",
            "Si Senor, si",
            "Yeehaw (no)",
            "Take the first digit of todays date: odd number = yes, even number = no",
            "Take a deep breath, count to 2 and then say Noooooooo",
            "Yes but I need to fart first",
            "Yes so hard I've just shit my pants",
            "Oh dear, I'm gonna drop a little answer from my giggle hole: nope!",
            "Certainly not",
            "Certainly",
            "Yep",
            "Nope",
            "Nein!",
            "I do declare, no!",
            "Nope, not a chance",
            "I'd love to",
            "K",
            "Okay",
            "I assent",
            "Aye",
            "Indeed",
            "By no means",
            "No way",
            "For sure",
            "I'm afraid not",
            "I'd rather not",
            "Naturally, I'd love to",
            "Nope, not in a million years",
            "Oui Oui my little baguette",
            "I consent with gusto",
            "My soul nods vigorously",
            "Nah, not feeling the vibes",
            "I am in harmonius alignment with this notion",
            "My brain has just spunked a big thought load into my head. It ejaculated: No",
            "No and I'm sending you to the shadow realm",
            "The prophecy forbids such a course",
            "In the village by still waters a distance bell tolls signalling yes",
            "The universe has signalled: no",
            "I must decline",
            "I look deep into the glistering water and see my reflection giving a thumbs up",
            "This path will not be easy to tred but I must do it",
            "I will not turn my back on my anscestors: No"   ,
            "No, but I'm willing to consider it if you convert to Islam",
            "No, that sounds worse than becoming a bellringer",
            "Not only am I saying yes, I'm going to fart a little ditty about it",
            "I'm saying yes to this like you say yes to Gyros",
            "Sure, and afterwards how about the Beeston Social",
            "No, but if you beat me at arcade basketball then yes",
            "I want to say no, unfortunately my mouth is full of cheese so I can only shake my head",
            "Yes, I want it more than Krampus' candy cane",
            "Less talk, more me saying no",
            "I want to say yes but I'm too busy farting",
            "YES YOU BEAUTIFUL BAAAAARSTARD",
            "No thanks I'm actually going to become a Nun, go away",
            "I'm not sure what to say so I'm going to say no",
            "I have a talking cat, he says yes",
            "Technically speaking, I'm going to have to say no",
            "Say NO! to Communism",
            "EMERGENCY! EMERGENCY! YES!",
            "I'm going to say no but it's for your own good",
            "I shed a tear of joy and say yes",
            "Fear leads to anger; Anger leads to hate; Hate leads to suffering; Suffering leads to the Dark Side. No, I must say",
            "Did you ever hear the tradgedy of Darth Plagueis the Wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself. (Yes)"
        ]
        
        // Get a random answer from the array
        const random = Math.random();
        let randomAnswer
        if (random < 0.15) {
            randomAnswer = "Yes";
        } else if (random < 0.3) {
            randomAnswer = "No";
        } else {
            const randomIndex = Math.floor(Math.random() * answers.length);
            randomAnswer = answers[randomIndex];
        }
        
        answerDiv.textContent = randomAnswer;
    } catch (error) {
        console.error('Error loading answers:', error);
        answerDiv.textContent = 'Error loading answer';
    }
});
