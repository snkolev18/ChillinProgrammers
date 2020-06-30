langId = "en";

var textTranslation = {

    "nav-home": {
        'en': `Home`,

        'bg': `Начало`
    },
    "nav-download": {
        'en': `Download`,

        'bg': `Изтегли играта`
    },
    "nav-about": {
        'en': `About us`,

        'bg': `За нас`
    },
    "description": {
        'en': `Description of the game`,

        'bg': `Описание на играта`
    },
    "description-text": {
        'en': `Our game is a chess playing field, which includes the playing pieces for it. The game can only be played
            from one desktop computer.
            It continues until one of the two players defeats the other. Also in our game there are instructions on
            which figure can move where.
            The game can be played by two friends, for example, to compete with each other.`,

        'bg': `Нашата е игрално поле за шах заедно с фигурите необходими за играта му. Играта може да се играе само
             от един настолен компютър.
             Тя продължава, докато единият от двамата играчи не победи другия. Също така в нашата игра има инструкции за
             движението на отделните фигури.
             Играта може да се играе от двама приятели, като играят един срещу друг.`
    },

 "parts": {
        'en': `Parts in accomplishment of the game`,

        'bg': `Етапи в разработката на играта`
    },

    "parts-text": {
        'en': `Until the making of our game, there were several stages that we had to deal with.
        The first stage we had to go through was the one, we had to choose what game we were going to do.
        Once we decided to do chess, the first thing we decided to do was to make the playing field. Then step by
        step
        we started making the movements of the different types of figures that we have in the chess and the
        animations that show you which figure you can walk with.
        Then we started designing the game itself and what it would look like. The final step was to make the site about the game form where you can downloaded`,

        'bg': `По време на създаването на нашата игра имахме няколко етапа, с които трябваше да се справим.
        Първият етап, през който трябваше да преминем беше този, когато трябваше да изберем каква игра ще правим.
        След като решихме да правим шах, първото нещо, което решихме да направим, беше да създадем нужното ни игралното поле. След тази стъпка
        започнахме да правим движенията на различните фигури, които има в шаха, и 
        анимации, които показват на играча къде може да премести фигурата си.
        Тогава започнахме да проектираме самата игра и как ще изглежда тя. Последното нещо което беше да направим и самият сайт, от където може да си изтеглите играта.`
    },
    "win": {
        'en': `Download For Windows`,

        'bg': `Изтегли за Windows`
    },

    "stoqn": {
        'en': `Stoqn Kolev`,

        'bg': `Стоян Колев`
    },

    "Ivelin": {
        'en': `Ivelin Bachvarov`,

        'bg': `Ивелин Бъчваров`
    },

    "Emo": {
        'en': `Emil Ribarev`,

        'bg': `Емил Рибарев`
    },

    "georgi": {
        'en': `Georgi Georgiev`,

        'bg': `Георги Георгиев`
    },

    "vasil": {
        'en': `Vasil Mladenov`,

        'bg': `Васил Младенов`
    },

    "aleks": {
        'en': `Alexander Dinev`,

        'bg': `Александръ Динев`
    },

    "kalin": {
        'en': `Kalin Chervenkov`,

        'bg': `Калин Червенков`
    },



}

var currentLanguage = 'en';

function replaceElementText(item, text) {
    if (!item.is("button")) {
        item.html(text);
    } else {
        item.text(text);
    }
}

function translateLabel(langId) {
    currentLanguage = langId;

    // Gets all tags that have 'data-lang' attribute present
    $("[data-lang]")
        .each(function () {
            let item = $(this);
            if (textTranslation.hasOwnProperty(item.data("lang")) && textTranslation[item.data("lang")].hasOwnProperty(langId)) {
                let text = textTranslation[item.data("lang")][langId];
                replaceElementText(item, text);
            } else {
                replaceElementText(item, "<font color='red'>" + item.data("lang") + "</font>");
            }
        })
};

function getTranslatedText(elementId) {
    return textTranslation[elementId][currentLanguage];
}