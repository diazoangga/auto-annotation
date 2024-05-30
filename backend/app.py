# backend/app.py
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
import torch
from PIL import Image
from io import BytesIO
import json
from ultralytics import YOLO

app = Flask(__name__)
CORS(app)

model = YOLO('./models/yolov8m_custom.pt')

@app.route('/')
def index():
    return "Welcome to the Auto Annotate API. Endpoints available: /annotate and /export"

@app.route('/annotate', methods=['POST'])
def annotate():
    if 'images' not in request.files:
        return jsonify({"error": "No images provided"}), 400
    images = request.files.getlist('images')
    results = []
    for img in images:
        image = Image.open(img)
        predictions = model(image)

    annotations = []

    for idx, prediction in enumerate(predictions[0].boxes.xywhn): # change final attribute to desired box format
        cls = int(predictions[0].boxes.cls[idx].item())
        # Write line to file in YOLO label format : cls x y w h
        # file.write(f"{cls} {prediction[0].item()} {prediction[1].item()} {prediction[2].item()} {prediction[3].item()}\n")
    
    for result in results:
        for pred in result.xyxy[0]:
            annotations.append({
                'class': int(pred[5]),
                'bbox': [float(pred[0]), float(pred[1]), float(pred[2]), float(pred[3])],
                'confidence': float(pred[4])
            })
    
    return jsonify(annotations)

@app.route('/export', methods=['POST'])
def export_annotations():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No data provided"}), 400
    with open('annotations.txt', 'w') as f:
        json.dump(data, f)
    return send_from_directory(directory='.', path='annotations.txt', as_attachment=True)


if __name__ == '__main__':
    print("Starting Flask application...")
    app.run(debug=True)
