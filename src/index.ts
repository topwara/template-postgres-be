// Import
import app from "./app"

// =========================== index.ts ===========================

// log express routes output to use
console.log("\n===============================")
console.log("🚀 Welcome to template-postgres-be 🚀\n")
app._router.stack.forEach((_stack: any) => {
  if (_stack.route) console.log(`==> http://localhost:3000` + _stack.route.path)
})
console.log("\n===============================")

// express listen running on port_
app.listen(3000)
