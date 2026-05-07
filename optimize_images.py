import os
import subprocess
import sys

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

try:
    from PIL import Image
    import pillow_heif
except ImportError:
    print("Installing necessary libraries...")
    install("pillow")
    install("pillow-heif")
    from PIL import Image
    import pillow_heif

def convert_and_optimize(source_folder, target_folder):
    if not os.path.exists(target_folder):
        os.makedirs(target_folder)
        print(f"Created folder: {target_folder}")

    if not os.path.exists(source_folder):
        print(f"Error: Source folder {source_folder} not found!")
        return

    files = [f for f in os.listdir(source_folder) if f.lower().endswith('.heic')]
    
    if not files:
        print(f"No .HEIC files found in {source_folder}")
        return

    print(f"Found {len(files)} files. Optimizing for speed...")

    for filename in files:
        source_path = os.path.join(source_folder, filename)
        target_path = os.path.join(target_folder, filename.lower().replace('.heic', '.jpg'))
        
        try:
            heif_file = pillow_heif.read_heif(source_path)
            image = Image.frombytes(
                heif_file.mode,
                heif_file.size,
                heif_file.data,
                "raw",
            )
            
            # 1. Resize: Max width 1200px (Plenty for a web gallery)
            max_size = 1200
            if image.width > max_size:
                ratio = max_size / float(image.width)
                new_height = int(float(image.height) * float(ratio))
                image = image.resize((max_size, new_height), Image.Resampling.LANCZOS)
                
            # 2. Compress: Quality 70 (Sweet spot for web)
            # 3. Optimize flag: Further reduces size
            image.save(target_path, "JPEG", quality=70, optimize=True)
            
            size_kb = os.path.getsize(target_path) / 1024
            print(f"Optimized: {filename} -> {os.path.basename(target_path)} ({size_kb:.1f} KB)")
        except Exception as e:
            print(f"Failed to convert {filename}: {e}")

    print("\nOptimization Complete!")
    print(f"All optimized images are now in: {target_folder}")

if __name__ == "__main__":
    # Note: 001 is in the parent directory of pacol-app
    SOURCE = "../001"
    TARGET = "public/gallery"
    
    convert_and_optimize(SOURCE, TARGET)
