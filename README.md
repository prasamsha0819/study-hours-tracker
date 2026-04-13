# 👑 Academic Weapon of the Week

A website for tracking weekly study hours for sorority members. 
The girl with the most study hours each week is crowned the Academic Weapon of the Week!

## Features
- Weekly winner spotlight with photo
- Past weeks hall of fame
- Password-protected admin panel
- Data stored in Supabase

## How It Works
- Admin visits `/admin.html` and enters each girl's study hours for the week
- The site automatically crowns whoever studied the most
- All girls can visit the main page to see the winner

## Tech Stack
- HTML, CSS, JavaScript
- Supabase (database)
- Vercel (hosting)
- GitHub (version control)

## How To Update Weekly
1. Go to `yoursite.vercel.app/admin.html`
2. Enter the password
3. Enter each girl's hours for the week
4. Hit Crown the Winner 👑
5. The site updates automatically for everyone

## How To Add/Update Photos
1. Add the new photo to the `images/` folder
2. Run `git add .`
3. Run `git commit -m "updated photo"`
4. Run `git push`
5. Vercel redeploys automatically

## Live Site
[study-hours-tracker.vercel.app](https://study-hours-tracker.vercel.app)
