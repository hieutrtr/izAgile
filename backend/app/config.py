import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class Settings:
    OPENAI_API_KEY: str = os.getenv("OPENAI_API_KEY")
    MONGODB_URL: str = os.getenv("MONGODB_URL")
    MONGODB_DB_NAME: str = os.getenv("MONGODB_DB_NAME")

settings = Settings()