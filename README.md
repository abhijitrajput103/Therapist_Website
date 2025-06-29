# Therapist Website – Dr. Serena Blake

A modern, responsive website for a clinical psychologist, built with Next.js 15, React, and Tailwind CSS. This project is designed for therapists or solo practitioners who want a professional online presence with easy customization.

---

## ✨ Features
- Responsive, accessible design for all devices
- Professional About, Services, FAQ, and Contact sections
- Service cards with icons, images, and detailed descriptions
- Contact form with validation
- SEO-friendly metadata
- Easy image management (headshot, service images)
- Ready for deployment on Vercel, Netlify, or GitHub Pages (static export)

---

## 🛠️ Tech Stack
- [Next.js 15](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Lucide Icons](https://lucide.dev/)
- [next/image](https://nextjs.org/docs/app/api-reference/components/image)

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/therapist-website.git
cd therapist-website
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. (Optional) Environment Variables
If you use the contact form with a backend (MongoDB), create a `.env.local` file:
```env
MONGODB_URI=your_mongodb_connection_string
```
If you don't use the backend, you can ignore this step.

### 4. Run the Development Server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the site.

---

## 🖼️ Adding Images
- **Headshot:** Place your therapist photo in `public/images/serena.avif` (or update the path in `About.tsx`).
- **Service Images:** Place images in `public/images/services/` and update the filenames in `src/components/Services.tsx`.
  - Example: `public/images/services/anxiety-stress.jpg`
- Images are responsive and will display with the correct aspect ratio automatically.

---

## 🧹 Linting & Build
- Run linter: `npm run lint`
- Build for production: `npm run build`
- Export static site (for GitHub Pages): `npx next export`

---

## 🌐 Deployment

### **Recommended: Vercel**
1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com/), sign in with GitHub, and import your repo.
3. Click "Deploy". Done!

### **GitHub Pages (Static Export)**
1. Run `npm run build && npx next export` (creates `out/` folder).
2. Push the contents of `out/` to the `gh-pages` branch or `/docs` folder.
3. Set GitHub Pages to serve from that branch/folder.

## 📝 Customization
- **Edit content:**
  - About: `src/components/About.tsx`
  - Services: `src/components/Services.tsx`
  - FAQ: `src/components/FAQ.tsx`
  - Contact: `src/components/ContactForm.tsx`
- **Change colors/fonts:** Edit `tailwind.config.js` and `globals.css`.
- **Add more pages:** Use the `src/app/` directory.

---

## 🙏 Credits
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Freepik](https://freepik.com/) for images

---

## 📄 License
This project is open source and free to use for personal and commercial projects. Attribution appreciated but not required.
