
# Sample User Module

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure PostgreSQL

Ensure PostgreSQL is running locally and update `DATABASE_URL` in `.env` if different from default.

Default:
```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/sampledb"
```

### 3. Run Prisma Migrations

```bash
npx prisma migrate dev --name init
```

### 4. Start the Server

```bash
npm run start:dev
```

### 5. Auth Token

Use the following header in requests:
```
Authorization: Bearer hardcoded-token
```

## Endpoint

**POST /register**  
Body:
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```
