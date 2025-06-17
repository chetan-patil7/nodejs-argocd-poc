const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js + ArgoCD! I have used GitOps tool to demonstrate this');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
