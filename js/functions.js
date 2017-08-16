// JavaScript Document
var quiznumber;
document.onclick = function (x) {
    if (x.target.className === 'quiz_links') {
        quiznumber = parseInt(x.target.id.slice(4));
    }
    events(x);
};

var quizbox;
var questionnumber = 0;
var currentquestion = 0;
var answered;
var options;
var answer;
var scores = 0;
var z = 0;
var i = 0;
var x = 0;
var feedback;
var inputs;
var startquiz = false;
var tries = 0;
var quizDuration = 6;
var timeUp;
var questions;
var optionsArray;
var quizTitle = new Array('Quiz', 'Network Access Quiz', 'Ethernet Quiz', 'Network Layer Quiz');
var feedbackArray;
var answerArray;

/*This function assigns the questions,options,answers and feedback to be selected depending on the quiz number selected by the user*/
function questions() {
    if (quiznumber === 1) {
        questions = new Array('Which network device can be used to eliminate collisions on an Ethernet network?', 'Which layer of the OSI model is responsible for specifying the encapsulation method used for specific types of media?', 'Typically, which network device would be used to perform NAT for a corporate environment?', 'What is the primary purpose of NAT?', 'Which term refers to a network that provides secure access to the corporate offices by suppliers, customers and collaborators?', 'What is contained in the trailer of a data-link frame?');

        optionsArray = new Array('firewall,hub,router,switch', 'application,transport,data link,physical', 'DHCP server,host device,router,server', 'conserve IPv4 addresses,increase network security,allow peer-to-peer file sharing,enhance network performance', 'Internet,intranet,extranet,extendednet', 'logical address,physical address,data,error detection');

        answerArray = ['switch', 'data link', 'router', 'conserve IPv4 addresses', 'extranet', 'error detection'];
        feedbackArray = ['This device must have a collision ', 'Encapsulation is a function of the data link layer. Different media types require different data link layer encapsulation.', 'The device is used in remapping one IP address space into another by modifying network address information in Internet ', 'Think of the benefit of it purpose', 'It has to be external', '', 'The trailer in a data-link frame contains error detection information that is pertinent to the frame included in the FCS field. The header contains control information, such as the addressing, while the area that is indicated by the word “data” includes the data, transport layer PDU, and the IP header.'];
    } else if (quiznumber === 2) {
        questions = new Array('What is the minimum size of an Ethernet frame?', 'What statement describes a characteristic of MAC addresses?', 'Which destination address is used in an ARP request frame?', 'Which switching method uses the CRC value in a frame?', 'What is auto-MDIX?', 'What statement describes Ethernet?');
        optionsArray = new Array('56 bytes,64 bytes,128 bytes,1024 bytes', 'They must be globally unique.,They are only routable within the private network.,They are added as part of a Layer 3 PDU.,They have a 32-bit binary value.', '0.0.0.0,255.255.255.255,FFFF.FFFF.FFFF,127.0.0.1', 'cut-through,fast-forward,fragment-free,store-and-forward', 'a type of Cisco switch,an Ethernet connector type,a type of port on a Cisco switch,a feature that detects Ethernet cable type', 'It defines the most common LAN type in the world.,It is the required Layer 1 and 2 standard for Internet communication,It defines a standard model used to describe how networking works.,Routers located in different countries.');
        answerArray = new Array('64 bytes', 'They must be globally unique.', 'FFFF.FFFF.FFFF', 'store-and-forward', 'a feature that detects Ethernet cable type', 'It defines the most common LAN type in the world.');
        feedbackArray = new Array('The maximum Ethernet frame is 1518 bytes. A network technician must know the minimum and maximum frame size in order to recognize runt and jumbo frames.', 'Any vendor selling Ethernet devices must register with the IEEE to ensure the vendor is assigned a unique 24-bit code, which becomes the first 24 bits of the MAC address.', 'The ARP process sends a Layer 2 broadcast to all devices on the Ethernet LAN. The frame contains the IP address of the destination and the broadcast MAC address', 'The cyclic redundancy check (CRC) part of the trailer is used to determine if the frame has been modified during transit.', 'It help with detection', 'Ethernet is the most common LAN protocol in the world. It operates at Layer 1 and 2, but is not required for Internet communication. ');
    } else if (quiznumber === 3) {
        questions = new Array('The application layer of the TCP/IP model performs the functions of what three layers of the OSI model Except', 'A manufacturing company subscribes to certain hosted services from its ISP. The services that are required is file transfer which protocols do they need', 'What is the port number of HTTP', 'What is the postion of the network layer in the OSI model from the bottom');
        optionsArray = new Array('network,presentation,application,session', 'internetwork,session,presentation,application', 'FTP,HTTP,DNS,SNMP', '80,90,99,1', '1,2,3,4,5,6,7', );
        answerArray = new Array('network', 'FTP', '80', '3');
        feedbackArray = new Array('The network access layer of the TCP/IP model performs the same functions as the physical and data link layers of the OSI model. ', 'Try and figure it out', 'It is less than 100', 'The application layer is 7 so think of the process that gets to the network layer');
    }
}
/*This function is a very important. It is responsible for the creating the elements of the questions and displaying the questions.*/
function populateQuestions() {
    quizbox = document.getElementById('quiz');
    /*This creates a loop to run through the questions array. Its quest the question div, answer div and inputs. It then appends them to the quizbox*/
    while (z < questions.length) {
        questionnumber += 1;
        var questionDiv = document.createElement('div');
        questionDiv.setAttribute('class', 'questions-div');
        var newQuestion = document.createElement('p');
        var answerDiv = document.createElement('div');
        answerDiv.setAttribute('class', 'answer-div');
        inputs = document.createElement('form');
        answerDiv.appendChild(inputs);
        quizbox.appendChild(questionDiv);
        newQuestion.setAttribute('id', 'question' + z);
        inputs.setAttribute('name', 'answers');
        newQuestion.innerHTML = questionnumber + ' ' + questions[z];
        questionDiv.appendChild(newQuestion);

        /* The function uses the current question variable to determine the options so that the correct options are displayed for the right questions*/
        switch (currentquestion) {
            case 0:
                options = optionsArray[0].split(',');
                break;
            case 1:
                options = optionsArray[1].split(',');
                break;
            case 2:
                options = optionsArray[2].split(',');
                break;
            case 3:
                options = optionsArray[3].split(',');
                break;
            case 4:
                options = optionsArray[4].split(',');
                break;
            case 5:
                options = optionsArray[5].split(',');
                break;
            default:
        }
        z++;
        currentquestion += 1;

        /*The options are now populated with this loop*/
        var newOption;
        var newLabel;
        if (quiznumber === 1 || quiznumber === 2) {
            for (i = 0; i < options.length; i++) {
                newOption = document.createElement('input');
                newOption.setAttribute('type', 'radio');
                newOption.setAttribute('id', questionnumber + 'option' + i);
                newOption.setAttribute('class', 'answers');
                newOption.setAttribute('name', 'answers');
                newOption.setAttribute('value', options[i]);
                inputs.appendChild(newOption);
                newLabel = document.createElement('label');
                newLabel.innerHTML = (options[i] + '<br>');
                newLabel.setAttribute('class', 'option');
                newLabel.setAttribute('for', questionnumber + 'option' + i);
                inputs.appendChild(newLabel);
            }
        }
        /*Becuase Quiz three has different inputs, it is treated different with this loop. This create the type of input depending on how I want the user to answer it*/
        if (quiznumber === 3) {
            for (var x = 0; x < options.length; x++) {

                if (questionnumber === 1) {
                    if (x === 0) {
                        newOption = document.createElement('select');
                        newOption.setAttribute('id', questionnumber + 'option' + x);
                        newOption.setAttribute('class', 'answers');
                    }
                    var dropoption = document.createElement('option');
                    dropoption.setAttribute('value', options[x]);
                    dropoption.innerHTML = (options[x] + '<br>');
                    newOption.appendChild(dropoption);
                    if (x === 3) {
                        answerDiv.appendChild(newOption);
                    }
                }
                if (questionnumber === 2) {
                    answerDiv.innerHTML = '<input type="text" placeholder="Type the answers in CAPS"><button onclick="events(event)" value="FTP" class="answer-3" id="2option2">Submit</button>';
                }
                if (questionnumber === 3) {
                    answerDiv.innerHTML = '<input type="number" step="10" id="quiz3-3" placeholder="You can use the arrows to pick the correct the answer. Or simply enter it" value""> <button class="answer-3" onclick="events(event)" value="80" class="solid_button" id="3option3" >Submit</button>';
                }
                if (questionnumber === 4) {
                    answerDiv.innerHTML = '<output id="rangemin">1</output><input type="range" min="1" max="7"  ><output id="rangemax">7</output> <button class="answer-3" onclick="events(event)" value="3" class="answers-3" id="4option4">Submit</button>';
                }
            }
        }

        quizbox.appendChild(answerDiv);

        if (quiznumber % 2 === 0) {
            break;
        }
    }
}

