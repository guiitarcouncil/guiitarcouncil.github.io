# Guide to Running the Project Locally

Follow these steps to run this project on your system.

## Prerequisites

Make sure to install the following software:

- **Node.js v18.20.5**  
  Download and install Node.js from [here](https://nodejs.org/en).

- **Python 3.12.4**  
  Download and install Python from [here](https://www.python.org/).

## Steps to Run the Project

### 1. Clone the Repository

First, clone the project repository to your local machine by running the following command in your terminal or VS Code:
```bash
git clone https://github.com/guiitarcouncil/home.git
```

### 2. Set Up Backend

#### Create a Virtual Environment

Navigate to the project directory and create a virtual environment to isolate your Python dependencies:
```bash
cd home
python -m venv venv
```

#### Activate the Virtual Environment

- **On Windows**:
  ```bash
  venv\Scripts\activate
  ```

- **On macOS/Linux**:
  ```bash
  source venv/bin/activate
  ```

#### Install Python Dependencies

Once the virtual environment is activated, install the required Python dependencies from the `requirements.txt` file:
```bash
pip install -r requirements.txt
```

### 3. Set Up the Frontend

#### Navigate to the Frontend Directory

After setting up Python dependencies, go to the `frontend` directory in your terminal or VS Code:
```bash
cd frontend
```

#### Install Frontend Dependencies

Run the following command to install the necessary frontend dependencies:
```bash
npm install axios react-router-dom react-icons font-awesome web-vitals --save-dev tsparticles @tsparticles/react
```

### 4. Run the Project Locally

#### Start the Development Server

To view the project in your browser, run:
```bash
npm run dev
```

This will start the development server, and you should be able to access the project in your browser.

---
## Tech Stack Used:
1. [Vite + ReactJS](https://v3.vitejs.dev/)
2. [TsParticleJS with React](https://github.com/tsparticles/react)
3. [Django](https://djangoproject.com/)
4. [Django Rest Framework](https://www.django-rest-framework.org/) 
5. For Frontend deployment Vercel.com [here](https://vercel.com/)
6. Icons from [Flaticon](https://flaticon.com/)

