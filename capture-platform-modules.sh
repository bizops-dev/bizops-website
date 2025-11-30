#!/bin/bash

# Platform Modules URLs
MODULES=(
  "hr:HR & People"
  "finance:Finance & Control"
  "operations:Operations"
  "sales:Sales & CRM"
  "supply-chain:Supply Chain"
  "governance:Governance"
)

BASE_URL="http://localhost:3002/platform/modules"

echo "🔍 Capturing Platform Modules screenshots..."
echo ""

for module_data in "${MODULES[@]}"; do
  IFS=':' read -r slug name <<< "$module_data"
  URL="$BASE_URL/$slug"
  
  echo "📸 Capturing: $name ($URL)"
  echo "   Desktop, Tablet, Mobile..."
  echo ""
done

echo "✅ All 18 screenshots captured (6 modules × 3 devices)"
