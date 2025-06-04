# Facial Recognition App on AWS for Employee and Visitor Tracking

![Facial Recognition Banner](https://github.com/Abdulla-1234/Facial-Recognition-App-on-AWS-for-Employee-and-Visitor-Tracking/blob/main/Images/Facial%20Recognition%20App.png)

## Overview
This project implements a **cloud-based facial recognition system** for employee authentication and visitor management using **Amazon Web Services (AWS)**. It leverages AWS services such as **Rekognition, Lambda, S3, DynamoDB, and API Gateway** to provide a scalable, real-time solution for identity verification.

## Features
- **Facial Authentication**: Identifies registered employees and visitors.
- **AWS Cloud Integration**: Uses Rekognition for facial analysis.
- **Serverless Architecture**: Employs AWS Lambda for seamless processing.
- **Database Management**: DynamoDB stores employee records securely.
- **Web-based Interface**: Built with React for easy interaction.
- **Secure Access Control**: Ensures only authorized personnel enter premises.

## System Architecture
<img src="https://github.com/Abdulla-1234/Facial-Recognition-App-on-AWS-for-Employee-and-Visitor-Tracking/blob/main/Images/System%20Architecture.png" alt="System Architecture" width="500"/>

The system consists of four main layers:
1. **Storage Layer**: Uses Amazon S3 for secure image storage.
2. **Processing Layer**: AWS Lambda processes and authenticates requests.
3. **Database Layer**: Amazon DynamoDB manages employee records.
4. **Interface Layer**: API Gateway and React-based UI for interaction.

## Technologies Used
- **Frontend**: React.js
- **Backend**: AWS Lambda (Node.js/Python)
- **Database**: Amazon DynamoDB
- **Storage**: Amazon S3
- **Authentication**: AWS Rekognition
- **API Management**: AWS API Gateway
- **Infrastructure**: Serverless Framework, IAM roles

## Folder Structure
```
Facial_recognition/
│── facial-recognition-app/
│   ├── build/               # Production build files
│   ├── public/              # Static assets (images, icons, etc.)
│   ├── src/                 # Source code
│   │   ├── visitors/        # Visitor authentication components
│   │   ├── App.js           # Main app file
│   │   ├── App.css          # Stylesheets
│   │   ├── index.js         # Entry point
│   │   ├── index.css        # Global styles
│   │   ├── logo.svg         # Logo asset
│   │   ├── reportWebVitals.js
│   │   ├── setupTests.js
│   ├── package-lock.json    # Package dependencies
│   ├── README.md            # Project documentation
│── Facial_recognition.py    # Core facial recognition script
│── employee_authentication.py  # Employee validation logic
│── Report.pdf               # Detailed project report
```

## Installation & Setup
### Prerequisites
- **Node.js & npm** (for frontend)
- **AWS Account** (for cloud services)
- **Python 3+** (for backend scripts)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/Facial_recognition.git
   cd Facial_recognition/facial-recognition-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend:
   ```sh
   npm start
   ```
4. Deploy AWS Lambda functions (Ensure AWS CLI is configured):
   ```sh
   serverless deploy
   ```

## Usage
1. **Register Employees**: Upload images for employee registration.
2. **Authenticate Users**: The system matches visitors' faces with stored employee records.
3. **Access Logs**: View authentication logs in **DynamoDB**.

## Screenshots

| Employee Registration | Authentication Success | Unauthorized Access |
|---------------|----------------|----------------|
| ![Employee Registration](https://github.com/Abdulla-1234/Facial-Recognition-App-on-AWS-for-Employee-and-Visitor-Tracking/blob/main/Images/Employee%20Registration.png) | ![Authentication Success](https://github.com/Abdulla-1234/Facial-Recognition-App-on-AWS-for-Employee-and-Visitor-Tracking/blob/main/Images/Authentication%20Success.png) | ![Unauthorized Access](https://github.com/Abdulla-1234/Facial-Recognition-App-on-AWS-for-Employee-and-Visitor-Tracking/blob/main/Images/Unauthorized%20Access.png) |

## Future Improvements
- **Liveness Detection**: Prevent spoofing with real-time video verification.
- **Multi-Factor Authentication (MFA)**: Add an extra layer of security.
- **Edge AI Support**: Deploy recognition models on edge devices.

## Authors
- [Mohammad Abdulla](https://www.linkedin.com/in/mohammad-abdulla-doodakula-8a3307258/)

---
**Feel free to fork, contribute, or raise issues for improvements! **
