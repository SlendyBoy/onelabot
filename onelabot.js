function showBot() {
    var bot = document.getElementById("onelabot-container");
    if (bot.style.display === "none") {
      bot.style.display = "flex";
    } else {
      bot.style.display = "none";
    }
} 

const bot = function () {

    const onelabot = document.getElementById('onelabot');
    const container = document.getElementById('onelabot-container');
    const inner = document.getElementById('onelabot-inner');
    let restartButton = null;

    const sleep = function (ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    const scrollContainer = function () {
        inner.scrollTop = inner.scrollHeight;
    };

    const insertNewChatItem = function (elem) {
        //container.insertBefore(elem, onelabot);
        onelabot.appendChild(elem);
        scrollContainer();
        //debugger;
        elem.classList.add('activated');
    };

    const printResponse = async function (step) {
        const response = document.createElement('div');
        response.classList.add('chat-response');
        response.innerHTML = step.text;
        insertNewChatItem(response);

        await sleep(1000);

        if (step.options) {
            const choices = document.createElement('div');
            choices.classList.add('choices');
            step.options.forEach(function (option) {
                const button = document.createElement(option.url ? 'a' : 'button');
                button.classList.add('choice');
                button.innerHTML = option.text;
                if (option.url) {
                    button.href = option.url;
                    button.target = '_blank';
                } else {
                    button.dataset.next = option.next;
                }
                choices.appendChild(button);
            });
            insertNewChatItem(choices);
        } else if (step.next) {
            printResponse(chat[step.next]);
        }
    };

    const printChoice = function (choice) {
        const choiceElem = document.createElement('div');
        choiceElem.classList.add('chat-ask');
        choiceElem.innerHTML = choice.innerHTML;
        insertNewChatItem(choiceElem);
    };

    const disableAllChoices = function () {
        const choices = document.querySelectorAll('.choice');
        choices.forEach(function (choice) {
            choice.disabled = 'disabled';
        });
        return;
    };

    const handleChoice = async function (e) {

        if (!e.target.classList.contains('choice') || 'A' === e.target.tagName) {
            // Target isn't a button, but could be a child of a button.
            var button = e.target.closest('#onelabot-container .choice');

            if (button !== null) {
                button.click();
            }

            return;
        }

        e.preventDefault();
        const choice = e.target;

        disableAllChoices();

        printChoice(choice);
        scrollContainer();

        await sleep(1000);

        if (choice.dataset.next) {
            printResponse(chat[choice.dataset.next]);
        }
        // Need to disable buttons here to prevent multiple choices
    };

    const handleRestart = function () {
        startConversation();
    }

    const handleHelp = function () {
        disableAllChoices();
        printResponse(chat[3]);
    }

    const startConversation = function () {
        printResponse(chat[1]);
    }

    const init = function () {
        container.addEventListener('click', handleChoice);

        restartButton = document.createElement('button');
        restartButton.innerText = "Restart";
        restartButton.classList.add('restart');
        restartButton.addEventListener('click', handleRestart);

        helpButton = document.createElement('button');
        helpButton.innerText = "Aide";
        helpButton.classList.add('aide');
        helpButton.addEventListener('click', handleHelp);

        container.appendChild(restartButton);
        container.appendChild(helpButton);
        
        startConversation();
    };

    init();
}

bot();