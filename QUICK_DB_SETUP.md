# 🚀 Быстрая настройка базы данных для продакшена

## Срочное решение (5 минут)

### 1. Neon Database (Рекомендуется - БЕСПЛАТНО)

1. **Перейдите на [neon.tech](https://neon.tech)**
2. **Зарегистрируйтесь** (можно через GitHub)
3. **Создайте проект** - выберите регион ближайший к вам
4. **Скопируйте DATABASE_URL** - будет выглядеть примерно так:
   ```
   postgresql://username:password@ep-cool-lab-123456.us-east-1.aws.neon.tech/neondb?sslmode=require
   ```

### 2. Настройка в Vercel

1. Откройте [Vercel Dashboard](https://vercel.com/dashboard)
2. Найдите проект `website-3`
3. Зайдите в **Settings** → **Environment Variables**
4. Нажмите **Add**:
   - **Name**: `DATABASE_URL`
   - **Value**: вставьте скопированную строку подключения
   - **Environment**: выберите **Production**, **Preview**, **Development**
5. Нажмите **Save**

### 3. Redeploy

1. В Vercel перейдите в **Deployments**
2. Найдите последний деплой и нажмите **⋯** → **Redeploy**
3. Или просто сделайте новый push в GitHub

### 🚀 Автоматическая инициализация

База данных будет автоматически инициализирована при деплое:
- Таблицы создаются автоматически
- Проверяется подключение к базе
- Не нужны дополнительные миграции

## Альтернативы (тоже бесплатные):

### Planetscale (MySQL)
```
DATABASE_URL="mysql://username:password@aws.connect.psdb.cloud/database-name?sslaccept=strict"
```

### Supabase (PostgreSQL)
```
DATABASE_URL="postgresql://postgres:password@db.xxx.supabase.co:5432/postgres"
```

## После настройки базы данных:

1. Выполните миграцию в продакшене:
   ```bash
   npx prisma migrate deploy
   ```

2. Или создайте миграцию локально и push:
   ```bash
   npx prisma migrate dev --name init
   ```

## Проверка:

После redeploy ваше приложение должно работать без ошибок Prisma!

---

**⚡ ВАЖНО**: Neon дает 0.5GB бесплатно - этого достаточно для тестирования и небольших проектов.
