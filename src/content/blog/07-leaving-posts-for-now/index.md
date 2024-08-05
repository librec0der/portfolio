---
title: "LibreC0der:First Post"
summary: "A quick update on the website"
date: "Aug 6 2024"
draft: false
tags:
- Update
- librec0der
---
I have nothing to say now it's the first commit of the website so I'll start adding projects blog posts soon. 

I want to add this functionality to the website for now I'll post this instructions for my future self

# How to Make Some Posts Private on an AstroJS Blog

In this tutorial, you will learn how to make specific posts on your AstroJS blog private and accessible only via a password. This is useful if you want to share certain content selectively without making it publicly available.

## Step 1: Install Necessary Packages

First, you need to install `dotenv` to manage environment variables and a package for handling cookies, such as `cookie-parser`.

```bash
npm install dotenv cookie-parser
```

### Step 2: Configure Environment Variables (`step2.md`)

# Step 2: Configure Environment Variables

Create a `.env` file at the root of your project to store your password securely.

```env
PRIVATE_POST_PASSWORD=your_secure_password
```

# Step 3: Create Middleware for Password Protection

Create a middleware to handle password authentication and cookie management.

1. Create a `middleware` directory if it doesn't exist.
2. Create a file `authMiddleware.js` in the `middleware` directory.

```javascript
// src/middleware/authMiddleware.js
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
config();

export function authMiddleware(req, res, next) {
  cookieParser()(req, res, () => {
    if (req.path.startsWith('/private')) {
      const cookiePassword = req.cookies['auth'];
      const envPassword = process.env.PRIVATE_POST_PASSWORD;

      if (cookiePassword === envPassword) {
        next();
      } else if (req.method === 'POST' && req.body.password === envPassword) {
        res.cookie('auth', envPassword, { maxAge: 900000, httpOnly: true });
        res.redirect(req.path);
      } else {
        res.status(401).send(`
          <form method="POST">
            <input type="password" name="password" placeholder="Enter password" required>
            <button type="submit">Submit</button>
          </form>
        `);
      }
    } else {
      next();
    }
  });
}
```


# Step 4: Apply Middleware to Your Astro Project

Edit your `astro.config.mjs` to include the middleware.

```javascript
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import { authMiddleware } from './src/middleware/authMiddleware';

export default defineConfig({
  output: 'server',
  adapter: node(),
  server: {
    middleware: [authMiddleware],
  },
});
```



# Step 5: Create a Private Route

Create a private blog post or page. Place your private content under a specific route like `/private`.

1. Create a `private` directory inside the `src/pages` directory.
2. Add your private Markdown or MDX posts here.

For example, create `src/pages/private/my-private-post.md`:

```markdown
---
title: "My Private Post"
---
```
# This is a Private Post

Content of the private post.

# Step 6: Run Your Astro Project

Start your Astro project to test the implementation.

```bash
npm start
```


# Summary

This implementation uses middleware to protect routes starting with `/private`. It prompts users for a password and sets a cookie upon successful authentication. This is a basic protection mechanism suitable for simple use cases. For more robust security, consider using proper authentication services or OAuth mechanisms.


*Tutorial written with the help of ChatGPT, a large language model trained by OpenAI.*
