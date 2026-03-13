import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, company, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Veuillez remplir tous les champs obligatoires." });
    }

    // Configure Nodemailer
    // Note: For Gmail, you need an App Password if 2FA is enabled
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "orapack.sarl@gmail.com",
        pass: process.env.EMAIL_PASS, // This should be set in environment variables
      },
    });

    const mailOptions = {
      from: email,
      to: "orapack.sarl@gmail.com",
      subject: `Nouveau message de contact - ${name} (${company || 'Sans entreprise'})`,
      text: `
        Nom: ${name}
        Entreprise: ${company || 'N/A'}
        Email: ${email}
        
        Message:
        ${message}
      `,
      replyTo: email
    };

    try {
      // If EMAIL_PASS is not set, we simulate success for demo purposes but log a warning
      if (!process.env.EMAIL_PASS) {
        console.warn("EMAIL_PASS non configuré. Simulation de l'envoi du message.");
        console.log("Message reçu:", mailOptions);
        return res.status(200).json({ message: "Message reçu (Mode Simulation). Veuillez configurer EMAIL_PASS pour l'envoi réel." });
      }

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Votre message a été envoyé avec succès !" });
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      res.status(500).json({ error: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
