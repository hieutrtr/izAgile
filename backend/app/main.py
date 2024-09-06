from fastapi import FastAPI
from app.routes import proposals

app = FastAPI()

app.include_router(proposals.router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Welcome to the Proposal Generator API"}