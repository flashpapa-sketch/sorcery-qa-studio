#!/usr/bin/env python3
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))

print("🔍 Testing imports...")
try:
    from integrations.qa_analyzer import GameQAAnalyzer
    print("✅ GameQAAnalyzer imported")
    
    analyzer = GameQAAnalyzer()
    print("✅ GameQAAnalyzer instantiated")
    
    print("✅ All imports successful")
except Exception as e:
    print(f"❌ Error: {e}")
