# 🌊 Rising Waters – ML Flood Prediction System

## 📌 Project Overview

Rising Waters – ML Flood Prediction System is a Machine Learning-based web application that predicts the possibility of flood occurrence using weather and rainfall parameters. The system analyzes user-provided environmental data with a trained XGBoost classification model and instantly predicts whether flood conditions are likely to occur.

The application is built using Python and Flask with a responsive frontend developed using HTML, CSS, and JavaScript. It provides a simple interface for users to enter weather data and receive flood prediction results along with flood and safe condition probabilities.

---

## 🚀 Features

- Flood prediction using Machine Learning
- XGBoost classification model
- Data preprocessing and feature scaling
- Real-time prediction through Flask
- User-friendly web interface
- Flood Chance and No Flood Chance result pages
- Flood probability and safe condition probability display
- Responsive frontend using HTML, CSS, and JavaScript
- Cloud deployment using Render

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Python
- Flask

### Machine Learning
- XGBoost
- Scikit-learn
- Joblib

### Data Processing
- Pandas
- NumPy

### Visualization
- Matplotlib
- Seaborn

### Deployment
- Render
- Gunicorn

---

## 📂 Project Structure

```
Rising-Waters-ML-Flood-Prediction-System/

│── app.py
│── requirements.txt
│── Procfile
│── Dockerfile

│── Dataset/
│   └── flood_dataset.xlsx

│── models/
│   ├── floods.save
│   └── transform.save

│── Notebook/
│   └── Flood_Prediction.ipynb

│── Templates/
│   ├── home.html
│   ├── index.html
│   ├── chance.html
│   └── no_chance.html

│── Static/
│   ├── css/
│   ├── js/
│   └── images/

└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Open the project folder

```bash
cd Rising-Waters-ML-Flood-Prediction-System
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Verify model files

Ensure the following files exist inside the **models** folder:

- floods.save
- transform.save

### 5. Run the application

```bash
python app.py
```

### 6. Open in browser

```
http://127.0.0.1:8080
```

---

## 📖 Usage

1. Open the application.
2. Navigate to the prediction page.
3. Enter:
   - Temperature
   - Humidity
   - Annual Rainfall
   - Jan-Feb Rainfall
   - Mar-May Rainfall
   - Jun-Sep Rainfall
   - Oct-Dec Rainfall
   - Average June Rainfall
4. Click **Predict Flood Risk**.
5. View:
   - Flood Chance / No Flood Chance
   - Flood Probability
   - Safe Condition Probability

---

## 📊 Machine Learning Workflow

- Dataset Collection
- Data Preprocessing
- Feature Scaling
- Train-Test Split
- Model Training
- Model Evaluation
- XGBoost Model Selection
- Model Saving using Joblib
- Flask Integration
- Prediction
- Deployment

---

## 📈 Model Used

The project compares multiple Machine Learning algorithms:

- Decision Tree
- Random Forest
- K-Nearest Neighbors (KNN)
- XGBoost

The **XGBoost Classifier** was selected as the final model due to its superior performance on the prepared dataset.

---

## 🌐 Deployment

The application is deployed using **Render** with:

- Python Runtime
- Gunicorn
- GitHub Integration
- Automatic Deployment

---

## 🔮 Future Enhancements

- Real-time weather API integration
- GPS-based flood prediction
- Interactive dashboard
- SMS/Email flood alerts
- Database integration
- Mobile application
- Deep Learning models
- Multi-language support

---

## 👥 Team Members

### Gayatri Botcha
- Dataset collection
- Data preprocessing
- Machine learning model development
- Model evaluation

### A Geetha Sree
- Flask backend development
- Frontend development
- Model integration
- Testing
- Render deployment

---

## 📚 References

- Python Documentation
- Flask Documentation
- Scikit-learn Documentation
- XGBoost Documentation
- Pandas Documentation
- NumPy Documentation
- Render Documentation
- GitHub Documentation

---

## 📄 License

This project is developed for academic and educational purposes.