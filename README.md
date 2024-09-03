
# 🚀 Monorepo Project Overview

This project is a **monorepo setup** using **Turborepo**, which includes multiple applications and packages. The primary applications are built using **Next.js** 🖼️, and the project leverages **TypeScript** 🟦 for static type checking, **ESLint** 🔍 for code linting, and **Prettier** 🎨 for code formatting. The project also uses **Prisma** 🗄️ as an ORM for database interactions and **Redux** 🌐 for state management.

## 🖼️ Screenshot

![Payee App Screenshot](./screenshots/a.png?raw=true)
![Payee App Screenshot](./screenshots/b.png?raw=true)
![Payee App Screenshot](./screenshots/c.png?raw=true)

## 🏗️ Applications and Packages

### 🧑‍💻 User App (`user-app`)
- A **Next.js** application that includes various components like `AddMoneyCard`, `BalanceCard`, `OnRampTransactionCard`, `SendMoneyCard`, `SideBarMap`, and `ProviderRedux`.
- Uses **Tailwind CSS** 🌬️ for styling.
- Implements authentication using **NextAuth** 🔐 with credentials and **GitHub providers**.
- Contains pages for **user signup**, **dashboard**, **transactions**, and **P2P transfers**.
- Interacts with a **PostgreSQL** 🐘 database using **Prisma**.

### 🛍️ Merchant App (`merchant-app`)
- Another **Next.js** application similar to the user app.
- Uses custom fonts and **Tailwind CSS** 🌬️ for styling.
- Contains a **layout** and a **home page**.

### 🏦 Bank Webhook (`bank-webhook`)
- An **Express.js** 🚂 application that handles webhooks from banks.
- Uses **Prisma** 🗄️ to interact with the database.

### 🎨 UI Package (`@repo/ui`)
- A shared **React** component library used by both `user-app` and `merchant-app`.
- Contains components like `Button`, `Card`, `Code`, `AppBar`, `Select`, and `TextInput`.

### 🗄️ Database Package (`@repo/database`)
- Contains **Prisma** schema and client setup for database interactions.
- Includes models for `User`, `Merchant`, `OnRampTransaction`, `Balance`, and `p2pTransfer`.

### 🛒 Store Package (`@repo/store`)
- Contains **Redux** store setup and slices for state management.
- Includes a sample slice for managing **counter** state.

### 🔧 ESLint Config Package (`@repo/eslint-config`)
- Contains shared **ESLint** configurations for the monorepo.

### 🟦 TypeScript Config Package (`@repo/typescript-config`)
- Contains shared **TypeScript** configurations for the monorepo.

## ✨ Key Features
- **Authentication** 🔐: Uses **NextAuth** for user authentication with credentials and **GitHub** providers.
- **State Management** 🌐: Uses **Redux Toolkit** for state management.
- **Database** 🗄️: Uses **Prisma ORM** to interact with a **PostgreSQL** database.
- **Styling** 🌬️: Uses **Tailwind CSS** for styling components and pages.
- **Monorepo Setup** 🏗️: Uses **Turborepo** to manage multiple applications and packages in a single repository.
- **CI/CD** ⚙️: Includes **GitHub Actions** workflows for building on pull requests and deploying to **Docker Hub**.

## 🧩 Example Components and Pages
- **`AddMoneyCard`**: A component for adding money to the user's account.
- **`BalanceCard`**: A component for displaying the user's balance.
- **`OnRampTransactionCard`**: A component for displaying recent on-ramp transactions.
- **`SendMoneyCard`**: A component for sending money to another user.
- **`SideBarMap`**: A component for rendering the sidebar navigation.
- **`ProviderRedux`**: A component for providing the **Redux** store to the application.
- **SignUp**: A page for user signup.
- **Dashboard**: A page for the user dashboard.
- **Transfers**: A page for managing transfers.
- **P2P**: A page for managing **P2P transfers**.

## 🗃️ Prisma Models
- **`User`**: Represents a user in the system.
- **`Merchant`**: Represents a merchant in the system.
- **`OnRampTransaction`**: Represents an on-ramp transaction.
- **`Balance`**: Represents the balance of a user.
- **`p2pTransfer`**: Represents a **P2P transfer** between users.

## ⚙️ GitHub Actions Workflows
- **Build on PR**: A workflow that runs on pull requests to the master branch, installs dependencies, generates Prisma client, and runs the build.
- **Build and Deploy to Docker Hub**: A workflow that runs on pushes to the main branch, logs in to **Docker Hub**, builds and pushes a Docker image, and verifies the pushed image.

---

This project is a comprehensive example of a **modern web application** 🌐 using a **monorepo structure**, **TypeScript**, **Next.js**, **Prisma**, **Redux**, and **Tailwind CSS**. It includes robust **authentication**, **state management**, and **database interaction** features, making it a solid foundation for building **scalable** web applications.
