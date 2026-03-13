This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



Steps Building this project
1. Install next app, ts(yes), ESLint?No, Tailwind CSS? Yes, `src/` directory?No,  App Router?Yes, import alias? No
2. Updating tailwind.config and globals.css files
3. Creating the Hero Section
4. Creating the Navbar Component
5. Creating the Footer Component
6. Creating the Car Catalogue Section(Searchbar)
7. Using rapidAPI, creating a function in utils folder for fetching the cars
8. Creating the CarCard component for the car cards in the catalogue section
9. Creating the Car Details Modal
10. Using another api for cars image(using generateCarImageUrl from utils folder)
11. Changing the searchParams from the SearchBar.tsx and getting the params in the page.tsx, then fetching the data according to the searchParams
12. Creating the CustomFilter component just under the SearchBar, updating the searchParams even there and fetching accordingly
13. Creating the ShowMore component

14. There is a bug in the server side rendering of the cars(after rendering, the website doesn't remains in the same position, it goes up to the top) so we are shifting from ssr to csr to fix this thing.

15. Changing some of the types of the Props since we changed the props while converting to CSR
16. Deploying it to vercel