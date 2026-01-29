#!/usr/bin/env python3
"""
Batch convert Tailwind CSS classes to Bootstrap and Material UI equivalents
"""
import os
import re
from pathlib import Path

# Define the project root
project_root = Path(__file__).parent

# File paths to convert
files_to_convert = [
    'src/pages/PoliceDashboard.jsx',
    'src/pages/BlockchainLogs.jsx',
    'src/pages/OwnerPanel.jsx',
    'src/pages/Dashboard.jsx',
    'src/pages/Auth.jsx',
    'src/pages/AreaSelection.jsx',
    'src/pages/HouseDetails.jsx',
    'src/pages/RequestDetails.jsx',
    'src/pages/OwnerProperties.jsx',
    'src/pages/TenantRequests.jsx',
    'src/pages/VerificationQueue.jsx',
    'src/pages/HistoryRequests.jsx',
    'src/pages/MyRequests.jsx',
    'src/pages/Neighborhood.jsx',
    'src/components/Sidebar.jsx',
    'src/components/HouseCard.jsx',
    'src/components/StatusBadge.jsx',
]

# Mapping of Tailwind to Bootstrap/MUI classes
replacements = [
    # Layout
    (r'h-\[calc\(100vh-4rem\)\]', 'min-h-screen'),  # Will be handled by Box component
    (r'min-h-screen', ''),  # MUI Box handles this
    (r'bg-transparent', 'sx={{ backgroundColor: "transparent" }}'),
    (r'pt-8', 'sx={{ pt: 4 }}'),
    (r'pt-4', 'sx={{ pt: 2 }}'),
    (r'pt-16', 'sx={{ pt: 8 }}'),
    (r'pb-8', 'sx={{ pb: 4 }}'),
    (r'pb-16', 'sx={{ pb: 8 }}'),
    (r'px-4', 'sx={{ px: 2 }}'),
    (r'px-6', 'sx={{ px: 3 }}'),
    (r'py-4', 'sx={{ py: 2 }}'),
    (r'py-6', 'sx={{ py: 3 }}'),
    (r'py-8', 'sx={{ py: 4 }}'),
    (r'py-12', 'sx={{ py: 6 }}'),
    (r'mb-4', 'sx={{ mb: 2 }}'),
    (r'mb-6', 'sx={{ mb: 3 }}'),
    (r'mb-8', 'sx={{ mb: 4 }}'),
    (r'mb-12', 'sx={{ mb: 6 }}'),
    (r'mt-4', 'sx={{ mt: 2 }}'),
    (r'gap-4', 'spacing={2}'),
    (r'gap-6', 'spacing={3}'),
    (r'gap-8', 'spacing={4}'),
    # Text
    (r'text-4xl', 'variant="h3"'),
    (r'text-3xl', 'variant="h4"'),
    (r'text-2xl', 'variant="h5"'),
    (r'text-xl', 'variant="h6"'),
    (r'text-lg', 'variant="body1"'),
    (r'text-sm', 'variant="body2"'),
    (r'text-center', 'align="center"'),
    (r'font-bold', 'sx={{ fontWeight: 700 }}'),
    (r'font-semibold', 'sx={{ fontWeight: 600 }}'),
    (r'text-gray-900', 'sx={{ color: "#1a1a1a" }}'),
    (r'text-gray-600', 'sx={{ color: "#666" }}'),
    (r'text-gray-700', 'sx={{ color: "#333" }}'),
    (r'text-white', 'sx={{ color: "#fff" }}'),
    (r'text-jet-black', 'sx={{ color: "#1A2D29" }}'),
    (r'text-pine-teal', 'sx={{ color: "#2d5f6f" }}'),
    # Colors
    (r'bg-jet-black', 'sx={{ backgroundColor: "#1A2D29" }}'),
    (r'bg-pine-teal', 'sx={{ backgroundColor: "#2d5f6f" }}'),
    (r'bg-ash-grey', 'sx={{ backgroundColor: "#808080" }}'),
    (r'bg-grey-olive', 'sx={{ backgroundColor: "#5a6b5b" }}'),
    (r'bg-porcelain', 'sx={{ backgroundColor: "#f0f0f0" }}'),
    (r'bg-white', 'sx={{ backgroundColor: "#fff" }}'),
    (r'bg-gray-50', 'sx={{ backgroundColor: "#fafafa" }}'),
    (r'bg-gray-100', 'sx={{ backgroundColor: "#f5f5f5" }}'),
    (r'bg-green-100', 'sx={{ backgroundColor: "#e8f5e9" }}'),
    (r'bg-green-800', 'sx={{ backgroundColor: "#2e7d32" }}'),
    (r'bg-orange-100', 'sx={{ backgroundColor: "#ffe0b2" }}'),
    (r'bg-orange-800', 'sx={{ backgroundColor: "#e65100" }}'),
    # Flex/Grid
    (r'flex flex-col', 'sx={{ display: "flex", flexDirection: "column" }}'),
    (r'flex', 'sx={{ display: "flex" }}'),
    (r'grid md:grid-cols-2', 'container sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" } }}'),
    (r'grid md:grid-cols-3', 'container sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" } }}'),
    (r'grid', 'container sx={{ display: "grid" }}'),
    (r'justify-between', 'sx={{ justifyContent: "space-between" }}'),
    (r'justify-center', 'sx={{ justifyContent: "center" }}'),
    (r'items-center', 'sx={{ alignItems: "center" }}'),
    (r'items-start', 'sx={{ alignItems: "flex-start" }}'),
    # Borders and Shadows
    (r'rounded-xl', 'sx={{ borderRadius: "12px" }}'),
    (r'rounded-lg', 'sx={{ borderRadius: "8px" }}'),
    (r'rounded-full', 'sx={{ borderRadius: "9999px" }}'),
    (r'shadow-lg', 'elevation={8}'),
    (r'shadow-xl', 'elevation={12}'),
    (r'shadow', 'elevation={4}'),
    (r'border', 'sx={{ border: "1px solid #e0e0e0" }}'),
    (r'border-gray-200', 'sx={{ borderColor: "#e0e0e0" }}'),
    # Other
    (r'mx-auto', 'sx={{ mx: "auto" }}'),
    (r'max-w-7xl', 'maxWidth="lg"'),
    (r'max-w-6xl', 'maxWidth="md"'),
    (r'max-w-2xl', 'maxWidth="sm"'),
    (r'overflow-x-auto', 'sx={{ overflowX: "auto" }}'),
    (r'overflow-auto', 'sx={{ overflow: "auto" }}'),
]

def convert_file(file_path):
    """Convert a single file from Tailwind to Material UI"""
    full_path = project_root / file_path
    
    if not full_path.exists():
        print(f"File not found: {file_path}")
        return False
    
    try:
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply replacements
        for pattern, replacement in replacements:
            content = re.sub(pattern, replacement, content)
        
        # Check if content changed
        if content != original_content:
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✓ Converted: {file_path}")
            return True
        else:
            print(f"- No changes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"✗ Error converting {file_path}: {e}")
        return False

if __name__ == "__main__":
    print("Converting Tailwind CSS to Material UI/Bootstrap...")
    print("=" * 60)
    
    converted = 0
    for file_path in files_to_convert:
        if convert_file(file_path):
            converted += 1
    
    print("=" * 60)
    print(f"Conversion complete! {converted} files updated.")
