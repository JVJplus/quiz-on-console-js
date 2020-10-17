// Coding Challenge on OOPS.
(function () {
    var questions = [];
    var score=0;

    var QuestionTemplate = function (question, options) {
        this.question = question;
        this.options = options;
    };

    function generateQuestions() {
        questions.push(
            new QuestionTemplate("'OS' computer abbreviation usually means ?", [
                "Operating System",
                "Order of Significance",
                "Open Software",
                "Optical Sensor",
            ])
        );

        questions.push(
            new QuestionTemplate("'.MOV' extension refers usually to what kind of file?", [
                "Animation/movie file",
                "Audio file",
                "Image file",
                "MS Office document",
            ])
        );

        questions.push(
            new QuestionTemplate("'DB' computer abbreviation usually means ?", [
                "Database",
                "Double Byte",
                "Data Block",
                "Driver Boot",
            ])
        );

        questions.push(
            new QuestionTemplate("'.INI' extension refers usually to what kind of file?", [
                "System File",
                "Image File",
                "Hypertext Related File",
                "Image Color Matching Profile file",
            ])
        );

        questions.push(
            new QuestionTemplate("You can add a row using SQL in a database with which of the following?", [
                "INSERT",
                "ADD",
                "MAKE",
                "CREATE",
            ])
        );

        questions.push(
            new QuestionTemplate("The command to remove rows from a table 'CUSTOMER' is:", [
                "DELETE FROM CUSTOMER WHERE ...",
                "DROP FROM CUSTOMER ...",
                "REMOVE FROM CUSTOMER ...",
                "UPDATE FROM CUSTOMER ...",
            ])
        );

        questions.push(
            new QuestionTemplate("SQL data definition commands make up a(n) ________ .", [
                "DDL",
                "DML",
                "HTML",
                "XML",
            ])
        );

        questions.push(
            new QuestionTemplate("Which of the following is valid SQL for an Index?", [
                "CREATE INDEX ID;",
                "CHANGE INDEX ID;",
                "ADD INDEX ID;",
                "REMOVE INDEX ID;",
            ])
        );
    }

    function shuffleArray(arr){
        for(var i=0;i<arr.length;i++){
            var rand=Math.floor(Math.random()*arr.length);
            var t=arr[rand];
            arr[rand]=arr[i];
            arr[i]=t;
        }
    }

    function askQuestion(randomQuestionNo){
        console.log("Question "+randomQuestionNo+":",questions[randomQuestionNo].question);
        
        var correctOption=0;
        var previousAns=questions[randomQuestionNo].options[0];
        shuffleArray(questions[randomQuestionNo].options);
        for(var i=0;i<4;i++){
            if(questions[randomQuestionNo].options[i]==previousAns){
                correctOption=i;
            }
        }
        
        console.log("Options:");
        for(var i=0;i<4;i++){
            console.log(i+":",questions[randomQuestionNo].options[i]);
        }
        console.log('');

        return correctOption;
    }

    function checkAnswer(correctOption) {
        var answer=prompt('Enter Option:');
        if(answer=='exit')
            return 'exit';
        if(answer==correctOption){
            console.log("Correct Answer!");
            score++;
            return 'AC';
        }
        else{
            console.log("Wrong Answer!");
            return 'WA';
        }
    }

    function showResult(){
        console.log('----------------------------------------------------');
        console.log("Score:",score);
        console.log('----------------------------------------------------');
        console.log("");
    }

    function main() {
        generateQuestions();
        shuffleArray(questions);
        for(var i=0;i<questions.length;i++){
            var correctOption=askQuestion(i);
            var whatToDo=checkAnswer(correctOption);
            showResult();
            if(whatToDo=='WA')
                i--;
            if(whatToDo=='exit')
                break;
        }
    }

    // to let user read some html
    setTimeout(main,2000);
    // IIFE
})();
