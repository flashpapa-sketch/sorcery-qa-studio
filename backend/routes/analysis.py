from fastapi import APIRouter, File, UploadFile, HTTPException
from pydantic import BaseModel
import logging

router = APIRouter()
logger = logging.getLogger(__name__)

@router.post("/analyze")
async def analyze_file(file: UploadFile = File(...)):
    if not file.filename.endswith(('.html', '.htm')):
        raise HTTPException(status_code=400, detail="Only HTML files allowed")
    
    content = await file.read()
    
    return {
        "file_name": file.filename,
        "issues": [
            {"type": "Link Error", "severity": "critical", "message": "Sample issue"}
        ],
        "score": 75,
        "critical_count": 1,
        "major_count": 2,
        "minor_count": 1
    }
