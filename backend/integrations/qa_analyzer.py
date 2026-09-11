import logging
import re
from typing import Dict, Any, List

logger = logging.getLogger(__name__)

class GameQAAnalyzer:
    def __init__(self):
        self.issues = []
        self.paragraphs = {}
        self.choices = {}
        self.variables = set()
        self.endings = []
    
    def analyze(self, html_content: str) -> Dict[str, Any]:
        self.issues = []
        self.paragraphs = {}
        
        # Basic analysis
        if "goto(" not in html_content:
            self.issues.append({
                "type": "No navigation",
                "severity": "major",
                "message": "No goto() calls found",
                "details": "Game may not have branching",
                "suggestion": "Add navigation links"
            })
        
        return {
            "total_issues": len(self.issues),
            "critical_count": len([i for i in self.issues if i["severity"] == "critical"]),
            "major_count": len([i for i in self.issues if i["severity"] == "major"]),
            "minor_count": len([i for i in self.issues if i["severity"] == "minor"]),
            "issues": self.issues,
            "score": 100 - (len(self.issues) * 10)
        }

if __name__ == "__main__":
    logger.info("✅ QA Analyzer loaded")
