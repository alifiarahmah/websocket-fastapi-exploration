# Websocket FastAPI Exploration

A simple application build with FastAPI, Websockets and React.

## Backend

### Requirements

- Python 3.8 or higher
- pip
- (Optional) virtualenv

### (Optional) Setup virtual environment,

**Bash**

```bash
cd backend
python -m venv venv
source venv/bin/activate
```

**Powershell**

```powershell
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1

```

**Command Prompt**

```bat
cd backend
python -m venv venv
.\venv\Scripts\activate.bat
```

### Install dependencies

```bash
pip install -r requirements.txt
```

### Run the application

```bash
uvicorn main:app --reload
```

By default, the application will run on `http://localhost:8000`.

### Deactivate virtual environment

```bash
deactivate
```

## Frontend

### Requirements

- Node.js
- pnpm

### Install dependencies

```bash
cd frontend
pnpm install
```

### Run the application

```bash
pnpm start
```

By default, the application will run on `http://localhost:5173`.
