import { useState } from 'react';
import './App.css';
const uuid = require('uuid');

function App() {
  const [image, setImage] = useState('');
  const [uploadResultMessage, setUploadResultMessage] = useState('Please upload an image to authenticate.');
  const [visitorName, setVisitorName] = useState('placeholder.jpeg');
  const [isAuth, setAuth] = useState(false);

  function sendImage(e) {
    e.preventDefault();
    if (!image) {
      setUploadResultMessage('Please select an image file first.');
      return;
    }

    setVisitorName(image.name);
    const visitorImageName = uuid.v4();
    fetch(`https://ngujbsi5ke.execute-api.us-east-1.amazonaws.com/dev/visitor-image-storagess/${visitorImageName}.jpeg`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'image/jpeg',
      },
      body: image,
    })
      .then(async () => {
        const response = await authenticate(visitorImageName);
        if (response.Message === 'Success') {
          setAuth(true);
          setUploadResultMessage(`Hi ${response.firstName} ${response.lastName}, welcome to work.`);
        } else {
          setAuth(false);
          setUploadResultMessage('Authentication Failed: This person is not an employee.');
        }
      })
      .catch((error) => {
        setAuth(false);
        setUploadResultMessage('There was an error during the authentication process. Please try again.');
        console.error(error);
      });
  }

  async function authenticate(visitorImageName) {
    const requestUrl = `https://ngujbsi5ke.execute-api.us-east-1.amazonaws.com/dev/employee?${new URLSearchParams({
      objectKey: `${visitorImageName}.jpeg`,
    })}`;
    return await fetch(requestUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
        return { Message: 'Error' };
      });
  }

  return (
    <div className="App">
      <h2>Feli's Facial Recognition System</h2>
      <form onSubmit={sendImage}>
        <input
          type="file"
          accept="image/jpeg"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Authenticate</button>
      </form>
      <div className={isAuth ? 'success' : 'failure'}>{uploadResultMessage}</div>
      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="Visitor"
          height={250}
          width={250}
          className={isAuth ? 'employee' : 'not-employee'}
        />
      )}
    </div>
  );
}

export default App;
