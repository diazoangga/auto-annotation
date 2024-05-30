# Auto Annotate

This project is a full-stack application for automatic image annotation using YOLO. It consists of a Flask backend and a React frontend.

![alt text](https://github.com/diazoangga/auto-annotation/blob/main/img/input.png)

## Features

- Upload images for annotation
- Automatically annotate images using a YOLO model
- Manually add classes and bounding boxes
- Export annotations in YOLO format

## Setup

### Backend

1. Navigate to the `backend` directory:
    ```
    cd backend
    ```
2. Install the dependencies:
    ```
    pip install -r requirements.txt
    ```
3. Run the Flask app:
    ```
    python app.py
    ```

### Frontend

1. Navigate to the `frontend` directory:
    ```
    cd frontend
    ```
2. Install the dependencies:
    ```
    npm install
    ```
3. Run the React app:
    ```
    npm start
    ```

### Annotation Results
![alt text](https://github.com/diazoangga/auto-annotation/blob/main/img/annotated.png)

The React app should now be running on `http://localhost:3000` and the Flask app on `http://localhost:5000`.
