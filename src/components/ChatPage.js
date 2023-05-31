import React, { Fragment, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import './ChatPage.css';

const ChatPage = () => {
    const [getMessages, setGetMessages] = useState([]);
    const [getResponse, setGetResponse] = useState([]);
    const [setMessages, setSetMessages] = useState([]);

    const handleSendMessage = () => {
        setGetMessages((prevMessages) => [...prevMessages, setMessages]);

        let response = '';
        if (setMessages.toLowerCase().includes('hello')) {
            response = 'Hi there!';
        } else if (setMessages.toLowerCase().includes('how are you')) {
            response = "I'm doing well, thank you!";
        } else if (setMessages.toLowerCase().includes('what is your name')) {
            response = "My name is ChatBot.";
        } else if (setMessages.toLowerCase().includes('what is your age')) {
            response = "I am immortal.";
        } else if (setMessages.toLowerCase().includes('what is the date today')) {
            response = new Date().toLocaleDateString();
        } else if (setMessages.toLowerCase().includes('what is the time right now')) {
            response = new Date().toLocaleTimeString();
        } else {
            response = "I'm sorry, I don't understand.";
        }

        setTimeout(() => {
            setGetResponse((prevMessages) => [...prevMessages, response]);
        }, 500);

        setSetMessages('');
    }

    return (
        <Container className='d-flex justify-content-center align-items-center'>
            <Card className='chatCard border border-1 border-dark'>
                <Card.Header style={{ background: '#4545' }}>
                    <h1>My Chat App</h1>
                </Card.Header>
                <Card.Body className='chatCardBody'>

                    {getMessages.map((msg, idx) => (
                        <Fragment key={idx}>
                            <div style={{ float: 'right', width: '23rem' }}>
                                <p className='message mt-2 px-3'>{msg}</p>
                            </div>
                            <div style={{ float: 'left', width: '23rem' }}>
                                {getResponse[idx] && (
                                    <p className='message mt-2 px-3' style={{ background: '#4859' }}>
                                        {getResponse[idx]}
                                    </p>
                                )}
                            </div>
                        </Fragment>
                    ))}

                </Card.Body>
                <Card.Footer style={{ background: '#4545' }}>

                    <div className='inputMessage'>
                        <Form.Control type='text' className='rounded-5 fs-5' placeholder='Enter your message here'
                            value={setMessages} onChange={(e) => setSetMessages(e.target.value)}
                            onKeyDown={(e) => { if (e.key === 'Enter') { handleSendMessage() } }} />
                        <Button variant='danger' className='rounded-5' style={{ marginLeft: '1rem', width: '6rem' }}
                            onClick={handleSendMessage} disabled={setMessages === ''}>Send</Button>
                    </div>

                </Card.Footer>
            </Card>
        </Container>
    );
}

export default ChatPage;