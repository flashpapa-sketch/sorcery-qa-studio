import os
from supabase import create_client, Client
from dotenv import load_dotenv
import logging

load_dotenv()
logger = logging.getLogger(__name__)

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

supabase_client: Client = None

async def init_db():
    global supabase_client
    try:
        supabase_client = create_client(SUPABASE_URL, SUPABASE_KEY)
        logger.info("✅ Supabase connected")
    except Exception as e:
        logger.error(f"❌ Supabase error: {e}")
        raise

async def get_db():
    global supabase_client
    if supabase_client is None:
        await init_db()
    return supabase_client
