from PIL import Image

try:
    img = Image.open('public/frame.jpg')
    w, h = img.size
    print(f"Image dimensions: {w}x{h}")
    
    # Crop the bottom right corner
    crop_x_start = w - 350
    crop_y_start = h - 150
    crop = img.crop((crop_x_start, crop_y_start, w, h))
    crop.save('public/crop_corner.jpg')
    print("Cropped corner saved to public/crop_corner.jpg")
except Exception as e:
    print("Error:", e)