/*This function validates the question which has been answered and then the appropriate answer and feedback is assigned*/
function validate(value, id) {
    switch (answered) {
        case '1':
            answer = answerArray[0];
            feedback = feedbackArray[0];
            break;
        case '2':
            answer = answerArray[1];
            feedback = feedbackArray[1];
            break;
        case '3':
            answer = answerArray[2];
            feedback = feedbackArray[2];
            break;
        case '4':
            answer = answerArray[3];
            feedback = feedbackArray[3];
            break;
        case '5':
            answer = answerArray[4];
            feedback = feedbackArray[4];
            break;
        case '6':
            answer = answerArray[5];
            feedback = feedbackArray[5];
            break;
        default:
    }
    /*Now the value is compared to the answer and then if it is correct the scores increase and the score board is adjusted accordingly.Also the feedback is displayed. In addition, if the answer is wrong the feedback colour becomes red to give them them impression of danger*/
    if (value === answer) {
        scores += 1;
        if (quiznumber !== 1) {
            document.getElementById('marks_value').innerHTML = scores + ' / ' + questions.length;
        }
        document.getElementById(id).style.backgroundColor = 'green';
        /*NOTE: Becuase the course work did not specify giving feedback in quiz one. I have restricted it with this if statment. However, I have provided everything and take away this this statement will allow quiz one to have the feedback feature*/
        if (quiznumber !== 1) {
            document.getElementById('feedback_board').style.backgroundColor = 'green';
            /*This is the vary the output when the keeps on scores*/
            var feedbackstyles = ['', 'Very Good!', 'Keep it up!', 'Excellent!', 'You are awesome!', 'You are Exceptional!', 'Congratulations You Scored every thing.']
            document.getElementById('feedback_board').innerHTML = feedbackstyles[scores];
        }
        populateQuestions();
    } else if (value !== answer) {
        document.getElementById(id).style.backgroundColor = 'red';
        if (quiznumber !== 1) {
            document.getElementById('feedback_board').style.backgroundColor = 'red';
            document.getElementById('feedback_board').innerHTML = feedback;
        }
        /*Quiz one displays all question at once so does not need to call the populationQuestion function again. However this will allow quiz two to display the next question*/
        if (quiznumber === 2) {
            populateQuestions();
        }
    }
    if (quiznumber === 1 && tries === 5) {
        document.getElementById('marks_value').innerHTML = scores + ' / ' + questions.length;
    }
    /*This is to allow the user to determine the tries and how much they have left. This also triggers the end quiz and and sets x to the appropriate message, different from the timer*/
    tries += 1;
    document.getElementById("progress").value = tries;
    if (tries >= 6) {
        endQuiz(x = 'Thank you for taking this quiz');
    }

}
/*This block is used to end all quizzes. The function takes a variable which changes depending on what triggered the endQuiz. It is timeout, x=time is up else if your tries ends another message is assigned to x. This ends the by inserting the scores paragraph into the quizbox therefore preventing the user from answering any question. It also triggers timeup to stop the timer and to give the user the impression that the quiz has ended. */
function endQuiz(x) {
    quizbox.innerHTML = '<p id="p-quiz">' + x + ' you scored<br><strong>' + scores + ' out of ' + questions.length + '</strong></p>';
    timeUp = true;
}
/*This function's purpose is to analyse click events. It checks the id and the value and other attributes to trigger some functinos*/
function events(event) {
    var id = event.target.id;
    var menu = document.getElementsByClassName('side_menu')[0];
    var container = document.getElementsByClassName('al_quiz_container')[0];
    /*This checks if the toggle button has been clicked and then alter the size of the side menu*/
    if (id === 'toggle') {
        if (menu.style.width === '40px') {
            menu.style.width = '250px';
            container.style.width = '52%';
            document.getElementById(id).innerHTML = '&#9664;';
            container.style.marginLeft = '270px';
        } else {
            menu.style.width = '40px';
            container.style.marginLeft = '60px';
            container.style.width = '67.35%';
            document.getElementById(id).innerHTML = '&#9654;';
            document.getElementsByClassName('side_menu').innerHTML = document.querySelectorAll('.icons');
        }
    }
    /*This slices the first for letters of the id to check if the user wanted to take a quiz. Due to this only quizzes where give the id starting with quiz. If the statement is true, the startquiz is set to true and the progress bar is made visible witht eh z index since is was initially hidden behind the main menu bar. The quiz duration is them determined and the display is also gotten form the document by id. The value of the progress bar is now determined to allow it to reduce accordingly. Now the max attribute is also set*/
    if (id.slice(0, 4) === 'quiz') {
        if (startquiz == false) {
            startquiz = true;

            if (startquiz) {
                document.getElementById('progress-time').style.zIndex = '1100';
                var duration = 60 * quizDuration,
                    display = document.getElementById('time');
                document.getElementById('p-quiz');
                var message = document.getElementById("p-quiz");
                message.parentNode.removeChild(message);
                document.getElementById('progress-time').value = duration;
                document.getElementById('progress-time').setAttribute('max', duration);
                startTimer(duration, display);
            }
            /*This changes the header of the quiz according to the quiz number*/
            quiznumber = parseInt(id.slice(4));
            if (startquiz) {
                document.getElementById('container_header').innerHTML = '<h3 id="platform-title">' + quizTitle[quiznumber] + '<h3>';
                questions();
                populateQuestions();
            }
        }

    }
    /*The code checks of the user clicked an answer and then and then determines the current question and the calls the validation function*/
    if (event.target.className === 'answers' ||event.target.className === 'answer-3') {
        if (quiznumber !== 3) {
            var value = event.target.value;
        } else {
            console.log(event.target.value)
            var value = event.target.value;
        }
        answered = event.target.id.slice(0, 1);
        currentquestion = parseInt(answered);
        validate(value, id);
    }
}
/*This functions takes two parameter, the duration which is declared in the by the variable duration and where to display it. The the setInterval method is used to tick the counter down by 1000ms. Within the function the var min represents the min integer and the remainder when the counter is divided by 60. The timer is is also used to trigger the endQuiz function and hide the progress bar at the top of the page*/
function startTimer(duration, display) {
    var counter = duration,
        min, sec;
    setInterval(function () {
        min = parseInt(counter / 60, 10);
        sec = parseInt(counter % 60, 10);
        sec = sec < 10 ? '0' + sec : sec;
        if (min === 0 && sec == 00) {
            timeUp = true;
            if (timeUp) {
                endQuiz(x = 'Time is up');
                document.getElementById('progress-time').style.zIndex = 0;
            }
            display.textContent = min + ":" + sec;

        }
        if (!timeUp) {
            display.textContent = min + ":" + sec;
            document.getElementById('progress-time').value = counter;
        }
        if (--counter < 0) {
            counter = duration;
        }

    }, 1000);
}
