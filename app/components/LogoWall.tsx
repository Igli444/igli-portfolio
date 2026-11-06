"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Client } from "../lib/data";

export default function LogoWall({
  platform,
  clients,
}: {
  platform: string;
  clients: Client[];
}) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
        {platform}
      </h3>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {clients.map((client, i) => (
          <motion.a
            key={client.name}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="group relative flex h-28 flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/50 hover:shadow-[0_16px_40px_-20px_rgba(217,143,78,0.4)]"
          >
            {client.logo ? (
              <span className="relative h-14 w-full rounded-lg bg-[#f1ece2] p-3 transition-transform duration-300 group-hover:scale-[1.03]">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="160px"
                  className="object-contain p-1"
                />
              </span>
            ) : (
              <span className="font-display text-base font-medium text-muted transition-colors group-hover:text-foreground">
                {client.name}
              </span>
            )}
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-soft opacity-0 transition-opacity group-hover:opacity-100">
              Visit ↗
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
