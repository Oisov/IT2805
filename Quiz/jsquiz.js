(function() {
    var questions = [{
        question: "En instans av et problem er",
        choices: ["en sub-klasse av problemet.",
            "en super-klasse av problemet.",
            "en løsning på et problem.",
            "en algoritme som løser problemet i polynomisk tid",
            "input til et problem",
            "uløselig i polynomisk tid"
        ],
        correctAnswer: 4
    }, {
        question: "Hvilket alternativ beskriver best algoritmer og datastrukturer?",
        choices: [
            "En algoritme brukes til å løse et enkelt problem. Datstrukturer kobler sammen algoritmer for å løse mer komplekse problemer.",
            "En algoritme er et program. En datastruktur består av interminne og harddisk.",
            "En algoritme er en punktvis og detaljert løsningsmetode. En datastruktur uttrykker innholdet og syntaksen i et dataprogram.",
            "En algoritme beskriver utvetydig hvordan et problem kan løses. Algoritmen lager data i (og henter fra) datastrukturer.",
            "En algoritme er en formel, som når gitt en datastruktur som input" +
            " regner ut et svar (output)."
        ],
        correctAnswer: 4
    }, {
        question: "Hva er psudokode?",
        choices: [
            "En måte å spesifisere algoritmer på, uavhengig av naturlig språk.",
            "En måte å spesifisere algoritmer på, uavhengig av spesifikke programmeringsspråk.",
            "Et universelt språk for å spesifisere algoritmer, slik at en datamaskin kan kjøre dem.",
            "Et programmeringsspråk, brukt for å programmere algoritmer."
        ],
        correctAnswer: 1
    }, {
        question: "I dette faget vil vi i hovedsak vurdere algoritmer ut fra",
        choices: [
            "hvor raskt den kan implementeres.",
            "hvordan kjøretiden vokser når n går mot uendelig.",
            "kjøretiden for gjennomsnitts-input.",
            "minnebruk for gjennomsnitts-input.",
            "hvor elegante de er.",
            "hvordan kjøretiden vokser når størrelsen på input går mot uendelig."
                             ],
        correctAnswer: 5
    }, {
        question: "Anta du har en kø Q = <4,7,32,72,3> hvor det bakerste"
            + " elementet representerer hodet til køen"+"\n"+"Hvordan vil køen se ut etter å ha kjørt ENQUEUE(Q,3)?",
        choices: [
            "<3,4,7,32,72,3>",
            "<4,7,32,72,3,3>",
            "<4,7,32,72,3>",
            "<4,7,32,72>"
        ],
        correctAnswer: 0
    }, {
        question: "Anta du har en kø Q = <4,7,32,72,3> hvor det bakerste"
            + " elementet representerer hodet til køen.\n\nHvordan vil køen se ut etter å ha kjørt DEQUEUE(Q)?",
        choices: [
            "<3,4,7,32,72,3>",
            "<4,7,32,72,3,3>",
            "<4,7,32,72,3>",
            "<4,7,32,72>",
            "<7,32,72,3>"
        ],
        correctAnswer: 4
    }, {
        question: "Anta du har en kø Q = <4,7,32,72,3> hvor det bakerste"
            + " elementet representerer hodet til køen.\n\nHva er det minste antallet ENQUEUE/DEQUEUE-operasjoner du trenger for at køen skal endres til <3,4,7,32,72,3>?",
        choices: [0, 1, 2, 5, 6, 11],
        correctAnswer: 1
    }, {
        question: "Anta du har en kø Q = <4,7,32,72,3> hvor det bakerste"
            + " elementet representerer toppen av stacken.\n\nHvordan vil stakken se ut etter å ha kjørt PUSH(S,3)?",
        choices: [
            "<3,4,7,32,72,3>",
            "<4,7,32,72,3,3>",
            "<4,7,32,72,3>",
            "<4,7,32,72>",
            "<7,32,72,3>"
        ],
        correctAnswer: 1
    }, {
        question: "Anta du har en kø Q = <4,7,32,72,3> hvor det bakerste"
            + " elementet representerer toppen av stacken.\n\n",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "Anta du har en kø Q = <4,7,32,72,3> hvor det bakerste"
            + " elementet representerer toppen av stacken.\n\n",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "Anta at du har en sirkulær dobbel lenket liste"
            + " L = <4,7,32,72,3> hvor HEAD peker på 4-tallet.\n\n",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "Anta at du har en sirkulær dobbel lenket liste"
            + " L = <4,7,32,72,3> hvor HEAD peker på 4-tallet.\n\n",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "Anta at du har en sirkulær dobbel lenket liste"
            + "L = <4,7,32,72,3> hvor HEAD peker på 4-tallet.\n\n",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "En god hash-funksjon vil, for en tabell av lengde n, kunne garantere for at k < n innsettinger ikke vil gi kollisjon?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "Du får oppgitt at x.key = m og h(m) = j der h er en hash-funksjon. Da er...",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "Er h(k) = (k * randint(0,k)) mod m hvor k er nøkkelen og m er størrelsen på hashtabellen en god hashfunksjon? ",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "Hva betyr kollisjon (collision) i forbindelse med hash-tabeller?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "Hvis vi har en funksjon DELETE(T,x) der T er en kjedet hash-tabell og x er et listenode, så er worst case kjøretiden... (Legg merke til at x her er en faktisk listenode - ikke en nøkkel) ",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "Hva er worst-case-kjøretiden for innsetting i en hash-tabell om man bruker kjeding ved kollisjoner? Anta at innsettingen også må sjekke om elementet allerede finnes i tabellen.",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: " For å unngå at vi lager for stor initiell hashtabell ønsker vi å doble størrelsen på hashtabellen hver gang lastfaktoren blir 1/4 (lastfaktor beregnes N/M hvor N er antall elementer i hashtabellen og M er størrelsen på hashtabellen). Hvis vi benytter amorisert analyse får vi at kjøretiden for innsetting er ...",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "Anta du har binærtre G og legger til en ny kant i treet. Du vil nå ha...",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "Hvorfor er amortisert analyse bedre enn vanlig worst-case-beregning i mange tilfeller?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "What is 8*8?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "What is 8*8?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "What is 8*8?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "What is 8*8?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "What is 8*8?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "What is 8*8?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "What is 8*8?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "What is 8*8?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "What is 8*8?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "What is 8*8?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "What is 8*8?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "What is 8*8?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "What is 8*8?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "What is 8*8?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "What is 8*8?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "What is 8*8?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "What is 8*8?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "What is 8*8?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "What is 8*8?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }, {
        question: "Whatiis 8*8?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }];

    var questionCounter = 0; //Tracks question number
    var questionLength = questions.length;
    var selections = []; //Array containing user choices
    var quiz = $('#quiz'); //Quiz div object

    // Display initial question
    displayNext();

    // Click handler for the 'next' button on click
    $('#next').on('click keyup', function(e) {
        e.preventDefault();

        // Suspend click listener during fade animation
        if (quiz.is(':animated')) {
            return false;
        }
        choose();

        // If no user selection, progress is stopped
        if (isNaN(selections[questionCounter])) {
            alert('Please make a selection!');
        } else {
            questionCounter++;
            displayNext();
        }
    });

    // Click handler for the 'next' button on return press
    $(document).keypress(function(e) {
        if (e.which != 13) {
            return false;
        }
        e.preventDefault();

        // Suspend click listener during fade animation
        if (quiz.is(':animated')) {
            return false;
        }
        choose();

        // If no user selection, progress is stopped
        if (isNaN(selections[questionCounter])) {
            alert('Please make a selection!');
        } else {
            questionCounter++;
            displayNext();
        }
    });


    // Click handler for the 'prev' button
    $('#prev').on('click', function(e) {
        e.preventDefault();

        if (quiz.is(':animated')) {
            return false;
        }
        choose();
        questionCounter--;
        displayNext();
    });

    // Click handler for the 'Start Over' button
    $('#start').on('click', function(e) {
        e.preventDefault();

        if (quiz.is(':animated')) {
            return false;
        }
        questionCounter = 0;
        selections = [];
        displayNext();
        $('#start').hide();
    });

    // Animates buttons on hover
    $('.button').on('mouseenter', function() {
        $(this).addClass('active');
    });
    $('.button').on('mouseleave', function() {
        $(this).removeClass('active');
    });

    // Creates and returns the div that contains the questions and 
    // the answer selections
    function createQuestionElement(index) {
        var qElement = $('<div>', {
            id: 'question'
        });

        var header = $('<h2>Question ' + (index + 1) + '/' + questionLength + ':</h2>');
        qElement.append(header);

        var question = $('<p>').append(questions[index].question);
        qElement.append(question);

        var radioButtons = createRadios(index);
        qElement.append(radioButtons);

        return qElement;
    }

    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {
        var radioList = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < questions[index].choices.length; i++) {
            item = $('<li>');
            input = '<input type="radio" name="answer" value=' + i + ' />';
            input += questions[index].choices[i];
            item.append(input);
            radioList.append(item);
        }
        return radioList;
    }

    // Reads the user selection and pushes the value to an array
    function choose() {
        selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }

    // Displays next requested element
    function displayNext() {
        quiz.fadeOut(function() {
            $('#question').remove();

            if (questionCounter < questions.length) {
                var nextQuestion = createQuestionElement(questionCounter);
                quiz.append(nextQuestion).fadeIn();
                if (!(isNaN(selections[questionCounter]))) {
                    $('input[value=' + selections[questionCounter] + ']').prop('checked', true);
                }

                // Controls display of 'prev' button
                if (questionCounter === 1) {
                    $('#prev').show();
                } else if (questionCounter === 0) {

                    $('#prev').hide();
                    $('#next').show();
                }
            } else {
                var scoreElem = displayScore();
                quiz.append(scoreElem).fadeIn();
                $('#next').hide();
                $('#prev').hide();
                $('#start').show();
            }
        });
    }

    // Computes score and returns a paragraph element to be displayed
    function displayScore() {
        var score = $('<p>', {
            id: 'question'
        });

        var numCorrect = 0;
        var hasErrors = false;

        for (var i = 0; i < selections.length; i++) {
            if (selections[i] === questions[i].correctAnswer) {
                numCorrect++;
            } else {
                if (!hasErrors) {
                    score.append('Oi! Seems like you missed the following questions there partner!<br/><br/>')
                    hasErrors = true;
                }
                score.append('Question ' + i + 1 + ': ' + questions[i].question)
                score.append('<br/><br/> ')
            }
        }

        score.append('You got ' + numCorrect + ' questions out of ' +
            questions.length + ' right!!!');
        return score;
    }
})();
