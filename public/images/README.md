# Images

All images are stored locally. Replace placeholders with real photos when you have them.

## Logo
- `logo/logo.png` - Downloaded from ryderauto.co.uk (Ryder Motorcycles logo)

## Bikes
- `bikes/hero.jpg`, `workshop.jpg`, `adventure.jpg`, `sport.jpg`, `classic.jpg`, `kove.jpg` - Section/hero images
- `bikes/vehicles/{id}_1.jpg` - Per-bike images (e.g. 7713789_1.jpg)

## Workshop / Expert Servicing
- `workshopServiceImages` in `src/lib/data.ts` uses `downthemall/about-first-*.jpg` and `about-second-*.jpg`
- For more workshop photos: download from [Ryder Motorcycles Facebook](https://www.facebook.com/FuelingYourFreedom) and save to `downthemall/`, then update `workshopServiceImages` in `data.ts`

## Replacing with real images
1. Save bike photos to `bikes/vehicles/{vehicleId}_1.jpg` (match the ID from the listing)
2. Replace section images in `bikes/` folder
3. Add workshop photos from Facebook to `downthemall/` and reference in `workshopServiceImages`
4. Run `npm run dev` to preview
