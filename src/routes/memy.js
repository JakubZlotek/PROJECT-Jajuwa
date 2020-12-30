import express from "express";
import canvas from "canvas";
import { Canvas } from "canvas-constructor";
import path from "path";
const __dirname = path.resolve();

const router = express.Router();

router.get("/", (req, res) => {
  res.send("OK!");
});

router.get("/:img/:text", async (req, res) => {
  const bg = await canvas.loadImage(__dirname + "/src/data/bg.png");
  const img = await canvas.loadImage(
    __dirname + "/src/data/img/" + req.params.img + ".png"
  );

  let image = new Canvas(600, 600)
    .printImage(bg, 0, 0, 600, 600)
    .printImage(img, 75, 25, 450, 450)
    .setTextFont("32px Times New Roman")
    .setTextAlign("center")
    .setColor("#FFF")
    .printText(req.params.text, 300, 520)
    .toBuffer();

  res.set({ "Content-Type": "image/jpg" });
  res.send(image);
});

export default router;
