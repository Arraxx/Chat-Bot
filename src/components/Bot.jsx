import React from 'react'
import ChatBot from "react-simple-chatbot";

function CustomChatbot(props) {
    const config = {
        width: "500px",
        height: "700px",
        floating: true
    };
    const steps = [
        {
            id: '0',
            message: 'Welcome to User Friendly chatbot!',
            trigger: '1',
        },
        {
            id: '1',
            message: 'What is your name?',
            trigger: '2',
        },
        {
            id: '2',
            user: true,
            trigger: '3'
        },
        {
            id: '3',
            message: 'Hi {previousValue} , nice to meet you!',
            trigger: '4'
        },
        {
            id: '4',
            message: 'We are here to spread Awareness about Crime ',
            trigger: '6'
        },
        {
            id: '6',
            message: 'Are you being affected by any kind of Crime ?',
            trigger: '7',
        },
        {
            id: '7',
            options: [
                {
                    value: 1,
                    label: 'Yes',
                    trigger: '8'
                },
                {
                    value: 2,
                    label: 'No',
                    trigger: '9'
                },
                {
                    value: 3,
                    label: 'Prefer Not like to say',
                    trigger: '10'
                }
            ]
        },
        {
            id: 8,
            message: 'Sorry to hear !',
            trigger: '11'
        },
        {
            id: 9,
            message: 'Sounds Good!',
            trigger: '11'
        },
        {
            id: 10,
            message: "It's Okay ",
            trigger: 11,
        },
        {
            id: 11,
            message: 'There are many major crimes in India',
            trigger: 12
        },
        {
            id: 12,
            message: 'So for what Crime you want to get aware about ?',
            trigger: 13
        },
        {
            id: '13',
            options: [
                {
                    value: 1,
                    label: 'Rape',
                    trigger: '14'
                },
                {
                    value: 2,
                    label: 'Dowry',
                    trigger: '15'
                },
                {
                    value: 3,
                    label: 'Illegal drug trade',
                    trigger: '16'
                },
                {
                    id: 4,
                    label: 'Cyber Crime',
                    trigger: 17
                },
                {
                    id: 5,
                    label: 'Corruption ',
                    trigger: 18
                },
            ]
        },
        {
            id: 14,
            message: "Rape is a type of sexual assault usually involving sexual intercourse or other forms of sexual penetration carried out against a person without that person's consent.",
            trigger: 19
        },
        {
            id: 15,
            message: "A dowry is a transfer of parental property, gifts, or money at the marriage of a daughter (bride). Dowry contrasts with the related concepts of bride price and dower.",
            trigger: 19
        },
        {
            id: 16,
            message: 'The illegal drug trade or drug trafficking is a global black market dedicated to the cultivation, manufacture, distribution and sale of drugs that are subject to drug prohibition laws.',
            trigger: 19
        },
        {
            id: 17,
            message: 'Cybercrime, or computer-oriented crime, is a crime that involves a computer and a network. The computer may have been used in the commission of a crime, or it may be the target.',
            trigger: 19
        },
        {
            id: 18,
            message: "'Corruption is a form of dishonesty or criminal offense undertaken by a person or organization entrusted with a position of authority, to acquire illicit benefit or abuse power for one's private gain.'",
            trigger: 19
        },
        {
            id: 19,
            message: "Do you want to know about any other crime in the List",
            trigger: 20
        },
        {
            id: 20,
            options: [
                {
                    value: 1,
                    label: 'Yes',
                    trigger: '12'
                },
                {
                    value: 2,
                    label: 'No',
                    trigger: '21'
                }
            ]
        },
        {
            id: 21,
            message: 'bey',
            end: true
        }
    ];
    return <ChatBot
        headerTitle="Chat Bot"
        recognitionEnable={true}
        steps={steps} {...config} />;
}
export default CustomChatbot;