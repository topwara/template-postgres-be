import "dotenv/config"

// Stage Names
export const STAGE: "dev" | "prod" = process.env.STAGE as any

// Security
export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
export const ACCESS_TOKEN_LIFE = "1d"
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET
export const REFRESH_TOKEN_LIFE = "2d"

// Send Email
export const SENDER_PROVIDER = "smtp.gmail.com"
export const SENDER_PORT = 465
export const SENDER_MAIL = "datability.test.mailer@gmail.com"
export const SENDER_PASS = process.env.SENDER_PASS

// Name Preset
export const APPLICATION_NAME = "TemplatePostgresBE"
