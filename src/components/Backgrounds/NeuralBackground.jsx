import React from "react";
import { Box } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { motion, useReducedMotion } from "framer-motion";

// Fixed node positions across a 1200x800 viewBox — hand-tuned for a
// balanced, organic-looking graph (not a regular grid).
const NODES = [
  { x: 80, y: 120 },
  { x: 220, y: 80 },
  { x: 360, y: 180 },
  { x: 140, y: 260 },
  { x: 300, y: 340 },
  { x: 460, y: 280 },
  { x: 580, y: 120 },
  { x: 720, y: 220 },
  { x: 880, y: 80 },
  { x: 1020, y: 180 },
  { x: 1120, y: 340 },
  { x: 960, y: 400 },
  { x: 820, y: 460 },
  { x: 660, y: 380 },
  { x: 500, y: 500 },
  { x: 340, y: 520 },
  { x: 180, y: 440 },
  { x: 100, y: 600 },
  { x: 260, y: 680 },
  { x: 440, y: 640 },
  { x: 600, y: 720 },
  { x: 760, y: 620 },
  { x: 920, y: 680 },
  { x: 1080, y: 580 },
];

// Edges connecting nearby nodes to form a coherent network.
const EDGES = [
  [0, 1], [0, 3], [1, 2], [1, 6], [2, 3], [2, 4], [2, 5],
  [3, 4], [3, 16], [4, 5], [4, 14], [4, 15],
  [5, 6], [5, 7], [5, 13], [6, 7], [6, 8],
  [7, 8], [7, 9], [7, 13], [8, 9], [9, 10], [9, 11],
  [10, 11], [10, 23], [11, 12], [11, 22],
  [12, 13], [12, 21], [13, 14], [14, 15], [14, 19],
  [15, 16], [15, 19], [16, 17], [16, 18], [17, 18],
  [18, 19], [18, 20], [19, 20], [20, 21], [21, 22], [22, 23],
];

// Subset of edges that get traveling "signal" pulses.
const PULSE_EDGES = [
  { from: 0, to: 1, duration: 3.2, delay: 0 },
  { from: 2, to: 5, duration: 4, delay: 0.8 },
  { from: 6, to: 8, duration: 3.5, delay: 1.5 },
  { from: 9, to: 11, duration: 4, delay: 0.3 },
  { from: 13, to: 14, duration: 3, delay: 1.2 },
  { from: 15, to: 19, duration: 4.5, delay: 0.5 },
  { from: 18, to: 20, duration: 3.2, delay: 2 },
  { from: 21, to: 22, duration: 3.8, delay: 0.9 },
];

const NeuralBackground = () => {
  const theme = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const isDark = theme.palette.mode === "dark";

  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const lineColor = alpha(theme.palette.text.primary, isDark ? 0.12 : 0.14);

  return (
    <Box
      aria-hidden
      sx={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
        // Soft radial fade so edges don't feel boxed-in
        maskImage:
          "radial-gradient(ellipse 80% 75% at 50% 50%, black 35%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 75% at 50% 50%, black 35%, transparent 100%)",
      }}
    >
      <Box
        component="svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      >
        {/* Static edges */}
        <g>
          {EDGES.map(([a, b], i) => (
            <line
              key={`edge-${i}`}
              x1={NODES[a].x}
              y1={NODES[a].y}
              x2={NODES[b].x}
              y2={NODES[b].y}
              stroke={lineColor}
              strokeWidth="1"
            />
          ))}
        </g>

        {/* Traveling signal pulses along select edges */}
        {!prefersReducedMotion && (
          <g>
            {PULSE_EDGES.map((edge, i) => {
              const from = NODES[edge.from];
              const to = NODES[edge.to];
              const color = i % 2 === 0 ? primary : secondary;
              return (
                <motion.g
                  key={`pulse-${i}`}
                  initial={{ x: from.x, y: from.y, opacity: 0 }}
                  animate={{
                    x: [from.x, to.x],
                    y: [from.y, to.y],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: edge.duration,
                    repeat: Infinity,
                    delay: edge.delay,
                    ease: "linear",
                    times: [0, 0.1, 0.9, 1],
                  }}
                  style={{
                    filter: `drop-shadow(0 0 6px ${color})`,
                  }}
                >
                  <circle r={2.5} fill={color} />
                </motion.g>
              );
            })}
          </g>
        )}

        {/* Nodes — pulsing glow */}
        <g>
          {NODES.map((node, i) => {
            if (prefersReducedMotion) {
              return (
                <circle
                  key={`node-${i}`}
                  cx={node.x}
                  cy={node.y}
                  r={3}
                  fill={primary}
                  opacity={0.7}
                />
              );
            }
            return (
              <motion.circle
                key={`node-${i}`}
                cx={node.x}
                cy={node.y}
                fill={primary}
                initial={{ r: 2.5, opacity: 0.5 }}
                animate={{
                  r: [2.5, 4.5, 2.5],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2.5 + (i % 4) * 0.5,
                  repeat: Infinity,
                  delay: (i * 0.17) % 3,
                  ease: "easeInOut",
                }}
                style={{
                  filter: `drop-shadow(0 0 3px ${alpha(primary, 0.6)})`,
                }}
              />
            );
          })}
        </g>
      </Box>
    </Box>
  );
};

export default NeuralBackground;
