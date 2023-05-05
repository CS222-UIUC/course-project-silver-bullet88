# AskMe Web Application | By Silver-Bullet88

## Team Members

teammate1: Qi Wu (Calvin): qiwu4@illinois.edu

teammate2: Jincheng Xu (Frank): jx37@illinois.edu 

teammate3: Jinyu Ding (Tina): jinyud2@illinois.edu

## Pitch

"No more holding back, no more fear of judgment. Just pure honesty and pure fun!"

The objective of AskMe is to provide individuals with a secure platform to pose personal or sensitive inquiries and receive responses, while maintaining anonymity. AskMe engenders a feeling of comfort and security, enabling individuals to express themselves openly and receive sincere answers.
By allowing anonymity, AskMe can also encourage people to ask more candid questions and provide more honest answers, leading to deeper conversations and better understanding between friends. Additionally, it can also serve as an entertaining activity, such as playing truth or dare games.

## Functionality
- Login/ Sign up 

- Homepage
- - All questions you received
- - - Click flashcards to answer

- Question box
- - Share question box link
- - - Friends/ guests can enter questions
- - - Display questions at the bottom
- - - - Provide inspiration & get to know you more

## Technical Architecture
### Login & sign up pages (Jinyu Ding)
Role in the application
- Store user’s info in firebase
- - Assign question box
- - Match questions with users
- Authorize the access to homepage or not

Interactions with other components 
- HomePage
- - Only logged in users can access homepage through nav bar
- - After logged in, user will be redirected to homepage

Languages
- JavaScript
- HTML
- CSS

Libraries
- React
- Firebase

### Question page (Qi Wu)
Role in the application
- Allow users to ask questions and store these questions in firebase
- Get data from firebase to show questions asked by other users
- Update the flashcards for all pages once the question is successfully asked
- Popup Windows to show whether a question is successfully asked

Languages
- JavaScript
- HTML
- CSS

Libraries
- React
- Firebase

### UsersHome (Frank Xu)
Role in the application
- Display questions and answers users received with flashcards effect
- Allow users to answer questions using the answer button on the back of each flashcard

Languages
- JavaScript
- CSS

Libraries
- React
- Firebase

### Answer Page (Frank Xu)
Role in the application
- Allow users to answer questions and the answers received will be updated on the flashcards
- Display the specific question that users need to answer
- Have unique URL parameter for each question

Languages
- JavaScript
- CSS

Libraries
- React
- Firebase

### Contact Us page
Role in the application
- Contact developers if users have any questions or suggestions
- Acknowledge 

Languages
- JavaScript
- HTML

Libraries
- React

## Components
### Frontend
We will use the HTML, CSS, JavaScript programming language and the React framework. We chose HTML, CSS and JavaScript due to its speed, simplicity, and popularity. The benefit of the React framework includes having potential to reuse components and easy to use for building a rich UI. We will test our functionalities using React Testing Library which provides light utility functions for us to interact with our React components so that we can experience as a website user and make meaningful updates.

### Backend

We use Javascript and React framework to write our backend code, with Google Firebase.JavaScript is a highly performant language and can handle a lot of concurrent connections, making it suitable for building scalable backend applications. Besides, JavaScript can be used on both the client and server side, allowing for a seamless transfer of data between the front-end and the back-end. The React framework is built with components, which can be reused and combined to create complex UIs. Similarly, code written for the backend can also be easily reused and modularized, making it easier to maintain and scale the application.JavaScript and React allow for rapid development and iteration, making it easier to quickly prototype and test ideas. Firebase provides real-time data synchronization between clients, making it easy to create collaborative, real-time applications. Firebase's serverless architecture means you don't have to write any server-side code to get started. Firebase can easily scale to handle large volumes of data and traffic. Firebase can be easily integrated with other Firebase services, as well as third-party services like Google Cloud Platform.


## Usage instructions

In the project directory, you can run:
####   `npm install`

####   `npm install react-modal`

####   `npm install firebase`

#### `npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in your **CHROME**.

The page will reload when you make changes.
You may also see any lint errors in the console.

**FINAL NOTE** Please sign up/log in before Q&A
