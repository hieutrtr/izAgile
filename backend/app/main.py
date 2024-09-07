from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import proposals

app = FastAPI()

# Configure CORS
origins = [
    "http://localhost:3000",  # React app's development server
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(proposals.router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Welcome to the Proposal Generator API"}